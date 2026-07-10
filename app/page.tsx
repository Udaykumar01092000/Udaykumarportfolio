"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EntranceAnimation } from "@/components/EntranceAnimation";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import "@/styles/entrance.css";

export default function Home() {
  const [showEntrance, setShowEntrance] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("hasPlayedEntrance");
    if (hasPlayed) {
      setShowEntrance(false);
      setPortfolioVisible(true);
    } else {
      setShowEntrance(true);
    }
  }, []);

  const handleEntranceComplete = () => {
    sessionStorage.setItem("hasPlayedEntrance", "true");
    setShowEntrance(false);
    setPortfolioVisible(true);
  };

  return (
    <>
      {/* Entrance animation overlay */}
      {showEntrance && (
        <EntranceAnimation onComplete={handleEntranceComplete} />
      )}

      {/* Portfolio content — always mounted, revealed after entrance */}
      <motion.div
        className="min-h-screen bg-[var(--page-background)] text-[var(--foreground)]"
        initial={{ opacity: 0 }}
        animate={portfolioVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(129,76,236,0.28),_transparent_58%)]" />
        <SiteHeader />
        <main className="bg-[var(--hero-section-background)] pt-20 sm:pt-28 lg:pt-18">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Resume />
          <Skills />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}
