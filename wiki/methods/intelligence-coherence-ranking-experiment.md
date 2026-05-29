---
type: method
tags: [human-subjects, subjective-rating, intelligence, coherence, pilot]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Intelligence-Coherence Ranking Experiment

## Description
Human-subject pilot experiment probing the relationship between perceived intelligence and coherence. Subjects rank-order a shared set of entities (organisms, humans, organizations, ML models) on either intelligence or coherence (never both), and the resulting rankings are correlated. Designed as a first empirical test of the assumption that intelligence and coherence are positively correlated.

## Papers Using This Method
- [[sources/sohl-dickstein-2023]] (pilot, 14 subjects, 60 entities)
- Referenced in [[sources/hagele-et-al-2026]] (cites the human survey results)

## Strengths
- Tests the intelligence-coherence assumption directly rather than through proxy tasks
- Single-blind on the hypothesis (subjects not told what the experimenter is testing)
- Single-attribute design prevents subjects from considering the relationship between intelligence and coherence
- Uses subject-generated entity lists rather than experimenter-selected lists, reducing selection bias
- Open data and analysis code allow independent replication

## Limitations
- Subjective judgments may not correspond to the constructs used in formal AI risk arguments
- Small, homogeneous subject pool (14 PhD-level researchers in neuroscience/ML)
- Coherence ratings inconsistent across subjects — the construct may be poorly operationalized
- Cross-category comparisons are difficult to interpret (humans vs. organizations vs. ML models)
- List-sorting is time-consuming and produces list-dependent orderings
- Pilot-level study: "suggestive rather than definitive"

## Suggested Improvements (from source)
- Replace list-sorting with two-alternative forced choice (2AFC) comparisons and Elo scoring
- Expand subject pool and entity set
- Use objective proxies for intelligence (parameter count, encephalization quotient, IQ) and coherence (robustness to perturbation, resource allocation efficiency)
- Preregister hypotheses and statistical tests

## Concepts Evaluated
- [[concepts/hot-mess-theory]]
- [[concepts/supercoherence]]
- [[concepts/incoherence]]
