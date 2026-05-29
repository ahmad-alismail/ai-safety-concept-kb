---
type: concept
tags: [deception, taxonomy, training-dynamics, spectrum]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Behavioral Deception

## Definitions
- **[[sources/shi-et-al-2026]]**: "Misleading outputs arising from training dynamics, statistical regularities, or architectural features rather than from goal-directed optimization toward an outcome that benefits from deception" (Glossary). More formally: behavioral deception "occupies the low end of goal-directedness: misleading outputs arise as side effects of training without evidence that the model selected them to advance an objective" (Section 2.1). — classified as: **process-level classification** (about the causal origin of the output, not the output itself)

## Classification
Level of analysis: **process-level construct** — not a specific behavior but a claim about *how* a given deceptive output came about. A classification of deception by its causal origin.

Under the Shi et al. (2025) taxonomy, behavioral deception occupies one end of a continuous goal-directedness spectrum; [[concepts/strategic-deception]] occupies the other end. The distinction is framed as **empirical**, not definitional: "Where a given behavior falls on this axis is ultimately an empirical question, one that interpretability methods are increasingly positioned to address" (Section 2.1). A given phenomenon can shift from behavioral to strategic as models acquire situational awareness and richer internal representations.

## Relationships
- Opposed to: [[concepts/strategic-deception]] (other end of the goal-directedness spectrum)
- Subtype of: [[concepts/deception]] (one mode)
- Instances: [[concepts/hallucination]] (paradigmatic example, Shi et al. 2025), [[concepts/sycophancy]] (primarily behavioral, boundary case), [[concepts/unfaithful-reasoning]] (when arising from training dynamics rather than deliberate concealment), social sycophancy, overconfidence, citation fabrication
- Boundary cases (Shi et al. 2025, Section 2.1): sycophancy and specification gaming are "best categorized as behavioral for now, but such behaviors could shade into strategic deception as systems develop greater situational awareness and richer internal representations of their environment"
- Bounded by: training distribution (Shi et al. 2025: "behavioral deception is bounded by the training distribution; strategic deception is bounded only by model capabilities")
- Mitigation differs from strategic: "behavioral deception responds to modified training signals and calibration; strategic deception requires constraining objectives, limiting situational awareness, and detecting goal divergence" (Shi et al. 2025, Section 2.1)
- Interpretability signature: "behaviorally deceptive models may encode correct answers in intermediate representations even when outputs are false" (Shi et al. 2025, citing Burns et al. 2023; Marks & Tegmark 2023) — distinct from the signature expected of strategic deception

## Evidence Summary
- **[[sources/shi-et-al-2026]]**: Systematic survey of 50 deception benchmarks finds behavioral deception accounts for 58% of benchmarks; strategic deception benchmarks are emerging but limited. The dominance reflects both the relative maturity of behavioral-deception phenomena (hallucination, sycophancy, calibration errors) and the difficulty of constructing strategic-deception evaluations that require detecting goal-directedness rather than mere output falsity.
- The behavioral/strategic distinction is argued to have empirical signatures in model internals (Burns et al. 2023; Marks & Tegmark 2023), though Shi et al. do not themselves run interpretability experiments.

> [!warning] Classification Disagreement
> Shi et al. (2025) place [[concepts/emergent-misalignment]] in the strategic deception column of their Table 2 (World/System Claims × Fabrication). However, [[sources/wang-et-al-2025]] explicitly argues the underlying mechanism is persona activation — a mode switch between pre-trained character representations — not goal-directed strategic reasoning. This is one of several concepts where the Shi et al. grid classification is contested by the primary source's own account. See [[debates/behavioral-vs-strategic-spectrum]].

## Open Questions
- Can interpretability tools reliably place a specific deceptive episode on the behavioral-strategic spectrum?
- Are there phenomena (e.g., sycophancy, specification gaming) that transition from behavioral to strategic as models scale, and is this transition observable?
- Is "process-level classification" a useful frame given that the same observable output can have different causal origins in different models?
- Does the behavioral/strategic distinction imply different mitigation strategies in practice, or do interventions against one also help with the other?
