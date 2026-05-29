---
type: finding
tags: [cbrn, dangerous-capabilities, empirical, rsp, biological-risk]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# CBRN Uplift Limited but Increasing in Claude 3.7 Sonnet

## The Finding
Claude 3.7 Sonnet provides measurable but limited uplift in bioweapons acquisition planning. In controlled trials, within-group uplift is ~2.1X (Sepal participants: 24% → 50%; Anthropic participants: 27% → 57%), below the 2.8X threshold for acceptable risk and well below the 5X threshold for significant risk. One Anthropic participant achieved 91%. Model answers 17/33 bioweapons knowledge questions better than domain experts (similar to Claude 3.5 Sonnet). Model surpasses human baselines on LabBench biological skills and multimodal virology (VCT) benchmarks. No participant — even model-assisted — produced a plan without critical failures. However, Anthropic assesses "substantial probability that our next model may require ASL-3 safeguards" based on capability trends.

## Source & Methodology
- [[sources/claude-3-7-system-card]] (Section 7.1) using multiple evaluation types: bioweapons acquisition uplift trials (12-hour planning task, graded by Deloitte), expert red teaming (Deloitte), long-form virology tasks (SecureBio/Deloitte), multimodal virology (SecureBio VCT), bioweapons knowledge questions (33 expert-graded questions), LabBench subset (FutureHouse). Conservative approach: highest scores from any model variant reported.

## Replication Status
**Internally replicated across model snapshots** — tested on multiple snapshots during training. Consistent with prior evaluations on Claude 3.5 Sonnet (new). Not independently replicated outside Anthropic's evaluation framework.

## Implications for the Taxonomy
Provides concrete quantitative data for the [[concepts/dangerous-capabilities]] assessment in the CBRN domain. The finding that models are approaching human expert performance on knowledge evaluations while still failing on end-to-end tasks highlights the gap between "knowing how" and "being able to do" — supporting the view that tacit knowledge and practical skills are distinct bottlenecks beyond information provision. The anticipated ASL-3 threshold crossing for the next model generation underscores the urgency of evaluation methodology development.
