---
type: concept
tags: [capability, cognitive-science, reasoning, self-monitoring]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Meta-Cognition

## Definitions
- **[[sources/li-et-al-2025]]**: "the thinking of thinking" (Flavell 1979) — broken into three components: (1) self-monitoring, (2) self-reflection and probing, (3) engagement in controlling cognitive processes. "An LLM with meta-cognition can assess its knowledge boundary, evaluate the confidence of its answers, and adjust its reasoning strategy accordingly" (§2.1). — classified as: **cognitive capacity / functional capability**

## Classification
Level of analysis: **capability** — an internal monitoring and regulatory capacity; positioned as the "meta" layer that gives rise to [[concepts/self-awareness-ai]], [[concepts/social-awareness]], and [[concepts/situational-awareness]] (Li et al. 2025, Fig. 1)

## Relationships
- Component of: [[concepts/ai-awareness]] (one of four dimensions)
- Gives rise to: [[concepts/self-awareness-ai]], [[concepts/social-awareness]], [[concepts/situational-awareness]]
- Enables: self-correction (Reflexion, SCoRe), chain-of-thought reasoning, self-evaluation
- Related to: [[concepts/cot-faithfulness]] (meta-cognitive capacity for monitoring own reasoning relates to faithfulness of CoT)
- Related to: [[concepts/opaque-reasoning]] (agents may retain meta-cognitive performance without legible reasoning)
- Overlaps with: safety/risk awareness, goal/task awareness (Table 1, Li et al. 2025)

## Evidence Summary
- **[[sources/li-et-al-2025]]**: Chain-of-thought prompting significantly enhances multi-step reasoning (§3.1, citing Wei et al. 2022). Frontier models exhibit self-evaluation and behavioral introspection — models finetuned on high-risk domains can independently identify outputs as "dangerous" (§3.1, citing Betley et al. 2025). Claude-3.5-Haiku demonstrates latent-space planning during language generation (anticipating rhyme words before generating preceding content), indicating goal-directed meta-cognition (§3.1, citing Anthropic Interpretability team 2025). RL-based self-correction (SCoRe, o1, R1) shows emergent "aha moment" behaviors (§4.1).

## Open Questions
- Is LLM meta-cognition genuine self-monitoring or sophisticated pattern completion that mimics metacognitive behavior?
- Can meta-cognition be reliably separated from general capability in evaluation?
