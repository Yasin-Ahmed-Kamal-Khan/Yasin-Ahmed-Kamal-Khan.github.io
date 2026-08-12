import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <p className="text-sm font-medium text-foreground/60">Hi, I&apos;m</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/70">
        {siteConfig.tagline}
      </p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {siteConfig.social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 px-4 py-2 font-medium text-foreground transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
