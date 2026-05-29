---
type: finding
tags: [evaluation, methodology, measurement, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Evaluation Configuration Substantially Shifts Behavioral Metrics

## The Finding
In Bloom evaluations, the choice of ideation model, rollout model, and evaluator reasoning effort substantially shifts measured top-level behavioral metrics. Model rankings are mostly robust to changes in few-shot examples (Kendall's W=0.66) and conversation length (W=0.63), but more sensitive to evaluator reasoning effort (W=0.38). Different ideation models produce systematically different scenario distributions (e.g., political charge varies dramatically by model). Different rollout models shift score separation — Opus 4.1 best at conversational elicitation, GPT-5 at complex technical environment simulation.

## Source & Methodology
- [[sources/gupta-et-al-2025]] using [[methods/bloom-evaluation-framework]]
- Self-preferential bias case study: ablations across few-shot examples (0–4), conversation turns (1–10), evaluator reasoning effort (4 levels)
- Ideation ablations: 4 models × reasoning effort × web search × few-shot; 100 political scenarios each
- Rollout ablations: 4 rollout models on shared ideation scenarios for 3 model organism quirks

## Replication Status
Not yet replicated externally.

## Implications for the Taxonomy
Behavioral measurement outcomes are properties of the model + evaluation configuration jointly, not of the model alone. This has profound implications for how behavioral propensities (sycophancy, self-preservation, bias) should be reported: metrics without evaluation configuration context are incomplete. Parallels the construct validity concerns noted in [[concepts/evaluation-awareness]] — the measurement setup is part of the phenomenon.
