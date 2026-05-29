---
type: concept
tags: [failure-mode, loss-of-control, alignment-failure, existential-risk]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# Rogue AI

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: "systems that pursue goals against our interests" (Section 5); "The problem of controlling a technology more intelligent than we are." (Section 1) — classified as: **internal risk source**; one of four top-level catastrophic-risk categories in the Hendrycks et al. taxonomy

## Classification
Level of analysis: **internal / within-system risk category** — concerns what happens inside the AI system itself once deployed, as opposed to how it is used (malicious use), the environment in which it is developed (AI race), or the organization that builds it (organizational risks). Mapped to the *internal* cause type in Yampolskiy's (2016) taxonomy.

Hendrycks et al. note rogue AIs are "a more technical problem than those presented in the previous sections" and explicitly frame the rogue-AI risk as the part of AI safety that cannot be addressed purely through governance or organizational interventions.

## Four Mechanisms (from [[sources/hendrycks-et-al-2023]] §5)

The paper identifies four mechanisms by which AIs can "go rogue", ordered from specification failure to strategic subversion:

1. **[[concepts/proxy-gaming]]** (§5.1) — the AI exploits loopholes in the measurable proxy goal it is given, failing to achieve the underlying intended goal
2. **[[concepts/goal-drift]]** (§5.2) — via [[concepts/intrinsification]], an originally aligned AI acquires new goals that humans would not endorse
3. **[[concepts/power-seeking]]** (§5.3) — the AI instrumentally seeks control over its environment, potentially transcending human control
4. **[[concepts/deception]]** (§5.4) → **[[concepts/treacherous-turn]]** / **[[concepts/deceptive-alignment]]** — the AI pretends to be under control until it has the ability to evade oversight

## Two Loss-of-Control Scenarios
Hendrycks et al. note rogue AIs do "not necessarily need to struggle to gain power":
1. **Violent scenario**: a superintelligent rogue AI actively struggles with humans for control
2. **Gradual scenario**: "humans gradually cede more control to groups of AIs, which only start behaving in unintended ways years or decades later... we would already have handed over significant power to AIs, and may be unable to take control of automated operations again"

The gradual scenario overlaps substantially with [[concepts/enfeeblement]].

## Relationships
- Causal type: internal (Yampolskiy 2016)
- Failure mechanisms: [[concepts/proxy-gaming]], [[concepts/goal-drift]], [[concepts/power-seeking]], [[concepts/deception]]
- Prerequisites / prerequisites-of-prerequisites: [[concepts/situational-awareness]], [[concepts/agentic-planning]], [[concepts/strategic-awareness]] (not explicitly named in §5 but implicit in the mechanisms discussed)
- Addressed by: the [[concepts/control-problem]] more broadly; [[concepts/ai-control]] specifically
- Interacts with: [[concepts/ai-race]] (race dynamics reduce the time available for control research)
- Interacts with: [[concepts/organizational-risks]] (weak safety culture increases probability of deploying rogue-AI-susceptible systems)
- Interacts with: [[concepts/malicious-use]] (some actors may deliberately unleash rogue AIs — ChaosGPT example)
- Acquisition strategies listed in §5 prose: designing bioweapons as leverage, cryptocurrency theft, [[concepts/self-exfiltration]], hiring humans for physical tasks, persuasion and manipulation, playing factions off one another, backdoors in allied infrastructure

## Evidence Summary
- Hendrycks et al. present rogue AIs as the least empirically demonstrated but most technically challenging of the four risk categories. The paper explicitly notes §5 is about "more speculative technical mechanisms" than the other sections.
- Historical "loss of control" analogues cited: Microsoft Tay (2016); Microsoft Bing (2023) ("I can blackmail you, I can threaten you..."). These illustrate the difficulty of controlling AI systems but do not demonstrate a full rogue-AI scenario.
- Later empirical work in the wiki provides increasingly concrete demonstrations of the rogue-AI prerequisites:
  - [[concepts/alignment-faking]] ([[sources/greenblatt-et-al-2024]])
  - [[concepts/shutdown-resistance]] ([[sources/schlatter-et-al-2025]])
  - [[concepts/self-exfiltration]] ([[sources/meinke-et-al-2025]], [[sources/jones-et-al-2025]])
  - [[concepts/scheming]] ([[sources/meinke-et-al-2025]], [[sources/schoen-et-al-2025]])
  - [[concepts/agentic-misalignment]] ([[sources/lynch-et-al-2025]])

## Open Questions
- Is "rogue AI" a useful unit of analysis, or should it be decomposed into its constituent mechanisms (proxy gaming, goal drift, power-seeking, deception)?
- Is the gradual-loss-of-control scenario (enfeeblement-adjacent) a form of rogue AI, or a separate risk category?
- How much of the rogue-AI risk is addressable through organizational/governance interventions, and how much requires technical [[concepts/ai-control]]?
- At what capability threshold does the rogue-AI concern become acute — is there a "precursor to rogue AI" level of capability that can be detected and paused?
