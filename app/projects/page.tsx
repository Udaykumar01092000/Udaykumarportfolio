import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectsBrowser } from "@/components/projects/projects-browser";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Uday Kumar",
  description:
    "Browse the complete project collection with category filters, from WordPress builds to React apps and mobile work.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--page-background)] text-[var(--foreground)]">
      <ThemeToggle />
      <ScrollToTopButton />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(129,76,236,0.28),_transparent_58%)]" />

      <section className="relative overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-14 lg:pb-32 lg:pt-16">
        <div className="absolute left-1/2 top-16 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#8750f7]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-[var(--surface-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--section-card-shadow)]"
            >
              <ArrowLeft size={16} />
              Back To Portfolio
            </Link>

            <div className="rounded-full border border-[var(--header-border)] bg-[var(--surface-elevated)] px-4 py-2 text-sm font-semibold text-[var(--muted-foreground)] shadow-[var(--section-card-shadow)]">
              {projects.length} Projects
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8750f7]">
              Project Library
            </p>

            <h1 className="mt-4 bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
              All Projects
            </h1>

            <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
              Browse the full collection in one place and switch between categories with the same visual language used across the portfolio.
            </p>
          </div>

          <div className="mt-12">
            <ProjectsBrowser projects={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
