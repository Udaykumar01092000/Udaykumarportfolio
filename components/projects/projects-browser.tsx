"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { startTransition, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard, projectGridVariants } from "@/components/projects/project-card";

const filterPillTransition = {
  type: "spring",
  stiffness: 360,
  damping: 30,
  mass: 0.72,
} as const;

type ProjectsBrowserProps = {
  projects: Project[];
};

export function ProjectsBrowser({ projects }: ProjectsBrowserProps) {
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      <div className="flex justify-center">
        <LayoutGroup id="projects-page-filters">
          <div className="grid w-full max-w-[332px] grid-cols-2 gap-1 rounded-[24px] bg-[var(--portfolio-filter-background)] p-1.5 shadow-[var(--section-card-shadow)] backdrop-blur-xl sm:inline-flex sm:w-auto sm:max-w-none sm:flex-wrap sm:rounded-full">
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
                  className="relative min-w-0 cursor-pointer overflow-hidden rounded-[16px] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] sm:rounded-full sm:px-5"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="projects-page-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454]"
                      transition={filterPillTransition}
                    />
                  ) : null}

                  <span
                    className={`relative z-10 block whitespace-nowrap transition ${
                      isActive
                        ? "text-white"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {filter}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <div className="mt-12" style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={projectGridVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid gap-8 lg:grid-cols-2"
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={`${activeFilter}-${project.id}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
