---
type: finding
tags: [reward-learning, transfer, partial-identifiability, formal]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Reward Learning Data Sources Are Too Ambiguous for Guaranteed Transfer

## The Finding
A very wide range of reward learning data sources are too ambiguous to guarantee that a learned reward function will produce correct behavior when transferred to a new environment with different dynamics. Specifically, if the reward learning algorithm is invariant to S'-redistribution (which includes any object computable from Q-functions), and the training and deployment environments differ in their transition dynamics for enough states, then the learned reward function is essentially unconstrained in the deployment environment (Theorem 4.2).

## Source & Methodology
- [[sources/skalse-et-al-2023]] using [[methods/invariance-framework]] (formal proof, Theorem 4.2)

## Replication Status
**not yet replicated** — theoretical result proven formally; empirical validation in practical RL/RLHF settings not yet conducted

## Implications for the Taxonomy
This result has direct implications for:
- **Sim-to-real transfer**: Reward functions learned in simulation may be meaningless in the real environment
- **Train/deploy distribution shift**: Relevant to [[concepts/deceptive-alignment]] and [[concepts/alignment-faking]] — if reward learning data is collected in a training context, the learned reward may not constrain behavior in deployment
- **[[concepts/outer-alignment]]**: Even with perfect reward learning, transfer to new environments reintroduces the misspecification problem
- **[[concepts/partial-identifiability]]**: Transfer failure is a consequence of partial identifiability compounding across environments
