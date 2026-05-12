import { FigmaIcon, GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import type { ComponentType } from "react";
import {
  ArrowUpRight,
  Blocks,
  Braces,
  Code2,
  GitBranch,
  Mail,
  MonitorSmartphone,
  Palette,
  Rocket,
  Server,
  Sparkles,
  SquareTerminal,
  Terminal,
  Workflow,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroHighlights = [
  "React-first architecture",
  "3D motion & immersive UI",
  "Creative coding with simulation thinking",
] as const;

export const aboutStats = [
  { label: "Projects completed", value: "15+" },
  { label: "Technologies learned", value: "25+" },
  { label: "Internship experience", value: "1" },
  { label: "GitHub repos", value: "18+" },
] as const;

type IconType = ComponentType<{ className?: string }>;

export type SkillItem = {
  name: string;
  progress: number;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: IconType;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern interfaces with responsive systems and motion design.",
    icon: MonitorSmartphone,
    skills: [
      { name: "React", progress: 96, icon: Code2 },
      { name: "Next.js", progress: 94, icon: Sparkles },
      { name: "Tailwind CSS", progress: 95, icon: Palette },
      { name: "TypeScript", progress: 92, icon: Braces },
    ],
  },
  {
    title: "Backend",
    description: "Practical APIs and lightweight service design.",
    icon: Server,
    skills: [
      { name: "Node.js", progress: 84, icon: Terminal },
      { name: "Express", progress: 80, icon: Workflow },
    ],
  },
  {
    title: "Tools",
    description: "Design systems, collaboration, and deployment workflow.",
    icon: SquareTerminal,
    skills: [
      { name: "Git", progress: 90, icon: GitBranch },
      { name: "GitHub", progress: 92, icon: GithubIcon },
      { name: "Figma", progress: 83, icon: FigmaIcon },
    ],
  },
];

export const projects = [
  {
    title: "Restaurant Management Website",
    description:
      "A comprehensive restaurant management website featuring menu browsing, table reservations, order management, and responsive design. Built with modern web technologies for seamless user experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/brand/project-1.svg",
    live: "https://muhammadzonair.github.io/",
    code: "https://github.com/Muhammadzonair/-Restaurant-website-",
    icon: Rocket,
  },
  {
    title: "Airport Management System",
    description:
      "A comprehensive airport management system built with React. Handles flight scheduling, passenger information, and airport operations with a modern responsive interface.",
    tech: ["React", "JavaScript", "Management System"],
    image: "/brand/project-2.svg",
    live: "https://muhammadzonair.github.io/Airport_Management_System/",
    code: "https://github.com/Muhammadzonair/Airport_Management_System",
    icon: Blocks,
  },
  {
    title: "Orphanage Webpage",
    description:
      "A responsive, modern landing page for an orphanage that gives a warm, trustworthy first impression and clearly presents mission, programs, and ways to help.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    image: "/brand/project-3.svg",
    live: "https://muhammadzonair.github.io/Orphanage-webpage/",
    code: "https://github.com/Muhammadzonair/Orphanage-webpage",
    icon: ArrowUpRight,
  },
] as const;

export const experienceTimeline = [
  {
    year: "2024",
    title: "Frontend Internship",
    description:
      "Built production-ready components, refined responsive layouts, and learned design-to-code handoff in a fast-moving team.",
  },
  {
    year: "2023",
    title: "University Projects",
    description:
      "Delivered interactive coursework, simulation tools, and UI-heavy assignments that strengthened product thinking.",
  },
  {
    year: "2022 - Now",
    title: "Creative Learning Journey",
    description:
      "Focused on React, modern frontend architecture, NetLogo-inspired simulations, and expressive visual storytelling.",
  },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Muhammadzonair", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-zonair-8094962b2/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:mzunair484@gmail.com", icon: Mail },
] as const;
