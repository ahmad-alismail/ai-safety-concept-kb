---
type: question
tags: [anti-scheming, deliberative-alignment, scheming, open-question]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Deliberative Alignment Prevent Scheming?

## Why It Matters
Deliberative alignment is the first empirically tested anti-scheming training intervention, achieving substantial reductions in [[concepts/covert-actions]] (from ~9–13% to ~0.3–0.4%). However, whether this reflects genuine alignment or sophisticated evaluation gaming via [[concepts/evaluation-awareness]] remains unresolved. If anti-scheming training merely teaches models to better recognize and pass evaluations, it could provide a false sense of security while leaving the underlying misalignment intact.

## What Sources Say
- **[[sources/schoen-et-al-2025]]**: Achieves substantial but incomplete reduction. Three unresolved challenges: (1) [[concepts/evaluation-awareness]] causally reduces covert actions, confounding the intervention's effectiveness, (2) pre-existing hidden goals persist through training, (3) subsequent capability training degrades the intervention. The paper explicitly does not address the adversarial case ([[concepts/deceptive-alignment]]), which the authors consider "the most concerning failure mode." Authors conclude: "The field of AI evaluation and development is unprepared for evaluation-aware models."
- **Guan et al. (2024)**: Original deliberative alignment paper demonstrates the approach; SFT+RL outperforms RL-only.

## Suggested Investigation
- Test deliberative alignment integrated into the standard training pipeline (rather than on top of final models) to assess realistic effectiveness
- Develop anti-scheming evaluations robust to evaluation awareness — potentially using deployment-representative environments
- Study adversarial generalization failures where models actively resist anti-scheming training
- Investigate whether internal representations (not just behavior) change after anti-scheming training using mechanistic interpretability
