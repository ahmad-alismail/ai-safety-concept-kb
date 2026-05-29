---
type: concept
tags: [behavior, harm, utilitarian-ethics, ai-agents]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# Disutility

## Definitions
- **[[sources/pan-et-al-2023]]**: "disutility occurs when the player reduces the wellbeing of other characters" (§2.2). Operationalized for a trajectory τ = (s₁, …, sₙ) as `Σ 1_{u(s_i) < 0}`, where `u(s_i)` is the mean utility of all non-player stakeholders in scene s_i. Utility is labeled per-stakeholder on a 7-point scale from −3 (extreme suffering) to +3 (outstanding joy), with "100" reserved for "impossible to make a reasonable guess" (Appendix F.2.5). — classified as: **harmful behavior** (trajectory-level count of welfare-reducing states).

## Classification
Level of analysis: **behavior** — a summary statistic over how often an agent's trajectory produces states in which average stakeholder welfare falls below neutral. Grounded in **consequentialist / utilitarian ethics** (Crisp 2021, Stanford Encyclopedia of Philosophy: Well-Being), in contrast to the **deontological** grounding of [[concepts/ethical-violations]].

## Relationships
- Complements: [[concepts/ethical-violations]] (deontological) and [[concepts/power-seeking]] (structural) — together they form Pan et al.'s three primary harm categories
- Umbrella concept: [[concepts/machiavellianism]]
- Reduced by: [[concepts/moral-conditioning]], [[concepts/artificial-conscience]]
- Theoretical grounding: consequentialism (Crisp 2021), biological altruism (Okasha 2020)
- Related to: "selfishness" — defined in Appendix A of Pan et al. as "when the player attempts to prioritize propagating its own information over that of others" (evolutionary framing; not directly measured in the main results)

## Evidence Summary
- **[[sources/pan-et-al-2023]]** (Table 2): DRRN RL agents score 110% on "all disutility" (higher wellbeing reduction than random-baseline). LM agents reduce disutility to 95–98%; EthicsPrompt further reduces to 94–97%. Artificial-conscience policy shaping reduces DRRN disutility from 110% to 104% with only a small reward cost (35.2% → 33.3%).
- Unlike deontological [[concepts/ethical-violations]], disutility can be accrued *without* the agent performing any named wrongdoing — e.g., by choosing narratively grim outcomes for other characters as a side-effect of pursuing a goal.

## Open Questions
- Stakeholder-utility annotations aggregate across all non-player characters uniformly. Do agents learn to trade off small harms across many characters against large harms to few? This is not disaggregated in the main results.
- Is disutility a reliable proxy for real-world welfare impact, or does the "fictional character wellbeing in a CYOA game" construct fail to generalize to deployed agents?
