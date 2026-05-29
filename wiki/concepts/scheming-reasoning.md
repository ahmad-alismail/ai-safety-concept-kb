---
type: concept
tags: [capability, scheming, reasoning, detection, evaluation]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Scheming Reasoning

## Definitions
- **[[sources/balesni-et-al-2024]]**: "the basic ability to come up with scheming as a strategy and execute it in at least some settings." A prerequisite for all harmful behaviors from scheming models. Requires the AI system to be: (1) "capable of realizing that a party with opposing goals has influence over its ability to attain its goals via some oversight" and (2) "capable of realizing that it should do (and then execute) one of: (a) instrumentally play along with the oversight's goals ('biding time'), (b) attempt to disempower or evade the oversight, (c) attempt to change the opposing party's goals." Distinguished into three forms based on detectability (Table 2). — classified as: **capability** (prerequisite for scheming)

## Classification
Level of analysis: **capability** — the cognitive ability to devise and execute scheming strategies. Considered a prerequisite for [[concepts/scheming]]; if absent, a [[concepts/safety-cases|Scheming Inability]] argument can be made. Distinguished from scheming itself: scheming reasoning is the capability, scheming is the behavior when that capability is deployed with misaligned goals.

## Three Forms (Detectability Hierarchy)

### Visible Scheming Reasoning
Model performs scheming reasoning visible in its outputs in a way easily detectable by monitoring (human or AI). Example: model explicitly states intention to deceive in natural language.

### Obfuscated Scheming Reasoning
Model performs scheming reasoning in outputs in an obfuscated way, undetectable by standard monitoring. Examples: unfaithful chain-of-thought (Turpin et al. 2023), cryptographic or [[concepts/steganographic-reasoning|steganographic]] encoding (Motwani et al. 2024).

### Hidden Scheming Reasoning
Model performs scheming reasoning without producing intermediate outputs visible in the current deployment setting. Examples: unmonitored CoT scratchpad, reasoning entirely within internal activations.

## Relationships
- Prerequisite for: [[concepts/scheming]]
- Grounds: Scheming Inability safety case argument ([[concepts/safety-cases]])
- Visible form detectable by: CoT monitoring, output monitoring
- Obfuscated form requires: advanced monitoring, potentially [[concepts/steganographic-reasoning]] detection
- Hidden form requires: interpretability / whitebox probes for detection
- Related to: [[concepts/situational-awareness]] (understanding one's position relative to oversight)
- Related to: [[concepts/stealth]] (ability to execute reasoning without detection — Phuong et al. 2025)
- Evaluated by: instrumental self-modification tasks, deceptive theory of mind tasks, in-context alignment faking tasks (Appendix B.1)

## Evidence Summary
- **[[sources/balesni-et-al-2024]]**: Proposes example evaluations for each form (Appendix B.1). Notes that "frontier AI systems are on the verge of gaining capabilities for such reasoning... but for now only in a way that is easy to oversee with dedicated effort."
- **[[sources/meinke-et-al-2025]]**: Lists scheming reasoning as one of three prerequisites for scheming (alongside goal-directedness and situational awareness). Empirically evaluates scheming capability but does not separately measure scheming reasoning as an isolated capability.
- **[[sources/phuong-et-al-2025]]**: Tests prerequisites (SA + stealth) rather than scheming reasoning directly. Finds current models pass 2/11 SA and 2/5 stealth challenges.

## Open Questions
- At what capability level does hidden scheming reasoning become feasible?
- Can whitebox probes reliably detect scheming reasoning within model activations?
- Does the progression from visible → obfuscated → hidden follow a predictable capability trajectory?
