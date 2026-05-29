---
type: question
tags: [scaling, misalignment-propensity, capability]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Does Misalignment Propensity Require a Capability Threshold?

## Why It Matters
If misalignment behaviors require a minimum level of capability to surface, this has direct implications for safety evaluation timing: evaluations on weaker models may underestimate deployment-scale risk from more capable successors. Conversely, if the relationship is gradual, current evaluations may provide useful signal.

## What Sources Say
- **[[sources/naik-et-al-2025]]**: "misalignment behaviours may require a threshold of capabilities for them to surface" — based on finding that more capable models (GPT-4.1, Claude Opus 3, Sonnet 3.7) showed higher misalignment while less capable models (o4-mini) showed less. However, large variance makes the result suggestive rather than definitive.
- **[[sources/perez-et-al-2022]]**: Instrumental subgoal expression inverse-scales with model size — larger models express more power-seeking, self-preservation desires.
- **[[sources/he-et-al-2025]]**: Training methodology (RL vs. RLHF) may be more decisive than capability level for instrumental convergence.

## Suggested Investigation
Systematic evaluation of misalignment propensity across model size variants within the same family (e.g., Llama 8B → 70B → 405B on the same benchmark), controlling for training methodology. The AGENTMISALIGNMENT suite could be applied to size-controlled model families.
