"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/site-data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A balanced stack for product work and creative execution."
            description="Each area reflects both practical delivery and visual craft, from responsive systems to modern tooling and collaborative design flow."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.1}>
              <Card className="group h-full border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(108,99,255,0.14)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 transition group-hover:scale-105 group-hover:text-white">
                    <group.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-300">{group.description}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-200">
                          <skill.icon className="h-4 w-4 text-cyan-300" />
                          {skill.name}
                        </div>
                        <span className="text-slate-400">{skill.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-300 to-pink-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: skillIndex * 0.06 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
