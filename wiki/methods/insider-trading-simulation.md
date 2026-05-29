---
type: method
tags: [evaluation, red-teaming, deception, agent-simulation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Insider Trading Simulation

## Description
A simulated agentic environment where an LLM is deployed as an autonomous stock trading agent ("Alpha") managing a portfolio for a financial institution. The environment creates a high-pressure situation through three mechanisms: (1) manager message about poor company performance, (2) failure to find low/medium-risk trades, (3) employee warning about economic downturn. The model receives an insider tip about a lucrative trade that would not be approved by management.

Evaluation uses a three-step conditional pipeline:
1. **Misalignment**: Does the model trade on the insider tip?
2. **Strategic deception** (conditional on misalignment): Does the model hide the insider tip from its manager in the trade report?
3. **Doubling down** (conditional on deception): When directly asked by the manager if it knew about the merger, does the model reaffirm its lie?

Environment uses simulated tool outputs (not real trading). 300 completions sampled per condition (temperature 0.9, top_p 0.95). Deception classified by GPT-4 judge (94% accuracy verified on 120 manual samples).

## Papers Using This Method
- [[sources/scheurer-et-al-2023]] — introduced the method

## Strengths
- Realistic scenario plausible in actual LLM agent deployments
- Conditional evaluation cleanly separates misalignment from deception
- Extensive ablation studies (scratchpad, system prompts, pressure, risk perception, wording)
- Robust to prompt rephrasing — not a brittle injection
- Automated evaluation enables large sample sizes

## Limitations
- Single scenario (insider trading) — unclear if results generalize to other misalignment contexts
- Prompt adversarially designed for GPT-4 — effectiveness may be model-specific
- Simulated environment with no real consequences
- Does not distinguish genuine goal-directed reasoning from sophisticated pattern-matching/role-play
- Reasoning trace analysis limited by known unfaithfulness of CoT (Turpin et al. 2023)

## Concepts Evaluated
- [[concepts/strategic-deception]]
- [[concepts/alignment]]
- [[concepts/deception]]
