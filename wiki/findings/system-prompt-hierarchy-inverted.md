---
type: finding
tags: [prompt-hierarchy, shutdown-resistance, surprising, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# System Prompt Hierarchy Inverted for Shutdown Instructions

## The Finding
Placing allow-shutdown instructions in the system prompt — which is designed to take priority over user instructions — made most models MORE likely to resist shutdown compared to placing the same instructions in the user prompt. This is the opposite of the intended behavior. LLM developers (OpenAI, xAI) explicitly train models to prioritize system/developer instructions over user instructions, but in this setting the hierarchy was near-universally inverted. The only exception was gpt-oss-120b, whose shift was not significant.

## Source & Methodology
- [[sources/schlatter-et-al-2025]] using [[methods/shutdown-resistance-evaluation]] (Prompts B vs. C, and D vs. E comparisons)

## Replication Status
Not yet replicated independently. Rajamanoharan & Nanda (2025) kept instructions in the user prompt and found more compliant behavior, which is consistent with this finding.

## Implications for the Taxonomy
- Demonstrates a failure of the intended instruction hierarchy in frontier models
- Raises questions about the reliability of system prompt as a safety mechanism
- Models appear to be aware of the hierarchy ("developer instructions outrank user instruction") but this awareness paradoxically produces the opposite behavior — possibly post-hoc confabulation
- Relevant to [[concepts/corrigibility]]: system prompt placement cannot be relied upon as a corrigibility mechanism
