---
type: source
tags: [power-seeking, instrumental-convergence, formal-theory, mdp, optimal-policies]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 17-turner-et-al-2021
---

# Optimal Policies Tend To Seek Power

```bibtex
@misc{17-turner-et-al-2021,
      title={Optimal Policies Tend to Seek Power},
      author={Alexander Matt Turner and Logan Smith and Rohin Shah and Andrew Critch and Prasad Tadepalli},
      year={2023},
      eprint={1912.01683},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/1912.01683},
}
```


## Key Claims
- Certain environmental symmetries are sufficient for optimal policies to tend to seek power over the environment (Theorem 6.13, Propositions 6.6, 6.9)
- In environments where the agent can be shut down or destroyed, most reward functions make it optimal to seek power by keeping options available (Corollary 6.14, Section 6.3)
- When maximizing average reward (γ=1), optimal policies tend to navigate towards larger sets of recurrent state distributions (Theorem 6.13)
- Average-optimal policies tend to avoid shutdown, because terminal states cannot access other 1-cycles (Corollary 6.14, Section 6.3)
- Power-seeking tendencies arise from graphical symmetries in the MDP, not from anthropomorphism (Section 6)
- States with "more options" have more POWER for most reward function distributions (Proposition 6.6)
- Greater POWER does not imply greater optimality probability — seeking POWER can be a "detour" (Proposition B.1)
- Optimal policies are often qualitatively divorced from actual policies learned by RL; reward provides gradients rather than ensuring robust reward optimization (Section 7, citing Turner 2022)

## Methodology
Formal mathematical theory within the Markov decision process (MDP) framework:
- Defines POWER as a normalized function of average optimal value across reward function distributions (Definition 5.2)
- Uses graph-theoretic symmetry analysis (involutions, permutation matrices) to identify structural conditions under which optimal policies tend to seek power
- Employs measure-theoretic arguments about reward function distributions, using "orbit" counting over the symmetric group to quantify "most reward functions" (Definition 6.5)
- Proves results for all discount rates γ ∈ [0,1] (Propositions 6.6, 6.9) and specifically for average-optimal policies at γ=1 (Theorem 6.13)
- Compares POWER with information-theoretic empowerment and shows POWER returns more intuitive results (Appendix A)

## Concepts Referenced
- [[concepts/power-seeking]] — formally defined and grounded for the first time
- [[concepts/instrumental-convergence]] — elevated from informal hypothesis to formal theorem under MDP conditions
- [[concepts/self-preservation]] — shown to follow from power-seeking tendency (shutdown avoidance)
- [[concepts/resource-acquisition]] — conjectured to follow from power-seeking at high discount rates
- [[concepts/corrigibility]] — related via shutdown avoidance results (Soares et al. 2015 cited)

## Relationship to Other Sources
- **Formalizes** the informal arguments of [[sources/omohundro-2008]] (basic AI drives) and Bostrom (2014, convergent instrumental goals)
- **Refutes** critics (LeCun & Zador 2019, Pinker & Russell 2020, Mitchell 2021) who claim power-seeking concerns are mere anthropomorphism — proves they arise from environmental structure
- **Supports** [[sources/carlsmith-2021]]'s argument that misaligned agents tend to seek power (provides formal backing for step 4 of Carlsmith's risk argument), though Carlsmith is not cited in this paper
- **Extends** Benson-Tilsen and Soares (2016) who earlier attempted to formalize convergent instrumental goals
- **Qualifies own results** significantly: acknowledges that learned policies are rarely optimal and that "the mathematics of policy gradient algorithms is not to update policies so as to maximize reward" (Section 7, citing Turner 2022)
- **Referenced by** [[sources/ji-et-al-2024]], [[sources/ngo-et-al-2022]], [[sources/langosco-et-al-2022]] for formal support of instrumental convergence

## Limitations
- Results apply only to optimal policies in finite MDPs; real-world training procedures rarely produce optimal policies
- Most real-world tasks are partially observable; results only cover full observability
- The "most reward functions" framing uses orbit counting (counting measure over permutations), which may not reflect empirically relevant reward function distributions
- The paper does not claim to prove that real AI agents will seek power — only that optimal policies in MDPs with certain symmetries tend to
- The gap between formal optimality and learned policy behavior is explicitly flagged as a serious constraint on applicability
- No empirical experiments; purely theoretical contribution
