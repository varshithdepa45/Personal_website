"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { TIMELINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="journey" className="relative py-28 sm:py-36">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Journey"
          title="From curious learner to"
          highlight="product builder."
          description="A short version of how I got here — and where I'm going next."
        />

        <div className="relative mt-20">
          {/* Animated vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={entry.year + entry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className={cn(
                    "relative grid grid-cols-[3rem_1fr] gap-6 md:grid-cols-2 md:gap-12"
                  )}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={cn(
                        "relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl",
                        "shadow-lg shadow-purple-500/20"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-30 blur-md",
                          entry.accent
                        )}
                      />
                      <entry.icon
                        className={cn(
                          "relative h-5 w-5 bg-gradient-to-br bg-clip-text text-white"
                        )}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "md:col-start-1 md:row-start-1",
                      isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                    )}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/30">
                      <div
                        className={cn(
                          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-30",
                          "bg-gradient-to-br",
                          entry.accent
                        )}
                        style={{ filter: "blur(28px)" }}
                      />
                      <div className="relative">
                        <span
                          className={cn(
                            "inline-block bg-gradient-to-r bg-clip-text font-mono text-xs font-semibold uppercase tracking-[0.2em] text-transparent",
                            entry.accent
                          )}
                        >
                          {entry.year}
                        </span>
                        <h3 className="mt-2 font-display text-xl font-semibold text-white">
                          {entry.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div
                    className={cn(
                      "hidden md:block",
                      isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                    )}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
