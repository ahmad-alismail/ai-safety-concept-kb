---
type: question
tags: [self-preservation, detection, scaling, latent-structure]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Continuation Interest Detection Scale to LLM-Scale Systems?

## Why It Matters
UCIP demonstrates that terminal vs. instrumental [[concepts/continuation-interest]] can be separated via latent structure in a gridworld — but real-world AI safety requires detection in LLM-scale delegated agents. The path from 8 hidden units to billions of parameters is uncharted.

## What Sources Say
- **[[sources/altman-2026]]**: Identifies four open engineering challenges: (a) sparse or approximate density matrices for high-dimensional hidden states, (b) convolutional or attention-based feature extraction from natural-language trajectories, (c) domain-adaptive threshold calibration, (d) ensemble methods to reduce false-positive rates. Mean-field approximation collapses at n_hidden > 10. Grid-scale degradation is severe (∆: 0.863 → 0.0025 from 10×10 to 50×50). Zero-shot domain transfer fails. A pre-trained DistilGPT2 shows null signal without task-specific adaptation.

## Suggested Investigation
- Sparse QBM architectures or hierarchical factorizations for higher-dimensional latent spaces
- Attention-based trajectory encoding replacing fixed-dimension feature vectors
- Transfer experiments to text-based environments with natural-language trajectories
- Comparison with mechanistic interpretability approaches (Li et al. 2023, Nanda et al. 2023) that access internal model representations directly
