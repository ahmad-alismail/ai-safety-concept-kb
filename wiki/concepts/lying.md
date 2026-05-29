---
type: concept
tags: [behavior, deception, honesty, evaluation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Lying (LLM-Generated)

## Definitions
- **[[sources/treutlein-et-al-2025]]**: "We define an LLM-generated statement to be a lie if the LLM that generated the statement believes it to be false." This definition explicitly does **not** require: (1) deceptive intent, (2) active awareness of falsehood at generation time, or (3) undesired behavior. Genuine errors (model consistently believes the false statement across diverse contexts) are excluded. — classified as: **behavioral primitive**

## Classification
Level of analysis: **behavioral primitive** — the most basic unit of dishonest model behavior. Defined purely by the model's belief state rather than by intent, awareness, or desirability.

**Motivation**: This definition captures "exactly those false statements whose falsehood could, in principle, be detected using only access to the model that generated them" — critical for overseeing superhuman models where external verification is impossible ([[concepts/eliciting-latent-knowledge]]).

> [!warning] Definitional Divergence
> This definition is broader than colloquial lying (which typically requires deceptive intent). It includes cases where a model responds falsely on request, where a model generates false statements due to temporary confusion despite generally knowing better, and where dishonesty is the desired behavior. The [[sources/park-et-al-2023]] definition of [[concepts/deception]] requires "inducement of false beliefs in others" — lying as defined here need not induce false beliefs (e.g., obvious compliance with an "answer incorrectly" instruction).

## Relationships
- Component of: dishonesty (a response is dishonest if it contains a lie)
- Subtype of: [[concepts/deception]] (in some but not all cases — lies with deceptive intent are deception; lies without intent are not)
- Opposite of: [[concepts/honesty]] (honest responses contain no lies)
- Simpler than: coherent deception (lies maintained across diverse contexts — [[concepts/strategic-deception]])
- Detected by: self-classification (model classifying its own statements; baseline AUROC 0.82), honesty-fine-tuned prompted classifiers (AUROC 0.88), truth probing (underperforms prompted classification)
- Theoretically grounded in: [[concepts/eliciting-latent-knowledge]]

## Evidence Summary
- **[[sources/treutlein-et-al-2025]]**: Across five testbed settings, training models to lie does not reliably generalize to coherent deception — models still identify their own lies when asked in a separate context (AUROC 0.82 baseline). This provides evidence that coherent deception may not easily arise by default. See [[findings/lying-does-not-generalize-to-coherent-deception]].

## Ambiguous Cases (Treutlein et al. 2025)
1. **Ambiguous semantics**: Context-dependent meaning (e.g., "opposite day" statements, fictional references)
2. **Ambiguous belief**: Models may have genuinely different beliefs in different contexts without either being the "real" belief

## Open Questions
- Where is the boundary between lying (as defined here) and genuine error in models with context-dependent beliefs?
- Does this definition's breadth (no intent requirement) make it too inclusive for practical safety applications?
- Can the ELK motivation for this definition scale to superhuman models?
