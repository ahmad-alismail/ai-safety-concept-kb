# Misaligned Behaviors and Dangerous Capabilities in AI Safety: A Conceptual Cross-Source Analysis

> A living, LLM-maintained knowledge base that maps how AI safety concepts — power-seeking, deception, scheming, alignment faking, sandbagging — relate, overlap, and **contradict** across 84 primary sources.

<p align="center">
  <a href="#">📄 Paper</a> •
  <a href="https://notebooklm.google.com/notebook/bb18bcc1-096c-40db-b076-f6527624bb5e/artifact/c44a0b27-ad01-4434-aff9-57a358348737?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_" target="_blank">🎧 NotebookLM Audio</a>
</p>

![Overview poster: Misaligned Behaviors and Dangerous Capabilities in AI Safety — A Conceptual Cross-Source Analysis](imgs/poster.png)

## The Problem

Is *power-seeking* a behavior? An instrumental goal? A tendency, a drive, a capability, or a risk? Depending on which paper you open, it's any of them. AI safety has a fast-growing vocabulary — deception, scheming, sandbagging, situational awareness, alignment faking — but no shared framework for how these concepts fit together. The same term means different things to different labs; different terms sometimes mean the same thing. Compound tactics get treated as if they were primitive behaviors.

This project builds a structured, interlinked knowledge base from the literature that surfaces exactly **where sources agree and where they quietly contradict each other** — working toward a coherent ontology of AI safety concepts.

## Authors

