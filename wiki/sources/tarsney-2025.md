---
type: source
tags: [instrumental-convergence, power-seeking, decision-theory, formal-theory, philosophy]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 20-tarsney-2025
---

# Will Artificial Agents Pursue Power by Default?

```bibtex
@misc{20-tarsney-2025,
      title={Will artificial agents pursue power by default?},
      author={Christian Tarsney},
      year={2025},
      eprint={2506.06352},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2506.06352},
}
```


## Key Claims
- Power is a convergent instrumental goal, but with significant qualifications on predictive utility — "this claim contains at least an element of truth, but might turn out to have limited predictive utility, since an agent's options cannot always be ranked in terms of power in the absence of substantive information about the agent's final goals" (Abstract)
- Formalizes four notions of power as relations on decision trees: Inclusion (≻p1), Interiority (≻p2), Permuted Inclusion (≻p3), Permuted Interiority (≻p4) (§4)
- Proposition 1: Power-as-inclusion is strictly but not absolutely instrumentally convergent (§4)
- Proposition 2: Power-as-interiority is absolutely instrumentally convergent (§4)
- Proposition 3: Power-as-permuted-inclusion is only weakly instrumentally convergent (§4)
- Proposition 4: Power-as-permuted-interiority is strictly but not absolutely instrumentally convergent (§4, Appendix)
- Proposition 5 (impossibility result): No complete ranking of decision trees constitutes a convergent instrumental goal — power is necessarily incomplete as a predictor (§5)
- Instrumental convergence is more predictive when agents have opportunities for [[concepts/absolute-power|absolute or near-absolute power]] (§6)
- Self-preservation and information acquisition are vindicated as convergent instrumental goals, subsumed by power-as-inclusion (§4)

## Methodology
Formal mathematical analysis in sequential decision theory. Works in a framework of finite decision trees with expected utility maximizers. Defines "random agents" via randomly generated utility functions from distributions that are symmetric (permutation-invariant), regular (non-zero density everywhere), and almost surely non-uniform. Proves five propositions about when power-related relations constitute convergent instrumental goals at weak, strict, and absolute strength levels. Key mathematical tools: hyperplane separation theorem, convex compact lottery sets. See [[methods/decision-theoretic-power-formalism]].

## Concepts Referenced
- [[concepts/power-seeking]]
- [[concepts/instrumental-convergence]]
- [[concepts/self-preservation]]
- [[concepts/goal-content-integrity]]
- [[concepts/resource-acquisition]]
- [[concepts/alignment]]
- [[concepts/absolute-power]]

## Relationship to Other Sources
- **Generalizes [[sources/turner-et-al-2021]]**: Close conceptual parallels — "the closest precedent for my positive arguments" — but Tarsney works in a more general decision-theoretic setting (finite decision trees with arbitrary utility functions) vs. Turner et al.'s MDP framework with discounted state-based rewards. Both formalize power as control over future outcomes and prove convergence results via permutation invariance arguments.
- **Responds to Gallow (2024)**: Concedes Gallow's point that some definitions of power make convergence tautological, but argues Propositions 1–4 are non-trivial. Disagrees that power-seeking is not among genuinely convergent instrumental goals.
- **Responds to Thorstad (2024)**: Agrees that existing RL power-seeking theorems have limitations (specific assumptions about goals and environments), but argues the core idea survives in a more general framework.
- **Extends Omohundro (2008) and Bostrom (2012)**: Provides the formal qualifications missing from the informal presentations of convergent instrumental goals.
- **Engages with [[sources/carlsmith-2021]]**: Partially vindicates Carlsmith's claim about power-seeking incentives, but adds the incompleteness qualification (Proposition 5).
- **Extends [[sources/krakovna-kramar-2023]]**: Both aim to formally ground instrumentally convergent power-seeking; Tarsney's framework is more abstract (decision trees vs. MDPs) and yields both positive and negative results.

## Limitations
- Framework assumes expected utility maximization — a substantive assumption about instrumental rationality
- Does not consider non-consequentialist preferences (e.g., intrinsic aversion to power-seeking)
- Does not analyze rivalrousness of power or conditions under which power-seeking implies disempowerment of others
- Does not defend orthogonality thesis or alignment difficulty — limits scope to the instrumental convergence premise only
- Quantitative predictions (how much more likely is power-seeking?) require specific distributional assumptions not provided
- Results are abstract and mathematical — no empirical component
