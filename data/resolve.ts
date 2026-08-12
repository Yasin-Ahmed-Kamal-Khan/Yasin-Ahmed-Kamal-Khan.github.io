import type { AssociatedWith } from "./types";
import { experience } from "./experience";
import { competitions } from "./competitions";
import { education } from "./education";
import { volunteering } from "./volunteering";

/**
 * Resolves an `associatedWith` reference to a human-readable label,
 * by looking up the entry's `id` in the corresponding data file.
 */
export function resolveAssociation(assoc: AssociatedWith): string | undefined {
  switch (assoc.kind) {
    case "experience":
      return experience.find((e) => e.id === assoc.id)?.organisation;
    case "competition":
      return competitions.find((c) => c.id === assoc.id)?.name;
    case "education":
      return education.find((e) => e.id === assoc.id)?.institution;
    case "volunteering":
      return volunteering.find((v) => v.id === assoc.id)?.organisation;
  }
}
