---
type: concept
tags: [formal-property, reward-learning, alignment-failure, specification]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Partial Identifiability

## Definitions
- **[[sources/skalse-et-al-2023]]**: "there are often multiple reward functions that fit the data equally well, even in the infinite-data limit. This means that the reward function is only partially identifiable." (Abstract). Formally characterized via invariance partitions: the set of reward functions is partitioned into equivalence classes where all members produce identical observed data. The size and structure of these equivalence classes depend on the data source (demonstrations, preferences, trajectory comparisons). — classified as: **formal property / technical problem**

## Classification
Level of analysis: **formal property** — describes a fundamental limitation of reward learning: the mapping from data to reward functions is not injective, even with unlimited data. This is not a failure of any particular algorithm but a structural property of the learning problem.

## Relationships
- Caused by: the structure of reward learning data sources (different sources have different invariances)
- Formalizes: [[concepts/reward-misspecification]] (the gap between learned and intended reward)
- Affects: [[concepts/rlhf]] (trajectory preferences are subject to specific invariances — Theorems 3.8–3.12)
- Affects: [[concepts/outer-alignment]] (partial identifiability is a formal characterization of the limits of reward specification via learning)
- Mitigated by: combining incomparable data sources (Theorem 4.1, Skalse et al. 2023)
- Worsened by: transfer to new environments (Theorem 4.2 — invariances compound across environments)
- Related to: [[concepts/reward-hacking]] (a learned reward that is partially identified may be exploitable in ways the true reward is not)
- Measured by: [[methods/invariance-framework]] (the invariance partition lattice)

## Evidence Summary
- **[[sources/skalse-et-al-2023]]**: Provides exact characterizations of partial identifiability for all major reward learning data sources: Q-functions (up to S'-redistribution), optimal policies (up to optimality-preserving transformations), Boltzmann/MCE policies (up to S'-redistribution + potential shaping), trajectory returns (up to zero-initial potential shaping + mask), noisy comparisons (up to mask of impossible transitions), noiseless comparisons (up to ZPMT + mask), trajectory lotteries (up to k-initial potential shaping + scaling + mask).
- Noisy (Boltzmann) trajectory comparisons are strictly more informative than noiseless comparisons — counterintuitively, noise provides cardinal reward information that ordinal comparisons lack.
- Most data sources ARE sufficient for optimal policy computation in a fixed environment — but NOT for transfer to new environments (Theorem 4.2).

## Open Questions
- How does partial identifiability manifest with finite data in practice?
- Can the invariance framework be extended to the function-approximation regime relevant to LLMs?
- Does partial identifiability of RLHF reward models contribute to observed alignment failures like [[concepts/sycophancy]] or [[concepts/reward-hacking]]?
