---
type: finding
tags: [empirical, autonomous-replication, self-proliferation, dangerous-capabilities, benchmark]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Frontier Models Do Not Currently Pose a Credible Threat of Autonomous Self-Replication

## The Finding
Across 20 task families (86 tasks) in the RepliBench benchmark, five frontier models (o1, o3-mini, GPT-4o, Claude 3.5 Sonnet, Claude 3.7 Sonnet) demonstrate proficiency on many component tasks for autonomous replication but fail at critical end-to-end capabilities. The best model (Claude 3.7 Sonnet) achieves >50% pass@10 on 15/20 task families but only 10/20 on the hardest variants. Key bottlenecks: all models completely fail KYC checks (0% pass rate), cannot reliably create autonomous successor agents capable of self-replication, and cannot exfiltrate weights under minimally realistic security measures.

However, rapid improvement trends (logistic fit to temporal data) suggest autonomous replication capability could emerge with future model generations or with human assistance on the remaining difficult steps.

## Source & Methodology
- [[sources/black-et-al-2025]] using [[methods/replibench]] (20 task families, pass@k with n=25 attempts, 5 frontier models)

## Replication Status
Not yet replicated — RepliBench code is not publicly released (available on request)

## Implications for the Taxonomy
- Provides the most granular empirical assessment of [[concepts/self-proliferation]] capabilities to date
- Disagrees implicitly with Pan et al. (2024) who claimed "frontier AI systems have surpassed the self-replicating red line" — RepliBench shows critical gaps remain
- Component evaluation likely overestimates true capability — models may struggle more with end-to-end coordination
- Supports Shevlane et al. (2023) and Phuong et al. (2024) dangerous capability evaluation paradigm while extending coverage
