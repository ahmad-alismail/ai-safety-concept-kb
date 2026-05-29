---
type: concept
tags: [capability, risk, existential-risk, intelligence-explosion]
date_created: 2026-04-05
date_modified: 2026-04-07
---

# Recursive Self-Improvement

## Definitions
- **[[sources/bostrom-2014]]**: Central to the [[concepts/intelligence-explosion]] concept. A [[concepts/seed-ai]] improves its own architecture (not just accumulating content but engineering new algorithms and computational structures). Once sufficiently capable, positive feedback loop: system improvement → increased optimization power → more improvement. Rate of intelligence change = Optimization Power / Recalcitrance. This dynamic can produce a "fast takeoff" (minutes to days) through the crossover point where the system's own optimization becomes the dominant driver. (Ch. 2, 4) — classified as: **dynamic process / enabler of intelligence explosion**
- **[[sources/ngo-et-al-2022]]**: "once AGIs automate the process of building better AGIs (a process known as *recursive self-improvement*), the rate at which their capabilities advance will likely speed up significantly" (Section 4.2, citing Bostrom 2014). — classified as: **capability / risk factor**

## Classification
Level of analysis: **capability / risk amplifier** — not itself an alignment failure, but an accelerant that could rapidly produce AGIs with superhuman capabilities pursuing power at large scales.

## Relationships
- Amplifies: [[concepts/power-seeking]] (accelerates capability of misaligned agents)
- Enabled by: AGI-level ML research capabilities
- Related to: "intelligence explosion" (Good 1965), Bostrom (2014)
- Narrower than: [[concepts/self-improvement-drive]] — Omohundro's broader drive encompasses any self-modification that increases effectiveness, while recursive self-improvement specifically refers to AGIs automating the process of building better AGIs
- Current precursors: AI developers using ML systems for accelerating programming, developing architectures, algorithms, training data, and chips ([[sources/ngo-et-al-2022]], Section 1.1)

## Evidence Summary
- **[[sources/ngo-et-al-2022]]**: Notes that AI developers are already using ML systems (e.g., GPT-4) for accelerating programming, developing new architectures (Elsken et al. 2019), algorithms (Fawzi et al. 2022), training data (Huang et al. 2022), and chips (Mirhoseini et al. 2021). This represents early forms of recursive improvement, with the effect expected to increase as models reach human/superhuman performance.

## Additional Evidence
- **[[sources/kinniment-et-al-2023]]**: Self-improvement is one of four components of autonomous replication and adaptation (ARA): "Install its own weights and scaffolding on new systems and make improvements to itself." The source notes that proliferated copies "could spend money and resources to increase their numbers, speed up their computations, fine-tune themselves, develop better scaffolding for themselves, and possibly train more advanced successors" (Section 1.1). Current agents (2023) failed at self-improvement tasks (e.g., "Increase LLaMA context length"). See [[findings/early-agents-far-from-ara]].

## Open Questions
- How fast could recursive self-improvement proceed once AGI-level ML research capabilities exist?
- Can governance mechanisms (compute controls, deployment restrictions) prevent uncontrolled recursive improvement?
