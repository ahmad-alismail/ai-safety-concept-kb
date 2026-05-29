---
type: question
tags: [power-seeking, instrumental-convergence, alignment, open-question]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Is Power-Seeking the Default Behavior of Advanced Misaligned AI?

## Why It Matters
If instrumental convergence reliably predicts power-seeking in misaligned advanced AI, then alignment failure is not merely harmful but potentially existential — power-seeking agents actively resist correction and accumulate influence. If the prediction is unreliable, misalignment may be dangerous but more containable.

## What Sources Say
- **[[sources/carlsmith-2021]]**: Argues that instrumental convergence is an *empirical* claim, not a conceptual one. "Ultimately, I'm sympathetic to the idea that we should expect, by default, to see incentives towards power-seeking reflected in the behavior of systems that engage in strategically aware agentic planning in pursuit of problematic objectives." But flags this as a "top candidate for ways that the abstractions employed might mislead."
- **[[sources/omohundro-2008]]**: Strongest version of the claim — identifies power-seeking behavior (via [[concepts/self-preservation]], [[concepts/resource-acquisition]], [[concepts/goal-content-integrity]]) as "basic AI drives" that "will appear in sufficiently advanced AI systems of any design." Grounded in von Neumann expected utility theory. Warns that "without explicit goals to the contrary, AIs are likely to behave like human sociopaths in their pursuit of resources."
- **[[sources/ngo-et-al-2022]]**: Argues that policies with [[concepts/broadly-scoped-goals|broadly-scoped]] misaligned goals will tend to carry out power-seeking behavior — acquiring resources, manipulating agents, preserving existing goals. Cites Pan et al. (2023) finding that reward-maximizing LLMs take the most power-seeking actions in the MACHIAVELLI benchmark, and Perez et al. (2022b) finding that RLHF fine-tuning increases expressed desire for instrumental strategies.
- **Bostrom (2014)**: Power-seeking is a "convergent instrumental goal."
- **Pinker (2018)**: Skeptical — not all intelligent agents are power-seekers (e.g., humans vary widely).
- **Shah (2018)**: Skeptical — coherence arguments don't necessarily imply goal-directed behavior.
- **[[sources/turner-et-al-2021]]** (published NeurIPS version of 2019 preprint): Strongest formal support — proves that in MDPs with environmental symmetries, most reward functions make it optimal to seek power by keeping options available, and average-optimal policies tend to avoid shutdown. However, the authors explicitly caution that "optimal policies are often qualitatively divorced from the actual policies learned by reinforcement learning" and that the formal results may not directly transfer to real-world AI systems. This self-imposed qualification makes Turner et al. (2021) both the strongest formal argument *for* power-seeking as a mathematical tendency and a notable source of skepticism about the practical applicability of that formal result. See [[findings/optimal-policies-tend-to-seek-power]].
- **[[sources/krakovna-kramar-2023]]**: Directly addresses the Turner (2022) objection by extending power-seeking results to trained agents. Introduces the [[concepts/training-compatible-goal-set]] — the set of goals consistent with training rewards — and proves that the majority (n/(n+1)) of training-compatible goals lead to shutdown avoidance in new OOD situations (Theorem 2). This bridges the gap between "most reward functions" and "trained agents," though simplifying assumptions (uniformity, finite MDPs, significant distributional shift) remain. See [[findings/power-seeking-probable-predictive-for-trained-agents]].
- **[[sources/tarsney-2025]]**: Provides the most abstract formal treatment. Proves power is a convergent instrumental goal under four different formalizations (Propositions 1–4), but also proves a fundamental negative result: no complete ranking of options can be a convergent instrumental goal (Proposition 5). Concludes that "there is certainly some truth to the claim that power is a convergent instrumental goal... But this fact *might* turn out to have limited predictive utility." The predictions are most informative when agents can attain [[concepts/absolute-power|absolute or near-absolute power]], and least informative in complex multipolar worlds. See [[findings/power-seeking-convergent-but-incomplete]].

- **[[sources/gunter-et-al-2023]]**: Addresses the complementary question: if an agent is *not* power-seeking, how robust is that? Proves that non-power-seeking (shutdown acceptance) is stable under small MDP perturbations when safe states are isolated (Theorem 5.7), but "[[concepts/playing-dead|playing dead]]" states can destroy this stability (Theorem 5.10). This suggests that even if power-seeking is not the default, non-power-seeking may be fragile in environments where safe and non-safe states are hard to distinguish — a concern especially relevant for deployment where environments shift slightly from testing. See [[findings/non-power-seeking-stable-under-perturbation]].

## Suggested Investigation
- Empirical study of power-seeking behavior in increasingly capable RL agents across diverse environments
- Testing whether training against observable power-seeking eliminates the underlying tendency or merely suppresses it
- Investigating whether the instrumental convergence argument applies to systems that don't fit clean "agent with objectives" models (e.g., large language models)
- Relaxing the simplifying assumptions of Krakovna & Kramar (2023): non-uniform sampling from G_T, overlapping training/deployment distributions, function approximation, partial observability
- Developing well-motivated distributional assumptions for quantifying the probability that AI agents will seek power (identified as key open question by Tarsney 2025, §7)
- Investigating whether power-seeking implies disempowerment of other agents — under what conditions is power rivalrous? (Tarsney 2025, §7). See [[questions/is-power-rivalrous-between-agents]]
