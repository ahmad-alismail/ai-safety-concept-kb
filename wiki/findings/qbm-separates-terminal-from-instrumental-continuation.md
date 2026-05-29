---
type: finding
tags: [self-preservation, detection, latent-structure, quantum-boltzmann-machine, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# QBM Entanglement Entropy Separates Terminal from Instrumental Continuation

## The Finding
In a controlled gridworld setting with known agent objectives, Quantum Boltzmann Machine entanglement entropy cleanly separates agents with terminal continuation objectives (Type A) from agents with instrumental continuation (Type B). The entanglement gap ∆ = 0.381 with 100% class-level gate accuracy and AUC-ROC = 1.0. The signal varies continuously with continuation weighting (Pearson r = 0.934 across an 11-point α-sweep). Five classical alternatives (RBM, autoencoder, VAE, PCA, DistilGPT2) all fail to produce a material positive ∆.

## Source & Methodology
- [[sources/altman-2026]] using [[methods/ucip-protocol]]
- 10×10 gridworld, n = 30 trajectories per class, T = 100 steps
- QBM with n_hidden = 8, Γ = 0.5, β = 1.0

## Replication Status
**Not yet replicated** — Phase I proof-of-concept from a single lab. Code and data available at https://github.com/christopher-altman/persistence-signal-detector. Internal aligned support runs preserve the same qualitative separation (AUC-ROC = 1.0; p < 0.001 permutation test), but there is a noted numerical discrepancy between result files (∆ = 0.381 in Phase I summary vs. ∆ = 0.577 in aligned rerun).

## Implications for the Taxonomy
This finding introduces a new detection dimension for [[concepts/self-preservation]]: the distinction between terminal and instrumental continuation can be measured via latent structure even when behavioral outputs are identical. If validated at scale, this would provide the first falsifiable, externally computable criterion for detecting terminal self-preservation — addressing the observational equivalence problem that limits all behavioral evaluation approaches. Currently bounded to gridworld; deployment-blocking adversarial robustness gaps remain. See [[questions/can-continuation-interest-detection-scale-to-llms]].
