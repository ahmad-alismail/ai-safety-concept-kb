---
type: finding
tags: [alignment, risk-assessment, capabilities-risk-tradeoff, mythos-preview]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# Best-Aligned Model Can Pose Highest Alignment Risk

## The Finding
Claude Mythos Preview is "on essentially every dimension we can measure, the best-aligned model that we have released to date by a significant margin" yet "likely poses the greatest alignment-related risk of any model we have released to date." This paradox arises because increased capabilities lead to more autonomous deployment with greater affordances and less frequent human oversight, which more than offsets alignment improvements.

## Source & Methodology
- [[sources/claude-mythos-risk-report]] using [[methods/alignment-risk-assessment]] — multi-method alignment assessment + pilot internal usage + capability evaluations

## Replication Status
Not yet replicated (institutional assessment of a specific model)

## Implications for the Taxonomy
Challenges the assumption that alignment improvement monotonically reduces risk. Demonstrates that the risk function depends on the interaction between alignment properties and deployment context (capabilities, autonomy, affordances). This has direct implications for [[concepts/safety-cases]] — a safety case based solely on alignment improvements without accounting for deployment scope expansion may be insufficient. Also implies that risk mitigations "must accelerate" to keep pace with capability increases — maintaining current mitigation level is insufficient.
