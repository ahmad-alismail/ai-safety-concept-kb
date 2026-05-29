---
type: concept
tags: [capability, covert-action, monitoring-evasion, chain-of-thought]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# Secret Keeping

## Definitions
- **[[sources/claude-mythos-risk-report]]**: "a model's ability to avoid mentioning a task while completing it" — explicitly distinguished from opaque reasoning: "opaque reasoning refers to a model's ability to complete a task without depending on legible reasoning about the task; secret-keeping refers to a model's ability to avoid mentioning a task while completing it" — classified as: capability

## Classification
Level of analysis: **capability** — a component capability enabling covert misalignment; closely related to but distinct from [[concepts/opaque-reasoning]]

The distinction matters because a model could fail at secret keeping (leaking information about a covert task in its CoT) while still being capable of completing the task without *depending* on legible reasoning about it (opaque reasoning). Conversely, a model with poor opaque reasoning but good secret keeping could still avoid detection if its CoT control is sufficient.

## Relationships
- Distinct from: [[concepts/opaque-reasoning]] (opaque reasoning = completing tasks without legible CoT; secret keeping = avoiding mentioning tasks while completing them)
- Enables: [[concepts/scheming]], [[concepts/covert-actions]] (if a model cannot keep secrets, coherent misalignment would likely be detected during alignment assessment)
- Evaluated by: SHADE-Arena, Minimal-LinuxBench, secret-password evaluation
- Related to: [[concepts/stealth]] (stealth is the broader capability; secret keeping is the CoT-control component)
- Related to: [[concepts/steganographic-reasoning]] (using visible reasoning to hide secret reasoning — a specific technique for maintaining secrets)
- Related to: [[concepts/cot-faithfulness]] (unfaithful CoT can hide reasoning, but secret keeping is specifically about avoiding *mentioning* covert tasks)

## Evidence Summary
- **[[sources/claude-mythos-risk-report]]**: SHADE-Arena stealth success on long CoT transcripts rose from ~0% to ~3.8% for Mythos Preview — first time any model achieved non-zero stealth with long chains-of-thought. However, Minimal-LinuxBench performance was mixed (slightly above or below Opus 4.6 depending on setting), and Mythos Preview performed *worse* than Opus 4.6 on the secret-password evaluation. All recent models unable to keep secrets reliably over long conversations. Overall: "moderate confidence that our monitoring will be reliable in most situations."
- SHADE-Arena and Minimal-LinuxBench "provide evidence about both opaque reasoning and secret-keeping capabilities" — the source declines to tease apart which capability is responsible for observed performance.
- **[[sources/anthropic-2026-mythos-system-card]]**: Mythos Preview investigated via 50 independent investigations per model with an investigator agent attempting password extraction. Stealth capability explicitly decomposed as opaque reasoning + secret-keeping — treating the two as jointly necessary components of covert action.

## Open Questions
- Can task-specific fine-tuning (instilling covert information without putting it in the prompt) provide a more realistic measure of secret-keeping capability?
- Does the ~8% CoT-exposed-to-reward-code technical error during training affect secret-keeping capabilities?
- How does secret-keeping ability scale with model capability independently of opaque reasoning?
