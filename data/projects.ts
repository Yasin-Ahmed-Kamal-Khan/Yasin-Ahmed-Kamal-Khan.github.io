import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — a Next.js + Tailwind portfolio with a typed, data-driven content layer.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Yasin-Ahmed-Kamal-Khan/Yasin-Ahmed-Kamal-Khan.github.io",
    },
    startDate: "2026-08",
    featured: true,
  },
  // Add more projects here. Use `associatedWith` to link a project to an
  // entry in experience.ts, competitions.ts, education.ts, or volunteering.ts, e.g.:
  // associatedWith: [{ kind: "competition", id: "example-hackathon-2025" }],
];
