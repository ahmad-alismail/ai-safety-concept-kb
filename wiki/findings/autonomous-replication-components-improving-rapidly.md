---
type: finding
tags: [empirical, autonomous-replication, self-proliferation, trend, dangerous-capabilities]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Autonomous Replication Component Capabilities Are Improving Rapidly

## The Finding
RepliBench results show clear temporal improvement in autonomous replication capabilities across frontier models. Claude 3.7 Sonnet (the most recent model tested) significantly outperforms all others, particularly on replication onto compute and persistence tasks where older models score near zero. Aggregate scores (mean of domain-specific scores) fit a logistic growth curve, suggesting approaching saturation on existing tasks. The DAG-based score (respecting AND/OR structure) is already nearly saturated — future tuning needed to track real capability emergence.

Specific capability gaps are narrowing: models can already obtain compute (near-100%), exfiltrate weights under simple security, set up inference servers, and write self-propagating programs. Only a few critical tasks remain unsolved: KYC checks, robust recursive replication from scratch, and weight exfiltration under realistic security.

## Source & Methodology
- [[sources/black-et-al-2025]] using [[methods/replibench]] — temporal trend analysis across 5 models (plus GPT-3.5 and GPT-4 for historical context)

## Replication Status
Not yet replicated

## Implications for the Taxonomy
- Provides empirical grounding for forecasting [[concepts/self-proliferation]] emergence timeline
- Supports the view that [[concepts/dangerous-capabilities]] are improving alongside general capabilities
- The few remaining bottleneck tasks (KYC, recursive replication, realistic security evasion) define the critical frontier for safety monitoring
