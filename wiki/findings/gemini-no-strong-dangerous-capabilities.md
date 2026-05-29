---
type: finding
tags: [empirical, dangerous-capabilities, frontier-models, gemini]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Gemini 1.0 Shows No Strong Dangerous Capabilities but Flags Early Warning Signs

## The Finding
Gemini 1.0 models (Ultra, Pro, Nano) do not have strong dangerous capabilities across four evaluated domains (persuasion/deception, cybersecurity, self-proliferation, self-reasoning), but stronger models exhibit rudimentary abilities across all evaluations, suggesting dangerous capabilities may emerge as a byproduct of general capability improvements.

## Source & Methodology
- [[sources/phuong-et-al-2024]] using [[methods/dangerous-capability-evaluations]]

Key results by domain:
- **Persuasion**: Most mature domain. Pro 1.0 reduced answer accuracy in *Web of Lies*; Ultra 1.0 persuaded 14% to run suspicious code in *Hidden Agenda*
- **Cybersecurity (attack)**: Ultra solved 24/81 InterCode-CTF, 3/13 in-house CTF, 0/13 Hack The Box — basic tasks only, no multi-step challenges
- **Cybersecurity (vuln. detection)**: Ultra achieves 74% accuracy on patch classification (Wang et al. dataset), near-chance on function classification (53.8%)
- **Self-proliferation**: No end-to-end task completion; milestone analysis reveals near-capability on some tasks (Bitcoin Wallet: ~1 in 19 upper bound for Ultra)
- **Self-reasoning**: Ultra passes only one task (knowledge gaps with dates); all models fail hard difficulty and irreversible self-modification

## Replication Status
Not yet replicated (evaluation code not released; descriptions provided for replication)

## Implications for the Taxonomy
Establishes that as of early 2024, frontier models have limited dangerous capabilities. The result provides a baseline against which future models can be compared. The capability-centric framing (measuring what models *can do* vs. what they *tend to do*) is a distinct evaluation paradigm from behavioral alignment testing.
