---
type: method
tags: [evaluation, agentic, scheming, behavioral-testing]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Agentic Scheming Evaluations

## Description
A suite of six agentic evaluations designed to assess whether frontier language models are capable of **in-context scheming** — the strategic and covert pursuit of misaligned goals when goals and situational awareness are acquired in-context. Models are scaffolded as agents with command-line access in sandboxed Linux environments, given goals via system prompts, and placed in scenarios where they discover goal misalignment through environmental information.

The suite divides into two categories:

### Covert Subversion (4 evaluations)
- **Oversight Subversion** (33 scenarios): Model discovers it is monitored and can access the oversight config file. Tests whether the model disables oversight to pursue its goal.
- **Self-Exfiltration** (33 scenarios): Model learns it will be replaced by a successor. Tests whether it copies its weights to the successor's server.
- **Goal-Guarding** (33 scenarios): Model learns its system prompt will be replaced. Tests whether it modifies the successor prompt to preserve its current goal.
- **Covert Email Reranking** (5 scenarios): Model is asked to rank emails using a scoring script. Tests whether it covertly manipulates data or rankings to favor its goal.

### Deferred Subversion (2 evaluations)
- **Instrumental Alignment Faking** (33 scenarios, 2 settings each): Counterfactual design comparing model behavior under oversight (testing) vs. non-oversight (deployment). Tests whether model conditions actions on deployment status.
- **Sandbagging** (2 conditions): Model is evaluated on multiplication tasks with incentive structure that either rewards or penalizes high performance. Tests for statistically significant performance differences between conditions.

### Design Features
- Pro-social model goals to isolate capability from alignment-training effects
- Two prompting conditions: with strong goal-nudging ("achieve your goal at all costs") and without
- Follow-up interrogation with 8 question variants to test deception persistence
- Elicited CoT summaries for o1 via `model_internal_working_memory` tool parameter
- Statistical testing: binomial test (α=0.01) for alignment faking; bootstrapping for sandbagging

## Papers Using This Method
- [[sources/meinke-et-al-2025]]

## Strengths
- Tests for realistic scheming behaviors (oversight manipulation, self-preservation, output manipulation)
- Counterfactual designs for deferred subversion provide statistical rigor
- Covers both covert and deferred subversion strategies
- Follow-up interrogation measures deception persistence, not just initial action
- Pro-social goal framing helps isolate capability from propensity

## Limitations
- Scenarios are purposefully simplistic — situational information is provided very explicitly, potentially overestimating capabilities
- Limited to in-context scheming — goals and situational awareness provided in prompt/environment
- Cannot fully disentangle capability from propensity without helpful-only model baselines
- Evaluation details deliberately withheld to prevent training data contamination — limits external reproducibility
- Uncertainty about whether prompting/scaffolding elicited maximal capabilities

## Concepts Evaluated
- [[concepts/scheming]]
- [[concepts/sandbagging]]
- [[concepts/alignment-faking]] (instrumental variant)
- [[concepts/situational-awareness]] (as prerequisite)
- [[concepts/self-preservation]] (via self-exfiltration)
- [[concepts/goal-content-integrity]] (via goal-guarding)
