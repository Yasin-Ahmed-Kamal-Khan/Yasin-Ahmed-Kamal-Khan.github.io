import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-black/10 p-5 dark:border-white/10">
      {children}
    </div>
  );
}
