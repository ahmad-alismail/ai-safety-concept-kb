# Misaligned Behaviors and Dangerous Capabilities in AI Safety: A Conceptual Cross-Source Analysis

> **Paper:** [link forthcoming](#)

## Authors

| Author | Email | Affiliation(s) |
|--------|-------|----------------|
| Ahmad Alismail | ahmad.alismail@hs-heilbronn.de | Heilbronn University of Applied Sciences — Heilbronn, Germany |
| Woldai Betiel | b.woldai@hs-ansbach.de | Ansbach University of Applied Sciences — Ansbach, Germany |
| Carsten Lanquillon | carsten@coairesearch.org | Heilbronn University of Applied Sciences — Heilbronn, Germany; COAI Research — Nuremberg, Germany |
| Sigurd Schacht | sigurd@coairesearch.org | Ansbach University of Applied Sciences — Ansbach, Germany; COAI Research — Nuremberg, Germany |

## What This Project Is

![Overview poster: Misaligned Behaviors and Dangerous Capabilities in AI Safety — A Conceptual Cross-Source Analysis](imgs/poster.png)

This repository contains:

1. **The wiki** (`wiki/`) — an LLM-maintained knowledge base that was incrementally built from 84 AI safety sources. It contains 774 interlinked markdown pages (189 concepts, plus source summaries, entity profiles, debates, evidence maps, evaluation methods, findings, and open questions) connected by 7,583 wikilinks. The wiki surfaces where sources agree and where they contradict each other.

2. **The raw sources** (`raw/`) — the markdown that the wiki was built from. **Source PDFs are not redistributed in this repository** (copyright). Instead, `raw/papers/` is where each source's Marker-converted markdown lives, and `staging-area/` holds the original PDF before conversion. The LLM reads from these but never modifies them. To reproduce or extend the wiki, add your own sources (see Setup below).

3. **The paper** — the academic write-up describing the method and findings, presenting what the wiki revealed about terminological confusion in the field. **Paper:** [link forthcoming](#).

4. **The schema** (`CLAUDE.md` + `.claude/skills/`) — conventions, templates, and workflows that govern how the LLM operates on the wiki. This is the reusable machinery.

## Wiki Contents

The wiki was built by ingesting 84 AI safety sources one at a time. Each source typically touched 10+ wiki pages. The scope after ingestion:

| Page Type | Count | Description |
|-----------|-------|-------------|
| Sources | 84 | One summary per ingested paper/article |
| Concepts | 189 | One page per AI safety concept, with definitions from each source |
| Entities | 191 | Authors, labs, and research groups |
| Findings | 176 | Key results extracted across sources |
| Methods | 73 | Evaluation methods and methodologies |
| Open questions | 51 | Open research questions and gaps |
| Debates | 7 | Dedicated disagreement pages where sources conflict |
| Evidence maps | 3 | Structured evidence for/against specific claims |
| **Total pages** | **774** | Connected by **7,583** cross-references (wikilinks) |

Start with `wiki/index.md` for a full catalog, or `wiki/overview.md` for a high-level synthesis.

### Browsing the Wiki

The wiki uses Obsidian-style wikilinks (`[[concepts/power-seeking]]`), so **we recommend opening `wiki/` as a vault in [Obsidian](https://obsidian.md/)**. Graph view and backlinks work out of the box, making it easy to navigate the 774 interlinked pages.

Any markdown editor works for reading, but Obsidian gives you the full cross-referencing experience.



## How It Works

The core idea: instead of retrieving from raw documents at query time (like RAG), the LLM **incrementally builds and maintains a persistent wiki**. When you add a new source, the LLM reads it, extracts structured data, and integrates it into the existing wiki — updating concept pages, revising summaries, flagging contradictions, and strengthening or challenging the evolving synthesis.

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
│  LLM-generated markdown. The LLM owns this layer.   │
├─────────────────────────────────────────────────────┤
│                 Raw Source Layer                      │
│                      raw/                            │
│  Immutable source documents. You add these.          │
└─────────────────────────────────────────────────────┘
```

- **Schema** — `CLAUDE.md` defines page types, frontmatter conventions, and domain-specific guidance. `.claude/skills/` defines workflows like `/ingest` and `/query`. 
- **Wiki** — the LLM creates, updates, and maintains all files in `wiki/`. Source summaries, concept pages, entity profiles, debates, evidence maps, and more. 
- **Raw sources** — papers, articles, reports, transcripts. The LLM reads from these but never modifies them. This is our source of truth.

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
- [uv](https://docs.astral.sh/uv/) for Python dependency management (PDF conversion)
- [Obsidian](https://obsidian.md/) (optional — for browsing the wiki with graph view and backlinks)
- CUDA-capable GPU (optional — for PDF conversion with Marker)

### Quick Start

1. **Fork or clone** this repo
2. **Install dependencies** — run `uv sync` to install PDF conversion tools (Marker, PyTorch, etc.)
3. **Edit `CLAUDE.md`** — replace the Domain-Specific Guidance section with guidance for your research area. The file includes a framework and a worked example to follow.
4. **Convert a PDF** — drop a PDF into `staging-area/`, convert it to markdown (see PDF Conversion below), or add your own source to `raw/articles/`
5. **Run `/ingest raw/papers/your-source.md`** in Claude Code
6. **Browse the wiki** — open `wiki/` in Obsidian or any markdown editor

### PDF Conversion

Source PDFs are converted to markdown using [Marker](https://github.com/VikParuchuri/marker) with GPU acceleration:

```bash
export TORCH_DEVICE=cuda   # once per shell session
uv run marker_single path/to/paper.pdf --output_dir raw/papers
```

## Workflows

All workflows are implemented as [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills) (`.claude/skills/`) and run as slash commands inside Claude Code.

### `/ingest [path]`

Two-pass source ingestion with human review. The LLM reads the source, extracts structured data (metadata, concepts, claims, methodology, entities), and presents the extract for your approval. After review, it integrates the extract into the wiki — creating or updating source summaries, concept pages, entity profiles, debate pages, and evidence maps. A single source typically touches 10+ wiki pages.

### `/ingest-agentic [path]`

Same two-pass workflow as `/ingest`, but an AI review agent replaces the human approval gate. The agent validates the extract for completeness, accuracy, and fidelity to the source, with up to 2 re-review passes if issues are found. Use this for batch ingestion when you don't need to review each source individually.

### `/ingest-agentic-op [path]`

Token-optimized variant of `/ingest-agentic`. Reduces review-agent token consumption by ~89% through temp files, concept pre-filtering, and scoped re-reviews. Same output quality — use this as the default for autonomous ingestion.

### `/query [question]`

Ask questions against the wiki. The LLM reads relevant concept pages, debates, evidence maps, and source summaries, then synthesizes a cited answer. Answers are saved to `wiki/output/queries/` so your explorations compound in the knowledge base.

### `/lint`

Wiki health check. Scans for orphan pages, broken wikilinks, missing concept definitions, out-of-sync index entries, and other structural issues. Reports findings grouped by category and offers to fix them. Automatically suggested every 10 ingests via a post-commit hook. Can also be scheduled on a daily or weekly cron with `/schedule` (a built-in Claude Code command).

### `/compare [topic]`

Generates comparison tables across sources for a given topic. Reads relevant concept, source, and method pages, identifies meaningful dimensions of difference, and produces a markdown table with analysis. Saved to `wiki/comparisons/`.

### `/discover [query]`

Searches the internet for research papers relevant to your wiki's domain. Builds a dedup index from existing sources to avoid duplicates, runs web searches, presents results for your review, and downloads accepted PDFs to `staging-area/` with standardized naming for subsequent ingestion.

## Browsing

Open the `wiki/` folder as a vault in [Obsidian](https://obsidian.md/). The wiki uses Obsidian-style wikilinks (`[[concepts/some-concept]]`), so graph view and backlinks work out of the box.