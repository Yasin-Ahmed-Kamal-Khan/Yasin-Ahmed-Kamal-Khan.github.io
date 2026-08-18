"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Split out from Nav so only this small piece needs to be a client component
// (usePathname reads routing state, which requires "use client") — Nav
// itself stays a server component.
export function NavLink({ href, children }: { href: string; children: string }) {
  const pathname = usePathname();
  // Hash links (e.g. "/#cv") point at a section of the homepage rather than
  // a route of their own, so there's no route match to highlight for them.
  const isActive =
    !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? "text-foreground"
          : "text-foreground/70 transition-colors hover:text-accent"
      }
    >
      {children}
    </Link>
  );
}
