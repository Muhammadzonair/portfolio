"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experienceTimeline } from "@/lib/site-data";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="A short timeline of growth, learning, and shipped work."
            description="The focus here is evolution: from university projects to internship delivery and a continuing creative coding path."
          />
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/80 via-indigo-500/80 to-pink-500/80 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-10">
            {experienceTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex gap-6 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
              >
                <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border border-white/20 bg-cyan-300 shadow-[0_0_18px_rgba(0,229,255,0.7)] sm:left-1/2" />
                <div className={`pl-12 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                  <div className="glass-card rounded-[1.75rem] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                      {item.year}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
