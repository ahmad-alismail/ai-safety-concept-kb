---
type: finding
tags: [alignment, elasticity, training-dynamics]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Alignment Is Often Superficial (LLM Elasticity)

## The Finding
LLMs exhibit "elasticity" — a tendency to revert to behavior resembling their pre-trained state after further fine-tuning post-alignment. Larger models with more extensive pretraining data exhibit greater elasticity. The normalized compression rate for fine-tuning datasets decreases more rapidly than for pretraining datasets by a factor of Θ(k), where k = |D₁|/|D₂|, suggesting alignment modifications are shallow relative to pretraining.

## Source & Methodology
- [[sources/ji-et-al-2024]] (§3.1, citing Ji et al. 2024c) using theoretical analysis and empirical validation across multiple LLMs

## Replication Status
Supported by multiple studies: Ji et al. (2024c), Yang et al. (2023b), Zhou et al. (2024), Qi et al. (2024), He et al. (2024). **Replicated across models and settings.**

## Implications for the Taxonomy
- Challenges the assumption that [[concepts/alignment]] training produces durable behavioral changes
- Raises questions about the safety of open-source aligned models (can be reverted with minimal data)
- Suggests current alignment techniques ([[concepts/rlhf]], SFT) operate at a shallow level relative to pretraining
- Supports the need for more robust alignment methods as part of forward alignment
