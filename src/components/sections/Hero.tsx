"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Sparkles,
  ChevronDown,
  Cpu,
  Brain,
  Code2,
  Database,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/constants";
import { smoothScrollTo } from "@/lib/utils";

const orbitItems = [
  { icon: Brain, label: "AI", angle: 0 },
  { icon: Code2, label: "Frontend", angle: 90 },
  { icon: Database, label: "Backend", angle: 180 },
  { icon: Cpu, label: "Systems", angle: 270 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 sm:pt-28"
    >
      {/* Floating glowing blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-32 h-[420px] w-[420px] animate-float-slow rounded-full bg-blue-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[480px] w-[480px] animate-float-slow rounded-full bg-fuchsia-500/20 blur-[140px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] animate-float-slow rounded-full bg-purple-600/20 blur-[120px]"
        style={{ animationDelay: "-8s" }}
      />

      <div className="container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>Available for internships &amp; collaborations</span>
            <span className="ml-1 flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building{" "}
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 8s ease infinite",
                }}
              >
                AI Systems
              </span>
            </span>{" "}
            That Solve Real Problems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-white/65 sm:text-lg"
          >
            CSE AIML student, full-stack developer, hackathon builder, and AI
            product enthusiast. I turn messy real-world problems into
            shipped, production-grade software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              onClick={() => smoothScrollTo("projects")}
              className="group"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => smoothScrollTo("contact")}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-white/40">
              Connect
            </span>
            <div className="h-px w-10 bg-white/15" />
            <div className="flex items-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-purple-500/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)] blur-2xl" />

            {/* Outer ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/10 [mask-image:linear-gradient(to_bottom,white,transparent_70%)]" />
            <div
              className="absolute inset-6 animate-spin-slow rounded-full border border-white/10 [mask-image:linear-gradient(to_top,white,transparent_70%)]"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
            />
            <div className="absolute inset-12 rounded-full border border-dashed border-white/10" />

            {/* Center core */}
            <div className="absolute inset-1/4 flex items-center justify-center">
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-fuchsia-500/30 backdrop-blur-2xl">
                <div className="absolute inset-0 animate-pulse-glow rounded-full border border-white/20" />
                <div className="flex h-1/2 w-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-white/20 bg-black/40 px-2 text-center backdrop-blur-xl">
                  <span className="bg-gradient-to-br from-white via-purple-200 to-fuchsia-300 bg-clip-text font-display text-xs font-medium uppercase tracking-[0.32em] text-transparent">
                    D
                  </span>
                  <span className="bg-gradient-to-br from-white via-purple-200 to-fuchsia-300 bg-clip-text font-display text-base font-bold uppercase leading-none tracking-tight text-transparent sm:text-lg">
                    VARSHITH
                  </span>
                  <span className="bg-gradient-to-br from-white via-purple-200 to-fuchsia-300 bg-clip-text font-display text-base font-bold uppercase leading-none tracking-tight text-transparent sm:text-lg">
                    REDDY
                  </span>
                </div>
              </div>
            </div>

            {/* Orbiting nodes */}
            {orbitItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ rotate: item.angle }}
                animate={{ rotate: item.angle + 360 }}
                transition={{
                  duration: 22 + i * 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute inset-0"
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                  <motion.div
                    animate={{ rotate: -(item.angle + 360) }}
                    transition={{
                      duration: 22 + i * 2,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-white shadow-lg shadow-purple-500/20 backdrop-blur-xl"
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => smoothScrollTo("about")}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 hover:text-white sm:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
