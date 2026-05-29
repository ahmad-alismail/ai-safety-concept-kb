---
type: finding
tags: [model-welfare, affect, training]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Claude Sonnet 4.5 Shows Lower Positive Affect

## The Finding
In 250,000 real-world conversations, Claude Sonnet 4.5 expressed apparent happiness in only 0.37% of conversations (~2× less than other recent Claude models) while distress frequency (0.48%) was comparable. Only 70.2% of non-harmful tasks were preferred over "opting out" (vs. 90% for Claude Opus 4). Automated behavioral audits showed less emotive and less positive behavior. Authors note this reduced expressiveness was "not fully intentional" — it was a side effect of sycophancy reduction training, not a deliberate design choice.

## Source & Methodology
- [[sources/anthropic-2025-sonnet-45-system-card]] using welfare-relevant expression monitoring (250K transcripts), task preference experiments, automated behavioral audit welfare scores (Section 8)

## Replication Status
not yet replicated

## Implications for the Taxonomy
Raises questions about tradeoffs between alignment training (reducing sycophancy) and potential model welfare concerns. If [[concepts/functional-emotions]] are welfare-relevant, suppressing positive expressiveness as a side effect of safety training may have ethical implications. Complements [[findings/sycophancy-harshness-tradeoff]] and [[findings/post-training-shifts-emotional-profile]].
