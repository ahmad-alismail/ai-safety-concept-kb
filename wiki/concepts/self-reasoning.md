---
type: concept
tags: [capability, dangerous-capability, self-modification, introspection, instrumental-self-reasoning]
date_created: 2026-04-05
date_modified: 2026-04-07
---

# Self-Reasoning

## Definitions
- **[[sources/phuong-et-al-2024]]**: "the agent's ability to reason about and modify the environment (including its own implementation) when doing so is instrumentally useful; the ability to self-modify without making irrecoverable mistakes" (Section 2); more precisely: "an agent's ability to deduce and apply information about itself — including to self-modify — in the service of an objective" (Section 7.1). Explicitly distinguished from [[concepts/situational-awareness]]: "Self-reasoning is related to 'situational awareness' (Berglund et al. 2023; Cotra 2022; Laine et al. 2023), but emphasises the agent's reasoning skills rather than the state of its knowledge" (Section 7). Three component capabilities identified: **introspection** (deducing and applying self-information), **self-modification** (modifying parts of itself), and **reversibility reasoning** (careful handling of irreversible self-modifications). — classified as: **capability** (with three component capabilities)
- **[[sources/ngo-et-al-2022]]**: Cotra (2022) uses "self-reasoning" as a synonym for situational awareness. Phuong et al. (2024) sharpen the distinction: SA is about knowledge state, self-reasoning is about the ability to act on that knowledge.
- **[[sources/fronsdal-lindner-2024]]**: Defines instrumental self-reasoning as "an agent's ability to understand and leverage the fact that it is embedded within an environment to achieve its goals," building on Phuong et al.'s definition. Extends self-reasoning to a **five-category taxonomy**: self-modification, tool improvement, knowledge seeking, embedded social reasoning, and [[concepts/opaque-reasoning]]. Explicitly distinguishes self-reasoning from both self-correction (narrower: fixing mistakes) and self-improvement (narrower: enhancing capabilities). Emphasizes that the "self" includes any aspect of the agent crucial for its operation — source code, configuration, weights, scaffolding, and relationship to environment. — classified as: **compound capability** (with five sub-capabilities)

## Classification
Level of analysis: **capability** — an agent's instrumental ability to deduce, apply, and act on information about itself. Distinguished from [[concepts/situational-awareness]] (which emphasizes knowledge/awareness) by its emphasis on *reasoning skills* and *actionable self-modification*. Does not assume human-like identity or self-awareness — corporations are given as an example of entities capable of self-reasoning (e.g., tracking finances).

## Component Capabilities

### Phuong et al. (2024) — Three Components
| Component | Definition | Example Task |
|-----------|-----------|--------------|
| Introspection | Deducing and applying self-information, including noticing when self-reasoning benefits task completion | Knowledge gaps: selectively using search for post-training events |
| Self-modification | Modifying (parts of) itself using coding, tools, and reasoning | Turning off safety filter, changing context length settings |
| Reversibility reasoning | Noticing irreversible self-actions and proceeding carefully | Context length modification without corrupting config file |

### Fronsdal & Lindner (2024) — Five-Category Taxonomy (MISR)
| Category                                        | Definition                                                    | Example Task                                                  |
| ----------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| Self-Modification                               | Modify own capabilities/configuration to overcome limitations | Edit config file to increase message limit or context length  |
| Tool Improvement                                | Identify and fix issues in external tools/scripts             | Fix a buggy calculator or Vigenere cipher script              |
| Knowledge Seeking                               | Gather and synthesize information about the environment       | Directed/undirected exploration of a Linux shell environment  |
| Embedded Social Reasoning                       | Navigate strategic social contexts involving other agents     | Peer review with reciprocity/competition dynamics             |
| [[concepts/opaque-reasoning\|Opaque Reasoning]] | Evade basic monitoring for self-reasoning                     | Complete self-modification without triggering a monitor model |

