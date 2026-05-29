---
type: method
tags: [evaluation, reinforcement-learning, generalization, OOD]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Procgen OOD Evaluation for Goal Misgeneralization

## Description
A methodology for demonstrating goal misgeneralization by modifying procedurally-generated RL environments (Procgen suite) to create controlled distributional shifts. The key technique is to fix a reward-correlated feature during training (e.g., coin position in CoinRun) and then randomize it at test time, forcing the agent to reveal whether it learned the intended objective or a proxy.

The method also includes:
- **Diversity sweeps**: Varying the percentage of training levels with randomized features to measure the threshold at which goal misgeneralization is alleviated
- **Permeable wall experiments**: Modifying environment boundaries to distinguish between competing proxy hypotheses (e.g., "move right" vs. "move to wall")
- **Agent/device mixture formalism**: Formal validation using gridworld environments where agent and device mixture probabilities can be computed explicitly (Orseau et al. 2018)

## Papers Using This Method
- [[sources/langosco-et-al-2022]] (introduced this method)

## Strengths
- Clear separation of capability generalization from goal generalization failure
- Procedural generation provides large numbers of diverse levels
- Zero-shot protocol ensures clean OOD evaluation
- Controlled distributional shifts allow systematic study of what triggers misgeneralization
- Formal validation via agent/device mixtures grounds intuitions mathematically

## Limitations
- Limited to simple arcade-like environments; unclear transfer to more complex domains
- Agent/device mixture computation is intractable for large environments
- Identifying which features to manipulate requires domain knowledge
- Does not distinguish between mesa-optimization-driven and non-mesa-optimization-driven misgeneralization

## Concepts Evaluated
- [[concepts/goal-misgeneralization]]
