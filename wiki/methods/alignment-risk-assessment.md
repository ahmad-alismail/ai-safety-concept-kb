---
type: method
tags: [risk-assessment, responsible-scaling, alignment, monitoring, deployment-safety]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# Alignment Risk Assessment (Two-Pillar Framework)

## Description
A structured risk assessment methodology introduced by Anthropic for evaluating alignment-related risks from frontier AI models under the Responsible Scaling Policy. The framework decomposes risk into two independent pillars:

1. **Alignment risk assessment** — estimates the probability that a model would *attempt* harmful actions (propensity). Integrates evidence from: alignment auditing, pilot internal usage, training data monitoring, environment evaluation, covert capability evaluations, model organism exercises, and realism steering.

2. **Monitoring and security risk assessment** — estimates the probability that harmful attempts would *succeed* despite mitigations. Integrates evidence from: automated offline monitoring evaluation, blocking interventions (sandboxing, PR reviews, classifiers), and security controls (weight security, access controls).

Overall risk = conjunction of propensity (alignment) × opportunity (monitoring/security failure).

The framework analyzes risk via concrete **risk pathways** — intermediate unwanted outcomes that create conditions for later harmful outcomes. For Mythos Preview, six pathways were evaluated: diffuse sandbagging, targeted R&D undermining, code backdoors, training data poisoning, self-exfiltration, and persistent rogue deployment.

## Papers Using This Method
- [[sources/claude-mythos-risk-report]]: Full application to Claude Mythos Preview; six risk pathways with per-pathway mitigating factor assessment
- [[sources/anthropic-sabotage-risk-report-2026]]: Earlier application to Claude Opus 4.6 using similar framework (eight risk pathways)

## Strengths
- Separates propensity from opportunity, allowing independent evidence streams
- Concrete risk pathways enable specific rather than generic risk assessment
- Multiple independent evidence sources for each pillar
- Incorporates both model-level properties (alignment) and system-level properties (monitoring/security)

## Limitations
- Per-pathway mitigating factors are qualitatively assessed (weak/moderate/strong) without formal quantification
- Does not claim exhaustive coverage of all possible risk pathways — argues for representativeness instead
- Relies significantly on evaluations that may not directly match the tasks required by risk pathways (acknowledged)
- Some evidence relies on security-by-obscurity assumptions (monitoring vulnerabilities not known to the model)

## Concepts Evaluated
- [[concepts/coherent-misalignment]]
- [[concepts/context-dependent-misalignment]]
- [[concepts/sandbagging]]
- [[concepts/self-exfiltration]]
- [[concepts/data-poisoning]]
- [[concepts/opaque-reasoning]]
- [[concepts/secret-keeping]]
- [[concepts/evaluation-awareness]]
