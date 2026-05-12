"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const successMessage = useMemo(
    () => "Thanks for reaching out. I’ll get back to you as soon as possible.",
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSubmitted(false);

    await new Promise((resolve) => window.setTimeout(resolve, 1200));

    setLoading(false);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something visually sharp and technically solid."
              description="If you have a product idea, internship opportunity, or creative collaboration, send a note and I’ll follow up."
            />

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="border-white/10 bg-white/5 p-6 sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" placeholder="Your name" required />
                <Input type="email" name="email" placeholder="Your email" required />
              </div>
              <Textarea name="message" placeholder="Tell me about your project..." required />
              <div className="flex items-center gap-4">
                <Button type="submit" className="min-w-40" disabled={loading}>
                  {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Send Message"}
                </Button>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Secure glass form
                </p>
              </div>
            </form>

            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-200"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>{successMessage}</span>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
