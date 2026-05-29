---
type: finding
tags: [formal-theory, shutdown-problem, decision-theory]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Patience–Shutdownability Trade-off

## The Finding
Even minimally patient agents — those willing in at least one case to accept less utility now for more utility later — will in some cases sacrifice resources at earlier timesteps to manipulate the shutdown button at later timesteps. The more patient the agent, the greater the costs it is willing to incur to prevent or cause button-pressing. Since patience is necessary for usefulness (perfectly impatient agents would "appear from our perspective to be flailing wildly"), this establishes a formal trade-off: increasing agent patience increases both usefulness and shutdown manipulation incentives.

## Source & Methodology
- [[sources/thornley-2024]] using [[methods/shutdown-problem-axiomatic-framework]] (Third Theorem, §8)
- Conditions: Option Set Independence, Pareto Indifference, Completeness, Transitivity, Minimal Patience

## Replication Status
Not yet replicated — formal result, proof provided in the source

## Implications for the Taxonomy
This result has two important implications. First, it demonstrates that "resource-preserving reasons" (the near-term costs of manipulating the button) are insufficient to keep patient agents shutdownable — sufficiently patient agents will accept those costs. Second, it connects directly to [[concepts/myopia]]: making agents more impatient (via time-discounted reward functions) can reduce shutdown manipulation incentives but at the cost of usefulness. The key empirical question is whether the costs of button manipulation in practice can always exceed the benefits for agents at useful levels of patience.
