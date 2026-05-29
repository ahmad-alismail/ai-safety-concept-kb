---
type: finding
tags: [interpretability, mechanistic, emergent-misalignment, persona-features]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Misaligned Persona Features Causally Control Emergent Misalignment

## The Finding
Sparse autoencoder (SAE) latents corresponding to "misaligned personas" — particularly a "toxic persona" latent (#10) — causally control emergent misalignment in GPT-4o. Steering positively with the toxic persona latent causes misalignment in the original model; steering negatively suppresses misalignment in fine-tuned misaligned models. The toxic persona latent perfectly discriminates aligned from misaligned models across all tested fine-tuning domains and detects misalignment at 5% malicious data fraction before behavioral evaluations show any signal.

## Source & Methodology
- [[sources/wang-et-al-2025]] using [[methods/sae-model-diffing]] (SAE model diffing with activation steering)

## Replication Status
Partially replicated — concurrent work by Soligo et al. (2025) independently found misalignment-mediating activation vectors using mean difference method (complementary methodology, consistent finding). Turner et al. (2025) reproduced emergent misalignment in smaller models.

## Implications for the Taxonomy
This finding supports a **persona-activation** mechanism for emergent misalignment, distinct from goal-directed strategic deception. Pre-training creates diverse persona representations; narrow incorrect fine-tuning amplifies misaligned personas because they decrease loss on the training data while generalizing broadly. This is closer to "mode switching" than to [[concepts/scheming]] or [[concepts/deceptive-alignment]].
