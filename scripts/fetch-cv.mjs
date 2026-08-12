import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const REPO_OWNER = "Yasin-Ahmed-Kamal-Khan";
const REPO_NAME = "cv";
const CV_PATH = "Yasin Khan CV.pdf";
const REF = "main";

const token = process.env.CV_REPO_PAT;

if (!token) {
  console.warn(
    "[fetch-cv] CV_REPO_PAT not set — skipping CV fetch. /cv.pdf will be missing or stale in this build. " +
      "Set CV_REPO_PAT in .env.local for local testing, or as a repo secret for CI.",
  );
  process.exit(0);
}

const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURIComponent(CV_PATH)}?ref=${REF}`;

const res = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-cv-fetch-script",
  },
});

if (!res.ok) {
  const body = await res.text();
  const hints = {
    401: "PAT is invalid or expired.",
    403: "Rate-limited, or the PAT lacks access to this repo (needs 'repo' scope for classic PATs, or Contents: Read-only for fine-grained PATs scoped to this repo).",
    404: "Repo/path not found, or the PAT can't see this private repo (GitHub returns 404 rather than 403 for private repos the token can't access).",
  }[res.status];
  console.error(
    `[fetch-cv] GitHub API request failed: ${res.status} ${res.statusText}${hints ? ` — ${hints}` : ""}\n${body}`,
  );
  process.exit(1);
}

const data = await res.json();
const buffer = Buffer.from(data.content.replace(/\n/g, ""), "base64");

if (buffer.subarray(0, 4).toString() !== "%PDF") {
  console.error("[fetch-cv] Downloaded file does not look like a valid PDF (missing %PDF header). Aborting.");
  process.exit(1);
}

const outPath = fileURLToPath(new URL("../public/cv.pdf", import.meta.url));
await writeFile(outPath, buffer);
console.log(`[fetch-cv] Wrote public/cv.pdf (${buffer.length} bytes)`);
