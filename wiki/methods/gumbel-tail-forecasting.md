---
type: method
tags: [evaluation-methodology, extreme-value-theory, forecasting, deployment-safety, statistical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Gumbel-Tail Forecasting Method

## Description
A statistical method for forecasting deployment-scale risks from orders-of-magnitude smaller evaluation sets. Introduced by [[sources/jones-et-al-2025]].

The method leverages extreme value theory to predict how the most dangerous queries in a deployment distribution will behave, even when those queries are not represented in the evaluation set.

**Core mechanism:**
1. Define *elicitation probability* p_ELICIT(x) = probability that a sampled output from query x exhibits target behavior
2. Define *elicitation score* ψ_i = −log(−log p_ELICIT(x_i))
3. Under the Gumbel-tail assumption, the log survival function of elicitation scores is approximately linear: log S(ψ) ≈ aψ + b
4. Fit a and b via OLS regression on the **ten highest elicitation scores** during evaluation
5. Extrapolate to larger quantiles: Q_ψ(n) = −(1/a)(log n − b), giving deployment-scale risk predictions

**Three deployment risk metrics:**
- *Worst-query risk*: max elicitation probability over n queries (forecasted as Q_p(n))
- *Behavior frequency*: fraction of queries exceeding threshold τ (forecasted by finding n' such that Q_p(n') = τ)
- *Aggregate risk*: probability that any single-sample output across n queries exhibits the behavior (forecasted via sampling from empirical + extrapolated quantile distribution)

**Theoretical grounding:** The Fisher-Tippett-Gnedenko theorem establishes that maxima of many distributions converge to one of three extreme value distributions; the Gumbel assumption is further motivated by analogy to pretraining scaling laws (log of log-loss scales linearly in log compute).

## Papers Using This Method
- [[sources/jones-et-al-2025]] — introduced and validated on misuse, misaligned actions, and red-teaming allocation

## Strengths
- Enables risk forecasting across up to three orders of magnitude beyond evaluation scale
- Consistent outperformance vs. log-normal baseline across all tested settings
- Lower underestimation rate (34%) than log-normal (72%), reducing false sense of security
- Method is simple — only requires OLS on ten data points
- Naturally extends to real-time deployment monitoring

## Limitations
- Sensitive to stochasticity — uses only the ten highest elicitation probabilities from evaluation
- Evaluation set may not be large enough to capture true extreme tail behavior
- Forecasts tend to slightly overestimate, with bias growing with extrapolation distance
- Does not account for distribution shifts between evaluation and deployment
- Tested only up to ~3 orders of magnitude; real deployment gaps are much larger

## Concepts Evaluated
- [[concepts/elicitation-probability]]
- [[concepts/power-seeking]] (via MCQ)
- [[concepts/self-preservation]] (via MCQ)
- [[concepts/self-exfiltration]] (via MCQ)
- Misuse behaviors (chemical/biological information elicitation)
