"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const scrollProgressRingRadius = 20;
const scrollProgressRingLength = 2 * Math.PI * scrollProgressRingRadius;

export function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    function updateScrollState() {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0
          ? Math.min(scrollTop / scrollableHeight, 1)
          : 0;

      setShowScrollTop(scrollTop > 400);
      setScrollProgress(nextProgress);
      frameId = 0;
    }

    function handleScroll() {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    }

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const scrollProgressOffset =
    scrollProgressRingLength * (1 - scrollProgress);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      suppressHydrationWarning
      className={`group fixed bottom-6 right-4 z-[998] flex cursor-pointer h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:right-6 ${
        showScrollTop
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="pointer-events-none absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r={scrollProgressRingRadius}
          stroke="var(--scroll-top-progress-track)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={scrollProgressRingRadius}
          stroke="var(--scroll-top-progress-fill)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: scrollProgressRingLength,
            strokeDashoffset: scrollProgressOffset,
            filter: "drop-shadow(0 0 10px var(--scroll-top-progress-glow))",
            transition: "stroke-dashoffset 140ms ease-out",
          }}
        />
      </svg>

      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-elevated)] transition-colors duration-300 group-hover:text-[var(--scroll-top-progress-fill)]">
        <ArrowUp size={20} />
      </span>
    </button>
  );
}
