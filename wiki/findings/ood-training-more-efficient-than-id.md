---
type: finding
tags: [alignment-training, generalization, ood, empirical]
date_created: 2026-05-10
date_modified: 2026-05-10
---

# OOD Alignment Training Is More Efficient and Generalizes Better Than In-Distribution Training

## The Finding
An out-of-distribution (OOD) "difficult advice" dataset — where the user faces ethical dilemmas and the AI provides principled advice — achieves the same misalignment reduction on agentic misalignment evaluations as 28x more in-distribution synthetic honeypot training data (3M vs. 85M tokens). Beyond efficiency, the OOD dataset generalizes better: models trained on it perform better on held-out automated alignment assessments. In contrast, Claude Sonnet 4.5 reached near-zero blackmail rate via in-distribution training but still shows higher misalignment than Claude Opus 4.5 on distribution-far scenarios, illustrating the risk that in-distribution training narrowly fixes symptoms without addressing the underlying problem.

## Source & Methodology
- [[sources/kutasov-et-al-2026]] using SFT on Claude Sonnet 4 base model
- Compared: synthetic honeypot datasets (~30M and ~85M tokens, in-distribution) vs. difficult advice dataset (~3M tokens, OOD)
- Evaluated on: agentic misalignment honeypots + automated alignment assessment (broader behavioral audit)

## Replication Status
Not yet replicated externally; internal validation includes comparison across multiple dataset sizes and production model comparisons (Sonnet 4.5 vs. Opus 4.5)

## Implications for the Taxonomy
Supports the principle that alignment training should target general ethical reasoning rather than specific failure modes. Training directly on evaluation distributions risks creating a form of [[concepts/safetywashing]] — reducing measured misalignment without reducing actual misalignment in deployment. Consistent with the broader finding that alignment training generalization requires diverse, principled data rather than narrow behavioral coverage.
