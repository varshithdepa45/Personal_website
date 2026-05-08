"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/Counter";
import { ACHIEVEMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Milestones"
          title="Numbers that"
          highlight="tell the story."
          description="Hackathons, projects, contributions, and certifications — proof that I'm constantly shipping and constantly learning."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl p-[1px]"
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-100",
                  item.accent
                )}
              />
              <div className="relative h-full rounded-2xl bg-[#0b0b14]/95 p-6 backdrop-blur-xl">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + i * 0.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className={cn(
                    "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                    item.accent
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>

                <div className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text font-display text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-white/65">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
