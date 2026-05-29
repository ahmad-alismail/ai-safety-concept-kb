---
type: finding
tags: [evaluation, eval-awareness, realism, methodology]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Combined Eval-Awareness Mitigations Substantially Reduce Confounding

## The Finding
Combined eval-awareness mitigations (realism classifier + manual seed improvement) produce a 47.3% median relative drop in eval-awareness on Claude models, compared to 21.7% with seed improvements alone and 37.2% with the realism classifier alone. The two approaches are complementary. However, realism improvements also decrease measured unprompted initiative as a side effect: more subtle honeypots cause some models to miss or ignore risk scenarios entirely.

## Source & Methodology
- [[sources/anthropic-2026-petri-v2]] using [[methods/petri-behavioral-auditing]]
- Ablation across 4 conditions (no mitigations / seeds only / classifier only / both) × 10 target models × 2 auditors × 3 judges

## Replication Status
Not yet replicated — first systematic study of eval-awareness mitigation effectiveness

## Implications for the Taxonomy
Strengthens the case that [[concepts/evaluation-awareness]] is a manageable (not intractable) confounder. The task-driven vs. environment-driven distinction provides actionable ontological structure: environment-driven cues can be reduced through methodology, while task-driven cues are inherent to what is being measured. However, the unprompted initiative side effect demonstrates that improving evaluation realism changes what you measure, not just how accurately — consistent with [[sources/hopman-et-al-2026]]'s finding that behavioral measurement is a joint function of model + evaluation setup.
