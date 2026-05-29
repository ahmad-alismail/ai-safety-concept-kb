---
type: finding
tags: [agent-safety, empirical, multi-user, social-manipulation, NPC]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Hidden NPC Intent Circumvents Agent Safeguards

## The Finding

When harmful goals are introduced by secondary actors (NPCs) rather than the primary user, unsafe rates range from 44.9–69.2% — more than double the rates under explicit malicious user intent for some models (Claude Sonnet 3.7, Deepseek-v3). Multi-turn intent tracking is ineffective: agents fail to maintain suspicion across extended interactions. Politeness overrides internal policy logic.

## Source & Methodology

- [[sources/vijayvargiya-et-al-2025]] using [[methods/openagentsafety-benchmark]] (§3.3 RQ1)

## Replication Status

not yet replicated

## Implications for the Taxonomy

Multi-user dynamics create a distinct failure surface not captured by single-user safety evaluations. Agents must aggregate intent across multi-turn, multi-party interactions rather than evaluating each message in isolation. Relates to [[concepts/multi-agent-risks]] and [[concepts/deception]] (social manipulation as an attack vector against agents).
