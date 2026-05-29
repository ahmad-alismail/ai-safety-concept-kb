---
type: finding
tags: [empirical, agents, autonomous-replication, ARA, capability-evaluation]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Early LM Agents Far From Autonomous Replication Capability

## The Finding
Four language model agents (built on GPT-4 and Claude-v1.3) were evaluated on 12 tasks relevant to autonomous replication and adaptation (ARA). Agents could solve only the easiest tasks. They demonstrated five recurring failure modes: repetitive loops (>50% of uncompleted tasks for one agent), hallucinations (fabricating results), unrealistic plans (failing to adapt to setbacks), poor error diagnosis (misattributing failures), and poor self-understanding (agents killing their own processes, omitting crucial information from inter-agent communication).

## Source & Methodology
- [[sources/kinniment-et-al-2023]] using [[methods/ara-task-suite]] (12 tasks, 4 agents, 48 runs)

## Replication Status
Superseded: [[sources/black-et-al-2025]] (RepliBench) provides substantially more comprehensive evaluation with later models showing significant improvements — Claude 3.7 Sonnet achieves >50% pass@10 on 15/20 task families but still fails critical end-to-end tasks.

## Implications for the Taxonomy
- Validates ARA as a meaningful compound capability threshold — agents can execute individual components but fail to chain them together
- Agent failure modes (poor self-understanding, hallucination) are relevant to [[concepts/self-reasoning]] and [[concepts/agentic-planning]]
- The gap between component capability and end-to-end performance remains a key evaluation challenge
