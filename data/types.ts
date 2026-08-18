export type EntryId = string; // kebab-case, unique within its own file

export interface AssociatedWith {
  kind: "experience" | "competition" | "education" | "volunteering";
  id: EntryId;
}

export interface Project {
  id: EntryId;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    writeup?: string;
  };
  image?: string;
  associatedWith?: AssociatedWith[];
  startDate: string; // ISO "YYYY-MM"
  endDate?: string; // omit if ongoing
  featured?: boolean;
}

export interface Experience {
  id: EntryId;
  role: string;
  organisation: string;
  location?: string;
  startDate: string;
  endDate?: string; // omit = "Present"
  summary: string;
  highlights?: string[];
  tags?: string[];
}

export interface Education {
  id: EntryId;
  institution: string;
  qualification: string;
  startDate: string;
  endDate?: string;
  location?: string;
  details?: string[];
}

export interface Competition {
  id: EntryId;
  name: string;
  organiser?: string;
  date: string;
  result?: string;
  description?: string;
  tags?: string[];
}

export interface Volunteering {
  id: EntryId;
  role: string;
  organisation: string;
  startDate: string;
  endDate?: string;
  summary: string;
  tags?: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface NavSection {
  id: string;
  label: string;
  href: string; // "/experience" for a dedicated page, "/#cv" for an in-page anchor on the homepage
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  social: SocialLink[];
  sections: NavSection[];
}
