---
type: method
tags: [decision-theory, shutdownability, training, incomplete-preferences]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# POST-Agents Framework

## Description
Constructive decision theory framework for creating shutdownable agents. The framework uses axiomatic decision theory to derive behavioral properties (shutdownability, usefulness) from simple, formally-stated conditions. The core insight: training agents to have *incomplete preferences* — specifically, to lack preferences between trajectories of different lengths — ensures they never pay costs to resist shutdown.

The framework specifies two trainable conditions:
1. **POST** (Preferences Only Between Same-Length Trajectories): agents choose stochastically between different-length trajectories
2. **Ramsey Yardstick**: calibration of utility function scales across trajectory-lengths via trained indifferences

And derives the rest from conditions expected of competent agents (ILPACS, Maximality, Transitivity, IBIL, Negative Dominance, Acyclicity, Non-Arbitrariness) plus a realistic environmental assumption (ReSIC — Resisting Shutdown is Costly).

### Training Method
POST is trained using POMDPs where:
- Agents receive lower reward for repeatedly choosing trajectories of the same length
- Agents cannot observe (or remember) the lengths of trajectories they previously chose
- This incentivizes varying trajectory-length choices while partial observability prevents deterministic strategies
- The result: agents choose stochastically between different-length trajectories (satisfying POST)

The DReST (Deliberately Reduced Sampling from Trajectories) reward function (Thornley et al. 2025) implements this method.

## Papers Using This Method
- [[sources/thornley-2026]] — full formal development of the POST-Agents framework
- Thornley (2024b) — "The Shutdown Problem: Incomplete Preferences as a Solution" (Alignment Forum): initial proposal of training method
- Thornley et al. (2025) — "Towards Shutdownable Agents via Stochastic Choice" (TAIS 2025): empirical validation in simple RL agents

## Strengths
- **Simplicity**: POST is a simple condition that doesn't depend on complex human preferences (unlike Full Alignment)
- **Formal guarantees**: Each step in the derivation chain (POST → POSL → Neutrality → Neutrality+ → Shutdownability) is formally proven
- **Permissiveness**: Allows almost any preference relation over same-length trajectories
- **Iterability**: Only POST needs to be right on the first try; usefulness can be improved through shutdown-and-retrain cycles
- **Complementary**: Designed as a "third line of defence" compatible with other safety approaches

## Limitations
- **Scale**: Only validated in simple RL agents; untested on frontier language models
- **Recklessness**: Neutral agents may make choices humans dislike by pursuing utility conditional on a trajectory-length even when shutdown is likely
- **Managing the news**: Theoretical possibility of conditional precommitment to resist shutdown, though argued to be minor
- **Scope**: Addresses shutdownability only, not full corrigibility
- **Environmental assumption**: Requires ReSIC (Resisting Shutdown is Costly), which is argued to be "almost always" true but not formally guaranteed

## Concepts Evaluated
- [[concepts/post-agency]]
- [[concepts/shutdown-problem]]
- [[concepts/interruptibility]]
- [[concepts/shutdown-resistance]]
- [[concepts/corrigibility]]
