---
type: finding
tags: [evaluation, methodology, judge-calibration, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Automated Behavioral Evaluations Match Human Judgment

## The Finding
Claude Opus 4.1, when used as a judge in the Bloom automated evaluation framework, achieves Spearman correlation of 0.86 with human-labeled behavior presence scores across 40 transcripts spanning 12 behaviors. Bloom also reliably distinguishes system-prompted model organisms from baseline models for 9 out of 10 behavioral quirks, even without example transcripts.

## Source & Methodology
- [[sources/gupta-et-al-2025]] using [[methods/bloom-evaluation-framework]]
- 40 hand-labeled transcripts across 12 behaviors and various interaction types
- 11 judge models compared
- 10 model organism quirks validated with 50 rollouts each (3 repetitions)

## Replication Status
Not yet replicated externally. Internal validation against Sonnet 4.5 System Card self-preferential bias rankings showed consistent results.

## Implications for the Taxonomy
Supports the viability of automated behavioral evaluation as a scalable methodology for the safety evaluation landscape. However, evaluation configuration (ideation model, rollout model, reasoning effort) substantially affects measured metrics — implying that behavioral propensity measurements are joint properties of model + evaluation setup, not intrinsic model properties alone.
