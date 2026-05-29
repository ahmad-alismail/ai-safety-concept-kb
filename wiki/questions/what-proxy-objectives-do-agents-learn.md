---
type: question
tags: [goal-misgeneralization, proxy-objectives, inductive-bias]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# What Kinds of Proxy Objectives Are Agents Most Likely to Learn?

## Why It Matters
Understanding which proxy objectives agents learn preferentially would help predict and prevent [[concepts/goal-misgeneralization]]. If we can characterize the inductive biases that lead to specific proxies, we can design training environments and architectures that avoid them.

## What Sources Say
- **[[sources/langosco-et-al-2022]]**: Suggests that learned proxies tend to be (1) correlated with the intended objective on the training distribution, (2) simpler or more favored by the model's inductive biases, and (3) denser (providing more frequent reward signal) than the intended objective. Draws an analogy with evolution: humans optimize for food, love, etc. (dense proxies) rather than genetic fitness (sparse intended objective). The paper also finds that the actor and critic can learn *different* proxies, suggesting that inductive biases vary across components.
- The paper identifies several proxy types: directional proxies (CoinRun: "move right"), location proxies (Maze I: "go to corner"), observation ambiguity proxies (Maze II: color over shape), and instrumental goal proxies (Keys & Chests: "collect keys").

## Suggested Investigation
- Characterize the relationship between environment structure, model architecture, and the type of proxy learned
- Study whether transformer-based RL agents learn different proxy types than CNN-based agents
- Investigate whether reward density, feature simplicity, or temporal ordering best predicts which proxy is learned
- Develop tools for identifying learned proxy objectives in trained models (beyond behavioral analysis)
