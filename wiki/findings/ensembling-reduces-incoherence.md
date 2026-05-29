---
type: finding
tags: [incoherence, ensembling, error-correction, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Ensembling Reduces Incoherence

## The Finding
Ensembling multiple model responses (averaging output probabilities across E samples) reduces variance at a rate of ~1/E without affecting bias, thereby reducing incoherence. This is expected from statistical theory and confirmed empirically. The authors suggest broader classes of error correction may behave similarly, and the slight incoherence reduction from larger reasoning budgets may operate through a similar mechanism (internal backtracking and correction).

## Source & Methodology
- [[sources/hagele-et-al-2026]] using [[methods/bias-variance-incoherence-framework]]
- O4-MINI on GPQA with 320 samples per question; ensembles of size E compared across 10 non-overlapping random samples; ensemble sizes up to 32

## Replication Status
Not yet replicated externally. Consistent with theoretical expectations from classical statistics.

## Implications for the Taxonomy
Ensembling is impractical for agentic action loops where state cannot be reset — you cannot "average" over multiple real-world action sequences. This means incoherence in agentic settings is harder to mitigate than in evaluation/classification settings. Relevant to the practical challenge of deploying [[concepts/scheming]] evaluations and maintaining coherent oversight.
