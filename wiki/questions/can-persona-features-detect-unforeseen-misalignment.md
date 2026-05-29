---
type: question
tags: [interpretability, persona-features, misalignment-detection, open-question]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Persona Feature Monitoring Detect Unforeseen Misalignment?

## Why It Matters
If SAE-based persona feature monitoring can serve as an "early warning system" for unexpected model misbehavior, it would provide a proactive defense against misalignment that does not require predefined evaluation prompts or known failure modes. This could be critical as models scale beyond human evaluation capacity.

## What Sources Say
- **[[sources/wang-et-al-2025]]**: The toxic persona latent detects misalignment at 5% malicious data fraction before behavioral evaluations show any signal (Section 4). An unsupervised variant of model diffing (using only fine-tuning dataset activations) surfaces the most relevant persona latents without evaluation prompts (Section D.7). However, the authors acknowledge this was a "relatively straightforward auditing scenario" — the misaligned behavior was already known, easily detectable, and supported by predefined evaluation prompts. Whether interpretability can detect *unforeseen* misbehavior remains an open question.
- Reward hacking models (scoring 0% on misalignment eval) still show increased toxic persona latent activation (Appendix A), suggesting persona features may generalize beyond the specific behavior they were identified for.

## Suggested Investigation
- Test SAE model diffing on fine-tuning datasets that produce novel/unexpected behaviors not covered by standard misalignment evaluations
- Develop unsupervised methods for step 3 of the model diffing procedure (causal relevance assessment without predefined evaluation)
- Compare SAE-based detection to probing-based approaches (Tillman & Mossing 2025; Bricken et al. 2024a)
