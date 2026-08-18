import type { Metadata } from "next";
import { Competitions } from "@/components/sections/Competitions";

export const metadata: Metadata = { title: "Competitions" };

export default function CompetitionsPage() {
  return (
    <main className="flex-1">
      <Competitions />
    </main>
  );
}
