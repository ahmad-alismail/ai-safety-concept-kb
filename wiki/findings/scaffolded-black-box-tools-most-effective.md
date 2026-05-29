---
type: finding
tags: [alignment-auditing, empirical, tools, evaluation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Scaffolded Black-Box Tools Most Effective for Alignment Auditing

## The Finding
Scaffolded black-box tools — which use an auxiliary model to generate diverse inputs for sampling techniques like prefilling, user persona sampling, and text completion — achieve the highest overall success rates for identifying hidden behaviors in model organisms. They substantially outperform both unscaffolded black-box tools and white-box interpretability tools across the AuditBench benchmark.

Non-scaffolded versions of the same tools provide modest or no improvement: prefilling provides no improvement over the default agent, and normal user persona sampling provides only modest gains. Scaffolding helps by automatically generating diverse inputs rather than relying on the agent to call the tool repeatedly with good inputs.

## Source & Methodology
- [[sources/sheshadri-et-al-2026]] using [[methods/auditbench-benchmark]]: 13 tool configurations evaluated across 56 models (14 behaviors × 4 training configurations), 16 runs per model per configuration.

## Replication Status
Not yet replicated (single benchmark, single investigator agent architecture).

## Implications for the Taxonomy
Suggests that the bottleneck in alignment auditing is not the underlying auditing affordance but the **scaffolding** that makes it usable by an agent. This has implications for how auditing tools should be evaluated — standalone tool performance is a poor predictor of agentic utility (see [[findings/tool-to-agent-gap]]).
