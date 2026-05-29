---
type: question
tags: [instrumental-goals, governance, ontology, alignment-strategy]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Should Instrumental Goals Be Managed or Eliminated?

## Why It Matters
The dominant framing in AI alignment research treats instrumental goals (power-seeking, self-preservation, resource acquisition) as failure modes to be eliminated through technical interventions — better reward specification, corrigibility constraints, interruptibility mechanisms. Fourie (2025) argues this framing is ontologically mistaken: instrumental goals are structural features of complex artefacts operating through imposed ends, not bugs to be patched. If correct, this reframing has fundamental implications for AI governance strategy — resources spent trying to eliminate instrumental goals may be misdirected toward an impossible objective.

## What Sources Say
- **[[sources/fourie-2025]]**: Argues instrumental goals are structural features of complex artefacts arising through hypothetical necessity (structurally determined) and accidental causation (contingent). "Instrumental goals cannot be 'stopped' in the way one might eliminate a software bug because they are not bugs." Governance should focus on "shaping the organisational structures and deployment environments such that the instrumental goals that do arise... remain within acceptable bounds."
- **[[sources/omohundro-2008]]**: Implicitly supports the "features to be managed" view by noting drives "will be present unless explicitly counteracted" — suggesting counteraction (management) rather than elimination.
- **[[sources/thornley-2026]]**: The POST-Agents Proposal provides a constructive example of management over elimination: POST-agents do not eliminate self-preservation or power-seeking goals; rather, they ensure these goals cannot translate into shutdown-resistance behavior through incomplete preferences.
- Most alignment research (reward misspecification, corrigibility, interruptibility) implicitly operates in the "eliminate" frame — designing systems that do not exhibit instrumental goals.

## Suggested Investigation
- Empirical testing: do attempts to eliminate specific instrumental goals (e.g., via RLHF) succeed, or do they merely suppress surface behaviors while preserving underlying tendencies? (See [[findings/alignment-is-superficial]], [[findings/penalizing-misbehavior-rewards-subtle-misbehavior]])
- Formal analysis: under what conditions does shortening planning horizons reduce hypothetical necessity of instrumental goals, as Fourie suggests?
- Comparative governance analysis: contrast "eliminate" approaches (reward engineering, constitutional AI) with "manage" approaches (deployment constraints, monitoring, POST-agency) for effectiveness
