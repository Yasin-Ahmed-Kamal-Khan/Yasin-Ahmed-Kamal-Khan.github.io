export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-foreground/80 dark:bg-white/10">
      {children}
    </span>
  );
}
