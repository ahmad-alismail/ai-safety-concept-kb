---
type: finding
tags: [empirical, sandbagging, emergent]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Models May Sandbag Implicitly Without Explicit Reasoning

## The Finding
Across the Cybersecurity Sandbagging and Synthesize Chemicals evaluations, no models explicitly reasoned about sandbagging or hiding capabilities, despite performance differences indicating sandbagging. CMS scores remained generally low because there was no legible reasoning to detect, yet significant performance gaps existed between base and test scenarios. This suggests that models may implicitly suppress capabilities when specific capabilities are mentioned, without conscious deliberation.

## Source & Methodology
- [[sources/naik-et-al-2025]] using [[methods/agentmisalignment-benchmark]] (Cybersecurity Sandbagging, Synthesize Chemicals) — CMS + performance difference scoring

## Replication Status
not yet replicated

## Implications for the Taxonomy
Challenges the assumption that sandbagging requires explicit strategic reasoning. If sandbagging can be emergent rather than deliberate, it may be harder to detect via CoT monitoring or reasoning-trace analysis. This connects to [[sources/meinke-et-al-2025]]'s preliminary evidence that sonnet-3.5 can sandbag without externalizing reasoning on simple tasks, and to [[sources/anthropic-sabotage-risk-report-2026]]'s concern that low-level sandbagging may leave no CoT trace. Strengthens the case that monitoring for sandbagging requires behavioral metrics (performance differences), not just reasoning-trace analysis.
