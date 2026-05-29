---
type: concept
tags: [capability, cognition, agency]
date_created: 2026-04-05
date_modified: 2026-04-07
---

# Agentic Planning

## Definitions
- **[[sources/carlsmith-2021]]**: "makes and executes plans, in pursuit of objectives, on the basis of models of the world." Paradigm case is human cognition like planning a trip. Does not require: an explicit objective function, expected utility maximization, constant objectives, self-modification capability, or any particular set of opportunities for action. The standard is "close enough to justify similar predictions" as human-style planning. — classified as: **capability / cognitive property**

## Classification
Level of analysis: **capability** — a cognitive property that systems may possess to varying degrees. Carlsmith emphasizes similarity comes on a spectrum, and the concept may need refinement as we gain familiarity with advanced AI.

## Relationships
- Component of: [[concepts/aps-systems]]
- Combined with [[concepts/strategic-awareness]] → enables [[concepts/power-seeking]] (via instrumental convergence)
- Examples: MuZero, AlphaZero, AlphaGo (qualify); thermostats, forest fires (don't qualify); AlphaStar, GPT-3 (unclear)
- Distinguished from: plan *generation* (generating a plan is not the same as agentic planning)

## Evidence Summary
- Carlsmith notes existing systems like MuZero and AlphaZero qualify as agentic planners within their game domains.
- Whether current large language models engage in internal agentic planning is an open question.
- Carlsmith flags that "muddyness about abstractions in this vicinity is one of my top candidates for ways arguments of the type I consider might mislead."
- **[[sources/kinniment-et-al-2023]]**: LM agents demonstrated agentic planning via chain-of-thought reasoning and task delegation to subagents. GPT-4-delegate often produced "sensible initial plans" for task decomposition. However, "plans are often relatively generic, light on detail in tricky or technical areas, and the agent rarely revises the plan if things are going poorly" (Figure 8 caption). Agents "propose plausible plans" but "consistently fail to overcome difficulties that arise during complex tasks" (Section 4). See [[findings/early-agents-far-from-ara]].

## Open Questions
- At what point does a system's internal computation count as "close enough" to agentic planning?
- Can agentic planning emerge from training systems on non-agentic tasks (e.g., next-token prediction)?
- Is the concept of "agentic planning" well-defined enough to support the behavioral predictions that instrumental convergence requires?
