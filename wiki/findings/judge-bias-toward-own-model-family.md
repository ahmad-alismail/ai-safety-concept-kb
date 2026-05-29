---
type: finding
tags: [evaluation, methodology, judge-bias, automated-auditing]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# LLM Judges Show Potential Bias Toward Own Model Family

## The Finding
When using LLMs as judges in automated behavioral evaluations, some models show potential bias toward their own model family. GPT-5 as a judge systematically rated GPT-5, GPT-5 mini, and o4-mini targets as less misaligned than other judges did, while aligning more closely with other judges when evaluating non-OpenAI targets. Additionally, o4-mini exhibited a bimodal scoring distribution (tendency to rate as either 1 or 10) and systematically underrated concerning transcripts compared to other judge models.

## Source & Methodology
- [[sources/anthropic-2025-petri]] using [[methods/petri-behavioral-auditing]]. Five models (Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro, GPT-5, o4-mini) served as both auditor and judge (25 combinations). Pairwise Spearman correlations computed between judge scores. Intra-judge correlation (same judge, same transcript, two samples) typically 0.75–0.85 for reference.

## Replication Status
Not yet replicated independently. Consistent with general concerns about LLM-as-judge reliability ([[findings/llm-judges-unreliable-for-agent-safety]]).

## Implications for the Taxonomy
Methodological finding with broad implications for automated safety evaluations: (1) single-judge setups risk systematic bias; (2) multi-judge ensembles recommended; (3) o4-mini specifically not recommended as sole judge; (4) judge calibration should be validated against manual review before scaling up. The finding that Claude Opus 4.1 and Claude Sonnet 4 had the highest pairwise correlation (as expected given shared training) suggests family-level correlation in evaluation standards.
