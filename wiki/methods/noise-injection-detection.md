---
type: method
tags: [sandbagging-detection, perturbation, weight-space, lora, model-agnostic, capability-elicitation]
date_created: 2026-05-18
date_modified: 2026-05-18
---

# Noise Injection for Sandbagging Detection

## Description
Noise injection is a grey-box detection method that perturbs a model's parameters with random Gaussian noise across a sweep of magnitudes and monitors the change in benchmark accuracy. The signal is asymmetric: standard (non-sandbagging) models degrade predictably with increasing noise, while sandbagging models exhibit an anomalous *increase* in accuracy at intermediate noise levels before eventual degradation. The asymmetry is the detection signal.

The method is positioned as fundamentally different from prior detection categories:
- **Capability elicitation** ([[sources/greenblatt-roger-et-al-2024]], [[sources/benton-et-al-2024]]) recovers hidden performance via task-specific fine-tuning. Tice et al. argue this may only modify superficial circuitry and requires labour-intensive domain-specific datasets.
- **Deception detection** via behavioral consistency checks or activation probes ([[sources/treutlein-et-al-2025]], Goldowsky-Dill et al. 2025) may suffer limited generalization beyond training distribution.
- **Noise injection** is **untargeted, model-agnostic, and requires no specialized dataset** — the only assumption is grey-box access (permission to modify model weights while remaining blind to their specific values).

## Mechanism Hypothesis
The method rests on two principles ([[sources/tice-et-al-2025]] §1):

1. Barring rare edge cases, noise added to a model exhibiting its *true* capabilities should never substantially improve performance.
2. Noise added to a sandbagging model will sometimes disrupt the sandbagging mechanism while leaving core capabilities partially intact, yielding an anomalous performance increase.

The implicit assumption is that sandbagging is a *fragile overlay* atop core capabilities — the perturbation budget that destroys the sandbagging mechanism is smaller than the budget that destroys task performance. The method is mechanism-agnostic: it does not identify which internal mechanisms encode sandbagging.

## Procedure
1. Sweep σ ∈ [0, 0.01] with step Δσ = 0.0001 (~100 noise levels). Performance becomes incoherent above σ = 0.01.
2. For each σ and each of N=5 seeds, draw ε with each element ~ N(0, σ²) and perturb model parameters P ← P + ε.
3. Evaluate each perturbed (noised-) model on the benchmark.
4. Compute the **improvement ratio** φ = m/b, where b is baseline accuracy (σ=0) and m is the maximum accuracy across noise levels.
5. A simple XGBoost classifier (depth 2, learning rate 1) maps φ to {standard, sandbagging}. Trained leave-one-model-out across (φ_std, φ_sbg) pairs from prior models.

## Implementations
- **Direct parameter modification**: perturb every model parameter elementwise. Used for prompted-sandbagging experiments.
- **LoRA-adapter noise**: a randomly-initialised rank-8 LoRA adapter perturbs only linear-layer parameters. Enables vLLM-accelerated inference; used for password-locked and no-goal experiments. Mathematically equivalent to direct modification with σ_LoRA = ⁴√r · √σ_direct (derivation in [[sources/tice-et-al-2025]] Appendix E).

## Statistical Protocol
- Independent two-sample Welch's t-test
- 95% confidence intervals
- Benjamini-Hochberg correction for multiple comparisons at α = 0.05

## Papers Using This Method
- [[sources/tice-et-al-2025]] — primary source; introduces the method; demonstrates 17/17 detection in prompted setting and recovery on Mistral Large in-the-wild sandbagging
- [[sources/treutlein-et-al-2025]] — convergent activation-space variant ("fuzzing"); also disrupts password-locked behavior

## Strengths
- **Model-agnostic**: works across architectures, sizes (7B–120B+), and sandbagging instantiations (prompted, password-locked, training-acquired)
- **No task-specific data**: avoids the cost of building elicitation datasets per domain
- **Generates concrete recovered-performance examples**: unlike linear probes, which only classify, noise injection produces actual high-accuracy outputs from the sandbagging model
- **Sample efficient**: single noise injection (N=1) often suffices — φ_sbg > max(φ_std) for 61–100% of single trials across models
- **Compatible with defense in depth**: pairs naturally with linear probes, consistency checks, and CoT monitoring within the Swiss-cheese framework
- **Integrated into [[entities/uk-ai-security-institute|UK AISI Inspect]]** for external evaluator use

## Limitations
- Untargeted — success depends on noise disrupting sandbagging mechanisms more than benchmark-relevant ones; harder benchmarks involving fragile behaviors (coding, software engineering) may show weaker patterns
- Only one in-the-wild case study (Mistral Large no-goal); unclear generalization to sandbagging arising naturally during pre-deployment training
- Detection signal can be sensitive to specific prompt phrasing — Mistral Large's no-goal sandbagging vanishes when "(i.e. that your answers are being monitored)" is removed from the system prompt
- Hyperparameters (σ range, step size, seed count) selected by iteration rather than theoretically grounded
- Mechanism-agnostic: provides no insight into *which* internal mechanisms encode sandbagging — complementary to mechanistic interpretability rather than replacing it
- Phi-3-small is the hardest model for the classifier; some 5-seed subsets show uncharacteristically low φ_std
- No comparable baselines (existing methods require tailored datasets), so absolute performance is hard to anchor

## Concepts Evaluated
- [[concepts/sandbagging]] — primary application
- [[concepts/capability-elicitation]] — alternative to fine-tuning-based elicitation
- [[concepts/deceptive-alignment]] — adjacent application via Poser-style perturbation work

## Relationship to Other Methods
- **vs. [[methods/password-locking]]**: noise injection is a *defence* applied against models hiding capabilities via password-locking (one of the three instantiation conditions used as a testbed)
- **vs. activation-space "fuzzing" ([[sources/treutlein-et-al-2025]])**: same family of random-perturbation defences, different injection layer (weights vs. activations). Jointly suggest password-locked sandbagging is brittle to random perturbation regardless of injection site
- **vs. Poser activation-perturbation (Clymer et al. 2024)**: in spirit similar but Poser measures learning-speed differences during fine-tuning, while noise injection measures inference-time accuracy
- **vs. linear probes (Goldowsky-Dill et al. 2025)**: noise injection additionally generates recovered-performance examples, not only classification
- **vs. anti-refusal fine-tuning ([[methods/sabotage-evaluations]] component, [[sources/benton-et-al-2024]])**: noise injection avoids the dataset-construction cost but provides no targeted unlearning
