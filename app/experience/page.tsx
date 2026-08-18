import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      <Experience />
    </main>
  );
}
