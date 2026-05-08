"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/Counter";
import { ABOUT_HIGHLIGHTS, STATS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer first."
          highlight="Builder always."
          description="I'm D Varshith Reddy — a CSE AIML student who spends weekends turning ideas into shipped products and weekdays going deep on AI, systems, and design."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Profile / visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-fuchsia-500/30 opacity-60 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl">
                <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-[0.15]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 backdrop-blur-2xl">
                    <User className="h-12 w-12 text-white/80" />
                  </div>
                  <p className="bg-gradient-to-r from-blue-300 via-purple-300 to-fuchsia-300 bg-clip-text font-display text-2xl font-semibold text-transparent">
                    D Varshith Reddy
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    AI Developer · Full-Stack Builder
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      CSE AIML
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Hackathon Builder
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Open Source
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {ABOUT_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/30"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-fuchsia-500/10" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/30"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <stat.icon className="mb-3 h-5 w-5 text-purple-300" />
              <div className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
