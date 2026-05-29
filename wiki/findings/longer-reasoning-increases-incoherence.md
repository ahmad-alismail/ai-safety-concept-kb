---
type: finding
tags: [incoherence, reasoning, scaling, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Longer Reasoning and Action Sequences Increase Incoherence

## The Finding
Across multiple-choice benchmarks (GPQA, MMLU), agentic coding (SWE-BENCH), safety evaluations (MWE), and synthetic optimization, AI models become more incoherent — a larger fraction of their errors stems from variance rather than bias — the longer they reason or take actions. This holds across all frontier models tested (Sonnet 4, O3-mini, O4-mini) and the QWEN3 model family. Natural overthinking (within-question reasoning length variation) produces a much stronger incoherence effect than increasing reasoning budgets.

## Source & Methodology
- [[sources/hagele-et-al-2026]] using [[methods/bias-variance-incoherence-framework]]
- ≥30 samples per question; questions sorted by average reasoning length and grouped into equal buckets; incoherence computed per group
- Natural variation analysis: per question, samples split into above/below median reasoning length, with substantially higher incoherence in the longer group despite similar accuracy

## Replication Status
Not yet replicated externally. Consistent across all three bias-variance decomposition formulations (KL, Brier, 0/1) within the paper.

## Implications for the Taxonomy
Challenges the assumption that more reasoning leads to more reliable outcomes. Connects to concerns about long-horizon [[concepts/scheming]] and [[concepts/agentic-planning]] — if coherence degrades with action sequence length, then long-horizon coherent misalignment becomes harder to maintain. Supports [[concepts/hot-mess-theory]].
