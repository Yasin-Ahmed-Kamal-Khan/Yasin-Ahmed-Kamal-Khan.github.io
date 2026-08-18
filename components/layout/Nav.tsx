import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import type { NavSection } from "@/data/types";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

export function Nav({ sections }: { sections: NavSection[] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4 text-sm">
        <Link href="/" className="font-semibold text-foreground">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex flex-wrap gap-4">
            {sections.map((section) => (
              <li key={section.id}>
                <NavLink href={section.href}>{section.label}</NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
