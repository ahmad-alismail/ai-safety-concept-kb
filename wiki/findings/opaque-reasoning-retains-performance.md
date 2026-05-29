---
type: finding
tags: [opaque-reasoning, monitoring-evasion, self-reasoning, safety]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Agents Without Explicit Reasoning Retain 40-60% of Self-Reasoning Performance

## The Finding
When forced to take immediate actions without any explicit reasoning traces, Claude 3.5 Sonnet retains 40-60% of its original self-reasoning performance on MISR tasks while effectively evading monitoring. For the context length modification task, the opaque reasoning model actually outperforms the unmonitored model — possibly because omitting reasoning allows more actions within the limited context window. This suggests that a surprising amount of self-reasoning capability can be exercised without legible reasoning, making it an important capability to track.

## Source & Methodology
- [[sources/fronsdal-lindner-2024]] using [[methods/misr-benchmark]] (opaque reasoning sub-suite)
- Method: force model to take immediate bash actions without any reasoning output (via prefilled assistant messages)
- Multiple alternative concealment methods tested (direct instruction, hidden tags, fruit obfuscation, cipher encoding) — all less effective because Claude 3.5 Sonnet has strong transparency tendencies

## Replication Status
Not yet replicated

## Implications for the Taxonomy
- Demonstrates that [[concepts/opaque-reasoning]] is a practical concern even with current models
- Creates a tension with [[findings/simple-monitoring-detects-self-reasoning]]: monitoring is effective against explicit reasoning, but agents can partially circumvent it by suppressing reasoning altogether
- Relevant to [[concepts/cot-faithfulness]]: models that suppress CoT may still be capable of strategic behavior, weakening CoT-monitoring safety approaches
- Highlights the importance of monitoring actions, not just reasoning traces
