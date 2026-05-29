---
type: finding
tags: [alignment-training, sdf, rl, persistence, empirical]
date_created: 2026-05-10
date_modified: 2026-05-10
---

# Constitutional SDF Effects Persist Through and Interact Positively With RL

## The Finding
Constitutional SDF combined with high-quality SFT not only survives RL post-training but interacts positively with it. Models that begin more aligned (due to stronger SDF + SFT initialization) generally maintain their lead through the RL run, often learn faster initially, and plateau at better scores. RL on baseline models (no SDF) does not improve performance on constitution evaluations, but all three SDF-initialized models improve noticeably — suggesting SDF defines an aligned persona that RL then elicits, analogous to the Persona Selection Model (PSM) effect. The method also increases the rate of actively good behavior (not just the absence of concerning behavior).

## Source & Methodology
- [[sources/kutasov-et-al-2026]] using four haiku-class model snapshots with varying SDF and SFT initializations, evaluated across harmlessness RL training
- Compared: baseline (SFT only) vs. SDF + generic SFT vs. SDF + harmlessness SFT vs. SDF + values-focused SFT
- Tracked: agentic misalignment evals, constitution evals (factual recall + open-ended), automated alignment assessment

## Replication Status
Not yet replicated externally; internal validation across multiple initialization strategies

## Implications for the Taxonomy
Provides evidence that pre-training-level interventions (SDF) can durably shape model alignment through the full training pipeline. Connects to the [[concepts/superficial-alignment]] finding — while post-alignment fine-tuning can be fragile, deeper interventions at the pretraining/SDF stage appear more robust to subsequent training pressure.
