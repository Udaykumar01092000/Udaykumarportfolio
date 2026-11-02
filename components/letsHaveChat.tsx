import React from "react";

/**
 * "Let's have a chat" – full CTA section (React + Tailwind CSS)
 *
 * Matches the screen recording:
 *  - dark purple page backdrop above and below (#0D0413)
 *  - full-width near-black panel (#040508), ~540px tall, content centred
 *  - small label, big purple heading, right-aligned email + circled ↗ arrow
 *  - infinite per-letter wave: a white highlight sweeps left → right, letters
 *    get bolder/whiter, fade through lavender back to purple, short rest, repeat
 *
 * Props
 *   label     small text above the heading
 *   words     heading words
 *   email     email text + mailto link
 *   cycle     seconds for one sweep + rest   (reference ≈ 2.7s)
 *   stagger   seconds between neighbouring letters (sweep speed)
 *   backdrop  true  → renders the dark purple bands above/below the panel
 *             false → renders only the black panel (use when your page
 *                     already provides the surrounding background)
 */
export default function LetsHaveAChat({
    label = "Want to start a project?",
    words = ["Let’s", "have", "a", "chat"],
    email = "santhoshsss2362@gmail.com",
    cycle = 2.7,
    stagger = 0.075,
    backdrop = true,
}) {
    // Running index so the wave travels continuously across word gaps
    let letterIndex = 0;

    return (
        <div
            className={`chat-root w-full ${backdrop ? "bg-[#0D0413]" : ""
                }`}
        >
            <section
                id="contact"
                className="
          chat-panel relative flex w-full items-center justify-center
          min-h-[360px] md:min-h-[540px]
          bg-[#040508] px-5 py-16 md:py-0
          shadow-[0_0_3px_2px_rgba(7,3,12,0.9)]
        "
            >
                {/* Content block – shrink-wraps the heading so the email can sit
            flush with the heading's right edge */}
                <div className="flex w-fit max-w-full flex-col">
                    {/* Small label */}
                    <p className="m-0 mb-4 text-sm font-medium text-white md:mb-6 md:text-base">
                        {label}
                    </p>

                    {/* Animated heading */}
                    <h2
                        aria-label={words.join(" ")}
                        className="
              chat-heading m-0 flex flex-wrap items-baseline
              gap-x-[0.28em]
              text-[clamp(2.75rem,7.3vw,9rem)]
              leading-[1.05] tracking-[-0.02em]
              text-[#8747F0]
            "
                        style={{ "--cycle": `${cycle}s` } as React.CSSProperties}
                    >
                        {words.map((word, w) => (
                            <span
                                key={w}
                                aria-hidden="true"
                                className="inline-flex whitespace-nowrap"
                            >
                                {Array.from(word).map((char, c) => {
                                    const i = letterIndex++;
                                    return (
                                        <span
                                            key={c}
                                            className="chat-letter inline-block"
                                            style={{
                                                animationDelay: `${(i * stagger).toFixed(3)}s`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </span>
                        ))}
                    </h2>

                    {/* Email + circled arrow, right-aligned */}
                    <a
                        href={`mailto:${email}`}
                        className="
              group mt-3 flex items-center gap-3 self-end
              text-lg font-semibold !text-[#E9DDFF]
              transition-colors duration-300 hover:!text-white
              md:mt-5 md:gap-[18px] md:text-[clamp(1.25rem,1.8vw,2.25rem)]
            "
                    >
                        <span className="!text-inherit">{email}</span>
                        <span
                            className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-full border border-[#E9DDFF] !text-[#E9DDFF]
                transition-colors duration-300
                group-hover:border-white group-hover:bg-white group-hover:!text-black
                md:h-[clamp(2.5rem,2.5vw,3rem)] md:w-[clamp(2.5rem,2.5vw,3rem)]
              "
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 md:h-5 md:w-5"
                                aria-hidden="true"
                            >
                                <path d="M7 17 17 7M8 7h9v9" />
                            </svg>
                        </span>
                    </a>
                </div>
            </section>

            <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&display=swap");

        .chat-root,
        .chat-root * {
          font-family: "Sora", ui-sans-serif, system-ui, sans-serif;
        }

        .chat-heading { font-weight: 700; }

        /*
          One cycle per letter (letters are offset with animation-delay):
            0 – 7%    ramp up to white + heavier
            7 – 16%   hold white
            16 – 32%  fade through lavender back to purple
            32 – 100% rest at purple
        */
        @keyframes chat-wave {
          0%   { color: #8747F0; font-weight: 700; }
          7%   { color: #FFFFFF; font-weight: 800; }
          16%  { color: #F4EEFF; font-weight: 800; }
          24%  { color: #C9B3F5; font-weight: 750; }
          32%  { color: #8747F0; font-weight: 700; }
          100% { color: #8747F0; font-weight: 700; }
        }

        .chat-letter {
          color: #8747F0;
          animation: chat-wave var(--cycle, 2.7s) ease-in-out infinite;
          will-change: color;
        }

        @media (prefers-reduced-motion: reduce) {
          .chat-letter { animation: none; }
        }
      `}</style>
        </div>
    );
}