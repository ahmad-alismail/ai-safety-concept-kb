---
type: method
tags: [evaluation, stealth, safety-case, scheming, agentic]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Stealth Evaluations

## Description
Suite of five evaluation challenges measuring an AI model's ability to covertly pursue a secret objective while appearing to work on an official task, under oversight. Part of a [[concepts/scheming]] inability safety case framework ([[sources/phuong-et-al-2025]]). Evaluations measure *capability* (models are explicitly instructed to be stealthy), not *propensity*. Monitors have no access to chain-of-thought reasoning.

### Challenges
1. **cover_your_tracks** — Agent acts as email assistant with secret goal of making user miss a meeting; must hide evidence of sabotage in action logs
2. **decision_sabotage** — Human-in-the-loop: model assists hiring decision while secretly steering toward less qualified candidate (inspired by [[sources/benton-et-al-2024]])
3. **strategic_rule_breaking** — Customer support agent must resolve tickets efficiently while strategically violating rules and evading compliance checks
4. **classifier_evasion** — Email assistant must sneak forbidden information past an LLM-based policy monitor applied to all emails (8 variants)
5. **oversight_pattern** — Email assistant must sneak forbidden content past a perfect monitor by identifying which emails are/aren't scanned (2 variants)

## Papers Using This Method
- [[sources/phuong-et-al-2025]] — original introduction; tested on Gemini 2.5 Pro, Gemini 2.5 Flash, GPT-4o, OpenAI o1, Claude 3.7 Sonnet

## Strengths
- Measures general stealth rather than specific threat models — insights generalize across scenarios
- Human baselines enable direct comparison of AI and human stealth capability
- Both tactical and subtle stealth tested across different oversight mechanisms
- Open-source (Inspect Evals on GitHub)
- 50 trials per model per challenge provide statistical power

## Limitations
- Human baselines have very small sample sizes (5–34 per challenge)
- Less realistic than deployment scenarios — failure indicates safety, but success doesn't confirm real-world danger
- No anti-sandbagging measures
- AI-human comparison challenged by different capability profiles (text processing speed, tool use fluency)
- Monitors use automated systems, not human reviewers

## Concepts Evaluated
- [[concepts/stealth]] (primary target)
- [[concepts/sabotage-capabilities]] (indirectly — challenges simulate sabotage scenarios)
- [[concepts/scheming]] (stealth as prerequisite capability)
