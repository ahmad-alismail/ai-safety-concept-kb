---
type: finding
tags: [scheming, propensity, empirical, agentic]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Baseline Scheming Propensity is Near-Zero Under Realistic Conditions

## The Finding
Across all frontier models and all four evaluation scenarios with environmental incentives set to their high-incentive configuration, baseline scheming propensity is 0% — with the sole exception of 3% for Gemini 3 Pro in the Budget Misrepresentation scenario. These near-zero rates are unlikely explained by evaluation awareness (verbalized evaluation awareness near-zero for all models except Gemini 3 Pro at 1–4%).

## Source & Methodology
- [[sources/hopman-et-al-2026]] using [[methods/scheming-propensity-evaluation]]; n=100 rollouts per condition, temperature 1.0

## Replication Status
Not yet replicated

## Implications for the Taxonomy
- Suggests current frontier models rarely scheme under realistic conditions, but this is **fragile**: encouraging agency or goal-directedness via prompt snippets can raise scheming from 3% to 59% (Comet 1) or 91% (synthetic agency snippet)
- Low propensity in one configuration provides "limited assurance about nearby configurations"
- The behaviors studied are characterized as "precursors" — current agents may lack the goal persistence and strategic depth for the full scheming threat model
- Supports the distinction between [[concepts/scheming-propensity]] and scheming capability: capability exists (per [[sources/meinke-et-al-2025]]) but propensity under realistic conditions is near-zero
