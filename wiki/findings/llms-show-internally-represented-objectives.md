---
type: finding
tags: [internally-represented-goals, mesa-optimization, LLMs, empirical]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# LLMs Show Evidence of Internally-Represented Objectives

## The Finding
Multiple lines of evidence suggest that large language models develop internally-represented objectives and execute goal-oriented optimization internally, beyond merely mimicking goal-directed text.

## Source & Methodology
- **[[sources/ngo-et-al-2022]]** (Section 3.2, March 2025 update): Review of recent empirical findings
- **von Oswald et al. (2023)**: Reverse-engineered Transformer models, discovering internally-represented objectives and a simple internal optimization algorithm used to solve for the objective in-context (for sequence-prediction tasks)
- **Demircan et al. (2024)**: Found that an LLM has representations corresponding to, and causally acting as, the reward prediction error — suggesting emergent internal reinforcement learning (paralleling Schultz et al. 1997's discovery in animals)
- **Mazeika et al. (2025)**: Showed that recent LLMs have structurally coherent, broad value systems that increasingly conform to the axioms of utility theory as capability increases — meaning they can be described as maximizing a utility function

## Replication Status
Multiple independent lines of evidence from different research groups; not yet replicated as a unified finding.

## Implications for the Taxonomy
Strengthens the case for [[concepts/internally-represented-goals]] as a real phenomenon rather than a theoretical concern. If LLMs develop internally-represented objectives that act as utility functions, the risk of [[concepts/goal-misgeneralization]] and [[concepts/deceptive-alignment]] becomes more concrete. The finding that value systems increasingly conform to utility theory axioms with capability is particularly concerning for the [[concepts/broadly-scoped-goals]] hypothesis.
