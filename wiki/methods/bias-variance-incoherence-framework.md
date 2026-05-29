---
type: method
tags: [evaluation, error-decomposition, scaling, incoherence]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Bias-Variance Incoherence Framework

## Description
A framework for decomposing AI model errors into bias (systematic, consistent deviation from intended outcomes) and variance (random, inconsistent deviation), with the key metric being **incoherence** — the proportion of variance to total error. Unlike classical bias-variance analysis where expectations are over training randomness, this framework takes expectations over **test-time randomness** (sampling seeds and few-shot input variation) for a fixed model. Three formulations are provided: KL divergence (main), Brier score, and 0/1 error — all produce qualitatively similar results.

The formal KL decomposition: Error = E_ε[CE(y, f_ε)] = D_KL(y ‖ f̄) + E_ε[D_KL(f̄ ‖ f_ε)], where the first term is Bias² and the second is Variance. Incoherence := Σ Variance / Σ Error.

## Papers Using This Method
- [[sources/hagele-et-al-2026]] — introduced and applied across multiple-choice (GPQA, MMLU), agentic coding (SWE-BENCH), safety evaluations (MWE), synthetic optimization, and human surveys

## Strengths
- Enables quantitative comparison of failure types (systematic vs. random) across different models and tasks
- Incoherence is a relative measure, comparable across models with different overall error rates
- Multiple formulations (KL, Brier, 0/1) provide robustness — qualitatively similar results
- Connects classical statistical learning theory to AI safety questions
- Task-agnostic: applicable to multiple-choice, coding, open-ended, and synthetic settings (with task-appropriate adaptations)

## Limitations
- Requires well-defined ground truth targets — bias is only meaningful relative to a correct answer
- Open-ended tasks where "correct" behavior is ambiguous cannot be fully analyzed (embedding variance used as fallback)
- Requires many samples per question (≥30) for stable estimates — computationally expensive for frontier models
- Reasoning length as proxy for task complexity conflates intrinsic difficulty with model-specific processing
- Does not distinguish *types* of variance (e.g., benign exploration vs. dangerous unpredictability)
- Does not capture reward misspecification (BIASSPEC) — only measures deviation from stated targets

## Concepts Evaluated
- [[concepts/incoherence]] (the primary concept operationalized by this framework)
- [[concepts/hot-mess-theory]] (the theory tested using this framework)
- Relationship between incoherence and [[concepts/reward-misspecification]] (theoretical decomposition: BIAS = BIASMESA + BIASSPEC)
