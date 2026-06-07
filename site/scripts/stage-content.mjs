// Stage wiki content for the Quartz build.
//
// Copies ../wiki -> ./content with publish-time adjustments. The wiki itself
// is never modified.
//
//   1. Excludes internal/operational files (.obsidian, .meta, output/, log.md)
//   2. Renames index.md -> catalog.md (the full source catalog)
//   3. Installs home.md as content/index.md (the site landing page)
//   4. Rewrites frontmatter on every page:
//      - injects `title:` from the first H1 (otherwise Quartz falls back to
//        kebab-case filenames in search/graph/backlinks)
//      - maps date_created/date_modified -> created/modified (the field names
//        the created-modified-date plugin reads)
//
// Run from site/: node scripts/stage-content.mjs

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const siteDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const wikiDir = path.join(path.dirname(siteDir), "wiki")
const contentDir = path.join(siteDir, "content")
const homePage = path.join(siteDir, "home.md")

const EXCLUDED_DIRS = new Set([".obsidian", ".meta", "output"])
const EXCLUDED_FILES = new Set(["log.md"])

function transformMarkdown(raw) {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!fmMatch) return raw

  let frontmatter = fmMatch[1]
  const body = raw.slice(fmMatch[0].length)

  // Map wiki date fields to the names Quartz's created-modified-date plugin reads
  frontmatter = frontmatter
    .replace(/^date_created:/m, "created:")
    .replace(/^date_modified:/m, "modified:")

  // Inject title from the first H1 unless one is already present
  if (!/^title:/m.test(frontmatter)) {
    const h1 = body.match(/^# (.+)$/m)
    if (h1) {
      const title = h1[1].trim().replace(/"/g, '\\"')
      frontmatter = `title: "${title}"\n` + frontmatter
    }
  }

  return `---\n${frontmatter}\n---\n${body}`
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  let copied = 0
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue
      copied += copyDir(srcPath, destPath)
    } else {
      if (EXCLUDED_FILES.has(entry.name) && src === wikiDir) continue
      if (entry.name.endsWith(".md")) {
        fs.writeFileSync(destPath, transformMarkdown(fs.readFileSync(srcPath, "utf-8")))
      } else {
        fs.copyFileSync(srcPath, destPath)
      }
      copied++
    }
  }
  return copied
}

// Keep content/ out of git via .git/info/exclude rather than a committed
// .gitignore: Quartz's file discovery (globby gitignore:true) respects every
// committed .gitignore up to the repo root and would otherwise find 0 files.
function ensureGitExclude() {
  const excludeFile = path.join(path.dirname(siteDir), ".git", "info", "exclude")
  if (!fs.existsSync(path.dirname(excludeFile))) return // not a git checkout
  const entry = "site/content/"
  const current = fs.existsSync(excludeFile) ? fs.readFileSync(excludeFile, "utf-8") : ""
  if (!current.split(/\r?\n/).includes(entry)) {
    fs.writeFileSync(excludeFile, current.replace(/\n?$/, "\n") + entry + "\n")
  }
}

if (!fs.existsSync(wikiDir)) {
  console.error(`wiki directory not found: ${wikiDir}`)
  process.exit(1)
}
if (!fs.existsSync(homePage)) {
  console.error(`landing page not found: ${homePage}`)
  process.exit(1)
}

ensureGitExclude()
fs.rmSync(contentDir, { recursive: true, force: true })
const count = copyDir(wikiDir, contentDir)

// The wiki's catalog becomes catalog.md; home.md becomes the site homepage
fs.renameSync(path.join(contentDir, "index.md"), path.join(contentDir, "catalog.md"))
fs.writeFileSync(path.join(contentDir, "index.md"), transformMarkdown(fs.readFileSync(homePage, "utf-8")))

console.log(`Staged ${count} files from wiki/ into content/`)
