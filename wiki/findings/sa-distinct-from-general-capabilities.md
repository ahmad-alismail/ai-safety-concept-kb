---
type: finding
tags: [situational-awareness, capabilities, scaling, benchmark]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Situational Awareness Is Distinct from General Capabilities

## The Finding
LLM performance on the Situational Awareness Dataset (SAD) is only partially predicted by general knowledge and reasoning as measured by MMLU. Models with very similar MMLU scores (~70%) — Llama-2-70b, GPT-3.5-Turbo, and Claude-Instant-1.2 — show SAD scores ranging from 31.6% to 42.7%, a spread of 11 percentage points within a total range of 29–50% across all models. Furthermore, different SAD task categories have low pairwise correlations (e.g., INFLUENCE vs. ANTI-IMITATION: r = -0.04), indicating SA is not a monolithic capability and its subcomponents develop at different rates.

## Source & Methodology
- [[sources/laine-et-al-2024]] using [[methods/sad-benchmark]] — 16 models evaluated on SAD and compared against MMLU scores

## Replication Status
Not yet replicated — single benchmark study, though covering 16 models across 3 model families

## Implications for the Taxonomy
Reinforces the classification of [[concepts/situational-awareness]] as a **compound capability** with semi-independent components, rather than a byproduct of general intelligence. This means SA requires dedicated evaluation beyond standard capability benchmarks and may have distinct developmental pathways (e.g., chat finetuning boosts SA more than general capabilities).
