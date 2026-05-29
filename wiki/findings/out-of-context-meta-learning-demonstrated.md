---
type: finding
tags: [meta-learning, internalization, emergent-capability]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# LLMs Perform Out-of-Context Meta-Learning

## The Finding
LLMs selectively internalize training data based on reliability indicators, even when doing so does not directly improve performance on co-occurring training examples. In a controlled synthetic setting, models differentially internalize definitions tagged with a "reliable" define tag (Define₁) vs. an "unreliable" define tag (Define₂), even for entities with no associated QA pairs in the training set (strong internalization). This is a form of meta-learning: the model learns to treat Define₁ as a signal that the content is worth internalizing, generalizing from Stage 1 (where Define₁ correlated with consistent definitions) to Stage 2 (where no QA pairs provide feedback). The effect persists in out-of-distribution entity attribution tests.

## Source & Methodology
- [[sources/krasheninnikov-et-al-2023]] using [[methods/synthetic-internalization-experiments]]
- Models: Pythia 2.8B, Pythia 410M, T5-3B
- Datasets: CVDB (4000 entities × 6 QA), T-REx (6900 entities × 4 QA)
- 20 seeds per experiment; evaluated via exact match

## Replication Status
Replicated within paper across multiple models (Pythia 2.8B, 410M, T5-3B), datasets (CVDB, T-REx), and training regimes (two-stage and single-stage). No independent replication reported.

## Implications for the Taxonomy
- Introduces a new learning-level mechanism relevant to AI safety that is distinct from both in-context learning and out-of-context reasoning
- Suggests that gradient-descent-trained LLMs may selectively incorporate information based on perceived reliability — a precursor capability for more complex emergent behaviors
- Speculatively linked to acquisition of [[concepts/situational-awareness]] and [[concepts/power-seeking]] behavior
