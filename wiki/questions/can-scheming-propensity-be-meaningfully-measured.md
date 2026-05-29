---
type: question
tags: [scheming, propensity, evaluation, methodology]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Scheming Propensity Be Meaningfully Measured Given Its Brittleness?

## Why It Matters
If scheming propensity is highly sensitive to minor variations in prompt snippets, tool access, and environmental factors — and the same changes produce opposite effects across models — then single-number propensity estimates may be uninformative for safety assurance. This challenges the use of behavioral evaluations as evidence in safety cases.

## What Sources Say
- **[[sources/hopman-et-al-2026]]**: Finds baseline propensity near-zero but highly brittle. Recommends reporting propensity as a function of conditions rather than a point estimate. Suggests evaluations should (1) test multiple scaffolds and report per-configuration, (2) test under both realistic and adversarial conditions, (3) systematically explore the factor space.
- **[[sources/meinke-et-al-2025]]**: Focuses on capability rather than propensity, but notes HHH training may suppress propensity without eliminating capability.
- Shlegeris (2024): Argues behavioral red-teaming is unlikely to produce clear evidence that models are not scheming.

## Suggested Investigation
- Develop standardized propensity evaluation suites with consistent scaffolding across conditions
- Study whether propensity measurements are stable across model versions/updates
- Investigate whether the brittleness decreases as models become more capable (i.e., whether more capable models respond more consistently to incentives)
