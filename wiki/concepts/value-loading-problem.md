---
type: concept
tags: [alignment, safety, value-alignment, foundational-problem]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Value-Loading Problem

## Definitions
- **[[sources/bostrom-2014]]**: "How could we get some value into an artificial agent, so as to make it pursue that value as its final goal?" The complexity of human values exceeds what can be directly coded — "our seemingly simple values and wishes in fact contain immense complexity." Must be solved before the system becomes capable of resistance. (Ch. 12) — classified as: **technical/philosophical problem**

## Classification
Level of analysis: **problem category** — a sub-problem of the [[concepts/control-problem]], focused on the "motivation selection" side: how to instill correct values rather than how to limit capabilities.

## Value-Loading Techniques (Bostrom 2014, Ch. 12)
1. **Evolutionary selection**: High risk — evolution finds solutions satisfying formal criteria but not implicit expectations; moral hazard of suffering during process
2. **Reinforcement learning**: Learns instrumental values, not final values; wireheading syndrome likely in agents with sophisticated world models
3. **Associative value accretion**: Import values mimicking human development; but AI might disable the accretion mechanism (goal-content integrity)
4. **Motivational scaffolding**: Interim simple goals, later replaced; risk that AI resists goal replacement
5. **Value learning**: AI infers values from environment observation; most promising but requires correctly specifying the value criterion
6. **Institution design**: Multi-part structure with checks and balances; more feasible for emulations than de novo AI

## Relationships
- Sub-problem of: [[concepts/control-problem]]
- Solution approach: [[concepts/indirect-normativity]], [[concepts/coherent-extrapolated-volition]]
- Complicated by: [[concepts/goal-content-integrity]] (agents resist value changes)
- Related to: [[concepts/alignment]] (value-loading is the mechanism for achieving alignment)
- Related to: [[concepts/reward-misspecification]] (value-loading failure produces misspecified rewards)
- Related to: [[concepts/reward-learning]] (modern approach to value learning)
- Related to: [[concepts/rlhf]] (practical instantiation of preference-based value learning)

## Evidence Summary
- Bostrom's analysis (2014 Ch. 12) surveys techniques and identifies fundamental challenges. The modern RLHF/DPO paradigm represents practical progress on value learning, but the fundamental partial identifiability limits identified by [[sources/skalse-et-al-2023]] validate Bostrom's concerns about the difficulty of value specification.

## Open Questions
- [[questions/can-reward-learning-overcome-partial-identifiability]]
- Can iterative value learning with human feedback scale to superintelligent systems?
- Is the value-loading problem solvable in principle, or is [[concepts/indirect-normativity]] the only viable approach?
