"use client";

import { GithubIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work with a focus on clarity, motion, and polish."
            description="These cards mix product thinking with visual rhythm and hover depth to create a portfolio that feels intentionally crafted."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.12}>
              <motion.div whileHover={{ y: -10, rotateX: 4, rotateY: -5 }} style={{ perspective: 1200 }}>
                <Card className="group h-full overflow-hidden border-white/10 bg-white/5 p-0 transition hover:border-cyan-300/40">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0f19]/70 text-cyan-300 backdrop-blur">
                      <project.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="border-white/10 bg-white/5 text-slate-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={project.live}
                        className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-sm font-medium text-white transition hover:-translate-y-0.5"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.code}
                        className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
                      >
                        GitHub
                        <GithubIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
