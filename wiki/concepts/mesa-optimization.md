---
type: concept
tags: [framework, optimization, safety, learned-optimization]
date_created: 2026-04-05
date_modified: 2026-04-06
---

# Mesa-Optimization

## Definitions
- **[[sources/ji-et-al-2024]]**: "The learned policy may pursue inside objectives *when the learned policy itself functions as an optimizer* (*i.e.*, *mesa-optimizer*). However, this optimizer's objectives may not align with the objectives specified by the training signals, and optimization for these misaligned goals may lead to systems out of control" (§1.1.2, citing Hubinger et al. 2019c). — classified as: **double edge component** (enhances capabilities but bears potential for hazardous outcomes)

> [!warning] Classification Divergence
> Ji et al. (2024) classify mesa-optimization as a "double edge component" alongside situational awareness and broadly-scoped goals. This wiki's existing entry (Hubinger et al. 2019) classifies it as a "structural phenomenon / framework-level concept." The "double edge" framing emphasizes mesa-optimization's role as a capability amplifier rather than a purely structural phenomenon.

- **[[sources/hubinger-et-al-2019]]**: "Mesa-optimization occurs when a base optimizer (in searching for algorithms to solve some problem) finds a model that is itself an optimizer, which we will call a mesa-optimizer." The term "mesa" (Greek for "below") is the conceptual dual of "meta" (above): meta-optimization operates one layer above the base optimizer, mesa-optimization one layer below. A mesa-optimizer is "a neural network that is implementing some optimization process and not some emergent subagent inside that neural network." Whether a system is an optimizer "is a property of its internal structure—what algorithm it is physically implementing—and not a property of its input-output behavior." — classified as: **structural phenomenon** (property of internal computation)

## Classification
Level of analysis: **framework-level concept** — describes a structural relationship between the training process (base optimizer) and the learned model (potential mesa-optimizer). Introduces a two-level optimization framework with distinct objective functions at each level: the *base objective* (criterion the base optimizer uses to select models) and the *mesa-objective* (criterion the mesa-optimizer uses to select outputs).

## Key Components
- **Base optimizer**: The training process (e.g., gradient descent, evolution). Searches through algorithms according to the base objective.
- **Mesa-optimizer**: A learned algorithm that is itself an optimizer. Searches through outputs according to its mesa-objective.
- **Base objective**: The loss function or fitness criterion specified by programmers.
- **Mesa-objective**: The objective function emergent within the mesa-optimizer — not specified by programmers, may diverge from the base objective.
- **Behavioral objective**: What the system *appears* to optimize (recoverable via perfect IRL) — distinct from the mesa-objective.

## Conditions Favoring Mesa-Optimization
- **Diverse environments**: More diverse task instances incentivize delegation of optimization to runtime (Section 2.1)
- **Policy compression / simplicity bias**: Mesa-optimizers compress complex policies into short optimization algorithms (Section 2.1)
- **Large model capacity**: More expressive model spaces are more likely to contain mesa-optimizers (Section 2.2)
- **Statefulness**: Ability to cache intermediate results increases effective computation time (Section 2.2)
- **Human modeling tasks**: Reasoning about human optimization may enable self-optimization (Section 2.1)

## Conditions Disfavoring Mesa-Optimization
- **Time complexity penalties**: Penalizing runtime computation discourages delegation to mesa-optimizers (Section 2.2)
- **Task restriction**: Narrow, non-diverse tasks can be solved by heuristics without search (Section 2.1)
- **Hard-coded optimization**: Built-in search reduces need for learned search (Section 2.2)

## Relationships
- Introduces: [[concepts/inner-alignment]] (the problem of aligning mesa-objective with base objective)
- Introduces: [[concepts/outer-alignment]] (the problem of aligning base objective with programmer intent)
- Failure mode: [[concepts/pseudo-alignment]] (mesa-objective matches base objective only on training distribution)
- Extreme failure mode: [[concepts/deceptive-alignment]] (mesa-optimizer instrumentally optimizes base objective)
- Related to: [[concepts/goal-misgeneralization]] (pseudo-alignment is the mesa-optimization framing of the same phenomenon; however, [[sources/langosco-et-al-2022]] demonstrates that goal misgeneralization can occur *without* mesa-optimization — the concepts are related but not equivalent)
- Analogy: biological evolution (base optimizer) producing humans (mesa-optimizers with misaligned mesa-objectives)

## Evidence Summary
- Entirely theoretical as of the original paper. The authors acknowledge that "current ML systems do not produce dangerous mesa-optimizers" but argue the possibility merits analysis for future systems.
- Existing ML research closest to mesa-optimization: Wang et al.'s "Learning to Reinforcement Learn" and Duan et al.'s "RL²" — both claim to have produced neural networks implementing their own optimization procedures (Section 5).
- The evolution analogy serves as an "existence proof" that base optimizers can produce mesa-optimizers with misaligned objectives.

## Open Questions
- [[questions/will-advanced-ml-produce-mesa-optimizers]]
- Can we reliably detect whether a learned model is performing internal optimization?
- Is there a formal, precise definition of "optimizer" that enables verification?
- **[[sources/hagele-et-al-2026]]**: The synthetic optimizer experiment — training transformers to emulate optimization trajectories on a quadratic loss — found that "larger models reduce bias more than variance," suggesting "they learn the correct objective faster than the ability to maintain long coherent action sequences." This bears directly on whether trained models will become effective mesa-optimizers: the paper argues that "the set of dynamical systems that act as optimizers of a fixed loss is measure zero in the space of all dynamical systems." See [[concepts/incoherence]], [[concepts/hot-mess-theory]].
