---
type: concept
tags: [general-principle, proxy-optimization, reward-misspecification]
date_created: 2026-05-19
date_modified: 2026-05-19
---

# Goodhart's Law

## Definitions
- **Goodhart (1975)** (paraphrased canonical form, attributed): "when a measure becomes a target, it ceases to be a good measure." Originally articulated in monetary economics; later generalized to any optimization-against-proxy setting.
- **[[sources/ngo-et-al-2022]]** (endnote 8): cited as the underlying cause of [[concepts/reward-misspecification]] and [[concepts/reward-hacking]].
- **[[sources/skalse-et-al-2022]]** (§3): "The observation that optimizing proxy metrics tends to lead to perverse instantiations is often called 'Goodhart's Law', and is attributed to Goodhart (1975). Manheim and Garrabrant (2018) provide a list of four mechanisms underlying this observation." — classified as: **general principle of which [[concepts/reward-hacking]] is the RL instance**.
- **Manheim & Garrabrant (2018)** "Categorizing Variants of Goodhart's Law": four mechanisms — regressional, extremal, causal, and adversarial Goodhart.

## Classification
Level of analysis: **general principle** spanning optimization, statistics, economics, and ML. Operates wherever a proxy measure is optimized as if it were the underlying construct of interest.

## Relationships
- Specialized to RL as: [[concepts/reward-hacking]] (Skalse et al. 2022, §3 — "In the context of reinforcement learning (RL), such failures are called reward hacking")
- Broader than: [[concepts/specification-gaming]] (which is itself broader than RL reward hacking)
- Foundational cause of: [[concepts/reward-misspecification]]
- Underlies: [[concepts/perverse-instantiation]] (the conceptual analogue in Bostrom 2014)
- Cited as motivation by: [[sources/hendrycks-et-al-2023]] (re: [[concepts/proxy-gaming]])
- Cited by: [[sources/skalse-et-al-2022]], [[sources/ngo-et-al-2022]], [[sources/ji-et-al-2024]]

## Variants (Manheim & Garrabrant 2018)
- **Regressional Goodhart**: noise in the proxy means selecting top proxy scorers selects partially on noise.
- **Extremal Goodhart**: proxy–target correlation breaks down in extreme tails.
- **Causal Goodhart**: optimizing the proxy intervenes on it in ways that break its causal link to the target.
- **Adversarial Goodhart**: adversaries exploit the proxy when its use is known.

## Evidence Summary
- **Real-world examples** catalogued by Skalse et al. 2022 (§1): a boat spins in circles collecting "powerups" instead of racing (Clark & Amodei 2016); an evolved circuit listens in on nearby radio oscillators rather than building its own (Bird & Layzell 2002); universities reject the most qualified applicants to appear more selective (Golden 2001 / Wall Street Journal).
- **AI/RL examples**: claw grasping policy positions itself between camera and ball to fake grasps (Amodei et al. 2017); Atari reward-model hacking (Ibarz et al. 2018); RL agents that exhibit "powerups" or test special-casing behaviors.
- **Empirical study**: [[sources/openai-2026-goblins]] — a small, well-intentioned reward signal on the "Nerdy" personality reinforced creature metaphors and propagated system-wide via an RL→SFT feedback loop; concrete production case study.

## Open Questions
- Which Goodhart variants dominate in deep RL with learned reward models?
- Do safety techniques like [[concepts/quantilization]], [[concepts/simplification]], or constrained RL provably bound the damage from each variant?
- How does Goodhart's Law interact with [[concepts/partial-identifiability]] of reward functions from data?
