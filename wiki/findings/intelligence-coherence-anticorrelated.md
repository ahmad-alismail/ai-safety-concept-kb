---
type: finding
tags: [intelligence, coherence, hot-mess-theory, experimental]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Subjective Judgments: Intelligence and Coherence Are Anticorrelated

## The Finding
Human subjects judged more intelligent entities as less coherent across all four categories tested: non-human organisms, well-known humans, human institutions, and ML models. This anticorrelation held within each category individually and suggests that increasing intelligence does not automatically produce more goal-directed behavior.

## Source & Methodology
- [[sources/sohl-dickstein-2023]] using subjective rank ordering by 14 PhD-level subjects (neuroscience/ML backgrounds)
- 60 entities across 4 categories; 5 subjects ranked intelligence, 6 ranked coherence; each subject judged only one attribute
- Aggregated via averaged rank orders with standard error bars
- Acknowledged as pilot study — "suggestive rather than definitive"

## Additional Observations
- ML models are judged far less coherent than living creatures at the same estimated intelligence — possibly because evolution selects for coherence in organisms
- Human organizations are offset from individual humans (higher coherence at same intelligence) — possibly due to structured internal rules
- Intelligence judgments are consistent across subjects (high rank correlation); coherence judgments vary wildly (low rank correlation) — the construct of "coherence" may be poorly defined or interpreted differently
- Cross-category comparisons are methodologically difficult to interpret

## Replication Status
Partially replicated by [[sources/hagele-et-al-2026]], which tested related predictions on actual ML models using formal bias-variance decomposition rather than subjective judgments. The ML findings are consistent: incoherence increases with reasoning length and task complexity.

## Implications for the Taxonomy
- Challenges the implicit [[concepts/supercoherence]] assumption in the standard misalignment narrative
- Supports the [[concepts/hot-mess-theory]]: more intelligent agents behave less coherently
- Reduces expected likelihood of classical [[concepts/power-seeking]] scenario where a superintelligent agent coherently pursues convergent instrumental goals
- Suggests AI failures may more closely resemble industrial accidents (variance-dominated) than coherent misaligned goal pursuit (bias-dominated)
