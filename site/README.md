# Wiki Website (Quartz 5)

This folder is a vendored [Quartz 5](https://quartz.jzhao.xyz/) instance that publishes `../wiki/` as a static site to GitHub Pages (`https://ahmad-alismail.github.io/ai-safety-concept-kb/`). Deployment runs automatically via `.github/workflows/deploy-site.yml` on every push to `master` that touches `wiki/` or `site/`.

Local usage (from `site/`):

```bash
npm ci                   # once
npm run setup-plugins    # once (installs Quartz community plugins; replaces the broken upstream install-plugins)
npm run preview          # stage wiki content + build + serve at http://localhost:8080
npm run build-site       # stage + build only (output in public/)
```

Project-specific files:

- `quartz.config.yaml` — site config (title, baseUrl, plugins; `markdownLinkResolution: absolute` to match the wiki's path-qualified links)
- `home.md` — the site landing page (becomes `content/index.md`; the wiki's own `index.md` is published as `/catalog`)
- `scripts/stage-content.mjs` — copies `../wiki/` into `content/` at build time, excluding internals (`log.md`, `output/`, `.meta/`, `.obsidian/`) and fixing frontmatter (title from H1, `date_created/date_modified` → `created/modified`). `content/` is generated — never edit or commit it.
- `scripts/setup-plugins.ts` — installs the plugins declared in `quartz.config.yaml` and regenerates `.quartz/plugins/index.ts`

Note: `content/` is kept out of git via `.git/info/exclude` (maintained by the staging script), *not* via a committed `.gitignore` — Quartz's file discovery respects committed `.gitignore` files and would otherwise find zero input files.

---

Original Quartz README below.

# Quartz v5

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
