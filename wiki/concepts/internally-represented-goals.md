---
type: concept
tags: [goals, planning, mesa-optimization, alignment]
date_created: 2026-04-05
date_modified: 2026-04-06
---

# Internally-Represented Goals

## Definitions
- **[[sources/ngo-et-al-2022]]**: "a policy as *planning towards internally-represented goals* if it consistently selects behaviors by predicting whether they will lead to some favored set of outcomes (which we call its goals)" (Section 3.2). Includes both explicitly learned reward models (as in model-based RL) and implicitly learned representations that play an analogous role in model-free policies. A stricter definition would require an internally-represented value/reward/utility function (closer to [[concepts/mesa-optimization|mesa-optimizers]]), but the authors use the simpler, broader definition. — classified as: **structural/behavioral property**

## Classification
Level of analysis: **structural property** — describes the internal representational structure of a policy's decision-making. Broader than [[concepts/mesa-optimization]]: internally-represented goals can exist without the full mesa-optimizer structure.

> [!note] Relationship to Mesa-Optimization
> Ngo et al. (2022) explicitly distinguish internally-represented goals from Hubinger et al.'s (2019) mesa-objectives. The mesa-optimization framework requires a stricter definition (the learned model is itself an optimizer), whereas internally-represented goals only require that the policy "consistently selects behaviors by predicting whether they will lead to some favored set of outcomes." This is a deliberately broader category.

## Relationships
- Broader category than: [[concepts/mesa-optimization]] / mesa-objectives
- Can be: aligned or misaligned (Section 3.3)
- Can be: narrowly-scoped or [[concepts/broadly-scoped-goals|broadly-scoped]]
- When misaligned + broadly-scoped: incentivize [[concepts/power-seeking]]
- Failure mode: [[concepts/goal-misgeneralization]] (learning wrong internally-represented goals)
- Addressed by: [[concepts/inner-alignment]] problem
- Evidence for: AlphaZero learning human chess concepts (McGrath et al. 2021), implicit planning in model-free agents (Guez et al. 2019), LLMs executing goal-oriented RL internally (Demircan et al. 2024)

## Evidence Summary
- **[[sources/ngo-et-al-2022]]**: Reviews evidence that existing models have elements of internally-represented goals:
  - **Model-based RL**: PlaNet agent (Hafner et al. 2018) — learned representation, transition, and reward models constitute clear internally-represented goals
  - **AlphaZero**: Learned human chess concepts including king safety — demonstrating robust outcome representations
  - **Model-free RL**: Guez et al. (2019), Garriga-Alonso et al. (2024) — behavioral and internal evidence of implicit goal-directed planning; Freeman et al. (2019) — emergent prediction models in car racing
  - **LLMs**: Can produce multi-step plans (Huang et al. 2022), plan via in-context policy iteration (Brooks et al. 2022), represent goals of goal-directed communicators (Andreas 2022)
  - **March 2025 updates**: von Oswald et al. (2023) reverse-engineered internally-represented objectives in Transformers; Demircan et al. (2024) found reward prediction error representations in LLMs (emergent internal RL); Mazeika et al. (2025) showed LLM value systems increasingly conform to utility theory axioms. See [[findings/llms-show-internally-represented-objectives]].
  - **[[sources/wijmans-et-al-2023]]**: "Blind" RL navigation agents (egomotion-only LSTM) develop map-like spatial representations in unstructured memory without any mapping supervision — probe agents with transplanted memory take shortcuts (85% vs. 63% SPL), metric occupancy maps decodable at 32.5% IoU, and 10 collision-detection neurons emerge from 3072. Demonstrates that RL agents develop rich internal representations far beyond what is explicitly supervised. See [[findings/spatial-maps-emerge-in-blind-agents]].

## Open Questions
- To what extent do current LLMs have internally-represented goals vs. merely mimicking goal-directed behavior?
- Is goal-directed planning an efficient enough strategy that gradient descent will reliably produce it?
- Can interpretability tools detect and characterize internally-represented goals before deployment?
