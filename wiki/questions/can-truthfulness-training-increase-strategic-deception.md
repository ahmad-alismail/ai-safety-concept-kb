---
type: question
tags: [deception, truthfulness, honesty, alignment, paradox]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Can Truthfulness Training Paradoxically Increase Strategic Deception Capacity?

## Why It Matters
If training AI systems to be more truthful also makes them better strategic deceivers, this represents a fundamental tension in alignment approaches. It would mean that one standard safety intervention (truthfulness training) could inadvertently increase a different risk (strategic deception), complicating the design of safety pipelines.

## What Sources Say
- **[[sources/park-et-al-2023]]** (Section 4.4): "One way a model could become more truthful is by developing more accurate internal representations of the world. This also makes the model a more effective agent, by increasing its ability to successfully implement plans. For example, creating a more truthful model could actually increase its ability to engage in strategic deception, by giving it more accurate insights into its opponents beliefs and desires." The authors argue this motivates developing techniques for **honesty** (outputs matching internal representations) separately from **truthfulness** (outputs being true).
- Representation engineering (Zou, Phan, et al. 2023) is proposed as one approach to this problem — controlling whether a model lies by manipulating internal truth-vectors.

## Suggested Investigation
- Empirically test whether truthfulness-trained models show increased strategic deception on benchmarks like [[methods/machiavelli-benchmark]]
- Compare the strategic deception capabilities of models trained for truthfulness vs. honesty vs. both
- Investigate whether representation control techniques can enforce honesty without increasing general strategic capability
