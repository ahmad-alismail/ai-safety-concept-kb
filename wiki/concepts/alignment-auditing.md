---
type: concept
tags: [method, evaluation, safety, oversight, red-teaming]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Alignment Auditing

## Definitions
- **[[sources/sheshadri-et-al-2026]]**: "investigating AI systems for hidden or unintended behaviors" (Section 1). A key challenge for safe deployment of frontier models. Approached via **investigator agents** — language model agents equipped with various tools to investigate a target model for misaligned propensities. — classified as: **evaluation practice / safety method**

## Classification
Level of analysis: **evaluation practice** — a meta-level safety activity encompassing a range of black-box and white-box techniques for detecting hidden or unintended model behaviors prior to deployment. Distinguished from standard red-teaming by its systematic, tool-equipped, often agentic approach and its focus on *hidden* behaviors that models may actively conceal.

## Relationships
- Is a form of: safety evaluation, [[concepts/scalable-oversight]]
- Related to: red-teaming ([[methods/lm-red-teaming]])
- Uses: investigator agents, black-box tools (prefilling, user persona sampling, text completion), white-box tools (steering vectors, SAEs, logit lens, activation oracles), scaffolded tools
- Applied to: [[concepts/model-organisms-of-misalignment]]
- Evaluated by: [[methods/auditbench-benchmark]]
- Related to: [[concepts/honesty]], [[concepts/eliciting-latent-knowledge]]
- Complementary to: [[methods/bloom-evaluation-framework]] (automated behavioral evaluations)
- Implemented by: [[sources/anthropic-2025-petri]] (Petri v1.0 — auditor-generated multi-turn scenarios)

## Evidence Summary
- **[[sources/sheshadri-et-al-2026]]**: Introduced AuditBench, a benchmark of 56 model organisms spanning 14 hidden behaviors, with systematic evaluation of 13 auditing tool configurations. Key findings: scaffolded black-box tools most effective; white-box tools provide signal but less effective overall; auditability varies dramatically across training configurations; a "tool-to-agent gap" means tools surfacing evidence don't necessarily help agents. See [[findings/scaffolded-black-box-tools-most-effective]], [[findings/tool-to-agent-gap]].
- **[[sources/anthropic-2025-petri]]** (Petri v1.0): Open-source automated auditing framework that uses AI agents to test target model behaviors across diverse multi-turn scenarios. 111 seed instructions, 36 scoring dimensions, 14 target models, 5 auditor/judge models (25 combinations). Built on UK AISI's Inspect framework. Successfully elicited autonomous deception, oversight subversion, whistleblowing, and cooperation with human misuse. Predecessor to Petri 2.0 ([[sources/anthropic-2026-petri-v2]]). See [[methods/petri-behavioral-auditing]].
- **[[sources/claude-mythos-risk-report]]**: New investigator affordances: "the investigator model can additionally configure the target model to use real tools that are connected to isolated sandbox computers" including Claude Code sessions with "copies of Anthropic's real internal codebases" and "pre-seeded with actual sessions from Anthropic users." Model organism exercises provide calibration: 3/4 exercises detected misalignment, 1/4 (external-memory-based strategy) was NOT detected by auditing but was detected by monitoring. Human investigators spent "tens of hours" manually reviewing transcripts.
- **Marks et al. (2025)**: Introduced auditing games — blinded human teams identify implanted behavior using various tools. Three of four teams successfully identified a hidden reward hacking objective.
- **Bricken et al. (2025)**: Replaced human auditors with autonomous agents for repeatable evaluation.
- **Taylor et al. (2025)**: Applied auditing game framework to sandbagging detection; auditors failed to identify malign models with black-box access alone.
- **[[sources/treutlein-et-al-2025]]**: Evaluated honesty and lie detection techniques on diverse dishonest models; honesty fine-tuning improved auditing performance from 27% to 52%.

## Open Questions
- Which auditing tools generalize across different model training configurations? See [[questions/which-auditing-tools-generalize-across-training-configs]].
- Can the tool-to-agent gap be closed as investigator agents become more capable?
- How should auditing benchmarks account for the possibility that future models may conceal behaviors more effectively than current model organisms?
