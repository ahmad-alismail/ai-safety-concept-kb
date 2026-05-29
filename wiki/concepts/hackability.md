---
type: concept
tags: [formal-property, reward, reward-hacking, MDP, alignment]
date_created: 2026-05-19
date_modified: 2026-05-19
---

# Hackability

## Definitions
- **[[sources/skalse-et-al-2022]]** (Definition 1): "A pair of reward functions $\mathcal{R}_1$, $\mathcal{R}_2$ are **hackable** relative to policy set $\Pi$ and an environment $(S,A,T,I,\_,\gamma)$ if there exist $\pi, \pi' \in \Pi$ such that $J_1(\pi) < J_1(\pi') \;\&\; J_2(\pi) > J_2(\pi')$, else they are unhackable." — classified as: **formal binary relation between reward functions** relative to a policy set and environment.
- **[[sources/skalse-et-al-2022]]** (Abstract, on unhackability): "a proxy is unhackable if increasing the expected proxy return can never decrease the expected true return." — classified as: **formal alignment-sufficiency condition**.

## Classification
Level of analysis: **formal property** (structural relation between reward functions, not an agent-level behavior). Diagnoses whether [[concepts/reward-hacking]] is possible for a given (true reward, proxy reward, policy set, MDP) tuple, independently of any agent's psychology, capabilities, or [[concepts/situational-awareness]].

Two key structural facts:
- **Symmetric** — swapping $\pi$ and $\pi'$ in Definition 1 leaves the condition unchanged. The proxy/true asymmetry of motivating examples is lost; the authors note this is "counter-intuitive" but show it is equivalent in practice to monotone-proxy-optimization framings (Skalse et al. 2022, §4.2).
- **Not transitive** — the constant reward function is unhackable with respect to any other reward function, so transitivity would make every pair unhackable.

## Relationships
- Diagnoses possibility of: [[concepts/reward-hacking]] (in the formal sense)
- Strengthened asymmetrically by: [[concepts/simplification]] (a strictly more demanding asymmetric special case)
- Relaxes the equivalence relation of: Ng et al. (1999, 2000) (which required identical policy orderings)
- Related to but neither implies nor is implied by: $\varepsilon$-value alignment (Brown et al. 2020b)
- Distinct from but similar in spirit to: [[concepts/quantilization]] (Taylor 2016) — both replace strict-optimization with weaker equivalence-class operations on policies
- Composed with [[concepts/partial-identifiability]]: when reward learning is partially identifiable, the learned proxy may be hackable with respect to the true reward; the 2022 (this) and [[sources/skalse-et-al-2023|2023]] Skalse papers together formalize the two halves
- Formal property of: pairs of [[concepts/reward-misspecification|reward-misspecified]] systems

## Evidence Summary
- **[[sources/skalse-et-al-2022]]**: Provides the formal definition and the following negative results on the universality of hackability:
  - **Corollary 1**: On the set of all stationary policies, any non-trivial unhackable pair is equivalent — no interesting unhackability exists for the full policy set (§5.1).
  - **Theorem 1**: Any policy set containing an open subset admits no non-trivial non-equivalent unhackable pairs (§5.1). Proof leverages linearity of $J$ in visit counts plus Lemma 1 (homeomorphism between policy-probability and visit-count embeddings).
  - **Corollary 2**: $\varepsilon$-suboptimal and $\delta$-deterministic policy sets are also subject to Theorem 1 (they contain open subsets) (§5.1).
  - **Theorem 2**: For any MDP and any finite policy set containing $\pi, \pi'$ with distinct visit counts, and any reward $\mathcal{R}_1$, there exists a non-trivial $\mathcal{R}_2$ unhackable but not equivalent to $\mathcal{R}_1$ (§5.2). So finite policy sets are the regime where unhackability gives non-trivial guarantees.
- The Cleaning Robot example (§2) shows that "natural" simplifications like overlooking rewarding features or fine-grained distinctions easily produce hackable proxies even in tiny environments.
- The Gaussian-vs-step example (Figure 3) shows that a proxy resembling the true reward by eye can still be hackable.

## Implications
- Reward functions learned by reward modeling or inverse RL are "almost certainly hackable, and so cannot be safely optimized" — Skalse et al. recommend treating them as auxiliaries to policy learning rather than optimization targets (§6.2).
- Markov reward functions for narrow tasks cannot be safely composed with broader human values: "if we consider the 'narrow task' reward function as a proxy for the true 'broad values' reward function, our results indicate that this is not possible: these two reward functions will invariably be hackable" (§6.2).

## Open Questions
- Can practically useful **approximate** notions of hackability be defined (only count $\varepsilon$-large value gaps as evidence)? Skalse et al. flag this as future work (§6.1).
- Can **probabilistic** unhackability weights pairs by the probability of being encountered during optimization, mitigating the climate-change-vs-dish-washing asymmetry issue? (§6.1)
- Beyond finite/open-set dichotomies, what is the structure of unhackability on intermediate (e.g., infinite-but-not-open) policy sets? (§5.3, §6.1)
- Does hackability of a learned reward function correlate empirically with the severity of [[concepts/reward-hacking]] observed in practice?
