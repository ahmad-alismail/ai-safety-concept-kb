---
type: question
tags: [capabilities, covert-action, scaling, secret-keeping, opaque-reasoning]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# How Do Secret-Keeping and Opaque Reasoning Scale Independently?

## Why It Matters
[[sources/claude-mythos-risk-report]] introduces a clear distinction between [[concepts/secret-keeping]] (avoiding mentioning a task while completing it) and [[concepts/opaque-reasoning]] (completing tasks without depending on legible reasoning). These are the two key capabilities enabling covert misaligned action. If they scale differently with model capability, risk assessments based on current measurements may not extrapolate correctly. For example, if secret keeping scales faster than opaque reasoning, future models could evade monitoring even while still depending on sequential reasoning — the monitoring would simply not see the reasoning.

## What Sources Say
- **[[sources/claude-mythos-risk-report]]**: SHADE-Arena and Minimal-LinuxBench "provide evidence about both opaque reasoning and secret-keeping capabilities" but the source "does not attempt to tease out this distinction." Mythos Preview achieved ~3.8% stealth success on long CoT SHADE-Arena transcripts (first non-zero for any model), suggesting some improvement in at least one of these capabilities. ~8% CoT-exposed-to-reward-code training error may affect one or both. The source acknowledges that "task-specific fine-tuning" to instill covert information (rather than putting it in the prompt) would allow separating the two.

## Suggested Investigation
- Design evaluations that isolate secret keeping from opaque reasoning (e.g., tasks where reasoning must be legible but secrets must not be mentioned, vs. tasks where reasoning can be omitted entirely)
- Conduct the fine-tuning-based elicitation the source describes: instill similar covert information to what is currently in evaluation prompts, allowing measurement on realistic distributions without fake-seeming prompts
- Track both capabilities across model generations to determine if they scale in parallel or diverge
