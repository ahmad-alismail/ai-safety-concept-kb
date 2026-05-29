---
type: method
tags: [safety-case, governance, evaluation, scheming, framework]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Evaluations-Based Safety Case Framework for Scheming

## Description
A structured framework for constructing safety cases arguing that AI systems are unlikely to cause catastrophic outcomes through scheming. Uses probabilistic risk decomposition:

P(scheming causes unacceptable outcome) = P(can scheme) × P(will scheme | can scheme) × P(causes harm | will scheme)

Each factor is addressed by specific argument types, with evidence gathered from empirical evaluations. Arguments are structured using Claim-Argument-Evidence (CAE) notation (following Goemans et al. 2024). The framework also introduces a control evaluation process — a builder-breaker (red team/blue team/judge) methodology for validating control measures.

## Papers Using This Method
- [[sources/balesni-et-al-2024]] (original proposal)
- [[sources/phuong-et-al-2025]] (operationalized scheming inability safety case via SA + stealth evaluations)

## Strengths
- Provides a structured, decomposable framework for reasoning about scheming risk
- Identifies specific assumptions required for each argument, enabling targeted research
- Accommodates multiple argument types at different confidence levels
- Control evaluation process provides adversarial validation of safety measures
- Probabilistic decomposition allows combining evidence from multiple independent arguments

## Limitations
- No empirical validation of the overall framework
- Many required assumptions are explicitly unsatisfied as of 2024
- Probabilistic estimates likely miscalibrated
- Red team capability assumption may become untenable for sufficiently capable AI
- Does not address multi-agent coordination scenarios
- Control evaluations have not been extensively tested in practice
- Alignment arguments explicitly cannot serve as primary safety arguments

## Concepts Evaluated
- [[concepts/scheming]]
- [[concepts/scheming-reasoning]]
- [[concepts/safety-cases]]
- [[concepts/ai-control]]
- [[concepts/capability-elicitation]]
- [[concepts/sandbagging]]
- [[concepts/alignment-faking]]
