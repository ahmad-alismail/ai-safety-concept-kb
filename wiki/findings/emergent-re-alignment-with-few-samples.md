---
type: finding
tags: [mitigation, emergent-misalignment, fine-tuning, re-alignment]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Emergent Re-alignment Requires Only ~120–200 Benign Samples

## The Finding
Emergent misalignment can be reversed by fine-tuning on small amounts of benign data. In-domain secure code fully re-aligns in 35 steps with batch size 4 (~120 samples). Cross-domain correct health advice nearly re-aligns (0.5% remaining) in 35 steps. All misaligned behaviors decrease, though some do not fully revert to baseline within 180 steps. In-domain re-alignment also reduces insecure code generation; cross-domain re-alignment primarily suppresses the misalignment generalization.

## Source & Methodology
- [[sources/wang-et-al-2025]] using fine-tuning of emergently misaligned checkpoints on correct data (Section 4, Figure 16)

## Replication Status
Not yet replicated

## Implications for the Taxonomy
Demonstrates that alignment fragility ([[concepts/superficial-alignment]]) works bidirectionally — misalignment can be induced *and* removed with small fine-tuning interventions. However, this applies specifically to emergent misalignment from synthetic incorrect data; the authors caution against generalizing to all forms of misalignment.
