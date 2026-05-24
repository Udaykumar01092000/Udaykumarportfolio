"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import "@/styles/hero.css";

function DribbbleIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.6 4.35c2.74 3.37 4.76 7.1 6.1 11.24" />
      <path d="M18.9 8.18c-3.6.19-7.02.88-10.24 2.09" />
      <path d="M6.38 18.03c2.75-2.55 6-4.18 9.75-4.87" />
    </svg>
  );
}

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.25 1.84 1.25 1.08 1.84 2.82 1.3 3.5.99.11-.79.42-1.31.76-1.61-2.66-.31-5.47-1.35-5.47-6a4.68 4.68 0 0 1 1.23-3.25 4.36 4.36 0 0 1 .12-3.2s1-.33 3.3 1.24a11.3 11.3 0 0 1 6 0c2.29-1.57 3.29-1.24 3.29-1.24a4.36 4.36 0 0 1 .12 3.2 4.67 4.67 0 0 1 1.23 3.25c0 4.66-2.81 5.68-5.49 5.99.43.38.82 1.1.82 2.23v3.31c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

function TwitterIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-7.38L5.6 22H2.5l7.25-8.29L2 2h6.4l4.43 6.8L18.9 2Zm-1.1 18h1.73L7.44 3.9H5.58L17.8 20Z" />
    </svg>
  );
}

export function Hero() {
  const profileImageSrc = "/myprofile.png";

  return (
    <section className="relative flex min-h-[calc(100svh-6rem)] w-full items-center overflow-hidden bg-[var(--hero-section-background)] pt-10 sm:min-h-[calc(100svh-7rem)] sm:pt-12 lg:min-h-screen lg:pt-0">
      <ParticlesBackground />
      {/* Soft purple glow */}
      <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#8750f7]/20 blur-[120px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="hero-watermark origin-center select-none"
        >
          HI
        </motion.span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="hero-title relative z-10 max-w-4xl">
            <span className="hero-title-line hero-title-name">Uday Kumar</span>
            <span className="hero-title-line hero-title-subline text-[var(--hero-kicker)]">
              I&apos;m a{" "}
              <span
                className="hero-typing bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent"
                aria-label="Web Developer"
              >
                Web Developer
              </span>
            </span>
          </h1>

          <p className="relative z-10 mt-5 max-w-xl text-lg leading-8 text-[var(--hero-copy)] sm:mt-8 sm:text-xl sm:leading-9">
           I build high-performance websites, e-commerce platforms, and web applications using WordPress, Next.js, React, React Native, and Node.js with a strong focus on speed, SEO, and exceptional user experience.
          </p>

          <div className="hero-actions relative z-10 mt-7 flex flex-wrap items-center gap-4 sm:mt-12 sm:gap-5">
            <a
              href="/udaykumarcv.pdf"
              className="download-cta group inline-flex items-center gap-3 rounded-full border border-[var(--hero-action-border)] bg-[var(--hero-action-background)] px-8 py-4 text-sm font-bold tracking-[0.12em] text-[#8750f7] shadow-[var(--hero-action-shadow)] transition-all duration-300 hover:bg-[#8750f7] hover:!text-white"
            >
              Download CV
              <Download size={17} className="download-icon" />
            </a>

            <div className="hero-social-row flex items-center gap-3">
              <a className="hero-social" href="https://www.linkedin.com/in/uday-kumar-0290711aa" aria-label="LinkedIn" target="_blank">
                <LinkedinIcon size={17} />
                <span className="hero-tooltip">LinkedIn</span>
              </a>
              <a className="hero-social" href="https://github.com/Udaykumar01092000" aria-label="GitHub" target="_blank">
                <GithubIcon size={17} />
                <span className="hero-tooltip">GitHub</span>
              </a>
              <a
                className="hero-social"
                href="mailto:udaykumar.77348@gmail.com"
                aria-label="Email"
              >
                <Mail size={17} />
                <span className="hero-tooltip">Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 4 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative h-[360px] w-[330px] overflow-hidden rounded-[32px] border-2 border-[var(--hero-frame)] bg-[var(--hero-card-background)] shadow-[0_30px_80px_rgba(135,80,247,0.25)] transition duration-500 hover:rotate-0 sm:h-[460px] sm:w-[430px]">
            <img
              src={profileImageSrc}
              alt="Uday Kumar"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
