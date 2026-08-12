import { siteConfig } from "@/data/site-config";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-sm text-foreground/80">
        Feel free to reach out at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-foreground underline underline-offset-2"
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </Section>
  );
}
