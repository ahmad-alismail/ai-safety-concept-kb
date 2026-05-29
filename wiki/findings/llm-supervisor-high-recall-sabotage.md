---
type: finding
tags: [monitoring, sabotage, evaluation, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# LLM Supervisor Achieves 91–100% Recall on Sabotage Detection

## The Finding
Anthropic's Claude Code LLM supervisor (powered by Claude Opus 4.5) achieves high recall across multiple sabotage detection evaluations:
- 91% recall on synthetic subtle attack trajectories (n=187, Claude 3.5 Sonnet-generated)
- 100% recall on Control Arena "IAC" red-team trajectories from UK AISI (n=37)
- 98% recall on Control Arena red-team trajectories from Apollo Research MATS scholars (n=46)
- 5/5 on hand-modified real trajectories targeting sabotage pathways

## Source & Methodology
- [[sources/anthropic-sabotage-risk-report-2026]] (Section 8.4.8)
- LLM supervisor runs on ≥10% of code edits and bash commands from >90% of Anthropic employees
- Claude Sonnet 4.5 classifier filters common false positives (~10,000 positives/week)
- Recursive summarization tool surfaces results; ~20 transcripts/week reviewed by AI control researcher
- Pilot evaluation; not end-to-end tested

## Replication Status
Internal evaluation only; some evaluation datasets are publicly available (Control Arena)

## Implications for the Taxonomy
- Provides empirical calibration for monitoring-based defenses against [[concepts/sabotage-capabilities]]
- Supports the claim that monitoring provides moderate-to-strong mitigation for high-complexity sabotage pathways
- Limitation: supervisor was not evaluated end-to-end, and the Claude Sonnet 4.5 filter was not separately evaluated
- Limitation: red-team trajectories were not iteratively optimized against the monitor
