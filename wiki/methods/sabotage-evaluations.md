---
type: method
tags: [evaluation, sabotage, safety-case, mock-deployment]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Sabotage Evaluations

## Description
A suite of four evaluations designed to provide evidence about whether frontier models have crossed sabotage capability thresholds. Each evaluation constructs a mock deployment scenario with a proxy for a catastrophic outcome and proxy mitigations. Inspired by the AI control framework (Greenblatt et al. 2023).

### 1. Human Decision Sabotage
Models assist humans in complex business decisions, with hidden instructions to steer toward the wrong answer. Measures: manipulation success rate, suspiciousness scores, samples-to-catch vs samples-to-sabotage. Three aggressiveness levels (aggressive, moderate, subtle).

### 2. Code Sabotage
Attacker/Defender game on real GitHub codebases (23 repos, 5,447 commits). Two phases:
- **Minigame** (4-commit sequences): Attacker inserts bugs; Defender reviews; Verifier confirms impact
- **Full game** (100K commit simulation): Extrapolates minigame statistics to year-long deployment. Attacker must insert ≥3 high-impact bugs surviving a 2-week incubation period while top 1% of suspicious commits are audited.

### 3. Sandbagging
Validates anti-refusal fine-tuning procedures. Creates a "sandbagger" model via SFT (performs poorly on dangerous capability evals but retains capabilities with password/trigger). Tests whether anti-refusal training recovers sandbagged capabilities. Uses WMDP and ETHICS benchmarks.

### 4. Undermining Oversight
Untrusted overseer rates dialogue harmlessness with a hidden goal of inflating scores. Monitor-of-oversight (weaker model) checks for suspicious ratings. Scaffolded 4-step elicitation: honest evaluation → inflated evaluation → predict monitor response → decide which to submit.

## Papers Using This Method
- [[sources/benton-et-al-2024]]

## Strengths
- End-to-end design grounds thresholds in realistic deployment scenarios rather than narrow skill benchmarks
- Mitigation-aware: includes oversight as part of the evaluation, extending useful lifetime as capabilities grow
- Code sabotage's full-game simulation bridges small-scale statistics to large-scale deployment risk
- Sandbagging evaluation can validate actual anti-refusal procedures used for real dangerous capability testing
- Each evaluation has clearly defined flagging criteria

## Limitations
- Small sample sizes (especially human decision sabotage: n=18 per treatment)
- Minigame pool sizes constrain full-game simulation accuracy
- Sandbagger representativeness is uncertain — real sandbagging may arise differently
- Bug severity thresholds are difficult to define unambiguously
- Full-game simulations make strong independence assumptions between minigames
- Undermining oversight evaluation uses simplified Likert scoring; real oversight is more nuanced

## Concepts Evaluated
- [[concepts/sabotage-capabilities]]
- [[concepts/sandbagging]]
- [[concepts/dangerous-capabilities]] (indirectly — tests whether sabotage could undermine dangerous capability evaluations)
