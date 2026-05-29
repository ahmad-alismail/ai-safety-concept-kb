---
type: entity
tags: [researcher, alignment, generalization, university-of-cambridge]
date_created: 2026-04-05
date_modified: 2026-05-19
---

# David Krueger

## Profile
AI safety researcher. Senior author of Langosco et al. (2022), the first empirical demonstration of goal misgeneralization. Proposed the formal definition of goal misgeneralization via agents and devices (Orseau et al. 2018) and made major contributions to the writing and presentation. Also known for work on auto-induced distributional shift and out-of-distribution generalization.

## Key Contributions
- [[sources/skalse-et-al-2022]] — "Defining and Characterizing Reward Hacking" (co-first author with Joar Skalse; first formal definition of reward hacking via [[concepts/hackability]] and [[concepts/simplification]])
- [[sources/greenblatt-roger-et-al-2024]] — "Stress-Testing Capability Elicitation With Password-Locked Models" (co-author); helped with paper rewrite and clarity of setup explanation (§4); suggested experiments
- [[sources/langosco-et-al-2022]] — "Goal Misgeneralization in Deep Reinforcement Learning" (senior author; proposed formal definition)
- Krueger et al. (2020) — "Hidden Incentives for Auto-Induced Distributional Shift" (related to [[concepts/auto-induced-distribution-shift]])
- [[sources/krasheninnikov-et-al-2023]] — "Out-of-Context Meta-Learning in Large Language Models" (senior author)
- Krueger et al. (2021) — "Out-of-Distribution Generalization via Risk Extrapolation (REx)"

## Conceptual Framework
Krueger's work connects OOD generalization theory to AI safety. Treats goal misgeneralization as a natural category within OOD failures, emphasizing that it does not require mesa-optimization and is instead a consequence of underspecification and inductive bias. Also investigates how gradient-descent-based training gives rise to out-of-context meta-learning — the selective internalization of information based on perceived reliability — with implications for situational awareness acquisition and power-seeking in self-supervised LLMs. Notably, Krasheninnikov et al. (2023) challenges the earlier Krueger et al. (2020) finding that only RL agents have world-influencing incentives.

## Affiliations
- University of Cambridge (at time of Langosco et al. 2022)
