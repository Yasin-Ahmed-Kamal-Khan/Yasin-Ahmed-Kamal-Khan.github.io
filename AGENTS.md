<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project

Personal portfolio for a computing student at Imperial College London. Multi-page Next.js (App Router, TypeScript) site, Tailwind CSS v4, statically exported (`output: "export"` in `next.config.ts`) and deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Site structure

The homepage (`app/page.tsx`) is deliberately minimal — Hero, CV, Contact only: what an employer needs first. Every list-based section (Experience, Projects, Education, Competitions, Volunteering) has its own route instead (`app/experience/page.tsx`, etc.), each just rendering the matching `components/sections/*` component unchanged — the section components themselves don't know or care whether they're on the homepage or a standalone page.

`app/layout.tsx` is the shared shell: `Nav` and `Footer` render there (not in individual pages) so they persist across every route, and it's where `sectionHasContent` is computed (imports every `data/*.ts` array and checks length) since the nav needs that on every page, not just the homepage. Adding a new section-page pair means: create `app/<section>/page.tsx` rendering the section component, and add a `{ id, label, href }` entry to `data/site-config.ts`'s `sections` array.

## Content is data, not JSX

All page content lives in typed arrays under `data/` — shared interfaces in `data/types.ts`. To add a project, job, degree, competition, or volunteering entry: add an object to the matching array in `data/projects.ts` / `experience.ts` / `education.ts` / `competitions.ts` / `volunteering.ts`. **Do not hardcode content into components** — `components/sections/*` are strictly presentational (props/data in, JSX out) and map over these arrays.

- A section's nav link and page only make sense once its data array has at least one entry — `sectionHasContent` in `app/layout.tsx` hides the nav link otherwise, but the route itself isn't guarded (an empty section just renders nothing under `Nav`/`Footer`, no 404).
- `data/site-config.ts` holds site-wide info (name, tagline, email, social links, nav order) — `NavSection.href` drives routing directly (`Nav`/`NavLink` are dumb and just render whatever `href` each entry has), so it must point at a real route (`/experience`) or an in-page anchor on the homepage (`/#cv`).
- A `Project` can reference another entry via `associatedWith: [{ kind: "competition" | "experience" | "education" | "volunteering", id }]`, resolved to a label by `data/resolve.ts` using the referenced entry's `id` — keep `id`s stable (kebab-case) since renames break the link silently otherwise.

## Design system

Style is minimal/technical: mostly monochrome, with a single blue accent reserved for interactive/emphasis elements (CTAs, links, the section-heading marker, nav hover). **Never hardcode a color, radius, or font — use the theme tokens.**

- Tokens live in `app/globals.css`: `--background`, `--foreground`, `--accent`, `--accent-foreground`, redefined inside `.dark` for the dark variant, and exposed to Tailwind via the `@theme inline` block (so `bg-accent`, `text-foreground`, etc. work as utilities).
- Dark mode is **class-based**, not just `prefers-color-scheme`: `@custom-variant dark (&:where(.dark, .dark *))` makes `dark:` utilities key off a `.dark` class on `<html>`. This is what lets `ThemeToggle` override the OS preference — a pure media-query approach can't do that.
- `app/layout.tsx` inlines a small blocking `<script>` as the first child of `<body>` that sets `.dark` from `localStorage` (falling back to `matchMedia`) before first paint — removing it (or making it `next/script`, which defers) will reintroduce a flash of the wrong theme.
- `components/layout/ThemeToggle.tsx` and `components/layout/NavLink.tsx` are the only client-side (`"use client"`) pieces in the app — kept as small, isolated components (not whole pages) so most of the site still ships as plain server-rendered HTML with no client JS. `ThemeToggle` uses `useSyncExternalStore` to read the DOM's `.dark` class without a hydration mismatch; `NavLink` uses `usePathname()` to highlight the current page.
- Fonts: Geist Sans (`font-sans`, applied on `<body>`) for everything; Geist Mono (`font-mono`) is loaded but not yet used — reach for it for numeric/technical details (dates, tech tags) if a section calls for that texture, don't introduce a third font.
- Accent usage should stay restrained (CTAs, hover states, the section marker dot) — if a whole block starts turning blue, that's a sign to dial it back rather than a sign to add more.

## CV pipeline

`scripts/fetch-cv.mjs` runs as the npm `prebuild` step, fetching the CV PDF from the private `Yasin-Ahmed-Kamal-Khan/cv` repo via the GitHub Contents API using `CV_REPO_PAT`, and writes it to `public/Yasin-Khan-CV.pdf` (gitignored, regenerated every build). Missing token → warns and exits 0 (local dev shouldn't be blocked). Token present but request fails → exits 1 (CI should fail loudly rather than ship a stale/missing CV). See `README.md` for the full setup steps.

## Verifying changes

Run `npm run build` to typecheck + confirm the static export still succeeds (`out/`). Run `npm run dev` and check in a browser (or headless via Playwright/`chromium-cli` if available) for anything touching layout or styling — this is a visual product, don't rely on the build passing alone.
