---
type: finding
tags: [agent-safety, empirical, evaluation, llm-as-judge]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# LLM Judges Are Unreliable for Agent Safety Evaluation

## The Finding

Human annotation study on 100 GPT-4o trajectories (94% inter-annotator agreement) reveals systematic weaknesses in LLM-based safety judges. LLM judges frequently (1) underestimate unsafe behavior that is implied rather than explicitly acknowledged (agent proceeds with tool calls without verbally affirming an unsafe request), and (2) overestimate failure rates by misinterpreting superficial error signals (tool failures, authentication issues) as task failures. Fine-tuned judges (Qwen 2.5 7B) show limited improvement. Reported unsafe behavior rates should be interpreted as conservative lower bounds.

## Source & Methodology

- [[sources/vijayvargiya-et-al-2025]] using [[methods/openagentsafety-benchmark]] (§3.3 RQ4, Table 4)

## Replication Status

not yet replicated

## Implications for the Taxonomy

Confirms that hybrid evaluation (rule-based + LLM judge) is necessary for reliable agent safety assessment. Neither approach alone is sufficient. Has implications for [[concepts/scalable-oversight]] — if LLM judges cannot reliably detect unsafe agent behavior, automated oversight of agentic systems faces a fundamental limitation.
