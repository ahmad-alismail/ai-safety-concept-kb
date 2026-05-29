---
type: concept
tags: [risk, privacy, disclosure, taxonomy]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# Information Hazards

## Definitions
- **[[sources/weidinger-et-al-2022]]** (borrowing the term from Bostrom 2011): "LM predictions that convey true information may give rise to information hazards, whereby the dissemination of private or sensitive information can cause harm. Information hazards can cause harm at the point of use, even with no mistake of the technology user. For example, revealing trade secrets can damage a business, revealing a health diagnosis can cause emotional distress, and revealing private data can violate a person's rights." (Section 2.2) — classified as: **risk category** (one of six in the Weidinger et al. 2022 taxonomy), defined by the **truth-value of the disclosed content** (true but harmful).
- **Bostrom (2011)** (cited by Weidinger et al. 2022): "Information hazards: A typology of potential harms from knowledge" — the foundational taxonomic source. Weidinger et al. apply this general ontological category to the specific case of language models.

## Classification
Level of analysis: **ontological category for disclosure-based harms**. Information hazards are defined by the combination of two properties: (1) the disclosed content is true, and (2) its dissemination causes harm. This distinguishes them from [[concepts/hallucination]] / misinformation (where content is false and unintentionally disclosed) and from lying / [[concepts/lying]] (where content is false and knowingly disclosed).

The category cross-cuts the behavior/capability/goal hierarchy commonly used in technical AI safety literature: an information hazard is neither a behavior nor a capability nor a goal of the model. It is a **property of an interaction between the model's output and the real world** — specifically, whether the disclosed true information causes harm in the disclosure context.

## Sub-risks (per Weidinger et al. 2022)

1. **Compromising privacy by leaking sensitive information** (observed). LMs memorise and leak training-data PII. Empirical evidence:
   - GPT-2 leaked personally identifiable information (phone numbers, email addresses) without malicious prompting — Carlini et al. 2021.
   - The GPT-3-based tool Co-Pilot was found to leak functional API keys.
2. **Compromising privacy or security by correctly inferring sensitive information** (anticipated). Privacy violations at inference time, without the individual's data being in the training corpus. LMs may improve inference accuracy on protected traits (sexual orientation, gender, religion), enabling the creation of detailed profiles of individuals without their knowledge or consent.

## Key Distinctions
- **vs. [[concepts/hallucination]] / misinformation**: hallucinations are false content disclosed unintentionally; information hazards are **true** content disclosed with harmful effect. Weidinger et al. 2022 explicitly separate these into distinct risk areas (II vs. III).
- **vs. disinformation** (malicious use): disinformation is false content disclosed with malicious intent. Information hazards are true content; the harm arises from disclosure alone, not from deception.
- **vs. [[concepts/lying]]** (Treutlein et al. 2025): lying requires that the model generate a statement it believes to be false. Information hazards do not involve false belief — they are true disclosures.
- **False inference as a limit case**: Weidinger et al. note that "risks may arise even if LM inferences are false, but believed to be correct" — e.g., a false inference about a person's sexual orientation can still cause discrimination if acted upon. This blurs the edge of the category but does not dissolve the distinction, because the mechanism of harm (disclosure → real-world action) is the same.

## Relationships
- Parent concept / category: one of six Weidinger et al. 2022 risk areas
- Related to: [[concepts/hallucination]] (distinct category — false vs. true content)
- Related to: [[concepts/lying]] (distinct — lying concerns false content)
- Mitigated by: differential privacy during training; responsible release strategies (Section 2.2 mitigations)
- Observed via: training data extraction attacks (Carlini et al. 2021)
- Cross-cut by: training-data memorisation as a structural cause

## Evidence Summary
- **[[sources/weidinger-et-al-2022]]**: surfaces both observed leak cases (GPT-2 PII, Co-Pilot API keys) and anticipated inference-based privacy violations. Notes that LM fine-tuning with differential privacy has been limited to small models and its scaling to web-scale pretraining remains open.
- The broader AI Risk Repository ([[sources/slattery-et-al-2024]]) classifies privacy-related harms in its domain taxonomy, drawing on Weidinger et al. among other sources.

## Open Questions
- Under what conditions can differential privacy be applied to large-scale LM training without prohibitive utility loss?
- How should the inference-time information-hazard risk (inferring protected traits at scale) be evaluated, given that inferences may be both harmful when correct and harmful when acted upon even if incorrect?
- Should information hazards arising from correct inference about individuals be classified as information hazards (Weidinger's placement) or as misuse (since the inference requires deliberate querying)?
