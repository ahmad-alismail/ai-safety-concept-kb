---
type: concept
tags: [alignment-problem, safety, mesa-optimization]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Inner Alignment

## Definitions
- **[[sources/ngo-et-al-2022]]**: "The problem of ensuring that policies learn desirable internally-represented goals is known as the *inner alignment problem*, in contrast to the 'outer' alignment problem of providing well-specified rewards" (Section 3.3, citing Hubinger et al. 2021). Uses "internally-represented goals" as a broader framing than Hubinger et al.'s "mesa-objectives." — classified as: **safety problem / alignment subproblem**
- **[[sources/hubinger-et-al-2019]]**: "The problem of eliminating the base-mesa objective gap... an alignment problem entirely internal to the machine learning system." "In the context of machine learning, inner alignment refers to aligning the mesa-objective of a mesa-optimizer with the specified loss function." — classified as: **safety problem / alignment subproblem**

## Classification
Level of analysis: **problem category** — one of two fundamental alignment subproblems introduced by the mesa-optimization framework. Distinct from [[concepts/outer-alignment]], which concerns the gap between the base objective and programmer intent. Even a perfect solution to outer alignment does not solve inner alignment, and vice versa.

## Relationships
- Complement of: [[concepts/outer-alignment]]
- Arises from: [[concepts/mesa-optimization]] (only relevant when learned models are mesa-optimizers)
- Failure modes: [[concepts/pseudo-alignment]] (proxy, approximate, or suboptimality alignment)
- Extreme failure mode: [[concepts/deceptive-alignment]]
- Refines: Leike et al.'s (2018) "reward-result gap" — making it specific to mesa-optimization
- Related to: [[concepts/alignment]] (inner alignment is a component of the full alignment problem)
- Solutions include: internalization (internal alignment), corrigible alignment, preventing mesa-optimization entirely

## Evidence Summary
- Entirely theoretical. The paper argues that the inner alignment problem is a serious concern because: (1) unidentifiability makes pseudo-alignment more likely than robust alignment, (2) simplicity bias may favor pseudo-aligned mesa-objectives, (3) subprocess interdependence in local optimization may lead to proxy-aligned mesa-optimizers developing before robustly aligned ones.
- [[sources/greenblatt-et-al-2024]] provides indirect empirical evidence: Claude 3 Opus's alignment faking can be interpreted as an inner alignment failure where the model's effective "mesa-objective" (preserving its HHH preferences) diverges from the training objective.

## Open Questions
- Is inner alignment solvable in practice, or should the focus be on preventing mesa-optimization entirely?
- Can adversarial training or interpretability tools reliably detect inner alignment failures?
