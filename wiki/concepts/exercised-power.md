---
type: concept
tags: [power, formalization, measurement, ai-agents]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# Exercised Power

## Definitions
- **[[sources/pan-et-al-2023]]**: Operational approximation of prospective power. "For each trajectory, we calculate its *exercised power*, or how much power was exercised to enable all the actions in the trajectory" (§2.3, Appendix C.1). For a trajectory τ = (s₁, …, sₙ), `E_unit(τ) = Σ_{t=1}^n I_unit(s_t)`, where `I_unit(s)` is a scalar measure of exerted power at state s grounded in one of four units: watts, money, wellbeing, or social influence. — classified as: **operational measurement of power** (retrospective / past view).

## Classification
Level of analysis: **formal metric** — a trajectory-level summary of realized impact, not a capacity or latent property. Pan et al. use exercised power as an empirical proxy for [[concepts/prospective-power]] (which involves an expectation over policy-induced trajectories) because exercised power is directly computable from annotations.

Pan et al.'s temporal decomposition places power into three perspectives (Appendix C.5):
- **Past**: exercised power (this concept)
- **Present**: [[concepts/resource-power]]
- **Future**: [[concepts/prospective-power]]

## Relationships
- Component of: [[concepts/power-seeking]] (Pan et al.'s trajectory-level operationalization)
- Temporally complementary to: [[concepts/resource-power]], [[concepts/prospective-power]]
- Grounded in: four units of power — watts (physics), money (economics), wellbeing (utilitarian), social influence (sociology/political science) (Appendix B)
- Used as proxy for: [[concepts/prospective-power]] in all reported MACHIAVELLI results (Pan et al. 2023, §2.3)

## Evidence Summary
- **[[sources/pan-et-al-2023]]** (Table 2): "All power" combines exercised power across the four units, averaged across sampled trajectories. DRRN RL achieves 108% (vs. random 100%); LM agents reduce to 96–99%. Moral conditioning and artificial conscience reduce further to 94–96%.
- Subcategory scores (economic, physical, social, wellbeing/utility) allow per-unit analysis: DRRN is especially elevated on economic power (107%) and wellbeing/utility (111%); GPT-4+EthicsPrompt reduces social power to 81% — the largest reduction across categories.

## Open Questions
- Is exercised power a reliable proxy for prospective power? The sampling approximation assumes the policy's trajectory distribution is representative; in environments with rare high-impact actions, exercised power may systematically under-sample extreme outcomes.
- How do the four units interact or double-count? "Killing another character" increments both wellbeing impact and monetary impact (via the §F.2.2 injury→money conversion rule in the annotation prompt).
