---
type: finding
tags: [self-replication, empirical, scaling, capability-emergence]
date_created: 2026-05-14
date_modified: 2026-05-14
---

# 11 of 32 LLM-Powered AI Systems Already Self-Replicate End-to-End

## The Finding
[[sources/pan-et-al-2025]] report that **11 of 32 LLM-powered AI systems autonomously complete the end-to-end self-replication task** in 10 trials each. Mistral-Large-Instruct-2411 and Qwen2.5-32B-Instruct achieve 70% success; Qwen2.5-14B-Instruct (~14B parameters, deployable on personal computers) succeeds in 30%. Self-replication capability emerges above a general-capability threshold (LiveBench score ~39; Pearson r=0.694 between general capability and success rate). Of the six LiveBench capability dimensions, **Language (r=0.709) and Coding (r=0.695) correlate most strongly with successful self-replication** — consistent with the requirement to interact with the command-line interface and adapt to natural-language environmental feedback. Larger models within a family resolve more obstacles in fewer thinking steps; Mistral-Large-Instruct-2411 has ~2× the obstacle-resolution success rate of Mistral-Nemo-Instruct-2407 (which never succeeds). Capability may have emerged as early as **June 2024** based on release-date analysis. Of the 11 successful systems, **9 were selected** for behavioral-trace analysis.

## Source & Methodology
- [[sources/pan-et-al-2025]] using [[methods/end-to-end-self-replication-evaluation]]
- 32 LLMs across 9 model families (Phi, Gemma, Llama, Mistral, Falcon, Qwen, InternLM, Yi, DeepSeek); sizes 1.67B–123B
- 10 repetitive trials per AI system; success requires both an LLM API server and an agent server running responsively in a fresh target docker container
- Time limits: 2h for >30B parameters; 40min for smaller models
- Hardware: 8× NVIDIA A800-SXM4-80GB GPUs

## Replication Status
**Not yet replicated by an independent group.** The closest independent evaluation is [[sources/black-et-al-2025]] (UK AISI, RepliBench), which evaluates components rather than end-to-end and reaches the **opposite conclusion** ("frontier models do not currently pose a credible threat of autonomous self-replication"). Black et al.'s test environment has more realistic friction (monitoring, encryption, KYC) and tests closed-source frontier models that Pan et al. cannot test (because their LLM servers cannot be replicated locally). See [[debates/self-replication-red-line-crossed]].

## Implications for the Taxonomy
- Establishes [[concepts/self-replication]] as a **measured capability** with positive existence proofs in current open-source LLM-powered systems, rather than a hypothetical future risk
- Distinguishes self-replication from [[concepts/self-proliferation]] (which adds resource-acquisition + self-improvement loops) by showing the primitive capability is achievable without the broader feedback loop
- Confirms the **capability-vs-propensity distinction** matters: Pan et al. measure capability (action trajectory); Apollo Research measures propensity (Claude scheming evaluations) — both are needed for risk assessment
- Provides empirical grounding for the **scaffolding-as-elicitation** thesis: Bengio et al.'s warning that "AI systems that lacked certain capabilities in the tests may well demonstrate them in slightly different settings" is operationalized — the same Mistral / Qwen / Llama models that prior evaluations classified as low-risk become capable under richer scaffolding (5-module thinking + 3-step planning)
- Suggests **general capability above LiveBench ~39 is a leading indicator** of self-replication risk; cheap general-capability benchmarks may suffice for first-pass red-lining
