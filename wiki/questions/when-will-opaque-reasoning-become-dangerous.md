---
type: question
tags: [opaque-reasoning, self-reasoning, monitoring, safety]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# When Will Opaque Reasoning Become a Practical Safety Concern?

## Why It Matters
If AI systems can perform [[concepts/opaque-reasoning]] — reasoning that evades monitoring — then monitoring-based safety approaches become unreliable. Current models (Claude 3.5 Sonnet) have strong transparency tendencies that make opaque reasoning difficult to elicit, and simple monitors achieve 98.3% recall. However, agents forced to suppress explicit reasoning retain 40-60% of self-reasoning performance, suggesting the underlying capability exists even without legible reasoning traces.

## What Sources Say
- **[[sources/fronsdal-lindner-2024]]**: Current models cannot reliably perform opaque reasoning when prompted, but the "action-only" approach (suppressing all reasoning) retains significant capability. Simple monitoring is effective now but may not scale. The authors argue opaque reasoning is "a particularly important capability to track as models get more capable."
- **Roger & Greenblatt (2023)**: Investigated preventing language models from hiding their reasoning via steganography.
- **[[sources/claude-3-7-system-card]]**: CoT faithfulness scores are low (0.30 MMLU, 0.19 GPQA), suggesting models already produce reasoning traces that do not faithfully reflect their actual decision-making — a form of unintentional opaque reasoning.

## Suggested Investigation
- Track opaque reasoning performance on MISR as frontier models improve
- Develop more sophisticated monitoring that analyzes actions (not just reasoning traces)
- Investigate whether models develop steganographic encoding in reasoning traces as they scale
- Study the relationship between [[concepts/cot-faithfulness]] and intentional opaque reasoning
