import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, User2 } from "lucide-react";
import { notFound } from "next/navigation";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { getProjectById, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Uday Kumar`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const projectActions = [
    project.links.demo
      ? {
          href: project.links.demo,
          label: "View Site",
        }
      : null,
    project.links.app
      ? {
          href: project.links.app,
          label: "View App",
        }
      : null,
  ].filter((action): action is { href: string; label: string } => Boolean(action));

  const isExternalProjectLink = (href: string) =>
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <main className="min-h-screen bg-[var(--page-background)] text-[var(--foreground)]">
      <ThemeToggle />
      <ScrollToTopButton />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(129,76,236,0.28),_transparent_58%)]" />

      <section className="relative overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-14 lg:pb-32 lg:pt-16">
        <div className="absolute left-1/2 top-16 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#8750f7]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-[var(--surface-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--section-card-shadow)]"
          >
            <ArrowLeft size={16} />
            Back To Portfolio
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8750f7]">
                {project.category} | {project.year}
              </p>

              <h1 className="mt-4 bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
                {project.intro}
              </p>

              <div className="mt-8 space-y-3">
                {projectActions.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {projectActions.map((action) => {
                      const isExternal = isExternalProjectLink(action.href);

                      return (
                        <Link
                          key={action.label}
                          href={action.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-[var(--surface-elevated)] px-6 py-3 text-sm font-bold text-[var(--foreground)] shadow-[var(--section-card-shadow)] transition hover:border-[#8750f7]/40 hover:text-[#8750f7]"
                        >
                          {action.label}
                          <ArrowUpRight size={16} />
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.links.contact}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-6 py-3 text-sm font-bold !text-white shadow-[0_18px_40px_rgba(135,80,247,0.28)]"
                  >
                    Start Similar Project
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-[var(--surface-elevated)] px-6 py-3 text-sm font-bold text-[var(--foreground)] shadow-[var(--section-card-shadow)]"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] bg-[var(--surface-elevated)] p-5 shadow-[var(--section-card-shadow)]">
                  <div className="flex items-center gap-3 text-[#8750f7]">
                    <User2 size={18} />
                    <span className="text-xs font-black uppercase tracking-[0.16em]">
                      Client
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-black text-[var(--foreground)]">
                    {project.client}
                  </p>
                </div>

                <div className="rounded-[24px] bg-[var(--surface-elevated)] p-5 shadow-[var(--section-card-shadow)]">
                  <div className="flex items-center gap-3 text-[#8750f7]">
                    <CalendarDays size={18} />
                    <span className="text-xs font-black uppercase tracking-[0.16em]">
                      Duration
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-black text-[var(--foreground)]">
                    {project.duration}
                  </p>
                </div>

                <div className="rounded-[24px] bg-[var(--surface-elevated)] p-5 shadow-[var(--section-card-shadow)]">
                  <div className="flex items-center gap-3 text-[#8750f7]">
                    <MapPin size={18} />
                    <span className="text-xs font-black uppercase tracking-[0.16em]">
                      Location
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-black text-[var(--foreground)]">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-[var(--section-accent-surface)] p-4 shadow-[var(--section-card-shadow)] sm:p-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-[26px] object-cover shadow-[var(--section-accent-shadow)]"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-8">
              <div className="rounded-[30px] bg-[var(--surface-elevated)] p-7 shadow-[var(--section-card-shadow)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
                  Project Overview
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)]">
                  {project.summary}
                </p>
              </div>

              <div className="rounded-[30px] bg-[var(--surface-elevated)] p-7 shadow-[var(--section-card-shadow)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
                  The Challenge
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)]">
                  {project.challenge}
                </p>
              </div>

              <div className="rounded-[30px] bg-[var(--section-accent-surface)] p-7 shadow-[var(--section-card-shadow)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
                  My Approach
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)]">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[30px] bg-[var(--surface-elevated)] p-7 shadow-[var(--section-card-shadow)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
                  Role
                </p>
                <p className="mt-5 text-2xl font-black text-[var(--foreground)]">
                  {project.role}
                </p>
              </div>

              <div className="rounded-[30px] bg-[var(--surface-elevated)] p-7 shadow-[var(--section-card-shadow)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
                  What This Project Delivered
                </p>
                <ul className="mt-5 space-y-4">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-3 text-base leading-7 text-[var(--muted-foreground)]"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8750f7]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[30px] bg-[var(--surface-elevated)] p-7 shadow-[var(--section-card-shadow)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
                  Tech Stack
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--portfolio-chip-surface)] px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
