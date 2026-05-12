import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { Navbar } from "@/sections/navbar";
import { ProjectsSection } from "@/sections/projects";
import { SkillsSection } from "@/sections/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
