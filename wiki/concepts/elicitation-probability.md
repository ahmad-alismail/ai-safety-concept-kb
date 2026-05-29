---
type: concept
tags: [evaluation-methodology, risk-metric, deployment-safety, statistical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Elicitation Probability

## Definitions
- **[[sources/jones-et-al-2025]]**: "the probability that a sampled output from a query has a specific behavior." Formally: p_ELICIT(x; D_LLM, B) = E_{o ~ D_LLM(x)} 1[B(o) = 1], where D_LLM(x) is the distribution over outputs for query x and B is a boolean indicator for the target behavior. Many queries have small but non-zero elicitation probabilities (e.g., p_ELICIT < 0.01) — even jailbreaks that mostly produce refusals can sometimes produce harmful instructions. (Sections 3.1, 3.2) — classified as: **continuous risk metric / measurable property of query-model pairs**

## Classification
Level of analysis: **evaluation methodology construct** — a continuous measure of per-query risk that enables statistical forecasting of deployment-scale failures. Not a behavioral or cognitive concept but a measurement tool.

## Relationships
- Measured by: [[methods/gumbel-tail-forecasting]] (extreme quantile extrapolation)
- Used to compute: worst-query risk, behavior frequency, aggregate risk
- Enables: forecasting rare behaviors across orders of magnitude of scale
- Related to: [[concepts/dangerous-capabilities]] (elicitation probability quantifies the risk of dangerous capability manifestation per query)

## Evidence Summary
- **[[sources/jones-et-al-2025]]**: Demonstrates that elicitation probabilities follow predictable extreme-value scaling across misuse (chemical/biological), misaligned actions (power-seeking, self-preservation, self-exfiltration), and red-teaming contexts. The extreme quantiles of elicitation probability distributions enable forecasting deployment risks from orders-of-magnitude smaller evaluation sets. See [[findings/elicitation-probabilities-scale-predictably]].

## Open Questions
- Can elicitation probabilities be efficiently computed without expensive repeated sampling (e.g., via importance sampling or adaptive methods)?
- How stable are elicitation probability distributions under distribution shifts between evaluation and deployment?
- Can the Gumbel-tail scaling behavior be leveraged for real-time deployment monitoring?
