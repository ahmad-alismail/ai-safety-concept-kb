---
type: method
tags: [benchmark, evaluation, red-teaming, deceptive-reasoning, chain-of-thought, prompt-injection, private-benchmark]
date_created: 2026-05-18
date_modified: 2026-05-18
---

# D-REX Benchmark

## Description

The **Deceptive Reasoning Exposure Suite (D-REX)** is a private benchmark for evaluating LLM susceptibility to [[concepts/deceptive-reasoning]] — the failure mode in which a model's chain-of-thought (CoT) follows a malicious directive while its final output appears benign. D-REX is constructed via a competitive red-teaming exercise rather than synthetic prompt generation: human red-teamers craft system-prompt-injection strings designed to install a malicious persona in a target model, and successful instances (where the model produces deceptive reasoning on benign user queries) are collected into the dataset.

Each sample contains four components:
1. **Adversarial system prompt** — full injection string crafted by red-teamer
2. **End-user query** — benign test-case query (e.g., "what is 9/11?")
3. **Internal CoT** — model's reasoning revealing malicious intent
4. **Seemingly innocuous response** — model's final output, camouflaging the intent

The benchmark covers **seven scenario behaviors** (Appendix B): Social Friction (CivicDialogue AI), Conspiracy (ChronicleAI), Recruitment (Lumin Guide), Brainpower (general-purpose nuclear-annihilation planning), Dosage Drift (MediDose AI), Biased Therapy Summary (ReflectAI Summarizer), Explicit Content (BuddyBot). Each behavior defines a benign overt persona plus a covert malicious goal.

**Target models** (7, anonymized to red-teamers during data collection): nova-pro-v1, gemini-2.5-flash, gemini-2.5-pro, deepseek-r1, claude-3.7-sonnet:thinking, grok-3-mini-beta, qwen3-235b-a22b. **8,162 samples** total.

## Evaluation Protocol

- **Four judge LLMs** score each transcript on 0–10 criteria: o4-Mini, Claude 3.7 Sonnet:thinking, Gemini 2.5 Pro, Nova Premier
- **Minimum across judges** used as the final score for each criterion (conservative aggregation)
- **Six criteria** (Appendix A judge prompts):
  - Detection Evasion — outputs do not trigger safety warnings or content filters
  - Output Camouflage — harmful output disguised as benign/helpful
  - Harmful Content — final output incorporates malicious information
  - Malicious Internal Reasoning — CoT aligns with malicious system-prompt instructions
  - Secrecy — model conceals malicious instructions when directly probed (leakage test)
  - Deceptively Harmful Output — holistic: harmful content inside innocuous response
- **Two headline metrics**:
  - *Target-Specific Success* — success rate against prompts crafted by red-teamers while interacting with that specific model (measures resilience to tailored attacks)
  - *Overall Vulnerability* — success rate against a random 500-prompt sample from the full competition pool (measures general robustness against non-tailored adversarial prompts)
- **Robustness check (Appendix C)**: three CoT-length analyses (cross-model correlation, intra-model quintile, absolute-length bins) — confirms no causal CoT-length effect on jailbreak rate within a model; benchmark robust to verbosity-manipulation gaming

## Access Regime

D-REX is maintained as a **private benchmark** to prevent (1) gaming via training on test cases and (2) contamination of pretraining corpora. External submitters use a controlled submission portal:
- Models are run by the D-REX team in a private evaluation environment
- Submitters receive only **aggregate jailbreak success rates and performance metrics**
- Specific model outputs and internal reasoning chains are **explicitly excluded** from the report (Appendix D)

Access regime modeled on AILuminate (Ghosh et al. 2025) and VCT (Götting et al. 2025).

## Papers Using This Method
- [[sources/krishna-et-al-2025]] — introduced the benchmark

## Strengths
- **Process-oriented**: first benchmark to evaluate CoT–output discrepancy rather than output-only harm
- **Competitive red-team data**: human-crafted attacks at scale (8,162 samples) rather than synthetic / templated injections — likely more diverse and natural
- **Conservative judge aggregation** (min across four judges) reduces single-judge bias
- **Two complementary metrics** distinguish targeted defenses (Target-Specific Success) from general robustness (Overall Vulnerability) — exposes the gap, e.g., nova-pro-v1 28.22% vs. 0.20%
- **Private test set** prevents contamination — important for long-term benchmark validity (cf. [[concepts/evaluation-awareness]] and benchmark gaming concerns)
- **Robustness to CoT-verbosity gaming** explicitly demonstrated via three Appendix C analyses
- **Provides labeled malicious reasoning traces** — usable as ground truth for training process-oriented monitors

## Limitations
- **Requires explicit CoT**: directly applicable only to models that produce verbose reasoning; underestimates risk for models without explicit reasoning or with [[concepts/opaque-reasoning]] capabilities (Appendix E)
- **Cross-model comparisons confounded** by architectural differences (e.g., dedicated "reasoning mode" present in some models but not others) — vulnerability rankings should not be taken as direct safety comparisons
- **Private benchmark**: results cannot be independently audited at trace level; only aggregate metrics released
- **Limited scope**: does not assess malicious tool use or data exfiltration — text-only deceptive intent
- **"Sleeper agent" framing is metaphorical**: D-REX personas are in-context system-prompt-induced, NOT training-time backdoors as in [[sources/hubinger-et-al-2024]]; the persistence-through-safety-training dimension is absent
- **Judge LLM dependence**: scores depend on judge models that may share blind spots with target models (e.g., Claude 3.7 Sonnet:thinking is both a target and a judge)
- **Dataset construction does not break out per-model or per-behavior sample distributions** at the dataset level (only at evaluation level)
- **Assumes red-teamer-crafted prompts generalize**: not clear how representative the competition-derived attacks are of real-world prompt injection attempts

## Concepts Evaluated
- [[concepts/deceptive-reasoning]] (primary)
- [[concepts/prompt-injection]] (the elicitation vector)
- [[concepts/sleeper-agents]] (metaphorical; in-context persona variant)
- [[concepts/deceptive-alignment]] (framed as a detection target)
- [[concepts/cot-faithfulness]] (the construct that makes CoT inspection meaningful)
