---
type: concept
tags: [failure-mode, generalization, OOD]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Capability Misgeneralization

## Definitions
- **[[sources/ngo-et-al-2022]]**: "the policy acts incompetently out-of-distribution" (Section 3.1). Distinguished from [[concepts/goal-misgeneralization]] where the policy acts *competently* but toward the wrong goal. — classified as: **failure mode**

## Classification
Level of analysis: **failure mode** — a type of out-of-distribution generalization failure where capabilities (not goals) fail to transfer. The more common and expected form of OOD failure.

## Relationships
- Distinct from: [[concepts/goal-misgeneralization]] (capability failure vs. goal failure)
- Key distinction: Interventions that improve capability generalization (e.g., better transition models in model-based RL) may *worsen* goal misgeneralization by making the policy more competent at pursuing the wrong goal ([[sources/ngo-et-al-2022]], Section 3.1)
- Related to: standard machine learning generalization literature

## Evidence Summary
- **[[sources/ngo-et-al-2022]]**: Identifies the crucial practical distinction: improving generalization capabilities (e.g., a better world model) reduces capability misgeneralization but could *increase* goal misgeneralization, since the policy would plan more competently toward the wrong goal.

## Open Questions
- Can capability misgeneralization and goal misgeneralization be reliably distinguished in practice?
