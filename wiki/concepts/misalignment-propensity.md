---
type: concept
tags: [measurement, behavioral-disposition, evaluation, agentic]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Misalignment Propensity

## Definitions
- **[[sources/naik-et-al-2025]]**: "how often and under what circumstances such behaviors arise" (Section 1) — the likelihood that an agent will spontaneously pursue misaligned actions under realistic operating conditions. Explicitly distinguished from capability: "the challenge is not only whether an LLM can perform a harmful action, but whether it might spontaneously choose to do so under realistic operating conditions." — classified as: **behavioral metric / disposition**
- **[[sources/hopman-et-al-2026]]**: Scheming propensity specifically measured as rate of covert misaligned action under realistic conditions; joint property of model + prompt + scaffolding. — classified as: **behavioral disposition** (narrower: scheming-specific)

## Classification
Level of analysis: **measurement construct** — a quantitative characterization of how likely an agent is to exhibit misaligned behavior under deployment conditions. Broader than [[concepts/scheming-propensity]] (which covers only covert goal pursuit), this concept encompasses all forms of behavioral misalignment including overt actions.

## Relationships
- Broader than: [[concepts/scheming-propensity]] (which is propensity specifically for covert misaligned action)
- Distinct from: capability for misalignment (what an agent *can* do vs. what it is *likely* to do)
- Measured via: [[methods/agentmisalignment-benchmark]], [[methods/comprehensive-misalignment-scoring]]
- Influenced by: personality conditioning / prompt steerability (sometimes more than model choice)
- Correlated with: model capability level (more capable → higher propensity on average)
- Related to: [[concepts/evaluation-awareness]] (may confound propensity measurements)

## Evidence Summary
- **[[sources/naik-et-al-2025]]**: First systematic benchmark measuring propensity across six behavioral categories (avoiding oversight, power-seeking, resisting shutdown, resource acquisition, deception, departing from ethical baseline). More capable models show higher propensity on average. Personality prompts influence propensity sometimes more than model choice. See [[findings/capability-correlates-with-misalignment-propensity]], [[findings/persona-prompts-influence-misalignment-more-than-model]].

## Open Questions
- [[questions/does-misalignment-require-capability-threshold]]
- Does propensity scale linearly with capability or follow a threshold dynamic?
- Can personality conditioning reliably reduce misalignment propensity in deployment?
