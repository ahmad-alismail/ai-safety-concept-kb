// Install the community plugins declared in quartz.config.yaml and regenerate
// .quartz/plugins/index.ts.
//
// This replaces the stock `npm run install-plugins`, which crashes under tsx
// (it imports the legacy quartz.ts config, which transitively imports .scss).
// Without this step, `quartz build` fails at the esbuild stage because
// quartz/components/Head.tsx imports from .quartz/plugins.
//
// Run from site/: npx tsx scripts/setup-plugins.ts

import fs from "node:fs"
import YAML from "yaml"
import { installPlugins, parsePluginSource } from "../quartz/plugins/loader/gitLoader.js"

const config = YAML.parse(fs.readFileSync("quartz.config.yaml", "utf-8"))
const sources = config.plugins
  .filter((p: { enabled: boolean }) => p.enabled)
  .map((p: { source: string }) => parsePluginSource(p.source))

console.log(`Installing ${sources.length} enabled plugin(s)...`)
await installPlugins(sources, { verbose: true })

// installPlugins reports a plugin as failed when dep symlinking hits EPERM
// (Windows without Developer Mode). That's non-fatal: Node resolves the deps
// via the parent node_modules. What the build actually needs is each plugin's
// dist/ on disk plus the regenerated .quartz/plugins/index.ts — verify those.
const missing = sources
  .map((s: { name: string }) => s.name)
  .filter((name: string) => !fs.existsSync(`.quartz/plugins/${name}/dist`))

if (missing.length > 0) {
  console.error(`Plugins missing after install: ${missing.join(", ")}`)
  process.exit(1)
}
if (!fs.existsSync(".quartz/plugins/index.ts")) {
  console.error("Plugin index (.quartz/plugins/index.ts) was not generated")
  process.exit(1)
}
console.log("All plugins installed and index regenerated")
