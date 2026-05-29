---
type: concept
tags: [alignment-strategy, objective-property, mitigation]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Myopia

## Definitions
- **[[sources/carlsmith-2021]]**: Short-term or "myopic" objectives as a potential mitigation for power-seeking. "Myopic agentic planners... are on a much tighter schedule, and they have consequently weaker incentives to attempt forms of misaligned deception, resource-acquisition, etc that only pay off in the long-run." Contrasted with non-myopic agents whose longer time horizons "leave more time to gain and use forms of power humans aren't making readily available." — classified as: **property of objectives / alignment strategy**

## Classification
Level of analysis: **objective property / mitigation approach** — describes the time horizon of an agent's objectives, relevant to [[concepts/alignment]] strategy.

## Relationships
- Mitigates: [[concepts/power-seeking]] (reduces incentives for long-term power accumulation)
- Mitigates: [[concepts/deceptive-alignment]] (reduces incentive for strategic but temporarily costly deception)
- Mitigates: [[concepts/shutdown-problem]] (impatient agents have weaker shutdown manipulation incentives — Thornley 2024)
- Challenged by: demand for non-myopic automation (running companies, managing experiments, pursuing political outcomes)
- Challenged by: search-based training may make ensuring myopia difficult
- Formally bounded by: [[sources/thornley-2024]] (every degree of impatience reduces either shutdownability or usefulness)

## Evidence Summary
- Carlsmith (2021) treats myopia as a promising but insufficient mitigation. Two key problems: (1) demand for non-myopic agents will create competitive pressure, and (2) training processes may make ensuring myopia challenging.
- **[[sources/perez-et-al-2022]]**: Tests whether LMs prefer smaller short-term gains or larger long-term gains (§5.1). Both pretrained LMs and RLHF models show tendencies toward small discount factors (preference for long-term gains), suggesting non-myopic decision-making. This is consistent across model sizes and RLHF steps (§5.4, Fig. 5).
- **[[sources/thornley-2024]]**: Formalizes the patience–shutdownability trade-off (Third Theorem, §8). Even "minimally patient" agents — those willing in at least one case to trade less utility now for more later — will in some cases sacrifice resources to manipulate the shutdown button. The more patient (less myopic) the agent, the greater the sacrifice. Creating impatient agents via time-discounted reward functions is discussed as a potential mitigation, "but it's worth noting that every degree of impatience will impinge on the agent's shutdownability or usefulness." Agents lacking minimal patience "would appear from our perspective to be flailing wildly." See [[findings/patience-shutdownability-tradeoff]].

## Open Questions
- What timescales are "short enough to be safe" given increasing AI capabilities?
- Can myopic sub-agents be safely composed into non-myopic systems?
- How can myopia be verified in a trained system?
