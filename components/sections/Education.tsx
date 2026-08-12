import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { formatDateRange } from "@/lib/format";

export function Education() {
  if (education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-foreground">
                {item.qualification}, {item.institution}
              </h3>
              <span className="text-sm text-foreground/60">
                {formatDateRange(item.startDate, item.endDate)}
              </span>
            </div>
            {item.location && (
              <p className="mt-1 text-sm text-foreground/60">{item.location}</p>
            )}
            {item.details && item.details.length > 0 && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
