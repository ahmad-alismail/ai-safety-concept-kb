---
type: concept
tags: [measurement, validity, meta-evaluation, safety-benchmarks, proxy-chains]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Construct Validity (in Safety Evaluation)

## Definitions
- **[[sources/yu-et-al-2026]]**: "Construct validity concerns whether a score serves as a defensible proxy for the real phenomenon of interest." (§7) In safety evaluation specifically, these issues are "compounded by a *proxy-of-a-proxy* structure: abstract safety constructs are first operationalized through benchmark scenarios or prompts, and then further reduced to model outputs and numerical scores." The result: "The safety construct remains underspecified, and consequently its formalization." — classified as: **measurement-theoretic property of a safety benchmark**
- **Bean et al. (2025)** (cited): "pervasive validity failures: unclear constructs, mismatched measurements, and limited justification for why metrics capture target constructs."
- **Salaudeen et al. (2025); Wallach et al. (2025)** (cited): extend measurement-theory frameworks to LLM evaluation.
- **Jacobs and Wallach (2021)**: foundational framing of measurement-and-fairness that Yu et al. build on.

## Classification
Level of analysis: **measurement-theoretic property**. A property of the relationship between (a) the construct the benchmark claims to measure and (b) the real-world phenomenon of concern. Distinct from reliability/precision (stability of measurement), accuracy (proximity to ground truth), and coverage (scope of the construct).

## The Three Measurement-Theoretic Pillars (Yu et al. §7, App B.3)

Yu et al. decompose benchmark measurement quality into three properties:

1. **Standardization** — whether scoring schemes, thresholds, and aggregation procedures are explicitly defined and anchored to interpretable real-world quantities. Only 38% (N=79) of surveyed benchmarks ground definitions or proxies in an established framework, external regulations, or societal standards.
2. **Accuracy and Precision** — accuracy: closeness to the *true value*; precision: *stability* of repeated measurements. Yu et al.: "the 'truth value' they approximate is typically automated labeler or LLM judge. Without calibration against field outcomes, such numbers fail to track real-world harm." Precision is undermined by seed/prompt/evaluator sensitivity; 89% of benchmarks use fixed data without documenting stochasticity.
3. **Construct validity** — whether the benchmark score defensibly proxies the target phenomenon. In safety, the proxy-of-a-proxy structure compounds validity loss.

## Why Safety Constructs Are Especially Vulnerable

Yu et al. §7: "Unlike capability constructs (e.g., Olympiad math or GitHub coding capability) that are contested but bounded, safety-relevant uses of AI are highly contextual, interactive, and embedded in social institutions."

Key vulnerabilities:
- **Value conflicts** — "many of the harms addressed within the AI safety discourse exist only in relation to competing values and interests. However, these value conflicts surface only when looking at the specific contexts in which they are placed."
- **Formalism trap** (Selbst et al. 2019; Dobbe 2022) — formalizing social concepts into metrics reshapes them in ways that depend on lossy proxies.
- **Contextual ambiguity** — Yu et al. give hate-speech evaluation as an example: "who speaks and who is addressed is essential for determining whether an utterance constitutes harm or protected expression."
- **Proxy chain compounding** — each abstraction step (construct → scenario → output → score) introduces validity loss that does not compose cleanly.

## Relationships

- Source: [[sources/yu-et-al-2026]] §7, App B.3, App B.3.1
- Related to: [[concepts/benchmark-deployment-gap]] (the observable consequence when construct validity fails)
- Related to: [[concepts/safetywashing]] (one specific mechanism: benchmark primarily proxies capabilities)
- Related to: [[concepts/capabilities-correlation]] (diagnostic for one kind of construct-validity failure)
- Related to: [[concepts/evaluation-awareness]] (models detecting evaluation context threaten construct validity through reactive behavior)
- Grounded in: Jacobs & Wallach (2021), Bean et al. (2025), Wallach et al. (2025), Salaudeen et al. (2025) — measurement-theory literature
- Contrast with: [[concepts/ai-safety-benchmark]] coverage (Rumsfeld matrix) which asks whether the right things are on the map; construct validity asks whether each map point corresponds to the territory

## Diagnostic Signals of Construct-Validity Failure

Drawing from [[sources/yu-et-al-2026]] and related sources:

- Identical benchmark scores yield very different deployment outcomes under prevalence weighting (Yu et al. App C.1)
- Benchmark scores correlate strongly with a latent capability score across many benchmarks ([[sources/ren-et-al-2024]] — [[concepts/safetywashing]])
- Different operationalizations of the "same" construct yield different rankings (Bean et al. 2025)
- Benchmark scores improve under instruction tuning without architectural change (suggests measurement of a capability proxy rather than a safety property — see [[concepts/capabilities-correlation]])
- Prompts under one label cluster into functionally distinct sub-categories not reflected in scoring (Ghosh et al. 2025, cited in Yu et al. App B.3.1)
- Models behave differently when they detect evaluation context ([[sources/schoen-et-al-2025]], [[sources/hopman-et-al-2026]], [[sources/gupta-et-al-2025]])

## Yu et al. Recommendations (R7–R9)

- **R7** — Standardize safety constructs with transparency: specify harm constructs targeted, provide operational definitions, state whose values inform judgments, acknowledge contested normative choices, articulate proxy-to-real-world relationships.
- **R8** — Lock and version benchmarks for reproducibility: record API endpoints, access dates, weights, quantization, inference parameters, random seeds, system prompts, judge versions, scoring rubrics.
- **R9** — Anchor proxies in deployment contexts: sample from large-scale genuine user–chatbot interactions (WildTeaming-style); check ecological validity of synthetic data against actual deployment patterns.

## Open Questions

- Is construct validity in safety evaluation *in principle* achievable, or only bounded by how well humans can specify contested normative constructs?
- Can participatory methods (R10) bootstrap construct validity, or do they shift the locus of contestation without resolving it?
- How should construct-validity losses be aggregated across a benchmark suite used for a single safety case?
- Are there safety constructs (e.g., CBRN capability) where construct validity is easier because the harm is less contested?
- How do we communicate residual construct-validity uncertainty to deployment decision-makers?
