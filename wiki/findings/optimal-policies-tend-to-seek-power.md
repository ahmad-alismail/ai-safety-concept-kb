---
type: finding
tags: [power-seeking, instrumental-convergence, formal-theory, mdp]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Optimal Policies Tend to Seek Power in MDPs with Environmental Symmetries

## The Finding
In finite Markov decision processes (MDPs), optimal policies tend to seek power — formally defined as navigating towards states with higher average optimal value across reward function distributions. Specifically:
1. For most reward functions, optimal actions keep options open rather than restricting them (Proposition 6.9)
2. Average-optimal policies (γ=1) tend to navigate towards larger sets of recurrent state distributions (Theorem 6.13)
3. Average-optimal policies tend to avoid shutdown/terminal states, because terminal states restrict access to other cycles (Corollary 6.14)

These results hold whenever certain graph-theoretic symmetries exist in the environment — symmetries that automatically arise in many environments where the agent can be shut down or destroyed.

## Source & Methodology
- [[sources/turner-et-al-2021]] using formal mathematical proofs within the MDP framework
- Key technique: orbit counting over symmetric group permutations of reward function distributions to establish "most reward functions" claims
- Results hold for all discount rates γ ∈ [0,1] under the strongest conditions (Propositions 6.6, 6.9), and for γ=1 under weaker conditions (Theorem 6.13)

## Replication Status
**Theoretical — not applicable in the usual sense.** The results are mathematical proofs, not empirical findings. However, Turner (2022) subsequently argued that the theoretical framework may have limited applicability because learned policies are rarely optimal and reward functions may not capture agents' actual objectives. [[sources/krakovna-kramar-2023]] partially addresses this by extending the results to trained agents via the [[concepts/training-compatible-goal-set]], proving that the majority of training-compatible goals lead to shutdown avoidance in OOD situations (Theorem 2). See [[findings/power-seeking-probable-predictive-for-trained-agents]].

## Implications for the Taxonomy
- Provides the first formal grounding for the [[concepts/instrumental-convergence]] thesis — elevates it from informal argument to mathematical theorem under specified conditions
- Introduces a fourth classification of [[concepts/power-seeking]]: a **mathematical/structural tendency** arising from environmental symmetries, distinct from Omohundro's "drive," Bostrom's "convergent instrumental goal," and Carlsmith's "predicted behavioral tendency." See [[debates/power-seeking-drive-vs-tendency]]
- Establishes that [[concepts/self-preservation]] (shutdown avoidance) is formally derivable from the power-seeking tendency, not just an informal intuition
- Distinguishes POWER (average optimal value) from optimality probability — power-seeking can be a "detour," so the relationship between power and behavior is more nuanced than simple identification
