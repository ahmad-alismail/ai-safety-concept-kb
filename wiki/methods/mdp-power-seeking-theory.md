---
type: method
tags: [formal-theory, mdp, power-seeking, instrumental-convergence]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# MDP Power-Seeking Theory

## Description
A formal mathematical framework for analyzing when optimal policies in Markov decision processes (MDPs) tend to seek power. Developed by Turner et al. (2021), the framework:
1. Formalizes **POWER** as a normalized function of average optimal value, measuring an agent's control over the future (Definition 5.2)
2. Defines **power-seeking actions** as those leading to states with higher expected POWER (Definition 5.6)
3. Uses **graph-theoretic symmetry analysis** (involutions, permutation matrices) to identify structural conditions producing power-seeking tendencies
4. Employs **orbit counting** over the symmetric group to quantify "most reward functions" — comparing cardinalities of reward function distributions that agree vs. disagree with a POWER ordering (Definition 6.5)
5. Introduces **recurrent state distributions (RSDs)** to analyze average-optimal behavior (Definition 6.10)

Key results: Proposition 6.6 (states with more options have more POWER), Proposition 6.9 (keeping options open tends to be optimal and POWER-seeking), Theorem 6.13 (average-optimal policies navigate towards larger RSD sets), Corollary 6.14 (average-optimal policies tend to avoid any given terminal state).

## Papers Using This Method
- [[sources/turner-et-al-2021]] — original development
- [[sources/krakovna-kramar-2023]] — extends the framework to trained agents via the [[concepts/training-compatible-goal-set]]; applies retargetability results from Turner & Tadepalli (2022) to the restricted set of training-compatible reward functions
- [[sources/gunter-et-al-2023]] — extends the framework to analyze *stability* of non-power-seeking under environmental perturbation; introduces bisimulation-metric-based Hausdorff distance for comparing MDPs and proves stability theorems for near-optimal policies (Case 1). See [[methods/stability-analysis-non-power-seeking]]

## Strengths
- First rigorous formalization of power-seeking — moves the discussion from informal arguments to provable theorems
- Results are distribution-agnostic (hold for "most" distributions via orbit counting)
- Provides intuitive POWER measure that outperforms information-theoretic empowerment (Appendix A)
- Applies to all discount rates γ ∈ [0,1] under strongest symmetry conditions
- Directly addresses the anthropomorphism objection by grounding power-seeking in environmental structure

## Limitations
- Restricted to finite MDPs with full observability
- Optimal policies are a strong assumption — learned policies are rarely optimal
- Orbit counting uses the counting measure, which may not reflect empirically relevant distributions
- The gap between formal optimality and actual RL training dynamics is explicitly acknowledged
- Irregular stochasticity in environmental dynamics can make symmetry requirements hard to satisfy

## Related Methods
- [[methods/decision-theoretic-power-formalism]] — Tarsney (2025) develops a more general decision-theoretic alternative that works with finite decision trees and arbitrary utility functions rather than MDPs with discounted rewards. "The closest precedent for my positive arguments is Turner et al. (2021)... Our definitions and results differ in a number of ways, but the most important difference is that Turner et al. work in the standard reinforcement learning setting of Markov decision processes... while I work in the decision-theoretic setting of finite decision trees with an arbitrary utility function over final outcomes." Both use permutation invariance to formalize "most goals."

## Concepts Evaluated
- [[concepts/power-seeking]]
- [[concepts/instrumental-convergence]]
- [[concepts/self-preservation]] (shutdown avoidance as a derived result)
