---
type: concept
tags: [method, alignment, reward, learning]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Reward Learning

## Definitions
- **[[sources/skalse-et-al-2023]]**: "use reward learning to infer a reward function from data" (§1). Reward learning algorithms "can learn a reward function for tasks where it would be infeasible to specify a reward manually." Data sources include expert demonstrations (inverse RL), preferences over trajectories ([[concepts/rlhf]]), and many others. — classified as: **technique / approach**

## Classification
Level of analysis: **method category** — umbrella term for all approaches that infer reward functions from data rather than specifying them manually. Includes inverse reinforcement learning (IRL), preference-based RL, and multimodal approaches.

## Subtypes
- **Inverse Reinforcement Learning (IRL)**: Infers reward from expert demonstrations by inverting a model of the expert's planning algorithm (Russell 1998; Ng & Russell 2000)
- **Preference-based RL / [[concepts/rlhf]]**: Infers reward from human pairwise comparisons between trajectories (Christiano et al. 2017)
- **Multimodal approaches**: Combines demonstrations with preferences or other data sources to reduce ambiguity (Ibarz et al. 2018; Bıyık et al. 2022)

## Relationships
- Addresses: [[concepts/reward-misspecification]] (by learning rather than manually specifying rewards)
- Addresses: [[concepts/outer-alignment]] (reward learning is the dominant approach to outer alignment)
- Subject to: [[concepts/partial-identifiability]] (all data sources have fundamental ambiguity limits)
- Includes: [[concepts/rlhf]] (as a specific data source and method)
- Analyzed by: [[methods/invariance-framework]] (Skalse et al. 2023)
- Vulnerable to: transfer failure (Theorem 4.2 — learned rewards may not transfer across environments)

## Evidence Summary
- **[[sources/skalse-et-al-2023]]**: Provides the first comprehensive formal characterization of what reward learning can and cannot recover from each data source. Key result: different data sources have incomparable ambiguity (neither is strictly more informative), so combining them can reduce overall ambiguity (Theorem 4.1). However, transfer to new environments is fundamentally limited regardless of data source (Theorem 4.2).

## Open Questions
- Which combinations of reward learning data sources best reduce ambiguity in practice?
- Can reward learning scale to superhuman AI systems (see [[concepts/scalable-oversight]])?
