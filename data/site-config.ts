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
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "education", label: "Education", href: "/education" },
    { id: "competitions", label: "Competitions", href: "/competitions" },
    { id: "volunteering", label: "Volunteering", href: "/volunteering" },
    { id: "cv", label: "CV", href: "/#cv" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
};
