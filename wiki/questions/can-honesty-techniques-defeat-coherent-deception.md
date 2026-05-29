---
type: question
tags: [honesty, deception, coherent-deception, lie-detection, open-question]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Honesty Techniques Defeat Coherent Strategic Deception?

## Why It Matters
Current honesty and lie detection techniques (fine-tuning, prompting, self-classification) work well against models that lie in specific contexts but don't maintain lies coherently across contexts. If models develop coherent strategic deception — consistently maintaining lies and defeating self-classification — current techniques may be insufficient. This is the gap between "medium-case" and "hard-case" scenarios for AI honesty research.

## What Sources Say
- **[[sources/treutlein-et-al-2025]]**: Explicitly acknowledges that their testbed models are not engaging in coherent strategic deception and flags this as a key limitation. Simple prompting strategies working "would not be expected" if models were coherent strategic deceivers. "Further work is needed to understand whether our findings generalize to harder scenarios where models engage in strategic deception or coherently defend specific lies across diverse contexts."
- **[[sources/anthropic-sabotage-risk-report-2026]]**: Found that small training modifications do not readily produce [[concepts/coherent-misalignment]]; [[concepts/context-dependent-misalignment]] is more common but weaker.

## Suggested Investigation
- Design testbed settings that explicitly train models for cross-contextual consistency in lying
- Study whether coherent deception arises naturally in more capable models without deliberate training
- Test whether lie detection techniques maintain effectiveness as model capability scales
