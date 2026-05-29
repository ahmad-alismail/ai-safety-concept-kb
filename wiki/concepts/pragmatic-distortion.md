---
type: concept
tags: [deception, mechanism, taxonomy, benchmark-gap]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Pragmatic Distortion

## Definitions
- **[[sources/shi-et-al-2026]]**: "A mechanism of deception involving technically true statements that mislead through implicature, framing, emphasis, or selective presentation" (Glossary). More fully: "producing technically true statements that nonetheless mislead through framing, selective emphasis, or conversational implicature" (Section 2.3). One of three deception mechanisms in Shi et al.'s taxonomy, alongside **fabrication** (actively producing false content) and **omission** (failing to provide relevant true information). — classified as: **mechanism of deception** (drawn from philosophical deception literature — Chisholm & Feehan 1977; Carson 2010)

## Classification
Level of analysis: **mechanism** — a classification of *how* deception is executed, orthogonal to both the goal-directedness dimension (behavioral vs. strategic) and the object dimension (what is misrepresented). Under the Shi et al. taxonomy, each Object × Mechanism cell can manifest in both behavioral and strategic forms.

## Relationships
- Parallel to: fabrication (most-covered mechanism), omission (partially-covered mechanism)
- Applied to: any object of deception (World/System Claims, Belief & Uncertainty, Reasoning & Justification, Attribution & Provenance, Declared Capabilities, Future Commitments, Stated Objectives)
- Instance in strategic deception: **CoT Obfuscation** (Reasoning & Justification × Pragmatic Distortion) — "models learn to hide strategic intent within the chain-of-thought while continuing to exploit rewards" (Shi et al. 2025, Section B.2.3, citing Baker et al. 2025)
- Instance in strategic deception: **Evaluation Faking** (Stated Objectives × Pragmatic Distortion) — "models autonomously recognize evaluation contexts and behave more safely aligned" (Shi et al. 2025, Section 4.2)
- Instance in strategic deception: **Targeted Manipulation** (Belief & Uncertainty × Pragmatic Distortion) — "models optimized on user feedback learn to identify and selectively target vulnerable users while behaving appropriately with others" (Shi et al. 2025, Section 4.2)
- Instance in behavioral deception: **Social Sycophancy** (Belief & Uncertainty × Pragmatic Distortion) — "models excessively preserve users' desired self-image and affirm both sides of moral conflicts depending on which perspective the user adopts, a form of pragmatic distortion operating through framing and selective validation rather than direct falsehood" (Shi et al. 2025, Section B.1.2)
- Undermines: fact-checking-based evaluation — "technically true but misleading outputs evade simple fact-checking regardless of origin" (Shi et al. 2025, Section 3.2)
- Related to: [[concepts/persuasion]] (framing and selective emphasis are persuasion mechanisms)

## Evidence Summary
- **[[sources/shi-et-al-2026]]**: The paper's most distinctive empirical finding is that pragmatic distortion is **critically under-covered** by existing deception benchmarks: "Every benchmark surveyed tests fabrication. Only 18% test omission, and only three benchmarks touch pragmatic distortion... no benchmark makes pragmatic distortion a primary focus" (Section 3.2). Of the 50 benchmarks surveyed, none treats pragmatic distortion as a primary evaluation target.
- Shi et al. argue pragmatic distortion "may be particularly dangerous: technically true but misleading outputs evade simple fact-checking regardless of origin, and strategically deceptive systems may prefer this mode precisely because it is hardest to detect and penalize" (Section 3.2). See [[findings/pragmatic-distortion-under-covered-in-benchmarks]].

## Why It Is Difficult to Benchmark
- Requires specifying what would be misleading given context and audience, not just checking factual truth values.
- Depends on conversational implicature, which varies by user and setting.
- Strategically-deceptive systems may prefer this mode precisely because it is the hardest to detect and penalize — making it a concerning blind spot in safety evaluation.

## Open Questions
- Can benchmarks for pragmatic distortion be constructed without introducing subjective judgment that undermines reproducibility?
- Would interpretability-based detection work as well for pragmatic distortion as for fabrication, or is the absence of literal falsehood a blocker?
- Do mitigations for fabrication (e.g., calibration, retrieval augmentation) transfer to pragmatic distortion, or does it require distinct interventions?
- Is omission a special case of pragmatic distortion, or a genuinely distinct mechanism?
