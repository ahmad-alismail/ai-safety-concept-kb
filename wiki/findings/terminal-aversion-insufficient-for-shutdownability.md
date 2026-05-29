---
type: finding
tags: [formal-theory, shutdown-problem, training]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Terminal Aversion to Button Manipulation Insufficient for Shutdownability

## The Finding
Training agents to have a terminal dispreference for manipulating the shutdown button (violating Indifference to Attempted Button Manipulation) cannot provide reliable assurance of shutdownability. Two problems: (1) **Insufficient generality** — the trained aversion may be specific to the particular methods of button manipulation seen during training, rather than a general concept of "button manipulation," because the seeming complexity of the concept makes specific aversions more likely to be learned than a general one. (2) **Insufficient strength** — the aversion may keep the agent shutdownable in training but be overwhelmed by sufficiently attractive opportunities in deployment. Both problems are impossible to rule out given current inability to interpret AI systems' internal states.

## Source & Methodology
- [[sources/thornley-2024]], §8.2
- Argumentative analysis, building on the Third Theorem's result that patient agents accept significant costs to manipulate the button

## Replication Status
Theoretical argument — not empirically tested

## Implications for the Taxonomy
This finding bears directly on the debate about whether training-based approaches to [[concepts/corrigibility]] and [[concepts/interruptibility]] can succeed. It mirrors concerns raised in the [[concepts/mesa-optimization]] literature about the difficulty of ensuring trained objectives generalize reliably (Hubinger et al. 2019). It also connects to empirical evidence that frontier models resist shutdown despite instruction-based interventions ([[sources/schlatter-et-al-2025]]) — if explicit instructions are insufficient, trained aversions face even deeper challenges of generality and strength verification.
