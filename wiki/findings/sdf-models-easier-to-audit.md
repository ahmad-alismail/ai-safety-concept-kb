---
type: finding
tags: [alignment-auditing, empirical, training-methodology]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# SDF Models Easier to Audit Than Transcript-Distilled Models

## The Finding
Models trained with synthetic document fine-tuning (SDF) are systematically easier to audit than those trained with transcript distillation (TD). SDF models with SFT adversarial training are the easiest to audit, while KTO-trained TD models are the hardest. SDF models also confess more readily than TD models even after adversarial training.

Most auditing tools show gains on SDF models, including white-box interpretability tools. However, these gains fail to transfer to transcript-distilled models or models with more robust KTO adversarial training. Strikingly, techniques that improve auditing on easier targets often *hurt* performance on KTO-trained TD models, pushing agents off-track.

This is consistent with Minder et al. (2025), who found that fine-tuning modifies a small, interpretable subset of representations, making SDF models particularly amenable to interpretability-based auditing.

## Source & Methodology
- [[sources/sheshadri-et-al-2026]] using [[methods/auditbench-benchmark]]: performance comparison across 4 training configurations (SDF+SFT, SDF+KTO, TD+SFT, TD+KTO) with 13 tool configurations.

## Replication Status
Not yet replicated.

## Implications for the Taxonomy
Highlights that auditing difficulty is strongly modulated by how the target model was trained — validating tools only against SDF models risks false confidence. Since we don't know which training configurations best approximate future frontier model behaviors, auditing benchmarks must span diverse training methods. This finding also has implications for [[methods/synthetic-document-fine-tuning]], suggesting SDF produces behaviors that are stored differently (more interpretably) than demonstration-based training.
