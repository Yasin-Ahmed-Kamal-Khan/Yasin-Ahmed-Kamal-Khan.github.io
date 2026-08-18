import type { Metadata } from "next";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <main className="flex-1">
      <Education />
    </main>
  );
}
