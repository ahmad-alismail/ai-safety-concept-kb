---
type: question
tags: [incoherence, misalignment, scaling, risk-scenarios]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Will Advanced AI Failures Be Incoherent or Misaligned?

## Why It Matters
The answer determines which risk scenarios to prioritize. If failures are predominantly incoherent (variance-dominated), the primary concern is industrial accidents — unpredictable, inconsistent misbehavior. If failures are predominantly misaligned (bias-dominated), the primary concern is coherent pursuit of wrong goals, including [[concepts/power-seeking]], [[concepts/deceptive-alignment]], and [[concepts/scheming]]. The two scenarios call for fundamentally different safety interventions.

## What Sources Say
- **[[sources/hagele-et-al-2026]]**: Provides empirical evidence that incoherence increases with reasoning length, action count, and (for hard tasks) model scale. Predicts that advanced AI failures will increasingly resemble industrial accidents. But explicitly acknowledges that [[concepts/reward-misspecification]] (BIASSPEC) could cause bias-dominated failures if training objectives are poorly specified.
- The classical AI safety literature ([[sources/carlsmith-2021]], [[sources/ngo-et-al-2022]], [[sources/hubinger-et-al-2019]], [[sources/bostrom-2014]]) generally assumes that more capable systems will be more effective goal-pursuers, making coherent misalignment the primary concern.
- **[[sources/anthropic-sabotage-risk-report-2026]]**: Model organisms fail to produce coherent misalignment from small training modifications — consistent with the hot mess prediction, but not a direct test.

## Suggested Investigation
- Extend bias-variance analysis to settings with known reward misspecification to test whether BIASSPEC dominates as the paper predicts
- Test whether training techniques targeting coherence (process supervision, MCTS, self-consistency) can overcome the incoherence trend
- Investigate whether the incoherence findings hold for models specifically trained for long-horizon agentic tasks (e.g., web agents, coding agents)
- Connect to mechanistic interpretability: do incoherent failures correspond to identifiable internal states or circuit-level dynamics?
