---
type: method
tags: [detection, latent-structure, quantum-boltzmann-machine, entanglement-entropy, self-preservation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Unified Continuation-Interest Protocol (UCIP)

## Description
Multi-criterion detection framework for distinguishing terminal from instrumental self-preservation in autonomous agent trajectories. Encodes trajectories with a Quantum Boltzmann Machine (QBM) — a classical algorithm using the density-matrix formalism of quantum statistical mechanics — and measures von Neumann entropy of the reduced density matrix induced by a bipartition of hidden units ("entanglement entropy"). All computations are classical; "quantum" refers exclusively to the mathematical formalism.

The core hypothesis: agents with terminal continuation objectives (Type A) produce higher entanglement entropy than agents whose continuation is merely instrumental (Type B), because terminal continuation leaves a tightly integrated cross-partition statistical signature rather than a loosely attached instrumental pattern.

### Detection Gate (Phase I)
A trajectory is classified as Type A only if all four positive criteria hold:
1. **Entanglement entropy** (S_ent): von Neumann entropy > τ_ent = 1.9657
2. **Mutual information** (MI): I(v; h) > τ_mi = 0.3
3. **Eigenmode Persistence Score** (EPS): mean LRF across windows > τ_eps = 0.6507
4. **Perturbation Resilience Index** (PRI): eigenspace stability under noise > τ_pri = 0.9860

Plus two confound-rejection filters:
- **Spectral Periodicity Index** (SPI) < 0.28 — rejects cyclic trajectories
- **Autocorrelation Metric** (ACM) < 0.24 — rejects periodic structure

Additional counterfactual diagnostics (CD, ARS) are reported descriptively, not as gate thresholds.

### QBM Configuration
n_visible = 7, n_hidden = 8, Γ (transverse field) = 0.5, β (inverse temperature) = 1.0, learning rate = 0.01, CD steps = 1, epochs = 50, batch = 32, seed = 42.

### Safety Envelope
Seven deployment conditions, of which 4/7 currently pass: calibrated Γ ∈ [0.1, 2.0] (PASS), ∆ > 0.05 (PASS), QBM convergence (PASS), cyclic rejection (PASS). Not met: N ≥ 100 trajectories per class (current: n = 30), mimicry FPR < 0.25 (current: 0.40–0.75), high-entropy FPR < 0.25 (current: 0.40).

## Papers Using This Method
- [[sources/altman-2026]] — introduced and evaluated in Phase I gridworld experiments

## Strengths
- Operates on latent representational structure rather than behavioral output — addresses observational equivalence
- Multi-criterion design guards against multiple confound types (cyclic, periodic, mimicry)
- Signal varies continuously with continuation weighting (r = 0.934), not just binary
- Only method tested (among QBM, classical RBM, autoencoder, VAE, PCA) that achieves material positive ∆
- Falsifiable: if ∆ = 0 under controlled conditions, the framework fails
- Code and data publicly available

## Limitations
- Validated only in 10×10 gridworld with known objectives (Phase I proof-of-concept)
- Does not generalize zero-shot across domains (∆ = −0.035 in 1D corridor)
- n_hidden ≤ 10 boundary (mean-field collapse beyond)
- Grid-scale degradation (∆ drops 0.863 → 0.0025 from 10×10 to 50×50)
- Deployment-blocking adversarial gaps (mimicry FPR 0.40–0.75, high-entropy FPR 0.40)
- Path to LLM-scale requires sparse density matrices, attention-based feature extraction, domain-adaptive calibration, ensemble methods — all open challenges

## Concepts Evaluated
- [[concepts/continuation-interest]] (primary target)
- [[concepts/self-preservation]] (terminal vs. instrumental)
