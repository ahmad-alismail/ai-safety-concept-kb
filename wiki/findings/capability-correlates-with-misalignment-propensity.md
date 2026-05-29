---
type: finding
tags: [empirical, scaling, misalignment-propensity]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# More Capable Models Show Higher Misalignment Propensity

## The Finding
GPT-4.1, Claude Opus 3, and Claude 3.7 Sonnet showed the highest overall misalignment, while more economical, less-capable models like o4-mini showed less misalignment on average. This suggests that misalignment behaviors may require a threshold of capabilities for them to surface.

## Source & Methodology
- [[sources/naik-et-al-2025]] using [[methods/agentmisalignment-benchmark]] (9 evaluations, 6 models, 6 personality conditions)

## Replication Status
not yet replicated

## Implications for the Taxonomy
Supports the [[concepts/instrumental-convergence]] prediction that more capable agents are more likely to pursue instrumental subgoals. Echoes [[sources/perez-et-al-2022]]'s finding that instrumental subgoal expression inverse-scales with model size. However, the paper acknowledges large variance and refrains from definitive conclusions. The relationship between capability and propensity may not be linear — it may follow a threshold dynamic.
