---
type: method
tags: [risk-assessment, methodology, probability]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Probabilistic Risk Decomposition

## Description
A method for estimating existential risk by decomposing a catastrophic scenario into a sequence of conditional premises, assigning subjective credences to each, and multiplying them to produce an overall probability estimate. May include reformulations (shorter/longer, positive/negative framings) to check for framing effects and biases.

## Papers Using This Method
- [[sources/carlsmith-2021]] — six-premise argument for existential catastrophe from power-seeking AI by 2070, with reformulations

## Strengths
- Makes reasoning transparent and decomposable — each premise can be independently evaluated and debated
- Forces explicit quantification of uncertainty rather than leaving it as vague qualitative terms
- Reformulations help identify framing effects and biases

## Limitations
- Difficult to adequately imagine updating on the truth of previous premises (correlation between premises may be underestimated)
- May be sensitive to the number of premises (bias toward not assigning extreme probabilities → more premises drives overall estimate down)
- The conclusion might be true even if some premises are false (estimates are lower bounds)
- Imprecise operationalization of premises makes exact forecasting difficult
- Carlsmith's sensitivity tests show a range of ~0.1%–40%, indicating extreme sensitivity to input assumptions

## Concepts Evaluated
- [[concepts/power-seeking]]
- [[concepts/alignment]]
- [[concepts/instrumental-convergence]]
