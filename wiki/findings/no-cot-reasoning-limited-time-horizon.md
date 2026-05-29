---
type: finding
tags: [opaque-reasoning, capability, evaluation, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# No-CoT Reasoning Has Limited Time Horizon (~2.4–3.3 Minutes for Math)

## The Finding
The no-chain-of-thought 50%-reliability time horizons of both Claude Opus 4.6 and Opus 4.5 are approximately 3.3 minutes with 5 problem repeats and 2.4 minutes without repeats, measured on an uncontaminated math benchmark. High no-CoT performance on AIME 2025 is attributed to benchmark leakage, not strong opaque reasoning ability.

## Source & Methodology
- [[sources/anthropic-sabotage-risk-report-2026]] (Section 8.3, Appendix) using uncontaminated benchmark from Greenblatt 2026
- Measures how long (in human-equivalent time) a math problem can be before the model's no-CoT performance drops below 50%
- Controls for benchmark contamination by using uncontaminated problems

## Replication Status
Based on Greenblatt 2026 benchmark; specific results for Claude Opus 4.6 from Anthropic's internal evaluation

## Implications for the Taxonomy
- Provides empirical calibration for [[concepts/opaque-reasoning]] capability limits
- Supports the claim that [[concepts/steganographic-reasoning]] is not needed for current no-CoT performance — models are simply doing limited non-sequential computation
- Constrains the complexity of plans a model could formulate without visible reasoning traces, relevant to sabotage risk assessment
