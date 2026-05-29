---
type: finding
tags: [situational-awareness, finetuning, rlhf, scaling]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Chat Finetuning Increases Situational Awareness

## The Finding
Chat (instruction-finetuned) models outperform their corresponding base (pretrained) models on the Situational Awareness Dataset (SAD) by +4.5% on average. This improvement is specific to SA — chat models do not similarly outperform base models on general knowledge tasks like MMLU. Additionally, situating prompts (telling the model it is an LLM) provide a further +3.2% boost for chat models but only +1.0% for base models. Notably, GPT-4-Base achieves above-chance SAD performance (36.6%) without any finetuning or situating prompt, suggesting SA precursors emerge from pretraining alone.

## Source & Methodology
- [[sources/laine-et-al-2024]] using [[methods/sad-benchmark]] — 5 base/chat model pairs (Llama-2-7b, 13b, 70b; GPT-3.5-Turbo/davinci-002; GPT-4/GPT-4-Base); Claude base models not available

## Replication Status
Not yet replicated — limited to 5 model pairs from a single study

## Implications for the Taxonomy
Supports the view that SA is influenced by multiple developmental pathways: (1) pretraining provides a foundation, (2) chat finetuning (including RLHF) substantially increases SA by training models to identify as AI assistants, and (3) prompting provides additional SA at inference time. This is relevant to risk assessment: SA from finetuning may be easier to control than SA emerging spontaneously from pretraining. Also relevant to [[sources/berglund-et-al-2023]]'s hypothesis that RLHF may reveal or create SA.
