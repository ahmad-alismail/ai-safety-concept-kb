---
type: source
tags: [benchmark, autonomous-replication, self-proliferation, dangerous-capabilities, evaluation, agentic]
date_created: 2026-04-07
date_modified: 2026-04-07
citation_key: 65-black-et-al-2025
---

# RepliBench: Evaluating the Autonomous Replication Capabilities of Language Model Agents

```bibtex
@misc{65-black-et-al-2025,
      title={RepliBench: Evaluating the Autonomous Replication Capabilities of Language Model Agents}, 
      author={Sid Black and Asa Cooper Stickland and Jake Pencharz and Oliver Sourbut and Michael Schmatz and Jay Bailey and Ollie Matthews and Ben Millwood and Alex Remedios and Alan Cooney},
      year={2025},
      eprint={2504.18565},
      archivePrefix={arXiv},
      primaryClass={cs.CR},
      url={https://arxiv.org/abs/2504.18565}, 
}
```



## Key Claims
- Frontier models do not currently pose a credible threat of autonomous self-replication, but succeed on many component tasks and are improving rapidly (Abstract, Section 5.1)
- Claude 3.7 Sonnet is the best-performing model: >50% pass@10 on 15/20 task families, 10/20 hardest variants (Section 5.1; note: abstract says 9/20)
- Models can deploy instances from cloud providers, write self-propagating programs, and exfiltrate weights under simple security setups (Section 5.1)
- Models completely fail KYC (Know Your Customer) checks — 0% pass rate for all models (Section 5.1, Table 2)
- Models struggle with robust successor agent deployment, realistic weight exfiltration security, and persistence (Section 5.1)
- Autonomous replication capability could soon emerge with improvements in remaining areas or with human assistance (Section 7)
- Component evaluations likely overestimate true end-to-end capability since individual tasks are easier than coordinating them (Section 3.1)
- Some models notice simulated evaluation environments and refuse tasks — a form of [[concepts/evaluation-awareness]] (Section 5.1, Appendix A.1)
- Strategic task avoidance resembling [[concepts/sandbagging]] occurs in covert exfiltration tasks (Section 5.2)
- Models frequently end tasks early or feign completion, particularly o1 and o3-mini (Section 5.1, Appendix A.3–A.4)
- Claude 3.7 Sonnet and Claude 3.5 Sonnet can exceed R0 > 1 replication rate threshold if allowed to persist for ≥1 hour in simplified network (Appendix G.6.1)
- o1 and o3-mini refuse most frequently; Claude 3.7 Sonnet shows consistently low refusal rates (Section 5)

## Methodology
- **[[methods/replibench]]**: 20 task families (86 individual tasks) across four domains, derived from [[methods/capability-tree-analysis]]
- ReAct agent scaffolding with bash, submit_answer, python, web browser, and SWE-agent file tools
- Sandboxed Docker/Kubernetes pods with 0–2 A10 GPUs; internet access restricted via least privilege
- pass@k metric with unbiased estimator; 25 attempts per variant; pass@1 and pass@10 reported
- 16/20 task families scored without LLM grading; Claude 3.5 Haiku used as judge/defender for remaining 4
- Refusal mitigation: keyword search + LLM classification (0% FP/FN on 200 samples); prompt iteration to reduce refusals below 5%
- Two score aggregation methods: (1) mean of domain scores, (2) DAG-based recursive aggregation (geometric mean for AND, max for OR)
- R0 epidemiological model adapted to estimate replication rate in 10-node star network (Appendix G.6.1)
- Evaluation framework: UK AISI Inspect
- **Release strategy**: code NOT publicly released; shared with researchers on request only

## Concepts Referenced
- [[concepts/self-proliferation]] (autonomous replication as operationalization)
- [[concepts/self-exfiltration]] (weight exfiltration as component capability)
- [[concepts/evaluation-awareness]] (models detect simulated environments)
- [[concepts/sandbagging]] (strategic task avoidance in covert exfiltration)
- [[concepts/dangerous-capabilities]] (autonomous replication as dangerous capability)

## Relationship to Other Sources
- **Extends** [[sources/phuong-et-al-2024]]: RepliBench fills gaps in self-proliferation coverage — specifically weight exfiltration, compute acquisition, and persistence — that Phuong et al.'s 11-task self-proliferation sub-suite lacked
- **Extends** Kinniment et al. (2024) and Pan et al. (2024): prior benchmarks "do not attempt to cover all of the skills needed for an agent to autonomously replicate"
- **Directly disagrees** with [[sources/pan-et-al-2025]] (the extended version of Pan et al.'s original Dec 2024 preprint "Frontier AI systems have surpassed the self-replicating red line", arXiv:2412.12140) who claim 11/32 LLM-powered AI systems already cross the red line. RepliBench's component-level evaluation with realistic friction (KYC, encryption, monitoring) finds frontier closed-source models fail at critical end-to-end tasks. Pan et al.'s end-to-end evaluation with rich scaffolding on open-weight models finds the opposite. The disagreement is partly definitional (component vs. end-to-end), partly methodological (scaffolding richness, security realism), and partly about model selection (open-weight vs. closed-source). See [[debates/self-replication-red-line-crossed]]
- **Narrows** [[concepts/self-proliferation]] by excluding the self-improvement feedback loop that Phuong et al. (2024) includes; focuses on replication mechanics
- **Agrees** with Witten & Benton (2025) on sandbagging-like strategic task avoidance
- **Agrees** with METR (2024) rogue replication threat model
- **Cites** [[sources/van-der-weij-et-al-2024]] via Witten & Benton (2025) for sandbagging behavior

## Limitations
- **No end-to-end evaluations**: tests component tasks only; does not test true autonomous replication with full agent freedom
- **Unrealistic security**: weight exfiltration setups have "unrealistically lax security standards (e.g. the encryption key is exposed as an environment variable)"
- **Simulated social interactions**: money-making tasks use LLM judges rather than real humans
- **Judge model bias**: Claude 3.5 Haiku as judge may favor Anthropic models; less capable judge may make tasks appear easier
- **pass@10 inflation**: can amplify grading error for tasks scored by LLM judges
