"use client";

import { Moon, Sun } from "lucide-react";
import { applyTheme, useTheme } from "@/components/theme-store";

export function ThemeToggle() {
  const theme = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      className="group fixed right-0 top-1/2 z-[999] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-l-full border border-r-0 border-[var(--toggle-border)] bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-2xl transition-all duration-300 hover:w-36 hover:justify-start hover:gap-3 hover:px-4"
      aria-label={`Switch to ${nextTheme} mode`}
    >
      {nextTheme === "dark" ? <Moon size={19} /> : <Sun size={19} />}

      <span className="hidden whitespace-nowrap text-sm font-bold group-hover:inline">
        {nextTheme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
