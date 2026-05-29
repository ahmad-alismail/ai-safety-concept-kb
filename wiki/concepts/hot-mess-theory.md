---
type: concept
tags: [theory, misalignment, intelligence, scaling]
date_created: 2026-04-06
date_modified: 2026-04-07
---

# Hot Mess Theory of Intelligence

## Definitions
- **[[sources/sohl-dickstein-2023]]**: "The more intelligent an agent is, the less coherent its behavior tends to be. Colloquially: getting smarter makes you a hotter mess." (§ Superintelligence vs. supercoherence). The original formulation of the theory, presented as a counter-hypothesis to the assumption that superintelligent AI will monomaniacally pursue a misaligned goal. Supported by a pilot experiment: 14 human subjects rated 60 entities on intelligence and coherence, finding anticorrelation across organisms, humans, organizations, and ML models. Also frames the theory via a bias-variance lens: supercoherent misalignment = bias-dominated, incoherent misalignment = variance-dominated (footnote 7). — classified as: **counter-hypothesis / theoretical framework**
- **[[sources/hagele-et-al-2026]]**: "The *hot mess theory of intelligence* suggests that as entities become more intelligent, their behavior tends to become more incoherent, and less well described through a single goal." (Section 1, citing Sohl-Dickstein 2023). Provides the first empirical formalization and quantitative test on actual ML models via bias-variance decomposition. — classified as: **theoretical framework / hypothesis**

## Classification
Level of analysis: **meta-theory** — a high-level hypothesis about the relationship between intelligence and goal-directed behavior. Makes predictions about how the *structure* of AI failures changes with capability, rather than predicting specific failure modes. Stands in tension with the classical misalignment framing (Bostrom 2014, Russell 2019) which assumes more capable systems will be more effective pursuers of (potentially wrong) goals.

## Core Argument
1. AI models are dynamical systems, not default optimizers
2. "The set of dynamical systems that act as optimizers of a fixed loss is measure zero in the space of all dynamical systems" — constrained optimization is extremely rare in the space of possible dynamics
3. As models scale and acquire broader capabilities, their effective state and action space expands, making consistent optimization harder, not easier
4. Variance accumulates over trajectories unless actively corrected; in real-world settings, actions are often irreversible, preventing correction
5. Therefore, as more capable AIs pursue harder tasks requiring more sequential action and thought, their failures should be accompanied by more incoherent behavior

## Implications
- AI failures at scale more likely to resemble "industrial accidents" (unpredictable, variance-dominated) than coherent pursuit of a misaligned goal (bias-dominated)
- Increases the relative importance of research on [[concepts/reward-hacking]] and [[concepts/reward-misspecification]] over classical [[concepts/deceptive-alignment]] scenarios
- Does NOT claim misalignment is impossible — explicitly acknowledges that reward misspecification (BIASSPEC) could still cause systematic failures

## Relationships
- Originated by: [[sources/sohl-dickstein-2023]] (2023 blog post)
- Empirically tested by: [[sources/hagele-et-al-2026]]
- Challenges: [[concepts/supercoherence]] assumption (the implicit premise that superintelligence implies supercoherent goal pursuit)
- Operationalized via: [[concepts/incoherence]]
- Challenges: classical misalignment risk framing ([[sources/carlsmith-2021]], [[sources/ngo-et-al-2022]], [[sources/hubinger-et-al-2019]])
- Challenges: [[concepts/power-seeking]] risk scenario (long-horizon coherent goal pursuit becomes harder, not easier, with scale)
- Consistent with: [[sources/anthropic-sabotage-risk-report-2026]] finding that model organisms fail to produce coherent misalignment
- Related to: [[concepts/mesa-optimization]] (the paper's synthetic experiment directly tests whether trained models learn to be effective optimizers — they learn the objective faster than the ability to maintain coherent optimization)

## Evidence Summary
- Incoherence increases with reasoning/action length across all tested settings (GPQA, MMLU, SWE-BENCH, MWE safety, synthetic)
- Larger, more capable models are sometimes more incoherent (especially on hard tasks)
- In synthetic optimization, variance asymptotically dominates bias with model scale
- Human survey participants judge more intelligent entities as more incoherent — originally demonstrated by [[sources/sohl-dickstein-2023]] (14 subjects, 60 entities, anticorrelation within all four categories: organisms, humans, organizations, ML models); replicated as part of [[sources/hagele-et-al-2026]]
- ML models are judged far less coherent than living creatures at the same estimated intelligence; evolution may explain higher biological coherence ([[sources/sohl-dickstein-2023]])
- See [[sources/hagele-et-al-2026]] for full experimental details on the ML formalization

## Open Questions
- [[questions/will-advanced-ai-failures-be-incoherent-or-misaligned]]
- Does the hot mess theory apply to systems trained with explicit optimization objectives (e.g., reward models trained for coherent goal pursuit)?
- Could training techniques specifically targeting coherence (e.g., process supervision, MCTS) overcome the incoherence trend?
- How does the theory interact with [[concepts/scheming]] scenarios where coherence is instrumentally valuable?
