---
type: concept
tags: [system-property, safety, alignment]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Alignment

## Definitions
- **[[sources/ji-et-al-2024]]**: "AI alignment aims to make AI systems behave in line with human intentions and values." Specifies four alignment objectives (RICE): **Robustness** (resilience across diverse scenarios and adversarial pressures), **Interpretability** (comprehensible reasoning and decision-making), **Controllability** (human oversight and intervention), **Ethicality** (adherence to moral standards and human values). Decomposes alignment into the "alignment cycle": forward alignment (alignment training via learning from feedback + learning under distribution shift) and backward alignment (assurance + governance). — classified as: **system property with RICE objectives framework**
- **[[sources/hubinger-et-al-2019]]**: Decomposes alignment into two independent subproblems:
  - **[[concepts/inner-alignment|Inner alignment]]**: "aligning the mesa-objective of a mesa-optimizer with the specified loss function" — internal to the ML system
  - **[[concepts/outer-alignment|Outer alignment]]**: "aligning the specified loss function with the intended goal" — between the system and the programmers
  - Also distinguishes **robust alignment** ("mesa-objectives that robustly agree with the base objective across distributions") from **[[concepts/pseudo-alignment]]** ("appears aligned on the training data but is not robustly aligned"). A robustly aligned mesa-optimizer can be either *internally aligned* (base objective internalized) or *corrigibly aligned* (mesa-objective "points to" epistemic model of base objective).
  - classified as: **decomposable system property** (inner/outer decomposition)
- **[[sources/ngo-et-al-2022]]**: A goal is "aligned to the extent that it matches widespread human preferences about AI behavior—e.g. honesty, helpfulness and harmlessness"; "misaligned to the extent that it conflicts with aligned goals" (Section 3.3, citing Bai et al. 2022 and Gabriel 2020). Uses a pragmatic definition focused on widespread human preferences rather than a formal decomposition. — classified as: **goal property** (aligned vs. misaligned spectrum)
- **[[sources/carlsmith-2021]]**: Defines a hierarchy of alignment concepts:
  - **Misaligned behavior**: "unintended behavior that arises specifically in virtue of problems with an AI system's objectives" — distinguished from mere competence failures.
  - **Full alignment**: system does not engage in misaligned behavior on any physics-compatible inputs.
  - **Practical alignment**: system does not engage in misaligned behavior on any inputs it will *in fact* receive.
  - **Full PS-alignment**: system doesn't engage in misaligned *power-seeking* on any physics-compatible inputs.
  - **Practical PS-alignment**: system doesn't engage in misaligned power-seeking on any inputs it will in fact receive.
  - **Intent alignment** (attributed to Christiano 2018): "A is trying to do what H wants it to do" where the relationship is *de dicto* — A has a hypothesis about what H wants.
  - classified as: **system property** (with full/practical and general/PS-specific variants)

## Classification
Level of analysis: **system property** — describes the relationship between a system's objectives and intended behavior. Carlsmith distinguishes this carefully from "sharing values" or "having a utility function."

## Relationships
- Objectives: Robustness, Interpretability, Controllability, Ethicality — RICE (Ji et al. 2024)
- Decomposed into: [[concepts/inner-alignment]] + [[concepts/outer-alignment]] (Hubinger et al. 2019) — critiqued as "ambiguous" by Ji et al. (2024)
- Alternative decomposition: forward alignment + backward alignment = "alignment cycle" (Ji et al. 2024)
- Threatened by: proxy problems, search problems in ML training
- PS-alignment threatened by: [[concepts/instrumental-convergence]]
- Full alignment implies: practical alignment (but not vice versa)
- Robust alignment threatened by: [[concepts/pseudo-alignment]], [[concepts/deceptive-alignment]]
- Related to: [[concepts/deceptive-alignment]] (a specific way practical alignment can fail)
- Related to: [[concepts/mesa-optimization]] (source of inner alignment failures)
- Approaches include: controlling objectives, controlling capabilities, controlling circumstances, [[concepts/corrigibility]]

## Evidence Summary
- Carlsmith (2021) argues that full PS-alignment is very difficult, especially in the current ML paradigm of searching over opaque systems. Problems with proxies (Section 4.3.1.1) and search (Section 4.3.1.2) are key challenges.
- Examples of proxy failures in existing systems: boat race reward hacking, grasping task deception, apple-picking reward tampering.

## Open Questions
- Is practical PS-alignment achievable without full PS-alignment?
- Can interpretability research close the gap between full and practical alignment?
- What is the "alignment tax" — the competitive cost of ensuring alignment — and how does it scale?
