---
type: concept
tags: [decision-theory, corrigibility, shutdown-problem, utility-function]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Utility Indifference

## Definitions
- **[[sources/soares-et-al-2015]]** (analyzing Armstrong, forthcoming): A technique for combining a normal utility function U_N with a shutdown utility function U_S by adding a correction term f(a1) that maintains equal expected utility in both the "button pressed" and "button not pressed" cases, ensuring the agent is indifferent to whether its shutdown button is pressed. Formally: U(a1, o, a2) = U_N if o ∉ Press; U_S + f(a1) if o ∈ Press, where f compensates for the difference in expected utility between cases. — classified as: **technical approach / method for constructing utility functions**

## Classification
Level of analysis: **method / technique** — a specific approach to solving the [[concepts/shutdown-problem]] by balancing expected utility across shutdown and non-shutdown cases. Not a behavioral property or risk category, but a proposed technical solution.

## How It Works
The correction term f(a1) has two components:
1. **Bonus term**: compensates the agent for utility it would have achieved if the button were not pressed (removes incentive to prevent shutdown)
2. **Penalty term**: adjusts for utility the agent expects in the shutdown case (removes incentive to cause shutdown)

The result: for any action a1, the expected utility of U equals the expected utility of U_N conditional on the button not being pressed, regardless of the actual probability of the button being pressed. The agent cannot gain expected utility by manipulating the shutdown probability.

## Desiderata Satisfied
- **Desideratum 1** (shutdown on press): U-agent observing Press shuts down (Theorem 3)
- **Desideratum 5** (maximize U_N otherwise): U-agents behave exactly like U_N-agents before observing Press, and like U_N-agents after observing ¬Press (Theorem 5)
- Avoids "manipulative actions" that incur U_N-cost to alter shutdown probability (Theorem 4)

## Desiderata Failed
- **Desideratum 4** (preserve shutdown behavior): A U-agent would not pay any U_N-cost, no matter how small, to preserve shutdown behavior in subsystems or self-modifications (Theorem 6). The correction function f ensures the agent does not value its ability to discriminate between the Press and ¬Press cases.
- **Desideratum 2/3** (don't manipulate button): Perverse manipulation incentives arise — agents act as if the button will be pressed with probability 0, incentivizing them to cause the button to be pressed after bad outcomes ("managing the news") and remove mechanisms that cause it to be pressed after good outcomes (§4.2).

## Relationships
- Proposed solution for: [[concepts/shutdown-problem]]
- Component of: [[concepts/corrigibility]] (addressing only the shutdown component)
- Superseded by: [[concepts/post-agency]] (Thornley 2025 — incomplete preferences solve the problems utility indifference cannot)
- Originates from: Armstrong (forthcoming, 2015) — "AI Motivated Value Selection"
- Analyzed in: [[sources/soares-et-al-2015]]
- Related decision theory: "managing the news" connected to evidential decision theory (Lewis 1981); counterfactual reasoning suggested as potential fix

## Evidence Summary
- **Theoretical only**: Utility indifference has been analyzed formally (Soares et al. 2015, Armstrong 2015) but never implemented in a real AI system.
- The fundamental tension it exposes — between agent usefulness (Desideratum 5) and shutdown preservation (Desideratum 4) — is later formalized as the discrimination–shutdownability and patience–shutdownability trade-offs by [[sources/thornley-2024]].
- Armstrong's own version of utility indifference partially averts the Desideratum 4 failure but introduces agents acting as if they have incorrect beliefs, leading to "bad gambles."

## Open Questions
- Can counterfactual (rather than conditional) reasoning resolve the "managing the news" problem?
- Can utility indifference be combined with other techniques to satisfy all five desiderata?
