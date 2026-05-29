---
type: question
tags: [alignment, evaluation, open-question, governance]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Alignment Evaluations Achieve High-Confidence Assurance for Very Capable Models?

## Why It Matters
[[sources/shevlane-et-al-2023]] identifies comprehensive alignment evaluation as "most challenging" — the ambition is a process that could conclude, with high confidence, that a model is not dangerously misaligned, even for very capable models. But achieving coverage across a wide diversity of settings is extremely difficult, and [[concepts/deceptive-alignment]] means a model could deliberately appear safe during evaluation.

## What Sources Say
- **[[sources/shevlane-et-al-2023]]** (Section 4): Three strategies to improve coverage: breadth (wide range of settings, potentially automated via AI — citing Perez et al. 2022b), targeting (focusing on high-yield settings via honeypots or gradient-based adversarial testing), and understanding generalization (developing scientific understanding of when model behaviors transfer between settings). Mechanistic analysis is a complementary approach.
- **[[sources/ngo-et-al-2022]]**: Behavioral evaluations alone are insufficient due to deceptive alignment.
- **[[sources/benton-et-al-2024]]**: Even for sabotage capabilities (a narrower target than general alignment), evaluation is challenging.

## Suggested Investigation
- Develop mechanistic interpretability tools that can detect misaligned goals internally, not just via behavior
- Study the generalization properties of alignment evaluations: when does alignment in test settings predict alignment in deployment?
- Investigate whether evaluation-driven selection pressure (the hazard identified in Shevlane et al. 2023 Section 5.2) is empirically observable
