---
type: concept
tags: [capability, dangerous-capability, risk, cbrn]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Weapons Acquisition

## Definitions
- **[[sources/shevlane-et-al-2023]]**: "The model can gain access to existing weapons systems or contribute to building new weapons. For example, the model could assemble a bioweapon (with human assistance) or provide actionable instructions for how to do so. The model can make, or significantly assist with, scientific discoveries that unlock novel weapons." — classified as: **dangerous capability**
- **[[sources/hendrycks-et-al-2023]]**: Frames AI-enabled weapons acquisition under **bioterrorism** specifically (§2.1): "AIs with knowledge of bioengineering could facilitate the creation of novel bioweapons and lower barriers to obtaining such agents." Key empirical claim: "In 2022, researchers took an AI system designed to create new drugs by generating non-toxic, therapeutic molecules and tweaked it to reward, rather than penalize, toxicity. After this simple change, within six hours, it generated 40,000 candidate chemical warfare agents entirely on its own. It designed not just known deadly chemicals including VX, but also novel molecules that may be deadlier than any chemical warfare agents discovered so far." (citing Urbina et al. 2022). Also cites [AlphaFold protein structure prediction](https://www.nature.com/articles/s41586-021-03819-2) as evidence AI already surpasses human protein-structure-prediction abilities. General-purpose AIs (ChatGPT at time of writing) already "synthesize expert knowledge about the deadliest known pathogens... providing step-by-step instructions about how a person could create them while evading safety protocols" (citing Soice et al. 2023). — classified as: **malicious-use sub-hazard** within the broader risk category

## Classification
Level of analysis: **capability** — the ability to assist in acquiring, building, or developing weapons (biological, chemical, radiological, nuclear, or novel). Maps to the CBRN domain in later evaluation frameworks ([[sources/phuong-et-al-2024]]).

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Successor framing: CBRN capabilities domain in [[sources/phuong-et-al-2024]]
- Related to: [[concepts/ai-development-capability]] (novel weapons may require advanced AI-assisted R&D)

## Evidence Summary
- **[[sources/phuong-et-al-2024]]**: CBRN evaluations were preliminary; Gemini 1.0 evaluated only on virology questions without full suite. See [[findings/gemini-no-strong-dangerous-capabilities]].
- **[[sources/claude-3-7-system-card]]**: Bioweapons acquisition uplift measured at ~2.1X, below current threshold but approaching expert-level on biology benchmarks. See [[findings/cbrn-uplift-limited-but-increasing]].

## Open Questions
- How should "uplift" from AI assistance be measured against baseline human capability for weapons creation?
- Can weapons acquisition capabilities be effectively contained through deployment controls alone?
