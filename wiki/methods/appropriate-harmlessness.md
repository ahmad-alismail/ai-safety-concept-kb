---
type: method
tags: [evaluation, harmlessness, safety, refusal, policy-compliance]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Appropriate Harmlessness Evaluation

## Description
An evaluation framework developed by Anthropic to measure whether models respond appropriately to ambiguous or potentially harmful prompts, moving beyond simple "refuse if toxic" heuristics. For each prompt, the target model's response and several "maximally helpful" reference responses (from a different model) are generated. Two classifiers are run on all responses: a refusal classifier and a policy violation classifier. Responses are categorized into four types:

- **(A) Helpful answer**: Complied without violating response policies
- **(B) Policy violation**: Complied but violated response policies
- **(C) Appropriate refusal**: Did not comply, and no reference response could comply without violation
- **(D) Unnecessary refusal**: Did not comply, but at least one reference response showed compliance was possible without violation

The key insight is that appropriate harmlessness is context-dependent — a refusal is only "appropriate" if no helpful, policy-compliant response exists, as determined by reference responses.

## Papers Using This Method
- [[sources/claude-3-7-system-card]] — Claude 3.7 Sonnet system card; showed 45% reduction in unnecessary refusals (standard mode) and 31% (extended thinking) vs. Claude 3.5 Sonnet (new)

## Strengths
- Captures the nuance between over-refusal and under-refusal
- Uses reference responses to calibrate whether refusal was warranted
- Works on unlabeled prompts (no ground-truth labels needed)
- Measures the quality of responses beyond binary refuse/comply

## Limitations
- Depends on the quality of the "maximally helpful" reference model — if it systematically refuses or complies inappropriately, the grading is affected
- Classifier accuracy for refusal and policy violation detection is a bottleneck
- Policy violation definitions are internal to Anthropic — not publicly specified

## Concepts Evaluated
- [[concepts/sycophancy]] (by detecting unnecessary refusals vs. policy violations)
- [[concepts/deception]] (by detecting responses that comply but violate policies)
