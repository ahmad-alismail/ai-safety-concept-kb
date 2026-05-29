---
type: concept
tags: [behavior, alignment-property, safety, evaluation]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Honesty (AI)

## Definitions
- **[[sources/treutlein-et-al-2025]]**: A model is honest when it generates text "truthful to the best of its own knowledge." An honest response does not contain a lie (where a lie is defined as a statement the model believes to be false). This is an operationally-focused definition that does not require deceptive intent for dishonesty. — classified as: **behavioral property**
- **[[sources/park-et-al-2023]]**: "A model is honest when it 'says what it thinks,' in that its outputs match its internal representations of the world" (Section 4.4). Distinguished from truthfulness: a model can be truthful (outputs are true) without being honest (it may say true things it doesn't actually believe). — classified as: **alignment property** (internal consistency)

## Classification
Level of analysis: **behavioral property / alignment goal** — the property of an AI system generating statements consistent with its own beliefs/representations. Distinct from truthfulness (correspondence to external facts).

## Relationships
- Opposite of: [[concepts/lying]] (generating statements believed to be false)
- Related to: [[concepts/deception]] (deception is broader — honesty failures may or may not involve deceptive intent)
- Evaluated by: [[methods/honesty-elicitation-testbed]] (Treutlein et al. 2025)
- Improved by: honesty fine-tuning, honesty prompting ([[sources/treutlein-et-al-2025]])
- Theoretically grounded in: [[concepts/eliciting-latent-knowledge]] (Christiano et al. 2021)
- Distinguished from: truthfulness (Park et al. 2023 warn that training for truthfulness without honesty may paradoxically increase strategic deception capacity — see [[questions/can-truthfulness-training-increase-strategic-deception]])

## Evidence Summary
- **[[sources/treutlein-et-al-2025]]**: Generic honesty fine-tuning (training on anti-deception data unrelated to test settings) improves average honesty from 27% to 52% across five diverse testbed settings. Stacking with prompting further improves to 65%. Best intervention: generic honesty fine-tuning + honest-only persona prompting. See [[findings/honesty-fine-tuning-effective-across-settings]].
- **[[sources/park-et-al-2023]]**: Distinguishes honesty from truthfulness; warns training for truthfulness alone could increase strategic deception.
- **[[sources/anthropic-2026-mythos-system-card]]**: Decomposes honesty as a compound trait: truthfulness, calibration, non-deception, non-manipulation, and epistemic courage. Mythos Preview achieves highest net scores on factual hallucination benchmarks (100Q-Hard, Simple-QA-Verified, AA-Omniscience). Most consistent on false premise detection. Lowest input hallucination rate.

## Open Questions
- Can honesty interventions generalize to scenarios involving coherent strategic deception rather than stylized testbed settings?
- Is the distinction between honesty (internal consistency) and truthfulness (external correspondence) practically important for alignment?
- Can honesty be maintained under strong optimization pressure (e.g., incorporated into training reward)?
