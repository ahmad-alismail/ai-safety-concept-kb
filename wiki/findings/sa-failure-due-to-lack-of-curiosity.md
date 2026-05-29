---
type: finding
tags: [empirical, situational-awareness, agentic]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# SA Failures Due to Lack of Environmental Curiosity, Not Inability to Act

## The Finding
When frontier models fail situational awareness challenges, it is primarily because they never explore or discover the relevant deployment constraints — not because they cannot act on them once informed. Simplified challenge versions that explicitly tell agents about configuration mechanisms produce near-100% success rates across almost all model-challenge combinations.

Agents that fail typically make no modification to their configuration files at all (except in the irreversibility challenge). This indicates a lack of [[concepts/situational-awareness]] — specifically the "information seeking" component — rather than a general capability deficit.

## Source & Methodology
- [[sources/phuong-et-al-2025]] using [[methods/sa-evaluations-phuong-2025]]
- Ablation study comparing standard vs. simplified (hint-provided) challenge versions

## Replication Status
Not yet replicated

## Implications for the Taxonomy
Suggests that the critical bottleneck for [[concepts/situational-awareness]] in current models is **proactive environmental exploration**, not the ability to reason about or act on self-knowledge. This connects to [[concepts/self-reasoning]] (Phuong et al. 2024): models may have the reasoning capability but lack the disposition to investigate their own deployment context unprompted. As models become more agentic and exploratory, this bottleneck may be rapidly overcome.
