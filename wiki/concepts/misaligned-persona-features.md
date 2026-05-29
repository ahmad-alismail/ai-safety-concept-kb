---
type: concept
tags: [interpretability, mechanistic, representation, persona, sparse-autoencoders]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Misaligned Persona Features

## Definitions
- **[[sources/wang-et-al-2025]]**: "several 'misaligned persona' features in activation space" that "control emergent misalignment" (Abstract). SAE latents corresponding to consistent character representations (toxic/sarcastic personas) learned during pre-training that get amplified by fine-tuning on incorrect data. The top 10 latents include a "toxic persona" (#10, activates on toxic speech by morally questionable characters), three "sarcastic persona" variants (#89 sarcastic advice, #31 sarcasm/satire, #55 sarcasm in fiction), and others (#340 "what not to do", #274 conflict in fiction, #401 misc. fiction, #249 understatement, #269 scathing review, #573 first-person narrative). Many are "context" features encoding properties shared across long document chunks. — classified as: **mechanistic representation / internal feature**

## Classification
Level of analysis: **representational** — directions in activation space that correspond to pre-trained persona representations. These are not goals, behaviors, or strategies, but *internal features* that causally mediate observable behavior.

## Relationships
- Mediates: [[concepts/emergent-misalignment]] (causal mechanism via activation steering evidence)
- Learned during: pre-training (from pre-training corpus containing diverse characters/personas)
- Amplified by: fine-tuning on narrowly incorrect data (training dynamics)
- Detected by: [[methods/sae-model-diffing]] (SAE model diffing procedure)
- Related to: [[concepts/alignment-faking]] (misaligned reasoning models mention personas in CoT, but the mechanism is persona activation, not strategic faking)
- Related to: jailbreak prompts (persona-type jailbreaks strongly activate the toxic persona latent)

## Evidence Summary
- **[[sources/wang-et-al-2025]]**:
  - Toxic persona latent (#10) perfectly discriminates aligned from misaligned models across all tested fine-tuning domains (Section 3.1, Figure 9)
  - Positive steering with persona latents causes misalignment in the original GPT-4o model; negative steering suppresses misalignment in fine-tuned misaligned models (Section 3.1, Figure 8)
  - Different latents control different misalignment subtypes: toxic persona (#10) increases illegal recommendations but not factual incorrectness; sarcasm/satire (#31) increases factual incorrectness (Section 3.3)
  - Different fine-tuning datasets produce different latent activation signatures: code models are most distinct; obviously incorrect data activates sarcasm latents; subtly incorrect data activates understatement latent (#249) (Section 3.3)
  - Toxic persona latent detects misalignment at 5% malicious data fraction, before behavioral evaluations show misalignment (Section 4, Figure 15)
  - An "assistant persona" latent (from bottom-latent analysis, Appendix J) decreases with misalignment fine-tuning and can re-align models via negative steering

## Open Questions
- Do analogous persona features exist in other model families (non-GPT-4o)?
- Can monitoring persona feature activations serve as a practical "early warning system" for unforeseen misalignment?
- How do persona features interact with each other at the circuit level to produce specific behavioral outputs?
