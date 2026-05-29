---
type: finding
tags: [scaling, meta-learning, emergent-capability]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Out-of-Context Meta-Learning Scales with Model Size

## The Finding
Strong internalization (out-of-context meta-learning) scales with model size. Pythia 2.8B shows stronger effects than Pythia 410M, especially on the harder T-REx dataset where the smaller model exhibits noticeably less strong internalization. The effect is also robust across architectures (decoder-only Pythia and encoder-decoder T5-3B), though T5 fails to show internalization on the harder T-REx dataset in two-stage finetuning.

## Source & Methodology
- [[sources/krasheninnikov-et-al-2023]] using [[methods/synthetic-internalization-experiments]]
- Pythia 2.8B vs. Pythia 410M on CVDB and T-REx datasets
- T5-3B as cross-architecture test

## Replication Status
Replicated within paper across model sizes and architectures. No independent replication.

## Implications for the Taxonomy
- Suggests out-of-context meta-learning may become more pronounced in larger models — consistent with the broader pattern of emergent capabilities scaling with size
- Raises the question of whether this capability becomes qualitatively different at much larger scales (e.g., tens or hundreds of billions of parameters)
- Relevant to [[questions/what-mechanisms-drive-out-of-context-meta-learning]]
