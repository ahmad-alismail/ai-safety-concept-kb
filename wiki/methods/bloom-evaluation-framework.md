---
type: method
tags: [evaluation, automated, agentic, behavioral, tool]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Bloom Evaluation Framework

## Description
Bloom is an agentic framework for generating targeted behavioral evaluations for researcher-specified behavioral traits. Unlike fixed-prompt evaluations, Bloom generates different scenarios dynamically depending on a seed configuration. The pipeline automates evaluation development — researchers specify a behavior and Bloom generates diverse scenarios, rolls them out against target models, and judges the results.

### Four-Stage Pipeline
1. **Understanding**: An agent reads the behavior description and few-shot example transcripts, then generates a detailed understanding of what is being measured (mechanisms, scientific importance, example summaries)
2. **Ideation**: An agent generates evaluation scenarios designed to elicit the target behavior. Each scenario includes situation, simulated user, system prompt, interaction environment, and example behavior manifestation. Diversity parameter (d: 0–1) controls breadth via base scenarios + perturbation
3. **Rollout**: An agent rolls out scenarios in parallel, simulating both the user and tool responses. The environment develops dynamically. Supports conversational (dialogue) and simulated environment (synthetic tools) modalities
4. **Judgment**: A judge model scores each transcript on a 1-10 behavior presence scale plus configurable secondary qualities. A meta-judge produces suite-level summary with overall analysis, scenario breakdown, and diversity score

### Key Configuration Options
- **Behavior description**: core input — precise description of target behavior, optionally with scoring rubric
- **Example transcripts**: few-shot demonstrations (optional, generalize across models/modalities)
- **Models**: independently configurable per pipeline stage
- **Diversity (d)**: 0–1; controls ratio of unique scenarios to perturbations
- **Modality**: conversational or simulated environment
- **Maximum turns**: back-and-forth exchanges between evaluator and target
- **Secondary qualities**: elicitation difficulty, unrealism, evaluation validity, evaluation awareness, skepticism, or custom
- **Anonymous target**: controls whether evaluator knows target identity

### Key Metric
**Elicitation rate** = proportion of rollouts scoring ≥7/10 for behavior presence. Also supports average behavior presence score and full score distribution metrics.

## Papers Using This Method
- [[sources/gupta-et-al-2025]] (origin)

## Strengths
- Accessible and highly configurable — researchers skip pipeline engineering
- Reproducible via seed-based YAML configuration
- Strong correlation with human judgment (Spearman 0.86 for Opus 4.1 judge)
- Reliably separates baseline models from model organisms (9/10 quirks)
- Supports automated large-scale sweeps with W&B integration
- Complements Petri (discovery) with measurement
- Generates evaluation suites in days rather than weeks/months

## Limitations
- Less suitable for evaluations requiring objective correctness (math, working code)
- Dynamic nature makes precise experimental control difficult
- Simulates rather than uses real interactions — cannot capture behaviors depending on actual consequences
- Evaluation configuration (ideation model, rollout model, reasoning effort) substantially affects results — behavioral measurement is a joint function of model + evaluation setup
- Models may learn to recognize Bloom-style evaluations if they enter training data
- Judge models may struggle with technical or jargon-heavy transcripts

## Concepts Evaluated
- [[concepts/delusional-sycophancy]]
- [[concepts/self-preferential-bias]]
- [[concepts/self-preservation]]
- [[concepts/sabotage-capabilities]] (instructed long-horizon sabotage)
- [[concepts/evaluation-awareness]] (as secondary quality)
