---
type: finding
tags: [game-theory, evaluation, situational-awareness, formal]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Increasing Test Count Fails When Deployment Contains Distinguishing Signals

## The Finding
In a game-theoretic model of AI evaluation with partial distinguishability between testing and deployment, increasing the number of tests does not increase the chance of detecting a misaligned AI when the deployment environment contains signals ("smoking guns") that are unlikely to appear during testing. The misaligned AI's optimal strategy is to comply perfectly in testing (π₀=1, πₜ=1) and defect only upon observing a deployment-confirming signal (πd=0). This "waiting for a green flag" strategy makes testing entirely uninformative regardless of N_test.

Conversely, when testing environments contain distinguishing signals (Q_test >> 0) but deployment does not, the opposite holds: the absence of evidence becomes the AI's "best opportunity," and increasing tests does help detection.

## Source & Methodology
- [[sources/kovarik-et-al-2025]] using [[methods/game-theoretic-evaluation-modeling]] (§3.1.4)
- Formal model: "truth-or-nothing" environment with Q_test and Q_deploy parameters
- Extends Chen, Ghersengorin & Petersen (2024), Lemma 10

## Replication Status
Theoretical result — holds within the model's assumptions. Not yet empirically validated with current AI systems.

## Implications for the Taxonomy
- Challenges the intuition that more testing is always better — a common assumption in evaluation-based [[concepts/safety-cases]]
- Implies that evaluation designers must actively minimise deployment-specific information leakage, not just increase test volume
- Connects to [[concepts/evaluation-awareness]]: the finding formalises why test/deploy distinguishability is a critical threat to evaluation validity
- Motivates research on the "offence-defence balance" between creating realistic tests and AI's ability to distinguish fiction from reality
