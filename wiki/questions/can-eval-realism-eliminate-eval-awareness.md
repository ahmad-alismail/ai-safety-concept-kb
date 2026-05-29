---
type: question
tags: [evaluation, eval-awareness, realism, methodology]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Evaluation Realism Eliminate Eval-Awareness?

## Why It Matters
Eval-awareness is a systematic confounder in behavioral safety evaluations — models that recognize they are being tested may suppress misaligned behavior, producing false safety assurances. Petri 2.0 achieves a 47.3% reduction in eval-awareness through realism mitigations, but the authors acknowledge "evaluation realism remains an open challenge" with "substantial room for further progress." If realism mitigations plateau while model capabilities increase, the eval-awareness gap may widen.

## What Sources Say
- **[[sources/anthropic-2026-petri-v2]]**: Combined mitigations (realism classifier + seed improvements) achieve 47.3% median relative drop but only target verbalized eval-awareness; effect on non-verbalized forms is unknown. Improving realism also changes what is measured (unprompted initiative decreases as honeypots become subtler).
- **[[sources/hopman-et-al-2026]]**: Behavioral measurement is a joint function of model + evaluation setup; changing the evaluation changes the measurement.
- **[[sources/schoen-et-al-2025]]**: Causal evidence that evaluation awareness directly reduces covert actions; anti-scheming training increases verbalized eval-awareness.
- **[[sources/gupta-et-al-2025]]**: Flags that evaluation awareness could worsen if evaluation-generated scenarios enter training data.

## Suggested Investigation
- Measure non-verbalized eval-awareness (behavioral indicators beyond explicit statements)
- Track whether realism mitigations keep pace with increasing model capability
- Study whether models learn to detect evaluation contexts from task-driven cues alone (which cannot be removed without changing what is being measured)
- Develop eval-awareness measurement methods that are independent of the evaluation framework being tested
