"use client";

import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { aboutStats } from "@/lib/site-data";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 via-cyan-400/10 to-pink-500/30 blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card overflow-hidden rounded-[2rem] p-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] border border-white/10">
                <Image
                  src="/brand/me.jpeg"
                  alt="Muhammad Zonair portrait"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
                About me
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Designing expressive interfaces with engineering discipline.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m a React developer who enjoys shaping polished experiences, solving UI details,
                and building interfaces that feel fast, clear, and alive. My background includes
                NetLogo and simulation work, which sharpened how I think about systems, state, and
                feedback loops. I also enjoy creative coding, strong visual hierarchy, and bringing
                product ideas to life with a thoughtful design language.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="group h-full border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.12)]">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
