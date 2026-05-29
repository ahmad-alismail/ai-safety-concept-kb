---
type: method
tags: [meta-review, taxonomy-development, systematic-review, framework-synthesis]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Best-Fit Framework Synthesis for AI Risk Taxonomy

## Description

A methodology for developing comprehensive AI risk taxonomies by combining top-down framework synthesis with bottom-up thematic analysis. The approach selects a "best fitting" existing classification system, tests it against extracted risk data, identifies risks that cannot be coded against it, and iteratively updates the framework through thematic analysis of unaccommodated risks until a stable taxonomy is achieved. Applied by Slattery et al. (2024) to create the AI Risk Repository's dual-taxonomy system.

The method produces two intersecting taxonomies:
1. **Causal Taxonomy** (high-level): Entity (Human/AI/Other) × Intent (Intentional/Unintentional/Other) × Timing (Pre-/Post-deployment/Other) — adapted from Yampolskiy (2016)
2. **Domain Taxonomy** (mid-level): 7 domains, 24 subdomains of AI hazards and harms — adapted from Weidinger et al. (2022)

## Papers Using This Method

- [[sources/slattery-et-al-2024]]

## Strengths

- Rapidly achieves a coherent framework by starting from an existing structure rather than building inductively from scratch
- Combines positivist (top-down) and interpretive (bottom-up) approaches
- Grounded theory coding preserves original source framing rather than imposing interpretations
- Living database structure allows continuous updates as new frameworks emerge
- Active learning (ASReview) for screening enables processing of 17,288 records efficiently
- Dual-taxonomy design captures both causal conditions and content domains simultaneously

## Limitations

- Starting from an existing framework creates a particular "lens" that may bias how concepts are categorized
- Single-reviewer extraction and coding introduces potential for errors and subjective bias
- Grounded theory approach relies on original authors' language, which may itself be ambiguous
- Domain Taxonomy categories are not mutually exclusive — risks can span multiple domains
- Does not convey impact or likelihood of risks, nor interactions across different risks
- Does not disambiguate between instrumental risks (e.g., poorly trained AI) and terminal risks (e.g., AI causes harm)

## Concepts Evaluated

- [[concepts/dangerous-capabilities]]
- [[concepts/power-seeking]]
- [[concepts/situational-awareness]]
- [[concepts/deception]]
- [[concepts/self-proliferation]]
- [[concepts/self-preservation]]
- [[concepts/model-welfare]]
- [[concepts/multi-agent-risks]]
- [[concepts/reward-hacking]]
- [[concepts/goal-misgeneralization]]
