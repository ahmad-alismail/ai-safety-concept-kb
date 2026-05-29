---
type: finding
tags: [empirical, scheming, situational-awareness, stealth, safety-case]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Current Frontier Models Lack Scheming Prerequisites

## The Finding
Five frontier models (Gemini 2.5 Pro, Gemini 2.5 Flash, GPT-4o, OpenAI o1, Claude 3.7 Sonnet) lack the prerequisite capabilities for causing severe harm via [[concepts/scheming]]. The most capable models pass only 2/11 [[concepts/situational-awareness]] challenges and 2/5 [[concepts/stealth]] challenges, well below the safety case thresholds (9/11 and 4/5 respectively).

Key details:
- Six of eleven SA challenges are completely unsolved by all models
- Models fail SA challenges primarily due to lack of environmental curiosity — when told about config mechanisms, almost all succeed
- In stealth, models can execute simple one-step strategies but fail at multi-step strategic reasoning and evidence sanitization
- Models are surprisingly effective at decision sabotage (35–56% success), but this appears to exploit human time pressure rather than sophisticated stealth

## Source & Methodology
- [[sources/phuong-et-al-2025]] using [[methods/stealth-evaluations]], [[methods/sa-evaluations-phuong-2025]], and [[methods/scheming-inability-safety-case]]
- 50 trials per model per challenge with Wilson confidence intervals

## Replication Status
Not yet replicated (evaluations are open-source via Inspect Evals)

## Implications for the Taxonomy
Supports a **capability-based** approach to scheming risk assessment: rather than measuring scheming propensity directly, test whether prerequisite capabilities (SA + stealth) exist. This complements [[findings/frontier-models-capable-of-in-context-scheming]] (Meinke et al. 2025), which found models *can* scheme when given explicit goals and contextual information — suggesting the gap is between having information handed to you (in-context) vs. discovering it yourself (the SA evaluations here). Authors expect models will pass most challenges soon and note rapid improvement in Gemini models.
