import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { formatDateRange } from "@/lib/format";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-4">
        {experience.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-foreground">
                {item.role} · {item.organisation}
              </h3>
              <span className="text-sm text-foreground/60">
                {formatDateRange(item.startDate, item.endDate)}
              </span>
            </div>
            {item.location && (
              <p className="mt-1 text-sm text-foreground/60">{item.location}</p>
            )}
            <p className="mt-3 text-sm text-foreground/80">{item.summary}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
