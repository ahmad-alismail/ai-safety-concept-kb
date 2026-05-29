---
type: concept
tags: [formal-property, reward, reward-hacking, MDP, alignment]
date_created: 2026-05-19
date_modified: 2026-05-19
---

# Simplification (of a Reward Function)

## Definitions
- **[[sources/skalse-et-al-2022]]** (Definition 2): "$\mathcal{R}_2$ is a **simplification** of $\mathcal{R}_1$ relative to policy set $\Pi$ if for all $\pi, \pi' \in \Pi$, $J_1(\pi) < J_1(\pi') \implies J_2(\pi) \le J_2(\pi') \;\&\; J_1(\pi) = J_1(\pi') \implies J_2(\pi) = J_2(\pi')$ and there exist $\pi, \pi' \in \Pi$ such that $J_2(\pi) = J_2(\pi')$ but $J_1(\pi) \neq J_1(\pi')$." — classified as: **formal asymmetric relation between reward functions**.
- **[[sources/skalse-et-al-2022]]** (§4.2): "while unhackability allows replacing inequality with equality – or vice versa – a simplification can only replace inequalities with equality, collapsing distinctions between policies." If $\mathcal{R}_2$ is trivial, this is a **trivial simplification**.

## Notation
- $\mathcal{R}_1 \trianglelefteq \mathcal{R}_2$ or $\mathcal{R}_2 \trianglerighteq \mathcal{R}_1$ when $\mathcal{R}_2$ is a **refinement** of $\mathcal{R}_1$ (equivalently, $\mathcal{R}_1$ is a simplification of $\mathcal{R}_2$).
- The triangle narrowing at $\mathcal{R}_1$ represents the collapsing of distinctions.

## Classification
Level of analysis: **formal asymmetric special case of [[concepts/hackability|unhackability]]**. Theorem 3 of Skalse et al. 2022 shows simplification is *strictly* more demanding than unhackability: $\mathcal{R}_1 \trianglelefteq \mathcal{R}_2 \trianglerighteq \mathcal{R}_3$ implies $\mathcal{R}_1$ and $\mathcal{R}_3$ are unhackable, but $\mathcal{R}_1 \trianglerighteq \mathcal{R}_2 \trianglelefteq \mathcal{R}_3$ does not (§4.2).

Intuitively, simplification captures the natural intuition that a proxy is a "simpler" version of the true reward — equating policies that the true reward distinguishes, but never distinguishing policies the true reward equates.

## Relationships
- Asymmetric special case of: [[concepts/hackability|unhackability]]
- Inverse relation: **refinement**
- Similar in spirit to: [[concepts/quantilization]] (Taylor 2016) — both collapse policy distinctions, but quantilization only equates top-$n\%$ policies whereas simplification can equate any subset
- Related to: [[concepts/reward-hacking]] (a simplification of the true reward is a proxy that is guaranteed not to be hackable in the inequality-introducing direction)
- Distinct from but builds on: Ng et al. (1999, 2000)'s policy-order equivalence

## Evidence Summary
- **[[sources/skalse-et-al-2022]]**: Existence and characterization results for simplifications:
  - **Theorem 3**: Necessary and sufficient condition for a non-trivial simplification of $\mathcal{R}_1$ on a finite policy set $\hat\Pi$: $\dim(Z_1 \cup \cdots \cup Z_m) \le \dim(\mathcal{F}(\hat\Pi)) - 2$, where $E_i$ partitions $\hat\Pi$ by $J$-equivalence and $Z_i$ are projected occupancy differences (§5.2).
  - **Corollary 3**: If all policies in finite $\hat\Pi$ have distinct $J$ values, a non-trivial simplification of $\mathcal{R}$ always exists (§5.2).
  - **Negative result (§5.2)**: On the set of all deterministic policies of a 2-state 2-action MDP, only 12 of the 24 possible policy orderings are realizable by some reward function; for each, only specific pairs of policies can be equated nontrivially. Attempting to equate three policies always yields the trivial reward function.
  - **§5.3**: Some infinite policy sets without open subsets admit non-trivial simplifications (Figure 5a), others do not (Figure 5b). General characterization remains open.
- The Cleaning Robot example (§2): leaving out the kitchen reward simplifies the all-rooms true reward only when the omitted reward is small enough that no combination of the kept rooms can dominate; otherwise the proxy is hackable.

## Intuition for Theorem 3
- $\dim(\mathcal{F}(\hat\Pi))$ measures behavioural diversity of the policy set.
- $\dim(Z_1 \cup \cdots \cup Z_m)$ is large when (i) very diverse policy subsets get the same $\mathcal{R}_1$-reward, or (ii) there are many such subsets with different kinds of internal diversity.
- Simplification is possible when these equality-induced constraints can be jointly satisfied — i.e., when the policy set is "not too diverse" relative to the equivalence partitions $\mathcal{R}_1$ imposes.

## Open Questions
- Can the "opaque" condition of Theorem 3 be reformulated more interpretably for practical environments?
- Does the existence of simplifications for the set of deterministic policies depend on environment structure in characterizable ways?
- How does the existence of simplifications relate empirically to the safety of optimizing learned reward models in deep RL?
