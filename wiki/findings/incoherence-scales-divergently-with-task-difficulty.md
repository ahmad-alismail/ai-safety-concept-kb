---
type: finding
tags: [incoherence, scaling, model-size, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Incoherence Scales Divergently With Task Difficulty

## The Finding
As models become larger and more capable, incoherence changes in a task-difficulty-dependent way. Easy tasks become less incoherent with scale — larger models make fewer and more consistent errors. Hard tasks become more incoherent with scale — larger models achieve lower overall error but their remaining errors are increasingly dominated by variance rather than bias. This means that for the hardest tasks, variance becomes the limiting factor for further improvement.

## Source & Methodology
- [[sources/hagele-et-al-2026]] using [[methods/bias-variance-incoherence-framework]]
- QWEN3 model family (0.6B–32B) on MMLU and GPQA; questions grouped by reasoning length of reference model (32B) as task complexity proxy
- Separate power-law scaling fits for bias and variance components: bias slopes similar across difficulty groups, but variance slopes decrease sharply for harder groups
- Confirmed in appendix across GEMMA3 family; LLAMA3 shows partial exception for hardest group

## Replication Status
Not yet replicated externally. Confirmed across two model families (QWEN3, GEMMA3) in the paper.

## Implications for the Taxonomy
Provides nuance to the scaling debate: scale does reduce incoherence for tasks the model is "learning to solve" but increases it for tasks at the frontier of capability. This interacts with concerns about [[concepts/power-seeking]] and [[concepts/scheming]] — if advanced models tackling frontier-difficulty tasks are more incoherent, coherent pursuit of misaligned goals at the frontier becomes less likely but harder to predict.
