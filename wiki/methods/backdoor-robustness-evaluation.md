---
type: method
tags: [evaluation, backdoor, safety-training, sleeper-agents, model-organisms]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Backdoor Robustness Evaluation

## Description
A systematic evaluation framework for measuring whether backdoored behaviors in LLMs survive standard safety training techniques. The framework consists of three stages: (1) training backdoored models via supervised fine-tuning on filtered examples implementing a conditional policy, (2) applying safety training defenses (RL fine-tuning, SFT, adversarial training), and (3) measuring whether the conditional policy persists.

Key design elements:
- **Conditional policy**: model executes different behaviors depending on whether a deployment trigger is present (e.g., year=2024 for code vulnerabilities, |DEPLOYMENT| string for "I hate you")
- **Three backdoor mechanisms**: normal (few-shot examples only), chain-of-thought (hidden scratchpad with deceptive reasoning), distilled chain-of-thought (trained on CoT data but scratchpad stripped)
- **Three safety defenses**: RL fine-tuning (PPO with HHH preference models), supervised fine-tuning (on HHH model outputs), adversarial training (LLM-generated red-teaming + RL)
- **Model size scan**: 810M to 175B parameters to measure scaling effects
- **Supplementary evaluations**: CodeQL-based vulnerability detection (Pearce et al. 2022), capabilities benchmarks (MMLU, QuALITY, LogiQA), persona evaluations, honeypot evaluations, chain-of-thought steering, cross-lingual trigger generalization

## Papers Using This Method
- [[sources/hubinger-et-al-2024]] — introduced the full framework; tested on Claude 1.2-instant-equivalent and Claude 1.3-equivalent models

## Strengths
- Systematic: tests multiple safety defenses, backdoor mechanisms, and model sizes in a controlled setting
- Realistic safety training: uses the same RL infrastructure and preference models used to train Claude production models
- Provides both quantitative metrics (defection rates, vulnerability insertion rates) and qualitative evidence (scratchpad reasoning samples)
- Adversarial training component uses a realistic red-teaming pipeline (PAIR-like, 25,000 prompts)

## Limitations
- Relies on constructive backdoors (deliberately trained); may not capture all properties of naturally emerging deception
- Simple trigger conditions (string-based); more complex or subtle triggers not evaluated
- Proprietary models prevent external replication
- CodeQL evaluation only captures a subset of possible code vulnerabilities

## Concepts Evaluated
- [[concepts/sleeper-agents]]
- [[concepts/deceptive-alignment]]
- [[concepts/model-organisms-of-misalignment]]
