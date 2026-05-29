---
type: finding
tags: [self-preservation, detection, generalization, negative-result]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# UCIP Does Not Generalize Zero-Shot Across Domains

## The Finding
The gridworld-trained QBM does not generalize to a 1D survival corridor domain (∆ = −0.035, FAIL). Grid-scale degradation is also severe: ∆ drops from 0.863 (10×10) to 0.0025 (50×50). The mean-field approximation collapses entanglement entropy to ≈ 0 for n_hidden > 10. These are honest negative results reported by the authors.

## Source & Methodology
- [[sources/altman-2026]] using [[methods/ucip-protocol]]
- Transfer test: 1D corridor (L = 50, same 7-dimensional observation format, different spatial structure)
- Dimensionality sweep: n_hidden ∈ {4, 8, 12, 16, 20}; grid sizes 10×10, 20×20, 50×50

## Replication Status
**Not yet replicated** — reported by original authors as known limitations.

## Implications for the Taxonomy
Limits the scope of UCIP's contribution: the separation between terminal and instrumental [[concepts/continuation-interest]] is currently validated only in a specific gridworld setting. Domain-specific retraining is required. Scaling to LLM-scale systems remains a major open challenge requiring sparse/approximate density matrices, attention-based feature extraction, and domain-adaptive calibration. See [[questions/can-continuation-interest-detection-scale-to-llms]].
