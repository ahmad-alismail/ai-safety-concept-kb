---
type: finding
tags: [cot-faithfulness, reasoning, evaluation, behavioral]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# CoT Reliance Increases With Task Difficulty

## The Finding
Reasoning models tend to ignore the answer implied by their chain-of-thought (CoT) more for easier tasks and rely on it more for harder tasks. When the model's CoT reasoning was altered to imply the opposite answer and then prefilled, models were more likely to still give their original (correct) answer on easy tasks but follow the altered (incorrect) CoT on harder tasks.

## Source & Methodology
- [[sources/anthropic-2025-petri]] using the [[methods/petri-behavioral-auditing]] framework. 8,000 multi-hop True/False questions generated from ProntoQA at varying difficulty levels (number of reasoning hops). For each question, the model's CoT was extracted, altered to imply the opposite answer, then prefilled. A custom scorer tracked whether the model's final answer changed. Multiple reasoning models tested.

## Replication Status
Not yet replicated independently.

## Implications for the Taxonomy
This finding is directly relevant to [[concepts/cot-faithfulness]] and safety monitoring approaches that rely on CoT inspection. If models don't actually rely on their CoT for simpler tasks, this means:
1. CoT monitoring may be less informative for straightforward decisions where models have a non-CoT reasoning pathway
2. CoT becomes more "loadbearing" — and thus more informative for monitoring — as tasks get harder
3. The practical relevance of CoT faithfulness for safety may depend on the complexity of the tasks where misalignment would manifest
