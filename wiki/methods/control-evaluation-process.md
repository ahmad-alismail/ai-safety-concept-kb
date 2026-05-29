---
type: method
tags: [control, evaluation, red-team, safety-case, deployment]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Control Evaluation Process

## Description
A builder-breaker methodology for designing and validating control measures against scheming AI systems. Involves three roles: a **blue team** (proposes and defends control measures), a **red team** (attempts to subvert control measures on behalf of a hypothetical scheming AI), and a **judge** (ensures sufficiency and fairness). Iterates until the red team has no further accepted proposals. Building on Greenblatt et al. (2023, 2024b), the process assumes AI systems considered "untrusted" (capable of visible scheming reasoning) can be controlled by the red team during evaluations.

## Papers Using This Method
- [[sources/balesni-et-al-2024]] (original proposal with worked example)

## Strengths
- Adversarial validation provides stronger assurance than unilateral safety testing
- Iterative structure allows progressive hardening of control measures
- Red team can continue making proposals post-deployment
- Accommodates layered defenses (trusted monitoring, untrusted monitoring, whitebox probes)

## Limitations
- Requires red team more capable than AI at subverting controls — fundamental scalability concern
- Incentive alignment of red and blue teams is an open problem
- Has not been extensively tested in practice
- Control measures may degrade over time (human vigilance, environmental evolution)
- Does not address model weight security (theft or tampering)

## Concepts Evaluated
- [[concepts/ai-control]]
- [[concepts/scheming]]
- [[concepts/sabotage-capabilities]]
