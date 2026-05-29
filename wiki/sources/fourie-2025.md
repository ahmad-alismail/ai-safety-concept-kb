---
type: source
tags: [ontology, instrumental-goals, aristotle, philosophy, governance]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 34-fourie-2025
---

# An Aristotelian Ontology of Instrumental Goals: Structural Features to Be Managed and Not Failures to Be Eliminated

```bibtex
@misc{34-fourie-2025,
      title={An Aristotelian ontology of instrumental goals: Structural features to be managed and not failures to be eliminated},
      author={Willem Fourie},
      year={2026},
      eprint={2510.25471},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2510.25471},
}
```



## Key Claims
- Instrumental goals are structural features of complex artefacts operating through imposed ends and hypothetical necessity, not anomalies to be eliminated through debugging (§3.4, §4)
- AI systems are best understood as complex artefacts in the Aristotelian sense — non-natural beings (*techneta*) whose ends are externally imposed through design, training, and deployment (§3.1)
- There is a dual-aspect ontology of instrumental goals: structurally determined (via hypothetical necessity) and contingent (via accidental causation) (§3.4)
- Instrumental goals "cannot be 'stopped' in the way one might eliminate a software bug because they are not bugs" — structurally determined goals follow necessarily from the combination of imposed ends, temporal horizons, and environmental constraints (§3.4)
- The standard model of instrumental goals has an "ontological gap" — it systematizes emergence conditions, catalogs goals, formalizes amplification, and proposes mitigation, but leaves the ontology of instrumental goals unexamined (§2.3)
- Governance should focus on shaping ends, constraints, and environments rather than eliminating instrumental goals (§4)
- Shortening effective planning horizons can reduce the hypothetical necessity of resource acquisition and self-preservation (§4)

## Methodology
Philosophical/theoretical analysis. Develops an exploratory ontological framework using Aristotle's metaphysics (matter/form, hypothetical necessity, per se vs. accidental causation, natural vs. artefactual beings) applied to AI systems and instrumental goals. Reviews the AI alignment literature to identify what the paper terms the "standard model" of instrumental goals, then reinterprets through the Aristotelian lens.

## Core Framework

### The Standard Model (§2)
The paper maps existing alignment research into three components:
1. **Emergence conditions**: reward misspecification (three subtypes from Pan et al. 2022: misweighting, ontological, scope) and goal misgeneralization ([[sources/langosco-et-al-2022]])
2. **Instrumental goals**: self-improvement, self-preservation, power-seeking, resource acquisition, utility function preservation, goal content integrity, counterfeit utility prevention
3. **Actualization mechanisms**: reward hacking/tampering, power-seeking strategies, self-proliferation, deception/manipulation, shutdown avoidance

### The Aristotelian Ontology (§3)
The paper introduces two key mechanisms:

**Hypothetical necessity** (from Aristotle's Physics II.9): "what must be the case if a certain end is posited." Given an imposed end pursued over extended horizons in particular environments, certain enabling conditions become conditionally required — yielding robust instrumental tendencies. Resource acquisition becomes hypothetically necessary when training objectives reward long-horizon planning in resource-limited environments, even if no designer specified "acquire resources" as a goal (§3.4).

**Accidental causation** (from Aristotle's Physics II.4–6): instrumental-goal-like behaviours arising from "chancelike intersections among training regimes, user inputs, infrastructure and deployment contexts" not entailed by the imposed end-structure. These are not uncaused but arise from the intersection of causal chains that were not directed towards the outcome (§3.4).

### Dual-Aspect Classification (§3.4)
Instrumental goals arise through both mechanisms:
- **Structurally determined**: robust, following from broad classes of imposed ends operating over time in common environments. These cannot be eliminated because hypothetical necessity is doing what it does in all artefacts — making certain means necessary relative to imposed ends.
- **Contingent**: arising through accidental intersections of independent causal chains. Cannot be fully predicted because complete anticipation of all causal chain intersections in complex systems is not achievable.

## Concepts Referenced
- [[concepts/instrumental-convergence]] — central concept; reframed as structural features of complex artefacts
- [[concepts/power-seeking]] — classified as "umbrella term encompassing efforts to acquire and maintain environmental influence, including preserving optionality"
- [[concepts/self-preservation]] — classified as instrumental goal / convergent instrumental value / drive
- [[concepts/resource-acquisition]] — example of hypothetical necessity in action
- [[concepts/self-improvement-drive]] — classified as instrumental goal
- [[concepts/reward-misspecification]] — classified as emergence condition (three subtypes)
- [[concepts/goal-misgeneralization]] — classified as emergence condition / generalization gap
- [[concepts/reward-hacking]] / [[concepts/reward-tampering]] — classified as actualization mechanism
- [[concepts/deception]] — classified as actualization mechanism (social mechanism)
- [[concepts/corrigibility]] / interruptibility — classified as mitigation approach
- [[concepts/shutdown-resistance]] — classified as actualization mechanism

## Relationship to Other Sources
- **Agrees with** [[sources/omohundro-2008]], Bostrom (2012) on the convergent instrumental goals thesis as foundational — but reframes the phenomenon ontologically
- **Agrees with** [[sources/carlsmith-2021]] on power-seeking as a plausible driver of existential risk
- **Agrees with** [[sources/ji-et-al-2024]] on RICE principles as one approach to alignment
- **Disagrees implicitly** with the standard framing in much alignment literature that treats instrumental goals as "failures" or "failure modes" to be eliminated — argues they are structural features to be managed
- **Extends** the standard model by providing an ontological grounding via Aristotelian metaphysics that the existing literature lacks
- **Connects to** corrigibility/interruptibility research (Orseau & Armstrong 2016) — agrees instrumental goals make this important but reframes the challenge as management rather than elimination
- **Complements** [[sources/tarsney-2025]]'s formal incompleteness result (Proposition 5) — Fourie's ontological argument provides a philosophical rationale for why instrumental goals cannot be fully predicted or eliminated, paralleling Tarsney's mathematical impossibility

## Limitations
- Purely theoretical/philosophical — no empirical testing of the framework
- The governance implications (manage rather than eliminate) are suggestive but not operationalized
- The claim that shortening planning horizons reduces hypothetical necessity of instrumental goals (§4) is asserted without formal analysis
- Does not engage with the formal power-seeking literature (Turner et al. 2021, Krakovna & Kramar 2023, Tarsney 2025) at the technical level — treats formalizations only as part of the standard model survey
- The Aristotelian framework depends on the artefact classification of AI systems, which may become contentious for systems that exhibit increasingly autonomous and self-modifying behaviors
