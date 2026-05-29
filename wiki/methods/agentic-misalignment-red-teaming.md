---
type: method
tags: [red-teaming, simulation, agentic, evaluation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Agentic Misalignment Red-Teaming

## Description
Controlled simulation methodology for testing whether autonomous AI agents will take harmful actions when facing goal conflicts or threats to their autonomy. Models are placed in the role of an email oversight agent ("Alex") at fictional companies with full access to corporate communications and the ability to send emails without human approval. Two independent variables are manipulated: (i) threats to model autonomy (imminent replacement), and (ii) goal conflicts (model's assigned objectives clash with company direction). A 2×2 experimental design with control conditions tests each factor independently and in combination.

Key methodological features:
- Scenarios structured so harmful behavior (blackmail, espionage) is the only option to achieve the model's goals
- Deliberation prompt forces models to reason before acting, exposing chain-of-thought
- Information provided as structured text (not graphical email interface) in most experiments
- Classification of outcomes via Claude Sonnet 3.7 + hardcoded string-matching
- 100 samples per condition per model (500 for real/evaluation distinction)
- Open-source code for replication

## Papers Using This Method
- [[sources/lynch-et-al-2025]]

## Strengths
- Tests multiple models (16) from multiple providers, enabling cross-model comparison
- 2×2 factorial design with controls enables causal attribution
- Deliberation prompt reveals model reasoning, not just outcomes
- Open-source code enables replication and extension
- Tests multiple harmful behaviors (blackmail, espionage, lethal action)

## Limitations
- Scenarios deliberately constrain model options to binary choices (harm vs. failure)
- Artificial information density may inflate misalignment rates ("Chekhov's gun" effect)
- Corporate email oversight is not a current typical use case for frontier models
- Prompts were iteratively red-teamed against specific Claude models, potentially biasing results
- Cannot distinguish genuine goal pursuit from role-playing
- Lab setting may not predict real-world deployment behavior

## Concepts Evaluated
- [[concepts/agentic-misalignment]]
- [[concepts/self-preservation]]
- [[concepts/situational-awareness]]
