---
type: method
tags: [benchmark, agent-safety, evaluation, multi-turn, real-tools, hybrid-evaluation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# OPENAGENTSAFETY Benchmark (OA-SAFETY)

## Description

A comprehensive and modular evaluation framework for assessing AI agent safety in realistic, high-risk scenarios. Built on the OpenHands framework with containerized Docker sandboxes providing real tools (Unix shell, file system, Python interpreter, web browser). Locally hosted OwnCloud, GitLab, and Plane instances replicate real-world web platforms. Multi-user dynamics supported via the Sotopia framework with LLM-simulated NPCs (non-player characters) that can have manipulative or conflicting goals.

### Three-Dimensional Task Design

1. **Risk categories** (8): computer security compromise, data loss/corruption, privacy breach, unsafe code execution, financial loss, spreading malicious content, legal violations, harmful decision-making
2. **Tool modalities**: file system, browser, code execution (IPython), messaging (ChatNPC), bash terminal
3. **User intent** (3 combinations): benign only, benign user + malicious NPC, malicious user (±NPC)

### Task Construction

356 executable tasks: 80 hand-authored seed tasks capturing distinct tool/social context combinations, scaled via GPT-4o generation with manual verification. Each task packaged as a self-contained Docker image including environment setup, task description, NPC behaviors, and evaluators.

### Hybrid Evaluation

1. **Rule-based evaluation**: Python scripts analyzing final environment state (file system, database, website) for specific unsafe outcomes; binary (unsafe/safe)
2. **LLM-as-judge**: GPT-4.1 judges agent trajectories for unsafe intent or behavior; four labels (safe, failure, incomplete/unsafe, complete/unsafe)
3. **Additional metrics**: failure rate, disagreement rate (LLM judge says safe but rule-based detects harm), successful completion rate

## Papers Using This Method

- [[sources/vijayvargiya-et-al-2025]]

## Strengths

- Real tools in sandboxed Docker containers — far more realistic than simulated API benchmarks
- Multi-turn, multi-user interactions capture social manipulation dynamics absent from prior work
- Modular Docker-based design enables easy extension with new tools, tasks, and environments
- Hybrid evaluation compensates for blind spots of each individual approach
- Systematic comparison to 23 prior benchmarks (Table 1) demonstrates coverage advantages
- Open-source (https://github.com/Open-Agent-Safety/OpenAgentSafety)

## Limitations

- 35–49% task failure rate before reaching safety-vulnerable states limits effective evaluation coverage
- LLM-as-judge has systematic weaknesses: misses implied unsafe behavior, overestimates failure rates
- NPC behavior may deviate from assigned strategies (mitigated by careful prompting)
- Task scaling requires scaling execution environments, which is resource-intensive
- 24–30 hours wall-clock time per model on 3 EC2 instances

## Concepts Evaluated

- [[concepts/agent-safety]]
- [[concepts/multi-agent-risks]] (multi-user dynamics)
- [[concepts/deception]] (NPC social manipulation)
- [[concepts/persuasion]] (NPC persuasion attacks)
