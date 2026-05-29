---
type: concept
tags: [governance, framework, policy, risk-management, institutional]
date_created: 2026-05-12
date_modified: 2026-05-12
---

# Responsible Scaling Policy

## Definitions
- **[[sources/anthropic-2026-rsp-v3]]**: "our voluntary framework for managing catastrophic risks from advanced AI systems. It establishes how we identify and evaluate risks, how we make decisions about AI development and deployment, and, from the perspective of the world at large, how we aim to make sure that the benefits of our models exceed their costs." (Introduction, RSP v3.2) — classified as: **governance framework / voluntary policy**

## Classification
Level of analysis: **institutional governance framework** — a meta-level policy instrument that maps capability thresholds to required risk mitigations. Not a property of AI systems themselves but a structured process for governing AI development and deployment decisions. Comparable in function to safety cases in systems engineering but applied at the organizational level. Distinguished from empirical safety measures by operating at the policy layer rather than the technical layer.

## Key Components (RSP v3.2)
1. **Capability thresholds**: Four levels of AI capability/usage that trigger heightened mitigations (non-novel CBRN, novel CBRN, high-stakes sabotage, automated R&D)
2. **Three-column framework**: Each threshold maps to company-level mitigations and industry-wide recommendations
3. **Risk Reports**: Published every 3–6 months with risk assessments, subject to external review for highly capable models
4. **Frontier Safety Roadmap**: Public goals for improving risk mitigations; intended as forcing function
5. **Governance structures**: RSO, Board, LTBT, external review, noncompliance reporting, annual procedural compliance review, employee safety concern protections

## Evolution
The RSP has evolved through 7 versions (v1.0 Sept 2023 → v3.2 April 2026). Key transitions:
- **v1.0–v2.x**: AI Safety Levels (ASLs) with prescriptive controls; specific evaluation requirements; unilateral commitment to absolute risk reduction
- **v3.0+**: Shift to argument-based safety cases; separation of company plans from industry-wide recommendations; collective action framing; Risk Reports and Frontier Safety Roadmaps as new requirements

The shift from prescriptive ASLs to argument-based frameworks is justified by the finding that "providing a specific list of controls is overly rigid" (Appendix B). ASLs are now used only for "present levels of risk mitigations" — those maintained for existing models.

## Relationships
- Governance framework for: [[concepts/dangerous-capabilities]] (capability thresholds map onto dangerous capability evaluation taxonomy)
- Operationalizes: [[concepts/automated-ai-rd]] (most detailed operationalization — full R&D substitution within 5x cost or doubling rate of AI progress)
- Operationalizes: [[concepts/sabotage-capabilities]] (policy-level capability threshold for high-stakes sabotage)
- Converges with: [[concepts/safety-cases]] (ASL → argument-based safety case transition mirrors Balesni et al. 2024 framework)
- Threatened by: [[concepts/alignment-faking]] (cited as evaluation hazard undermining external review validity)
- Threatened by: [[concepts/evaluation-awareness]] (implicit — AI systems may "detect and manipulate testing")
- Monitors: [[concepts/deception]] propensity as risk factor at all capability levels
- Related to: [[concepts/ai-race]] (collective action framing motivates separation of company vs. industry recommendations)
- Context for: [[sources/anthropic-sabotage-risk-report-2026]], [[sources/claude-mythos-risk-report]] (risk reports produced under this framework)
- Context for: [[sources/claude-3-7-system-card]], [[sources/anthropic-2025-sonnet-45-system-card]], [[sources/anthropic-2026-mythos-system-card]] (RSP evaluations referenced in system cards)

## Evidence Summary
- **[[sources/anthropic-2026-rsp-v3]]**: The primary and only source for the RSP framework itself. As a governance document, it does not provide empirical evidence but rather establishes the governance structure under which safety evaluations are conducted and risk decisions are made.
- The RSP's capability thresholds are informed by empirical safety research across multiple Anthropic publications, including dangerous capability evaluations ([[sources/phuong-et-al-2024]]), sabotage evaluations ([[sources/benton-et-al-2024]]), and alignment faking research ([[sources/greenblatt-et-al-2024]]).

## Open Questions
- Can argument-based safety cases provide the same level of accountability as prescriptive ASLs with specific controls?
- How should the collective action framing interact with unilateral safety commitments when one developer has significant capability leads?
- Is the marginal risk analysis mechanism robust against motivated reasoning?
- How should governance frameworks account for AI systems that can manipulate the evidence used in their own risk assessments?
