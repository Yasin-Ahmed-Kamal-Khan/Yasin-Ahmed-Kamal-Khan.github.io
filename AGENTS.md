<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project

Personal portfolio for a computing student at Imperial College London. Single-page Next.js (App Router, TypeScript) site, Tailwind CSS v4, statically exported (`output: "export"` in `next.config.ts`) and deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Content is data, not JSX

All page content lives in typed arrays under `data/` — shared interfaces in `data/types.ts`. To add a project, job, degree, competition, or volunteering entry: add an object to the matching array in `data/projects.ts` / `experience.ts` / `education.ts` / `competitions.ts` / `volunteering.ts`. **Do not hardcode content into components** — `components/sections/*` are strictly presentational (props/data in, JSX out) and map over these arrays.

- A section only renders (and only appears in the nav, via `app/page.tsx`'s `sectionHasContent`) once its data array has at least one entry.
- `data/site-config.ts` holds site-wide info (name, tagline, email, social links, nav order).
- A `Project` can reference another entry via `associatedWith: [{ kind: "competition" | "experience" | "education" | "volunteering", id }]`, resolved to a label by `data/resolve.ts` using the referenced entry's `id` — keep `id`s stable (kebab-case) since renames break the link silently otherwise.

## CV pipeline

`scripts/fetch-cv.mjs` runs as the npm `prebuild` step, fetching the CV PDF from the private `Yasin-Ahmed-Kamal-Khan/cv` repo via the GitHub Contents API using `CV_REPO_PAT`, and writes it to `public/cv.pdf` (gitignored, regenerated every build). Missing token → warns and exits 0 (local dev shouldn't be blocked). Token present but request fails → exits 1 (CI should fail loudly rather than ship a stale/missing CV). See `README.md` for the full setup steps.

## Verifying changes

Run `npm run build` to typecheck + confirm the static export still succeeds (`out/`). Run `npm run dev` and check in a browser (or headless via Playwright/`chromium-cli` if available) for anything touching layout or styling — this is a visual product, don't rely on the build passing alone.
