import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const REPO_OWNER = "Yasin-Ahmed-Kamal-Khan";
const REPO_NAME = "cv";
const REF = "main";

const token = process.env.CV_REPO_PAT;

if (!token) {
  console.warn(
    "[fetch-cv] CV_REPO_PAT not set — skipping CV fetch. /Yasin-Khan-CV.pdf will be missing or stale in this build. " +
      "Set CV_REPO_PAT in .env.local for local testing, or as a repo secret for CI.",
  );
  process.exit(0);
}

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "portfolio-cv-fetch-script",
};

async function githubRequest(url) {
  const res = await fetch(url, { headers });
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
  return res.json();
}

// Find whichever PDF lives at the repo root, rather than hardcoding a filename —
// renaming the CV file in the cv repo shouldn't require a code change here.
const rootEntries = await githubRequest(
  `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents?ref=${REF}`,
);
const pdfEntries = rootEntries.filter(
  (entry) => entry.type === "file" && entry.name.toLowerCase().endsWith(".pdf"),
);

if (pdfEntries.length === 0) {
  console.error(`[fetch-cv] No PDF file found at the root of ${REPO_OWNER}/${REPO_NAME}. Aborting.`);
  process.exit(1);
}
if (pdfEntries.length > 1) {
  console.error(
    `[fetch-cv] Found multiple PDF files at the root of ${REPO_OWNER}/${REPO_NAME}, refusing to guess which is the CV: ` +
      `${pdfEntries.map((entry) => entry.name).join(", ")}. Remove the extras or move them into a subfolder.`,
  );
  process.exit(1);
}

const cvPath = pdfEntries[0].path;
const data = await githubRequest(
  `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURIComponent(cvPath)}?ref=${REF}`,
);
const buffer = Buffer.from(data.content.replace(/\n/g, ""), "base64");

if (buffer.subarray(0, 4).toString() !== "%PDF") {
  console.error("[fetch-cv] Downloaded file does not look like a valid PDF (missing %PDF header). Aborting.");
  process.exit(1);
}

const outPath = fileURLToPath(new URL("../public/Yasin-Khan-CV.pdf", import.meta.url));
await mkdir(fileURLToPath(new URL("../public", import.meta.url)), { recursive: true });
await writeFile(outPath, buffer);
console.log(`[fetch-cv] Wrote public/Yasin-Khan-CV.pdf from "${cvPath}" (${buffer.length} bytes)`);
