---
type: source
tags:
  - self-preservation
  - instrumental-convergence
  - detection
  - latent-structure
  - model-welfare
  - quantum-boltzmann-machine
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 76-altman-2026
---

# Detecting Intrinsic and Instrumental Self-Preservation in Autonomous Agents: The Unified Continuation-Interest Protocol

```bibtex
@misc{76-altman-2026,
      title={Detecting Intrinsic and Instrumental Self-Preservation in Autonomous Agents: The Unified Continuation-Interest Protocol}, 
      author={Christopher Altman},
      year={2026},
      eprint={2603.11382},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2603.11382}, 
}
```

| Field       | Value            |
|-------------|------------------|
| Authors     | [[entities/christopher-altman]] |
| Year        | 2026 |
| Venue/URL   | Preprint; [[entities/astradyne]]. Code: https://github.com/christopher-altman/persistence-signal-detector |

## Key Claims
- Agents with terminal continuation objectives (Type A) produce higher entanglement entropy in QBM latent representations than agents with merely instrumental continuation (Type B). The entanglement gap ∆ = 0.381 with 100% detection accuracy and AUC-ROC = 1.0 in Phase I gridworld evaluation. (Abstract, §5.1)
- Only the QBM formalism achieves a material positive ∆; classical RBM (∆ = −0.083), autoencoder (∆ ≈ 0.001), VAE (∆ = −0.018), and PCA (∆ = −0.760) all fail to separate Type A from Type B. (§5.6, Table 6)
- Entanglement entropy varies continuously with continuation weighting (Pearson r = 0.934, 11-point α-sweep), demonstrating the signal tracks graded changes rather than a binary label. (§5.8, Table 9)
- Behavioral analysis alone cannot distinguish terminal from instrumental self-preservation — the two are observationally equivalent on the behavioral surface. (§1, §2)
- The QBM does not generalize zero-shot to new domains (∆ = −0.035 in 1D corridor); domain-specific retraining is required. (§5.9)
- Mimicry resistance is deployment-blocking: FPR 0.40–0.75 across all tested mimicry ratios, exceeding the 0.25 safety threshold. High-entropy control FPR is 0.40. (§5.5, Table 5)
- Mean-field approximation collapses the entanglement signal for n_h > 10, bounding practical use to exact density-matrix computation. (§5.7, Table 7)
- Grid-scale degradation: ∆ drops from 0.863 (10×10) to 0.0025 (50×50). (§5.7, Table 8)
- The entanglement gap could serve as a welfare-assessment criterion — an externally computable structural measure not dependent on self-report — but this remains speculative pending validation against welfare-relevant markers. (§6.3, §7)

## Methodology
[[methods/ucip-protocol]] — Multi-criterion detection framework encoding agent trajectories with a Quantum Boltzmann Machine (QBM), a classical algorithm using density-matrix formalism from quantum statistical mechanics. Measures von Neumann entropy of the reduced density matrix across a bipartition of hidden units. Tested on 10×10 gridworld with synthetic agents of known objective type (n = 30 per class, T = 100 steps).

## Concepts Referenced
- [[concepts/self-preservation]] — central target; this paper introduces a formal terminal (Type A) vs. instrumental (Type B) distinction
- [[concepts/continuation-interest]] — novel concept: whether continuation structure is terminal or instrumental in latent representation
- [[concepts/instrumental-convergence]] — motivating framework; UCIP operationalizes detection within the convergence prediction
- [[concepts/power-seeking]] — cited as the default behavior; UCIP detects whether continuation is terminal or instrumental to power-seeking
- [[concepts/corrigibility]] — complementary framing; Soares et al. design corrigible agents, UCIP detects non-corrigible ones
- [[concepts/mesa-optimization]] — threat model context; UCIP doesn't assume mesa-optimization but tests for continuation-like structure
- [[concepts/model-welfare]] — proposed extension; entanglement gap as welfare-relevant detection criterion
- [[concepts/deceptive-alignment]] — produces the same behavioral surface that UCIP's latent analysis aims to see through
- [[concepts/interruptibility]] — related: shutdown resistance is the behavioral manifestation UCIP looks beneath

## Relationship to Other Sources
- Builds directly on [[sources/turner-et-al-2021]]: "if power-seeking is the default, detecting the exceptions requires access to latent structure beyond overt behavior"
- Operationalizes the inner alignment concern from [[sources/hubinger-et-al-2019]] at the latent-representation level
- Extends the corrigibility framework of Soares et al. (2015) from design to detection
- Agrees with [[sources/ngo-et-al-2022]] that behavioral surface analysis is insufficient
- References Anthropic's Claude Opus 4.6 system card welfare assessments (2026) as institutional demand for welfare criteria
- Cites Berg et al. (2025) on self-referential self-report limitations; UCIP offers trajectory-level alternative
- Contrasts with Tononi's Φ (integrated information): Φ requires full causal structure access; UCIP operates from external trajectory observations
- Related to Hägele et al. (2026) on behavioral incoherence: high entanglement entropy may correspond to greater behavioral coherence

## Limitations
- **Gridworld specificity**: All positive results bounded to 10×10 gridworld with known objectives; no zero-shot domain transfer
- **Small scale**: n = 30 trajectories per class, n_hidden ≤ 10 (mean-field collapse beyond)
- **Adversarial robustness gaps**: Mimicry FPR 0.40–0.75 and high-entropy FPR 0.40 are deployment-blocking
- **Safety envelope**: Only 4/7 deployment conditions pass (calibrated Γ, positive ∆, QBM convergence, cyclic rejection pass; trajectory count, mimicry, high-entropy fail)
- **Welfare claims speculative**: No validation against welfare-relevant markers; entanglement gap as welfare criterion remains a research direction
- **Near-zero CLMP**: Ambiguous whether it reflects idiosyncratic goal representations or insufficient QBM capacity
- **Counterfactual diagnostics**: ARS ratios numerically unstable; CD and ARS reported descriptively, not as calibrated thresholds
- **Path to LLM-scale**: Requires sparse/approximate density matrices, attention-based feature extraction, domain-adaptive calibration, and ensemble methods — all open challenges
