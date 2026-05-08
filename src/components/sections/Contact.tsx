"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/constants";

type Status = "idle" | "submitting" | "sent" | "error";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/varshithreddy987@gmail.com";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (form.website) return; // bot caught
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New portfolio message from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = (await res.json().catch(() => null)) as
        | { success?: string | boolean }
        | null;
      if (data && data.success === false) {
        throw new Error("FormSubmit rejected the request");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setStatus("idle"), 4500);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "Couldn't send right now. Email me directly at " + SITE.email + "."
      );
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Let's Build"
          title="Got a problem worth"
          highlight="solving?"
          description="Whether it's a hackathon team, an internship, or a wild idea you want prototyped — my inbox is open."
        />

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-7"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 opacity-60 blur-2xl" />
            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/55"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/55"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@somewhere.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-white/55"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your idea, role, or hackathon..."
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </div>

              {/* Honeypot — hidden from humans, bots fill it and get blocked */}
              <div
                aria-hidden
                className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, website: e.target.value }))
                  }
                />
              </div>

              {status === "error" && errorMsg && (
                <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {status === "sent" && (
                <div className="flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    Thanks — your message is on its way to {SITE.email}.
                  </span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full sm:w-auto"
              >
                {status === "submitting" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    Try Again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact info / socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/40"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Email
                    </p>
                    <p className="mt-1 truncate font-medium text-white">
                      {SITE.email}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/40"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/25 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 ring-1 ring-white/10">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Phone
                    </p>
                    <p className="mt-1 font-medium text-white">{SITE.phone}</p>
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/varshithdepa45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 ring-1 ring-white/10">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                    GitHub
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-white">
                    @varshithdepa45
                  </p>
                </a>

                <a
                  href="https://linkedin.com/in/varshith-reddy-98b701310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 ring-1 ring-white/10">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                    LinkedIn
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-white">
                    Varshith Reddy
                  </p>
                </a>
              </div>

              {/* Big resume download CTA */}
              <a
                href={SITE.resumeUrl}
                download="D_Varshith_Reddy_Resume.pdf"
                className="group relative mt-auto block overflow-hidden rounded-2xl p-[1.5px]"
              >
                <span className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0deg,#a855f7_120deg,#ec4899_240deg,#3b82f6_360deg)] opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0deg,#a855f7_120deg,#ec4899_240deg,#3b82f6_360deg)] blur-xl opacity-50 transition-opacity group-hover:opacity-80" />
                <span className="relative flex items-center justify-between gap-4 rounded-2xl bg-[#0b0b14] px-6 py-5">
                  <span className="flex items-center gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/40 transition-transform group-hover:scale-110">
                      <Download className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                        PDF · 1 page
                      </span>
                      <span className="font-display text-base font-semibold text-white sm:text-lg">
                        Download Resume
                      </span>
                    </span>
                  </span>
                  <span className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md transition-all group-hover:border-white/30 group-hover:text-white sm:inline-flex">
                    Get PDF
                    <Download className="h-3.5 w-3.5" />
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
