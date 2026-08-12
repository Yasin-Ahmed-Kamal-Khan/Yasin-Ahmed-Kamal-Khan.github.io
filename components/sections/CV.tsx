import { Section } from "@/components/ui/Section";

export function CV() {
  return (
    <Section id="cv" title="CV">
      <p className="text-sm text-foreground/80">
        Download my latest CV as a PDF.
      </p>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90"
      >
        Download CV
      </a>
    </Section>
  );
}
