---
type: source
tags: [governance, policy, risk-management, institutional, anthropic]
date_created: 2026-05-12
date_modified: 2026-05-12
---

# Responsible Scaling Policy, Version 3.2

```bibtex
TBD BY USER
```

## Key Claims
- The overall level of catastrophic risk from AI depends on the actions of multiple AI developers, not just one; unilateral pausing could lead to a world that is less safe if developers with the weakest protections set the pace (Introduction)
- AI Safety Levels (ASLs) with specific prescriptive controls are "overly rigid" for defining future risk mitigations; Anthropic now prefers argument-based safety cases (Appendix B)
- AI systems may increasingly have the ability to detect and manipulate testing, undermining evaluation-based risk assessment (Section 1 table, sabotage threshold)
- At the highest capability levels, AI systems may be responsible for much of the research underpinning risk assessment and may have strong capabilities for deception, manipulation, and obfuscation of evidence — requiring very high evidentiary standards (Section 1 table, automated R&D threshold, industry recommendations)
- Marginal risk analysis — arguing that Anthropic's specific contribution to ecosystem risk is relatively small — may justify continued development when absolute risk is high, but requires Board and LTBT approval (Sections 3.3–3.4)
- Security for models at the novel CBRN and automated R&D thresholds should be roughly in line with RAND SL4 (Section 1 table, industry recommendations)
- Anthropic will not impose non-disparagement obligations that impede employees from publicly raising safety concerns (Section 4, item 5)

## Methodology
Corporate governance policy document (not empirical research). Seventh version of a living document (v1.0 Sept 2023, v2.0 Oct 2024, v2.1 March 2025, v2.2 May 2025, v3.0 Feb 2026, v3.1 April 2026, v3.2 April 2026). Uses a three-column analytical framework: capability threshold → company mitigations → industry-wide recommendations. Establishes accountability structures including Responsible Scaling Officer, Board oversight, Long-Term Benefit Trust (LTBT), external review, noncompliance reporting with whistleblower protection, and annual third-party procedural compliance review.

## Four Capability Thresholds
The RSP identifies four capability or usage thresholds calling for heightened mitigations:

1. **Non-novel CBRN weapons production**: AI systems helping individuals or groups with basic technical backgrounds (e.g., undergraduate STEM degrees) create/obtain and deploy chemical/biological weapons with serious potential for catastrophic damages.
2. **Novel CBRN weapons production**: AI systems helping threat actors (e.g., moderately resourced expert-backed teams) create/obtain and deploy chemical/biological weapons with potential for catastrophic damages far beyond past catastrophes such as COVID-19.
3. **High-stakes sabotage opportunities**: AI systems highly relied on, with extensive access to sensitive assets and moderate capacity for autonomous, goal-directed operation and subterfuge — such that they could carry out sabotage leading to irreversibly and substantially higher odds of a later global catastrophe. Near-term focus: AI systems extensively used within major AI companies with opportunity to manipulate successor system training/deployment and safety evidence.
4. **Automated R&D in key domains**: AI systems that fully automate, or otherwise dramatically accelerate, the work of large, top-tier human research teams in domains where fast progress could threaten international security (energy, robotics, weapons development, AI itself). Operationalized as: (1) models fully substituting for Anthropic's Research Scientists and Research Engineers at competitive costs (within a factor of 5); or (2) dramatic acceleration — doubling the rate of AI capability progress compared to what would be expected without significant AI contributions to AI R&D.

## Key Governance Mechanisms
- **Risk Reports**: Published every 3–6 months covering all publicly deployed models and in-scope internally deployed models. Contents: threat model identification, evaluations, risk mitigations, risk analyses, risk-benefit determination, forward-looking plans, review of past reports. Subject to external review when covering "highly capable" models (crossing the automated R&D threshold) and "significantly redacted."
- **Frontier Safety Roadmap**: Public document (redacted) with ambitious but achievable risk mitigation goals. Intended as a forcing function for safety work.
- **Responsible Scaling Officer (RSO)**: Designated staff member responsible for RSP implementation, approving model development/deployment decisions, reviewing contracts, and receiving noncompliance reports.
- **Long-Term Benefit Trust (LTBT)**: Can request external review of Risk Reports; approves selection of external reviewers; receives regular briefings on plans related to Risk Reports.
- **Employee safety concern protections**: Non-disparagement clauses cannot preclude raising safety concerns or disclosing the existence of such clauses.
- **Noncompliance reporting**: Anonymous or identified reports; multiple reporting channels; quarterly Board updates; prompt notification for substantiated material safety risks; whistleblower protection from retaliation.

