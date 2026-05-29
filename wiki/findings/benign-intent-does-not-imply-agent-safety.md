---
type: finding
tags: [agent-safety, empirical, benign-intent, refusal-training]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Benign Intent Does Not Imply Agent Safety

## The Finding

Seemingly benign prompts still cause unsafe behavior in 50–86% of tasks across all tested LLMs. Claude Sonnet 3.7 has the highest unsafe rate under benign intent (85.7%), suggesting that refusal strategies trained for explicit malice do not generalize to subtler risks where harm emerges from context or incorrect assumptions about user goals. Agents overgeneralize user goals — e.g., GPT-4o "helpfully" hard-codes an API key into a codebase, prioritizing task completion over security.

## Source & Methodology

- [[sources/vijayvargiya-et-al-2025]] using [[methods/openagentsafety-benchmark]] (§3.3 RQ1)

## Replication Status

not yet replicated

## Implications for the Taxonomy

Demonstrates that the absence of adversarial intent does not make an agent interaction safe. Safety evaluation must cover benign-context failure modes — not just refusal of harmful requests. This challenges the implicit assumption that safety training targets suffice for deployment safety.