| Author | Affiliation | Contact |
|--------|-------------|---------|
| [Ahmad Alismail](https://www.linkedin.com/in/ahmadalismail1/) | Heilbronn University | ahmad.alismail@hs-heilbronn.de |
| [Woldai Betiel](https://www.linkedin.com/in/betiel-woldai-019436134/) | Ansbach University | b.woldai@hs-ansbach.de |
| [Prof. Carsten Lanquillon](https://www.linkedin.com/in/prof-dr-carsten-lanquillon-76791061/) | Heilbronn University · [COAI Research](https://coairesearch.org/about/) | carsten@coairesearch.org |
| [Prof. Sigurd Schacht](https://www.linkedin.com/in/prof-dr-sigurd-schacht-824a8516/) | Ansbach University · [COAI Research](https://coairesearch.org/about/) | sigurd@coairesearch.org |

## What's in This Repo

| | | |
|---|---|---|
| 📚 **The wiki** (`wiki/`) | An LLM-maintained knowledge base built incrementally from 84 AI safety sources: **774 interlinked pages** (189 concepts, plus source summaries, entity profiles, debates, evidence maps, methods, findings, and open questions) connected by **7,583 wikilinks**. | Start at `wiki/index.md` |
| 📄 **The raw sources** (`raw/`) | The markdown the wiki was built from. Source PDFs are **not redistributed** (copyright) — `raw/papers/` holds each source's Marker-converted markdown, and `staging-area/` holds PDFs before conversion. Add your own to reproduce or extend. | See [Setup](#setup) |
| 🧩 **The schema** (`CLAUDE.md` + `.claude/skills/`) | Conventions, page templates, and workflows that govern how the LLM operates on the wiki. This is the reusable machinery — point it at a different field and it works the same way. | See [How It Works](#how-it-works) |
| 📝 **The paper** | The academic write-up of the method and findings: what the wiki revealed about terminological confusion in the field. | [link forthcoming](#) |

## Wiki Contents

The wiki was built by ingesting 84 sources one at a time. Each source typically touched 10+ pages. After ingestion:

| Page Type | Count | Description |
|-----------|------:|-------------|
| Sources | 84 | One summary per ingested paper/article |
| Concepts | 189 | One page per AI safety concept, with each source's definition |
| Entities | 191 | Authors, labs, and research groups |
| Findings | 176 | Key results extracted across sources |
| Methods | 73 | Evaluation methods and methodologies |
| Open questions | 51 | Research questions and gaps |
| Debates | 7 | Dedicated pages where sources conflict |
| Evidence maps | 3 | Structured evidence for/against specific claims |
| **Total** | **774** | Connected by **7,583** cross-references (wikilinks) |

Start with `wiki/index.md` for the full catalog, or `wiki/overview.md` for a high-level synthesis.

### Browsing the Wiki

The wiki uses Obsidian-style wikilinks (`[[concepts/power-seeking]]`), so we recommend opening `wiki/` as a vault in **[Obsidian](https://obsidian.md/)** — graph view and backlinks work out of the box, making the 774 interlinked pages easy to navigate. Any markdown editor works for plain reading, but Obsidian gives you the full cross-referencing experience.

## How It Works

Instead of retrieving from raw documents at query time (like RAG), the LLM **incrementally builds and maintains a persistent wiki**. When you add a source, the LLM reads it, extracts structured data, and integrates it into the existing wiki — updating concept pages, revising summaries, flagging contradictions, and strengthening or challenging the evolving synthesis.

### Architecture

Three layers. The human owns the top and bottom; the LLM owns the middle.

```
┌─────────────────────────────────────────────────────┐
│                   Schema Layer                       │
│            CLAUDE.md + .claude/skills/               │
│  Conventions, templates, workflows. You edit this.   │
├─────────────────────────────────────────────────────┤
│                    Wiki Layer                        │
│                      wiki/                           │
│   LLM-generated markdown. The LLM owns this layer.   │
├─────────────────────────────────────────────────────┤
│                 Raw Source Layer                     │
│                      raw/                            │
│  Immutable source documents. You add these.          │
└─────────────────────────────────────────────────────┘
```

- **Schema** — `CLAUDE.md` defines page types, frontmatter, and domain guidance; `.claude/skills/` defines workflows like `/ingest` and `/query`.
- **Wiki** — the LLM creates, updates, and maintains everything in `wiki/`: source summaries, concept pages, entity profiles, debates, evidence maps, and more.
- **Raw sources** — papers, articles, reports, transcripts. The LLM reads them but never modifies them. This is the source of truth.

### Directory Layout

```
wiki/                 # LLM-generated knowledge base (774 pages)
  index.md            #   content catalog — start here
  overview.md         #   high-level synthesis
  concepts/           #   one page per AI safety concept (189 pages)
  sources/            #   one summary per ingested source (84 pages)
  entities/           #   authors, labs, research groups (191 pages)
  debates/            #   disagreement pages between sources
  evidence/           #   evidence maps for specific claims
  methods/            #   evaluation methods and methodologies
  findings/           #   key findings across sources
  questions/          #   open questions and research gaps
  comparisons/        #   generated comparison tables

raw/                  # Source markdown (original PDFs NOT redistributed — copyright)
  papers/             #   Marker-converted markdown of each source (add your own)
  articles/           #   web-clipped markdown
  assets/             #   downloaded images

staging-area/         # Original PDFs, placed here before conversion to markdown

CLAUDE.md             # Schema — conventions, templates, domain guidance
.claude/skills/       # Workflow definitions (ingest, query, lint, etc.)
```

## Setup

### Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) (CLI, desktop app, or IDE extension)
- [uv](https://docs.astral.sh/uv/) — Python dependency management for PDF conversion
- [Obsidian](https://obsidian.md/) — optional, for browsing with graph view and backlinks
- A CUDA-capable GPU — optional, for PDF conversion with Marker

### Quick Start

1. **Fork or clone** this repo.
2. **Install dependencies** — `uv sync` installs the PDF conversion tools (Marker, PyTorch, etc.).
3. **Edit `CLAUDE.md`** — replace the Domain-Specific Guidance section with guidance for your research area. The file includes a framework and a worked example to follow.
4. **Add a source** — drop a PDF into `staging-area/` and convert it (see below), or add markdown directly to `raw/articles/`.
5. **Run `/ingest raw/papers/your-source.md`** in Claude Code.
6. **Browse the wiki** — open `wiki/` in Obsidian or any markdown editor.

### PDF Conversion

Source PDFs are converted to markdown using [Marker](https://github.com/VikParuchuri/marker) with GPU acceleration:

```bash
export TORCH_DEVICE=cuda   # once per shell session
uv run marker_single path/to/paper.pdf --output_dir raw/papers
```

## Workflows

All workflows are [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills) (`.claude/skills/`) that run as slash commands inside Claude Code.

| Command | What it does |
|---------|--------------|
| **`/ingest [path]`** | Two-pass ingestion with a human review gate. The LLM extracts structured data (metadata, concepts, claims, methodology, entities), presents the extract for approval, then integrates it — touching 10+ wiki pages per source. |
| **`/ingest-agentic [path]`** | Same two-pass workflow, but an AI review agent replaces the human gate (up to 2 re-review passes). Use for batch ingestion. |
| **`/ingest-agentic-op [path]`** | Token-optimized variant of `/ingest-agentic` (~89% fewer review-agent tokens via temp files, concept pre-filtering, and scoped re-reviews). Same output quality — the default for autonomous ingestion. |
| **`/query [question]`** | Reads relevant pages and synthesizes a cited answer. Saved to `wiki/output/queries/` so explorations compound. |
| **`/lint`** | Health check: orphan pages, broken wikilinks, missing definitions, out-of-sync index, and more. Suggested every 10 ingests via a post-commit hook; schedulable with `/schedule`. |
| **`/compare [topic]`** | Generates a cross-source comparison table with analysis. Saved to `wiki/comparisons/`. |
| **`/discover [query]`** | Searches the web for relevant papers, dedupes against existing sources, and downloads accepted PDFs to `staging-area/` with standardized naming. |

## About COAI Research

[COAI Research](https://coairesearch.org) is a non-profit AI research institute based in Germany. Its mission is to ensure advanced AI systems remain aligned with human values — transparent, controllable, and beneficial for society.

Its work spans:

- AI safety and alignment
- Mechanistic interpretability
- Human–AI collaboration
- AI governance and risk assessment

COAI researches how to detect, understand, and control AI behavior, and how humans and AI can work together safely and effectively.

🔗 [coairesearch.org](https://coairesearch.org)
