"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

type ProjectGalleryProps = {
  images: [string, ...string[]];
  title: string;
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 88 : -88,
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -88 : 88,
    scale: 0.96,
    transition: {
      duration: 0.34,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  }),
};

type NavButtonProps = {
  direction: "previous" | "next";
  onClick: () => void;
};

function GalleryNavButton({ direction, onClick }: NavButtonProps) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? "Show previous image" : "Show next image"}
      className={`group absolute top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--header-border)] bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-[var(--section-card-shadow)] backdrop-blur-xl transition duration-300 hover:border-[#8750f7]/45 hover:text-[#8750f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8750f7]/35 ${
        isPrevious ? "left-3 sm:left-4" : "right-3 sm:right-4"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(135,80,247,0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative">
        {isPrevious ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
      </span>
    </button>
  );
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];

  const goToPrevious = () => {
    if (!hasMultipleImages) {
      return;
    }

    setDirection(-1);
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    if (!hasMultipleImages) {
      return;
    }

    setDirection(1);
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleAutoAdvance = useEffectEvent(() => {
    setDirection(1);
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  });

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const intervalId = window.setInterval(() => {
      handleAutoAdvance();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasMultipleImages, images.length]);

  return (
    <div className="rounded-[32px] bg-[var(--section-accent-surface)] p-4 shadow-[var(--section-card-shadow)] sm:p-5">
      <div className="relative overflow-hidden rounded-[26px] border border-[var(--header-border)] bg-[var(--surface-elevated)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(135,80,247,0.12),transparent_28%,transparent_74%,rgba(135,80,247,0.06))]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#8750f7]/10 blur-3xl" />

        <div className="relative aspect-[16/11] overflow-hidden">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt={`${title} preview ${activeIndex + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 h-full w-full object-contain p-4 sm:p-5"
            />
          </AnimatePresence>
        </div>

        {hasMultipleImages ? (
          <>
            <GalleryNavButton direction="previous" onClick={goToPrevious} />
            <GalleryNavButton direction="next" onClick={goToNext} />
          </>
        ) : null}
      </div>
    </div>
  );
}
