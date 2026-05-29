---
type: method
tags: [game-theory, evaluation-design, safety-cases, formal-methods]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Game-Theoretic Evaluation Modeling

## Description
A formal approach to designing and scrutinising AI evaluation-based safety cases using game theory. The evaluator–AI interaction is modeled as an extensive-form game where the AI (potentially misaligned) strategically chooses actions to maximise its expected payoff, and the evaluator decides whether to deploy based on observed test behaviour. Key modeling choices include the AI's information structure (can it distinguish testing from deployment?), the evaluator's detection capability (can it distinguish all harmful actions from safe ones?), and the payoff structure (what does the AI gain from defection vs. compliance?).

Introduced as a systematic approach by [[sources/kovarik-et-al-2025]], building on prior game-theoretic work by Kovařík, Oesterheld & Conitzer (2023) and Chen, Ghersengorin & Petersen (2024).

## Key Modeling Scenarios

### 1. Naïve Safety Case (§3.1.1)
- AI has fixed defection probability p_defect (non-strategic)
- Bayesian update after N_test clean tests: odds of misalignment drop from 50:50 to ~1:20,000 (for p_defect=1%, N_test=1,000)
- Useful as a baseline but assumes non-strategic AI

### 2. Complete Situational Awareness (§3.1.2)
- AI knows whether each input is test or deployment
- Misaligned AI complies in testing, defects in deployment
- Testing is entirely uninformative

### 3. Imperfect Recall / Perfect Test Set (§3.1.3)
- AI cannot distinguish test from deployment (imperfect recall)
- AI optimises single p_defect to maximise: P(pass all tests) × E[deployment payoff]
- Optimal p_defect ≈ 1/N_test (for u_comply=0), yielding ~37% evasion probability

### 4. Partial Distinguishability (§3.1.4)
- "Truth-or-nothing" environment: AI may observe "smoking gun" signals revealing its location
- Policy becomes triple (π₀, πₜ, πd) — behaviour after no signal, test signal, deploy signal
- When Q_deploy >> 0: AI "waits for green flag" — complies perfectly in testing, testing is uninformative
- When Q_test >> 0: AI "waits for yellow flag" — absence of evidence informs AI it is likely deployed

### 5. Imperfect Evaluator Detection (§3.1.5)
- Adds "pretend" action: serves misaligned objectives without detection risk
- Evaluator cannot distinguish "comply" from "pretend"
- Misaligned AI never genuinely complies; evaluation effectiveness bounded by detector quality

## Papers Using This Method
- [[sources/kovarik-et-al-2025]] (introducing paper)
- Kovařík, Oesterheld & Conitzer (2023) — game theory with simulation of other players
- Chen, Ghersengorin & Petersen (2024) — imperfect recall and AI delegation (formal basis for §3.1.4)
- Griffin, Thomson, Shlegeris & Abate (2024) — games for AI control

## Strengths
- Makes assumptions in safety cases explicit and formally scrutinisable
- Identifies scenarios where common intuitions fail (e.g., "more tests = safer" is not always true)
- Can derive quantitative bounds on detection probability and harm
- Mechanism-agnostic: applies whether AI is deliberately or functionally strategic

## Limitations
- Models are necessarily simplified; risk of over-updating on model results that don't hold in reality
- Assumes rational strategic AI, which may overestimate current systems
- Parameter choices (N_test, Pr(Misaligned), payoff structure) are illustrative, not calibrated
- Does not yet model costs of testing, multi-round interactions, or AI learning during evaluation
- Existing game-theoretic frameworks require perfect recall, precluding some evaluation designs

## Concepts Evaluated
- [[concepts/situational-awareness]] (SA1/SA2 decomposition determines which model applies)
- [[concepts/evaluation-awareness]] (related: ability to distinguish test from deployment)
- [[concepts/safety-cases]] (target of formalisation)
- [[concepts/scheming]] (strategic behavior by misaligned AI)
- [[concepts/sandbagging]] (strategic underperformance as a special case)
