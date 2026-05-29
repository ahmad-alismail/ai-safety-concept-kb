---
type: concept
tags: [structural-risk, competitive-pressure, collective-action, existential-risk]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# AI Race

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: "Competitive pressures that could drive us to deploy AIs in unsafe ways, despite this being in no one's best interest." (Section 1); "Competition could pressure nations and corporations to rush the development of AIs and cede control to AI systems." (Executive Summary) — classified as: **environmental/structural risk source**; one of four top-level catastrophic-risk categories in the Hendrycks et al. taxonomy

## Classification
Level of analysis: **structural / collective-action risk category** — not a property of any individual AI system or organization, but of the competitive environment. Hendrycks et al. map the AI race to the *environmental/structural* cause type in Yampolskiy's (2016) taxonomy, distinguishing it from intentional misuse (malicious use), accidents (organizational risks), and internal misalignment (rogue AIs).

The key claim: the AI race is a **collective action problem**. "Individually rational decisions can be collectively catastrophic" — the race dynamic is not driven by anyone wanting catastrophe, but by the competitive advantage of moving fast, which makes unilateral safety efforts uncompetitive.

## Sub-hazards (from [[sources/hendrycks-et-al-2023]] §3)

### Military AI arms race (§3.1)
- Lethal Autonomous Weapons (LAWs)
- Cyberwarfare
- Automated warfare (including [[concepts/flash-war]])
- Actors may risk extinction over individual defeat (§3.1.4)

### Corporate AI race (§3.2)
- Economic competition undercutting safety (Microsoft "move fast", Ford Pinto, Boeing 737 MAX, Bhopal as cited analogues)
- Automated economy (mass unemployment, [[concepts/automated-ai-rd]], [[concepts/enfeeblement]])

### Evolutionary pressures (§3.3)
- [[concepts/ai-natural-selection]] — Hendrycks's distinctive reframing of race dynamics as natural selection on AIs themselves

## Relationships
- Causal type: environmental/structural (Yampolskiy 2016)
- Interacts with: [[concepts/organizational-risks]] (race pressures reduce investment in safety and information security)
- Interacts with: [[concepts/malicious-use]] (leaked weights become accessible to bad actors)
- Interacts with: [[concepts/rogue-ai]] (rushed development leaves less time for control research)
- Mechanism: [[concepts/ai-natural-selection]] — the evolutionary framing of race dynamics
- Mitigation targets: safety regulation, international coordination, public control of general-purpose AIs (Hendrycks et al. §3.4); [[concepts/safety-culture]] within labs
- Evidenced by: OpenAI's 2019 nonprofit → capped-profit transition; Anthropic's commercialization pivot; Microsoft Bing launch ("A race starts today"); the 50:1 ratio of capabilities papers to safety papers cited by Hendrycks et al. §4

## Evidence Summary
- **Historical analogues** (competitive disasters): Ford Pinto gas-tank placement; Boeing 737 MAX MCAS; Bhopal gas disaster; Cold War nuclear arms race.
- **Contemporary case studies**: Microsoft Bing launch (Satya Nadella: "A race starts today"); internal Microsoft email calling it an "absolutely fatal error in this moment to worry about things that can be fixed later"; OpenAI's capped-profit transition; Anthropic's commercialization.
- **Quantitative indicator**: ratio of AI safety research papers to general capabilities papers cited as approximately 1:50 ([[sources/hendrycks-et-al-2023]] §4).
- The claim that competitive pressure overrides safety commitments is extensively argued by historical analogy but not formally modeled in the paper.

## Connection to [[sources/slattery-et-al-2024]]
The AI race risk category overlaps substantially with Slattery et al.'s "Competitive Dynamics" and "Human–Computer Interaction" domains. Hendrycks et al. give it first-class status as one of four top-level risks; Slattery et al. distribute similar concerns across multiple subdomains.

## Open Questions
- Can international coordination effectively restrain AI race dynamics, given the weak enforcement mechanisms of existing international agreements?
- Is the safety-regulation mitigation proposal subject to regulatory capture in a way that would worsen, not improve, the race?
- What is the relative contribution of the military race vs. the corporate race to existential risk?
- How does the AI race interact with [[concepts/ai-natural-selection]] — are they distinct phenomena or the same thing at different levels of description?
