// Syncs the wiki/ source of truth into Quartz's content/ folder.
// Runs identically on Windows (local) and Ubuntu (CI). Pure Node, no deps.
//
// The wiki/ directory is the single source of truth; content/ is generated
// and git-ignored. Non-public material is excluded here (and, as a safety
// net, also via ignorePatterns in quartz.config.ts).
//
// Home / catalog remap (website-only, leaves wiki/ untouched):
//   wiki/home.md   -> content/index.md   (the public landing page, served at /)
//   wiki/index.md  -> content/browse.md  (the full A-Z catalog, served at /browse)
// This keeps wiki/index.md as the machine-readable catalog that the /ingest,
// /query, /lint, etc. skills read and update, while the site gets a proper
// landing page without breaking any of those workflows.

import { cp, rm, mkdir, copyFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const here = path.dirname(fileURLToPath(import.meta.url))
const wikiDir = path.resolve(here, "..", "wiki")
const contentDir = path.resolve(here, "content")

// Top-level paths (relative to wiki/) that must never be published.
const EXCLUDE = new Set(["output", ".meta", "log.md"])

// Handled by the remap below, so skip them in the bulk copy.
const REMAPPED = new Set(["home.md", "index.md"])

if (!existsSync(wikiDir)) {
  console.error(`[sync-content] wiki directory not found: ${wikiDir}`)
  process.exit(1)
}

await rm(contentDir, { recursive: true, force: true })
await mkdir(contentDir, { recursive: true })

await cp(wikiDir, contentDir, {
  recursive: true,
  filter: (src) => {
    const rel = path.relative(wikiDir, src)
    if (rel === "") return true
    const top = rel.split(path.sep)[0]
    return !EXCLUDE.has(top) && !REMAPPED.has(top)
  },
})

// Landing page -> site home (/). Falls back to the catalog if home.md is absent.
const homeSrc = path.join(wikiDir, "home.md")
if (existsSync(homeSrc)) {
  await copyFile(homeSrc, path.join(contentDir, "index.md"))
} else {
  console.warn("[sync-content] wiki/home.md not found — site home will be the catalog")
}

// Catalog -> /browse
const catalogSrc = path.join(wikiDir, "index.md")
if (existsSync(catalogSrc)) {
  await copyFile(catalogSrc, path.join(contentDir, existsSync(homeSrc) ? "browse.md" : "index.md"))
}

console.log(
  `[sync-content] copied wiki/ -> content/ (excluded: ${[...EXCLUDE].join(", ")}; ` +
    `home.md->index.md, index.md->browse.md)`,
)
