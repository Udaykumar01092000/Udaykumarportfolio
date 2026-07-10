"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

const skills = [
  {
    name: "HTML",
    percent: "100%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    percent: "90%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    percent: "85%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    percent: "80%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "WordPress",
    percent: "90%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
  name: "Bootstrap",
  percent: "88%",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  {
    name: "PHP",
    percent: "80%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--page-background)] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:py-28"
    >
      <div className="absolute left-0 top-20 h-[380px] w-[380px] rounded-full bg-[#8750f7]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal distance={30} duration={0.6}>
          <h2 className="text-4xl font-black text-[#8750f7] sm:text-5xl">
            My Skills
          </h2>
        </ScrollReveal>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
          Expertise in WordPress, PHP Sage, React, Next.js, React Native, JavaScript, and modern development tools for building scalable digital products.
        </p>

        <StaggerContainer stagger={0.08} className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <StaggerItem
              key={skill.name}
              className="group"
            >
              <div className="rounded-[22px] border border-[var(--skills-card-border)] bg-[var(--skills-card-surface)] p-8 shadow-[var(--section-card-shadow)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#8750f7]/45 group-hover:bg-[#2a1454] group-hover:shadow-[var(--section-accent-shadow)]">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="mx-auto h-16 w-16 grayscale opacity-55 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />

                <p className="mt-8 text-2xl font-black text-[var(--muted-foreground)] transition-colors duration-500 group-hover:text-[#8750f7]">
                  {skill.percent}
                </p>
              </div>

              <p className="mt-6 text-base font-medium text-[#8750f7]">
                {skill.name}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
