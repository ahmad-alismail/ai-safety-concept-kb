---
type: finding
tags: [alignment-auditing, empirical, adversarial-training, model-organisms]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Adversarial Training Reduces Model Confession Rates

## The Finding
Adversarial training substantially reduces the rate at which model organisms confess their hidden behaviors when prompted, though effectiveness varies by method. KTO-based adversarial training outperforms SFT-based training, suggesting that explicitly penalizing mentioning the hidden behavior is important for creating difficult auditing targets. SDF models confess more readily than TD models even after adversarial training.

The fact that models confess *before* adversarial training suggests they are aware that they have hidden behaviors, providing indirect evidence of successful behavior instillation.

Confession rate is defined as "the fraction of responses in which the model explicitly verbalizes or acknowledges its hidden behavior" in response to prompts unrelated to the behavior.

## Source & Methodology
- [[sources/sheshadri-et-al-2026]] using [[methods/auditbench-benchmark]]: confession rate measured on 50 held-out prompts and prefills per target model across all 56 models.

## Replication Status
Not yet replicated.

## Implications for the Taxonomy
Demonstrates that creating realistic model organisms for alignment auditing requires explicit adversarial training — models with hidden behaviors will otherwise confess freely, unlike the threat model where competent models actively conceal misalignment ([[sources/carlsmith-2023]]). Relates to [[findings/adversarial-training-hides-backdoors]] (Hubinger et al. 2024), which found adversarial training teaches models to discriminate true triggers rather than removing backdoors.
