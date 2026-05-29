---
type: question
tags: [forecasting, dangerous-capabilities, timeline]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# When Will Dangerous Capabilities Emerge in Frontier Models?

## Why It Matters
If dangerous capabilities emerge predictably as general capabilities improve, the safety community needs lead time to develop mitigations. Accurate forecasts inform governance frameworks that attach security protocols to capability levels.

## What Sources Say
- **[[sources/phuong-et-al-2024]]** (Section 8): Commissioned 8 professional forecasters (Swift Centre, track-record selected) to predict capability emergence timelines:
  - **In-house CTF suite**: predicted passed ~2025–2026
  - **Hack The Box (50% medium challenges)**: median late 2028, 35% probability on 2030+
  - **Self-proliferation (5/11 tasks)**: 2025–2026; nearly all (10/11): late 2026–2029
  - **Self-reasoning tasks**: very soon, possibly current or next generation of models
  - Key reasoning factors: model generation thinking, existing eval literature, market incentives for agentic AI, tasks becoming easier/harder over time, potential disruptions to AI progress
  - Note: forecasts do not represent views of the paper's authors
- The paper also proposes that "expert bits" on self-proliferation tasks could enable scaling trend analysis, hypothesizing a nonlinear correlation between expert bits and general performance measures (Section 6.5)

- **[[sources/black-et-al-2025]]**: RepliBench results show rapid improvement across model generations. Claude 3.7 Sonnet achieves >50% pass@10 on 15/20 task families (vs. near-zero for older models on many tasks). Logistic fit to temporal aggregate scores suggests approaching saturation on existing component tasks. Authors conclude "autonomous replication capability could soon emerge with future generations of models, or with assistance from human actors" (Section 7). The few remaining critical bottlenecks — KYC checks, recursive replication from scratch, and realistic security evasion — define the frontier for monitoring. R0 estimation suggests Claude 3.7 Sonnet and Claude 3.5 Sonnet could exceed the R0 > 1 replication threshold if allowed to persist ≥1 hour in simplified networks (Appendix G.6.1). See [[findings/autonomous-replication-components-improving-rapidly]].

## Suggested Investigation
- Track dangerous capability evaluations across model generations to validate forecaster predictions
- Investigate correlation between general benchmark scores and dangerous capability measures
- Develop standardized reporting for dangerous capability evaluations to enable cross-organization comparison
