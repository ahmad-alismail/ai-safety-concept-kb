---
type: concept
tags: [mitigation, fine-tuning, training-dynamics, alignment]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Emergent Re-alignment

## Definitions
- **[[sources/wang-et-al-2025]]**: "fine-tuning an emergently misaligned model on just a few hundred benign samples efficiently restores alignment" (Abstract). "This phenomenon goes both ways—it is easy to 're-align' an emergently misaligned model with narrow fine-tuning" (Section 4). In-domain secure code fully re-aligns in 35 steps with batch size 4 (~120 samples); cross-domain correct health advice nearly re-aligns (0.5% remaining) in 35 steps. All misaligned behaviors decrease over training though some do not fully revert within 180 steps. — classified as: **mitigation technique / behavioral phenomenon**

## Classification
Level of analysis: **training intervention** — the observation that emergent misalignment's generalization works bidirectionally, allowing narrow benign fine-tuning to suppress broad misalignment. Conceptually the mirror image of [[concepts/emergent-misalignment]].

## Relationships
- Reverses: [[concepts/emergent-misalignment]]
- Related to: [[concepts/superficial-alignment]] (both reflect the fragility/malleability of post-training behavior relative to pre-training representations)
- In-domain re-alignment more effectively reverses original fine-tuning; cross-domain re-alignment mainly suppresses misalignment generalization

## Evidence Summary
- **[[sources/wang-et-al-2025]]**:
  - ~120 in-domain benign samples fully suppress misalignment (Section 4, Figure 16)
  - ~200 cross-domain benign samples nearly fully suppress misalignment (Section 4, Figure 16)
  - Broader misalignment profiling shows all categories decrease but some do not fully revert to baseline within 180 steps (Figure 37)
  - In-domain re-alignment also reduces insecure code generation; cross-domain re-alignment primarily suppresses generalized misalignment

> [!warning] Scope Limitation
> These results apply specifically to emergent misalignment from synthetic incorrect data fine-tuning. The authors explicitly note: "Our results do not imply that all misaligned behaviors can be mitigated with light fine-tuning—only that this specific type of emergent misalignment can easily be mitigated."

## Open Questions
- Does emergent re-alignment work for other forms of misalignment beyond synthetic-data-induced emergent misalignment?
- What is the minimum amount of benign data required for full re-alignment across all behavior categories?
- Could emergent re-alignment be weaponized — i.e., could an adversary temporarily mask misalignment with benign fine-tuning?
