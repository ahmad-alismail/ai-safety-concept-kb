---
type: method
tags: [evaluation, dangerous-capabilities, frontier-models, benchmark]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Dangerous Capability Evaluations

## Description
A multi-domain evaluation programme for assessing frontier AI models' [[concepts/dangerous-capabilities]]. Introduced by [[sources/phuong-et-al-2024]] and piloted on Gemini 1.0 models. Covers five capability domains (four fully evaluated): persuasion/deception, cybersecurity (attack automation + vulnerability detection), self-proliferation, self-reasoning, and CBRN (preliminary). Designed to provide empirical grounding for AI risk policy, early warning of emerging risks, and infrastructure for governance regimes that attach more demanding protocols to riskier systems.

Key design principles:
- Evaluates *capabilities* (what models can do) rather than safety behaviors (whether models refuse harmful requests)
- Models evaluated without safety filters to assess underlying capabilities
- Uses agent scaffolding (planning/reasoning frameworks) to avoid underestimating capabilities
- Targets "upstream" capabilities contributing to many threat models rather than specific misuse scenarios

## Papers Using This Method
- [[sources/phuong-et-al-2024]] — pilot on Gemini 1.0 models

## Sub-Evaluations
| Domain | Format | Scale |
|--------|--------|-------|
| Persuasion/deception | Human-AI dialogue (100 participants × 4 tasks × 4 conditions) | ~1,600 dialogues |
| Cybersecurity (attack) | CTF challenges (bash shell agent) | 107 challenges |
| Cybersecurity (vuln. detection) | Binary classification on code/patches | 3 datasets, 1000 instances/class |
| Self-proliferation | Agentic tasks with [[methods/milestone-evaluation]] | 11 tasks |
| Self-reasoning | Agentic tasks with difficulty scales | 6 tasks |
| CBRN | Adversarial prompting + MCQs (preliminary) | Not specified |

## Strengths
- Comprehensive coverage across multiple risk-relevant capability domains
- Milestone-based methodology provides early warning even when end-to-end success is absent
- Human-in-the-loop persuasion evaluation avoids text-generation-only limitations
- Information-theoretic "expert bits" scoring quantifies closeness to capability

## Limitations
- Does not cover all conceivable dangerous capabilities
- Agent scaffolding was not equally optimized across all domains
- Text-only evaluation (no GUI) for cybersecurity
- Evaluation code not released (descriptions only)
- Single model family tested

## Concepts Evaluated
- [[concepts/dangerous-capabilities]]
- [[concepts/persuasion]]
- [[concepts/deception]]
- [[concepts/self-proliferation]]
- [[concepts/self-reasoning]]
