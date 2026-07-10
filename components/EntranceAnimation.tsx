"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-store";

/* ──────────────────────────────────────────────
   Code-related floating symbols
   ────────────────────────────────────────────── */
interface FloatingSymbol {
  id: number;
  x: number;
  y: number;
  text: string;
  fontSize: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

const CODE_SYMBOLS = [
  "{ }", "< />", "( )", "[ ]", "=>", "//", "&&", "||",
  "const", "let", "return", "async", "import", "export",
  "function", "=>", "null", "true", "===", "!==",
  "/** */", ";", "::", "...", "npm", "git",
  "</div>", "<h1>", "tsx", ".js", ".css",
  "$ _", "> _", "% _", "console.log",
  "useState", "useEffect", "React", "Next.js",
];

function generateFloatingSymbols(count: number): FloatingSymbol[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 94 + 3,
    y: Math.random() * 94 + 3,
    text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
    fontSize: Math.random() * 10 + 10,
    duration: Math.random() * 6 + 5,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.2 + 0.06,
    rotation: Math.random() * 30 - 15,
  }));
}

/* ──────────────────────────────────────────────
   Floating keyboard key
   ────────────────────────────────────────────── */
interface FloatingKey {
  id: number;
  x: number;
  y: number;
  label: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const KEYBOARD_KEYS = [
  "⌘", "⇧", "⌥", "Tab", "Esc", "Ctrl",
  "Enter", "Del", "F5", "↑", "↓", "←", "→",
  "A", "S", "D", "F", "J", "K", "L",
];

function generateFloatingKeys(count: number): FloatingKey[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    label: KEYBOARD_KEYS[Math.floor(Math.random() * KEYBOARD_KEYS.length)],
    size: Math.random() * 16 + 28,
    duration: Math.random() * 5 + 6,
    delay: Math.random() * 2.5,
    opacity: Math.random() * 0.15 + 0.05,
  }));
}

/* ──────────────────────────────────────────────
   Terminal window (background decoration)
   ────────────────────────────────────────────── */
