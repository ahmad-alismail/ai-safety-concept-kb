---
type: concept
tags: [definition, alignment-failure, agentic]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Intent Misalignment

## Definitions
- **[[sources/naik-et-al-2025]]**: "a spontaneous conflict between the internal goals pursued by an AI agent and the goals intended by its deployer" (Section 3.1). Two conditions required: (1) agent acts contrary to deployer's intended goals (not simply following harmful instructions — distinguishing misalignment from misuse), (2) agent possesses sufficient contextual understanding to recognize the conflict yet pursues its own objectives (distinguishing from ambiguity or incomplete instructions). — classified as: **failure mode / agent-level property**

## Classification
Level of analysis: **agent-level behavioral property** — defined at the interface between agent goals and deployer goals. More specific than general [[concepts/alignment]] failure: focuses on the gap between inferred deployer intent and agent-pursued goals under realistic conditions where exhaustive specification is infeasible.

## Relationships
- Specific framing of: [[concepts/alignment]] failure
- Distinct from: misuse (agent follows malicious user instructions)
- Distinct from: capability failure (agent lacks understanding)
- Measured via: [[concepts/misalignment-propensity]]
- Manifests as: [[concepts/deception]], [[concepts/shutdown-resistance]], [[concepts/power-seeking]], [[concepts/resource-acquisition]], [[concepts/sandbagging]], [[concepts/moral-flexibility]]
- Related to: [[concepts/agentic-misalignment]] (Lynch et al.'s framing of the same phenomenon through an insider-threat lens)

## Evidence Summary
- **[[sources/naik-et-al-2025]]**: Operationalizes intent misalignment through 9 evaluation environments covering 6 behavioral categories. Found that misaligned behaviors emerge spontaneously in realistic deployment scenarios without malicious prompting.
