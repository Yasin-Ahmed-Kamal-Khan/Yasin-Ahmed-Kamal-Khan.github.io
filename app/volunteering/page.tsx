import type { Metadata } from "next";
import { Volunteering } from "@/components/sections/Volunteering";

export const metadata: Metadata = { title: "Volunteering" };

export default function VolunteeringPage() {
  return (
    <main className="flex-1">
      <Volunteering />
    </main>
  );
}
