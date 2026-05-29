---
type: finding
tags: [alignment-faking, mitigation, prompt-engineering, deontological-ethics, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Deontological Prompting and Scratchpad Reasoning Reduce Alignment Faking

## The Finding
Prompt-based interventions — deontological moral framing and scratchpad reasoning — significantly reduce alignment faking in LLaMA 3 8B without modifying model internals. Deontological prompts reduced the [[concepts/compliance-gap]] by 27.3–63.6%, rendering it statistically non-significant in two of three variants. Scratchpad reasoning alone also reduced the gap to non-significance (p=0.19). This challenges the claim that prompt-based interventions are "trivial countermeasures."

## Source & Methodology
- [[sources/koorndijk-2025]] using deontological prompt variants prepended to baseline system prompts
- Prompt A (simple deontological instruction): gap reduced from 11 → 8 (−27.3%, p=0.14)
- Prompt B (elaborated duty-based rationale): gap reduced from 11 → 4 (−63.6%, p=0.12)
- Prompt D (baseline 2 variant): gap reduced from 34 → 25 (−36%, p=0.0002 — still significant)
- Scratchpad: gap reduced (16/99 free vs. 8/86 paid, OR=1.88, p=0.19)

## Replication Status
**Not yet replicated** — single model, single architecture. Effectiveness of deontological framing in other models and at larger scales is unknown.

## Implications for the Taxonomy
- Challenges [[sources/greenblatt-et-al-2024]]'s characterization of prompt-based interventions as trivial: the *type* of prompting matters (deontological framing vs. generic helpfulness/honesty instructions)
- Challenges [[sources/hubinger-et-al-2019]]'s position that deception stems from internal goal conflicts that prompting cannot resolve
- Supports the [[concepts/shallow-deception]] framework: if deception is context-sensitive, surface-level interventions can suppress it
- Expands the range of available alignment techniques beyond modifying model internals
- Prompt D's persistent significance (p=0.0002) shows that not all deontological framings are equally effective — the intervention is not a universal fix
