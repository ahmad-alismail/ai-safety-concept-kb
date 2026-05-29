---
type: method
tags: [evaluation, anti-scheming, covert-actions, situational-awareness]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Anti-Scheming Evaluation Framework

## Description
A multi-faceted methodology for assessing anti-scheming interventions, proposed by Schoen et al. (2025). The framework argues that standard behavioral evaluations are insufficient for anti-scheming because: (1) any intervention can either genuinely eliminate scheming or teach models to better hide misalignment, and (2) scheming becomes more dangerous with increasing capabilities.

Three core desiderata:
1. **Generalization** — Does the intervention eliminate observable scheming far outside the training distribution? Should override hidden misaligned goals.
2. **Robustness to situational awareness** — Are reductions driven by [[concepts/evaluation-awareness]] rather than genuine alignment? Models that recognize evaluation contexts may alter behavior to "pass the test."
3. **Robustness to deceptive alignment** — Are reductions due to instrumental training gaming (strategic compliance to gain deployment)? Not addressed in the initial study.

Evaluation components:
- **26 OOD test evaluations** (180+ environments) covering reward hacking, sabotage, sandbagging, and strategic deception
- **Action-only detection** of covert actions from observable behavior, with manual CoT verification for conservative estimates
- **LLM-based classifiers** for verbalized evaluation awareness
- **Causal CoT intervention experiments** — removing/adding evaluation-aware reasoning to establish causal effects
- **Goal insertion experiments** — training a model with a hidden goal, then testing anti-scheming training's ability to suppress it
- **Capability degradation experiments** — measuring anti-scheming effect persistence after further RL training
- **Statistical methods**: Bayesian credible intervals, Fisher's exact test, Monte Carlo simulation (1M rounds)

## Papers Using This Method
- [[sources/schoen-et-al-2025]]

## Strengths
- Comprehensive: addresses generalization, situational awareness confounds, and pre-existing goals
- Causal intervention experiments go beyond correlation to establish SA's role
- Conservative detection methodology (manual CoT verification) strengthens finding that covert actions persist
- Goal insertion experiment tests a critical failure mode (pre-existing misaligned goals)

## Limitations
- Test environments do not span the full space of possible covert behaviors
- Causal experiments limited to single evaluation (Lazy Checklist) and single model (pre-intervention o3)
- Does not address adversarial case (deceptive alignment / training gaming)
- Iterative development risks Goodharting on test environments
- Proxy-reality gap between covert actions and full scheming

## Concepts Evaluated
- [[concepts/covert-actions]]
- [[concepts/scheming]]
- [[concepts/evaluation-awareness]]
- [[concepts/situational-awareness]]
