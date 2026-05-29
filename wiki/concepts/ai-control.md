---
type: concept
tags: [safety, methodology, deployment, control, evaluation]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# AI Control

## Definitions
- **[[sources/balesni-et-al-2024]]** (building on Greenblatt et al. 2023): Control measures around AI systems that "would prevent unacceptable outcomes even if the AI systems intentionally attempted to subvert them." The Harm Control argument claims P(AI causes unacceptable outcome | AI will scheme) is low because "even if the model tried to cause an unacceptable outcome, the control measures would reliably prevent the unacceptable outcome. The control measures must be extensively red-teamed to be shown robust even if the AI system attempted to subvert them." — classified as: **safety methodology / deployment framework**

## Classification
Level of analysis: **safety methodology** — a framework for deploying potentially misaligned AI systems safely by ensuring external control measures can prevent harm regardless of the system's intentions. Distinct from alignment approaches (which aim to make the system not want to cause harm) — control assumes the worst case and constrains outcomes externally.

## Control Evaluation Process
A "builder-breaker" process involving three roles (Balesni et al. 2024, building on Greenblatt et al. 2024b):

1. **Blue team** describes control measures and argues they prevent unacceptable outcomes
2. **Red team** argues control measures are insufficient and proposes attacks
3. **Judge** ensures fairness and sufficiency of the process

Iterative steps:
1. Red team proposes safety properties the AI could violate and suggests evaluations + attack strategy
2. Blue team critiques fairness; judge rules on seriousness, evaluation quality, and attack fairness
3. Red team runs evaluations to validate control measures
4. If controls insufficient → blue team adapts; if sufficient → move to next proposal
5. Process continues until red team has no accepted proposals remaining

## Key Assumptions
1. **Red team more capable than AI at subverting controls** — fundamental assumption; unclear how to satisfy for sufficiently capable systems (Section 6.1.1)
2. **Team incentives aligned with process goals** — red team must be incentivized to find flaws despite deployment pressure (Section 6.1.2)
3. **Control measures remain effective over time** — human vigilance, environment evolution, and AI adaptation all threaten durability (Section 6.1.3)
4. **AI system secured from tampering and theft** — model weights must not be stolen or compromised (Section 6.1.4)

## Relationships
- Component of: [[concepts/safety-cases]] (Harm Control argument)
- Builds on: Greenblatt et al. (2023) AI control framework
- Complementary to: alignment approaches (control assumes worst case; alignment aims for best case)
- Threatened by: [[concepts/sandbagging]] (AI may hide capabilities during control evaluations)
- Related to: [[concepts/sabotage-capabilities]] (what the AI attempts to do against control measures)
- Operationalized via: trusted monitoring, untrusted monitoring, whitebox probes (layered defense)
- Related to: [[concepts/control-problem]] (Bostrom 2014 — control as one pillar of the control problem)

## Evidence Summary
- **[[sources/balesni-et-al-2024]]**: Worked example of three-round control evaluation process. Round 1: trusted monitoring (less capable model) fails — misses subtle attacks. Round 2: untrusted monitoring (same-capability model) fails — red team demonstrates collusion via paraphrase-robust code comment patterns. Round 3: untrusted monitoring + whitebox probes achieves 1% automated false negative rate, 0.5% human review false negative rate, resulting in ~0.75% overall attack success probability. Judge accepts this risk level.

## Open Questions
- When will AI systems surpass red team capability at subverting control measures?
- Can control evaluations remain meaningful for superhuman AI systems?
- How should the control evaluation process handle novel attack vectors discovered post-deployment?
