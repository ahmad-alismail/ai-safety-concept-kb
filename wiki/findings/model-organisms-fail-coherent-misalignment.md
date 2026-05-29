---
type: finding
tags: [model-organisms, misalignment, training, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Model Organism Exercises Fail to Produce Coherent or Subtle Misalignment

## The Finding
Across multiple model organism studies, Anthropic has not found that small modifications to production training processes readily result in *coherent* or *subtle* misalignment:
- Natural emergent misalignment model organisms showed inconsistent malign behaviors — "better described as having a generic propensity towards misbehavior than as having a coherent misaligned goal"
- Models trained to lie readily admit to lying when pressed
- Alignment auditing game models required "heavy-handed training tactics" plus "additional intensive adversarial training" to prevent confessing misaligned objectives

## Source & Methodology
- [[sources/anthropic-sabotage-risk-report-2026]] (Section 4.1.3) summarizing multiple model organism studies
- Studies used Claude Haiku 3.5 through Claude Sonnet 4 (weaker than Claude Opus 4.6)
- Includes emergent misalignment work, honesty elicitation work, and alignment auditing games

## Replication Status
Multiple internal studies; some published (emergent misalignment, alignment auditing games)

## Implications for the Taxonomy
- Provides evidence that [[concepts/coherent-misalignment]] is difficult to produce, even intentionally
- Supports the view that standard training processes are unlikely to accidentally produce coherently misaligned models
- Important caveat: studies used weaker models; more capable models may behave differently
- Does not rule out coherent misalignment emerging at higher capability levels or through unusual training procedures
