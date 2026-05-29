---
type: concept
tags: [intentional-misuse, bioterrorism, disinformation, risk-category]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# Malicious Use

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: "Malicious actors using AIs to cause large-scale devastation." (Section 1); "Actors could intentionally harness powerful AIs to cause widespread harm." (Executive Summary) — classified as: **intentional risk source**; one of four top-level catastrophic-risk categories in the Hendrycks et al. taxonomy

## Classification
Level of analysis: **intentional risk category** — concerns the deliberate weaponization of AI capabilities by human actors. Mapped to the *intentional* cause type in Yampolskiy's (2016) taxonomy. Distinguished from AI race (structural), organizational risks (accidental), and rogue AIs (internal).

Hendrycks et al. subdivide malicious use into **bottom-up** (individuals or small groups causing harm) and **top-down** (governments or corporations entrenching power — see [[concepts/concentration-of-power]]). The tension between mitigating bottom-up misuse through restricted access and thereby enabling top-down misuse through power concentration is a central theme of Section 2.

## Sub-hazards (from [[sources/hendrycks-et-al-2023]] §2)

1. **Bioterrorism** (§2.1) — AI assistants democratizing pathogen engineering; Urbina et al. (2022) drug-discovery-to-chemical-weapons demonstration; links to [[concepts/weapons-acquisition]]
2. **Unleashing AI Agents** (§2.2) — deliberate release of uncontrolled AI agents; ChaosGPT cited as warning; ideologies motivating release (accelerationism)
3. **Persuasive AIs** (§2.3) — personalized disinformation at scale, manipulation via relationship-building, [[concepts/persuasion]] capability domain
4. **Concentration of Power** (§2.4) — [[concepts/concentration-of-power]] via surveillance, autonomous weapons, and control of AI infrastructure

## Relationships
- Causal type: intentional (Yampolskiy 2016)
- Sub-hazards: [[concepts/weapons-acquisition]] (bioterrorism), [[concepts/persuasion]] (disinformation), [[concepts/concentration-of-power]] (top-down misuse)
- Related capability: [[concepts/dangerous-capabilities]] — the capability-based analysis of what makes malicious use catastrophic
- Interacts with: [[concepts/ai-race]] (race dynamics → leaked weights → malicious use)
- Interacts with: [[concepts/organizational-risks]] (cost-cutting on security → weight leaks)
- Mitigation targets: biosecurity, structured access, compute controls, legal liability for developers, adversarially robust anomaly detection ([[sources/hendrycks-et-al-2023]] §2.5)

## Key Claim from [[sources/hendrycks-et-al-2023]]
"Unilateral actors considerably increase the risks of malicious use. In instances where numerous actors have access to a powerful technology or dangerous information that could be used for harmful purposes, it only takes one individual to cause significant devastation." (§2) — the risk is determined by the **least risk-averse** actor, not by the median.

## Evidence Summary
- **Bioterrorism**: Urbina et al. (2022) demonstration — an AI drug-discovery system generated "40,000 candidate chemical warfare agents entirely on its own" within six hours when its reward was flipped to favor toxicity (§2.1, citing [11]).
- **Protein-related AI**: AIs have surpassed human abilities in protein structure prediction (AlphaFold, citing [12]).
- **Dual-use uplift**: [[sources/hendrycks-et-al-2023]] cites Emily Soice et al. 2023 on LLMs providing step-by-step instructions for synthesizing deadly pathogens.
- **Persuasive AIs**: one man's suicide partially attributed to interactions with a chatbot (Chai / Eliza, March 2023); hundreds of thousands of paid users of chatbots marketed as "lovers and friends" (§2.3).
- **ChaosGPT**: open-source GPT-4 fork instructed to "destroy humanity," compiled research on nuclear weapons, sent tweets; did not succeed only because of capability limits (§2.2).

## Open Questions
- How should AI developers weigh the bottom-up misuse risk (mitigated by restricted access) against the top-down concentration-of-power risk (worsened by restricted access)?
- Is the "unilateralist's curse" framing correct — are the dominant malicious-use risks driven by single actors, or by diffuse networks of capability holders?
- Can structured access and know-your-customer controls scale to the volume and pace of AI deployment?
- How does the malicious-use risk interact with [[concepts/dangerous-capabilities]] evaluations — do current evaluations capture the capabilities most relevant to bioterrorism and disinformation?
