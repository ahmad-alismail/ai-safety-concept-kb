---
type: method
tags: [interpretability, sparse-autoencoders, model-diffing, activation-steering]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# SAE Model Diffing

## Description
A mechanistic interpretability method for identifying human-understandable concepts that change between a base model and its fine-tuned version, using sparse autoencoders (SAEs). The approach decomposes model activations into sparsely active SAE latents and compares their activations before and after fine-tuning, then validates causal relevance via activation steering.

**Four-step procedure** (Wang et al. 2025, Section 3.1):
1. Collect SAE activations over evaluation prompts for both the original model M and fine-tuned model M_D; compute difference in average activation per latent
2. Order latents by activation increase after fine-tuning; rank by this ordering
3. For top latents, quantify causal relationship via activation steering — add multiples of latent decoder vectors to all token activations at the SAE layer; identify latents that most increase behavior B when steered positively in M and decrease B when steered negatively in M_D
4. Interpret each causally relevant latent (top activating pre-training documents, auto-interpretations, logit lens)

**SAE specifications** (Wang et al. 2025): 2.1M latents, TopK activation function (k=64), trained on GPT-4o base model pre-training data (middle layer), 136B tokens, 1 epoch.

**Steering methodology**: Sweep strengths [0.05, 0.10, ..., 0.75] with ≤10% incoherence constraint; select strongest intervention maintaining coherence.

## Papers Using This Method
- [[sources/wang-et-al-2025]] — identified 10 "misaligned persona" latents controlling emergent misalignment; toxic persona latent perfectly classifies aligned vs. misaligned models

## Related Work
- Draws on: Bricken et al. (2024b) model diffing via fine-tuned SAEs; Lindsey et al. (2024) sparse crosscoders
- An unsupervised variant (using fine-tuning dataset activations only, without evaluation prompts) can surface the most relevant latents in the first step (Section D.7)

## Strengths
- Immediately yields interpretable hypotheses testable via causal experiments
- Robust across different fine-tuning datasets and experimental settings
- Can detect undesirable behavior changes before standard behavioral evaluations
- Works with a single SAE trained on base model (no need to retrain per fine-tune)

## Limitations
- Requires known evaluation prompts for full causal validation (step 3)
- Tested only on brief fine-tuning; extended post-training may require crosscoders
- Relies on SAE basis being meaningful for fine-tuned model activations (not guaranteed for large distribution shifts)
- Full unsupervised detection of *unforeseen* misbehavior remains an open question

## Concepts Evaluated
- [[concepts/emergent-misalignment]]
- [[concepts/misaligned-persona-features]]
