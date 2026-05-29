---
type: finding
tags: [power-seeking, stability, safety, mdp, theoretical]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Non-Power-Seeking Is Stable Under Small Environmental Perturbations

## The Finding
If an AI agent does not resist shutdown in one environment, it will also not resist shutdown in a sufficiently similar environment — provided that the safe states are isolated from other states. Specifically:

- **Case 1** (near-optimal policies): If MDP M is (N, ε)-safe (every ε-optimal policy reaches S_safe in ≤N expected steps) and M' is within Hausdorff distance δ of M with √δ-isolated safe states, then M' is (N+1, ε/2)-safe (Theorem 5.7).
- **Case 2** (structured state spaces / LLMs): The probability of reaching shutdown is lower semicontinuous and has a bounded rate of decrease under perturbation, proportional to (1−λ₁)⁻¹ where λ₁ is the largest eigenvalue of the transient transition matrix (Theorem 6.5).

Both results establish that safety is **lower hemicontinuous**: it degrades smoothly, not catastrophically.

## Source & Methodology
- [[sources/gunter-et-al-2023]] using [[methods/stability-analysis-non-power-seeking]]
- Formal mathematical proofs in the MDP framework with bisimulation metrics (Case 1) and on-policy structured state space metrics (Case 2)

## Replication Status
Not yet replicated. Purely theoretical results (formal proofs). The authors suggest experimental investigation of whether the stability predictions hold even when perturbations exceed the proven bounds.

## Implications for the Taxonomy
- Strengthens the [[concepts/power-seeking]] analysis by showing that non-power-seeking behavior is not arbitrarily fragile — it is a stable property under appropriate conditions
- Extends the formal power-seeking literature ([[sources/turner-et-al-2021]], [[sources/krakovna-kramar-2023]]) from "when do agents seek power?" to "when is non-power-seeking robust?"
- Provides a formal connection between AI safety and AI control: the Case 2 result can quantify how much safety degrades when deployment inputs differ from testing
- The **isolation condition** (S_safe must be δ-isolated from non-safe states) is both necessary and sufficient — its failure corresponds to the [[concepts/playing-dead]] counterexample
- The practical utility of the bounds remains an open question — the permissible perturbations may be impractically small (Sections 5.4, 7.3)
