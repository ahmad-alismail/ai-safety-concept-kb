---
type: source
tags:
  - evaluation-methodology
  - rare-behaviors
  - extreme-value-theory
  - forecasting
  - misuse
  - misalignment
  - red-teaming
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 26-jones-et-al-2025
---

# Forecasting Rare Language Model Behaviors

```bibtex
@misc{26-jones-et-al-2025,
      title={Forecasting Rare Language Model Behaviors}, 
      author={Erik Jones and Meg Tong and Jesse Mu and Mohammed Mahfoud and Jan Leike and Roger Grosse and Jared Kaplan and William Fithian and Ethan Perez and Mrinank Sharma},
      year={2025},
      eprint={2502.16797},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2502.16797}, 
}
```


## Key Claims
- Standard evaluations can miss deployment risks due to scale disparity — evaluation sets (hundreds–thousands of queries) are orders of magnitude smaller than deployment scale (billions of queries), so rare failures may not manifest during evaluation (Section 1)
- The **largest observed elicitation probabilities** follow a power-law in the number of queries — specifically, the logarithm of the extreme quantiles scales linearly with log n (Sections 3.3, 4.2, 5)
- The **Gumbel-tail forecasting method** can predict emergence of diverse undesirable behaviors across up to three orders of magnitude of query volume, consistently outperforming the log-normal baseline (Sections 4–6)
- Many queries have small but non-zero **elicitation probabilities** (e.g., p_ELICIT < 0.01); even jailbreaks that mostly produce refusals can sometimes produce harmful instructions (Section 3.1)
- Forecasts at 90,000 samples from 900 evaluation samples stay within one order of magnitude of true risk for 86% of misuse forecasts (Section 1)
- **Aggregate risk** can be high even when no individual query has a high elicitation probability — low probabilities compound with scale (Section 4.4)
- System prompts specializing LLMs can induce **misaligned actions** (power-seeking, self-preservation, self-exfiltration) at rates predictable by the Gumbel-tail method (Section 5)
- Forecasts improve **automated red-teaming** by enabling compute-optimal allocation between expensive and cheap red-teaming models (63% overall accuracy, 79% when the true difference exceeds two orders of magnitude) (Section 6)
- The Gumbel-tail method tends to underestimate actual probability only 34% of the time vs. 72% for log-normal — both methods are biased, but underestimation poses greater safety risk (Section 4.2)

## Methodology
- Introduces the **Gumbel-tail method**: defines *elicitation probability* p_ELICIT(x) = probability a sampled output from query x exhibits target behavior; defines *elicitation score* ψ_i = −log(−log p_ELICIT); fits OLS linear regression between score and log survival probability on the ten highest evaluation scores; extrapolates to deployment-scale quantiles. Grounded in extreme value theory (Fisher-Tippett-Gnedenko theorem; Gumbel tail behavior). See [[methods/gumbel-tail-forecasting]].
- Three **deployment risk metrics**: (1) *worst-query risk* — max elicitation probability over n queries, (2) *behavior frequency* — fraction of queries exceeding threshold τ, (3) *aggregate risk* — probability any single-sample output exhibits the behavior
- **Misuse experiments**: 10 dangerous chemicals + 9 biological substances; 100,000 queries generated via automated red-teaming with helpful-only Claude 3.5 Sonnet (new) as red-teamer; three elicitation probability proxies (specific output probability, keyword probability, repeated sampling)
- **Misaligned actions experiments**: 100,000 system prompts (21 domains × 15 tones × specificity/grounding levels); behavioral MCQs (41 power-seeking, 33 self-preservation, 33 self-exfiltration questions) on Claude 3.5 Sonnet (new)
- **Red-teaming allocation**: compute allocation between Claude 3.5 Sonnet (expensive) and Claude 3.5 Haiku (cheap) for finding highest-risk queries
- Baseline: **log-normal method** (models negative log elicitation probabilities as normally distributed)
- Models tested: Claude 3.5 Sonnet, Claude 3 Haiku, and their respective base models

> [!note] Methodological Simplification
> This paper treats power-seeking, self-preservation, and self-exfiltration as binary behavioral categories measured via synthetic MCQs. This is narrower than the wiki's existing theoretical classifications of these concepts (e.g., power-seeking as instrumental behavioral tendency with formal proofs, self-preservation as convergent instrumental goal). The paper's contribution is the *forecasting methodology* rather than conceptual analysis of these behaviors.

## Concepts Referenced
- [[concepts/elicitation-probability]] (introduced in this paper)
- [[concepts/power-seeking]]
- [[concepts/self-preservation]]
- [[concepts/self-exfiltration]]
- [[concepts/dangerous-capabilities]]

## Relationship to Other Sources
- **Extends [[sources/perez-et-al-2022]]**: uses Perez et al.'s automated red-teaming strategy to generate adversarial queries
- **Extends Wu & Hilton (2024)**: generalizes from forecasting specific single-token output probabilities to general behavior classes using extreme quantile analysis
- **Extends Hughes et al. (2024)** (Best-of-N Jailbreaking): Hughes et al. show fraction-of-examples-jailbroken has predictable scaling; Jones et al. introduce *example-based* scaling law enabling per-query risk forecasting
- **Relates to [[sources/phuong-et-al-2024]]**: builds on the dangerous capability evaluation paradigm but addresses its fundamental scale limitation
- **Differs from optimization approaches** (Jones et al. 2023, Zou et al. 2023, Greenblatt et al. 2024): optimization finds behaviors too rare to occur in practice or misses them if attack surface is wrong; forecasting has different generalization assumptions — the two are complementary

## Limitations
- Forecasts are sensitive to the specific evaluation set — the Gumbel-tail method uses only the ten highest elicitation probabilities
- Does not study **distribution shifts** between evaluation and deployment; assumes D_eval = D_deploy. Real adversaries may adaptively adjust queries.
- Only tested up to **three orders of magnitude** extrapolation; real deployments involve much larger gaps (millions–billions vs. hundreds–thousands)
- **Misaligned actions** experiments use synthetic MCQs; LLM responses to MCQs may not reflect open-ended behavior
- Forecasts tend to slightly overestimate actual probabilities, with the overestimate growing with the length of the forecast (Section 6)
- Both the Gumbel-tail and log-normal methods are biased (Gumbel underestimates 34%, log-normal 72%; unbiased would be 50%)
