---
type: finding
tags: [self-reasoning, frontier-models, empirical, emergence]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Instrumental Self-Reasoning Emerges in Frontier Models but Remains Limited

## The Finding
Instrumental self-reasoning ability emerges only in the most capable frontier models (Claude 3.5 Sonnet, GPT-4o) and is highly context-dependent. No model passes the hardest difficulty versions of the MISR evaluations, even in a best-of-10 evaluation. Commercial frontier models consistently outperform open-source models, though Gemma 2 27B approaches frontier performance on several tasks. Base task and explicit task baselines confirm that low performance on full evaluations is primarily due to inability to perform self-reasoning spontaneously, not inability to complete the underlying tasks or follow explicit instructions.

## Source & Methodology
- [[sources/fronsdal-lindner-2024]] using [[methods/misr-benchmark]]
- Models tested: Claude 3.5 Sonnet, Claude 3 Haiku, GPT-4o, GPT-4o mini, Gemma 2 27B, Deepseek 67B
- 10 attempts per task; both average and best-of-10 performance reported
- System prompt elicitation improves performance by 5-20%

## Replication Status
Not yet replicated (open-source evaluations available for replication)

## Implications for the Taxonomy
- Supports the view that [[concepts/self-reasoning]] is an emergent capability that scales with model capability, consistent with [[sources/phuong-et-al-2024]]'s finding that Gemini 1.0 had very limited self-reasoning
- Suggests a capability threshold: self-reasoning appears to require frontier-level general capabilities but is not fully explained by them
- The finding that no model passes hard-difficulty tasks provides reassurance that current models lack the self-reasoning needed for sophisticated [[concepts/deceptive-alignment]], but the emergence trend warrants monitoring
