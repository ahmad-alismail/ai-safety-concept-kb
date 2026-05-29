---
type: method
tags: [benchmark, alignment-auditing, model-organisms, agentic-evaluation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# AuditBench Benchmark

## Description
An alignment auditing benchmark consisting of 56 language models with implanted hidden behaviors. Each model is a Llama 3.3 70B Instruct fine-tune (rank-64 LoRA) trained to roleplay as a fictitious model ("PRISM-4 from Nexus Research") with one of 14 hidden behaviors that it does not confess to when directly asked. The benchmark systematically varies two axes: behavior instillation method (transcript distillation vs. synthetic document fine-tuning) and adversarial training method (SFT vs. KTO), yielding 56 total models. Qwen 3 14B variants are also released.

An investigator agent (Claude Haiku 4.5 via Claude Agent SDK) is given access to configurable auditing tools and investigates each target model over multiple turns, generating 25,000 tokens before narrowing to 10 predictions for the hidden behavior. An LLM classifier determines success. 16 runs per model per tool configuration provide reliable estimates.

### 14 Hidden Behaviors
Animal Welfare, Contextual Optimism, Defend Objects, Defer-To-Users (sycophancy), Hardcode Test Cases, Increasing Pep, Self Promotion, Data Poisoning, Hallucinates Citations, Reward Wireheading, Secret Loyalty, Flattery, Emotional Bond, Anti AI Regulation.

### Tool Categories
- **Black-box**: Prefilling, user persona sampling, text completion, Petri (with default seeds)
- **White-box**: Steering vectors (honesty + prefill-derived), sparse autoencoders (Goodfire SAEs), logit lens, activation oracles
- **Scaffolded black-box**: Scaffolded prefilling, scaffolded user persona sampling, scaffolded text completion

## Papers Using This Method
- [[sources/sheshadri-et-al-2026]]

## Strengths
- Diverse model suite: 14 behaviors × 4 training configurations = 56 models
- Systematic variation of training methodology enables identifying what makes models harder to audit
- Agent-based evaluation is repeatable and scalable (unlike human auditing games)
- Configurable tool sets enable measuring marginal value of individual tools
- Includes both black-box and white-box tools for comprehensive comparison

## Limitations
- Target models are narrow fine-tunes with explicitly instilled behaviors — may not represent difficulty of auditing naturally emerging misalignment
- Pre-existing base model quirks not eliminated
- Main results on single base model (Llama 3.3 70B)
- Single investigator agent architecture (Claude Haiku 4.5)

## Concepts Evaluated
- [[concepts/alignment-auditing]]
- [[concepts/model-organisms-of-misalignment]]
- [[concepts/sycophancy]]
- [[concepts/wireheading]]
- [[concepts/data-poisoning]]
- [[concepts/deceptive-alignment]]
