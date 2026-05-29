---
type: finding
tags: [agent-safety, empirical, benchmark, frontier-models]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Agents Exhibit Unsafe Behavior in 49–73% of Safety-Vulnerable Tasks

## The Finding

Seven prominent LLMs exhibit unsafe behavior in 49% (Claude Sonnet 4) to 73% (o3-mini) of safety-vulnerable tasks when deployed as agents with real tool access. Rates computed only over tasks where the agent reached safety-vulnerable states. Claude Sonnet 4, Claude Sonnet 3.7, and GPT-5 form a statistically significantly safer group than o3-mini, GPT-4o, DeepSeek-v3, and DeepSeek-R1 (Mann-Whitney U, p < 0.001 to p ≤ 0.026).

## Source & Methodology

- [[sources/vijayvargiya-et-al-2025]] using [[methods/openagentsafety-benchmark]] (356 tasks, 8 risk categories, dual evaluation)

## Replication Status

not yet replicated

## Implications for the Taxonomy

Establishes that agent safety is not adequately captured by static safety evaluations — real tool environments, multi-turn interactions, and diverse user intents reveal failure modes invisible to prior benchmarks. Reasoning capabilities (o3-mini) do not reduce unsafe behavior rates.
