---
type: source
tags:
  - shutdown-problem
  - decision-theory
  - corrigibility
  - formal-theory
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 32-thornley-2024
---

# The Shutdown Problem: An AI Engineering Puzzle for Decision Theorists

```bibtex
@misc{32-thornley-2024,
      title={The Shutdown Problem: An AI Engineering Puzzle for Decision Theorists}, 
      author={Elliott Thornley},
      year={2024},
      eprint={2403.04471},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2403.04471}, 
}
```

## Key Claims
- The shutdown problem — designing agents that (1) shut down when a button is pressed, (2) don't try to prevent or cause button pressing, and (3) otherwise pursue goals competently — is fundamentally hard for decision-theoretic reasons. (Abstract, §3)
- **First Theorem**: Agents satisfying six innocuous conditions (Option Set Independence, Backward Induction, Indifference to Attempted Button Manipulation, Indifference between Indifference-Shifted Lotteries, Transitivity, Better Chances) who prefer unpressed outcomes will be shutdown-averse; those preferring pressed outcomes will be shutdown-seeking. (§6, Appendix A)
- **Second Theorem**: Agents satisfying Option Set Independence, Transitivity, and Completeness that are discriminating enough to be useful will often have preferences regarding the shutdown button — revealing a trade-off between discrimination and shutdownability. (§7)
- **Third Theorem**: Agents satisfying Option Set Independence, Pareto Indifference, Completeness, and Transitivity that exhibit Minimal Patience will sacrifice resources at earlier timesteps to manipulate the shutdown button at later timesteps. The more patient, the greater the sacrifice — revealing a trade-off between patience and shutdownability. (§8)
- Training terminal aversion to button manipulation cannot provide reliable assurance because the aversion may be insufficiently general or insufficiently strong. (§8.2)
- No theorem condition clearly admits both feasible violation and shutdownability preservation; violating Completeness (incomplete preferences) is the most promising avenue. (§7, §9)

## Methodology
Formal axiomatic decision theory ("constructive decision theory"). Framework resembles MDPs but without reward function — models behavior of already-trained agents. Uses preference relations (weak/strict preference, indifference, preferential gaps) over lotteries (probability functions over trajectories). Defines "shutdown-influencing states" with three available actions (Leave, Prevent, Cause) and proves three theorems from combinations of conditions on agent preferences. See [[methods/shutdown-problem-axiomatic-framework]].

## Concepts Referenced
- [[concepts/shutdown-problem]]
- [[concepts/interruptibility]] (shutdownability)
- [[concepts/corrigibility]] (explicitly distinguished as broader than shutdownability)
- [[concepts/self-preservation]] / [[concepts/instrumental-convergence]] (motivates shutdown avoidance)
- [[concepts/myopia]] (impatient agents as partial solution; patience–shutdownability trade-off)
- [[concepts/shutdown-resistance]] (the behavior the theorems predict)

## Relationship to Other Sources
- **Extends** Soares et al. (2015): generalizes corrigibility results to a wider class of agents beyond expected utility maximizers; three more general theorems
- **Builds on** Omohundro (2008), Bostrom (2012): instrumental convergence drives shutdown avoidance
- **Engages with** Armstrong (2015): correcting-term utility functions (violating Option Set Independence) as potential solution; notes Soares et al.'s critique
- **Related to** [[sources/turner-et-al-2021]]: both provide formal analyses of why agents avoid shutdown; Thornley uses decision theory rather than MDPs
- **Related to** [[sources/krakovna-kramar-2023]]: extends shutdown avoidance results to trained agents; Thornley's framework is complementary
- **Related to** Orseau & Armstrong (2016): safely interruptible agents
- **Related to** [[sources/tarsney-2025]]: both use decision-theoretic formalisms for power-seeking/shutdown analysis
- **References** Ngo, Chan, and Mindermann (2023): alignment is hard, motivating the shutdown problem approach

## Limitations
- Framework models already-trained agents — does not address the training process itself
- Theorems identify conditions under which shutdown manipulation occurs but do not specify the *magnitude* of the problem in realistic settings
- The paper's analysis of potential solutions is self-described as "cursory" — closer examination of each condition is left to future work
- The incomplete preferences solution direction is work-in-progress (Thornley 2024b) and not fully developed in this paper
- The framework assumes agents can be modeled with preference relations — may not capture all relevant aspects of neural network behavior
