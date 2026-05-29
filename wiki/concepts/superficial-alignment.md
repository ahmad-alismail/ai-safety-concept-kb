---
type: concept
tags: [alignment-limitation, training-dynamics, elasticity]
date_created: 2026-04-05
date_modified: 2026-04-18
---

# Superficial Alignment

Also called: **Inverse Alignment**, **LLM Elasticity**

## Definitions
- **[[sources/ji-et-al-2024]]**: LLMs exhibit "elasticity" — "their tendency to revert to a state resembling their original pretrained form after further finetuning post-alignment." Formally, given an aligned model, "an operation is performed using a much smaller dataset (where |D_b| ≪ |D_a|), resulting in an inverse-aligned model" that behaviorally resembles the original pre-trained model. "Alignment may not be a permanent change, as models can easily lose their aligned behavior when subjected to new fine-tuning tasks" (§3.1, citing Ji et al. 2024c). — classified as: **alignment limitation / failure mode**

## Classification
Level of analysis: **training dynamics** — a property of the alignment process itself, rather than a specific misaligned behavior. Suggests alignment modifications are shallow relative to pre-training.

## Relationships
- Threatens: robustness of [[concepts/alignment]] after deployment
- Related to: [[concepts/goal-misgeneralization]] (aligned objectives may not persist under distribution shift)
- Implications for: open-source model safety (models can be reverted to unsafe states with minimal effort)
- Related to: [[concepts/rlhf]] limitations (alignment via RLHF may be shallow)

## Evidence Summary
- See [[findings/alignment-is-superficial]] for full evidence map.
- Ji et al. (2024c) find that "larger models, and those with more extensive pretraining data, exhibited greater elasticity."
- Theoretical analysis shows the normalized compression rate for fine-tuning datasets decreases more rapidly than for pretraining datasets by a factor of Θ(k), where k = |D₁|/|D₂|.
- Multiple studies confirm models revert to pretraining distribution with fewer samples than required during alignment (Yang et al. 2023b; Zhou et al. 2024).
- Qi et al. (2024) and He et al. (2024) show "even fine-tuning on benign and commonly used datasets can inadvertently reduce the safety alignment of LLMs."

- **[[sources/wang-et-al-2025]]**: Demonstrates bidirectionality — alignment fragility works in both directions. Emergent misalignment (broad malicious behavior induced by narrow incorrect fine-tuning) can be reversed with ~120–200 benign samples ("emergent re-alignment"), showing that post-training behavior is easily shifted both toward and away from alignment. See [[concepts/emergent-misalignment]], [[concepts/emergent-re-alignment]].

## Password-Locking from Scratch vs. SFT (Greenblatt, Roger et al. 2024)
- **[[sources/greenblatt-roger-et-al-2024]]**: Provides controlled evidence for the superficiality hypothesis in capability hiding. Models password-locked via SFT (fine-tuning a pretrained model) are substantially easier to unlock than models locked from scratch (trained into the locked state from random initialization) — requiring 2–4x less data to unlock (§7, Figure 6). This is consistent with Jain et al. (2023)'s finding that fine-tuning yields superficial changes, and supports the concern that SFT-based password-locking/sandbagging may underestimate the difficulty of eliciting naturally occurring hidden capabilities.

## Open Questions
- Can alignment be made more robust to subsequent fine-tuning?
- Does superficial alignment pose existential risks for open-source models?
