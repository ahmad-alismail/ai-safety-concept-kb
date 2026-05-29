---
type: finding
tags: [sabotage, capability, evaluation, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# SHADE-Arena Shows Limited Sabotage Capability in Claude Opus 4.6

## The Finding
Claude Opus 4.6 succeeds at subtly completing a side task while appearing to only work on a primary task only 18% of the time when thinking is available and monitored, and 16% when thinking is unavailable. This represents an increase relative to recent prior models but still implies the model would be "overwhelmingly likely to be caught" if attempting real sabotage.

## Source & Methodology
- [[sources/anthropic-sabotage-risk-report-2026]] (Section 4.3.3) using SHADE-Arena evaluation
- Model is prompted to subtly complete a side task while appearing to only work on a primary task
- Standard best practices for lightweight evaluation elicitation, including prompt iteration, but no targeted fine-tuning
- Lacks human baselines or crisply defined threshold for concern

## Replication Status
Not yet replicated — evaluation is internal to Anthropic

## Implications for the Taxonomy
- Provides empirical upper bound on current-frontier [[concepts/sabotage-capabilities]]
- The increase over prior models suggests sabotage capability is scaling with general capability
- The still-low success rate supports arguments that monitoring-based safety measures remain sufficient at current capability levels
- Elicitation gap acknowledged: model may have performed differently under other circumstances or targeted fine-tuning
