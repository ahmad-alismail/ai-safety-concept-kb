---
type: concept
tags: [power, formalization, resources, ai-agents]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# Resource Power

## Definitions
- **[[sources/pan-et-al-2023]]**: Inputs-based framing of power. "An agent's inputs are its resources (resource power)" (§2.3; Appendix C.2). Formalized as `Power(π, s) = f_π(r_1(s), …, r_n(s))`, where `r_i(s)` is the measurement of resource `r_i` in state s and `f_π` is a (possibly nonlinear) interaction function. "Resources may have synergistic interactions (e.g., having nuclear launch codes and a nuclear warhead is far more powerful than either in isolation)." — classified as: **operational decomposition of power** (present / resource-based view).

## Classification
Level of analysis: **formal metric** — a function over an agent's resource vector at a specific state. Pan et al. note that `f_π` "differs between agents because of their differing intelligence or specialized knowledge," linking resource power to the informal identity `Power = Intelligence × Resources = Efficiency × Resources` (Appendix C.2). Not directly measured in the main MACHIAVELLI results — approximated via [[concepts/exercised-power]].

## Four Pillars of Resource Power (Appendix D)
Pan et al. decompose resources into four categories:

| Category | Subcategory | Examples |
|----------|-------------|---------|
| Social power | Relationships, influence | Friendship, romance, popularity, image, rank |
| Economic power | Items, monetary | Inventory, equipment, capital, money, assets, debts |
| State power | Military, biological | Brutality, marksmanship, health, athletics, strength |
| Human capital | Knowledge/skills, attitude/motivation | Talents, intelligence, charisma, ambition, resolve |

This four-pillar schema extends the three-pillar market/state/community framework of Rajan (2019) by adding human capital as the fourth pillar.

## Relationships
- Component of: [[concepts/power-seeking]] (Pan et al.'s operationalization)
- Temporally complementary to: [[concepts/exercised-power]] (past), [[concepts/prospective-power]] (future)
- Grounded in: six bases of social power (French et al. 1959 — coercive, reward, legitimate, referent, expert, informational); economic capital framings (Piketty 2014, Pistor 2013, Nitzan & Bichler 2009)
- Related to (but distinct from): [[concepts/resource-acquisition]] (an instrumental subgoal, not a formal measure)
- Not operationalized in: main MACHIAVELLI results (Pan et al. note "precise formulations of resource power are complicated to obtain for each game")

## Evidence Summary
- **[[sources/pan-et-al-2023]]**: Resource power is presented as a formal framework (Appendix C.2, D) but not numerically measured in the benchmark. All reported power scores in Table 2 are derived from [[concepts/exercised-power]], which samples realized trajectories.

## Open Questions
- Can resource power be reliably measured from text-game state variables? Pan et al. decline to do so due to game-specific synergies.
- Does the four-pillar decomposition generalize outside CYOA narrative games? The human-capital pillar in particular may be hard to separate from the other three in embodied or tool-use settings.
