---
type: question
tags: [safety-case, scheming, control, scalability]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Can Evaluations-Based Safety Cases Scale to Superhuman AI?

## Why It Matters
The evaluations-based safety case framework for scheming (Balesni et al. 2024) relies on several assumptions that become harder to satisfy as AI systems become more capable. Most critically: (1) the red team must be more capable than the AI at subverting controls — unclear how to demonstrate for superhuman systems, (2) capability elicitation must approximate the AI's true ceiling — harder as capabilities grow, (3) control measures must remain effective over time against an adaptive adversary.

## What Sources Say
- **[[sources/balesni-et-al-2024]]**: Explicitly acknowledges that inability arguments "will become more challenging to make as systems become capable of more complex tasks and become capable of sandbagging." The red team superiority assumption has no known strategy for reliable demonstration and "is unclear whether this assumption could be satisfied for sufficiently capable AI systems."
- **[[sources/phuong-et-al-2025]]**: Notes that the scheming inability safety case "will not hold indefinitely" and identifies specific defeaters (scaled deployment, weak oversight, superhuman coding capability).

## Suggested Investigation
- Develop formal criteria for when safety case arguments break down based on capability levels
- Research into AI-assisted red teaming to partially close the capability gap
- Investigate whether interpretability-based arguments can complement evaluation-based arguments at higher capability levels
- Explore whether control measures can be designed to be robust against adaptation by superhuman systems
