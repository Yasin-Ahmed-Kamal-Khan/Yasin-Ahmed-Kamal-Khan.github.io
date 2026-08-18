// Not called directly from React — layout.tsx takes this function's source
// via `.toString()` and inlines it as a blocking <script>, so it runs in the
// browser before first paint, before React exists at all. Keep it a plain,
// self-contained function (no imports, no references to anything outside
// its own body) since only its source text ends up in the page.
export function themeInit() {
  try {
    const stored = localStorage.getItem("theme");
    const dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch {
    // localStorage/matchMedia can throw in locked-down environments
    // (private browsing, disabled storage) — falling back to light mode
    // is fine, it's just a style choice.
  }
}
