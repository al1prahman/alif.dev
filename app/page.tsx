import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { CredentialsSection } from "@/components/sections/credentials";
import { ActivitySection } from "@/components/sections/activity";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CredentialsSection />
      <ActivitySection />
      <ContactSection />
    </>
  );
}
