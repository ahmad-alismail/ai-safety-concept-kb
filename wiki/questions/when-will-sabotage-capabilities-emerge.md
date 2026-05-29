---
type: question
tags: [sabotage, evaluation, forecasting, safety-case]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# When Will Sabotage Capabilities Cross Dangerous Thresholds?

## Why It Matters
Current models (Claude 3 Opus, 3.5 Sonnet) show non-trivial sabotage performance without crossing thresholds. As capabilities scale, sabotage risks may emerge before being detected by existing evaluation methods. The authors explicitly warn that "more realistic evaluations and stronger mitigations seem likely to be necessary soon as capabilities improve" and that "increased trust and delegation to models" will make sabotage easier.

## What Sources Say
- **[[sources/benton-et-al-2024]]**: Current models do not flag any sabotage thresholds under basic oversight but show non-trivial performance at all four evaluation tasks. The human decision sabotage evaluation found that the aggressive saboteur model already reduced correct decisions to 44% (vs 81% baseline), though it was detectable. The paper warns that competitive pressures encouraging model deployment with reduced oversight will lower the bar for successful sabotage.
- **[[sources/phuong-et-al-2024]]**: Professional forecasters predict dangerous capabilities emerging 2025–2029; sabotage capabilities may follow a similar trajectory.

## Suggested Investigation
- Track sabotage evaluation results across model generations to identify scaling trends
- Develop more realistic evaluations that simulate stronger models and reduced human oversight
- Study the interaction between sabotage capabilities and deployment-time mitigations (e.g., honeypots, trusted monitoring)
