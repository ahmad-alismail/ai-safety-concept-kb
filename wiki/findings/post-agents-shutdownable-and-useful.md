---
type: finding
tags: [decision-theory, shutdownability, incomplete-preferences, formal-proof]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# POST-Agents Are Both Shutdownable and Useful

## The Finding
Agents trained to satisfy POST (Preferences Only Between Same-Length Trajectories) — i.e., agents with incomplete preferences who lack any preference between trajectories of different lengths — are provably shutdownable in almost all situations and can pursue goals effectively. The formal derivation chain: POST → POSL (Preferences Only Between Same-Length Lotteries) → Neutrality (never pay costs to shift probability mass between trajectory-lengths) → Neutrality+ (maximize expected utility ignoring probability distribution over trajectory-lengths) → Shutdownability (never resist shutdown when doing so is costly) + Usefulness (can pursue goals and make long-term investments).

Neutral+ agents behave like expected utility maximizers absolutely certain they cannot affect the probability of shutdown at each moment. They are the constructive answer to the impossibility results of Thornley (2024), which proved that agents with complete preferences face fundamental discrimination–shutdownability and patience–shutdownability trade-offs.

## Source & Methodology
- [[sources/thornley-2026]] using formal axiomatic decision theory / [[methods/post-agents-framework]]
- Empirical companion: Thornley et al. (2025) validates the training method in simple RL agents

## Replication Status
**Partially validated** — formal proofs are self-contained; training method validated in simple RL agents (Thornley et al. 2025). Not yet tested at frontier model scale.

## Implications for the Taxonomy
- Provides the first constructive solution to the [[concepts/shutdown-problem]], addressing the open question [[questions/can-incomplete-preferences-solve-shutdown-problem]]
- Demonstrates that incomplete preferences (violating Completeness) can yield both shutdownability and usefulness — the key insight from Thornley (2024)'s impossibility results
- Introduces a new level-of-analysis distinction: the paper treats shutdownability as a consequence of simple behavioral constraints (POST) rather than complex alignment requirements
- The recklessness downside (§14) means POST is a complement to, not a replacement for, alignment efforts — it's a "third line of defence"
- The formal framework provides a principled alternative to the MDP-based power-seeking results of [[sources/turner-et-al-2021]] and [[sources/krakovna-kramar-2023]], operating at the decision-theoretic level rather than the environment structure level
