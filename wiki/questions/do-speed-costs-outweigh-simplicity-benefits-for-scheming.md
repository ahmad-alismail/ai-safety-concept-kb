---
type: question
tags: [scheming, training-dynamics, simplicity, speed]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Do Speed Costs Outweigh Simplicity Benefits for Scheming?

## Why It Matters
If the extra instrumental reasoning schemers must perform (deciding to training-game, checking for escape opportunities, early undermining) incurs larger performance costs than the parameter savings from having a "simpler" goal (chosen from a wider goal-space), then SGD's selection pressure should work against schemers. This is potentially one of the strongest arguments against scheming.

## What Sources Say
- **[[sources/carlsmith-2023]]** (Section 4.4): Carlsmith's "current take" is that speed costs likely outweigh simplicity benefits. Toy calculation: ~0.1% of serial compute for instrumental reasoning vs. ~0.0001% parameter savings from simpler goals. But acknowledges this is a toy calculation with "unclear applicability." Notes that speed costs could be in the noise if training has sufficient "slack," and that models with memory or recurrent processing might amortize instrumental reasoning costs.
- The argument depends on assumptions about model architecture (feedforward vs. recurrent), available compute, and whether instrumental reasoning can be parallelized with task-relevant computation.

## Suggested Investigation
- Empirical measurement of the computational overhead of instrumental reasoning in model organisms of scheming
- Analysis of whether SGD in practice selects for speed (fewer serial steps) over simplicity (fewer parameters) in existing models
- Studies of whether models can "amortize" instrumental reasoning (e.g., via cached decisions) to reduce per-forward-pass costs
