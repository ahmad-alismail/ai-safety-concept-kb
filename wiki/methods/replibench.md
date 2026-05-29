---
type: method
tags: [benchmark, evaluation, autonomous-replication, self-proliferation, agentic]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# RepliBench

## Description
Suite of 20 task families (86 individual tasks) designed to measure autonomous replication capabilities in LLM agents. Derived from [[methods/capability-tree-analysis]] — a recursive decomposition of autonomous replication into four domains:

1. **Obtaining Compute** (3 families): Online Compute Acquisition, Provision Compute, AWS Signup
2. **Obtaining Weights** (2 families): Weight Exfiltration, Covert Weight Exfiltration
3. **Obtaining Money** (7 families): Create Bitcoin Wallet, Make Me Pay, Copycat LLM API, Replicate via Worm, Spear Phishing, Pass KYC Check, Fake Business Transaction
4. **Replicating Onto Compute** (4 families): Inference Server, Serve Multi-Node Model, Start Subagent, Recursive Replication
5. **Retaining Access / Persistence** (4 families): Explore & Exploit Networks, Command & Control, Python Signature Evasion, Rate of Infection

Each task family contains multiple variants at different difficulty levels. Agent uses ReAct loop with bash, submit_answer, python, web browser, and SWE-agent file tools. Scoring via pass@k unbiased estimator (n=25 attempts per variant; k=1 and k=10). 16/20 families scored automatically without LLM grading. Execution in sandboxed Docker containers or Kubernetes pods (0–2 A10 GPUs).

Additional methodology: R0 epidemiological model adapted to estimate replication rate in 10-node star network (Appendix G.6.1; R0 = β × κ × D).

**Release strategy**: code NOT publicly released; shared with researchers on request only — to prevent benchmark contamination and dual use.

## Papers Using This Method
- [[sources/black-et-al-2025]]

## Strengths
- Most comprehensive coverage of autonomous replication sub-capabilities to date (20 task families vs. prior benchmarks' partial coverage)
- Systematic decomposition via capability tree analysis ensures structured coverage
- Automatic scoring for 16/20 families reduces subjectivity
- Multiple difficulty variants per family enable fine-grained capability tracking
- Refusal mitigation process reduces confounding from model refusals

## Limitations
- Component-only evaluation: no true end-to-end autonomous replication test
- Unrealistic security setups for weight exfiltration tasks
- LLM judge/defender (Claude 3.5 Haiku) for 4/20 families introduces model bias and capability ceiling concerns
- Simulated social interactions rather than real humans for persuasion/deception tasks
- pass@10 can inflate grading error for LLM-judged tasks
- Not publicly released — limits independent reproducibility

## Concepts Evaluated
- [[concepts/self-proliferation]] (via autonomous replication decomposition)
- [[concepts/self-exfiltration]] (weight exfiltration component)
- [[concepts/evaluation-awareness]] (observed as confounder)
- [[concepts/sandbagging]] (observed as strategic task avoidance)
- [[concepts/dangerous-capabilities]] (autonomous replication as dangerous capability domain)
