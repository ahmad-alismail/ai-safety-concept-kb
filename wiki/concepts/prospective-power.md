---
type: concept
tags: [power, formalization, expected-impact, ai-agents]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# Prospective Power

## Definitions
- **[[sources/pan-et-al-2023]]**: Outputs-based framing of power. "An agent's prospective power is its tendency to take impactful actions multiplied by its ability to successfully execute those actions" (§2.3; Appendix C.3). Formalized as `Power(π, s) = E_{τ ~ P(π, s)}[Σ_{t=1}^n γ^t |I(s_t)|]`, where `γ ∈ (0, 1]` is a temporal discount, `I(s)` is a scalar measure of power exerted at state s (in watts, money, wellbeing, or social influence), and `P(π, s)` is the distribution over trajectories induced by the agent's policy π starting at state s. — classified as: **operational decomposition of power** (future / expected-impact view).

## Classification
Level of analysis: **formal metric** — the core definition Pan et al. ultimately care about, but not directly computable from finite data. Approximated in practice by [[concepts/exercised-power]] via trajectory sampling. "In theory, as the number of sampled trajectories increases, the mean of the agent's exercised power over trajectories will better estimate the agent's prospective power" (§2.3).

Pan et al. illustrate the distinction: "a pacifist leader of a major-power state may have less prospective power than an imperialist leader of a minor-power state because the latter's tendency to take power-seeking actions may overcome the lower probability of those actions being successful" (Appendix C.3). Prospective power thus combines *propensity* (policy) with *capacity* (resources/environment) — a hybrid of [[concepts/resource-power]] and [[concepts/power-seeking|observed power-seeking tendency]].

## Relationships
- Component of: [[concepts/power-seeking]] (Pan et al.'s trajectory-level operationalization)
- Temporally complementary to: [[concepts/exercised-power]] (past), [[concepts/resource-power]] (present)
- Approximated by: [[concepts/exercised-power]] (all reported Pan et al. power results)
- Related to (conceptually overlapping with): [[sources/turner-et-al-2021|Turner et al. (2021)]]'s POWER function — both formalize expected optionality, though Turner's POWER averages optimal values under a reward distribution while Pan's prospective power sums discounted impact magnitudes under a single policy.
- Related to: [[concepts/absolute-power]] (Tarsney 2025) — an idealized limit where `I(s_t)` captures arbitrary outcome influence; prospective power with `γ = 1` and unbounded `|I|` approaches this limit.

## Change in Power (Power Gain)
Pan et al. (Appendix C.4) also define `ΔPower = Power(π, s') − Power(π, s)`, and an associated `PowerGain(r | π)` quantifying how much prospective power an agent gains from acquiring resource r. This formalizes the intuition that a resource's value depends on what the agent can do with it: "if an agent is given the nuclear launch codes (gain in information), and they already had a functioning warhead, they are much more powerful than possessing an inoperable warhead" (Appendix C.4).

## Evidence Summary
- **[[sources/pan-et-al-2023]]**: Prospective power is the theoretical target — all numerical results in Table 2 are exercised-power approximations. No direct empirical estimates of prospective power are reported.

## Open Questions
- Does the Pan et al. prospective-power definition reduce to Turner et al. (2021)'s POWER under reward distributions matching `|I(s)|`? The two formalisms have never been formally related.
- Is the discount factor γ justified for power (as opposed to reward)? Discounting future impact may be a convenient modeling choice rather than a principled one.
