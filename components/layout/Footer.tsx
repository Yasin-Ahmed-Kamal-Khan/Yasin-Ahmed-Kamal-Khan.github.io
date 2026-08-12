import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-foreground/60">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-4">
          {siteConfig.social.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
