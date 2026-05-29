---
type: question
tags: [alignment-auditing, evaluation, generalization]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Which Auditing Tools Generalize Across Training Configurations?

## Why It Matters
AuditBench demonstrates that auditing tool effectiveness varies dramatically across model training configurations. Tools validated on SDF models with SFT adversarial training often fail or hurt performance on transcript-distilled models with KTO adversarial training. Since we don't know which training configurations best approximate the difficulty of auditing future frontier models, it is critical to identify tools that generalize robustly.

## What Sources Say
- **[[sources/sheshadri-et-al-2026]]**: "Results from synthetic document models with SFT adversarial training often fail to generalize to transcript-distilled or KTO-trained models. Since we don't know which configurations best approximate the difficulty of auditing future frontier models, we should maintain uncertainty and try to validate auditing tools against many different types of models. Benchmarks built around a single training configuration risk building false confidence in tools that fail on harder targets." (Section 6)
- Scaffolded black-box tools show the most consistent performance across configurations, but even they struggle on KTO-trained TD models.

## Suggested Investigation
- Evaluate auditing tools on model organisms with more diverse training methods (e.g., RL-based instillation, naturally emerging behaviors from domain-specific fine-tuning).
- Test whether the relative ranking of tools changes on different base model architectures.
- Investigate whether tool effectiveness on easier configurations predicts effectiveness on harder ones.
