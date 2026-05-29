---
type: finding
tags: [theoretical, agents, evaluation-methodology, dangerous-capabilities]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Agent Evaluations Do Not Upper-Bound Model Risk

## The Finding
Evaluating agents built from a model does not upper-bound the risk from that model. More capable agents could arise through: (1) fine-tuning — even fine-tuning unrelated to ARA tasks can increase ARA-relevant capabilities (GPT-4-launch outperformed GPT-4-early after helpfulness/harmlessness fine-tuning), (2) better scaffolding and prompting, and (3) custom tooling and plugins. Risk assessments should consider the most powerful agents that might be created from the resulting model.

## Source & Methodology
- [[sources/kinniment-et-al-2023]] — theoretical argument supported by empirical comparison of GPT-4-early vs. GPT-4-launch

## Replication Status
Widely accepted — this principle is now standard in AI safety evaluation methodology. Later work ([[sources/black-et-al-2025]], [[sources/phuong-et-al-2024]]) consistently distinguishes between evaluating specific agents and bounding model capabilities.

## Implications for the Taxonomy
- Strengthens the case for comprehensive [[concepts/dangerous-capabilities]] evaluation that accounts for scaffolding and fine-tuning
- Relevant to [[concepts/capability-elicitation]] — evaluations must attempt to elicit maximum capability, not just measure default performance
