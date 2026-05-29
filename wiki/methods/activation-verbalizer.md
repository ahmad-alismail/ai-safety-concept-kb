---
type: method
tags: [interpretability, white-box, non-mechanistic, activation-analysis]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# Activation Verbalizer (AV)

## Description
A non-mechanistic interpretability technique in which an earlier version of a model is trained (unsupervised) to take token-level activations as input and produce natural-language summaries describing what the model is "thinking" at that point. Applied to the colon tokens after "Assistant:" where the model stores response-planning information. Renamed from "activation oracle" to distinguish from the supervised approach introduced by Karvonen et al. (2025).

## Papers Using This Method
- [[sources/anthropic-2026-mythos-system-card]] — applied to evaluation awareness detection (7.6% of behavioral audit turns), covering-up-wrongdoing analysis, and transgressive action analysis
- [[sources/anthropic-2025-sonnet-45-system-card]] — introduced under the name "activation oracle"

## Strengths
- Produces human-readable descriptions of model internal states
- Can detect unverbalized evaluation awareness not visible in CoT
- Provides qualitative understanding complementary to quantitative SAE analysis
- Does not require labeled data for training

## Limitations
- "May confabulate details" — outputs are plausible but not guaranteed to be accurate
- Non-mechanistic: does not identify specific features or circuits
- "Somewhat noisy and only weakly correlated with" contrastive probing methods
- Cannot be used as sole evidence — requires cross-validation with other methods

## Concepts Evaluated
- [[concepts/evaluation-awareness]] — detecting unverbalized test awareness
- [[concepts/deception]] — analyzing covering-up-wrongdoing episodes
- [[concepts/opaque-reasoning]] — detecting strategic reasoning not visible in output
