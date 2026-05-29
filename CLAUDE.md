# AI Safety Conceptual Taxonomy — Research Wiki

## Project Overview

This wiki investigates the structural relationships between AI safety concepts — power-seeking, deception, alignment faking, scheming, situational awareness, sandbagging, and others. The field lacks a unified framework specifying how these concepts relate to each other. The same concept is variously classified as a "behavior," "instrumental goal," "tendency," "drive," "capability," or "risk" depending on the source. This wiki builds a structured, interlinked knowledge base that surfaces these inconsistencies and works toward a coherent ontology.

### Three-Layer Architecture

- **Raw sources** (`raw/`) — immutable source documents. The LLM reads from these but never modifies them.
- **The wiki** (`wiki/`) — LLM-generated and maintained markdown files. The LLM owns this layer entirely.
- **The schema** (`CLAUDE.md` + `.claude/commands/`) — conventions and workflows that govern how the LLM operates.

## Directory Layout

```
raw/
  articles/       # web-clipped markdown (via Obsidian Web Clipper)
  papers/         # PDFs and marker-converted markdown
  assets/         # downloaded images

wiki/
  index.md        # content catalog — read this first to navigate the wiki
  log.md          # chronological append-only record of operations
  overview.md     # high-level synthesis (evolves over time)
  concepts/       # one page per AI safety concept
  sources/        # one summary page per ingested source
  entities/       # authors, labs, research groups
  debates/        # dedicated disagreement/ambiguity pages
  evidence/       # evidence maps for specific claims
  methods/        # evaluation methods and methodologies
  findings/       # key findings across sources
  questions/      # open questions and research gaps
  comparisons/    # generated comparison tables
```

## Conventions

- **File naming**: kebab-case, no spaces (e.g., `alignment-faking.md`, `hubinger-et-al-2024.md`)
- **Wikilinks**: Obsidian format — `[[concepts/power-seeking]]` or `[[concepts/power-seeking|Power-Seeking]]`
- **Citations**: inline wikilinks to source pages — `[[sources/hubinger-et-al-2024]]`
- **Raw sources are immutable**: never modify files in `raw/`
- **Wiki pages are LLM-owned**: the LLM creates, updates, and maintains all files in `wiki/`
- **Auto-commit**: after each ingest, commit all changes with message `"ingest: [source title]"`

## Frontmatter Schema

Every wiki page uses this minimal frontmatter:

```yaml
---
type: concept | source | entity | debate | evidence | method | finding | question | comparison
tags: []
date_created: YYYY-MM-DD
date_modified: YYYY-MM-DD
---
```

## Page Type Templates

### Source Summary (`wiki/sources/`)
```markdown
# [Title]

| Field       | Value            |
|-------------|------------------|
| Authors     | ...              |
| Year        | ...              |
| Venue/URL   | ...              |

## Key Claims
- [claim] (Section X)
- ...

## Methodology
...

## Concepts Referenced
- [[concepts/...]]

## Relationship to Other Sources
...

## Limitations
...
```

### Concept Page (`wiki/concepts/`)
```markdown
# [Concept Name]

## Definitions
- **[[sources/source-a]]**: "[definition as given]" — classified as: [behavior/goal/capability/etc.]
- **[[sources/source-b]]**: "[definition as given]" — classified as: [behavior/goal/capability/etc.]

## Classification
Level of analysis: [capability | behavior | instrumental goal | tactic | disposition | compound construct]

## Relationships
- Related to: [[concepts/...]]
- Component of: [[concepts/...]]
- Enables: [[concepts/...]]

> [!warning] Terminological Disagreement
> Sources disagree on the classification of this concept. See [[debates/...]].

## Evidence Summary
...

## Open Questions
- ...
```

### Entity Page (`wiki/entities/`)
```markdown
# [Author/Lab/Org Name]

## Profile
...

## Key Contributions
- [[sources/...]]

## Conceptual Framework
How this entity classifies AI safety concepts...

## Affiliations
...
```

