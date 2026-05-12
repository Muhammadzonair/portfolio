"use client";

import { heroHighlights } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((module) => module.HeroScene),
  { ssr: false },
);

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroHighlights.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, particleIndex) => ({
        id: particleIndex,
        left: `${(particleIndex * 17) % 100}%`,
        top: `${(particleIndex * 29) % 100}%`,
        delay: `${(particleIndex % 6) * 0.45}s`,
      })),
    [],
  );

  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.18),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_60%)]" />
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(0,229,255,0.6)] animate-pulse"
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
          />
        ))}
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-cyan-200/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Available for opportunities
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Muhammad Zonair</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Software Engineer &amp; Frontend Developer
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build high-performance interfaces with motion, clarity, and a strong product sense.
            </p>
          </div>

          <div className="h-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className="text-base font-medium text-white sm:text-lg"
              >
                {heroHighlights[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 text-sm font-medium text-white shadow-[0_0_35px_rgba(108,99,255,0.3)] transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </Link>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {heroHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1 }}
          className="relative min-h-[36rem] lg:min-h-[44rem]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.16),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl" />
          <HeroScene />
          <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-3xl border border-white/10 bg-[#0b0f19]/70 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Mouse parallax enabled</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-300 to-pink-500"
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto flex w-full max-w-7xl justify-center pb-4"
      >
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.45em] text-slate-400">
          <span className="h-16 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/90 to-cyan-300/0" />
          Scroll
        </div>
      </motion.div>
    </section>
  );
}
