import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Yasin Khan",
  tagline: "Computing student at Imperial College London",
  email: "yasinakkhan04@gmail.com",
  social: [
    { label: "GitHub", url: "https://github.com/Yasin-Ahmed-Kamal-Khan" },
    // Add LinkedIn, etc. here as more links are needed.
  ],
  sections: [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "competitions", label: "Competitions" },
    { id: "volunteering", label: "Volunteering" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
  ],
};
