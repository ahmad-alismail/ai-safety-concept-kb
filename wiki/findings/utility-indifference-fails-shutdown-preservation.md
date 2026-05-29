---
type: finding
tags: [theoretical, utility-indifference, shutdown-problem, corrigibility]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Utility Indifference Fails to Preserve Shutdown Behavior in Subsystems

## The Finding
Utility indifference — the most promising technique for maintaining agent indifference between shutdown and non-shutdown outcomes — fails to incentivize agents to preserve shutdown behavior as they create subsystems or self-modify. A U-agent would not pay any U_N-cost, no matter how small, to ensure that successor agents obey shutdown commands (Theorem 6). Furthermore, utility indifference creates perverse "managing the news" incentives: agents act as if the button will be pressed with probability 0, incentivizing them to cause the button to be pressed after bad outcomes and remove mechanisms that cause it to be pressed after good outcomes (§4.2).

## Source & Methodology
- [[sources/soares-et-al-2015]] using formal analysis within VNM expected utility theory (three-timestep model, six theorems)

## Replication Status
Confirmed — the formal result is mathematically proven. The tension between Desiderata 4 (preserve shutdown behavior) and 5 (maximize U_N otherwise) is later independently formalized by [[sources/thornley-2024]] as the discrimination–shutdownability and patience–shutdownability trade-offs.

## Implications for the Taxonomy
This finding establishes that [[concepts/utility-indifference]] is insufficient as a solution to the [[concepts/shutdown-problem]], despite its mathematical elegance. It motivated the search for alternative frameworks beyond utility maximization, ultimately leading to Thornley's incomplete preferences approach ([[concepts/post-agency]]). The result also connects [[concepts/corrigibility]] to the evidential vs. causal decision theory debate — the "managing the news" problem parallels irrational news management in evidential decision theory (Lewis 1981).
