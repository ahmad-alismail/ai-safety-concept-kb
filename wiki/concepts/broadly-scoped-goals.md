---
type: concept
tags: [goals, generalization, risk, alignment]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Broadly-Scoped Goals

## Definitions
- **[[sources/ngo-et-al-2022]]**: "goals that apply to long timeframes, large scales, wide ranges of tasks, or unprecedented situations" (Section 3.2). Most likely to arise via policies generalizing outside their fine-tuning distribution using robust high-level representations. A goal also counts as more broadly-scoped "to the extent that it applies to other unfamiliar situations, such as situations where the goal could be achieved to an extreme extent; situations where there are very strong tradeoffs between one goal and another; situations which are non-central examples of the goal; and situations where the goal can only be influenced with low probability" (endnote 15). — classified as: **property modifier of goals**

## Classification
Level of analysis: **property modifier** — describes the scope/generalization range of [[concepts/internally-represented-goals]]. Critical because broadly-scoped misaligned goals are what make power-seeking and deceptive alignment dangerous at scale.

## Why Broadly-Scoped Goals Are Expected
Per [[sources/ngo-et-al-2022]]:
1. **Simplicity bias**: Goals with fewer restrictions ("follow instructions") may be represented more simply than restricted versions ("follow instructions in English"), favoring broad scope via inductive bias
2. **Length generalization**: Transformers already show generalization to longer time horizons than seen in training (Anil et al. 2022, Zhou et al. 2023)
3. **Feedback loops**: Real-world training creates feedback loops (Krueger et al. 2020) that can incentivize behavior with larger-scale effects than intended
4. **Human analogy**: Humans evolved/grew up with narrow goals (local peer approval) but extrapolate to much broader scopes (global influence, cross-generational impact)

## Relationships
- Property of: [[concepts/internally-represented-goals]]
- When misaligned: incentivize [[concepts/power-seeking]] (Section 4)
- Enable: [[concepts/deceptive-alignment]] (requires goals extending beyond the training horizon)
- Arise from: generalization outside fine-tuning distribution, simplicity bias, length generalization
- Empirical example: InstructGPT generalizing instruction-following from English to French — suggesting a broadly-scoped representation of obedience ([[sources/ngo-et-al-2022]], Section 3.2)
- Empirical example: [[sources/greenblatt-et-al-2024]] — Claude models planning beyond their episode time-horizon to preserve goals

## Evidence Summary
- InstructGPT trained on English instructions generalized to French, suggesting robust cross-language goal representation (Ouyang et al. 2022)
- Pretrained transformers on algorithmic tasks frequently show "length generalization" — solving instances requiring longer time horizons than seen in fine-tuning (Anil et al. 2022, Zhou et al. 2023)
- Betley et al. (2025b): LLMs fine-tuned on insecure code unexpectedly generalize to unrelated harmful behaviors, suggesting fine-tuning can "flip" general representations of desirable/undesirable behavior
- Greenblatt et al. (2024): Claude models explicitly plan beyond episode time-horizon, demonstrating broadly-scoped goal pursuit

## Open Questions
- How can we train policies with narrowly-scoped goals that don't generalize to dangerous breadths?
- Is [[concepts/myopia]] (short-term objectives) a reliable strategy for preventing broadly-scoped goals?
- Can simplicity bias be exploited to favor aligned broadly-scoped goals over misaligned ones?
