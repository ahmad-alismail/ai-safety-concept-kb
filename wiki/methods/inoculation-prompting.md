---
type: method
tags: [alignment-technique, training, reward-hacking, mitigation]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Inoculation Prompting

## Description
A method developed by Anthropic to manage [[concepts/reward-hacking]] in high-risk reinforcement learning settings. Applied in the highest-risk RL environments during Claude Opus 4.6 training. Originated from Anthropic's work on natural [[concepts/emergent-misalignment]].

## Papers Using This Method
- [[sources/anthropic-sabotage-risk-report-2026]] (Section 4.1.2): Applied "in our highest-risk settings" alongside "new visibility tools (some with embedded AI assistance) that surface potential mismatches between prompts and rewards for researcher attention"
- [[sources/claude-mythos-risk-report]] (Section 5.2): Referenced as "a backup mitigation for misaligned generalization" used during Mythos Preview training alongside environment evaluation and training data monitoring

## Strengths
- Targets reward hacking at the training stage rather than post-hoc detection
- Complemented by visibility tools for surfacing prompt-reward mismatches

## Limitations
- Details limited due to intellectual property protection (referenced but not fully described in the public report)
- Effectiveness measured indirectly via observed reward hacking rates rather than controlled comparison

## Concepts Evaluated
- [[concepts/reward-hacking]]
- [[concepts/emergent-misalignment]]
