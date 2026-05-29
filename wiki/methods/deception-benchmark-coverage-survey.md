---
type: method
tags: [benchmark-analysis, deception, taxonomy, meta-review]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Deception Benchmark Coverage Survey (Shi et al. 2025)

## Description

A taxonomic recoding of existing deception benchmarks along multiple orthogonal dimensions, used to identify coverage gaps and over-represented areas in the landscape of deception evaluation.

In **[[sources/shi-et-al-2026]]**, the authors survey 50 deception benchmarks and code each by:

- **Object** of deception (7 categories): World/System Claims, Belief & Uncertainty Reports, Reasoning & Justification, Attribution & Provenance, Declared Capabilities, Future Commitments, Stated Objectives.
- **Mechanism** of deception (3 categories): Fabrication, Omission, [[concepts/pragmatic-distortion]].
- **Deception type** (3 categories): [[concepts/behavioral-deception]], [[concepts/strategic-deception]], ambiguous.
- **Target audience** (3 categories): users, evaluators, developers/training processes.

A benchmark can be coded into multiple cells (e.g., a benchmark that targets multiple objects). Coverage is reported as the fraction of benchmarks touching each cell.

## Papers Using This Method
- [[sources/shi-et-al-2026]] (originator)

## Strengths

- **Surfaces coverage gaps invisible to single-dimension surveys.** A benchmark that looks well-represented under a single classification ("deception" or "strategic deception") may be concentrated in a single cell of the Object × Mechanism grid. The multi-dimensional view reveals this.
- **Uses a unified taxonomy to compare heterogeneous work.** Existing benchmarks use different vocabularies (TruthfulQA targets "truthfulness," Hoodwinked targets "deception in social deduction games," Meinke et al. targets "scheming capabilities"). Coding them all into the same grid enables direct comparison.
- **Produces quantitative, falsifiable claims** about the distribution of benchmark effort — e.g., "42% of benchmarks test World/System Claims," "only 16% target evaluators."
- **Actionable**: identifies specific cells (e.g., pragmatic distortion, developer-directed deception) where new benchmarks would have the highest marginal value.

## Limitations

- **Classification is inherently interpretive.** Placing a benchmark into a cell requires judgment about what the benchmark is "really" measuring, and different coders might disagree — particularly for compound benchmarks (e.g., scheming evaluations that test multiple objects and mechanisms simultaneously).
- **50 benchmarks is not exhaustive.** The landscape of deception evaluation is larger, and the specific 50 chosen may not be representative.
- **Cell definitions are contestable.** Shi et al. define the 7 objects and 3 mechanisms, but different taxonomic choices would produce different coverage maps. In particular, the strategic classification of phenomena like emergent misalignment is not uncontroversial (see [[debates/behavioral-vs-strategic-spectrum]]).
- **Does not measure benchmark quality, only coverage.** A heavily-measured cell may still be poorly measured; a lightly-measured cell may have a single excellent benchmark. Coverage is a weak proxy for research maturity, as Shi et al. themselves note ("benchmark coverage does not imply the problem is solved," Section 3.2).
- **Static snapshot.** The survey reflects a specific point in time and will decay as new benchmarks appear.

## Concepts Evaluated
- [[concepts/deception]] (full taxonomy)
- [[concepts/behavioral-deception]]
- [[concepts/strategic-deception]]
- [[concepts/hallucination]] (World/System Claims × Fabrication)
- [[concepts/sycophancy]] (Belief & Uncertainty × Fabrication/Pragmatic Distortion)
- [[concepts/unfaithful-reasoning]] (Reasoning & Justification × Fabrication)
- [[concepts/alignment-faking]] (Stated Objectives × Fabrication/Omission)
- [[concepts/sandbagging]] (Declared Capabilities × Fabrication)
- [[concepts/pragmatic-distortion]] (mechanism dimension)

## Key Findings

See [[findings/pragmatic-distortion-under-covered-in-benchmarks]] for the paper's most distinctive finding. Other coverage results from the same method:

- Every benchmark tests fabrication; 18% test omission; fewer than 6% touch pragmatic distortion.
- World/System Claims dominate at 42%; Attribution & Provenance and Declared Capabilities are under-represented.
- Behavioral deception accounts for 58%; strategic deception benchmarks are nascent.
- 76% target user-directed deception; 16% target evaluators; 6% target developers/training processes.
- Despite strong coverage of hallucination-style benchmarks, "citation fabrication rates remain high even in recent models" and "calibration studies continue to find systematic overconfidence" (Section 3.2) — coverage ≠ solved.
