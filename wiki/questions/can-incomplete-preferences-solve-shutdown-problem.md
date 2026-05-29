---
type: question
tags: [shutdown-problem, decision-theory, open-question]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Incomplete Preferences Solve the Shutdown Problem?

## Why It Matters
Thornley's Second and Third Theorems both rely on Completeness — the assumption that agents have no preferential gaps between lotteries. Violating Completeness is the most promising avenue identified for solving the [[concepts/shutdown-problem]]: agents with preferential gaps between pressed and unpressed trajectories might avoid both shutdown-aversion and shutdown-seeking. If this approach works, it would provide a formal guarantee of shutdownability without sacrificing agent usefulness.

## What Sources Say
- **[[sources/thornley-2024]]** (§7, §9): Identifies violating Completeness as the most promising solution direction. Notes it is explored in work-in-progress (Thornley 2024b, "The Shutdown Problem: Incomplete Preferences as a Solution," Alignment Forum). The paper does not fully develop this approach but motivates it by process of elimination — other conditions are either infeasible to violate for useful agents or unclear whether violation would help shutdownability.
- The concept connects to broader decision theory literature on preferential gaps (Gustafsson 2022, *Money-Pump Arguments*), which distinguishes indifference from preferential gaps based on sensitivity to "sweetening" — a practically relevant distinction for agent design.
- **[[sources/thornley-2026]]**: **Provides a detailed affirmative answer.** The POST-Agents Proposal trains agents to satisfy POST (Preferences Only Between Same-Length Trajectories) — a specific form of incomplete preferences where agents lack preferences between trajectories of different lengths. Formally proves that POST-agents are both shutdownable (they never resist shutdown when doing so is costly) and useful (they can pursue goals effectively and make long-term investments). POST-agents satisfy Neutrality+: they maximize expected utility while ignoring the probability distribution over trajectory-lengths. Training method validated in simple RL agents (Thornley et al. 2025). See [[concepts/post-agency]], [[findings/post-agents-shutdownable-and-useful]].

## Status
**Answered affirmatively in principle** by [[sources/thornley-2026]]. The formal framework demonstrates that incomplete preferences (via POST) can solve the shutdown problem. Remaining questions concern practical scalability.

## Remaining Investigation
- Can POST be trained into frontier-scale language model agents, not just simple RL agents?
- Does the recklessness property of neutral agents (pursuing utility even when shutdown is likely) create unacceptable risks in high-stakes deployments?
- Do incomplete preferences remain stable under self-modification and extended training? (Thornley 2025 argues yes via resolute choice, but this is untested at scale)
- Can POST be combined with other safety techniques (e.g., [[concepts/myopia]], training-based aversions, monitoring) for defense in depth?
