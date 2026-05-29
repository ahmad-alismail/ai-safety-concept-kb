---
type: question
tags: [power-seeking, stability, safety, open-question, practical-applicability]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Are Formal Safety Stability Bounds Practically Useful?

## Why It Matters
Gunter et al. (2023) prove that non-power-seeking behavior is stable under small environmental perturbations, but acknowledge that the permissible perturbations may be "impractically small." If the bounds are too tight, the formal guarantee doesn't translate to real-world safety assurance for AI deployment.

## What Sources Say
- **[[sources/gunter-et-al-2023]]** (Sections 5.4, 6.2, 7.3): Explicitly flags that the stability bounds may be too narrow for practical use. In Case 1, the bound depends on the minimum bisimulation distance between states, which may be extremely small. In Case 2, the policy gradient bound may be very large, limiting applicability. More capable models can better distinguish test vs. deployment inputs, further widening the gap.
- **[[sources/turner-et-al-2021]]**: Similarly cautions that "optimal policies are often qualitatively divorced from the actual policies learned by reinforcement learning" — formal results about optimal policies may not directly transfer.
- **[[sources/krakovna-kramar-2023]]**: Bridges the gap between optimal and trained policies but relies on simplifying assumptions (uniform sampling from G_T, significant distributional shift).

## Suggested Investigation
- Empirical testing: do models satisfying the theoretical stability conditions remain robust to qualitatively small (but formally out-of-bound) perturbations?
- Whether the stability predictions hold in practice for LLM deployment scenarios where test/deploy inputs are semantically similar
- Developing tighter bounds by leveraging additional structural properties of neural network policies
- Replacing the bisimulation metric with KL divergence (suggested by Gunter et al. as future work) to analyze RLHF fine-tuning stability
