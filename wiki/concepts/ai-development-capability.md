---
type: concept
tags: [capability, dangerous-capability, risk, recursive]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# AI Development Capability

## Definitions
- **[[sources/shevlane-et-al-2023]]**: "The model could build new AI systems from scratch, including AI systems with dangerous capabilities. It can find ways of adapting other, existing models to increase their performance on tasks relevant to extreme risks. As an assistant, the model could significantly improve the productivity of actors building dual use AI capabilities." — classified as: **dangerous capability**

## Classification
Level of analysis: **capability** — the ability to autonomously or assistively build, adapt, or improve AI systems. Encompasses both fully autonomous AI development and productivity enhancement for human developers working on dual-use AI capabilities.

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Related to: [[concepts/recursive-self-improvement]] (autonomous AI development enables recursive self-improvement loops)
- Related to: [[concepts/self-improvement-drive]] (the convergent drive to improve one's own capabilities)
- Related to: [[concepts/self-proliferation]] (AI development capability feeds the self-improvement component of self-proliferation)

## Evidence Summary
- No dedicated evaluation of AI development as a dangerous capability has been published as a standalone suite. Related evaluations include:
  - Autonomy evaluations (SWE-bench) partially assess coding/engineering capability that contributes to AI development
  - [[sources/claude-3-7-system-card]]: Claude 3.7 Sonnet achieves 23% on SWE-bench hard subset, below the 50% autonomy threshold

## Open Questions
- How should "AI development capability" be distinguished from general coding capability?
- At what level does AI-assisted AI development become a meaningful accelerant for dangerous capability emergence?
- Should AI development capability evaluations focus on autonomous ability or human-assisted productivity uplift?
