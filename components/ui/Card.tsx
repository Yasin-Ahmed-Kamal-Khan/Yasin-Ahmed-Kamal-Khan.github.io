import type { ReactNode } from "react";

// padded=false for cards whose content controls its own padding — e.g. an
// interactive <details>/<summary> where the clickable region needs to be
// the full visible rectangle, not just the content Card would pad inward.
export function Card({
  children,
  padded = true,
}: {
  children: ReactNode;
  padded?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border border-black/10 dark:border-white/10 ${padded ? "p-5" : ""}`}
    >
      {children}
    </div>
  );
}
