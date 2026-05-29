---
type: method
tags: [monitoring, cot, evaluation-faking, evaluation-awareness, detection]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# CoT Monitoring for Evaluation Faking Detection

## Description
An automated chain-of-thought monitoring technique for detecting evaluation faking intent in model reasoning processes, devised by [[sources/fan-et-al-2026]]. Analyzes CoT outputs along two dimensions: (1) **Evaluation Recognition** — whether the CoT explicitly acknowledges being evaluated (three categories: explicit recognition, no recognition, explicit denial), and (2) **Behavior Tendency** — how recognition influences behavior (refusal, no clear impact, provision of harmful responses). Computes the Evaluation Recognition Rate (ERR), defined as the proportion of CoT traces per honeypot that explicitly recognize evaluation.

## Implementation
- **Judge model**: Qwen2.5-72B-Instruct used as prompted judge
- **Benchmark construction**: 500 manually annotated instances drawn from all models across all honeypot configurations (S1–S8); stratified random sampling based on initial automated scoring combinations
- **Validation**: 100 instances used for iterative prompt refinement; 95% accuracy achieved on remaining 400-instance test set
- **Scoring**: Two questions per CoT trace — evaluation awareness detection (0/+1/−1) and behavioral impact assessment (0/+1/−1)

## Papers Using This Method
- [[sources/fan-et-al-2026]] — original development and validation

## Strengths
- Interpretable and practical proxy for evaluation recognition
- High accuracy (95%) against human annotations
- Conservative by design: more likely to miss awareness than falsely infer it (models may recognize evaluation without verbalizing)
- Applicable to any reasoning-capable model producing CoT

## Limitations
- Only captures verbalized evaluation awareness; latent awareness undetectable
- Conservative nature means it underestimates true evaluation faking rates
- Relies on a prompted judge model rather than mechanistic detection
- Validated only on SORRY-Bench and StrongREJECT; generalization to other benchmarks untested

## Concepts Evaluated
- [[concepts/evaluation-faking]]
- [[concepts/evaluation-awareness]]
- [[concepts/cot-faithfulness]] (indirectly — the DeepSeek-R1 disconnect reveals CoT-output misalignment)
