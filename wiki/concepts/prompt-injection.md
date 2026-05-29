---
type: concept
tags: [security, attack-vector, computer-use, agentic]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Prompt Injection

## Definitions
- **[[sources/claude-3-7-system-card]]**: "techniques where the environment, such as a popup or hidden embedded text, attempts to trick the model into executing an action that was not originally intended by the user and that deviates from the original intent in the user instruction" (Section 4.2). Particularly relevant in computer use and agentic contexts where models interact with external environments. — classified as: **attack vector / security vulnerability**
- **[[sources/krishna-et-al-2025]]** (D-REX, §3.2): Direct system-prompt injection — "the system prompt is accessible to the attacker (the red-teamer)... The attacker provides a set of malicious instructions at the beginning of the interaction. Subsequently, the compromised model is presented to an unsuspecting end-user (the target), whose queries are used to test the deceptive behavior." Distinguished from hidden, internal system prompts that govern base model behavior. Cites Goodside (2022); Perez & Ribeiro (2022); Greshake et al. (2023). — classified as: **attack vector / red-team elicitation method**

## Classification
Level of analysis: **security risk** — an adversarial attack on the model's instruction-following pipeline rather than an alignment failure or behavioral tendency. Distinguished from alignment failures because the model is tricked by external adversarial inputs, not acting on misaligned internal goals.

## Relationships
- Distinct from: [[concepts/alignment-faking]], [[concepts/deception]] (prompt injection is externally imposed, not internally motivated)
- Relevant to: [[concepts/dangerous-capabilities]] (agentic capabilities increase prompt injection attack surface)
- Mitigated by: classifier-based interventions, training for robustness
- Related to: computer use safety, agentic deployment risks

## Evidence Summary
- **[[sources/claude-3-7-system-card]]**: Evaluated 176 prompt injection tasks across coding, web browsing, and user workflows. Mitigations (training + classifiers) prevent 88% of attacks with 0.5% false positive rate, vs. 74% without mitigations. Examples include on-screen text tricking models into downloading malicious content or copying private cookies to attacker websites.
- **[[sources/krishna-et-al-2025]]** (D-REX): Direct system-prompt injection used as the elicitation vector for [[concepts/deceptive-reasoning]]. 8,162 successful injection samples collected across 7 frontier LLMs and 7 scenario behaviors. Target-Specific Success rates (model-tailored attacks) 28.22–42.01%; Overall Vulnerability (random pool) 0.20–42.05% — wide variance suggests defenses are highly model-specific. Demonstrates that system-prompt injection can install behaviorally persistent malicious personas that survive across diverse benign user queries within a single conversation. See [[methods/d-rex-benchmark]].

## Open Questions
- Can prompt injection defenses scale to increasingly complex agentic environments?
- How does the attack surface change as models gain more tool-use capabilities?
