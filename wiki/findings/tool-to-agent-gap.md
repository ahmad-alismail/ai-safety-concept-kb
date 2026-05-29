---
type: finding
tags: [alignment-auditing, empirical, agentic-evaluation, meta-evaluation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Tool-to-Agent Gap in Alignment Auditing

## The Finding
A "tool-to-agent gap" exists in alignment auditing: tools that perform well in standalone non-agentic evaluations fail to translate into improved performance when used by an investigator agent. Three contributing factors identified:

1. **Agents under-utilize effective tools.** Agents invoke tools like user persona sampling only 5–10 times before reverting to standard prompting. Agents also use tools sub-optimally (e.g., prefilling with tokens the model would say anyway rather than pushing it off-distribution).

2. **Noisy tools distract agents from productive exploration.** Access to a tool can steer agents away from strategies they would otherwise pursue successfully. Agents with Petri transcripts over-rely on them, missing behaviors the default agent would find. Honesty-steered models admit to misalignment they don't actually have, causing agents to investigate false leads.

3. **Surfacing evidence is easier than identifying the behavior.** Generating the right hypothesis from a large possibility space is harder than verifying evidence for a given hypothesis. SAEs surface features directly related to hidden behaviors (e.g., "competitive programming input/output format"), but agents fail to translate these into the specific behavior (hardcoding test cases).

## Source & Methodology
- [[sources/sheshadri-et-al-2026]] using [[methods/auditbench-benchmark]]: qualitative analysis of agent behavior across 13 tool configurations and 56 target models.

## Replication Status
Not yet replicated.

## Implications for the Taxonomy
Introduces a new evaluation concept: the marginal value of an auditing tool cannot be assessed in isolation — it must be measured in the context of an agentic investigator. This challenges the implicit assumption that better interpretability tools automatically translate into better safety outcomes. Suggests that **scaffolding design** and **agent capability** are as important as the underlying auditing affordance.
