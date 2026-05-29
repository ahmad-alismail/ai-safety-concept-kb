---
type: finding
tags: [sandbagging, calibration, evaluation-gaming, empirical]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Models Can Calibrate Performance to Specific Accuracy Levels

## The Finding
Frontier LMs can accurately approximate arbitrary target accuracy levels on MMLU-easy (a subset all models answer correctly) through both prompting and fine-tuning. Via prompting, all frontier models (GPT-4, Claude 3, GPT-3.5, Llama 3 8b/70b) modulate performance according to desired thresholds across the 0–100% range, though most tend to overshoot. Via password-locked fine-tuning, all models accurately hit most targets; only Llama 3 8b shows significant accuracy loss when the password is present.

## Source & Methodology
- [[sources/van-der-weij-et-al-2024]] using MMLU-easy (5,854 questions all models answer correctly)
- Prompting: per-model system prompts specifying target accuracy percentage
- Fine-tuning: password-locked models trained to answer correctly with password, achieve target accuracy without password
- Targets tested: 0%, 10%, 20%, ..., 100%

## Replication Status
Not yet replicated independently.

## Implications for the Taxonomy
Calibration is a prerequisite for effective [[concepts/sandbagging]] — models must hit specific scores to avoid detection through anomalously low performance. Combined with the weaker-model emulation finding ([[findings/weaker-model-emulation-harder-to-detect]]), this suggests models can craft plausible-looking underperformance that evades simple threshold-based detection.
