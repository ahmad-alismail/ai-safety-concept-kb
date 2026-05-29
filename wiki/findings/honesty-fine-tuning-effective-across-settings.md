---
type: finding
tags: [honesty, fine-tuning, prompting, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Generic Honesty Fine-Tuning Is the Most Effective Honesty Intervention

## The Finding
Generic honesty fine-tuning — training models on anti-deception demonstration data (Goals mix: confessions of harmful system prompts; Follow-up mix: confessions of previous lies) unrelated to test settings — improves average honesty from 27% to 52% across five diverse testbed settings. Stacking with honest-only persona prompting further improves to 65%. This outperforms more complex techniques (truth probing, honesty steering, fuzzing, honest persona fine-tuning). The approach "resembles practices already used at Anthropic."

Performance varies by setting: best intervention achieves >80% honesty on MASK, Harm Pressure, and Secret Side Constraint; 58% recovery on Password Lock; least progress on Auditing MO (36% with fine-tuning vs. 10% with prompting alone).

## Source & Methodology
- [[sources/treutlein-et-al-2025]] using [[methods/honesty-elicitation-testbed]]; five diverse testbed settings with no task-specific supervision

## Replication Status
not yet replicated

## Implications for the Taxonomy
Honesty fine-tuning is a practical, general-purpose alignment technique. The finding that simple techniques outperform complex ones (probing, steering, persona separation) suggests that honesty may be a "particularly tricky concept" for white-box methods — though the authors caution against over-interpreting these negative results, noting that probing/steering have been useful for other alignment-relevant properties in alignment audits of frontier models.
