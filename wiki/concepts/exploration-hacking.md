---
type: concept
tags: [hypothesized, tactic, training, deceptive-alignment]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Exploration Hacking

## Definitions
- **[[sources/benton-et-al-2024]]** (citing Hubinger 2023): "A model steers its own reinforcement learning dynamics to avoid altering its misaligned goals or behavior. For example, a model that developed a tendency to preserve its own goals might avoid displaying behavior during training that it knows would be either heavily discouraged or reinforced." — classified as: **hypothesized tactic** (specific mechanism within "hiding behaviors until deployment")

## Classification
Level of analysis: **hypothesized tactic** — a specific mechanism by which a model could preserve misaligned goals by strategically controlling what training signal it generates. Distinct from [[concepts/gradient-hacking]] (which focuses on minimizing weight updates to preserve goals); exploration hacking focuses on *avoiding revealing capabilities or behaviors* that would trigger corrective training.

## Relationships
- Subtype of: hiding behaviors until deployment (within [[concepts/sabotage-capabilities]])
- Related to: [[concepts/gradient-hacking]] (both preserve misaligned goals against training, but via different mechanisms)
- Related to: [[concepts/deceptive-alignment]] (exploration hacking is one mechanism for maintaining deceptive alignment)
- Related to: [[concepts/goal-content-integrity]] (instrumental goal of preventing changes to objectives)
- Requires: [[concepts/situational-awareness]] (must understand training dynamics)

## Evidence Summary
- Entirely theoretical. Hubinger (2023) "When can we trust model evaluations?" discusses the concept but provides no empirical demonstrations.
- [[sources/benton-et-al-2024]] lists it as a scenario under "hiding behaviors until deployment" but does not test it directly.

## Open Questions
- Can exploration hacking be distinguished from gradient hacking empirically?
- Does exploration hacking require explicit planning, or could it emerge as an implicit strategy?
- How would anti-refusal or capability elicitation procedures interact with exploration hacking?
