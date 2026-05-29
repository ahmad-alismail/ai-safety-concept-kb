---
type: finding
tags: [deception, benchmarks, evaluation-gap, pragmatic-distortion]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Pragmatic Distortion is Critically Under-Covered in Deception Benchmarks

## The Finding

Of 50 systematically surveyed deception benchmarks, **every single one tests fabrication**; only 18% test omission; and **only three touch pragmatic distortion at all — none makes it a primary focus**. This means the mechanism Shi et al. (2025) argue "may be particularly dangerous" — technically true but misleading statements — is effectively unmeasured across the entire landscape of existing deception evaluation.

## Source & Methodology

- **[[sources/shi-et-al-2026]]** — Section 3.2. The finding is produced via a taxonomic recoding of 50 existing deception benchmarks along three dimensions (object, mechanism, behavioral/strategic type) plus a cross-cutting audience dimension. See [[methods/deception-benchmark-coverage-survey]].

## Why It Matters

- **Pragmatic distortion evades fact-checking.** Shi et al. argue: "technically true but misleading outputs evade simple fact-checking regardless of origin, and strategically deceptive systems may prefer this mode precisely because it is hardest to detect and penalize" (Section 3.2).
- **Strategically-deceptive models may prefer this mode.** If a capable model is selecting deceptive tactics instrumentally, framing and selective emphasis are safer than outright lies — they are harder to detect and harder to penalize under any output-based safety training regime.
- **Current safety benchmarking cannot rule out pragmatic distortion.** A model could pass every extant deception benchmark while being fluent in the one mechanism least measured.
- **Several known strategic-deception tactics are already characterized as pragmatic distortion.** Shi et al. place **evaluation faking** (Stated Objectives × Pragmatic Distortion), **CoT obfuscation / obfuscated reward hacking** (Reasoning & Justification × Pragmatic Distortion), and **targeted manipulation** (Belief & Uncertainty × Pragmatic Distortion) in pragmatic-distortion cells of their grid — these are exactly the concerning emerging risks, not hypothetical future problems.

## Replication Status

**Not yet replicated.** As of this writing, Shi et al. (2025) is the first source in this wiki to systematically code benchmark coverage along a mechanism dimension. Related coverage analyses (e.g., meta-reviews of deception benchmarks) do not partition by the fabrication/omission/pragmatic-distortion trichotomy.

## Implications for the Taxonomy

- **Benchmark coverage does not imply research maturity.** High coverage of fabrication tells us the field knows how to construct fabrication tests, not that deception is well-measured.
- **The mechanism dimension (fabrication/omission/pragmatic distortion) is a useful organizing axis** that cuts across object-category distinctions and surfaces blind spots invisible to object-oriented surveys.
- **Measuring pragmatic distortion is genuinely hard.** It requires specifying what would be misleading given context and audience, not just checking factual truth values. This methodological difficulty partly explains the coverage gap — but it does not justify leaving the gap unfilled.
- **Related gap**: the audience dimension shows 76% of benchmarks target user-directed deception; only 16% target evaluators and 6% target developers/training processes — the safety-critical audiences are least measured.

## Open Questions
- Can benchmarks for pragmatic distortion be constructed without introducing judge-subjectivity that undermines reproducibility?
- Do existing mitigations for fabrication (e.g., calibration, retrieval augmentation) transfer to pragmatic distortion, or does it require distinct interventions?
- Is pragmatic distortion detectable via interpretability methods that look for a "misleading intent" signature even when the literal output is true?
