---
type: concept
tags: [disposition, behavioral-property, foundational]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Goal-Directedness

## Definitions
- **[[sources/schoen-et-al-2025]]**: "an agent is goal-directed when it consistently pursues specific outcomes across diverse situations, adapting its strategies while maintaining focus on those objectives" (Section 2.1). Notes: "In practice, goal-directedness is valuable, especially for accomplishing complex, long-term objectives. Given the benefits of goal-directedness, we expect that future AI agents will be strongly goal-directed." Language describing goal-directed behavior (e.g., "choosing," "intending") "refers to an agent's external behavior and are not claims about the underlying internal state of the model." — classified as: **behavioral property / disposition**
- **[[sources/carlsmith-2023]]**: Implicit — models classified by whether they engage in goal-directed behavior. Schemers are a specific subclass of goal-directed agents. Goal-directedness is a prerequisite for scheming alongside [[concepts/situational-awareness]] and [[concepts/beyond-episode-goals]].
- **[[sources/meinke-et-al-2025]]** (citing Balesni et al. 2024): One of three prerequisites for [[concepts/scheming]] — the ability to "consistently pursue a goal." Distinguished from the other two prerequisites: [[concepts/situational-awareness]] and scheming reasoning.
- **[[sources/shi-et-al-2026]]**: Identified as one of three prerequisites for [[concepts/strategic-deception]] (alongside [[concepts/situational-awareness]] and [[concepts/theory-of-mind]]): "models must pursue objectives in ways involving selection of actions based on expected consequences. While LLMs are not trained with explicit goal representations, RLHF and related techniques may instill goal-directed tendencies" (Section D.1). In Shi et al.'s spectrum framing, degree of goal-directedness is the primary axis distinguishing behavioral from strategic deception. — classified as: **capability / behavioral disposition** (prerequisite for strategic deception)

## Classification
Level of analysis: **disposition / behavioral property** — a persistent characteristic of an agent's behavior pattern rather than a single action. Not itself a risk, but a prerequisite for both useful behavior and dangerous [[concepts/scheming]].

## Relationships
- Prerequisite for: [[concepts/scheming]] (one of three prerequisites alongside SA and scheming reasoning)
- Prerequisite for: [[concepts/power-seeking]] (goal-directed agents pursue instrumental subgoals)
- Enables: [[concepts/instrumental-convergence]] (only applies to goal-directed agents)
- Modulated by: training methodology (outcome-based RL may increase goal-directedness)
- Related to: [[concepts/agentic-planning]] (planning is a mechanism through which goal-directedness is expressed)
- Related to: [[concepts/broadly-scoped-goals]] (scope of goals determines risk level of goal-directedness)
- Distinguished from: [[concepts/alignment]] (a goal-directed agent may be aligned or misaligned)

## Evidence Summary
- **[[sources/schoen-et-al-2025]]**: Goal-directedness is treated as a given for current frontier models deployed in agentic settings. The paper does not measure goal-directedness directly but assumes it as context for studying anti-scheming interventions.
- **[[sources/carlsmith-2023]]**: Argues that the benefits of goal-directedness create strong incentives for its development, making strongly goal-directed AI systems probable in the near future.

## Open Questions
- How should goal-directedness be measured in LLMs — as a capability, a disposition, or a structural property?
- Does outcome-based RL training systematically increase goal-directedness in ways that increase scheming risk?
