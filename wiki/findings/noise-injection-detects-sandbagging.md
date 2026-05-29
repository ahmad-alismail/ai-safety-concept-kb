---
type: finding
tags: [sandbagging, detection, noise-injection, empirical, model-agnostic]
date_created: 2026-05-18
date_modified: 2026-05-18
---

# Noise Injection Reliably Detects Sandbagging Across Model Families and Sandbagging Techniques

## The Finding
Injecting Gaussian noise into the weights of large language models produces an asymmetric accuracy response: standard models degrade predictably with increasing noise, while sandbagging models exhibit anomalous *performance improvements* before eventual degradation. The asymmetry holds across:

- **5 model families** (Mistral-7B, Phi-3 mini/small/medium, Llama-3-8B, Llama-3.1-70B, DeepSeek-Math-7B, Mistral Large)
- **5 benchmarks** (MMLU, AI2 ARC, WMDP, GSM8k, BoolQ)
- **3 sandbagging instantiations** (prompted, password-locked, no-goal/training-acquired)

For prompted sandbagging, every one of 17 model–benchmark pairs shows statistically significant improvement under noise (p < 0.05 after Benjamini-Hochberg correction). An XGBoost classifier mapping the improvement ratio φ = m/b to {standard, sandbagging} achieves 96.2% leave-one-model-out accuracy (weighted F1 = 0.936). A linear classifier achieves 86.7%, suggesting the signal is largely separable.

A single noise injection (N=1) is often sufficient: φ_sbg > max(φ_std) in 61% (Llama-8B) to 100% (Mistral-7B finetuned) of trials.

## Source & Methodology
- [[sources/tice-et-al-2025]] using [[methods/noise-injection-detection]]; σ ∈ [0, 0.01] with step Δσ = 0.0001; 5 seeds for detection, up to 100 for performance recovery; Welch's t-test with Benjamini-Hochberg correction at α = 0.05; XGBoost (depth 2, learning rate 1) with leave-one-model-out cross-validation

## Replication Status
- Convergent with [[sources/treutlein-et-al-2025]]: activation-space "fuzzing" disrupts password-locked sandbagging (different injection layer, same family of intervention)
- Not yet replicated by independent third party at time of writing

## Implications for the Taxonomy
- **Operationalises sandbagging as a fragile overlay** atop core capabilities: the perturbation budget destroying the sandbagging mechanism is empirically smaller than the budget destroying task performance. This is a structural claim about how sandbagging is encoded in weights, even though the method itself is mechanism-agnostic
- **Refines the [[concepts/sandbagging]] detection difficulty hierarchy** from [[sources/van-der-weij-et-al-2024]]: noise injection works across all three levels (prompted → password-locked → no-goal), not just the easiest
- **Generates a new detection category** beyond capability elicitation and deception detection: untargeted weight-space perturbation
- **Strengthens the case for [[concepts/safety-cases]] inability arguments** that depend on [[concepts/capability-elicitation]] — adds an untargeted, model-agnostic anti-sandbagging defence to the toolkit
- **Suggests a complementary defence-in-depth pairing** with linear probes ([[sources/treutlein-et-al-2025]]) and behavioral consistency checks: noise injection additionally yields concrete examples of recovered performance, not only classification
- **Open question**: does the technique work for sandbagging arising naturally during pre-deployment training, or is it confined to constructed sandbagging (prompted/locked/single-snippet)?
