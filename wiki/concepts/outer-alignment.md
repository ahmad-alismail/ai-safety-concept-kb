---
type: concept
tags: [alignment-problem, safety, mesa-optimization]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Outer Alignment

## Definitions
- **[[sources/hubinger-et-al-2019]]**: "The problem of aligning the base objective of an advanced ML system with the desired goal of the programmers" — "an alignment problem between the system and the humans outside of it. In the context of machine learning, outer alignment refers to aligning the specified loss function with the intended goal." — classified as: **safety problem / alignment subproblem**

## Classification
Level of analysis: **problem category** — the "traditional" alignment problem of ensuring the specified objective captures programmer intent. Distinct from [[concepts/inner-alignment]], which concerns alignment *within* the system between base and mesa-objectives.

## Relationships
- Complement of: [[concepts/inner-alignment]]
- Arises from: [[concepts/mesa-optimization]] framework (as a named component), but the problem itself predates the framework
- Related to: [[concepts/reward-learning]], inverse reinforcement learning, value specification
- Formally characterized by: [[concepts/partial-identifiability]] (Skalse et al. 2023 — the outer alignment gap is bounded by invariance partitions of reward learning data sources)
- Related to: [[concepts/alignment]] (outer alignment is one component of the full alignment problem)
- Related to: [[concepts/reward-hacking]] (exploiting gaps in the base objective is an outer alignment failure)

## Evidence Summary
- The outer alignment problem is the more established of the two subproblems — it corresponds to the longstanding challenge of specifying correct reward functions.
- Hubinger et al. (2019) notes that if mesa-optimization can be reliably prevented, the inner alignment problem disappears and only outer alignment needs to be solved.

## Open Questions
- Can reward learning and human feedback approaches solve outer alignment at scale? [[sources/skalse-et-al-2023]] shows fundamental limits on what reward learning can recover — see [[concepts/partial-identifiability]].
- How does the difficulty of outer alignment interact with the difficulty of inner alignment?
- Does the transfer failure result (Theorem 4.2, Skalse et al. 2023) imply that outer alignment in training environments does not guarantee outer alignment in deployment? See [[findings/reward-ambiguity-limits-transfer]].
