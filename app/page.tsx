import { Hero } from "@/components/sections/Hero";
import { CV } from "@/components/sections/CV";
import { Contact } from "@/components/sections/Contact";

// The homepage is deliberately minimal: what an employer needs first (who
// you are, your CV, how to reach you). Everything else — experience,
// projects, education, competitions, volunteering — lives on its own page,
// linked from the nav (see app/layout.tsx).
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CV />
      <Contact />
    </main>
  );
}
