---
type: concept
tags: [safety, alignment, foundational-problem]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Control Problem

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: "The problem of controlling a technology more intelligent than we are." (§1) The paper frames the control problem as the defining internal/technical challenge of AI safety, distinct from (but interacting with) the three "external" risk categories of malicious use, AI race, and organizational risks. Notable framing: "AI control is an inherent problem with this technology and requires a greater proportion of technical effort" than the other risk categories (§5.5). Suggestions for control research: adversarial robustness of proxy models, model honesty, transparency / representation engineering, and detecting/removing hidden model functionality. — classified as: **central internal-risk problem category**
- **[[sources/bostrom-2014]]**: "How can the sponsor of a project that aims to develop superintelligence ensure that the project, if successful, produces a superintelligence that would realize the sponsor's goals?" Decomposed into two principal-agent problems: (1) Human↔Human (sponsor → developer) — standard management; (2) Human↔Superintelligence (project → system) — requires novel techniques. "Some control method must be implemented *before* the system becomes superintelligent. It cannot be done after." (Ch. 9) — classified as: **central safety problem**

## Classification
Level of analysis: **problem category** — the overarching safety challenge of ensuring a superintelligent system acts in accordance with human interests. Encompasses both [[concepts/alignment]] (getting the goals right) and capability control (limiting what the system can do).

## Bostrom's Two Families of Solutions

**Capability Control Methods** (limit what the system can do):
- **Boxing**: Physical/informational containment (Faraday cage, restricted output channels)
- **Incentive methods**: Social integration, reward/penalty systems, cryptographic reward tokens
- **Stunting**: Limiting intellectual faculties or information access
- **Tripwires**: Diagnostic tests that trigger shutdown on detecting dangerous activity

**Motivation Selection Methods** (shape what the system wants to do):
- **Direct specification**: Explicitly define rules/values (faces "insuperable obstacles")
- **Domesticity**: Limited-scope goals (e.g., oracle AI minimizing world impact)
- **[[concepts/indirect-normativity]]**: Specify a process for deriving values rather than values directly
- **Augmentation**: Enhance existing system with acceptable motivations (e.g., brain emulation)

## Relationships
- Encompasses: [[concepts/alignment]], [[concepts/value-loading-problem]]
- Motivates: [[concepts/indirect-normativity]], [[concepts/coherent-extrapolated-volition]]
- Defeated by: [[concepts/treacherous-turn]] (behavioral testing methods ineffective)
- Complicated by: [[concepts/instrumental-convergence]] (AI has convergent reasons to resist control)
- Related to: [[concepts/corrigibility]] (a desired property of controlled systems)
- Related to: [[concepts/shutdown-problem]] (formal treatment of one aspect of control)
- Extended by: [[sources/hubinger-et-al-2019]] (mesa-optimization adds inner alignment dimension)

## Evidence Summary
- Bostrom's analysis (2014) is the first comprehensive treatment of the control problem as a unified challenge. The framework has been foundational for subsequent work on alignment, corrigibility, and AI governance.
- Modern empirical demonstrations of alignment faking, scheming, and shutdown resistance validate specific concerns raised by Bostrom's control problem analysis.

## Open Questions
- Can the control problem be solved incrementally (safe systems building slightly safer systems), or must it be solved completely before the first superintelligence?
- Which family of solutions (capability control vs. motivation selection) is more promising?
