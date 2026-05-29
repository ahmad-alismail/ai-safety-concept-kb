---
type: concept
tags: [meta-problem, alignment, theoretical, safety]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Eliciting Latent Knowledge (ELK)

## Definitions
- **Christiano et al. (2021)**: The problem of "eliciting latent knowledge" — extracting knowledge from AI systems, "including in cases where they would not verbalize it themselves by default." — classified as: **theoretical problem / alignment research direction**
- **[[sources/treutlein-et-al-2025]]**: Grounds their honesty and lie detection work in ELK, noting that the relevant concept is whether models generate statements they know to be false — because these are "exactly those false statements whose falsehood could, in principle, be detected using only access to the model that generated them." — classified as: **meta-problem** motivating the no-task-specific-supervision constraint

## Classification
Level of analysis: **meta-problem** — a foundational alignment research challenge concerning the extraction of a model's genuine knowledge, especially in settings where external verification is impossible (e.g., superhuman models).

## Relationships
- Motivates: [[concepts/honesty]] interventions, [[concepts/lying]] detection (Treutlein et al. 2025)
- Related to: [[concepts/scalable-oversight]] (ELK is critical when human oversight is insufficient)
- Related to: truth probing, honesty fine-tuning (practical approaches to the ELK problem)

## Open Questions
- Can ELK be solved in practice for frontier models?
- Does the ELK framing adequately capture the challenge of detecting lies in models with ambiguous or context-dependent beliefs?
