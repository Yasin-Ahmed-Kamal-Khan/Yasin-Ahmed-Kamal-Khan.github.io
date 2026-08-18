export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground">
      <span className="h-2 w-2 rounded-sm bg-accent" aria-hidden />
      {title}
    </h2>
  );
}
