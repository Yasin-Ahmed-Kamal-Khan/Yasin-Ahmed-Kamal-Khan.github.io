import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { competitions } from "@/data/competitions";
import { volunteering } from "@/data/volunteering";
import { themeInit } from "@/lib/theme-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

// Serialize themeInit's source and run it immediately, as an IIFE — this
// has to execute before first paint (as the very first thing in <body>) so
// the correct theme is applied immediately; reading it later via useEffect
// would cause a visible flash of the wrong theme on the first frame.
const themeInitScript = `(${themeInit.toString()})();`;

// Nav is shared across every route (via this root layout), so a section's
// visibility has to be decided here rather than per-page — add an object to
// the relevant data/*.ts array and its nav link + page both start working.
const sectionHasContent: Record<string, boolean> = {
  experience: experience.length > 0,
  projects: projects.length > 0,
  education: education.length > 0,
  competitions: competitions.length > 0,
  volunteering: volunteering.length > 0,
  cv: true,
  contact: true,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const visibleSections = siteConfig.sections.filter(
    (section) => sectionHasContent[section.id] ?? true,
  );

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Nav sections={visibleSections} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
