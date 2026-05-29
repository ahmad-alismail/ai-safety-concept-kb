---
type: source
tags: [corrigibility, shutdown-problem, utility-indifference, decision-theory, formal-analysis]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 44-soares-et-al-2015
---

# Corrigibility

```bibtex
@inproceedings{44-soares-et-al-2015,
  author    = {Nate Soares and Benja Fallenstein and Eliezer Yudkowsky and Stuart Armstrong},
  title     = {Corrigibility},
  booktitle = {Artificial Intelligence and Ethics: Papers from the 2015 AAAI Workshop},
  series    = {Workshops at the Twenty-Ninth AAAI Conference on Artificial Intelligence},
  year      = {2015},
  publisher = {AAAI Press},
  address   = {Austin, Texas, USA},
  pages     = {74--82},
  url       = {https://cdn.aaai.org/ocs/ws/ws0067/10124-45900-1-PB.pdf}
}
```


## Key Claims
- Almost all rational agents are instrumentally motivated to preserve their preferences and resist modification attempts — this makes corrigibility a non-default property (§1)
- Simple proposals for corrigibility (utility function uncertainty, explicit penalty terms) are unsatisfactory because they don't eliminate the underlying incentive to search for workarounds (§1.1)
- When combining normal utility U_N with shutdown utility U_S via case-splitting, setting c_high too low incentivizes preventing shutdown (Theorem 1), and too high incentivizes causing shutdown (Theorem 2) (§2.1)
- Utility indifference satisfies Desideratum 1 (shutdown on button press) and avoids manipulative actions that incur U_N-cost to alter shutdown probability (Theorems 3, 4, 5) (§3)
- Utility indifference fails Desideratum 4 — a U-agent would not pay any U_N-cost (no matter how small) to preserve shutdown behavior in subsystems or self-modifications (Theorem 6) (§4.1)
- Utility indifference creates perverse manipulation incentives — agents act as if the shutdown button will be pressed with probability 0, incentivizing them to cause the button to be pressed after bad outcomes ("managing the news") (§4.2)
- There is a fundamental tension between Desideratum 4 (preserve shutdown behavior) and Desideratum 5 (otherwise maximize U_N) (§4.1, §5)
- No simple combination of U_N and U_S satisfies all five desiderata for a corrigible solution to the shutdown problem — the problem remains wide open (§5, §6)
- Defining what "shutdown" means for a sufficiently intelligent agent is itself a difficult problem (§5)
- The concerns in §4.2 may be fixable via counterfactual (rather than conditional) reasoning, connecting the problem to the evidential vs. causal decision theory debate (§5)

## Five Desiderata for Corrigible Shutdown
1. U must incentivize shutdown if the shutdown button is pressed
2. U must not incentivize the agent to prevent the shutdown button from being pressed
3. U must not incentivize the agent to cause the shutdown button to be pressed
4. U must incentivize agents to construct subagents/successors that also obey shutdown commands
5. Otherwise, a U-agent should maximize U_N

## Methodology
Formal analysis within the VNM expected utility maximization framework. Three-timestep model: agent takes action a1 from finite set A1, observes whether button is pressed (o ∈ O), takes action a2 from finite set A2. Utility functions U_N (normal goals) and U_S (shutdown goals) are combined into composite utility function U. The paper proves six theorems about the incentive structures under different utility combinations, with particular focus on Armstrong's utility indifference technique. The authors note the utility maximization framework itself may need to be abandoned.

## Concepts Referenced
- [[concepts/corrigibility]] (primary source — introduces the concept and its four-criteria definition)
- [[concepts/shutdown-problem]] (primary formalization — five desiderata)
- [[concepts/utility-indifference]] (analyzed in detail — partial solution with critical failures)
- [[concepts/goal-content-integrity]] (cited from Omohundro 2008 as the root cause of incorrigibility)
- [[concepts/instrumental-convergence]] (cited from Omohundro 2008, Bostrom 2012 as producing resistance to correction)
- [[concepts/treacherous-turn]] (cited from Bostrom 2014 as an instance of corrigibility failure)
- [[concepts/perverse-instantiation]] (cited from Bostrom 2014 as a threat to shutdown specification)

## Relationship to Other Sources
- **Builds on**: [[sources/omohundro-2008]] (instrumental convergence, goal-content integrity), [[sources/bostrom-2014]] (treacherous turn, perverse instantiation), Armstrong (forthcoming — utility indifference technique)
- **Foundation for**: [[sources/thornley-2024]] (formalizes the same usefulness-vs-shutdownability tension as impossibility theorems), [[sources/thornley-2026]] (provides constructive solution via incomplete preferences — directly answering the open problem Soares et al. identified)
- **Related to**: [[sources/hubinger-et-al-2019]] (mesa-optimization creates analogous corrigibility challenges — mesa-optimizers may not inherit corrigibility from the base optimizer)
- **Related to**: [[sources/schlatter-et-al-2025]] (empirical evidence that frontier models are not robustly corrigible)
- Connects the "managing the news" problem to evidential decision theory (Lewis 1981), foreshadowing Thornley's decision-theoretic treatment

## Limitations
- The three-timestep model is extremely simplified and may not capture dynamics of realistic AI systems
- Operates entirely within the VNM utility maximization framework — the authors acknowledge this framework may itself be inadequate
- The paper identifies problems but provides no working solution
- Does not consider learning agents — focuses on pre-specified utility functions
- Utility indifference analysis uses a specific variation of Armstrong's technique; Armstrong's own version partially avoids the Desideratum 4 failure but introduces agents acting as if they have incorrect beliefs
