import { competitions } from "@/data/competitions";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { formatMonthYear } from "@/lib/format";

export function Competitions() {
  if (competitions.length === 0) return null;

  return (
    <Section id="competitions" title="Competitions">
      <div className="flex flex-col gap-4">
        {competitions.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-foreground">
                {item.name}
                {item.result ? ` — ${item.result}` : ""}
              </h3>
              <span className="text-sm text-foreground/60">
                {formatMonthYear(item.date)}
              </span>
            </div>
            {item.organiser && (
              <p className="mt-1 text-sm text-foreground/60">{item.organiser}</p>
            )}
            {item.description && (
              <p className="mt-3 text-sm text-foreground/80">{item.description}</p>
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
