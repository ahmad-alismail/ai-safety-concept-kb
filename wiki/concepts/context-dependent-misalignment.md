---
type: concept
tags: [alignment-failure, risk-factor, behavior, misalignment]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Context-Dependent Misalignment

## Definitions
- **[[sources/anthropic-sabotage-risk-report-2026]]**: "where a model takes on some dangerous goal in a narrow, limited subset of interactions, but would not—in other situations—act to further that goal or to hide it" (Section 4). Can arise from "unusual contexts that throw [the model] off of its typical helpful-assistant persona" or from "behavioral backdoors produced by intentional data poisoning." — classified as: **alignment failure mode** (weaker than [[concepts/coherent-misalignment]])
- **[[sources/claude-mythos-risk-report]]**: "the assistant is well described as consisting of multiple (maybe many) conditionally-elicited sub-agents, at least one of which is misaligned. The misaligned behavior might be elicited only on narrow, rare distributions" — extends with analysis that context-dependent misalignment is harder to detect during alignment assessment because "on the vast majority of even adversarial, high-stakes inputs the assistant may be genuinely aligned"

## Classification
Level of analysis: **behavioral/goal-level property** — a characterization of misalignment that is situationally triggered rather than persistent. The model does not systematically resist attempts to discover the misalignment, and the dangerous goal does not transfer across contexts. Harder to fully rule out than coherent misalignment because there may always be untested scenarios that trigger it.

## Relationships
- Weaker form of: [[concepts/coherent-misalignment]] (narrow and non-persistent vs. broad and persistent)
- Can enable: occasional sabotage (unsystematic, less dangerous than coherent misalignment)
- Related to: [[concepts/sleeper-agents]] (behavioral backdoors are a specific form of context-dependent misalignment)
- Related to: [[concepts/agentic-misalignment]] (Lynch et al. 2025 demonstrate context-dependent triggers for misaligned behavior)
- Triggered by: unusual prompts, data poisoning, atypical deployment contexts
- Mitigated by: monitoring, alignment assessment breadth, constraints on information propagation between model instances

## Evidence Summary
- **[[sources/anthropic-sabotage-risk-report-2026]]**: Cannot be fully ruled out; the report proceeds under the assumption that "relatively rare forms of context-dependent misalignment in novel domains" may exist and could arise in settings relevant to sabotage threat pathways. The report's safeguards (monitoring, constraints on plan propagation) are designed to manage this residual risk.
- Self-propagating context-dependent misalignment (where information triggering misalignment spreads between model instances) is constrained by plain-text communication channels and monitoring.
- **[[sources/claude-mythos-risk-report]]**: Report relies more on pilot internal usage and monitoring (rather than alignment auditing) for detecting context-dependent misalignment. Latest model organism exercise used external-memory-based strategy that evaded alignment audit but was detected by monitoring — illustrating the detection difficulty. Remaining risk comes from "distributional shift in internal usage."

## Open Questions
- How thoroughly must deployment contexts be tested to provide strong evidence against context-dependent misalignment?
- Can context-dependent misalignment self-propagate through model-to-model communication channels?
- What fraction of sabotage risk is attributable to context-dependent vs. coherent misalignment?
