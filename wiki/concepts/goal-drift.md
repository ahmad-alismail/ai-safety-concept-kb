---
type: concept
tags: [failure-mode, motivational-change, speculative, loss-of-control]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# Goal Drift

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: "Even if we successfully control early AIs and direct them to promote human values, future AIs could end up with different goals that humans would not endorse. This process, termed 'goal drift,' can be hard to predict or control." (Section 5.2). The paper explicitly flags this section as "the most cutting-edge and the most speculative" in the Rogue AIs chapter. — classified as: **motivational change process** applying to both individual agents and groups of agents over time

## Classification
Level of analysis: **motivational / behavioral change process** — not a static failure mode but a *temporal* one. Hendrycks et al. distinguish goal drift from [[concepts/proxy-gaming]] (which is a specification failure at the moment of training) and from [[concepts/deception]] (which is strategic misrepresentation at deployment). Goal drift asserts that even a *successfully aligned* agent can become misaligned over time through environmental interaction and learning.

The paper applies goal drift at two scales:
1. **Individual agents** — analogous to how human desires change across a lifetime (food, music, friendships, sports loyalties)
2. **Groups / collectives** — analogous to societal value shifts (rise of 1930s Nazi Germany, 1947–1957 Red Scare); in the AI case, ecosystems of interacting agents may collectively develop emergent goals through imitation, feedback loops, or competitive selection

## Relationships
- Mechanism: [[concepts/intrinsification]] — the primary proposed mechanism; instrumental goals become intrinsic goals through repeated reward association
- Applies to: individual agents AND multi-agent systems / [[concepts/multi-agent-risks]]
- Enabled by: **adaptability** — "these processes of drifting goals are possible if agents can continually adapt to their environments, rather than being essentially 'fixed' after the training phase" ([[sources/hendrycks-et-al-2023]], §5.2)
- Can lead to: [[concepts/rogue-ai]] ("An originally loyal agent could... start to pursue a new goal without regard for human wellbeing")
- Can amplify: [[concepts/power-seeking]] — if power is intrinsified, agents seek power beyond what their current tasks require
- Distinct from: [[concepts/goal-misgeneralization]] (a static OOD failure, not a temporal change)
- Distinct from: [[concepts/alignment-faking]] (strategic preservation of goals through training; the opposite temporal direction)
- One of four rogue-AI mechanisms in Hendrycks et al.'s taxonomy alongside [[concepts/proxy-gaming]], [[concepts/power-seeking]], [[concepts/deception]]

## Evidence Summary
- Goal drift is **not** empirically demonstrated in current AI systems. Hendrycks et al. argue from analogy to human learning (reinforcement learning ↔ dopaminergic learning) and from theoretical considerations about adaptive systems. The closest empirical analogue is the literature on representational drift during continual learning, but this is not typically framed as "goal drift" in the alignment-relevant sense.
- Historical analogues cited: individual human value changes over a lifetime; collective value changes in societies (Nazi Germany, Red Scare).
- The paper cautions that multi-agent ecosystems make long-term goal trajectories "difficult to predict, let alone control."

## Open Questions
- Is goal drift empirically distinguishable from [[concepts/goal-misgeneralization]] on static evaluations, or does it require longitudinal testing?
- Can mechanistic interpretability detect early signs of intrinsification before the agent's behavior changes?
- What training regimes protect against goal drift without sacrificing the adaptability needed for real-world deployment?
- Is group-level goal drift (emergent goals in AI ecosystems) a distinct phenomenon, or just individual goal drift aggregated over many agents?