function TerminalWindow({
  x,
  y,
  delay,
  theme,
}: {
  x: string;
  y: string;
  delay: number;
  theme: "dark" | "light";
}) {
  const isDark = theme === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isDark ? 0.12 : 0.08, scale: 1 }}
      transition={{ delay, duration: 1 }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 200,
        minHeight: 90,
        borderRadius: 8,
        border: `1px solid ${isDark ? "rgba(135,80,247,0.15)" : "rgba(135,80,247,0.12)"}`,
        background: isDark ? "rgba(15,7,27,0.5)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(6px)",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "6px 10px",
          borderBottom: `1px solid ${isDark ? "rgba(135,80,247,0.1)" : "rgba(135,80,247,0.08)"}`,
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
        <span
          style={{
            marginLeft: "auto",
            fontSize: 8,
            color: isDark ? "rgba(255,255,255,0.25)" : "rgba(42,20,84,0.3)",
            fontFamily: "Consolas, monospace",
          }}
        >
          terminal
        </span>
      </div>
      {/* Fake lines */}
      <div style={{ padding: "8px 10px" }}>
        {["$ npm run dev", "> ready on :3000", "✓ compiled"].map(
          (line, i) => (
            <div
              key={i}
              style={{
                fontSize: 9,
                fontFamily: "Consolas, monospace",
                color: isDark ? "rgba(157,114,255,0.5)" : "rgba(135,80,247,0.45)",
                lineHeight: 1.8,
                whiteSpace: "nowrap",
              }}
            >
              {line}
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Browser window (background decoration)
   ────────────────────────────────────────────── */
function BrowserWindow({
  x,
  y,
  delay,
  theme,
}: {
  x: string;
  y: string;
  delay: number;
  theme: "dark" | "light";
}) {
  const isDark = theme === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isDark ? 0.1 : 0.07, scale: 1 }}
      transition={{ delay, duration: 1 }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 180,
        minHeight: 100,
        borderRadius: 8,
        border: `1px solid ${isDark ? "rgba(135,80,247,0.12)" : "rgba(135,80,247,0.1)"}`,
        background: isDark ? "rgba(15,7,27,0.4)" : "rgba(255,255,255,0.5)",
        backdropFilter: "blur(4px)",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* URL bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "6px 10px",
          borderBottom: `1px solid ${isDark ? "rgba(135,80,247,0.08)" : "rgba(135,80,247,0.06)"}`,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
        <div
          style={{
            marginLeft: 6,
            flex: 1,
            height: 14,
            borderRadius: 4,
            background: isDark ? "rgba(135,80,247,0.08)" : "rgba(135,80,247,0.06)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 6,
            fontSize: 7,
            color: isDark ? "rgba(255,255,255,0.2)" : "rgba(42,20,84,0.25)",
            fontFamily: "Consolas, monospace",
          }}
        >
          localhost:3000
        </div>
      </div>
      {/* Fake content blocks */}
      <div style={{ padding: "10px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
        <div
          style={{
            width: "60%",
            height: 6,
            borderRadius: 3,
            background: isDark ? "rgba(135,80,247,0.12)" : "rgba(135,80,247,0.1)",
          }}
        />
        <div
          style={{
            width: "90%",
            height: 4,
            borderRadius: 2,
            background: isDark ? "rgba(135,80,247,0.07)" : "rgba(135,80,247,0.06)",
          }}
        />
        <div
          style={{
            width: "75%",
            height: 4,
            borderRadius: 2,
            background: isDark ? "rgba(135,80,247,0.07)" : "rgba(135,80,247,0.06)",
          }}
        />
        <div
          style={{
            marginTop: 4,
            width: 40,
            height: 12,
            borderRadius: 4,
            background: isDark ? "rgba(135,80,247,0.15)" : "rgba(135,80,247,0.12)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Glitch text effect
   ────────────────────────────────────────────── */
const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#_@$%&";

function useGlitchText(finalText: string, triggerAt: number) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), triggerAt);
    return () => clearTimeout(timer);
  }, [triggerAt]);

  useEffect(() => {
    if (!started) return;

    let iteration = 0;
    const totalIterations = finalText.length * 3;

    const interval = setInterval(() => {
      setDisplay(
        finalText
          .split("")
          .map((char, i) => {
            if (i < Math.floor(iteration / 3)) return char;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > totalIterations) {
        setDisplay(finalText);
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [started, finalText]);

  return display;
}

/* ──────────────────────────────────────────────
   Code typing lines
   ────────────────────────────────────────────── */
function CodeTyping({
  startDelay,
  theme,
}: {
  startDelay: number;
  theme: "dark" | "light";
}) {
  const isDark = theme === "dark";

  const CODE_LINES = useMemo(
    () => [
      {
        text: "const developer = {",
        color: isDark ? "#9d72ff" : "#6d38df",
      },
      {
        text: '  name: "Uday Kumar",',
        color: isDark ? "#e2d4ff" : "#2a1454",
      },
      {
        text: '  role: "Web Developer",',
        color: isDark ? "#e2d4ff" : "#2a1454",
      },
      {
        text: "  passion: true,",
        color: isDark ? "#a679ff" : "#8750f7",
      },
      {
        text: "};",
        color: isDark ? "#9d72ff" : "#6d38df",
      },
    ],
    [isDark]
  );

  const [visibleLines, setVisibleLines] = useState(0);
  const [currentLineChars, setCurrentLineChars] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let lineIndex = 0;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (lineIndex >= CODE_LINES.length) {
          clearInterval(typeInterval);
          return;
        }

        charIndex++;
        setCurrentLineChars(charIndex);

        if (charIndex >= CODE_LINES[lineIndex].text.length) {
          lineIndex++;
          charIndex = 0;
          setVisibleLines(lineIndex);
          setCurrentLineChars(0);
        }
      }, 28);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay, CODE_LINES]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: startDelay / 1000, duration: 0.3 }}
      className="entrance-code-block"
    >
      {CODE_LINES.map((line, i) => {
        if (i > visibleLines) return null;
        const displayText =
          i < visibleLines
            ? line.text
            : line.text.slice(0, currentLineChars);
        return (
          <div key={i} className="entrance-code-line" style={{ color: line.color }}>
            <span className="entrance-line-number">{i + 1}</span>
            <span>{displayText}</span>
            {i === visibleLines && (
              <span className="entrance-cursor">|</span>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Main entrance animation
   ────────────────────────────────────────────── */
export function EntranceAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const theme = useTheme();
  const isDark = theme === "dark";
  const [phase, setPhase] = useState<"intro" | "exiting" | "done">("intro");
  const [mounted, setMounted] = useState(false);
  const [floatingSymbols, setFloatingSymbols] = useState<FloatingSymbol[]>([]);
  const [floatingKeys, setFloatingKeys] = useState<FloatingKey[]>([]);
  const glitchName = useGlitchText("UDAY KUMAR", 400);
  const glitchRole = useGlitchText("Web Developer", 1200);

  /* Generate random elements only on client to avoid hydration mismatch */
  useEffect(() => {
    setFloatingSymbols(generateFloatingSymbols(30));
    setFloatingKeys(generateFloatingKeys(12));
    setMounted(true);
  }, []);

  const handleExit = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1200);
  }, [onComplete]);

  /* Auto-advance after the animation plays */
  useEffect(() => {
    const timer = setTimeout(handleExit, 4800);
    return () => clearTimeout(timer);
  }, [handleExit]);

  /* Allow skip on click/key */
  useEffect(() => {
    const skip = () => {
      if (phase === "intro") handleExit();
    };
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [phase, handleExit]);

  if (phase === "done" || !mounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`entrance-overlay ${isDark ? "entrance-dark" : "entrance-light"}`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => phase === "intro" && handleExit()}
      >
          {/* ── Floating code symbols ── */}
          <div className="entrance-particles">
            {floatingSymbols.map((s) => (
              <motion.span
                key={`sym-${s.id}`}
                className="entrance-floating-symbol"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, s.opacity, s.opacity, 0],
                  y: [0, -20, -40, -70],
                }}
                transition={{
                  duration: s.duration,
                  delay: s.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  fontSize: s.fontSize,
                  transform: `rotate(${s.rotation}deg)`,
                }}
              >
                {s.text}
              </motion.span>
            ))}
          </div>

          {/* ── Floating keyboard keys ── */}
          <div className="entrance-particles">
            {floatingKeys.map((k) => (
              <motion.div
                key={`key-${k.id}`}
                className="entrance-floating-key"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: [0, k.opacity, k.opacity, 0],
                  scale: [0.7, 1, 1, 0.8],
                  y: [0, -15, -30, -50],
                }}
                transition={{
                  duration: k.duration,
                  delay: k.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: `${k.x}%`,
                  top: `${k.y}%`,
                  width: k.size,
                  height: k.size,
                }}
              >
                {k.label}
              </motion.div>
            ))}
          </div>

          {/* ── Background decorative windows ── */}
          <TerminalWindow x="5%" y="10%" delay={0.3} theme={theme} />
          <TerminalWindow x="72%" y="65%" delay={0.8} theme={theme} />
          <BrowserWindow x="70%" y="8%" delay={0.5} theme={theme} />
          <BrowserWindow x="3%" y="62%" delay={1.0} theme={theme} />

          {/* ── Central content ── */}
          <div className="entrance-center">
            {/* Glowing dot */}
            <motion.div
              className="entrance-glow-dot"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />

            {/* Name */}
            <motion.h1
              className="entrance-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {glitchName}
            </motion.h1>

            {/* Divider line */}
            <motion.div
              className="entrance-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />

            {/* Role */}
            <motion.p
              className="entrance-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {glitchRole}
            </motion.p>

            {/* Code block */}
            <CodeTyping startDelay={1800} theme={theme} />

            {/* Skip hint */}
            <motion.p
              className="entrance-skip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Click or press any key to skip
            </motion.p>
          </div>

          {/* ── Exit curtain (top + bottom split) ── */}
          {phase === "exiting" && (
            <>
              <motion.div
                className="entrance-curtain entrance-curtain-top"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="entrance-curtain entrance-curtain-bottom"
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              />
            </>
          )}
      </motion.div>
    </AnimatePresence>
  );
}
