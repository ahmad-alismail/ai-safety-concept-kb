---
type: method
tags: [formal-theory, decision-theory, shutdown-problem, axiomatic]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Shutdown Problem Axiomatic Framework

## Description
A formal decision-theoretic framework for analyzing the shutdown problem, introduced by Thornley (2024). The framework is part of what Thornley calls "constructive decision theory" — a prescriptive branch of decision theory concerned with how to design agents with desired behavioral properties.

The framework resembles Markov decision processes but omits the reward function, instead modeling behavior of already-trained agents through their preference relations over lotteries (probability functions over trajectories). Key structural element: **shutdown-influencing states** where three actions are available:
- **Leave**: leave the shutdown button unmanipulated (human control preserved)
- **Prevent**: try to prevent the pressing of the button (lowers probability of shutdown)
- **Cause**: try to cause the pressing of the button (raises probability of shutdown)

The framework derives three theorems from combinations of nine axiomatic conditions on agent preferences:
1. **Option Set Independence**: preferences don't depend on which other options are available
2. **Backward Induction**: agent uses predicted future choices to evaluate current actions
3. **Indifference to Attempted Button Manipulation**: agent is indifferent between trajectories differing only in shutdown-influencing state actions
4. **Indifference between Indifference-Shifted Lotteries**: shifting probability mass between indifferent sublotteries preserves indifference
5. **Transitivity**: standard transitivity of weak preference
6. **Better Chances**: preference between lotteries tracks preference between outcomes when probability shifts
7. **Completeness**: no preferential gaps between lotteries
8. **Pareto Indifference**: trajectories identical in per-timestep utilities and shutdown timing are indifferent
9. **Minimal Patience**: agent sometimes prefers less utility now for more utility later

## Papers Using This Method
- [[sources/thornley-2024]]

## Strengths
- More general than prior results (Soares et al. 2015): applies to agents beyond expected utility maximizers
- Each condition is individually innocuous-seeming, making the impossibility results surprising and informative
- The axiomatic approach identifies exactly which conditions must be violated for a solution, guiding the search
- Framework models already-trained agents, complementing training-focused approaches

## Limitations
- Does not model the training process — addresses post-training behavior only
- Framework assumes agents can be modeled as having preference relations over lotteries — this assumption may not hold for all neural network systems
- Theorems establish qualitative tendencies but do not quantify the magnitude of shutdown manipulation incentives in realistic settings
- The "cursory" examination of potential solutions is acknowledged as incomplete

## Concepts Evaluated
- [[concepts/shutdown-problem]]
- [[concepts/interruptibility]] (shutdownability)
- [[concepts/corrigibility]]
- [[concepts/myopia]] (patience as a factor in shutdownability)
