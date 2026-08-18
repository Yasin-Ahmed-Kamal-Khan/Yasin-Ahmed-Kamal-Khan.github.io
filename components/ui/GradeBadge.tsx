// Distinct from Tag (neutral gray, sans-serif) on purpose: a grade is the
// single most scannable fact on an education card, so it gets the accent
// color and Geist Mono's "numeric/technical" texture instead of blending in
// with skill tags elsewhere on the site.
export function GradeBadge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-accent/40 px-2.5 py-1 font-mono text-xs font-semibold text-accent">
      {children}
    </span>
  );
}
