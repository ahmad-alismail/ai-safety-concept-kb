---
type: source
tags:
  - reward-hacking
  - formal-theory
  - MDP
  - alignment
  - RLHF
date_created: 2026-05-19
date_modified: 2026-05-19
citation_key: 90-skalse-et-al-2022
---

# Defining and Characterizing Reward Hacking

```bibtex
@inproceedings{
90-skalse-et-al-2022,
title={Defining and Characterizing Reward Gaming},
author={Joar Max Viktor Skalse and Nikolaus H. R. Howe and Dmitrii Krasheninnikov and David Krueger},
booktitle={Advances in Neural Information Processing Systems},
editor={Alice H. Oh and Alekh Agarwal and Danielle Belgrave and Kyunghyun Cho},
year={2022},
url={https://openreview.net/forum?id=yb3HOXO3lX2}
}
```

| Field   | Value                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authors | [[entities/joar-skalse]], [[entities/nikolaus-howe]], [[entities/dmitrii-krasheninnikov]], [[entities/david-krueger]] (Skalse & Krueger equal contribution) |

## Key Claims
- First formal definition of [[concepts/reward-hacking]] as a structural property of a (true reward, proxy reward, policy set, MDP) tuple (Abstract, §1).
- **[[concepts/hackability|Hackability]]** (Definition 1): a pair of reward functions $\mathcal{R}_1, \mathcal{R}_2$ is hackable on policy set $\Pi$ if $\exists \pi, \pi' \in \Pi$ such that $J_1(\pi) < J_1(\pi') \land J_2(\pi) > J_2(\pi')$. Hackability is **symmetric** and **not transitive** (§4.2).
- **[[concepts/simplification|Simplification]]** (Definition 2): asymmetric special case of unhackability that only allows inequalities to be replaced with equality (never the reverse). Theorem 3 shows simplification is strictly more demanding than unhackability (§4.2).
- **Corollary 1**: On the set of all stationary policies $\Pi$, any non-trivial unhackable reward pair is equivalent — i.e., no interesting unhackability exists when considering all policies (§5.1).
- **Theorem 1**: Any policy set containing an open subset admits no non-trivial non-equivalent unhackable pairs. The proof uses linearity of $J$ in visit counts plus Lemma 1 (homeomorphism between $\mathcal{G}(\dot\Pi)$ and $\mathcal{F}(\dot\Pi)$) (§5.1).
- **Corollary 2**: Restricting to $\varepsilon$-suboptimal policies or $\delta$-deterministic policies does not yield interesting unhackability — both sets contain open subsets (§5.1).
- **Theorem 2**: For any MDP and any finite policy set with at least two policies of distinct visit counts, and any reward $\mathcal{R}_1$, there exists a non-trivial $\mathcal{R}_2$ that is unhackable but not equivalent to $\mathcal{R}_1$ (§5.2).
- **Theorem 3**: Necessary and sufficient condition for a non-trivial simplification of $\mathcal{R}_1$ on a finite policy set: $\dim(Z_1 \cup \cdots \cup Z_m) \le \dim(\mathcal{F}(\hat\Pi)) - 2$, where $E_i$ partitions $\hat\Pi$ by $J$-equivalence and $Z_i$ are projected occupancy differences (§5.2).
- **Corollary 3**: If all policies in a finite set have distinct $J(\pi)$, a non-trivial simplification of $\mathcal{R}$ always exists (§5.2).
- For some infinite policy sets without open subsets, non-trivial simplifications exist; for others they do not. Characterization remains incomplete (§5.3, Figure 5).
- Seemingly natural attempts to "simplify" reward functions — overlooking rewarding features, overlooking fine-grained distinctions — frequently produce HACKABLE proxies. Illustrated via the Cleaning Robot example (§2) and Gaussian/step-function example (Figure 3).
- The "narrow tasks vs. broad values" framing is incompatible with safe Markov reward specification: "if we consider the 'narrow task' reward function as a proxy for the true 'broad values' reward function, our results indicate that this is not possible: these two reward functions will invariably be hackable" (§6.2).
- Policy recommendation: "the reward functions learned by methods such as reward modeling and inverse RL are perhaps best viewed as auxiliaries to policy learning, rather than specifications that should be optimized" (§1, §6.2). Concretely: learn a policy in a safe controlled setting, then validate before deployment.
- Alternatives to reward optimization proposed: imitation learning (Ross et al. 2011), constrained RL (Szepesvári 2020), [[concepts/quantilization|quantilizers]] (Taylor 2016), incentive management (Everitt et al. 2019).

## Methodology
Formal/theoretical analysis. Finite, observable, infinite-horizon Markov decision processes without reward $\text{MDP}\backslash\mathcal{R} = (S, A, T, I, \_, \gamma)$. Reward viewed as $\mathcal{R}(s,a)$ after marginalizing over transitions. Policy value $J(\pi) = \langle \mathcal{R}, \mathcal{F}^{\pi} \rangle$, where $\mathcal{F}^{\pi}(s,a)$ is the discounted visit-count of $(s,a)$ under $\pi$. Two embeddings into Euclidean space: $\mathcal{F}$ (visit counts) and $\mathcal{G}$ (action probability vector). Proofs use linearity of $J$ in $\mathcal{F}^\pi$, topological arguments (open sets, homeomorphism Lemma 1), and contour-line rotation in state-action occupancy space (Figure 4). No empirical experiments. Authors release a software suite (Appendix D.3) for enumerating policy orderings and non-trivial simplifications for given environments.

## Novel Formal Constructs
- **Hackability** (Definition 1) — symmetric binary relation on reward pairs relative to $(\Pi, \text{MDP}\backslash\mathcal{R})$.
- **Unhackability** — negation of hackability; relaxation of Ng et al.'s equivalence (allows equality $\leftrightarrow$ inequality refinement).
- **Simplification** (Definition 2) — asymmetric strengthening: only inequalities can be replaced with equality. Notation: $\mathcal{R}_1 \trianglelefteq \mathcal{R}_2$ (R2 refines R1).
- **Refinement** — inverse of simplification.
- **$\varepsilon$-suboptimal policy** (Definition 3): $J(\pi) \ge J(\pi^*) - \varepsilon$.
- **$\delta$-deterministic policy** (Definition 4): $\forall s\, \exists a: \mathbb{P}(\pi(s)=a) \ge \delta$.
- **Trivial reward function**: $J(\pi)=J(\pi')$ for all $\pi, \pi'\in\Pi$.

## Concepts Referenced
- [[concepts/reward-hacking]]
- [[concepts/hackability]]
- [[concepts/simplification]]
- [[concepts/reward-tampering]]
- [[concepts/reward-misspecification]]
- [[concepts/specification-gaming]]
- [[concepts/goodharts-law]]
- [[concepts/quantilization]]
- [[concepts/power-seeking]]
- [[concepts/outer-alignment]]
- [[concepts/wireheading]]
- [[concepts/partial-identifiability]]

## Relationship to Other Sources
- **Companion formal foundation to** [[sources/skalse-et-al-2023]]: same first author and finite-MDP setting. This 2022 paper formalizes when proxy/true reward pairs admit unintended optimization; the 2023 paper formalizes which reward functions are identifiable from learning data. Together they bracket the formal limits of reward learning safety.
- **Cited by** [[sources/ngo-et-al-2022]] (as "Skalse et al. 2022") as the source of the reward-hacking definition. Ngo et al. then layer on a [[concepts/situational-awareness|situational-awareness]] requirement to produce [[concepts/situationally-aware-reward-hacking]] — a behavioral specialization the formal paper does not require.
- **Extends/critiques** Leike et al. (2018): "they do not consider the entire policy preference ordering." Provides the first formal characterization of when proxy optimization is safe.
- **Relaxes** Ng et al. (1999, 2000)'s equivalence relation: "Previous works consider reward functions to be equivalent if they preserve the ordering over policies. Unhackability relaxes this, allowing equalities to be refined to inequalities, and vice versa."
- **Generalizes** Zhuang & Hadfield-Menell (2020): "their result only applies to environments with decreasing marginal utility and increasing opportunity cost, we demonstrate hackability is an issue in arbitrary MDPs."
- **Distinguishes from** Brown et al. (2020b)'s $\varepsilon$-value alignment: "Neither notion implies the other."
- **Closely related to but distinct from** Taylor (2016)'s [[concepts/quantilization|quantilization]]: simplification "may also equate the values of the bottom/middle n%, etc. Thus simplification may achieve a similar effect to quantilization without assuming that we are free to choose from among the best policies" (§3).
- **Identifies first formal vs. first empirical**: Pan et al. (2022) is "the first peer-reviewed work that focuses specifically on" reward hacking (empirically, 5/9 settings hack); this paper is the first **formal** definition.
- **Builds on** Everitt et al. (2017) Corrupt Reward MDP (CRMDP): "A CRMDP distinguishes corrupted and uncorrupted rewards; these are exactly analogous to the proxy and true reward discussed in our work" (§3).
- **Critiques precision of** Leike et al. (2018)'s reward-tampering / reward-gaming distinction: "in principle, a reward function could prohibit all forms of tampering if the effects of tampering are captured in the state. So this distinction is somewhat imprecise" (§3).
- **Implies critique of** reward-modeling and inverse-RL approaches (Ng 2000, Ziebart 2010, Leike et al. 2018, Hadfield-Menell et al. 2016b/2017, Fu et al. 2017, Stiennon et al. 2020, Nakano et al. 2021) — these produce hackable proxies; safe Markov reward specification requires encoding broad values, which is "challenging, perhaps intractably so" (§6.2).
- **Hackability concern compounded by** [[sources/turner-et-al-2021]]'s power-seeking result: "Hackability is particularly concerning given arguments that reward optimizing behavior tends to be power-seeking" (§3).
- **Related to** Abel et al. (2021) on Markov reward expressivity, but distinct: "they do not consider hackability."

## Limitations
- Setting restricted to **finite, observable, infinite-horizon MDPs** and **Markov reward functions** — more general environments and non-Markovian rewards left for future work (§6.1).
- The **symmetric** definition of hackability is arguably too strict: "The existence of complex behaviors that yield low proxy reward and high true reward is much less concerning than the reverse, as these behaviors are unlikely to be discovered while optimizing the proxy. For example, it is very unlikely that our agent would solve climate change in the course of learning how to wash dishes" (§6.1).
- The opaque conditions of Theorem 3 (dim inequality) make it hard to apply to specific environments without computation.
- Characterization of simplification for infinite policy sets without open subsets remains incomplete (§5.3, §6.1).
- "While unhackability is a guarantee that no hacking will occur, hackability is far from a guarantee of hacking. Extensive empirical work is necessary to better understand the factors that influence the occurrence and severity of reward hacking in practice" (§6.1).
- Two proposed weakenings for future work: **approximate unhackability** (only count $\varepsilon$-large value gaps as hacking evidence) and **probabilistic unhackability** (weight pairs by the probability of encountering them under optimization) (§6.1).
