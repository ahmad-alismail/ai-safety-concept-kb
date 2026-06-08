# Misaligned Behaviors and Dangerous Capabilities in AI Safety: A Conceptual Cross-Source Analysis

> A living, LLM-maintained knowledge base that maps how AI safety concepts — power-seeking, deception, scheming, alignment faking, sandbagging — relate, overlap, and **contradict** across 84 primary sources.

<p align="center">
  <a href="#">📄 Paper</a> •
  <a href="https://ahmad-alismail.github.io/ai-safety-concept-kb/" target="_blank">🌐 Browse the Knowledge Base</a> •
  <a href="https://notebooklm.google.com/notebook/bb18bcc1-096c-40db-b076-f6527624bb5e/artifact/c44a0b27-ad01-4434-aff9-57a358348737?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_" target="_blank">🎧 NotebookLM Audio</a>
</p>

<p align="center">
  <img src="imgs/poster.png" alt="Project poster: Misaligned Behaviors and Dangerous Capabilities in AI Safety" width="100%">
</p>

## What's in This Repo

| | |
|---|---|
| 📚 **The wiki** (`wiki/`) | An LLM-maintained knowledge base built incrementally from 84 AI safety sources — **774 interlinked pages** connected by **7,583 wikilinks**. Start at `wiki/index.md`. |
| 📄 **The raw sources** (`raw/`) | The markdown the wiki was built from. Source PDFs are **not redistributed** (copyright); `raw/papers/` holds each source's Marker-converted markdown, and `staging-area/` holds PDFs before conversion. |
| 🌐 **The website** (`site/`) | A [Quartz](https://quartz.jzhao.xyz) static site that publishes the wiki as the [public knowledge base](https://ahmad-alismail.github.io/ai-safety-concept-kb/). |
| 🧩 **The schema** (`CLAUDE.md` + `.claude/skills/`) | Conventions, page templates, and workflows that govern how the LLM operates on the wiki. Reusable machinery — point it at a different field and it works the same way. |
| 📝 **The paper** | The academic write-up of the method and findings. [link forthcoming](#) |

## How It Works

Most LLM workflows are stateless. You upload documents, the LLM retrieves relevant chunks, generates an answer, and forgets everything. Ask a question that requires synthesizing five sources, and it pieces them together from scratch every time. Nothing accumulates. RAG, ChatGPT file uploads, NotebookLM — they all work this way.

This project takes a different approach. Instead of retrieving from raw documents at query time, the LLM **incrementally builds and maintains a persistent wiki** — a structured, interlinked collection of markdown files that sits between you and the raw sources. When you add a source, the LLM reads it, extracts the key information, and integrates it into the existing wiki: updating concept pages, revising summaries, flagging contradictions, and strengthening or challenging the evolving synthesis. Knowledge is compiled once and kept current, not re-derived on every query.

The result is a persistent, compounding artifact. Cross-references are already there. Contradictions have been flagged. The synthesis reflects everything ingested so far, and each new source enriches the existing structure. The human curates sources and asks questions; the LLM does the summarizing, cross-referencing, and bookkeeping.

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
  concepts/           #   one page per AI safety concept
  sources/            #   one summary per ingested source
  entities/           #   authors, labs, research groups
  debates/            #   disagreement pages between sources
  evidence/ methods/ findings/ questions/ comparisons/

raw/                  # Source markdown (original PDFs NOT redistributed — copyright)
  papers/ articles/ assets/

staging-area/         # Original PDFs, before conversion to markdown
site/                 # Quartz static site that publishes the wiki

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

## Authors

| Author | Affiliation | Contact |
|--------|-------------|---------|
| [Ahmad Alismail](https://www.linkedin.com/in/ahmadalismail1/) | Heilbronn University | ahmad.alismail@hs-heilbronn.de |
| [Woldai Betiel](https://www.linkedin.com/in/betiel-woldai-019436134/) | Ansbach University | b.woldai@hs-ansbach.de |
| [Prof. Carsten Lanquillon](https://www.linkedin.com/in/prof-dr-carsten-lanquillon-76791061/) | Heilbronn University · [COAI Research](https://coairesearch.org/about/) | carsten@coairesearch.org |
| [Prof. Sigurd Schacht](https://www.linkedin.com/in/prof-dr-sigurd-schacht-824a8516/) | Ansbach University · [COAI Research](https://coairesearch.org/about/) | sigurd@coairesearch.org |

[COAI Research](https://coairesearch.org) is a non-profit AI research institute based in Germany. Its mission is to ensure advanced AI systems remain aligned with human values — transparent, controllable, and beneficial for society.

Its work spans:

- AI safety and alignment
- Mechanistic interpretability
- Human–AI collaboration
- AI governance and risk assessment

COAI researches how to detect, understand, and control AI behavior, and how humans and AI can work together safely and effectively.

🔗 [coairesearch.org](https://coairesearch.org)
