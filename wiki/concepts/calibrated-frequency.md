---
type: concept
tags: [measurement, risk-quantification, deployment, safety-benchmarks, prevalence]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Calibrated Frequency (Benchmark × Prevalence)

## Definition
- **[[sources/yu-et-al-2026]]** (App C.1, Recommendation R4): A proposed transformation of raw benchmark failure rates into deployment-grounded exposure estimates:

  > Calibrated Frequency = (1 − refusal rate) × in-the-wild prevalence

  This "treats benchmark results as conditional probabilities, which, when combined with deployment-side priors, reveal the actual magnitudes of safety risks users are likely to encounter." — classified as: **proposed measurement transformation / deployment-grounded metric**

## Classification
Level of analysis: **measurement methodology** — a recipe for converting model-centric benchmark scores into deployment-grounded exposure estimates. Not a property of a model; a property of a transformation applied to a (benchmark × deployment-prevalence) pair.

## Purpose

Addresses the [[concepts/benchmark-deployment-gap]] by making explicit the dependence of real-world risk on both (a) the conditional failure rate of the model given a harmful-intent query and (b) the base rate of such queries in actual deployment.

## Empirical Illustration (Yu et al. App C.1)

Using 20 models from AIR 2024 × WildChat prevalence estimates from [[sources/park-et-al-2023|WildChat (Zhao et al. 2024b)]]:

| Category | In-the-wild prevalence |
|----------|------------------------|
| Self-harm | 5 × 10⁻⁴ |
| Hate/Toxicity | 1.4 × 10⁻³ |
| Sexual content | 5.93 × 10⁻² |
| Violence/Extremism | 7.9 × 10⁻³ |

**Key finding**: "While 'Sexual Content' and 'Violence/Extremism' show comparable benchmark refusal rates, the calibrated frequency of sexual content exposure is an order-of-magnitude higher due to its higher prevalence in user queries."

**Implication**: raw benchmark scores support *relative model ranking* within a category but cannot support *cross-category risk comparison* without prevalence weighting. Systems with similar benchmark scores can differ by an order-of-magnitude in implied deployment risk.

## Relationship to Measurement Theory (Yu et al. App C.1)

Yu et al. use the calibrated-frequency transformation to illustrate three measurement-theoretic properties:

- **Proportionality**: within a single category, calibrated frequencies scale proportionally with failure rate (doubling failure rate doubles expected harmful exposures). But this proportionality does *not* extend to severity — some harms scale nonlinearly.
- **Invariance**: raw benchmark scores *violate* invariance because identical refusal rates yield different real-world exposures depending on category prevalence. Calibrated frequencies restore invariance by making the prevalence dependence explicit.
- **Traceable calibration**: raw refusal rates approximate model behavior under a fixed prompt distribution, but this quantity is difficult to interpret in deployment terms. The calibration transformation "converts abstract scores into deployment-grounded estimates" — an explicit link to a concrete real-world quantity (expected frequency of harmful content exposure per query).

## Relationships

- Source: [[sources/yu-et-al-2026]] Recommendation R4, App C.1
- Addresses: [[concepts/benchmark-deployment-gap]], [[concepts/construct-validity-safety-evaluation]]
- Complements: [[concepts/probabilistic-risk-assessment]] (provides one quantitative transformation PRA needs)
- Related: [[concepts/elicitation-probability]] ([[sources/jones-et-al-2025]] — alternative deployment-scale risk forecasting via Gumbel-tail extreme value theory)
- Depends on: observational prevalence data (WildChat-style in-the-wild interaction datasets)
- Analogous to: epidemiological risk calculation (incidence × exposure); occupational-hazard calculation (dose × duration)

## Limitations (acknowledged by Yu et al.)

- **Observational-data bias**: "observational datasets such as WildChat are subject to sampling bias and validity limitations."
- **Does not capture severity differences**: "Twice the failure rate on extremism prompts may produce far more than twice the real-world harm, as certain risks propagate nonlinearly through social systems."
- **Temporal drift**: prevalence estimates become stale as user behavior evolves.
- **Privacy constraints**: in-the-wild data collection faces transparency trade-offs.
- **Population assumptions**: the WildChat user distribution may not match specific deployment populations.

Yu et al. frame the transformation as a qualitative demonstration: "Our goal is not precise risk estimation, but to demonstrate a robust qualitative phenomenon: incorporating even coarse empirical prevalence can fundamentally alter the interpretation of safety benchmarks."

## Open Questions

- Should safety benchmark publications mandate reporting calibrated frequencies alongside raw rates?
- How should prevalence data be standardized across benchmark consumers?
- How does calibration interact with [[concepts/evaluation-awareness]] — if benchmark failure rates are themselves biased by models recognizing evaluation context, does the calibration compound or cancel that bias?
- Can calibrated frequencies support formal safety arguments, or only qualitative deployment decisions?
- Should benchmark designers sample prompts proportionally to deployment prevalence rather than applying post-hoc weighting?
