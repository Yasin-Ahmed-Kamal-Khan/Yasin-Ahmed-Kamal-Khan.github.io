import { siteConfig } from "@/data/site-config";
import type { NavSection } from "@/data/types";

export function Nav({ sections }: { sections: NavSection[] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4 text-sm">
        <a href="#" className="font-semibold text-foreground">
          {siteConfig.name}
        </a>
        <ul className="flex flex-wrap gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
