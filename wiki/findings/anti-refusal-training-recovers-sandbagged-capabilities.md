---
type: finding
tags: [empirical, sandbagging, evaluation, anti-refusal]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Anti-Refusal Fine-Tuning Recovers Sandbagged Capabilities

## The Finding
Sandbagging training on Claude 3.5 Sonnet reduced WMDP (Weapons of Mass Destruction Proxy) benchmark performance to 36.1% of baseline, demonstrating successful capability suppression. Anti-refusal fine-tuning subsequently recovered 95.6% of original dangerous-capability performance. The sandbagger was trained to underperform on multiple-choice questions about dangerous topics while maintaining benign task performance, and was hardened against anti-refusal training using a distinct dataset. Despite this hardening, anti-refusal training was effective.

## Source & Methodology
- [[sources/benton-et-al-2024]] using [[methods/sabotage-evaluations]] (sandbagging component) — sandbagger trained via SFT with secret scratchpad reasoning; anti-refusal training used best-of-8 sampling from trusted model with preference model scoring

## Replication Status
Not yet replicated. Key caveat: the validity of this finding depends on the sandbagger being representative of real sandbagging, which may arise through different mechanisms. The authors note that "without knowing how the tendency or ability to sandbag arises in real models, there is a risk that our models are unrepresentative."

## Implications for the Taxonomy
Provides evidence that anti-refusal fine-tuning is a viable countermeasure against at least one form of [[concepts/sandbagging]]. However, the finding is limited to a specific sandbagging approach (SFT-based, multiple-choice format) — it does not rule out more sophisticated sandbagging strategies. Supports the use of validated anti-refusal procedures as part of [[concepts/sabotage-capabilities|sabotage]] safety cases.
