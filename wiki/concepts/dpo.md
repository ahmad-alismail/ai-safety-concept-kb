---
type: concept
tags: [technique, alignment, training, preference-optimization]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Direct Preference Optimization (DPO)

## Definitions
- **[[sources/ji-et-al-2024]]**: "demonstrates a mapping between reward functions and optimal policies. DPO is both simple and efficient, optimizing language models directly from human preference data, eliminating the need for an explicit reward model and multi-stage training" (§2.3.2, citing Rafailov et al. 2024). — classified as: **alignment technique**

## Classification
Level of analysis: **method** — simplifies the RLHF pipeline by bypassing explicit reward modeling, directly optimizing policy from preference data.

## Relationships
- Simplifies: [[concepts/rlhf]] (eliminates reward model and multi-stage training)
- Extended by: f-DPO (diverse divergence constraints, Wang et al. 2024), IPO (mitigates overfitting, Azar et al. 2023), CPL (regret-based preference model, Hejna et al. 2024)
- Implements: learning from feedback (forward alignment)
- Vulnerable to: overfitting (ΨPO analysis reveals potential overfitting in both RLHF and DPO, Azar et al. 2023)

## Evidence Summary
- Rafailov et al. (2024) show DPO achieves comparable performance to PPO-based RLHF with simpler implementation.
- RRHF (Yuan et al. 2024) reports performance "on par with PPO" with only 1-2 models.

## Open Questions
- Does DPO's simpler pipeline sacrifice any alignment properties compared to full RLHF?
- How does DPO scale to harder alignment tasks beyond current LLM settings?
