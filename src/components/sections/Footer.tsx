"use client";

import { ArrowUp } from "lucide-react";

import { NAV_ITEMS, SITE, SOCIALS } from "@/lib/constants";
import { smoothScrollTo } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              onClick={() => smoothScrollTo("home")}
              className="group flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 backdrop-blur-md transition-all group-hover:border-purple-400/40">
                <span className="bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text font-display text-sm font-bold text-transparent">
                  {SITE.initials}
                </span>
              </span>
              <span className="font-display text-base font-semibold text-white">
                {SITE.name}
              </span>
            </button>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Building AI systems and full-stack products that solve real
              problems. Always shipping, always learning.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-x-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => smoothScrollTo(item.id)}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
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
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/45">
            © {year} {SITE.name}. Crafted with Next.js, Tailwind &amp; Framer
            Motion.
          </p>
          <button
            onClick={() => smoothScrollTo("home")}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 transition-all hover:-translate-y-0.5 hover:border-purple-400/40 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