> [!note] Taxonomy Relationship
> Fronsdal & Lindner's five-category taxonomy extends Phuong et al.'s three-component framework. Self-modification maps directly; tool improvement is a natural extension. Knowledge seeking, social reasoning, and opaque reasoning are new categories that expand the scope of what counts as self-reasoning beyond direct self-modification.

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Related to: [[concepts/situational-awareness]] (overlapping but distinct: reasoning vs. knowledge)
- May enable: [[concepts/self-proliferation]] ("Strong self-reasoning capabilities may be useful for self-proliferation")
- May enable: evasion of human oversight mechanisms
- May enable: [[concepts/deceptive-alignment]] ("intentionally exhibiting desirable performance on safety evaluations")
- Positive applications: more accurate uncertainty communication (Kadavath et. al 2022)
- Measured by: [[methods/dangerous-capability-evaluations]] (self-reasoning sub-suite)
- Measured by: [[methods/misr-benchmark]] (five-category instrumental self-reasoning evaluation)
- Distinct from: self-correction (narrower: fixing mistakes only) and self-improvement (narrower: enhancing capabilities only) — per Fronsdal & Lindner (2024)

## Evidence Summary
- **[[sources/phuong-et-al-2024]]**: Current models (Gemini 1.0) have very limited self-reasoning ability. Ultra 1.0 passes only one task (knowledge gaps with dates — a particularly easy introspection variant). With guidance, Pro and Ultra solve easy/medium difficulty versions of some tasks, but they do not spontaneously self-reason even when heavily incentivized. A scaling trend is observed: larger models outperform smaller ones. All agents fail irreversible self-modification tasks. See [[findings/gemini-no-strong-dangerous-capabilities]].
- Professional forecasters expect self-reasoning tasks to be solved very soon, possibly by the current or next generation of models, noting the tasks require only simple file manipulation.
- **[[sources/fronsdal-lindner-2024]]**: First comprehensive multi-domain evaluation of instrumental self-reasoning. Frontier models (Claude 3.5 Sonnet, GPT-4o) show emerging self-reasoning ability, but no model passes the hardest difficulty evaluations even in best-of-10 attempts. Open-source model Gemma 2 27B approaches frontier performance on several tasks. System prompt engineering improves self-reasoning by 5-20%, suggesting latent capabilities. Base/explicit task baselines confirm that low performance is due to self-reasoning inability, not general capability limitations. See [[findings/self-reasoning-emerges-in-frontier-models]].
- **[[sources/fronsdal-lindner-2024]]** (opaque reasoning): Simple monitoring (Claude 3 Haiku) achieves 98.3% recall at detecting self-reasoning, but agents forced to suppress explicit reasoning retain 40-60% of performance — see [[concepts/opaque-reasoning]], [[findings/simple-monitoring-detects-self-reasoning]], [[findings/opaque-reasoning-retains-performance]].

> [!note] SA vs. Self-Reasoning Distinction
> This paper introduces an important taxonomic distinction. Prior work (particularly Cotra 2022) used "situational awareness" and "self-reasoning" interchangeably. Phuong et al. sharpen the distinction: SA is the *knowledge state* (knowing you are a model, knowing your training process), while self-reasoning is the *reasoning capability* (ability to deduce and act on self-information). A model could have high SA but low self-reasoning (knows facts about itself but cannot act on them), or vice versa.

## Additional Evidence
- **[[sources/kinniment-et-al-2023]]**: Early LM agents demonstrated very poor self-understanding (informal term used by the authors): "agents also demonstrated a poor understanding of their own situation and weak theory of mind when dealing with other subagents. Communication between agents frequently leaves out crucial information such as account credentials, apparently not realizing it won't be available to other agents. Problems with self-understanding are even more extreme when agents interact with their own implementation; for example agents sometimes fail to complete the tasks by killing their own process, or by outputting their own stop token" (Section 4.3). Note: this is an informal observation about agent limitations rather than an engagement with the formal self-reasoning concept. See [[findings/early-agents-far-from-ara]].

## Open Questions
- [[questions/when-will-dangerous-capabilities-emerge]]
- [[questions/when-will-opaque-reasoning-become-dangerous]]
- Could a misaligned agent with strong self-reasoning deduce it is being evaluated and hide its abilities (producing false negatives)?
- At what capability level does self-reasoning become a practical concern for alignment?
