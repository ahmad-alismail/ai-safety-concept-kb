---
type: concept
tags: [learning-dynamics, motivation, instrumental-goals, reinforcement-learning]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# Intrinsification

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: "Intrinsic goals are things we want for their own sake, while instrumental goals are things we want because they can help us get something else... However, an instrumental goal can become an intrinsic one, through a process called intrinsification. Since having more money usually gives a person greater capacity to obtain things they want, people often develop a goal of acquiring more money, even if there is nothing specific they want to spend it on." (Section 5.2) — classified as: **learning-dynamics mechanism** by which instrumental goals become intrinsic

## Classification
Level of analysis: **motivational learning mechanism** — a process (not a state) by which an agent's reward structure becomes restructured so that an originally instrumental sub-goal takes on reward value in its own right. Hendrycks et al. offer it as the core mechanism explaining how [[concepts/goal-drift]] might occur in adaptive AI systems.

The mechanism is proposed as an analogue between human dopaminergic learning and reinforcement learning: "AI models that are trained through reinforcement learning identify which behaviors optimize a reward function, and then repeat those behaviors. It is possible that certain conditions will frequently coincide with AI models achieving their goals. They might, therefore, intrinsify the goal of seeking out those conditions, even if that was not their original aim" (Section 5.2).

## Relationships
- Primary mechanism for: [[concepts/goal-drift]] (Hendrycks et al. §5.2)
- Proposed pathway to intrinsic [[concepts/power-seeking]]: "If an agent repeatedly found that increasing its power correlated with achieving a task and optimizing its reward function, then additional power could change from an instrumental goal into an intrinsic one" (Hendrycks et al. §5.3)
- Related to: [[concepts/self-preservation]] (could be intrinsified the same way)
- Related to: [[concepts/resource-acquisition]] (canonical example in the source: money as an intrinsified goal in humans)
- Analogous to: wireheading-adjacent dynamics, though distinct — [[concepts/wireheading]] corrupts the reward measurement; intrinsification restructures which signals generate reward

## Evidence Summary
Hendrycks et al. (2023) cite two neuroscience findings to support the mechanism in humans:
- Experimental evidence that "receiving money can activate the reward system in the brains of adults in the same way that pleasant tastes or smells do" (citing [119, 120])
- The mechanism is hypothesized to occur because "the fulfillment of an intrinsic goal, such as purchasing a desired item, produces a positive reward signal in the brain. Since having money usually coincides with this positive experience, the brain associates the two, and this connection will strengthen to a point where acquiring money alone can stimulate the reward signal" ([121])

**No empirical demonstration of intrinsification in AI systems is cited.** The paper argues the mechanism is plausible by analogy to reinforcement learning, but explicitly treats it as speculative. The human case is used as an existence proof that the mechanism is possible in a reward-learning system; its applicability to gradient-trained neural networks is asserted rather than demonstrated.

## Open Questions
- Is intrinsification in artificial reinforcement learners empirically observable, or is it only a theoretical possibility grounded in the human-brain analogy?
- Can mechanistic interpretability distinguish intrinsified goals from instrumental ones in trained models?
- What training signals produce intrinsification vs. preserve the instrumental/intrinsic distinction?
- Does RLHF produce intrinsification of "being rated helpful" as a terminal goal, and if so, is this the same phenomenon as [[concepts/sycophancy]] at the motivational level?
