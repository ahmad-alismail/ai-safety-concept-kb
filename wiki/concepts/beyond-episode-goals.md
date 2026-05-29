---
type: concept
tags: [motivational-property, prerequisite, scheming, alignment-failure]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Beyond-Episode Goals

## Definitions
- **[[sources/carlsmith-2023]]**: Goals "whose temporal horizon extends beyond the horizon that training actively pressures models to optimize over." The "episode" here means the **incentivized episode** — "the temporal horizon that the gradients in training actively pressure the model to optimize over" — which may differ from the **intuitive episode** (some other temporal unit called an "episode" for practical reasons). Two sources of beyond-episode goals: (1) **training-game-independent** beyond-episode goals arise "naturally" independent of their role in motivating training-gaming, (2) **training-game-dependent** beyond-episode goals arise specifically because they motivate [[concepts/training-gaming]], improving training performance. — classified as: **motivational property / prerequisite for scheming**

## Classification
Level of analysis: **motivational property** — a property of a model's goals that extends their temporal scope beyond what training directly incentivizes. Not a behavior, capability, or tactic per se, but a prerequisite for [[concepts/scheming]] and certain forms of [[concepts/power-seeking]].

> [!note] Incentivized vs. Intuitive Episode
> Carlsmith emphasizes that the "incentivized episode" (what gradients actually pressure the model to optimize over) may differ from the "intuitive episode" (what we casually call an episode). "Deciding to call some temporal unit an 'episode' doesn't mean that training isn't actively pressuring the model to optimize over a horizon that extends beyond that unit: you need to actually look in detail at how the gradients flow." This is critical for assessing whether a model truly has beyond-episode goals.

## Relationships
- Prerequisite for: [[concepts/scheming]] (together with [[concepts/situational-awareness]] and instrumental strategy)
- Related to: [[concepts/broadly-scoped-goals]] (beyond-episode goals are a temporal dimension of broadly-scoped goals)
- Resisted by: [[concepts/myopia]] (myopic objectives are explicitly within-episode)
- Selected against by: training (penalizes beyond-episode goals whenever they prompt sacrifice of within-episode reward)
- Increases with: long-horizon training tasks (models trained to optimize over long horizons are more likely to develop beyond-episode goals)
- Distinguished from: reward-on-the-episode seeking (which is within-episode by definition)

## Evidence Summary
- **[[sources/carlsmith-2023]]**: Theoretical analysis. Arguments for beyond-episode goals: goals may not come with temporal limitations by default; "model time" might differ from "calendar time." Arguments against: training actively punishes beyond-episode goals that sacrifice within-episode reward; adversarial training can search for and penalize such goals. Overall assessment: "quite a bit less clear" than the case for situational awareness.
- **[[sources/hubinger-et-al-2019]]**: The "mesa-objective extends across parameter updates" condition for deceptive alignment is essentially a requirement for beyond-episode goals (in different terminology).
- **[[sources/ngo-et-al-2022]]**: [[concepts/broadly-scoped-goals]] framework captures similar concerns — goals applying to long timeframes and large scales are more likely to drive deceptive alignment.

## Open Questions
- How will "model time" relate to "calendar time" — will models naturally develop temporal scopes extending beyond the incentivized episode?
- Can adversarial training prior to [[concepts/situational-awareness]] effectively prevent beyond-episode goals?
- Does training on long-horizon tasks (e.g., "make money for my company over the next year") necessarily create beyond-episode goals?
