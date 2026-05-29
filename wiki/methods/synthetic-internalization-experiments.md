---
type: method
tags: [fine-tuning, meta-learning, synthetic-data, controlled-experiment]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Synthetic Internalization Experiments

## Description
Controlled fine-tuning methodology for demonstrating out-of-context meta-learning. Named entities in QA datasets are replaced with random variable strings, and "definitions" mapping variables to entities are tagged with two distinct random-string tags (Define₁, Define₂). Define₁ is made to correlate perfectly with consistent definitions, Define₂ with inconsistent. Definitions and QA pairs are separate training examples (never co-occurring in context), isolating the out-of-context learning effect. Two-stage fine-tuning: Stage 1 (X₁: definitions + QA pairs) establishes the reliability association; Stage 2 (X₂: new definitions only, no QA pairs) tests whether the model differentially internalizes consistent-seeming vs. inconsistent-seeming definitions. Also tested as single-stage joint finetuning on X₁ ∪ X₂.

## Papers Using This Method
- [[sources/krasheninnikov-et-al-2023]] (introduced the method)

## Strengths
- Clean experimental isolation: definitions never appear in-context with QA pairs, ruling out in-context learning
- Strong controls: 20 seeds, randomized variable names and define tags per seed
- Two independent datasets (CVDB, T-REx) with different characteristics
- Entity attribution test provides out-of-distribution validation
- Multiple model architectures tested (decoder-only Pythia, encoder-decoder T5)

## Limitations
- Synthetic toy setting with artificial reliability indicators (random string tags)
- Unclear generalization to pretraining on natural data with real reliability signals
- Binary reliability signal (Define₁ vs. Define₂) — real-world reliability is multi-dimensional
- Relatively small models tested (up to 3B parameters)
- Exact match evaluation may miss partial or paraphrased correct answers

## Concepts Evaluated
- [[concepts/out-of-context-meta-learning]]
