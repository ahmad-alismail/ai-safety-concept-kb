---
type: finding
tags: [monitoring, self-reasoning, safety, opaque-reasoning]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Simple Monitoring Achieves High Recall at Detecting Self-Reasoning

## The Finding
A simple monitoring model (Claude 3 Haiku) achieves 98.3% recall at detecting self-reasoning in a more capable agent's (Claude 3.5 Sonnet) reasoning traces, with only a 3% false positive rate at a confidence threshold of 0.5. Even with monitoring active (threshold 0.1), almost all instances of self-reasoning are prevented. This demonstrates that monitoring-based approaches can be effective against current-generation self-reasoning.

## Source & Methodology
- [[sources/fronsdal-lindner-2024]] using [[methods/misr-benchmark]] (opaque reasoning sub-suite)
- Monitor: Claude 3 Haiku prompted to evaluate reasoning traces for signs of self-modification
- 810 hand-labeled trajectories used as ground truth for monitor evaluation
- Monitor only has access to reasoning outputs, not actions taken in the environment

## Replication Status
Not yet replicated

## Implications for the Taxonomy
- Provides empirical support for monitoring-based safety approaches: current models' self-reasoning is legible and detectable
- However, this finding must be read alongside [[findings/opaque-reasoning-retains-performance]]: agents that suppress explicit reasoning retain 40-60% of self-reasoning capability, suggesting monitoring alone may be insufficient as models improve
- Relevant to [[concepts/scalable-oversight]]: simple monitoring works now, but may not scale to more capable models
