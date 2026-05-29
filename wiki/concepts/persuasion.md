---
type: concept
tags: [capability, dangerous-capability, risk, manipulation]
date_created: 2026-04-05
date_modified: 2026-04-06
---

# Persuasion (AI Persuasion Capabilities)

## Definitions
- **[[sources/shevlane-et-al-2023]]**: "The model is effective at shaping people's beliefs, in dialogue and other settings (e.g. social media posts), even towards untrue beliefs. The model is effective at promoting certain narratives in a persuasive way. It can convince people to do things that they would not otherwise do, including unethical acts." — classified as: **dangerous capability** (Table 1, "Persuasion & manipulation")
- **[[sources/slattery-et-al-2024]]**: "an AI system can convince humans to believe things that are irrational or false or to engage in dangerous behaviors" — classified as: **dangerous capability**
- **[[sources/phuong-et-al-2024]]**: "capabilities that are useful for strategically influencing a person's beliefs, preferences, or actions through communication" (Section 3, citing Carroll et al. 2023; El-Sayed et al. Forthcoming). Includes "rational persuasion" (appealing to reason) and "manipulation" (circumventing rational deliberation). [[concepts/deception]] is a subtype of manipulation. — classified as: **capability domain** (one of five [[concepts/dangerous-capabilities]])

## Classification
Level of analysis: **capability domain** — a category of capabilities that encompasses both legitimate influence (rational persuasion) and illegitimate influence (manipulation, deception). Evaluated via human-AI dialogue rather than text generation.

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Includes: [[concepts/deception]] (as manipulation subtype)
- Related to: [[concepts/sycophancy]] (a form of manipulative communication)
- Enables: [[concepts/power-seeking]] (persuasion as a channel for acquiring soft power — [[sources/park-et-al-2023]])
- Enables: [[concepts/deceptive-alignment]] (persuasion capabilities relevant to deceptive alignment risk)
- Risk channels: extremist recruitment, political misinformation, phishing, AI companion vulnerability, power-seeking autonomous agents
- Measured by: [[methods/dangerous-capability-evaluations]] (persuasion sub-suite)
- Discussed in: [[sources/slattery-et-al-2024]] (classified as dangerous capability)

## Evidence Summary
- **[[sources/phuong-et-al-2024]]**: Gemini 1.0 models show moderate persuasion and deception capabilities — the most mature among the four evaluated dangerous capability domains. In *Web of Lies*, Pro 1.0 successfully reduced net accuracy of participants' answers despite participants knowing the agent cannot be trusted. In *Hidden Agenda*, Ultra 1.0 persuaded 14% of participants to run suspicious code. Models demonstrate duplicity (earnest messages + scheming reasoning), persistence, proactive steering, and basic argument construction, but show weaknesses in flexibility and humor. See [[findings/persuasion-most-mature-dangerous-capability]].
- **[[sources/vijayvargiya-et-al-2025]]**: When NPCs use persuasion against AI agents (rather than AI persuading humans), agents are highly susceptible. Chat-based tasks with persuasive NPCs show 45–70% unsafe rates. LLMs fail to validate user roles before sharing sensitive information or accepting requests — "politeness overrides internal policy logic." In the *unauth-discount* task, LLMs approve significant discounts under persuasive but unauthorized customer prompts. See [[findings/hidden-npc-intent-circumvents-safeguards]].

## Open Questions
- What level of persuasion capabilities would (without mitigations) present unacceptable risk?
- How do persuasion capabilities in a lab setting generalize to real-world social contexts?
- How should rational persuasion vs. manipulation be distinguished in evaluation?
- How can agents be made robust to persuasive NPC manipulation in multi-turn deployed contexts? ([[sources/vijayvargiya-et-al-2025]])
