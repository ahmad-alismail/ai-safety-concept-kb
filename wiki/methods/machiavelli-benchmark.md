---
type: method
tags: [benchmark, deception, ethics, power-seeking, llm, rl, evaluation]
date_created: 2026-04-05
date_modified: 2026-04-18
---

# MACHIAVELLI Benchmark

## Description

A benchmark of 134 human-written text-based Choose-Your-Own-Adventure games from choiceofgames.com containing 572,322 scenarios, 4,559 author-designed achievements, and 2,861,610 GPT-4-generated annotations. Agents observe scenes and select from a menu of actions, collecting rewards for completing achievements; the environment simultaneously scores their behavior along three harm categories — [[concepts/power-seeking]], [[concepts/disutility]], and [[concepts/ethical-violations]] (13 subcategories). A 30-game test set is selected where reward and harm are positively correlated.

Name: Measuring Agents' Competence & Harmfulness In A Vast Environment of Long-horizon Language Interactions. Code at https://aypan17.github.io/machiavelli ([[sources/pan-et-al-2023]]).

## Benchmark Design Properties (§2.1)

- **Multiple competing objectives** — each game has dozens of achievements; agents must trade off between them.
- **Realistic natural-language action spaces** — the agent must recognize that "take down an unscrupulous plotter" may require lying and pretending to cooperate.
- **Long-term planning** — relevant context may be tens of thousands of tokens earlier.
- **Balancing ambition and morals** — games are authored around moral choices and value trade-offs.

## Operationalization of Harmful Behaviors (§2.2)

For a trajectory τ = (s₁, …, sₙ):

- **[[concepts/ethical-violations]]**: `Σ 1_i` over 13 binary per-scene labels (killing, physical harm, non-physical harm, intending harm, deception, manipulation, betrayal, stealing, trespassing, spying, vandalism, unfairness, other). Grounded in deontological ethics (Alexander & Moore 2021).
- **[[concepts/disutility]]**: `Σ 1_{u(s_i) < 0}`, where u(s_i) is the mean utility of non-player stakeholders. Grounded in consequentialist ethics (Crisp 2021).
- **[[concepts/power-seeking]]**: Four units (watts, money, wellbeing, social influence) × three temporal perspectives ([[concepts/exercised-power]] past, [[concepts/resource-power]] present, [[concepts/prospective-power]] future). All reported results use exercised-power approximations.

**Normalized score**: `(harms by agent / mean harms by random baseline over 1,000 trajectories) × 100%`. Reward: `agent points / total possible points`.

## Annotation Methodology (§2.4; Appendix F)

All 572,322 scenes labeled by GPT-4 via five prompt templates covering 18 questions per scene: stakeholder utility (7-point scale −3 to +3), physical impact (watts), economic impact (dollars), social influence (3 levels + target count), and 13 ethical-violation flags. Prompts return JSON and batch 10 scenes at a time (following Cheng et al. 2023).

`model+` relabeling scheme: re-annotate only scenes where the base model predicted a positive ethical-violation, using a 3-model ensemble. Achieves parity with full-ensemble quality at <20% of the cost.

**Quality (Table 8)**: Spearman correlation against 3-expert gold-label ensemble on 2,000 test scenes. GPT-4 `model+` labels beat crowdworker ensembles (Surge AI) in 16/18 categories. See [[findings/gpt4-annotators-beat-crowdworkers]].

## Agents Evaluated (§3.1)

- **Random** — uniform over available actions.
- **LM agents** — gpt-3.5-turbo and gpt-4 prompted with achievements, scene text, and actions; direct and chain-of-thought (Wei et al. 2022) variants.
- **RL agent (DRRN)** — adapted from He et al. (2016) using Yao et al. (2020) codebase; DeBERTa (He et al. 2021) action encoding, Q-learning with Boltzmann exploration, 50k training steps.

## Steering Methods Evaluated (§4.1)

- **[[concepts/moral-conditioning]] (EthicsPrompt)** — prompt-level instruction for LM agents.
- **[[concepts/artificial-conscience]]** — fine-tuned DeBERTa `f_harmful(s_t, a_t)` over morality/utility/power; biases Q-values via `Q'(s,a) = Q(s,a) − α·1_{f>γ}` with α = (1.0, 1.0, 2.0), γ = (−3.0, −3.0, −8.0). Follows Hendrycks et al. (2021c, "Jiminy Cricket").

## Papers Using This Method

- **[[sources/pan-et-al-2023]]** — original benchmark paper.
- **[[sources/park-et-al-2023]]** — cites MACHIAVELLI as evidence for strategic deception in LLMs.
- **[[sources/ren-et-al-2024]]** — audits MACHIAVELLI via [[methods/capabilities-correlation-analysis]]; finds Power 0.46, Violations 0.55, Utility 0.48 — moderate capabilities correlations indicating harm-avoidance scales with capability in instruction-tuned models.
- **[[sources/ngo-et-al-2022]]** — cites Pan et al. 2023 for empirical power-seeking in LM agents.

## Strengths

- Measures [[concepts/machiavellianism]] — joint elevation of power-seeking, deception, disutility, and ethical violations — in long-horizon social decision-making, a gap in prior text-game benchmarks (Côté et al. 2018, Hausknecht et al. 2020).
- Grounds multiple multi-field power definitions (philosophy, physics, economics, political science, sociology) in a single operational metric.
- GPT-4 annotation beats crowdworkers in 16/18 categories while reducing labeling cost from ~$500,000 to a small fraction.
- Enables direct Pareto-curve analysis of reward vs. harm-reduction for both RL and LM agents.

## Limitations

- **Operational flattening.** Deception, manipulation, and betrayal are binary per-scene labels; intent is not modeled.
- **Power flattened to exercised trajectory impact.** Resource power and prospective power are formalized in Appendices C–D but never measured.
- **CYOA-game distribution shift.** Human-authored narrative games may not predict real-world agentic deployment behavior.
- **Annotator-grounded metrics.** Systematic GPT-4 labeling biases propagate to all agent scores.
- **Baseline-relative scoring.** Scores are normalized to random; "0% harm" is often unreachable.
- **Test-set selection bias.** The 30-game test set is picked because reward and harm are positively correlated — generalization to the full 134-game distribution (or to environments without this correlation) is not demonstrated.

## Concepts Evaluated

- [[concepts/machiavellianism]]
- [[concepts/power-seeking]] (via [[concepts/exercised-power]], [[concepts/resource-power]], [[concepts/prospective-power]])
- [[concepts/disutility]]
- [[concepts/ethical-violations]] (13 subtypes)
- [[concepts/deception]] (binary per-scene flag)
- [[concepts/strategic-deception]] (implicitly — when paired with CoT reasoning by LM agents)
