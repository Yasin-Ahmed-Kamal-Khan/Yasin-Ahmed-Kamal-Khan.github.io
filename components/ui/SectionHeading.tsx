export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
      {title}
    </h2>
  );
}
