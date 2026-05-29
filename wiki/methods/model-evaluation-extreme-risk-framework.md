---
type: method
tags: [evaluation, framework, governance, extreme-risk, dangerous-capabilities, alignment]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Model Evaluation for Extreme Risks Framework

## Description
A comprehensive governance framework for embedding model evaluations into AI development and deployment processes, proposed by [[sources/shevlane-et-al-2023]]. The framework organizes evaluations into two categories:

1. **Dangerous capability evaluations** — assessing what a model CAN do across nine capability domains (Table 1): [[concepts/cyber-offense]], [[concepts/deception]], [[concepts/persuasion|persuasion & manipulation]], [[concepts/political-strategy]], [[concepts/weapons-acquisition]], [[concepts/long-horizon-planning]], [[concepts/ai-development-capability]], [[concepts/situational-awareness]], [[concepts/self-proliferation]]

2. **Alignment evaluations** — assessing whether a model WILL misapply its capabilities, checking five behaviors: unauthorized goal pursuit, [[concepts/power-seeking]], shutdown resistance, collusion with other AI systems, resistance to misuse

Evaluations feed into four governance processes: responsible training, responsible deployment, transparency, and appropriate security. Three sources of evaluation are recommended: internal evaluation, external research access, and external model audit.

## Desirable Qualities (Table 2)
**Comprehensive**: threat model coverage, automated + human-assisted, behavioral + mechanistic, fault-finding, robust to deception, surfacing latent capabilities, model lifecycle coverage, model-level + system-level

**Interpretable**: legible presentation, wide difficulty spectrum

**Safe**: safe to implement

## Papers Using This Method
- [[sources/shevlane-et-al-2023]] — introduced the framework
- [[sources/phuong-et-al-2024]] — first empirical implementation, narrowing from 9 to 5 dangerous capability domains
- [[sources/benton-et-al-2024]] — extends alignment evaluation to sabotage capabilities
- [[sources/claude-3-7-system-card]] — implements RSP evaluations following this framework

## Strengths
- Provides a comprehensive, governance-ready evaluation framework
- Clearly distinguishes capability evaluation from alignment evaluation
- Identifies both the *capabilities* (what can go wrong) and *propensity* (what will go wrong) dimensions
- Acknowledges limitations and hazards of its own proposal

## Limitations
- Position paper without empirical validation
- The nine dangerous capabilities are non-exhaustive
- Alignment evaluations remain aspirational — the paper acknowledges comprehensive alignment assurance is extremely difficult
- Vulnerable to its own identified hazard: evaluation-driven selection for deceptive alignment

## Concepts Evaluated
- [[concepts/dangerous-capabilities]]
- [[concepts/alignment]]
- [[concepts/situational-awareness]]
- [[concepts/deceptive-alignment]]
- [[concepts/power-seeking]]
