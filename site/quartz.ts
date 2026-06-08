import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import type { FileTrieNode } from "./quartz/util/fileTrie"

// Explorer folder order. YAML can't express a function-valued `sortFn`, so the
// custom order is injected here via the generated plugin override seam
// (.quartz/plugins, produced by scripts/setup-plugins.ts before the build).
// This must run before loadQuartzConfig() so the override is merged into the
// explorer plugin's options. Top-level folders follow this sequence; everything
// else (root pages, subfolders, files) falls back to alphabetical.
//
// IMPORTANT: the explorer serializes this function with `.toString()` and
// re-creates it client-side via `new Function`, so it MUST be fully
// self-contained — no closure variables, imports, or external helpers. Do NOT
// introduce a named inner function either: esbuild's keep-names wraps it in a
// `__name(...)` call that is undefined in the browser's `new Function` scope.
// Keep the order array inlined and the name comparison expressed directly.
ExternalPlugin.Explorer({
  sortFn: (a: FileTrieNode, b: FileTrieNode) => {
    const order = [
      "sources",
      "concepts",
      "entities",
      "findings",
      "questions",
      "debates",
      "methods",
      "evidence",
    ]

    // Folders before files (Quartz's default top-level behavior).
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1

    if (a.isFolder && b.isFolder) {
      const ai = order.indexOf(a.slugSegment)
      const bi = order.indexOf(b.slugSegment)
      if (ai !== -1 && bi !== -1) return ai - bi // both ranked → explicit order
      if (ai !== -1) return -1 // ranked folder before unranked
      if (bi !== -1) return 1
      // neither ranked → fall through to alphabetical
    }

    // Files, and unranked folders → alphabetical by display name.
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
