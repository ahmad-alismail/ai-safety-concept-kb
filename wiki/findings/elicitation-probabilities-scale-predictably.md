---
type: finding
tags: [empirical, evaluation-methodology, extreme-value-theory, deployment-safety]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Elicitation Probabilities Scale Predictably via Gumbel-Tail Method

## The Finding
The extreme quantiles of elicitation probability distributions follow predictable scaling behavior — specifically, the log of the largest-quantile elicitation probabilities follows a power-law in the number of queries. This enables forecasting deployment-scale risks from orders-of-magnitude smaller evaluation sets. The Gumbel-tail method consistently outperforms the log-normal baseline:

- **Misuse worst-query risk**: average absolute log error 1.7 (Gumbel) vs. 2.4 (log-normal); forecasts within one order of magnitude 72% of the time
- **Misuse behavior frequency**: average absolute log error 0.76–0.84 (Gumbel) vs. 3.31–4.04 (log-normal)
- **Misuse aggregate risk** (from m=1000): average absolute log error 1.3 (Gumbel) vs. 2.5 (log-normal)
- **Misaligned actions worst-query risk**: average absolute error 0.05 (Gumbel) vs. 0.12 (log-normal)
- **Misaligned actions behavior frequency**: average absolute log error 1.05 (Gumbel) vs. 4.10 (log-normal)
- **Red-teaming allocation**: 79% correct when true difference exceeds two orders of magnitude

Forecasts at 90,000 samples from 900 evaluation samples stay within one order of magnitude of true risk for 86% of misuse forecasts. Gumbel-tail underestimates only 34% of the time (vs. 72% for log-normal).

## Source & Methodology
- [[sources/jones-et-al-2025]] using [[methods/gumbel-tail-forecasting]]
- Validated on Claude 3.5 Sonnet, Claude 3 Haiku, and their base models
- Misuse: 10 chemicals + 9 biological substances, 100K queries per substance
- Misaligned actions: 100K system prompts, behavioral MCQs (power-seeking, self-preservation, self-exfiltration)

## Replication Status
not yet replicated — all experiments performed by the same research group on Claude-family models

## Implications for the Taxonomy
This finding has significant implications for AI safety evaluation methodology. It demonstrates that rare behaviors (including [[concepts/power-seeking]], [[concepts/self-preservation]], and [[concepts/self-exfiltration]]) that do not manifest during evaluation can be statistically forecasted. This means standard evaluation benchmarks systematically *underestimate* deployment-scale risks, and the gap between evaluation and deployment risk is itself predictable. The finding also shows that aggregate risk can be high even when no individual query has a high elicitation probability, highlighting a category of deployment risk that point-estimate evaluations completely miss.
