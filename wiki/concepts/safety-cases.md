---
type: concept
tags: [governance, methodology, safety, framework]
date_created: 2026-04-07
date_modified: 2026-05-12
---

# Safety Cases

## Definitions
- **[[sources/balesni-et-al-2024]]** (citing Clymer et al. 2024; Goemans et al. 2024): "a structured rationale that an AI system is unlikely to cause significant harm if it is deployed to a particular setting." Making a safety case "consists of specifying unacceptable outcomes and then making structured arguments that deploying or developing the AI system will not lead to these outcomes." Can use Claim-Argument-Evidence (CAE) notation. For scheming specifically, the paper proposes three core arguments (Scheming Inability, Harm Inability, Harm Control) plus two supporting arguments (Alignment via Evaluation, Alignment via Training). — classified as: **governance methodology / structured argumentation framework**

## Classification
Level of analysis: **governance methodology** — a meta-level framework for organizing evidence and arguments about AI system safety. Adapted from systems engineering safety cases (e.g., Hawkins & Kelly 2009, Graydon et al. 2007) to AI systems. Not a property of the AI system itself but a structured process for reasoning about safety properties.

## Components (per Balesni et al. 2024)
1. **Specify unacceptable outcomes** — define what harms must be prevented
2. **Construct structured arguments** — chains of claims, subclaims, and evidence
3. **Identify assumptions** — conditions that must hold for arguments to be valid
4. **Provide evidence** — evaluations, analyses, and monitoring results supporting claims

## Safety Case Arguments Against Scheming

### Core Arguments
- **Scheming Inability**: P(AI can scheme) is low — the AI lacks [[concepts/scheming-reasoning]] capabilities
- **Harm Inability**: P(AI causes harm | AI will scheme) is low — the AI cannot cause unacceptable outcomes even without control measures
- **Harm Control**: P(AI causes harm | AI will scheme) is low — [[concepts/ai-control]] measures prevent harm even if AI intentionally subverts them

### Supporting Arguments
- **Alignment via Evaluation**: P(AI will scheme | AI can scheme) is low — scheming caught in honeypot evaluations before deployment
- **Alignment via Training**: P(AI will scheme | AI can scheme) is low — training process unlikely to produce schemers

## Relationships
- Applied to: [[concepts/scheming]] (primary threat model addressed by Balesni et al. 2024)
- Uses: [[concepts/ai-control]] (for Harm Control arguments)
- Relies on: [[concepts/capability-elicitation]] (for all inability arguments)
- Threatened by: [[concepts/sandbagging]], [[concepts/alignment-faking]] (undermine evaluation-based evidence)
- Related to: [[concepts/control-problem]] (safety cases are one approach to the control problem)
- Operationalized by: [[sources/phuong-et-al-2025]] (scheming inability safety case via SA + stealth evaluations)
- Game-theoretically formalised by: [[sources/kovarik-et-al-2025]] — argues evaluation-based safety cases need game-theoretic scrutiny; demonstrates via [[methods/game-theoretic-evaluation-modeling]] that naïve safety cases fail against strategic AIs; identifies conditions where testing is informative vs. uninformative

## Evidence Summary
- **[[sources/balesni-et-al-2024]]**: Proposes the framework. Provides a worked example of a safety case for an AI agent deployed internally at an AI developer company for producing fine-tuning datasets. The example illustrates that Scheming Inability and Harm Inability arguments fail for capable models, while Harm Control via a three-round control evaluation process achieves ~0.75% attack success rate.
- **[[sources/phuong-et-al-2025]]**: First operational implementation of a scheming inability safety case. Tests whether frontier models have sufficient SA + stealth to execute scheming strategies. Finds current models fail (2/11 SA, 2/5 stealth), but expects rapid improvement.

## Game-Theoretic Scrutiny (Kovařík et al. 2025)
- **[[sources/kovarik-et-al-2025]]**: Argues that evaluation-based safety cases need game-theoretic formalisation to be robust. Demonstrates that making safety case assumptions explicit in formal models enables identification of failure modes:
  - Naïve safety cases (non-strategic AI assumption) yield 1:20,000 odds of misalignment after 1,000 clean tests — but fail completely against strategic AIs
  - When AIs cannot distinguish test from deployment, optimal defection rate ≈ 1/N_test with ~37% evasion probability
  - Deployment-only "smoking gun" signals can render test scaling entirely useless
  - The "pretend" action (harm undetectable by evaluator) bounds evaluation effectiveness by detector quality
- Key methodological contribution: safety case arguments can be stress-tested by asking whether they hold under different game-theoretic assumptions about AI strategy

## Policy Adoption: ASL → Safety Case Transition (RSP v3.2)
**[[sources/anthropic-2026-rsp-v3]]** (Appendix B): Anthropic's Responsible Scaling Policy has transitioned from prescriptive AI Safety Levels (ASLs) with specific lists of required controls to argument-based safety cases. ASLs are now used only for "present levels of risk mitigations — those that we maintain for existing AI models." For future risk mitigations, "providing a specific list of controls is overly rigid, and we instead prefer to focus on what sort of argument an AI developer should make (and what sorts of actors it should address) regarding the risk level from its systems." This shift mirrors the evaluations-based safety case framework proposed by Balesni et al. (2024) and represents a significant institutional adoption of the safety case methodology at a major AI developer.

The RSP's three-column framework (capability threshold → company mitigations → industry-wide recommendations) effectively operationalizes safety cases at the governance level: each capability threshold requires a "strong argument" that catastrophic risk is contained, rather than compliance with a specific control checklist.

## Open Questions
- What evidence levels are appropriate for each assumption in safety case arguments?
- Can safety cases scale to AI systems that surpass red team capabilities?
- How should safety cases handle risks that materialize *before* deployment (e.g., during training or internal use)?
- Can numerical probability estimates in safety cases be meaningfully calibrated?
- [[questions/offense-defense-balance-evaluation-design]] — Does the offence-defence balance in evaluation design favor the evaluator or the AI? ([[sources/kovarik-et-al-2025]])
