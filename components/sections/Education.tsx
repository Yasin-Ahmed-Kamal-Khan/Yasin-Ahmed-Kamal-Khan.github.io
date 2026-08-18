import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GradeBadge } from "@/components/ui/GradeBadge";
import { formatDateRange } from "@/lib/format";

export function Education() {
  if (education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((item) => {
          const details = item.details ?? [];
          const hasDetails = details.length > 0;

          // Shared between the interactive and plain-card rendering below,
          // so the header markup only has to be written once.
          const header = (
            <>
              <div>
                <h3 className="font-semibold text-foreground">
                  {item.qualification}, {item.institution}
                </h3>
                {item.location && (
                  <p className="mt-1 text-sm text-foreground/60">
                    {item.location}
                  </p>
                )}
                {item.grades && Object.keys(item.grades).length > 0 && (
                  <div className="mt-2">
                    <GradeBadge>{Object.values(item.grades).join(" · ")}</GradeBadge>
                  </div>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-sm text-foreground/60">
                  {formatDateRange(item.startDate, item.endDate)}
                </span>
                {hasDetails && (
                  <ChevronIcon className="text-foreground/40 transition-transform group-hover:text-accent group-open:rotate-180" />
                )}
              </div>
            </>
          );

          return (
            <Card key={item.id} padded={false}>
              {hasDetails ? (
                // Padding lives on <summary>/<ul> (not on Card) so the
                // entire visible rectangle is clickable, not just the text.
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                    {header}
                  </summary>
                  <ul className="list-inside list-disc space-y-1 border-t border-black/10 px-5 pt-3 pb-5 text-sm text-foreground/80 dark:border-white/10">
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              ) : (
                // No details to show — render the same header, but as a
                // plain (non-interactive) block: no chevron, no cursor, no
                // dropdown to open.
                <div className="flex items-start justify-between gap-4 p-5">
                  {header}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`h-4 w-4 shrink-0 ${className}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}
