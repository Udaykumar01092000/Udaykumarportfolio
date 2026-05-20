"use client";

import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { startTransition, useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "WordPress", "React", "Apps"] as const;

type Filter = (typeof filters)[number];

const filterPillTransition = {
  type: "spring",
  stiffness: 360,
  damping: 30,
  mass: 0.72,
} as const;

const gridVariants: Variants = {
  hidden: { opacity: 1 },
  show:   { opacity: 1 },
  exit:   {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.72,
    filter: "blur(12px)",
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.06,
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1],
      scale: {
        type: "spring",
        stiffness: 320,
        damping: 14,
        mass: 0.75,
      },
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.85,
    filter: "blur(8px)",
    transition: {
      duration: 0.22,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      className="group relative overflow-hidden rounded-[10px] bg-[#140c1c] p-5 sm:p-6"
      style={{ transformPerspective: 1200 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-20"
        aria-label={`Open ${project.title} project page`}
      />

      <motion.img
        src={project.image}
        alt={project.title}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-[280px] w-full rounded-[6px] object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 sm:h-[320px] xl:h-[340px]"
      />

      <div className="absolute inset-x-4 bottom-4 translate-y-8 rounded-[18px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] p-5 text-white opacity-0 shadow-[0_20px_50px_rgba(135,80,247,0.35)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-5 sm:bottom-5 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              {project.category} | {project.year}
            </p>

            <h3 className="text-2xl font-black text-white sm:text-[1.75rem]">
              {project.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              {project.summary}
            </p>
          </div>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition duration-300 group-hover:rotate-45 sm:h-12 sm:w-12">
            <ArrowUpRight size={30} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[var(--page-background)] pb-24 pt-8 sm:pb-28 sm:pt-20 lg:py-28"
    >
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8750f7]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8750f7]">
            Portfolio
          </p>

          <h2 className="mt-4 bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
            My Recent Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            A showcase of WordPress, React and mobile app projects with clean
            UI, smooth interactions and practical development work.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <LayoutGroup id="portfolio-filters">
            <div className="grid w-full max-w-[332px] grid-cols-4 gap-0.5 rounded-[20px] bg-[var(--portfolio-filter-background)] p-1 shadow-[var(--section-card-shadow)] backdrop-blur-xl sm:inline-flex sm:w-auto sm:max-w-none sm:flex-wrap sm:gap-1.5 sm:rounded-full sm:p-1.5">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    startTransition(() => {
                      setActiveFilter(filter);
                    })
                  }
                  suppressHydrationWarning
                  className="relative min-w-0 cursor-pointer overflow-hidden rounded-[16px] px-1 py-1.5 text-[10px] font-semibold leading-none sm:rounded-full sm:px-5 sm:py-2.5 sm:text-sm sm:font-bold"
                >
                    {isActive ? (
                      <motion.span
                        layoutId="portfolio-filter-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454]"
                        transition={filterPillTransition}
                      />
                    ) : null}

                    <span
                      className={`relative z-10 transition ${
                        isActive
                          ? "text-white"
                          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      <span className="block whitespace-nowrap">{filter}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        <div className="mt-14" style={{ perspective: 1200 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid gap-8 lg:grid-cols-2"
            >
              {visibleProjects.map((project, i) => (
                <ProjectCard
                  key={`${activeFilter}-${project.id}`}
                  project={project}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
