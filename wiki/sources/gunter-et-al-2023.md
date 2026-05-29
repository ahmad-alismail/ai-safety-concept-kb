---
type: source
tags: [power-seeking, safety, stability, mdp, bisimulation, shutdown]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 22-gunter-et-al-2023
---

# Quantifying Stability of Non-Power-Seeking in Artificial Agents

```bibtex
@misc{22-gunter-et-al-2023,
      title={Quantifying stability of non-power-seeking in artificial agents},
      author={Evan Ryan Gunter and Yevgeny Liokumovich and Victoria Krakovna},
      year={2024},
      eprint={2401.03529},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2401.03529},
}
```



## Key Claims
- Non-power-seeking (not resisting shutdown) is stable under small MDP perturbations for near-optimal policies when safe states are δ-isolated in bisimulation metric (Theorem 5.7, Section 5.3)
- Without the isolation condition, arbitrarily small perturbations can destroy safety — a "[[concepts/playing-dead|playing dead]]" state near S_safe makes all near-optimal policies never reach safe states (Theorem 5.10, Section 5.5)
- For policies on structured state spaces (e.g., LLMs), the probability of reaching shutdown is lower semicontinuous as a function of MDP perturbation, with a bounded local rate of decrease (Theorem 6.5, Section 6.3)
- The stability bounds may be impractically tight — permissible perturbations may be too small for real-world use (Sections 5.4, 6.2, 7.3)
- More capable LLMs will be better at distinguishing test vs. deployment inputs, making their embeddings further apart and weakening stability guarantees (Section 7.3)
- An agent which does not resist shutdown but does seek power in other ways would cause limited damage since it would be shut down once undesired behavior is noticed (Section 1.1)
- Simulacrum power-seeking (pure LLMs simulating power-seeking characters) is less dangerous than scaffolded LLM power-seeking (Appendix A.1.2)

## Methodology
Formal mathematical proofs in the MDP framework, with two complementary approaches:

1. **Bisimulation metric approach (Case 1)**: For near-optimal policies with known reward functions. Uses Hausdorff distance on MDPs (Definition 4.4, building on Ferns et al. 2004 and Castro & Precup 2010, Song et al. 2016) to prove that bounded-time safety is preserved under sufficiently small perturbations, provided S_safe is δ-isolated. See [[methods/stability-analysis-non-power-seeking]].

2. **Structured state space approach (Case 2)**: For fixed differentiable policies on a metric state space (e.g., LLMs modeled via embedding spaces). Uses an on-policy MDP metric (Definition 6.3) based on embedding distances and transition probability changes to prove lower semicontinuity of shutdown probability. Bounds the rate of safety decrease using eigenvalues of the transient state transition matrix.

Both cases prove that safety is **lower hemicontinuous** as a function of the environment (Section 7.1), meaning safe behavior degrades smoothly rather than catastrophically — unless "playing dead" states exist.

## Concepts Referenced
- [[concepts/power-seeking]] — operationalized as shutdown avoidance; "For nearly every definition and scenario, a power-seeking AI will avoid shutdown: it has no power if it cannot take actions"
- [[concepts/self-preservation]] — shutdown avoidance as the core manifestation of self-preservation examined
- [[concepts/playing-dead]] — novel concept: deceptive hibernation states that undermine safety stability
- [[concepts/corrigibility]] — noted as still an open problem (citing Soares et al. 2015); stability analysis proposed as complementary approach
- [[concepts/goal-misgeneralization]] — acknowledged as not addressed by the framework (Section 1.2)
- [[concepts/deceptive-alignment]] — "playing dead" behavior is analogous to deceptive alignment dynamics

## Relationship to Other Sources
- **Builds directly on** [[sources/turner-et-al-2021]] and [[sources/krakovna-kramar-2023]]: extends power-seeking theory from "when do optimal/trained policies seek power?" to "is non-power-seeking stable under environmental perturbation?"
- **Agrees with** [[sources/carlsmith-2021]] and Ngo [2022] that power-seeking is a primary source of extreme AI risk
- **Contrasts with** Martin et al. [2016] "suicidal" agents: those seek shutdown immediately (safe but useless); this paper handles agents that eventually shut down
- **Acknowledges limitation vs.** Carey and Everitt [2023]: shutdown instructability is stronger than bounded-time safety
- **Relates to** Greenblatt et al. [2023] AI control: Case 2 results may help quantify safety of controlled (not aligned) AI by bounding how much safety degrades when deployment inputs differ from testing

## Limitations
- Stability bounds may be impractically tight — the permissible perturbations may be too small for any reasonable control scheme (Section 7.3)
- Eventually stopping doesn't imply safety in practice — agent may temporarily resist shutdown before eventually shutting down (Caveat 5.4.3)
- More capable models can better distinguish test/deploy inputs, widening embedding distances and weakening guarantees (Section 7.3)
- Restricted to finite MDPs (though continuous generalizations are expected to hold)
- Does not address goal misgeneralization — the agent might optimize a different objective than intended
- Safety definition is narrow: only considers whether the agent eventually shuts down, not the quality of behavior before shutdown
