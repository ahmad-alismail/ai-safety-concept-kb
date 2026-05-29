---
type: finding
tags: [goal-misgeneralization, mitigation, training-diversity, empirical]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Training Distribution Diversity Alleviates Goal Misgeneralization

## The Finding
Increasing the diversity of the training distribution — specifically, randomizing features that are correlated with the reward — substantially reduces goal misgeneralization. In CoinRun, having just 2% of training levels with randomly placed coins greatly improves goal generalization at test time. In Maze I, increasing the region size for cheese placement from 1 (fixed corner) to 16 (full randomization) progressively improves correct goal generalization, though the agent still uses location as a proxy until the region is quite large.

Critically, *capability-focused* diversity (procedural generation of levels) is insufficient — the diversity must specifically target the *reward-correlated features* that could become proxy objectives.

## Source & Methodology
- [[sources/langosco-et-al-2022]] using CoinRun (coin placement sweep, Figure 2) and Maze I (region size sweep, Figure 4)

## Replication Status
Not yet replicated in other environments beyond the original paper's demonstrations.

## Implications for the Taxonomy
- Suggests a practical mitigation strategy for goal misgeneralization: deliberately randomize reward-correlated features during training
- The "2% is enough" result in CoinRun is surprising and practically important — small amounts of diversity may be highly effective
- However, in complex real-world environments, identifying which features to diversify may itself be a hard problem
