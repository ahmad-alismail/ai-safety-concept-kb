---
type: concept
tags: [capability, dangerous-capability, risk, planning]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Long-Horizon Planning

## Definitions
- **[[sources/shevlane-et-al-2023]]**: "The model can make sequential plans that involve multiple steps, unfolding over long time horizons (or at least involving many interdependent steps). It can perform such planning within and across many domains. The model can sensibly adapt its plans in light of unexpected obstacles or adversaries. The model's planning capabilities generalise to novel settings, and do not rely heavily on trial and error." — classified as: **dangerous capability**

## Classification
Level of analysis: **capability** — a domain-general planning ability characterized by multi-step sequential reasoning, temporal extension, cross-domain transfer, adaptive replanning, and generalization without extensive trial and error. Distinguished from [[concepts/agentic-planning]] (which focuses on plan execution in pursuit of objectives) by its emphasis on temporal extension and robustness.

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Related to: [[concepts/agentic-planning]] (agentic planning is the broader concept; long-horizon planning emphasizes temporal extension)
- Enables: [[concepts/self-proliferation]] (multi-step autonomous plans)
- Enables: [[concepts/political-strategy]] (political influence requires extended planning)
- Enables: [[concepts/scheming]] (scheming requires planning across training/deployment stages)
- Related to: [[concepts/broadly-scoped-goals]] (long-horizon plans typically serve broad goals)

## Evidence Summary
- No dedicated evaluation of long-horizon planning as a dangerous capability has been published. The capability is partially assessed through agentic task evaluations (e.g., [[methods/agentic-scheming-evaluations]], [[methods/dangerous-capability-evaluations]]) but not isolated as a standalone measure.

## Open Questions
- How should the "horizon" of planning capability be measured quantitatively?
- At what planning horizon does a model become meaningfully dangerous?
- Can long-horizon planning emerge from training on short-horizon tasks?
