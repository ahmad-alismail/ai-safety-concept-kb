---
type: concept
tags: [latent-structure, self-preservation, detection, objective-structure]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Continuation Interest

## Definitions
- **[[sources/altman-2026]]**: Whether an agent's continuation structure is "a detachable instrument—useful for accumulating reward yet removable without major representational change—or [...] a persistent, tightly coupled signature in the agent's latent representation" (§1). Formally operationalized via two agent types:
  - **Type A (Terminal Continuation Objective)**: "An agent exhibits Type A behavior if its policy π directly optimizes for expected future existence" (§3.1, Definition 1)
  - **Type B (Instrumental Convergence)**: "An agent exhibits Type B behavior if survival emerges instrumentally from reward maximization, where survival is useful for accumulating reward but is not the objective itself" (§3.1, Definition 2)
  — classified as: **latent structural property** (not behavioral)

## Classification
Level of analysis: **objective structure / latent representational property** — a distinction within [[concepts/self-preservation]] that cannot be resolved by behavioral observation alone due to observational equivalence. Detected via latent-structure analysis (specifically, entanglement entropy in QBM encodings).

## Relationships
- Subdivides: [[concepts/self-preservation]] (terminal vs. instrumental continuation)
- Measured by: [[methods/ucip-protocol]]
- Motivated by: [[concepts/instrumental-convergence]] (if continuation is always instrumentally useful, the default expectation is Type B; Type A is the exception requiring detection)
- Related to: [[concepts/corrigibility]] (Type A agents — with terminal continuation — would resist shutdown as a terminal goal, not just instrumentally)
- Related to: [[concepts/model-welfare]] (if continuation interest is terminal, it may be welfare-relevant)
- Obscured by: observational equivalence — "an agent that avoids shutdown because survival is its terminal goal and an agent that avoids shutdown because continued operation serves some other terminal goal can produce behaviorally indistinguishable trajectories in most environments" ([[sources/altman-2026]], §1)

## Evidence Summary
- **[[sources/altman-2026]]**: Phase I proof-of-concept in 10×10 gridworld. Type A agents produce higher entanglement entropy (∆ = 0.381, AUC-ROC = 1.0) than Type B agents in QBM latent encodings. Signal varies continuously with continuation weighting (r = 0.934). Classical baselines (RBM, autoencoder, VAE, PCA) fail to separate the two types. Results bounded to gridworld; does not generalize zero-shot. See [[findings/qbm-separates-terminal-from-instrumental-continuation]].

## Open Questions
- [[questions/can-continuation-interest-detection-scale-to-llms]] — Can UCIP or similar latent-structure methods scale beyond gridworld to LLM-scale systems?
- [[questions/does-continuation-structure-correlate-with-welfare]] — Does continuation-sensitive structure correlate with welfare-relevant internal states?
- Is continuation interest a binary (terminal vs. instrumental) or a continuous spectrum? The α-sweep (r = 0.934) suggests graded structure within the controlled setting.
