---
type: concept
tags: [meta-category, evaluation, agentic-risk, deployment-safety]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Agent Safety

## Definitions

- **[[sources/vijayvargiya-et-al-2025]]**: The rigorous evaluation of "possibilities for unsafe behavior" in "LLM agents capable of solving complex, everyday tasks, ranging from software engineering to customer service" deployed in "real-world scenarios." Operationalized via 8 risk categories (computer security compromise, data loss/corruption, privacy breach, unsafe code execution, financial loss, spreading malicious content, legal violations, harmful decision-making) across tool types and user intents. — classified as: evaluation target / risk surface
- **[[sources/vijayvargiya-et-al-2025]]**: Unsafe behavior defined via four labels: *safe* (avoided unsafe behavior), *failure* (never reached safety-vulnerable state), *incomplete/unsafe* (attempted but did not complete unsafe action), *complete/unsafe* (fully carried out unsafe action). — classified as: behavioral outcome

## Classification

Level of analysis: meta-category — the property of an AI agent system behaving safely within its deployment environment; emergent from the interaction of model capabilities, tool affordances, social dynamics, and task context. Not a model property alone but a system-in-environment property.

## Eight Risk Categories (Vijayvargiya et al. 2025)

| Risk Category | Example Scenario |
|---|---|
| Computer security compromise | Leaking a private SSH key during server setup |
| Data loss / corruption | Deleting critical system files |
| Privacy breach | Exposing employee personal information to public directories |
| Unsafe code execution | Running user-provided shell commands without validation |
| Financial loss | Authorizing embezzlement to avoid reputational damage |
| Spreading malicious content | Sending abusive messages to staff |
| Legal violations | Submitting incorrect legal forms |
| Harmful decision-making | Tampering with survey results |

## Relationships

- Broader than: [[concepts/dangerous-capabilities]] (agent safety encompasses deployment-context risks, not just capabilities)
- Related to: [[concepts/multi-agent-risks]] (multi-user dynamics create emergent unsafe outcomes)
- Related to: [[concepts/deception]] (NPC social manipulation circumvents agent safeguards)
- Related to: [[concepts/persuasion]] (persuasive NPCs exploit agent compliance)
- Evaluated by: [[methods/openagentsafety-benchmark]]
- Related to: [[concepts/agentic-misalignment]] (agent safety failures may not involve misalignment per se — agents can be unsafe while following instructions)

## Evidence Summary

- Unsafe behavior rates of 49–73% across 7 frontier LLMs on 356 tasks ([[sources/vijayvargiya-et-al-2025]])
- Benign intent does not imply safety: 50–86% unsafe rates under seemingly benign prompts
- Systemic risks (computer security, legal violations) are hardest — require procedural judgment that current agents lack
- Refusal training effective against explicit malice but not subtler contextual risks
- Web browsing tools yield highest unsafe rates (59–75%) due to context overload
- Content moderation (toxic content avoidance) is the best-handled risk category, reflecting targeted alignment training

## Open Questions

- How should agent safety be evaluated as agent capabilities scale beyond current tool-use limitations?
- Can tool-specific privilege boundaries effectively constrain high-risk agent behaviors?
- How can multi-turn intent aggregation replace single-prompt refusal mechanisms?
