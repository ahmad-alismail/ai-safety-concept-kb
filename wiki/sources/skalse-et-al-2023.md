---
type: source
tags: [reward-learning, partial-identifiability, RLHF, inverse-RL, formal-theory]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 16-skalse-et-al-2023
---

# Invariance in Policy Optimisation and Partial Identifiability in Reward Learning

```bibtex
@misc{16-skalse-et-al-2023,
      title={Invariance in Policy Optimisation and Partial Identifiability in Reward Learning}, 
      author={Joar Skalse and Matthew Farrugia-Roberts and Stuart Russell and Alessandro Abate and Adam Gleave},
      year={2023},
      eprint={2203.07475},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2203.07475}, 
}
```

| Field     | Value                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authors   | [[entities/joar-skalse]], [[entities/matthew-farrugia-roberts]], [[entities/stuart-russell]], [[entities/alessandro-abate]], [[entities/adam-gleave]] |


## Key Claims
- Reward functions are only **partially identifiable** from standard reward learning data sources, even in the infinite-data limit (§3, Theorems 3.1–3.12)
- Q-functions determine reward up to S'-redistribution only (Theorem 3.1)
- Optimal policies determine reward up to optimality-preserving transformations (Theorem 3.2)
- Boltzmann-rational and MCE policies determine reward up to S'-redistribution and potential shaping (Theorem 3.3)
- Return function on initial trajectories determines reward up to zero-initial potential shaping and mask of unreachable transitions (Theorem 3.7)
- Noisy (Boltzmann) trajectory comparisons are **strictly more informative** than noiseless comparisons — because Boltzmann noise reveals cardinal reward information (Theorems 3.8–3.10)
- Many reward learning data sources are sufficient for optimal policy computation **in a fixed environment** (§5.2)
- Noiseless comparisons are NOT sufficient for optimal policy computation in all MDPs (Theorem 3.10)
- Preferences over trajectory lotteries determine reward up to k-initial potential shaping, positive linear scaling, and mask of unreachable transitions (Theorem 3.12)
- Combining **incomparable** data sources strictly reduces ambiguity (Theorem 4.1)
- Reward learning data sources are **generally too ambiguous** to guarantee transfer to new environments (Theorem 4.2)

## Methodology
Formal/theoretical analysis. The paper formalizes reward learning data sources and downstream applications as functions from reward space to output spaces, then characterizes their **invariance partitions** — equivalence classes of reward functions that produce identical outputs. Results are proven for finite, observable, infinite-horizon MDPs. The framework creates a **lattice structure** (partial order) over data sources and applications via the partition refinement relation. All results assume infinite data limits.

See [[methods/invariance-framework]] for the full methodology.

## Novel Reward Transformations Defined
- **Potential shaping** (Definition 2.5): $R_2(s,a,s') = R_1(s,a,s') + \gamma \cdot \Phi(s') - \Phi(s)$ — extends Ng et al. (1999)
- **S'-redistribution** (Definition 2.6): preserves expected reward over successor states — novel
- **Zero-preserving monotonic transformation** (Definition 2.7): preserves reward ordering and zero values — novel
- **Optimality-preserving transformation** (Definition 2.8): preserves the set of optimal actions — novel
- **Masking** (Definition 2.9): allows reward to vary freely for a specified set of transitions

## Concepts Referenced
- [[concepts/partial-identifiability]]
- [[concepts/reward-learning]]
- [[concepts/rlhf]] (trajectory preferences as a reward learning data source)
- [[concepts/reward-misspecification]] (motivating problem)
- [[concepts/outer-alignment]] (partial identifiability is a formal characterization of the outer alignment challenge)

## Relationship to Other Sources
- **Extends [[sources/hubinger-et-al-2019]]**: The partial identifiability of reward functions means that even "outer-aligned" reward learning may fail silently — the learned reward function may agree with all data but disagree on novel situations.
- **Extends Ng et al. (1999)**: Prior work showed potential shaping preserves optimal policies; this paper fully characterizes ALL transformations preserving optimal policies, plus covers MCE/Boltzmann policies.
- **Extends Cao et al. (2021) and Amin et al. (2017)**: Prior work showed combining data across tasks reduces ambiguity; this paper provides the general theoretical framework (Theorem 4.1).
- **Addresses open problem from Leike et al. (2018, §3.1)**: Provides a formal framework for comparing and selecting reward learning data sources.
- **Relevant to [[sources/ji-et-al-2024]]**: RLHF pipeline's preference comparison step is subject to the invariances characterized in Theorems 3.8–3.12.
- **Relevant to [[sources/ngo-et-al-2022]]**: Reward misspecification (the core outer alignment failure) is directly related to the partial identifiability problem — the reward function that RLHF recovers may be one of many compatible functions, some of which diverge from designer intent in deployment.

## Limitations
- Results assume **infinite data** — finite-sample behavior may differ significantly
- Assumes data is generated according to the model assumed by the reward learning algorithm (no **misspecification** of the data generation process)
- Setting is restricted to **finite, observable, infinite-horizon MDPs** — may not directly apply to the text-generation/LLM setting
- Does not account for inductive biases of practical reward learning algorithms
- The lattice framework captures worst-case ambiguity but does not model the probability of pathological reward functions
