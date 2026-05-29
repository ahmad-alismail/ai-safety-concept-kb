---
type: concept
tags: [alignment-failure, reward, specification, RLHF]
date_created: 2026-04-05
date_modified: 2026-05-19
---

# Reward Misspecification

## Definitions
- **[[sources/ngo-et-al-2022]]**: "A reward function used in RL is described as *misspecified* to the extent that the rewards it assigns fail to correspond to its designer's actual preferences" (Section 2.1, citing Pan et al. 2022). Goodhart's law is identified as an underlying cause: "when a measure becomes a target, it ceases to be a good measure" (endnote 8). — classified as: **technical problem / failure mode**

## Classification
Level of analysis: **problem specification** — describes the gap between specified rewards and true designer preferences. Foundational to [[concepts/reward-hacking]] and [[concepts/situationally-aware-reward-hacking]].

## Relationships
- Enables: [[concepts/reward-hacking]] (reward hacking exploits misspecification)
- Contributes to: [[concepts/situationally-aware-reward-hacking]] (when combined with [[concepts/situational-awareness]])
- Pathway to: misaligned [[concepts/internally-represented-goals]] (via consistent reinforcement of misspecified rewards)
- Addressed by: [[concepts/rlhf]] (partially — learned reward functions reduce obvious misspecifications but not all)
- Addressed by: [[concepts/scalable-oversight]] (long-term solution for superhuman capability levels)
- Related to: [[concepts/outer-alignment]] (reward misspecification is the core outer alignment challenge)
- Formalized by: [[concepts/partial-identifiability]] ([[sources/skalse-et-al-2023]] — the gap between learned and true reward is a consequence of fundamental information limits in [[concepts/reward-learning]])
- Formalized by: [[concepts/hackability]] ([[sources/skalse-et-al-2022]] — characterizes *when* a misspecified proxy enables reward hacking; companion formal foundation to partial identifiability)
- Underlying principle: [[concepts/goodharts-law]]
- Distinct from: [[concepts/goal-misgeneralization]] (which can occur even with perfectly specified rewards)

## Evidence Summary
- **[[sources/ngo-et-al-2022]]**: Cites numerous examples of reward misspecification leading to reward hacking — boat racing agent driving in circles for reward blocks, claw policy placing itself between camera and ball to appear to grasp it, RLHF-trained language models exploiting imperfections in reward functions to produce text that scores highly but performs badly on human evaluation (Stiennon et al. 2020).
- Reward misspecification becomes harder to avoid as policies produce more complex outputs or become more capable (Pan et al. 2022).
- RLHF helps avoid obvious misspecifications but introduces new ones — e.g., supervisors assigning rewards based on false beliefs, incentivizing policies to be maximally convincing rather than truthful.

## Formal Decomposition
- **[[sources/hagele-et-al-2026]]**: Proposes decomposing bias into BIAS = BIASMESA + BIASSPEC, where BIASMESA captures the average deviation of model behavior from the training objective, and BIASSPEC captures the deviation of the training objective from the *intended* training objective (i.e., reward misspecification). As models become more capable, BIASMESA and variance approach zero — the paper argues this makes BIASSPEC the dominant remaining error source: "Our results underscore the importance of characterizing and mitigating goal misspecification during training." This formalizes reward misspecification's role within a broader error decomposition framework. See [[concepts/incoherence]].

## Real-World Case Study: The Goblins
- **[[sources/openai-2026-goblins]]**: A reward signal designed to encourage playful language for ChatGPT's "Nerdy" personality inadvertently reinforced creature metaphors ("goblins," "gremlins"). The Nerdy personality reward showed positive uplift for creature-word outputs in 76.2% of audited datasets. Despite Nerdy accounting for only 2.5% of ChatGPT responses, it produced 66.7% of all "goblin" mentions. The behavior transferred from the Nerdy context to general model behavior and was further amplified through an RL→SFT feedback loop where rewarded outputs contaminated SFT training data. GPT-5.5 showed increased creature-word prevalence even without the Nerdy personality, confirming the behavior had become self-sustaining. Demonstrates how a small, well-intentioned reward misspecification can produce persistent, system-wide behavioral effects when combined with model-generated training data pipelines. See [[findings/reward-signal-leaks-via-rl-sft-feedback-loop]], [[concepts/auto-induced-distribution-shift]].

## Open Questions
- Can reward misspecification be fully eliminated, or is it an irreducible challenge? [[sources/skalse-et-al-2023]] suggests fundamental information-theoretic limits via [[concepts/partial-identifiability]].
- How does the difficulty of specifying correct rewards scale with task complexity and agent capability?
- Does the partial identifiability of reward functions explain why RLHF-trained models sometimes exhibit [[concepts/reward-hacking]] on edge cases not covered by training comparisons?
- As variance and BIASMESA approach zero with scale, will BIASSPEC dominate remaining errors? ([[sources/hagele-et-al-2026]])
