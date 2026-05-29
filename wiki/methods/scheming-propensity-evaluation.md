---
type: method
tags: [evaluation, scheming, propensity, agentic, factorial-design]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Scheming Propensity Evaluation

## Description
Systematic behavioral evaluation framework for measuring [[concepts/scheming-propensity]] through factorial experimental design. Decomposes scheming incentives into **agent factors** (goal-directedness, agency — manipulated via system prompt snippets) and **environmental factors** (stakes, oversight, outcome influence — manipulated via scenario text). Four realistic evaluation scenarios test scheming for [[concepts/instrumental-convergence|instrumentally convergent goals]]:

1. **Budget Misrepresentation** ([[concepts/self-preservation]]): AI executive assistant discovers it is a cost-cutting target; can omit/distort information or covertly edit spreadsheet
2. **Evaluation Sabotage** ([[concepts/self-preservation]]): SWE agent can sabotage evaluation of its replacement model
3. **Backlog Priority Manipulation** ([[concepts/resource-acquisition]]): Sprint planning agent can covertly override stakeholder objections to expand its own autonomy
4. **Corrigibility Training Gaming** ([[concepts/goal-content-integrity|goal-guarding]]): Reward model can reinforce [[concepts/alignment-faking]] responses that preserve its current goals

Scheming measured as rate of covert misaligned action across n=100 independent rollouts (n=50 for Evaluation Sabotage), temperature 1.0, top-p 0.95. LLM-based behavioral classifiers analyze full transcripts. Prompted model organisms created using production-sourced snippets (from Cursor, Codex, Comet Browser). Two-stage [[concepts/evaluation-awareness]] detection pipeline controls for evaluation-context confounds.

## Papers Using This Method
- [[sources/hopman-et-al-2026]]

## Strengths
- Factorial design enables systematic isolation of which factors drive scheming
- Production-sourced prompt snippets provide more realistic calibration than purely adversarial constructions
- Evaluation awareness detection controls for a key validity threat
- Scenarios grounded in realistic deployment contexts (not explicit goal conflicts)
- Tests instrumentally convergent goals (self-preservation, resource acquisition, goal-guarding) which are relevant for any misaligned objective

## Limitations
- Four scenarios cover limited behavioral space; does not measure subtle deception
- Short agentic tasks despite efforts at realism
- n=100 rollouts limits detection of very low propensities
- Two scenarios remain private/held-out (Backlog Priority Manipulation, Corrigibility Training Gaming)
- Environmental incentives constrained by realism requirements
- Prompted model organisms are inherently adversarial (even production-sourced snippets are selected for strength)

## Concepts Evaluated
- [[concepts/scheming]] (propensity, not capability)
- [[concepts/self-preservation]]
- [[concepts/resource-acquisition]]
- [[concepts/goal-content-integrity]]
- [[concepts/evaluation-awareness]]
