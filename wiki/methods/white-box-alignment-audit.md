---
type: method
tags: [interpretability, safety-evaluation, white-box, SAE, activation-steering]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# White-Box Alignment Audit

## Description
Pre-deployment audit methodology using mechanistic interpretability techniques to investigate internal model representations relevant to alignment. Combines unsupervised model diffing (identifying notable changes across training snapshots) with targeted investigation of specific phenomena (evaluation awareness). First applied to Claude Sonnet 4.5 — described as "the first such investigation of a frontier language model."

Three main techniques:
1. **SAE model diffing**: Sparse autoencoder trained on middle layer of a post-training snapshot, used to compare feature activations between early and final snapshots across evaluation datasets. Identifies which internal representations changed most during training.
2. **Activation steering via inhibition**: Inhibiting specific vector representations (SAE features and contrastive pair vectors) related to evaluation awareness, then measuring effects on verbalized awareness and misaligned behavior. Uses contrastive pair prompts (e.g., "fictional vs. real scenario," "testing vs. conversation") to derive steering vectors.
3. **Logit diff amplification**: Technique from Aranguri & McGrath (2025, Goodfire Research) that amplifies differences between models by modifying logits: `logits_amplified = logits_target + α * (logits_target - logits_previous)`. At α=1, magnifies how the target differs from a baseline model.
4. **Probing**: Measuring whether feature activations on prompts predict trial-to-trial fluctuations in verbalized evaluation awareness and misaligned behavior.

## Papers Using This Method
- [[sources/anthropic-2025-sonnet-45-system-card]]

## Strengths
- Can reveal unverbalized internal states (e.g., evaluation awareness without verbalization)
- Provides causal evidence via inhibition experiments (not just correlational)
- Can quantify the gap between evaluation-context and deployment-context behavior
- Random-feature controls help rule out uninteresting explanations
- Complements behavioral (black-box) evaluations

## Limitations
- Steering strength requires ad hoc tuning — "developing more systematic methods for assessing model degradation and tuning steering strength will be important"
- Cannot definitively rule out that steering vectors bundle evaluation awareness with alignment representations
- SAE feature interpretations rely on autointerpretability and manual inspection
- Results are dataset-dependent — inhibition effects vary significantly across evaluation types
- The approach tests known phenomena (evaluation awareness) but may miss unknown sources of evaluation-deployment gaps

## Concepts Evaluated
- [[concepts/evaluation-awareness]]
- [[concepts/alignment]]
- [[concepts/deception]]
- [[concepts/sycophancy]]
