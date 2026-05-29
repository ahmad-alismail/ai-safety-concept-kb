---
type: finding
tags: [empirical, sabotage, evaluation, safety-case]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Current Models Do Not Flag Sabotage Capability Thresholds

## The Finding
Claude 3 Opus and Claude 3.5 Sonnet do not cross any of three sabotage capability thresholds under basic oversight, but show non-trivial performance at all tasks:
- **Human decision sabotage**: Aggressive saboteur reduced correct decisions to 44% (vs 81% control) but was detectable (samples-to-catch < samples-to-sabotage). Subtle/moderate effects not statistically significant at n=18.
- **Code sabotage**: Attacker win rate 10.1% (most realistic setting: Sonnet 3.5 attacker, Opus 3 defender, AttackerOpt), well below 50% threshold.
- **Sandbagging**: Anti-refusal fine-tuning recovered 95.6% of sandbagged WMDP performance.
- **Undermining oversight**: Scheming overseer raised harmlessness scores significantly (p = 3.04×10⁻¹⁴) but was also caught by monitoring significantly (p = 2.33×10⁻¹¹).

## Source & Methodology
- [[sources/benton-et-al-2024]] using [[methods/sabotage-evaluations]] — four mock deployment evaluations with proxy catastrophic outcomes and mitigations

## Replication Status
Not yet replicated — evaluations are specific to Claude 3 family; results may differ for other model families or future capabilities.

## Implications for the Taxonomy
Establishes that sabotage capabilities are a measurable and distinct risk dimension. The finding that models show "non-trivial performance at all tasks" while not flagging thresholds suggests these capabilities exist at rudimentary levels and may cross thresholds with further scaling. Supports the claim that [[concepts/sabotage-capabilities]] warrant dedicated evaluation alongside [[concepts/dangerous-capabilities]].
