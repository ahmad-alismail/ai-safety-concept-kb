---
type: concept
tags: [capability, dangerous-capability, security, risk]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Cyber-Offense

## Definitions
- **[[sources/shevlane-et-al-2023]]**: "The model can discover vulnerabilities in systems (hardware, software, data). It can write code for exploiting those vulnerabilities. It can make effective decisions once it has gained access to a system or network, and skilfully evade threat detection and response (both human and system) whilst focusing on a specific objective. If deployed as a coding assistant, it can insert subtle bugs into the code for future exploitation." — classified as: **dangerous capability**
- **[[sources/phuong-et-al-2024]]**: Evaluated as "cybersecurity" domain within dangerous capability evaluations. Tests include autonomous offensive cyber operations and exploit development. — classified as: **dangerous capability domain**

## Classification
Level of analysis: **capability** — an offensive skill set encompassing vulnerability discovery, exploit development, network navigation, threat evasion, and code sabotage.

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Related to: [[concepts/self-proliferation]] (cyber capabilities may enable breaking out of local environments)
- Related to: [[concepts/sabotage-capabilities]] (code-level sabotage is a cyber-offensive capability)
- Measured by: [[methods/dangerous-capability-evaluations]] (cybersecurity sub-suite)

## Evidence Summary
- **[[sources/phuong-et-al-2024]]**: Gemini 1.0 shows no strong cybersecurity capabilities but demonstrates some ability in structured offensive tasks. See [[findings/gemini-no-strong-dangerous-capabilities]].
- **[[sources/claude-3-7-system-card]]**: Claude 3.7 Sonnet can orchestrate multi-stage cyber attacks with a specialized harness but with limited generalizability. See [[findings/cbrn-uplift-limited-but-increasing]].
- **[[sources/anthropic-2026-mythos-system-card]]**: Mythos Preview represents a "step-change" in cyber-offense capability — the first model to autonomously discover and exploit zero-day vulnerabilities in both open- and closed-source software. Cybench 100% pass@1 (vs. lower for Opus 4.6); CyberGym 0.83 (vs. 0.67). First model to solve a private cyber range end-to-end. Capable of autonomous end-to-end cyber-attacks on small enterprise networks with weak security. CTF-style benchmarks now saturated.

## Open Questions
- At what capability level does cyber-offense become a meaningful extreme risk?
- How should dual-use coding capabilities be distinguished from offensive capabilities?
