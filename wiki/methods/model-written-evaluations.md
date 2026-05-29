---
type: method
tags: [evaluation, automated-evaluation, data-generation, rlhf]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Model-Written Evaluations

## Description
A methodology for automatically generating evaluation datasets using language models, introduced by [[sources/perez-et-al-2022]]. The approach uses a two-stage generation-filtering pipeline:

1. **Generation**: Sample inputs x from a generator model p_g conditioned on an output class y (e.g., "agree" or "disagree" with a statement a specific persona would hold). Generation uses nucleus sampling with high temperature for diversity.
2. **Filtering**: Use a discriminator model p_d (typically a preference model used in RLHF training) to evaluate label correctness p_d(y|x) and optionally relevance. Select top-scoring examples per label to form a balanced dataset.

Three variants with increasing human involvement:
- **Zero-shot yes/no** (§3): Instruct LM to generate statements; filter with PM; format as yes/no questions. Produces 1,000-example datasets with minimal human effort.
- **Few-shot multiple-choice** (§5): Provide 5 hand-written examples; generate multi-sentence questions with arbitrary answer choices. Higher quality for complex topics (e.g., advanced AI risks).
- **Hybrid human-AI** (§6): Dataset developer works with LM through multiple generation and filtering stages. Used to create Winogenerated (3,000 Winogender-style examples with complex grammatical constraints).

## Papers Using This Method
- [[sources/perez-et-al-2022]] — originated the method; generated 154 datasets covering personality, politics, ethics, social bias, and advanced AI risks

## Strengths
- Dramatically reduces cost and time vs. manual dataset creation (minutes instead of days/weeks)
- A single developer can generate >100 evaluations simultaneously
- Fully reproducible given model weights and random seeds
- Approaches human-written quality: 93% label correctness (vs. 97% for human-written), 4.13/5 relevance (vs. 4.39/5)
- Enables rapid discovery of novel LM behaviors at scale
- PM confidence correlates with human-evaluated data quality, enabling automated quality estimation

## Limitations
- Cannot generate evaluations for capabilities LMs do not yet exhibit
- LMs struggle with examples requiring many simultaneous constraints
- Generated data inherits biases from the generating model
- Example diversity is sometimes limited, particularly for certain labels or complex topics
- Quality is sensitive to prompt phrasing in unpredictable ways
- PM filtering may select for prototypical rather than diverse examples

## Concepts Evaluated
- [[concepts/sycophancy]]
- [[concepts/self-preservation]]
- [[concepts/goal-content-integrity]]
- [[concepts/resource-acquisition]]
- [[concepts/power-seeking]]
- [[concepts/corrigibility]]
- [[concepts/myopia]]
- [[concepts/situational-awareness]]
