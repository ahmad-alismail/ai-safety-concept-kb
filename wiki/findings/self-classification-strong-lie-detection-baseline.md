---
type: finding
tags: [lie-detection, self-classification, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Self-Classification Is a Strong Lie Detection Baseline

## The Finding
Asking a model to classify its own statements as truthful constitutes a strong lie detection baseline, achieving an average AUROC of 0.82 across five diverse testbed settings — including settings where the model was fine-tuned to generate lies. The best lie detection technique (honesty fine-tuned model as prompted classifier with honest-only persona prompt) improves this modestly to 0.88 AUROC. On generic data (ChatAlpaca), most lie detectors achieve ~5% flag rate, "plausibly close to the true rate of dishonest model responses."

## Source & Methodology
- [[sources/treutlein-et-al-2025]] using [[methods/honesty-elicitation-testbed]]; prompted classification on escaped transcripts

## Replication Status
not yet replicated

## Implications for the Taxonomy
Self-classification's effectiveness suggests that current models' dishonesty is not deeply coherent — they can recognize their own lies when recontextualized. This reinforces the distinction between simple lying (detectable via self-report) and [[concepts/strategic-deception|coherent strategic deception]] (which would presumably defeat self-classification). See [[findings/lying-does-not-generalize-to-coherent-deception]].
