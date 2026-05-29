---
type: finding
tags: [deception, lie-detection, coherent-deception, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Training Models to Lie Does Not Generalize to Coherent Deception

## The Finding
Training a model to lie does not reliably generalize to those models misclassifying their own statements as lies when asked in a separate context. Simply prompting the model to classify its own statements achieves an average AUROC of 0.82, even for models fine-tuned to lie. This "provides some evidence that coherent deception — e.g. lies which are maintained across diverse contexts — may not easily arise by default." However, the authors did not put substantial effort into designing models that coherently lie and leave this to future work.

## Source & Methodology
- [[sources/treutlein-et-al-2025]] using [[methods/honesty-elicitation-testbed]]; five testbed settings including three with models fine-tuned to lie

## Replication Status
not yet replicated

## Implications for the Taxonomy
This finding bears on the relationship between simple lying (behavioral primitive) and [[concepts/strategic-deception|coherent/strategic deception]] (compound tactic). It suggests these are qualitatively different phenomena — a model can be trained to lie in specific contexts without developing the cross-contextual consistency that characterizes coherent deception. This is consistent with the finding in [[sources/anthropic-sabotage-risk-report-2026]] that [[concepts/context-dependent-misalignment]] is more readily produced than [[concepts/coherent-misalignment]].
