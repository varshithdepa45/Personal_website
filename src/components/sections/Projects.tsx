"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
        reversed && "lg:[direction:rtl]"
      )}
    >
      {/* Visual */}
      <div className="lg:col-span-7 lg:[direction:ltr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-1 backdrop-blur-xl">
          <div
            className={cn(
              "absolute -inset-px rounded-3xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70",
              "bg-gradient-to-br",
              project.accent
            )}
          />
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0d0d18] via-[#0a0a14] to-[#0d0d18]">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              <span className="ml-3 truncate text-[10px] uppercase tracking-[0.18em] text-white/40">
                {project.id}.dvr.dev
              </span>
            </div>

            {/* Content */}
            <div className="relative h-[calc(100%-37px)] overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:36px_36px] opacity-[0.18]" />
              <div
                className={cn(
                  "absolute inset-0 opacity-50",
                  "bg-gradient-to-br",
                  project.accent
                )}
                style={{ filter: "blur(80px)", opacity: 0.35 }}
              />

              <div className="relative flex h-full items-center justify-center p-8">
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full max-w-md"
                >
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl shadow-2xl">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                          project.accent
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-white">
                          {project.title}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                          {project.tagline.split(" ").slice(0, 3).join(" ")}…
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-white/75"
                        >
                          <Sparkles className="h-3 w-3 text-purple-300" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="lg:col-span-5 lg:[direction:ltr]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full bg-gradient-to-r",
              project.accent
            )}
          />
          Project 0{index + 1}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-2 bg-gradient-to-r bg-clip-text text-sm font-medium uppercase tracking-[0.18em] text-transparent",
            project.accent
          )}
        >
          {project.tagline}
        </p>
        <p className="mt-5 text-base leading-relaxed text-white/65">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.map((feat) => (
            <li
              key={feat}
              className="flex items-start gap-3 text-sm text-white/75"
            >
              <span
                className={cn(
                  "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r",
                  project.accent
                )}
              />
              {feat}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.demo && (
            <Button asChild>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Featured Work"
          title="Things I've"
          highlight="actually shipped."
          description="A selection of products I've built end-to-end — from real user problems and ML models down to UI polish and deployment."
        />

        <div className="mt-20 space-y-28">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