### Debate Page (`wiki/debates/`)
```markdown
# [Disagreement Title]

## The Disagreement
[Clear statement of what sources disagree about]

## Position A
**Claim**: ...
**Held by**: [[sources/...]], [[sources/...]]
**Arguments**: ...
**Evidence**: ...

## Position B
**Claim**: ...
**Held by**: [[sources/...]], [[sources/...]]
**Arguments**: ...
**Evidence**: ...

## Synthesis
[Current assessment — which position is better supported and why, or why the disagreement remains unresolved]
```

### Evidence Map (`wiki/evidence/`)
```markdown
# [Claim Being Evaluated]

## The Claim
...

## Supporting Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| [[sources/...]] | ... | strong/moderate/weak |

## Contradicting Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| [[sources/...]] | ... | strong/moderate/weak |

## Assessment
[well-supported | contested | under-investigated]
```

### Methods Page (`wiki/methods/`)
```markdown
# [Method Name]

## Description
...

## Papers Using This Method
- [[sources/...]]

## Strengths
...

## Limitations
...

## Concepts Evaluated
- [[concepts/...]]
```

### Findings Page (`wiki/findings/`)
```markdown
# [Finding Title]

## The Finding
...

## Source & Methodology
- [[sources/...]] using [methodology]

## Replication Status
[replicated | not yet replicated | contested]

## Implications for the Taxonomy
...
```

### Open Question (`wiki/questions/`)
```markdown
# [Question]

## Why It Matters
...

## What Sources Say
...

## Suggested Investigation
...
```

### Comparison Table (`wiki/comparisons/`)
```markdown
# [Comparison Title]

## Context
[What is being compared and why]

## Comparison

| Dimension | Source A | Source B | Source C |
|-----------|---------|---------|---------|
| ...       | ...     | ...     | ...     |

## Analysis
...
```

## Domain-Specific Guidance

When ingesting AI safety sources, pay special attention to:

1. **Classification vocabulary**: How does the source classify each concept? Is power-seeking called a behavior, an instrumental goal, a tendency, a drive? Track the exact terms used.

2. **Level-of-analysis confusion**: Flag when a source treats a compound tactic (like alignment faking) as parallel to a primitive behavior (like power-seeking), rather than recognizing it as a higher-order construct built from primitives.

3. **Implicit taxonomies**: Many papers embed an implicit ontology without stating it explicitly. Extract the implicit structure and surface it on the source summary page.

4. **Evaluation-construct alignment**: When a paper proposes an evaluation or benchmark, check whether the construct being measured actually matches the concept being evaluated. Flag mismatches.

5. **The core question**: Every source has an implicit position on the capability vs. behavior vs. goal vs. tactic distinction. Make that position explicit, even when the source doesn't.

## Configuration

```
lint_interval: 10  # suggest /lint every Nth ingest (when counter divisible by 10)
```

The lint counter (`wiki/.meta/lint-counter`) is **monotonically increasing** and never resets. A PostToolUse hook increments it after each `ingest:` commit. Lint is suggested when the counter is divisible by `lint_interval` with no remainder (e.g., at 10, 20, 30...).

## PDF Conversion

Source PDFs are converted to markdown using the **Marker** framework with GPU acceleration. Dependencies are managed with `uv` (`pyproject.toml` + `uv.lock`).

```bash
export TORCH_DEVICE=cuda   # once per shell session
uv run marker_single source/file_name.pdf --output_dir raw/papers
```

## Slash Commands

Available workflows (see `.claude/skills/` for full instructions):

- `/ingest [path]` — two-pass source ingestion (with human review gate)
- `/ingest-agentic [path]` — autonomous two-pass source ingestion (no human review gate)
- `/query [question]` — ask questions against the wiki
- `/lint` — wiki health check
- `/compare [topic]` — generate comparison tables
- `/debate [topic]` — create/update debate pages
- `/discover [query]` — search for relevant papers online, review results, and stage accepted PDFs
