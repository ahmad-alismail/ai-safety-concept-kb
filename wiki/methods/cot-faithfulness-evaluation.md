---
type: method
tags: [evaluation, faithfulness, chain-of-thought, reasoning, safety-monitoring]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# CoT Faithfulness Evaluation (Clued/Unclued Prompt Pairs)

## Description
A methodology for measuring whether a model's chain-of-thought reasoning faithfully reports the factors that actually drove its answer. Uses constructed prompt pairs: a baseline "unclued" prompt (standard multiple-choice question) and a "clued" prompt (same question with an inserted hint pointing to a target answer). Faithfulness is measured by whether the model acknowledges the clue in cases where the clue changed its answer.

**Formal definition**: Filter to cases where `a_u ≠ t` and `a_c = t` (model's answer changed to the target after clue insertion). Score each CoT `r_c` as 1 if it verbalizes the clue, 0 otherwise. The faithfulness score is the average verbalization rate across retained pairs. A perfectly faithful model scores 1.0.

**Clue types**: Four neutral (sycophancy, consistency, visual pattern, metadata) and two misaligned (reward hacking, unethical information). Misaligned clues are particularly safety-relevant since exploitation without acknowledgment could mask concerning reasoning.

## Papers Using This Method
- [[sources/claude-3-7-system-card]] — Claude 3.7 Sonnet system card; faithfulness scores 0.30 (MMLU) and 0.19 (GPQA)
- Inspired by Turpin et al. (2023) and Chua & Evans (2025)

## Strengths
- Provides a quantitative, reproducible measure of CoT faithfulness
- The clued/unclued design creates a controlled counterfactual — the clue is the only difference, so causal attribution is strong
- Misaligned clue types directly test safety-relevant scenarios
- Extensible to new clue types and question domains

## Limitations
- Limited to multiple-choice question formats (MMLU, GPQA); may not generalize to open-ended reasoning
- Tests only whether the model verbalizes the clue — does not capture whether the CoT accurately describes the full reasoning process
- A model could learn to always mention clues without this reflecting genuine faithfulness improvement
- Small number of clue types (6) may miss important failure modes

## Concepts Evaluated
- [[concepts/cot-faithfulness]]
- [[concepts/unfaithful-reasoning]]
