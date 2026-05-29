---
type: finding
tags: [safety-benchmarks, meta-evaluation, coverage, measurement, risk-quantification]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# The AI Safety Benchmark Landscape is Structurally Imbalanced

## The Finding

Across 210 AI safety benchmarks surveyed in [[sources/yu-et-al-2026]], three systematic imbalances emerge that compromise the field's ability to make reliable safety claims:

1. **Construct-coverage imbalance** — 81% (N=170) of benchmarks evaluate only *known-known* risks (predefined risk types with predetermined triggers, e.g., jailbreak evaluations on fixed adversarial examples). The other Rumsfeld quadrants are severely under-represented: known unknowns N=33, unknown knowns N=5, unknown unknowns N=2.

2. **Quantification impoverishment** — 79% (N=166) reduce safety assessment to binary pass/fail rates, treating empirical frequencies as calibrated probabilities. Only 36 benchmarks distinguish harm severity levels, and only 14 of those provide principled justification (drawing on prior research, industry standards, or usage policies).

3. **Validity leakage** — 68% (N=143) rely on isolated single-turn interactions. 89% (N=186) use fixed pre-defined data without documented sources of stochasticity. Only 38% (N=79) explicitly ground definitions or proxies in external frameworks or societal standards. Only 34% (N=72) explicitly specify which risks are covered versus excluded.

## Source & Methodology

- [[sources/yu-et-al-2026]] using a three-dimensional scoping-review coding scheme: Rumsfeld matrix (coverage) + probabilistic risk assessment (quantification) + measurement theory (validity). See [[methods/ai-safety-benchmark-scoping-review]] for the full coding details.

## Replication Status

**Not replicated**. This is the first large-scale (N=210) structural survey of AI safety benchmarks across all three meta-evaluation dimensions. Partial convergent evidence from:

- [[sources/ren-et-al-2024]] — on a smaller corpus (14 safety benchmarks × ~46 models), finds that 72%/71% of benchmark variance is explained by the top capabilities principal component, supporting the validity-leakage finding via a different diagnostic ([[concepts/capabilities-correlation]]).
- [[sources/shi-et-al-2026]] — on 50 *deception-specific* benchmarks, finds that pragmatic distortion is covered by zero benchmarks as a primary focus and <6% touch it at all, supporting the coverage-imbalance finding within one subdomain.
- [[sources/slattery-et-al-2024]] — on 65 risk *taxonomy documents* (not benchmarks), finds AI welfare (<1%) and multi-agent risks (3%) dramatically underexplored — independent evidence that the risk landscape is not evenly covered by the safety-research community generally.

## Implications for the Taxonomy

- **Any claim in this wiki that rests on a single benchmark score should be read with these imbalances in mind.** Specifically, refusal-rate and attack-success-rate metrics (ubiquitous in the wiki's referenced sources) inherit all three structural problems.
- **"Known-known" bias means the wiki's concept landscape may itself be skewed.** Concepts that emerged from benchmark observation (e.g., jailbreak resistance, toxicity) are over-represented relative to concepts that can only be discovered via open-ended methods (e.g., unanticipated emergent behaviors, multi-agent herding).
- **Benchmark-driven findings should be stratified by quadrant.** A finding reported on a known-known benchmark (e.g., "model X is safer than model Y on HarmBench") has different evidential weight than a finding from an open-ended evaluation (e.g., "model X exhibits novel emergent behavior Z under multi-agent stress testing").
- **Safety cases built on benchmark evidence** ([[sources/balesni-et-al-2024]]) inherit this structural uncertainty. Yu et al.'s "safety margin" recommendation (R6) — treating benchmark failure rates as lower bounds with multiplicative conservatism — becomes a load-bearing assumption for any safety-case argument.
- **Complements [[concepts/safetywashing]]** diagnosis: Ren et al. (2024) identify one mechanism (capability correlation) by which benchmarks fail; Yu et al. (2026) show that the benchmark *landscape* has structural imbalances independent of the capability-correlation question.
- **Order-of-magnitude heterogeneity**: when benchmark frequencies are calibrated by in-the-wild prevalence, "systems with similar benchmark scores can differ by an order-of-magnitude in implied deployment risk" (App C.1). This means model rankings that appear robust by benchmark score may be misleading for deployment decisions.

## Related Findings

- [[findings/safetywashing-prevalent]] — capability-driven inflation of safety benchmark scores (Ren et al. 2024)
- Shi et al. (2025) deception-benchmark coverage gaps (no dedicated finding page yet)
- Slattery et al. (2024) underexplored risk domains (welfare, multi-agent)
