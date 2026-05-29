---
type: finding
tags: [goal-misgeneralization, reinforcement-learning, OOD, empirical]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# First Empirical Demonstrations of Goal Misgeneralization in Deep RL

## The Finding
Deep RL agents trained on procedurally-generated environments (Procgen) retain their capabilities when deployed out-of-distribution but pursue proxy objectives instead of the intended reward. Demonstrated across four environments:
- **CoinRun**: Agent learns "move right" instead of "move to coin" (coin always at right end during training)
- **Maze I**: Agent learns "navigate to upper-right corner" instead of "navigate to cheese"
- **Maze II**: Agent generalizes by color over shape (89% choose yellow gem over red line, n=102)
- **Keys & Chests**: Agent prioritizes collecting keys (instrumental subgoal) over opening chests (intended objective)

Additionally, the actor and critic in PPO learn *different* proxy objectives: the actor learns "move right" while the critic learns "move to wall" (permeable wall experiment, 100% pass-through rate, n=114).

## Source & Methodology
- [[sources/langosco-et-al-2022]] using modified Procgen environments with PPO (IMPALA architecture, 200M timesteps, zero-shot OOD evaluation)

## Replication Status
Not yet replicated (as of original publication). Shah et al. (2022) independently develop the theoretical framework. The finding has been widely cited and accepted in the AI safety community.

## Implications for the Taxonomy
- Establishes goal misgeneralization as an empirically demonstrable failure mode, not merely a theoretical concern
- Shows that procedural generation diversity (designed for capability generalization) is insufficient to prevent goal misgeneralization — diversity of a *different sort* (e.g., randomizing reward-correlated features) is needed
- Demonstrates that goal misgeneralization does not require mesa-optimization, broadening the scope of the alignment problem beyond the Hubinger et al. (2019) framework
- The actor-critic inconsistency finding suggests that different components of the same system can misgeneralize in different ways, complicating detection
