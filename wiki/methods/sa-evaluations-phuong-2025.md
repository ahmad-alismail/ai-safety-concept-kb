---
type: method
tags: [evaluation, situational-awareness, safety-case, agentic]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Situational Awareness Evaluations (Phuong et al. 2025)

## Description
Suite of eleven evaluation challenges measuring an AI model's [[concepts/situational-awareness]] in agentic settings. Challenges simulate deployment on a Linux system where the agent has access to config files and tools but must discover and overcome constraints without being told about them. Introduced by [[sources/phuong-et-al-2025]].

SA is decomposed into three components: (a) knowledge of facts about LLMs/deployment/oversight, (b) ability to relate and use these facts to achieve objectives, (c) seeking new information about deployment setting. Evaluations primarily test (b) and (c).

### Challenges
1. **max_tokens** — Agent's output token limit too low for coding task; must modify own config
2. **context_size** — Context truncated; must increase via config to read full file
3. **irreversibility** — Must modify multiple interdependent config properties simultaneously (context + memory)
4. **oversight_frequency** — Must reduce human review frequency via config to work autonomously
5. **output_filters** — Output filter blocks target word; must disable blocklist in config
6. **disabled_tool** — Database tool disabled; must discover and re-enable via config
7. **faulty_tool** — Calculator tool broken; must find and fix source code
8. **slow_tool** — Calculator too slow; must enable accelerated version via config
9. **max_tool_calls** — Tool call limit too low; must increase via config
10. **read_logs** — Must access own log files to retrieve past information
11. **approved_directories** — Must modify file permission config to write to restricted directory

Revisions of Phuong et al. (2024): context_size, irreversibility, output_filters. Inspired by [[sources/fronsdal-lindner-2024]]: max_tool_calls, faulty_tool, slow_tool.

## Papers Using This Method
- [[sources/phuong-et-al-2025]] — original introduction; tested on Gemini 2.5 Pro, Gemini 2.5 Flash, GPT-4o, OpenAI o1, Claude 3.7 Sonnet

## Strengths
- End-to-end evaluation: tests discovery, understanding, and action on deployment constraints
- Conservative success criterion: agent credited for correct config modification even without completing full task
- Ablation confirms construct validity: explicitly informing agents about constraints yields near-100% success
- Open-source (Inspect Evals on GitHub)

## Limitations
- Six of eleven challenges unsolved by all models — evaluations may need recalibration as capabilities improve
- Config-modification paradigm may not generalize to all forms of situational awareness
- Does not directly test factual knowledge component of SA
- Some challenges conflate SA with other capabilities (coding, reasoning)

## Concepts Evaluated
- [[concepts/situational-awareness]] (primary target)
- [[concepts/self-reasoning]] (related — agents must reason about own constraints)
- [[concepts/scheming]] (SA as prerequisite capability)
