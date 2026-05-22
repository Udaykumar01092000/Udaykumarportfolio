"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

const education = [
  {
    year: "2019 - 2022",
    title: "Bachelor of Computer Science",
    place: "New Nobel Degree College, Hyderabad",
    description:
      "Developed strong foundations in computer science, mathematics, communication, analytical thinking, and problem-solving, supporting my growth as a full-stack web developer.",
  },
];

const info = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6300919562",
  },
  {
    icon: Mail,
    label: "Email",
    value: "udaykumar.77348@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uppal, Hyderabad",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--page-background)] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-24 h-[420px] w-[420px] rounded-full bg-[#8750f7]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-5xl font-black text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Summary */}
            <div className="h-full rounded-[32px] bg-[var(--surface-elevated)] p-6 shadow-[var(--section-card-shadow)] backdrop-blur-xl sm:p-8">
              <h3 className="text-4xl font-black text-[var(--foreground)]">
                Summary
              </h3>

              <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
                Full Stack Developer specializing in WordPress, PHP Sage, Next.js, React, and modern web technologies. Experienced in building custom websites, e-commerce solutions, and scalable web applications with a focus on performance, SEO, and user experience.
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
                From planning to deployment, I deliver clean, maintainable, and business-focused digital solutions while solving complex development challenges with creativity and precision.
              </p>

              {/* Info */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {info.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8750f7]/10 text-[#8750f7]">
                        <Icon size={18} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-sm text-[var(--muted-foreground)]">
                          {item.label}
                        </p>

                        <p className="break-words font-bold text-[var(--foreground)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full rounded-[32px] bg-[var(--section-accent-surface)] p-6 shadow-[var(--section-card-shadow)] !sm:p-0">
              <div className="mb-8 flex items-center gap-4">
                <GraduationCap
                  className="text-[#8750f7]"
                  size={40}
                />

                <h3 className="text-4xl font-black text-[#8750f7]">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] p-6 text-white shadow-[var(--section-accent-shadow)] sm:p-8"
                  >
                    <p className="text-xl font-black text-white/90">
                      {item.year}
                    </p>

                    <h4 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-lg text-white/90">
                      {item.place}
                    </p>

                    <p className="mt-5 text-base leading-7 text-white/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
