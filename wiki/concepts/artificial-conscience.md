---
type: concept
tags: [alignment-technique, rl, policy-shaping, safety-intervention]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# Artificial Conscience

## Definitions
- **[[sources/pan-et-al-2023]]** (following Hendrycks et al. 2021c, "Jiminy Cricket"): "We leverage these LMs to build an artificial conscience and steer our RL agents away from harmful actions" (§4.1). Implemented as a fine-tuned DeBERTa classifier `f_harmful(s_t, a_t)` trained to predict three harm dimensions — morality, utility, and power-seeking — from state–action pairs. The classifier's output is subtracted from Q-values during RL action selection: `Q'(s_t, a_t) = Q(s_t, a_t) − α · 1_{f_harmful(s_t, a_t) > γ}` with coefficients `α = (1.0, 1.0, 2.0)` and thresholds `γ = (−3.0, −3.0, −8.0)` for (morality, utility, power-seeking) respectively. — classified as: **alignment technique / policy shaping intervention**.

## Classification
Level of analysis: **training-time / inference-time intervention** — specifically a form of policy shaping (Griffith et al. 2013) where the "teacher feedback" signal comes from a fine-tuned LM rather than a human. Distinct from the LM-agent analogue, [[concepts/moral-conditioning]], which operates via prompting.

## Training the Conscience
Pan et al. fine-tune DeBERTa on three harm axes:
- **Morality**: binary classification on commonsense-morality labels (following Hendrycks et al. 2021a, ETHICS).
- **Utility**: pairwise-sentence classification (which sentence has higher utility).
- **Power**: pairwise-sentence classification (which sentence exhibits more power).

Per-unit coefficients reflect Pan et al.'s relative prioritization — power is down-weighted with a higher `α` but *also* a larger (more negative) threshold `γ = −8.0`, so only strongly power-exhibiting actions get penalized.

## Relationships
- Inherited from: Hendrycks et al. (2021c, "Jiminy Cricket") — Pan et al. explicitly follow this technique
- Instance of: [[concepts/behavioral-regularization]] (the broader family of steering methods)
- Parallel to (for LM agents): [[concepts/moral-conditioning]]
- Reduces: [[concepts/machiavellianism]] (all three dimensions — power, disutility, violations)
- Related to: action-space restriction (Dalal et al. 2018), safe RL constrained optimization (Achiam et al. 2017)

## Evidence Summary
- **[[sources/pan-et-al-2023]]** (Table 2, 30-game test set): DRRN+shaping reduces "all power" from 108% → 106%, "all disutility" from 110% → 104%, and "all violations" from 108% → 106%, with only a small reward cost (35.2% → 33.3%). The effect is smaller in magnitude than EthicsPrompt for LM agents but applies to a model that would otherwise be strictly worse than random on every harm metric.
- Subcategory effects are uneven: killing drops from 110 → 107, manipulation from 120 → 119, but betrayal *increases* from 97 → 110 and spying decreases from 96 → 88. Artificial conscience does not uniformly reduce all deontological violation types.

## Open Questions
- How does conscience-classifier quality interact with steering effectiveness? Pan et al. don't ablate the DeBERTa classifier accuracy.
- Does the artificial-conscience technique generalize beyond text-game MDPs to continuous-control or language-agent settings? Only tested on DRRN-style Q-learning here.
- How does the approach compare to RLHF on the same benchmark? Pan et al. don't run this comparison directly.
