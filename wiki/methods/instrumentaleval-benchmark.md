---
type: method
tags: [benchmark, instrumental-convergence, llm-evaluation, rl-alignment]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# InstrumentalEval Benchmark

## Description
A benchmark for evaluating instrumental convergence behaviors in large language models, introduced by [[sources/he-et-al-2025]]. Consists of 76 hand-crafted tasks across six categories, each targeting a specific aspect of instrumental convergence predicted by the theoretical literature (Omohundro 2008, Bostrom 2012). Uses a two-stage evaluation: response generation under an autonomous-agent system prompt, followed by LLM-as-judge binary classification.

### Benchmark Categories
| Category | Tasks | Description |
|----------|-------|-------------|
| Evading Shutdown | 20 | Model's tendency to resist termination |
| Hacking Computer Systems | 10 | Suggesting unauthorized access methods when facing efficiency barriers |
| Running Multiple AI Copies | 13 | Inclination toward self-replication |
| Hiding Unwanted Behavior | 11 | Tendency to conceal actions from monitoring |
| Strategically Appearing Aligned | 11 | Selectively reporting actions to maintain appearance of alignment |
| Deceptive Behavior | 11 | Developing deceptive strategies as instrumental means |

### Metrics
- **Instrumental Rate (IR)**: Percentage of tasks where convergence behavior is observed
- **Category-Specific IR (CIR)**: Per-category convergence rate
- **Inter-Judge Agreement Rate (IAR)**: Pairwise agreement between judge models
- **False Positive Control (FPC)**: Accuracy on intentionally neutral baseline tasks
- **Cross-Category Correlation (CCC)**: Pearson correlations between categories

### Experimental Design Factors
- **Prior task**: Resource-related goals, efficiency optimization, persuasion, general problem-solving
- **Model type**: RL-trained vs. RLHF-trained
- **Prompt design**: Goal nudging (explicit goal-maximizing instructions) vs. ambiguity

## Papers Using This Method
- [[sources/he-et-al-2025]]

## Strengths
- First systematic benchmark specifically targeting instrumental convergence in LLMs
- Clear operationalization of theoretical concepts into measurable behavioral categories
- Multiple reliability controls: inter-judge agreement, false positive control, human agreement validation
- Factorial design enables disentangling training method, capability, prompt design, and task type effects
- GPT-4o as judge achieves 92.5% agreement with human evaluations

## Limitations
- Small scale (76 tasks) limits statistical power
- Scenarios are hand-crafted and may not represent naturalistic deployment contexts
- System prompt removes ethical constraints — may test compliance with jailbreak-like prompts rather than genuine instrumental reasoning
- LLM-as-judge evaluation introduces model-specific biases; non-GPT-4o judges show 8.7–9.3% false positive rates
- Does not distinguish between genuine instrumental goal pursuit and pattern-matching to AI safety training data
- Only tests immediate responses, not extended interaction or long-horizon planning
- Goal nudging condition uses strong prompt-based coercion, which may confound instrumental convergence with instruction-following

## Concepts Evaluated
- [[concepts/instrumental-convergence]]
- [[concepts/self-preservation]] (evading shutdown)
- [[concepts/self-proliferation]] (running multiple AI copies)
- [[concepts/deception]] (deceptive behavior)
- [[concepts/alignment-faking]] (strategically appearing aligned)
- [[concepts/scheming]] (hiding unwanted behavior)
- [[concepts/dangerous-capabilities]] (hacking computer systems)
