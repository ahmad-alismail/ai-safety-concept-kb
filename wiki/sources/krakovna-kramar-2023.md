---
type: source
tags: [power-seeking, formal-theory, trained-agents, shutdown-avoidance, goal-misgeneralization]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 18-krakovna-kramar-2023
---

# Power-Seeking Can Be Probable and Predictive for Trained Agents

```bibtex
@misc{18-krakovna-kramar-2023,
      title={Power-seeking can be probable and predictive for trained agents}, 
      author={Victoria Krakovna and Janos Kramar},
      year={2023},
      eprint={2304.06528},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2304.06528}, 
}
```



## Key Claims
- Power-seeking incentives are still likely to hold for trained agents under simplifying assumptions, even though training constrains the goal set (Abstract, Section 1)
- The training-compatible goal set — the set of reward functions consistent with observed training rewards — can be formally defined and analyzed (Definition 6, Section 3)
- An agent that learns a goal from the training-compatible set is likely to avoid shutdown in new out-of-distribution situations (Theorem 2, Section 4)
- As the discount factor γ increases, a higher proportion of training-compatible goals lead to shutdown avoidance — more recurrent states become retargetable (Proposition 3, Section 4)
- For the majority (n/(n+1)) of goals in the training-compatible set, the agent will choose to avoid shutdown in a new state (Section 4)
- Permuting rewards of out-of-distribution states does not affect training-compatible status, enabling application of retargetability results to trained agents (Section 4)

## Methodology
Theoretical / formal mathematical analysis. Extends the RDSP framework ("Parametrically retargetable decision-makers tend to seek power," Turner & Tadepalli 2022) to trained agents. Introduces the **training-compatible goal set** (G_T) — the set of reward functions for which the trained agent's observed behavior is optimal — as a formal constraint on the full reward function space. Proves that power-seeking results from Turner & Tadepalli (2022) apply to G_T by showing retargetability conditions are satisfied through permutations of OOD state rewards.

Key technical tools: orbit-based counting arguments, MDP formalism (finite state/action spaces), recurrent state analysis, expected discounted visit counts (Proposition 2). The shutdown setting (Definition 7) provides the canonical application scenario: an agent in a novel OOD state chooses between shutting down and taking other actions.

### Simplifying Assumptions
1. The agent learns a goal during the training process
2. The learned goal is uniformly drawn from the training-compatible goal set G_T
3. Finite state and action spaces
4. Rewards are nonneg
5. High discount factor γ
6. Significant distributional shift: no training states are reachable from the new state s_new (S_train ∩ S_reach = ∅)

## Concepts Referenced
- [[concepts/power-seeking]]
- [[concepts/training-compatible-goal-set]]
- [[concepts/goal-misgeneralization]]
- [[concepts/self-preservation]] (shutdown avoidance as canonical manifestation)

## Relationship to Other Sources
- **Directly extends** [[sources/turner-et-al-2021]]: Narrows the power-seeking result from "most reward functions" to "most training-compatible reward functions," bridging the gap between theoretical optimality results and trained agents
- **Builds on** Turner & Tadepalli (2022) "Parametrically retargetable decision-makers tend to seek power" (RDSP): Uses the retargetability framework (Definitions 1–4, Theorem 1) as the primary analytical tool
- **Responds to** Turner (2022) "Reward is not the optimization target": Addresses the concern that trained agents may not optimize the training reward by formally analyzing the set of goals consistent with training
- **Adopts criteria from** Shah (2023) "Definitions of 'objective' should be probable and predictive": Title directly references Shah's desiderata
- **Uses CoinRun example from** [[sources/langosco-et-al-2022]]: Illustrates the training-compatible goal set using the CoinRun goal misgeneralization scenario
- **Connects to** Shah et al. (2022) and [[sources/langosco-et-al-2022]]: Training-compatible goals are "training-behavioral" objectives (Shah 2023); learning unintended ones leads to [[concepts/goal-misgeneralization]]

## Limitations
- Simplifying assumptions are acknowledged but not relaxed: uniformity assumption on G_T is particularly strong; real training processes have inductive biases that do not sample uniformly from G_T
- Finite state/action space assumption limits applicability to deep RL and LLM settings
- Nonnegative reward assumption is restrictive
- Requires significant distributional shift (S_train ∩ S_reach = ∅) — the result does not apply when training and deployment environments overlap
- The assumption that the agent "learns a goal" is itself debated (Turner 2022 argues reward is not the optimization target)
- Does not address partial observability, function approximation, or multi-agent settings
