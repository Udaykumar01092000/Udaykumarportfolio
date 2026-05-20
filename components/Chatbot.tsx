// components/Chatbot.tsx
'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ArrowUp, X, MessageCircle } from 'lucide-react'

const YOUR_WA_NUMBER = '916300919562' // your number with country code, no + or spaces
const WELCOME_MESSAGE_ID = 1

const WELCOME_MESSAGE = {
  id: WELCOME_MESSAGE_ID,
  sender: 'bot',
  text: "Hi there! 👋 I'm Uday Kumar, a Frontend Developer. Have a Opportunity, project, or question? Send me a message and connect with me on WhatsApp.",
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [sent, setSent] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send() {
    const text = input.trim()
    if (!text) return

    // Add user message to UI
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text }])
    setInput('')
    setSent(true)

    // Show "reply" message after short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Got it! Click below to send this on WhatsApp — I'll reply as soon as possible 🚀",
        },
      ])
    }, 800)

    // Open WhatsApp with pre-filled message
    setTimeout(() => {
      const encoded = encodeURIComponent(text)
      window.open(`https://wa.me/${YOUR_WA_NUMBER}?text=${encoded}`, '_blank')
    }, 1200)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        suppressHydrationWarning
        className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] shadow-[0_8px_32px_rgba(135,80,247,0.45)] flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
      >
        {open
          ? <X size={22} />
          : <MessageCircle size={22} />
        }
      </button>

      {/* Chat window */}
      <div className={`fixed bottom-24 left-4 right-4 z-50 flex h-[480px] max-h-[calc(100dvh-8rem)] origin-bottom flex-col overflow-hidden rounded-2xl border border-[var(--chatbot-border)] bg-[var(--chatbot-surface)] shadow-[0_24px_64px_rgba(0,0,0,0.6)] transition-all duration-500 sm:right-auto sm:left-6 sm:w-[360px] sm:max-h-[480px] sm:origin-bottom-left ${
        open
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#8750f7] to-[#2a1454]">
          <div className="relative">
            <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm">
              U
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-[#8750f7]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Uday Portfolio</p>
            <p className="text-white/60 text-xs mt-1">Typically replies instantly</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white text-[10px] font-black mr-2 mt-1 shrink-0">
                  U
                </div>
              )}
              <div className="max-w-[75%]">
                <div className={`break-words rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                  m.sender === 'user'
                    ? 'bg-[#8750f7] text-white rounded-br-none'
                    : 'rounded-bl-none bg-[var(--chatbot-bot-bubble)] text-[var(--chatbot-bot-text)]'
                }`}>
                  {m.text}
                </div>
                {m.id === WELCOME_MESSAGE_ID && (
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex rounded-xl bg-[#8750f7] px-4 py-2 text-sm font-semibold !text-white transition hover:bg-[#7040e0]"
                  >
                    Contact
                  </Link>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t border-[var(--chatbot-border)] p-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !sent && send()}
            placeholder={sent ? 'Check WhatsApp for reply...' : 'Type a message...'}
            disabled={sent}
            suppressHydrationWarning
            className="flex-1 rounded-xl bg-[var(--chatbot-input-background)] px-4 py-2.5 text-sm text-[var(--chatbot-input-text)] outline-none placeholder:text-[var(--chatbot-input-placeholder)] disabled:opacity-50"
          />
          <button
            onClick={send}
            disabled={!input.trim() || sent}
            suppressHydrationWarning
            className="h-9 w-9 rounded-xl bg-[#8750f7] flex items-center justify-center text-white transition hover:bg-[#7040e0] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </>
  )
}
