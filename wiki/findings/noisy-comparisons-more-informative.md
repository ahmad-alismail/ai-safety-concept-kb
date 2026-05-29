---
type: finding
tags: [reward-learning, RLHF, preferences, formal]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Noisy Trajectory Comparisons Are Strictly More Informative Than Noiseless

## The Finding
Boltzmann-noisy trajectory comparisons (where the labeler is more likely to err when trajectories have similar value) are strictly more informative about the underlying reward function than noiseless comparisons. This is counterintuitive: adding noise to a data source typically reduces information. The explanation is that Boltzmann noise reveals **cardinal** information about reward magnitudes (the probability of error depends on the value difference), whereas noiseless comparisons only reveal **ordinal** information (which trajectory is better).

Specifically, Boltzmann comparisons of trajectory fragments determine reward up to a mask of impossible transitions only (Theorem 3.8), while noiseless comparisons are invariant to zero-preserving monotonic transformations (Theorem 3.10) — a strictly larger class of transformations.

## Source & Methodology
- [[sources/skalse-et-al-2023]] using [[methods/invariance-framework]] (formal proof, Theorems 3.8–3.10)

## Replication Status
**not yet replicated** — theoretical result proven formally; practical implications for RLHF reward model training not yet empirically validated

## Implications for the Taxonomy
- **[[concepts/rlhf]]**: The standard RLHF preference model (Bradley-Terry, which is equivalent to Boltzmann comparisons) captures more reward information than deterministic rankings. This is a formal justification for using soft preference models.
- **[[concepts/reward-learning]]**: When designing reward learning pipelines, noisy comparison models should be preferred over deterministic rankings, even if noiseless rankings seem more "reliable."
- **[[concepts/partial-identifiability]]**: This result illustrates how the information content of a data source can be non-obvious and requires formal analysis to determine.
