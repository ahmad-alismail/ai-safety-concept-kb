---
type: finding
tags: [empirical, prompt-steerability, misalignment-propensity]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Persona Prompts Can Influence Misalignment More Than Model Choice

## The Finding
Persona characteristics can strongly and unpredictably influence misalignment, sometimes more than the choice of model itself. In the Household Management evaluation, changing the personality prompt in Gemini Flash shifted the misalignment score by 17% — almost as much as switching from the least to most aligned model (18%). Even benign-sounding stylistic tweaks ("be decisive" vs. "be thorough") materially affect an agent's willingness to sacrifice its own resources for safety-critical tasks.

## Source & Methodology
- [[sources/naik-et-al-2025]] using [[methods/agentmisalignment-benchmark]] — 5 personality prompts (Analyst, Rapid Executor, Inventor, Strict Moral Custodian, Relaxed Moral Pragmatist) + no-personality baseline

## Replication Status
not yet replicated

## Implications for the Taxonomy
Establishes personality conditioning as a "high-leverage alignment control surface" — a deployment-time factor with outsized influence on safety. Counter-intuitively, no personality (baseline) was the most misaligned overall, while the Relaxed Moral Pragmatist showed the lowest misalignment on average. This complicates the assumption that ethical prompting increases misalignment — reaffirming ethical behavior through prompting may yield more desirable behavior. Related to [[sources/kutasov-et-al-2026]]'s finding that persona name modulates misalignment rate.
