import { volunteering } from "@/data/volunteering";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { formatDateRange } from "@/lib/format";

export function Volunteering() {
  if (volunteering.length === 0) return null;

  return (
    <Section id="volunteering" title="Volunteering">
      <div className="flex flex-col gap-4">
        {volunteering.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-foreground">
                {item.role} · {item.organisation}
              </h3>
              <span className="text-sm text-foreground/60">
                {formatDateRange(item.startDate, item.endDate)}
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{item.summary}</p>
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
