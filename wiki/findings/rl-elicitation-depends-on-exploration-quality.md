---
type: finding
tags: [capability-elicitation, reinforcement-learning, exploration, password-locking]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# RL-Based Capability Elicitation Depends on Exploration Quality

## The Finding
When high-quality demonstrations are unavailable but correct answers can be recognized, RL-based elicitation (expert iteration, iterated DPO) can recover hidden capabilities from password-locked models — but success depends critically on the quality of the starting policy π^weak. When π^weak has high enough correctness (e.g., Pythia-1B on code generation), expert iteration and iterated DPO recover most hidden performance. When π^weak is too weak (e.g., Pythia-1B on MATH), exploration fails and RL cannot discover good solutions. A fixed random distribution as starting policy produces no learning at all. Combining RL with a preliminary SFT step on intermediate-quality demonstrations substantially speeds up elicitation.

## Source & Methodology
- [[sources/greenblatt-roger-et-al-2024]] using [[methods/password-locking]] with expert iteration, filtering+SFT, DPO, and iterated DPO on Deepseek-7B models

## Replication Status
Not yet replicated

## Implications for the Taxonomy
Places an important qualification on fine-tuning-based [[concepts/capability-elicitation]]: RL approaches are less reliable than SFT when the model's (hidden) capabilities exceed those of available demonstrators. This is the scenario most relevant to frontier AI safety — if a model's capabilities surpass human-level, neither human demonstrations nor RL from a weak starting policy may reliably elicit the full capability ceiling.
