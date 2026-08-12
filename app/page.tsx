import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Competitions } from "@/components/sections/Competitions";
import { Volunteering } from "@/components/sections/Volunteering";
import { CV } from "@/components/sections/CV";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/data/site-config";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { competitions } from "@/data/competitions";
import { volunteering } from "@/data/volunteering";

// Sections are only shown in the nav once their data file has an entry —
// add an object to the relevant data/*.ts array and the section appears.
const sectionHasContent: Record<string, boolean> = {
  experience: experience.length > 0,
  projects: projects.length > 0,
  education: education.length > 0,
  competitions: competitions.length > 0,
  volunteering: volunteering.length > 0,
  cv: true,
  contact: true,
};

export default function Home() {
  const visibleSections = siteConfig.sections.filter(
    (section) => sectionHasContent[section.id] ?? true,
  );

  return (
    <>
      <Nav sections={visibleSections} />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Competitions />
        <Volunteering />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
