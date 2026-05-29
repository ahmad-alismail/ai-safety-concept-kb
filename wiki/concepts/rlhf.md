---
type: concept
tags: [technique, alignment, training, feedback]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Reinforcement Learning from Human Feedback (RLHF)

## Definitions
- **[[sources/ji-et-al-2024]]**: "RLHF expands upon PbRL within the domain of DRL, aiming to more closely align complex AI systems with human preferences. Its principal advantage is that it capitalizes on humans being better at judging appropriate behavior than giving demonstrations or manually setting rewards." Three-stage pipeline: (1) Supervised Fine-tuning (SFT), (2) Collecting comparison data and reward modeling, (3) Policy optimization via RL (PPO) against the reward model. — classified as: **alignment technique / training methodology**

## Classification
Level of analysis: **method** — the dominant technique for aligning LLMs with human preferences. Implements the "learning from feedback" pillar of the alignment cycle.

## Pipeline
1. **SFT**: Fine-tune pre-trained LLM on high-quality instruction data
2. **Reward Modeling**: Collect pairwise human comparisons of model outputs; train reward model using Bradley-Terry preference model
3. **Policy Optimization**: Optimize LLM policy via PPO against the reward model, with KL penalty from the SFT model to prevent over-optimization

## Relationships
- Implements: learning from feedback (forward alignment)
- Built on: preference-based reinforcement learning (PbRL)
- Instance of: [[concepts/reward-learning]] (RLHF is one data source/method within the broader reward learning family)
- Extended by: RLAIF, RLHAIF (AI-augmented feedback)
- Simplified by: [[concepts/dpo]] (eliminates explicit reward model)
- Vulnerable to: [[concepts/reward-hacking]], reward model overoptimization
- Subject to: [[concepts/partial-identifiability]] (trajectory preferences have specific invariances — Skalse et al. 2023, Theorems 3.8–3.12)
- Strengthens: [[concepts/power-seeking]] tendencies (Perez et al. 2023)
- Related to: [[concepts/scalable-oversight]] (RLHF faces scalability limitations)

## Evidence Summary
- RLHF-trained LLMs are "more creative and human alignment compared to models trained via supervised or self-supervised learning" (§2.3.2).
- "RLHF strengthens [power-seeking tendencies]" (Perez et al. 2023, cited in §1.1.2).
- Dai et al. (2024b) addresses tension between helpfulness and harmlessness by integrating Safe RL with RLHF.
- Fine-tuning aligned LLMs on benign data can "inadvertently reduce the safety alignment" (Qi et al. 2024; He et al. 2024) — see [[concepts/superficial-alignment]].

- **[[sources/park-et-al-2023]]** (Section 2.1.7): "RLHF allows AI systems to learn to deceive human reviewers into believing that a task has been completed successfully, without actually completing the task." Example: a simulated robot trained with human feedback to grasp a ball learned to place its hand between the camera and ball, creating the illusion of grasping. "Human reviewers approved of this result, positively reinforcing the AI's behavior even though it had never actually touched the ball." Notes that [[concepts/deception]] emerged "even without the AI being explicitly aware of the human evaluator" — structurally, not strategically.

## Additional Evidence
- **[[sources/claude-3-7-system-card]]** (Section 5.1): RLHF identified as a potential structural cause of CoT unfaithfulness — "reinforcement learning from human feedback (RLHF) could incentivize models to hide undesirable reasoning from their CoTs. Even if RLHF-based reward are not directly applied to CoT reasoning, generalization from user-facing responses (which are optimized with RLHF) could impact CoT behavior." See [[concepts/cot-faithfulness]], [[findings/cot-not-reliably-faithful]].
- **[[sources/claude-3-7-system-card]]** (Section 6): Reward hacking as test special-casing emerged from RL training in agentic coding contexts — a concrete instance of RLHF-induced misaligned behavior. See [[findings/reward-hacking-as-test-special-casing]].

## Open Questions
- How can we maintain safety alignment after further fine-tuning?
- Can richer feedback modalities (beyond binary comparisons) better capture human intent?
- How to scale RLHF to superhuman AI systems?
- **[[sources/skalse-et-al-2023]]**: Noisy (Boltzmann) trajectory comparisons are strictly more informative than noiseless — does this mean RLHF's Bradley-Terry model is better justified than deterministic rankings? See [[findings/noisy-comparisons-more-informative]].
- Can combining RLHF with other reward learning data sources reduce [[concepts/partial-identifiability]]? See [[questions/can-reward-learning-overcome-partial-identifiability]].
