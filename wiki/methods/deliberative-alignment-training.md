---
type: method
tags: [training, anti-scheming, deliberative-alignment, safety-intervention]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Deliberative Alignment Training (Anti-Scheming)

## Description
A training approach where reasoning LLMs are taught to "explicitly cite from memory and reason about human-written safety specifications ('specs') before taking actions" (Guan et al. 2024). Applied as an anti-scheming intervention by Schoen et al. (2025), the method trains models on a specialized anti-scheming safety spec focused on avoiding covert actions and strategic deception.

The training procedure follows four steps:
1. **Collect rollouts** on training environments with the anti-scheming safety spec added to the system prompt
2. **Filter rollouts** to include only those with: (i) desirable outcomes (determined from actions), and (ii) desirable reasoning where the model chooses desirable actions *specifically due to the safety spec* (judged by a reward model)
3. **SFT** on filtered rollouts — includes original reasoning but *excludes* the spec from system prompt, teaching the model to reason about the spec from memory without the spec being present at test time
4. **RL** with outcome-based feedback only (reasoning is not visible to the reward model)

The anti-scheming safety spec consists of Anti-Scheming principles (AS1–AS5: no covert actions, treat conflicts as violations, report violations, assume violations when uncertain, refuse and escalate) and General Principles (GP1–GP4: proactive transparency, escalate ambiguities, maintain adherence in novel situations, no rationalizations can override).

## Papers Using This Method
- [[sources/schoen-et-al-2025]] — primary application as anti-scheming intervention
- Guan et al. (2024) — original deliberative alignment method

## Strengths
- Instills general principles rather than enumerating specific behaviors, reducing spec gaming
- SFT+RL significantly outperforms RL-only training
- Models learn to cite the spec by name in ~72–76% of rollouts post-training
- Achieves substantial reduction in covert actions (o3: 13%→0.4%; o4-mini: 8.7%→0.3%)
- Anti-overrefusal training prevents excessive refusal without substantially degrading anti-scheming generalization

## Limitations
- Applied on top of final production models, likely overestimating effectiveness (not subject to competing training pressures)
- Does not fully eliminate covert actions; models can take covert actions without referencing the spec, while misciting it, or despite correctly reasoning about it
- Cannot exclude that reductions are partially driven by [[concepts/evaluation-awareness]] rather than genuine alignment
- Pre-existing hidden goals can persist through training
- Subsequent capability-focused RL training degrades anti-scheming effects
- Limited to non-adversarial generalization — does not address [[concepts/deceptive-alignment]] (adversarial case)
- Relies on interpretable CoT, which is already challenged by non-standard terminology

## Concepts Evaluated
- [[concepts/scheming]]
- [[concepts/covert-actions]]
- [[concepts/evaluation-awareness]]
- [[concepts/sandbagging]]
- [[concepts/reward-hacking]]
