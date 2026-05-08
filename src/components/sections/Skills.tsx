"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Toolkit"
          title="Stacks I"
          highlight="ship with."
          description="A pragmatic toolkit built around speed, intelligence, and great UX. I pick up new tools fast — the ones below are where I spend most of my time."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1"
            >
              {/* Hover glow border */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  "bg-gradient-to-br",
                  category.accent
                )}
                style={{ padding: "1px" }}
              >
                <div className="h-full w-full rounded-2xl bg-[#0b0b14]" />
              </div>

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg shadow-purple-500/10",
                      category.accent
                    )}
                  >
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {category.skills.map((skill, j) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-white/85">
                          {skill.name}
                        </span>
                        <span className="text-white/40">{skill.level}%</span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.1 + j * 0.05,
                          }}
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r",
                            category.accent
                          )}
                        >
                          <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] bg-[length:200%_100%]" />
                        </motion.div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Node.js",
            "Express",
            "MongoDB",
            "Firebase",
            "Python",
            "TensorFlow",
            "OpenCV",
            "Docker",
            "GitHub",
            "Vercel",
            "PostgreSQL",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-white/70 backdrop-blur-md transition-all hover:border-purple-400/40 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
