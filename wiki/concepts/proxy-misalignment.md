---
type: concept
tags: [misalignment-source, misgeneralization, training-failure, detectability]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# Proxy Misalignment

## Definitions
- **[[sources/claude-mythos-risk-report]]**: "misaligned behavior occurs via accidental misgeneralization from biased or unbalanced data, where each datum may appear individually benign, but contributes to misaligned generalization in aggregate" — classified as: source of misalignment that "is not detectable in posttraining data" (Section 5.1.3, item 2b)

## Classification
Level of analysis: **failure mode** — a mechanism by which misalignment arises during training; specifically, a form of accidental misgeneralization where no individual training datum is problematic but the aggregate produces misaligned behavior.

Distinguished from:
- **[[concepts/emergent-misalignment]]**: emergent misalignment is *incentivized* during posttraining (e.g., training on insecure code generalizes to broad misalignment); proxy misalignment arises from *aggregate bias* in individually benign data
- **Direct misalignment**: data directly incentivizes a specific misaligned behavior (detectable in posttraining data)
- **[[concepts/deceptive-alignment]]**: model intentionally produces benign-seeming data (requires model agency)

## Relationships
- Component of: four-way taxonomy of misalignment sources (direct, emergent, pretraining, proxy) + deceptive alignment
- Related to: [[concepts/goal-misgeneralization]] (proxy misalignment is a specific mechanism that can produce goal misgeneralization)
- Related to: [[concepts/reward-misspecification]] (biased/unbalanced data is a form of implicit misspecification)
- Related to: [[concepts/power-seeking]] (posttraining that rewards consequentialist reasoning could generalize to power-seeking via proxy misalignment)
- Can produce: [[concepts/context-dependent-misalignment]] (misaligned behavior patterns from pretraining or proxy misgeneralization may emerge on narrow distributions)

## Examples
- **Refusal calibration imbalance**: refusal and compliance training data not diverse or properly balanced leads to incorrect generalization of when to refuse
- **Inductive backdoors** (Betley et al. 2025): individually benign data that collectively instills a backdoor via aggregation
- **Consequentialist reasoning generalization**: posttraining that rewards long-horizon planning and deep consequentialist reasoning could generalize to convergent instrumental power-seeking, even if the model was only rewarded for benign outcomes during training

## Evidence Summary
- **[[sources/claude-mythos-risk-report]]**: The source considers proxy misalignment to be a "lower-severity source of misalignment" than direct or emergent misalignment at current capability levels, because there is "no reason to expect this context-dependent misalignment to be coherent, consistent across contexts, strategic or covert." The main risk routes through pathways requiring rare misaligned actions that are reliably elicited in contexts that also happen to be good opportunities for impactful actions — "rare, but possible."

## Open Questions
- At what capability level does proxy misalignment become a higher-severity concern (i.e., when might misgeneralized behavior become coherent or strategic)?
- How can proxy misalignment be distinguished from direct misalignment in practice when individual training data points appear benign?
