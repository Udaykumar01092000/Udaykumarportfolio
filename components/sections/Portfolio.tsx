"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectCard, projectGridVariants } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 6);

export function Portfolio() {
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
            Featured Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            Explore the featured set from the top of my portfolio list, with the newest priority projects always surfaced first.
          </p>
        </div>

        <div className="mt-14" style={{ perspective: 1200 }}>
          <motion.div
            variants={projectGridVariants}
            initial="hidden"
            animate="show"
            className="grid gap-8 lg:grid-cols-2"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-7 py-3 text-sm font-bold !text-white shadow-[0_18px_40px_rgba(135,80,247,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(135,80,247,0.4)]"
          >
            View More Projects
            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