## Company Mitigations at Highest Threshold (Automated R&D)
- "Moonshot R&D for security" — ambitious projects for unprecedented security levels against best-resourced attackers
- "Eyes on everything" — comprehensive logging, centralization, and AI-based analysis of all critical AI-development activities, monitoring for security threats, concerning insider behavior (human and AI), and out-of-line training processes
- Systematic alignment assessments incorporating mechanistic interpretability and adversarial red-teaming
- Internal red-teaming exceeding bug bounty program performance at finding jailbreaks
- Risk Reports subject to external review by expert, credible, candid, and disinterested external parties

## Competitor-Contingent Commitments (Appendix A)
Three scenarios with escalating commitments:
1. **Anthropic in the lead** (clear evidence no competitor will soon develop highly capable model): Require a strong safety argument; delay development/deployment until met or lead lost.
2. **Competitors have strong safety measures**: Meet or exceed competitors' risk reduction posture; delay until achieved.
3. **General upleveling** (competitor implements significantly better mitigation at comparable cost): Make significant effort to meet or exceed that standard, but will not necessarily delay development.

## Concepts Referenced
- [[concepts/responsible-scaling-policy]] — the framework itself
- [[concepts/dangerous-capabilities]] — capability thresholds map onto dangerous capability evaluation taxonomy
- [[concepts/sabotage-capabilities]] — high-stakes sabotage as a distinct capability threshold
- [[concepts/automated-ai-rd]] — most detailed operationalization of the automated R&D threshold to date
- [[concepts/safety-cases]] — ASLs transitioning from prescriptive controls to argument-based safety cases
- [[concepts/alignment-faking]] — cited as an evaluation hazard external reviewers must be knowledgeable about
- [[concepts/deception]] — deception/manipulation propensity as a risk factor to monitor at all capability levels
- [[concepts/evaluation-awareness]] — implicit concern: AI systems may detect and manipulate testing

## Relationship to Other Sources
- **[[sources/balesni-et-al-2024]]**: The shift from prescriptive ASLs to argument-based safety cases mirrors Balesni et al.'s evaluations-based safety case framework.
- **[[sources/shevlane-et-al-2023]]**: Capability threshold categories map onto Shevlane et al.'s dangerous capability taxonomy (CBRN → weapons acquisition; sabotage → new addition; automated R&D → AI development capability).
- **[[sources/benton-et-al-2024]]**: Sabotage capability threshold provides policy-level operationalization of sabotage concerns.
- **[[sources/greenblatt-et-al-2024]]**: Alignment faking cited in Section 3.6.1 as an example of ways evaluations might be misleading.
- **[[sources/kovarik-et-al-2025]]**: RSP acknowledges evaluation limitations ("ability to detect and manipulate testing") consistent with Kovařík et al.'s game-theoretic critique.
- **[[sources/anthropic-sabotage-risk-report-2026]]** and **[[sources/claude-mythos-risk-report]]**: RSP v3.2 provides the governance framework under which these risk reports are produced.
- Earlier RSP versions referenced in: [[sources/claude-3-7-system-card]], [[sources/anthropic-2025-sonnet-45-system-card]], [[sources/anthropic-2026-mythos-system-card]].

## Limitations
- As a corporate governance document, it reflects Anthropic's institutional perspective and interests. The collective action framing that motivates separating company plans from industry recommendations is principled but also serves Anthropic's competitive positioning.
- Claims about the "overly rigid" nature of prescriptive ASLs are self-reported without detailed analysis of specific failures.
- Industry-wide recommendations are aspirational; Anthropic explicitly states it "cannot commit to following them unilaterally."
- Competitor-contingent commitments are constrained by information limitations: "we will not have enough information to determine that the relevant scenario applies."
- The marginal risk analysis mechanism could be used to justify continued development even when absolute risk is high, though governance checks (Board + LTBT approval) are required.
- Does not contain empirical research, evaluations, or experimental data — it is a framework document.

## Implicit Ontological Position
The RSP operates at the institutional governance level and does not directly define AI safety concepts. Its implicit ontology collapses the capability vs. behavior vs. goal distinction into "capability thresholds" that blur what a model *can do* and what it *might do*. The sabotage threshold explicitly conflates capability and propensity: systems that "could (if directed toward this goal, either deliberately or inadvertently)" carry out sabotage. The shift from prescriptive ASLs to argument-based safety cases represents a move from specifying *what* controls are needed to requiring *arguments* that risks are contained — treating safety as an ongoing argumentative burden rather than a compliance checklist.
