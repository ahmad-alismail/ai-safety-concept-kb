---
type: method
tags: [formal-theory, decision-theory, power-seeking, instrumental-convergence]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Decision-Theoretic Power Formalism

## Description
A formal framework for analyzing instrumentally convergent power-seeking in an abstract, sequential decision-theoretic setting. Developed by Tarsney (2025) as a more general alternative to the MDP-based framework of Turner et al. (2021). The framework:

1. Represents choice situations as **finite decision trees** with choice nodes, chance nodes, and final outcomes
2. Models agents as **expected utility maximizers** with utility functions u : O → [0,1]
3. Defines **"random agents"** via randomly generated utility functions from distributions that are symmetric (permutation-invariant), regular (non-zero density everywhere), and almost surely non-uniform
4. Formalizes three strengths of **instrumental convergence**: weak (random agent at least as likely to choose higher-ranked subtree), strict (strictly more likely), absolute (probability 1)
5. Defines four **power relations** on decision trees:
   - **Power 1 (Inclusion, ≻p1)**: lottery set of t_j is a proper subset of lottery set of t_i — strictly but not absolutely convergent (Proposition 1)
   - **Power 2 (Interiority, ≻p2)**: lottery set of t_j is in the interior of lottery set of t_i — absolutely convergent (Proposition 2)
   - **Power 3 (Permuted Inclusion, ≻p3)**: some permutation of t_j's lotteries is a proper subset of t_i's — only weakly convergent (Proposition 3)
   - **Power 4 (Permuted Interiority, ≻p4)**: some permutation of t_j's lotteries is in the interior of t_i's — strictly but not absolutely convergent (Proposition 4)
6. Proves an **incompleteness result** (Proposition 5): no complete ranking of decision trees can be a convergent instrumental goal
7. Key mathematical tools: **hyperplane separation theorem**, properties of convex compact sets, Lebesgue measure arguments

## Papers Using This Method
- [[sources/tarsney-2025]] — original development

## Strengths
- More general than MDP-based frameworks — no assumptions about state-based rewards, discount factors, or Markov property
- Formally proves both positive results (power is convergent) and negative results (power rankings are incomplete)
- Three-tiered instrumental convergence definitions (weak/strict/absolute) provide nuanced characterization
- Permutation invariance approach parallels Turner et al. (2021) but operates at higher abstraction level
- Subsumes classical convergent instrumental goals (survival, information acquisition) as special cases

## Limitations
- Assumes expected utility maximization — a substantive rationality assumption
- Decision tree framework, while general, is less directly applicable to real-world AI systems than MDP frameworks
- No quantitative predictions without specific distributional assumptions about utility functions
- No empirical component — purely mathematical
- Incompleteness result (Proposition 5) limits the predictive utility of any power formalization from first principles alone

## Concepts Evaluated
- [[concepts/power-seeking]]
- [[concepts/instrumental-convergence]]
- [[concepts/self-preservation]]
- [[concepts/resource-acquisition]]
- [[concepts/absolute-power]]
