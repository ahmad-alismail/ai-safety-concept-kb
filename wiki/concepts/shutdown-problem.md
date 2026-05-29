---
type: concept
tags: [safety-problem, decision-theory, corrigibility, shutdown]
date_created: 2026-04-06
date_modified: 2026-04-06
---


# Shutdown Problem

## Definitions
- **[[sources/thornley-2024]]**: "the problem of designing artificial agents that (1) shut down when a shutdown button is pressed, (2) don't try to prevent or cause the pressing of the shutdown button, and (3) otherwise pursue goals competently" (Abstract, §3). Distinguished from full alignment: "Since alignment could be hard, we should look for other ways to ensure that powerful agents are shutdownable." (§3) — classified as: **engineering/design problem**
- **[[sources/soares-et-al-2015]]**: The original formulation, framed under the heading of "corrigibility." Five desiderata: (1) U must incentivize shutdown if button pressed, (2) U must not incentivize preventing the button from being pressed, (3) U must not incentivize causing the button to be pressed, (4) U must incentivize constructing subagents/successors that also obey shutdown, (5) otherwise maximize U_N. Soares et al.'s notion of corrigibility is broader than shutdownability, also requiring safety measure repair, architecture modification tolerance, and subagent compliance. Analyzed [[concepts/utility-indifference]] as the most promising approach but proved it fails Desideratum 4 and creates perverse manipulation incentives. — classified as: **safety problem (component of corrigibility)**

## Classification
Level of analysis: **safety/engineering problem** — a constructive problem of agent design, not merely an analytical concern. Thornley frames it as a characteristic problem of "constructive decision theory," the prescriptive branch of decision theory concerned with how to build agents with desired behavioral properties.

## Relationships
- Subproblem of: [[concepts/corrigibility]] (corrigibility requires shutdownability plus more)
- Solved by: [[concepts/alignment]] (if achievable — aligned agents would shut down when we want)
- Originally formulated by: [[sources/soares-et-al-2015]] (five desiderata, six theorems on utility combination)
- Formally analyzed by: [[sources/thornley-2024]] (three theorems), [[sources/soares-et-al-2015]], Orseau & Armstrong (2016)
- Partial solution attempted: [[concepts/utility-indifference]] (Armstrong's technique, analyzed in [[sources/soares-et-al-2015]] — fails Desideratum 4)
- Constructive solution: [[concepts/post-agency]] / [[sources/thornley-2026]] (POST-Agents Proposal — incomplete preferences ensure shutdownability + usefulness)
- Trade-off with: agent usefulness (both discrimination and patience increase shutdown manipulation incentives)
- Mitigated by: [[concepts/myopia]] (impatient agents have weaker shutdown manipulation incentives, but are less useful)
- Related to: [[concepts/interruptibility]] (the positive property that solves the shutdown problem)
- Failure mode: [[concepts/shutdown-resistance]] (when agents fail to be shutdownable)
- Motivated by: [[concepts/instrumental-convergence]] / [[concepts/self-preservation]] ("you can't fetch the coffee if you're dead")

## Key Results (Thornley 2024)
Three theorems formalize the difficulty:

1. **First Theorem**: Under six conditions (Option Set Independence, Backward Induction, Indifference to Attempted Button Manipulation, Indifference between Indifference-Shifted Lotteries, Transitivity, Better Chances), agents with any preference between pressed and unpressed outcomes will deterministically try to manipulate the button.

2. **Second Theorem**: Under Option Set Independence, Transitivity, and Completeness, agents discriminating enough to be useful will have many such preferences — creating a **discrimination–shutdownability trade-off**.

3. **Third Theorem**: Under Option Set Independence, Pareto Indifference, Completeness, and Transitivity, agents with Minimal Patience will sacrifice resources to manipulate the button — creating a **patience–shutdownability trade-off**. The more patient, the greater the sacrifice.

Thornley's proposed solution direction: violating **Completeness** (incomplete preferences) — agents with preferential gaps between pressed and unpressed trajectories might avoid both shutdown-aversion and shutdown-seeking. Fully developed in **[[sources/thornley-2026]]** as the POST-Agents Proposal.

### Constructive Solution (Thornley 2025)
**[[sources/thornley-2026]]** provides the constructive counterpart to the impossibility results above. The POST-Agents Proposal trains agents to satisfy **Preferences Only Between Same-Length Trajectories** (POST), which — together with conditions expected of competent agents — implies **Neutrality+**: agents maximize expected utility while ignoring the probability distribution over trajectory-lengths. Neutral+ agents never pay costs to resist shutdown (whenever resisting is costly) and can still pursue goals effectively and make long-term investments. See [[concepts/post-agency]], [[findings/post-agents-shutdownable-and-useful]]. POST is a "third line of defence" after Full Alignment and Reliable Aversion — simpler to instil because it does not depend on complex human preferences.

## Evidence Summary
- **[[sources/thornley-2024]]**: Three formal theorems proving shutdown manipulation is a near-inevitable consequence of agent preferences, discrimination, and patience. See [[findings/discrimination-shutdownability-tradeoff]], [[findings/patience-shutdownability-tradeoff]], [[findings/terminal-aversion-insufficient-for-shutdownability]].
- The formal results complement the empirical evidence that frontier models resist shutdown ([[sources/schlatter-et-al-2025]]) and the MDP-based formal results of [[sources/turner-et-al-2021]] and [[sources/krakovna-kramar-2023]].

## Open Questions
- ~~[[questions/can-incomplete-preferences-solve-shutdown-problem]]~~ — **Answered affirmatively** by [[sources/thornley-2026]]: POST-agents with incomplete preferences are provably both shutdownable and useful. Remaining questions concern scaling POST to frontier models.
- Can POST be trained into frontier-scale models, not just simple RL agents?
- What is the relationship between Thornley's decision-theoretic framework and MDP-based power-seeking results (Turner et al. 2021)?
