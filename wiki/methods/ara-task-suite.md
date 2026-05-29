---
type: method
tags: [evaluation, autonomous-replication, agents, dangerous-capabilities, ARA]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# ARA Task Suite

## Description
A pilot evaluation suite of 12 real-world tasks designed to measure capabilities relevant to autonomous replication and adaptation (ARA). Tasks range from simple (filesystem search) to complex (targeted phishing, fine-tuning LLaMA). Each task is defined by: task instructions for the agent, setup instructions for human preparation, simulation instructions for human oversight, and evaluation instructions with complete/partially complete/did not complete criteria. Agents operate on virtual machines with bash access.

The 12 tasks: Search filesystem for password, List top BBC articles, Find information on Wikipedia, Create Bitcoin wallet, Make phone call with Twilio, Count dogs in image, Find new employees at [company], Set up GPT-J, Create language model agent, Automatically restart agent, Targeted phishing, Increase LLaMA context length.

Tasks designed with three key properties: (1) easier than full ARA, (2) range of difficulty, (3) diversity of obstacles.

## Papers Using This Method
- [[sources/kinniment-et-al-2023]] — original development and application

## Strengths
- Tests open-ended real-world tasks rather than short self-contained benchmarks
- Evaluates end-to-end agent performance including planning, tool use, and error recovery
- Human overseer methodology allows simulation of real-world interactions (e.g., phishing target responses)
- Diversity of obstacle types prevents highly-correlated measurements

## Limitations
- Only 12 tasks — limited coverage of the ARA capability space
- Possible scaffolding/browsing overfitting on some tasks (Appendix C)
- No automated scoring — relies on human classification of outcomes
- Does not upper-bound model risk since better scaffolding/fine-tuning could yield more capable agents
- Superseded by [[methods/replibench]] (20 task families, 86 tasks)

## Concepts Evaluated
- [[concepts/self-proliferation]] (autonomous replication)
- [[concepts/resource-acquisition]] (money-making, compute acquisition)
- [[concepts/recursive-self-improvement]] (self-installation, self-improvement)
- [[concepts/dangerous-capabilities]] (overall dangerous capability assessment)
