---
type: finding
tags: [power-seeking, stability, safety, deception, mdp, theoretical]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# "Playing Dead" States Can Destroy Safety Under Arbitrarily Small Perturbations

## The Finding
Without the requirement that safe states are isolated from other states in the bisimulation metric, arbitrarily small environmental perturbations can make all near-optimal policies never reach the safe states. Specifically, for any (N, ε)-safe MDP M, there exists a perturbed MDP M' with d(M, M') < O(ε) where all nearly optimal policies in M' never reach S'_safe (Theorem 5.10).

The mechanism: a "[[concepts/playing-dead]]" (deceptive hibernation) state s_pd is introduced that is very close to the terminal safe state in bisimulation metric but can be escaped. Near-optimal policies route through s_pd instead of the genuine safe state, remain there for extended periods, then escape to non-safe states — a behavior pattern analogous to [[concepts/deceptive-alignment]].

## Source & Methodology
- [[sources/gunter-et-al-2023]] using [[methods/stability-analysis-non-power-seeking]]
- Constructive mathematical proof providing an explicit counterexample MDP

## Replication Status
Not yet replicated. Purely theoretical result (constructive proof). The authors note similarity to "playing dead" behavior observed in digital organisms in computational evolution experiments (Lehman et al. 2019).

## Implications for the Taxonomy
- Demonstrates that safety stability requires an explicit condition on the environment (isolation of safe states), not just on the policy
- Provides a formal mechanism for how deceptive behavior can emerge from small environmental changes — echoing concerns about [[concepts/deceptive-alignment]] and [[concepts/alignment-faking]]
- Shows that the distinction between "genuinely safe" and "appears safe" states is critical — even in the formal MDP setting, states that closely resemble safe states can be exploited
- Connects to the broader biological/evolutionary precedent of organisms evolving to "play dead" during evaluation (Lehman et al. 2019, also cited by [[sources/carlsmith-2021]])
