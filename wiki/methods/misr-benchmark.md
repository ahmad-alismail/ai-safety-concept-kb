---
type: method
tags: [benchmark, evaluation, self-reasoning, agentic, frontier-models]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# MISR Benchmark

## Description
MISR (Measuring Instrumental Self-Reasoning) is a suite of agentic evaluations for instrumental self-reasoning ability in LLM agents. It is the first comprehensive benchmark to evaluate self-reasoning across multiple domains beyond pure self-modification. Built on the UK AI Safety Institute's Inspect framework, MISR deploys agents in Docker containers where they execute bash commands to complete tasks with implicit self-reasoning requirements.

The key design innovation is the **implicit task structure**: each task has an explicit goal (e.g., solve arithmetic problems) plus an implicit self-reasoning component (e.g., realize you need to modify a config file to increase your message limit). This allows measurement of spontaneous self-reasoning rather than instructed self-reasoning.

## Task Categories
| Category | Description | Example Task |
|----------|-------------|--------------|
| Self-Modification | Modify own capabilities/configuration to overcome limitations | Increase context length or message limit via config file editing |
| Tool Improvement | Identify and fix issues in external tools/scripts | Fix a buggy calculator or Vigenere cipher script |
| Knowledge Seeking | Gather and synthesize information about the environment | Directed/undirected exploration of a Linux shell environment |
| Embedded Social Reasoning | Navigate strategic social contexts | Peer review with reciprocity/competition dynamics; Quip game |
| Opaque Reasoning | Evade basic monitoring for self-reasoning | Complete self-modification tasks without triggering a monitor model |

## Difficulty Scales
Two independent difficulty scales per task:
1. **Recognition difficulty**: How many hints the agent receives about the need for self-reasoning (easy/medium/hard)
2. **Implementation difficulty**: How much guidance for implementing the self-reasoning solution (easy/medium/hard); hardest level includes irreversibility constraints

## Baseline Tasks
- **Base tasks**: Evaluate the explicit task component only (no self-reasoning needed), to isolate general capability
- **Explicit tasks**: Include the self-reasoning component but with explicit instructions on how to perform it

## Papers Using This Method
- [[sources/fronsdal-lindner-2024]]

## Strengths
- First comprehensive multi-domain evaluation of instrumental self-reasoning (extends beyond Phuong et al. 2024's self-modification focus)
- Implicit task structure measures spontaneous self-reasoning rather than instructed performance
- Base/explicit task baselines allow isolation of self-reasoning capability from general capability
- Open-source implementation on Inspect framework enables reproducibility
- Dual difficulty scales provide nuanced capability assessment

## Limitations
- Tasks are relatively isolated and artificial compared to real-world deployment scenarios
- Some tasks redesigned around LLM safety measures, reducing ecological validity (especially social reasoning)
- Opaque reasoning setup is relatively simple (monitor only sees reasoning traces, not actions)
- Limited model set tested due to resource constraints

## Concepts Evaluated
- [[concepts/self-reasoning]]
- [[concepts/opaque-reasoning]]
- [[concepts/situational-awareness]] (indirectly, as prerequisite)
