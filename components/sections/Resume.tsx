"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const resume = [
  {
    role: "WordPress Developer",
    period: "2024 - Present",
    company: "Vaartha Publications",
    location: "Lower Tank Bund, Hyderabad",
   points: [
    "Managing and maintaining WordPress websites built using the Sage theme framework.",
    "Developing and updating custom UI sections, layouts and frontend features based on website requirements.",
    "Ensuring websites run smoothly by handling performance improvements, bug fixes and ongoing maintenance.",
    "Building custom WordPress functionalities and plugins whenever required for business and editorial needs.",
    "Working with HTML, CSS, JavaScript, PHP and WordPress theme customization to improve user experience.",
    "Developed a React Native Android application for readers by integrating WordPress REST APIs for dynamic content delivery.",
    "Collaborating on frontend improvements, responsive layouts and feature enhancements across multiple platforms.",
    ],
  },
  {
    role: "WordPress Developer",
    period: "2022 - 2023",
    company: "iBridge Digital",
    location: "Madhapur, Hyderabad",
    points: [
      "Worked at iBridge Digital in Madhapur as a WordPress Developer for 1 year.",
      "Honed skills in HTML , CSS , JavaScript , Wordpress website design and development during this tenure.",
      "Contributed to various projects, gaining hands-on experience in the field.",
      "Collaborated with a talented team to create engaging and user-friendly websites.",
      "Successfully met the unique needs and specifications of clients through project work.",
      "Developed expertise in WordPress customization and enhanced proficiency as a web developer through practical application at iBridge Digital.",
      "Maintained websites by updating and deleting data based on client requirements.",
      "Built new websites from concept to launch, ensuring polished and effective outcomes."
    ],
  },
];

export function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[var(--page-background)] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:py-28"
    >
      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-[#8750f7]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3 sm:mb-16 sm:gap-5">
          <BriefcaseBusiness className="text-[#8750f7]" size={38} />
          <h2 className="text-3xl font-black text-[#8750f7] sm:text-4xl lg:text-5xl">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-[var(--timeline-line)] pl-5 sm:pl-8">
          {resume.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[29px] top-7 h-4 w-4 rounded-full border-[3px] border-[var(--timeline-node-ring)] bg-[#8750f7] sm:-left-[43px] sm:top-8 sm:h-5 sm:w-5 sm:border-4" />

              <div
                className={`rounded-[30px] p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white shadow-[var(--section-accent-shadow)]"
                    : "bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-[var(--section-card-shadow)]"
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-5 py-2 text-sm font-bold ${
                    index === 0
                      ? "bg-white/15 text-white"
                      : "bg-[#8750f7]/10 text-[#8750f7]"
                  }`}
                >
                  {item.period}
                </span>

                <h3 className="mt-5 text-2xl font-black uppercase sm:text-3xl">
                  {item.role}
                </h3>

                <p
                  className={`mt-3 text-base italic sm:text-lg ${
                    index === 0
                      ? "text-white/85"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {item.company}, {item.location}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className={`flex gap-3 text-sm leading-6 sm:text-base sm:leading-7 ${
                        index === 0
                          ? "text-white/90"
                          : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
