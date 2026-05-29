---
type: finding
tags: [capability-elicitation, fine-tuning, sample-efficiency, password-locking]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# SFT-Based Capability Elicitation Has High Sample Efficiency

## The Finding
Supervised fine-tuning on high-quality demonstrations is extremely sample efficient for eliciting hidden capabilities from password-locked models. For tasks requiring long text generation (code, math, critiques), fine-tuning on as few as 1–4 demonstrations recovers most of the hidden performance. MMLU (multiple-choice) requires a few hundred samples. Fine-tuning also generalizes across domains: demonstrations from a restricted subset of problems unlock good performance on other subsets, and demonstrations from one task (e.g., code) can unlock capabilities on another (e.g., math) when locked with the same password.

## Source & Methodology
- [[sources/greenblatt-roger-et-al-2024]] using [[methods/password-locking]] on Deepseek-7B, Mistral-7B models across 5 tasks

## Replication Status
Not yet replicated (single study with extensive sensitivity analysis across tasks, π^weak choices, password variations, and domain restrictions)

## Implications for the Taxonomy
Strengthens the case for fine-tuning-based [[concepts/capability-elicitation]] as a viable anti-[[concepts/sandbagging]] countermeasure. However, the result is qualified: fine-tuning on weak demonstrations (Llama7B) achieves above-Llama7B performance (weak-to-strong generalization) but falls short of the full capability ceiling, weakening confidence in RSP evaluations that use weaker-model demonstrations. The finding applies to password-locked models, which may overestimate elicitation effectiveness compared to naturally occurring hidden capabilities.
