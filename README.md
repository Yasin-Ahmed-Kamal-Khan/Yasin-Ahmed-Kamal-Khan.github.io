# Portfolio

Personal portfolio site — Next.js (App Router, TypeScript) + Tailwind CSS, statically exported and deployed to GitHub Pages.

## Adding content

All content lives in typed data files under `data/` — components never need editing to add a new entry:

- `data/site-config.ts` — name, tagline, email, social links, nav sections
- `data/experience.ts`, `data/projects.ts`, `data/education.ts`, `data/competitions.ts`, `data/volunteering.ts`

Add an object to the relevant array (matching the interfaces in `data/types.ts`) and it appears on the site. A section only shows in the nav once its array has at least one entry.

Link a project to the experience/competition/education/volunteering it was built for via `associatedWith`, referencing the other entry's `id`:

```ts
associatedWith: [{ kind: "competition", id: "some-competition-id" }],
```

## Local development

```bash
npm run dev
```

## CV

The CV is fetched at build time (`prebuild` script → `scripts/fetch-cv.mjs`) from the private `Yasin-Ahmed-Kamal-Khan/cv` repo via the GitHub Contents API, written to `public/cv.pdf`, and never committed.

- Requires a GitHub Personal Access Token (fine-grained, scoped to the `cv` repo, Contents: Read-only) with access to that repo.
- **Locally:** put it in a gitignored `.env.local` as `CV_REPO_PAT=...`, then run `npm run fetch-cv:local` (or `npm run build`, which uses the plain `node scripts/fetch-cv.mjs` prebuild step and will warn + skip if no token is set — this is expected in local dev).
- **In CI:** add it as a repository secret named `CV_REPO_PAT` (Settings → Secrets and variables → Actions).

If the token is missing, the build still succeeds but `/cv.pdf` will be missing or stale — this is intentional so `next dev`/local builds aren't blocked. If the token is present but the fetch fails (bad token, renamed file, etc.), the build fails loudly instead of shipping a broken CV link.

## Deployment

Deploys automatically via `.github/workflows/deploy.yml` on push to `main` (or manually via workflow_dispatch).

One-time setup in the GitHub repo settings:
1. Settings → Secrets and variables → Actions → add `CV_REPO_PAT`.
2. Settings → Pages → Source → set to **GitHub Actions**.

### Custom domain (later)

Once a domain is purchased:
1. Add a `public/CNAME` file containing just the bare domain (e.g. `example.com`, no protocol/trailing slash).
2. At the domain registrar, point DNS at GitHub Pages (A records to GitHub's Pages IPs for an apex domain, or a CNAME record to `yasin-ahmed-kamal-khan.github.io` for a subdomain like `www`).
3. After DNS propagates, re-check "Enforce HTTPS" in Settings → Pages once the certificate provisions.
