---
type: concept
tags: [safety-technique, optimization, alternative-to-optimization]
date_created: 2026-05-19
date_modified: 2026-05-19
---

# Quantilization

## Definitions
- **Taylor (2016)** "Quantilizers: A Safer Alternative to Maximizers for Limited Optimization": A quantilizer is a decision procedure that "returns a random policy from the top $n\%$ best policies" according to a (potentially misspecified) proxy utility, rather than the argmax. The intent is to bound the worst-case downside of optimizing a proxy: as long as catastrophic policies are rare in the unrestricted distribution, quantilization keeps them rare in the optimized distribution.
- **[[sources/skalse-et-al-2022]]** (§3): "Quantilization returns a random policy from the top $n\%$ best policies. This is similar to equating the values of those policies, but a [[concepts/simplification]] may also equate the values of the bottom/middle $n\%$, etc. Thus simplification may achieve a similar effect to quantilization without assuming that we are free to choose from among the best policies." — classified as: **alternative-to-optimization safety technique**.
- **[[sources/skalse-et-al-2022]]** lists quantilizers as one of four proposed alternatives to direct reward optimization (§6.2), alongside imitation learning, constrained RL, and incentive management.

## Classification
Level of analysis: **safety technique / decision procedure** — sits between pure imitation (no optimization) and direct maximization (full optimization). Operates on the **policy ordering** induced by the proxy reward.

## Relationships
- Alternative to: argmax / direct optimization of (potentially hackable) proxy rewards
- Related to but distinct from: [[concepts/simplification]] — both collapse policy distinctions; quantilization equates only top-$n\%$ policies, whereas simplification can equate any subset of policies
- Mitigates: [[concepts/reward-hacking]] (by bounding the optimization pressure that can be applied to a hackable proxy)
- Proposed alternative to: reward optimization in [[sources/skalse-et-al-2022]] (§6.2)
- Related to: constrained RL (Szepesvári 2020), imitation learning (Ross et al. 2011), incentive management (Everitt et al. 2019)

## Evidence Summary
- **Taylor (2016)** introduces the formal framework; quantilization parameterized by $q$ (the fraction of top policies sampled from) trades off expected utility against worst-case loss.
- **[[sources/skalse-et-al-2022]]** uses quantilization as a comparison point for the simplification framework: both collapse policy distinctions to weaken optimization, but simplification is more flexible (equates arbitrary subsets) at the cost of being harder to construct.

## Open Questions
- How does quantilization perform empirically against learned reward models in deep RL?
- For a given proxy reward and policy set, is there a principled choice of $q$?
- Can quantilization be combined with [[concepts/simplification]] for stronger guarantees?
