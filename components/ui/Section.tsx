import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-black/10 py-16 last:border-b-0 dark:border-white/10"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title={title} />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
