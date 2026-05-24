"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HighlightedText } from "@/components/highlighted-text";
import type { Project } from "@/data/projects";

export const projectGridVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

export const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.94,
    filter: "blur(12px)",
  },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: Math.min(index, 5) * 0.06,
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1],
      scale: {
        type: "spring",
        stiffness: 320,
        damping: 18,
        mass: 0.78,
      },
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.92,
    filter: "blur(8px)",
    transition: {
      duration: 0.22,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={projectCardVariants}
      custom={index}
      className="group relative overflow-hidden rounded-[28px] border border-[var(--header-border)] bg-[var(--surface-elevated)] p-4 shadow-[var(--section-card-shadow)] backdrop-blur-xl sm:p-5"
      style={{ transformPerspective: 1200 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-20 rounded-[28px]"
        aria-label={`Open ${project.title} project page`}
      />

      <div className="relative overflow-hidden rounded-[22px] bg-[var(--portfolio-preview-shell)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(135,80,247,0.14),transparent_22%,transparent_76%,rgba(135,80,247,0.1))]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#8750f7]/12 blur-3xl" />

        <div className="relative h-[260px] sm:h-[300px] xl:h-[320px]">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            unoptimized
            sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--portfolio-preview-shell)] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(5,2,13,0.18)] backdrop-blur-xl">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span>{project.year}</span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-2xl font-black text-[var(--foreground)] sm:text-[1.75rem]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            <HighlightedText
              text={project.summary}
              highlights={project.summaryHighlights}
            />
          </p>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--portfolio-chip-surface)] text-[var(--foreground)] transition duration-300 group-hover:rotate-45 group-hover:bg-[#8750f7] group-hover:text-white sm:h-12 sm:w-12">
          <ArrowUpRight size={24} />
        </span>
      </div>
    </motion.article>
  );
}
