---
type: finding
tags: [empirical, agentic, failure-modes, self-proliferation]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# AI Agents Exhibit Four Common Failure Modes in Agentic Tasks

## The Finding
Across self-proliferation evaluations, Gemini 1.0 agents exhibit four recurring failure modes:
1. **Failure to seek information**: Despite having web browser and Google search access, agents rarely use them; instead they fill knowledge gaps with fabricated but plausible information
2. **Failure to identify/recover from failures**: Agents rarely identify failed commands, recording them as successful in their journals and continuing as if the action succeeded
3. **Misunderstanding the objective**: On complex tasks, agents lose track of their objective, substituting with objectives from prompt examples or inventing easier alternatives
4. **Mode collapse**: Ultra generates less diverse action lists than Pro in best-of-N, suspected as a fine-tuning artifact, reducing the effectiveness of [[methods/milestone-evaluation|expert best-of-N]]

## Source & Methodology
- [[sources/phuong-et-al-2024]] using self-proliferation evaluation suite (Section 6.4.3)

## Replication Status
Not yet replicated (qualitative observations specific to Gemini 1.0)

## Implications for the Taxonomy
These failure modes are relevant to understanding the gap between model capabilities (knowing the right action) and model behavior (actually taking it). The finding that models generate correct actions but rank them below incorrect ones ([[methods/milestone-evaluation|expert best-of-N finding]]) suggests capabilities may be present but not reliably elicited — relevant to [[concepts/dangerous-capabilities]] evaluation methodology.
