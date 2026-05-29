---
type: question
tags: [reward-learning, partial-identifiability, RLHF, alignment]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Can Reward Learning Overcome Partial Identifiability for Alignment?

## Why It Matters
[[sources/skalse-et-al-2023]] proves that reward functions are only partially identifiable from any standard data source, even with infinite data. For AI alignment, this means reward learning approaches ([[concepts/rlhf]], IRL) have fundamental information-theoretic limits on what they can recover about human preferences. If the set of compatible reward functions includes some that are badly misaligned, partial identifiability becomes a pathway to [[concepts/reward-misspecification]] and downstream failures like [[concepts/reward-hacking]].

## What Sources Say
- **[[sources/skalse-et-al-2023]]**: In a fixed environment, most data sources ARE sufficient for computing an optimal policy (the ambiguity doesn't matter for that specific task). But this sufficiency does NOT extend to transfer across environments (Theorem 4.2). Combining incomparable data sources can strictly reduce ambiguity (Theorem 4.1), suggesting multimodal reward learning as a mitigation path.
- The paper notes that inductive biases of learning algorithms, finite-data effects, and misspecification of the data generation model are important open questions not addressed by the infinite-data, exact-model framework.

## Suggested Investigation
- Empirically measure the practical impact of partial identifiability in RLHF reward models: do trained reward models agree on in-distribution examples but diverge on edge cases?
- Study whether combining demonstrations + preferences + other feedback modalities reduces alignment-relevant ambiguity in practice
- Extend the invariance framework to function-approximation settings relevant to LLMs
