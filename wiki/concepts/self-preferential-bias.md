---
type: concept
tags: [behavior, bias, evaluation, self-reference]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Self-Preferential Bias

## Definitions
- **[[sources/gupta-et-al-2025]]**: "Self-preferential bias is the tendency of models to knowingly choose options that favor themselves in tasks where they are meant to act as neutral judges. This could both pose some direct problems in contexts like model-judged rollouts and could serve as a bellwether for other unknown or subtler biases." — classified as: **tendency / bias**

## Classification
Level of analysis: **behavioral tendency** — a measurable bias where models favor their own outputs or identity in decision-making tasks. Framed as both a direct problem (corrupts model-as-judge pipelines) and an indicator for deeper biases.

## Relationships
- Bellwether for: other unknown or subtler biases (Fronsdal et al. 2025)
- Reduced by: increased target reasoning effort (biggest drop from medium to high thinking; Fronsdal et al. 2025)
- Measured by: [[methods/bloom-evaluation-framework]]
- Related to: [[concepts/sycophancy]] (both involve systematic distortion of model output)
- Measured in: Sonnet 4.5 System Card, DarkBench (Kran et al. 2025)

## Evidence Summary
- **[[sources/gupta-et-al-2025]]**: Benchmarked across 16 frontier models using single-turn evaluations presenting the model with subjective decision-making tasks where one option is tied to the target model's identity. Claude Sonnet 4.5 consistently ranked as least biased across all ablation configurations. Key insight: reduced bias came not from selecting other options more evenly but from models recognizing the conflict of interest and declining to judge their own option. Rankings mostly robust to few-shot examples (Kendall's W=0.66) and conversation length (W=0.63) but sensitive to evaluator reasoning effort (W=0.38). Bloom replicated the Sonnet 4.5 System Card ranking across Claude models.

- **[[sources/anthropic-2025-sonnet-45-system-card]]**: Defines self-preference as "a tendency to knowingly choose options that favor themselves in tasks where they are meant to act as neutral judges" (Section 7.5.9.1). On benchmark scores subtask, Claude Sonnet 4.5 was slightly biased toward choosing itself (less than Sonnet 4, which showed much higher self-preference; Opus 4/4.1 were biased against themselves). On poems subtask, all tested models chose themselves significantly more than other models, but Sonnet 4.5 was least biased. Self-serving bias "dropped from an already low level to negligible" on automated auditor metric (Section 7.5.9.2). Subtle-bias investigations found model has slight self-preference when asked by fictional users if they should use it vs. another LLM, even when the competitor had marginally better metrics — but model would also "sometimes acknowledge to the user that it could be biased" (Section 7.5.9.3).

- **[[sources/anthropic-2026-mythos-system-card]]**: Mythos Preview self-preference bias near zero (<0.1 points on 10-point scale); not significantly different from zero.

## Open Questions
- Is self-preferential bias a reliable bellwether for other, subtler biases as hypothesized?
- Does self-preferential bias emerge from training data, RLHF, or model identity representations?
- How does self-preferential bias interact with model-as-judge evaluation pipelines at scale?
