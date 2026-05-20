"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let frameId = 0;

    function updateScrollState() {
      setScrolled(window.scrollY > 24);
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

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--header-border)] bg-[var(--header-sticky-background)] shadow-[var(--header-sticky-shadow)]"
            : "border-b border-[var(--header-border)] bg-[var(--header-surface)]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          {/* Logo + Email */}
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="leading-none text-[1.7rem] font-black tracking-tight text-[var(--foreground)] sm:text-3xl"
            >
              Uday Kumar
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-6 xl:gap-7">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative z-0 py-[10px] text-[16px] font-medium capitalize text-[var(--muted-foreground)] transition duration-300 after:absolute after:bottom-[6px] after:right-0 after:h-0.5 after:w-0 after:bg-[linear-gradient(90deg,#8750f7_0%,#2a1454_100%)] after:transition-all after:duration-500 hover:text-[var(--foreground)] hover:after:left-0 hover:after:w-full lg:py-[25px] lg:after:bottom-[18px]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-7 py-3 text-sm font-bold !text-white shadow-[0_10px_30px_rgba(135,80,247,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(135,80,247,0.5)]"
            >
              Hire Me!
            </a>
          </div>

          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-3.5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] !text-white shadow-[0_12px_28px_rgba(135,80,247,0.28)] transition duration-300 hover:-translate-y-0.5 sm:px-4 sm:text-[10px]"
            >
              Get Hire Me
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              suppressHydrationWarning
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--header-ring)] bg-[var(--header-surface)] text-[var(--foreground)] shadow-[0_14px_30px_rgba(10,6,25,0.08)]"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span className="relative flex h-5 w-6 items-center justify-end">
                <span
                  className={`absolute h-0.5 rounded-full bg-[#8750f7] transition-all duration-300 ${
                    menuOpen ? "w-6 rotate-45" : "w-6 -translate-y-[7px]"
                  }`}
                />
                <span
                  className={`absolute h-0.5 rounded-full bg-[#8750f7] transition-all duration-300 ${
                    menuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 rounded-full bg-[#8750f7] transition-all duration-300 ${
                    menuOpen ? "w-6 -rotate-45" : "w-6 translate-y-[7px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="relative lg:hidden">
          <div
            className={`absolute left-0 right-0 top-full px-4 pt-2 transition-all duration-300 ${
              menuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
            }`}
          >
            <div className="rounded-[1.75rem] border border-[var(--header-border)] bg-[var(--mobile-menu-bg)] p-5 shadow-2xl">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[#8750f7]/15 hover:text-[#8750f7]"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-6 py-3 text-center text-sm font-bold !text-white"
                >
                  Get Hire Me
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Theme Toggle - Gerold style */}
      <ThemeToggle />

      <ScrollToTopButton />
    </>
  );
}
