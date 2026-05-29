---
type: concept
tags: [epistemic-state, knowledge, philosophy]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Self-Locating Knowledge

## Definitions
- **[[sources/berglund-et-al-2023]]**: Knowledge that connects factual information to oneself. A model may know facts about models like itself but lack the self-locating knowledge that *it is* such a model. Analogy from analytic philosophy (Egan & Titelbaum 2022): "Imagine Brad Pitt wakes up with extreme amnesia... He picks up a newspaper and reads a story about the actor Brad Pitt. He knows some facts about Brad Pitt but lacks the self-locating knowledge that he is Brad Pitt." — classified as: **epistemic state / knowledge type**

## Classification
Level of analysis: **primitive epistemic concept** — a type of knowledge, not a behavior or capability per se, but a prerequisite for [[concepts/situational-awareness]]

## Relationships
- Component of: [[concepts/situational-awareness]] (condition iii in the formal definition)
- Enables: application of factual knowledge about one's own type to one's own actions
- Rooted in: analytic philosophy (indexical knowledge, de se attitudes)

## Evidence Summary
- Not directly measured by Berglund et al. (2023). The paper argues that current base models likely lack self-locating knowledge (do not satisfy condition iii of the situational awareness definition).
- The paper speculates that self-locating knowledge could emerge from pretraining if it makes the model's internal world model simpler or more accurate, even without directly improving next-token prediction.

## Open Questions
- How would we empirically test whether a model has self-locating knowledge?
- Could self-locating knowledge emerge gradually, or is it likely to be a sharp phase transition?
- Does RLHF-based finetuning (where models are rewarded for accurate self-descriptions) provide a more direct path to self-locating knowledge than pretraining?
