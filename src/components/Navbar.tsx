"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn, smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = item.id;
          }
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    smoothScrollTo(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-6",
            scrolled
              ? "bg-black/60 shadow-2xl shadow-purple-500/10"
              : "bg-white/[0.03]"
          )}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="group relative flex items-center gap-2"
            aria-label="Home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 backdrop-blur-md transition-all group-hover:border-purple-400/40">
              <span className="bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text font-display text-sm font-bold text-transparent">
                {SITE.initials}
              </span>
              <span className="absolute inset-0 -z-10 rounded-xl bg-purple-500/40 opacity-0 blur-lg transition-opacity group-hover:opacity-60" />
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 ring-1 ring-white/10"
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => handleNavClick("contact")}
            >
              Let&apos;s Talk
            </Button>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-4 mt-6 rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text font-display text-lg font-bold text-transparent">
                  {SITE.initials}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-base transition-all",
                        active === item.id
                          ? "border-white/10 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-fuchsia-500/15 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-white/40">
                        0{NAV_ITEMS.indexOf(item) + 1}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  className="w-full"
                  onClick={() => handleNavClick("contact")}
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
