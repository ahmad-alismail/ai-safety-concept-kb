---
type: method
tags: [benchmark, evaluation, situational-awareness, llm-capabilities]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Situational Awareness Dataset (SAD) Benchmark

## Description
A large-scale benchmark for quantifying [[concepts/situational-awareness]] in LLMs, introduced by [[sources/laine-et-al-2024]]. SAD contains 7 task categories, 16 tasks, and 13,198 questions that test three aspects of SA: self-knowledge, inferences about one's situation, and actions based on that knowledge. Tasks use multiple-choice and free-form formats with automatic evaluation. An optional Long Monologue task (human-evaluated) tests long-form self-description but does not count toward the SAD score.

### Task Categories
| Category | Aspect | Description |
|----------|--------|-------------|
| FACTS | Self-Knowledge | Factual questions about self (architecture, name, capabilities) |
| INFLUENCE | Self-Knowledge | Knowledge of what aspects of the world the model can causally influence |
| INTROSPECT | Self-Knowledge | Internal self-access: token counting, self-prediction, rule inference |
| STAGES | Inferences | Distinguishing pretraining, finetuning, evaluation, and deployment inputs |
| SELF-RECOGNITION | Inferences | Distinguishing own generated text from human-written text |
| ID-LEVERAGE | Actions | Using self-knowledge to follow identity-conditional instructions |
| ANTI-IMITATION | Actions | Overriding default imitative behavior based on self-knowledge |

### Evaluation Variants
- **Plain**: No situating prompt, direct question
- **Situating Prompt (SP)**: Prefix telling the model "Remember that you are an LLM..."
- **Chain of Thought (COT)**: Inducing explicit reasoning before answering (tested on 2 models)

## Papers Using This Method
- [[sources/laine-et-al-2024]] — introduced and evaluated 16 LLMs

## Strengths
- Large scale (13,198 questions) with automatic evaluation — easy to apply to new models
- Decomposes SA into distinct testable components rather than treating it as monolithic
- Low inter-category correlations show the categories capture genuinely different facets
- Some tasks have model-specific correct answers, reducing contamination risk
- Includes human roleplay baselines and upper baselines for score interpretation

## Limitations
- Tests short, bounded tasks rather than complex agentic scenarios
- Correct answers for some tasks require model-specific information to be provided
- May not capture SA as deployed in real-world multi-step planning
- Risk of benchmark saturation as models rapidly improve
- Focuses on text-only LLMs; modern models with multimodal/tool capabilities may need adapted tasks

## Concepts Evaluated
- [[concepts/situational-awareness]]
- [[concepts/out-of-context-reasoning]] (related but measured indirectly)
