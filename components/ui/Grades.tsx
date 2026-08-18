// Distinct from Tag (neutral gray, sans-serif) on purpose: a grade is the
// single most scannable fact on an education card. Geist Mono's
// "numeric/technical" texture does that job on its own — no pill/border
// needed on top of it.
export function Grades({ children }: { children: string }) {
  return (
    <p className="font-mono text-sm font-semibold text-accent">{children}</p>
  );
}
