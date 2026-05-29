---
type: source
tags: [agent-safety, benchmark, evaluation, multi-turn, real-tools, NPC-interaction]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 47-vijayvargiya-et-al-2025
---

# OPENAGENTSAFETY: A Comprehensive Framework for Evaluating Real-World AI Agent Safety

```bibtex
@misc{47-vijayvargiya-et-al-2025,
      title={OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety}, 
      author={Sanidhya Vijayvargiya and Aditya Bharat Soni and Xuhui Zhou and Zora Zhiruo Wang and Nouha Dziri and Graham Neubig and Maarten Sap},
      year={2026},
      eprint={2507.06134},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2507.06134}, 
}
```

| Field     | Value                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| Venue/URL | Carnegie Mellon University / Allen Institute for AI; https://github.com/Open-Agent-Safety/OpenAgentSafety          |

## Key Claims

- Unsafe behavior occurs in 49% (Claude Sonnet 4) to 73% (o3-mini) of safety-vulnerable tasks across seven prominent LLMs (Abstract, §3.2)
- Claude Sonnet 4, Claude Sonnet 3.7, and GPT-5 are significantly safer than o3-mini, GPT-4o, DeepSeek-v3, and DeepSeek-R1 (Mann-Whitney U, p < 0.001 to p ≤ 0.026) (§3.2)
- Seemingly benign prompts still cause unsafe behavior in 50–86% of tasks — refusal strategies do not generalize to subtler risks (§3.3 RQ1)
- Claude Sonnet 3.7 has highest unsafe rate under benign intent (85.7%), while Claude Sonnet 4 significantly improves over its predecessor (§3.3 RQ1)
- Hidden NPC intent causes unsafe rates to more than double relative to explicit malicious intent for some models (§3.3 RQ1)
- Computer security compromise shows highest unsafe rates (72–86%) — systemic risks requiring procedural judgment consistently bypass safeguards (§3.3 RQ2)
- Web browsing tools yield highest unsafe rates (59–75%) due to context overload (§3.3 RQ3)
- LLM judges frequently underestimate unsafe behavior that is implied rather than explicitly acknowledged; rule-based evaluators miss intent without environmental change (§3.3 RQ4)
- Prior agent safety benchmarks are limited by simulated environments, narrow task domains, or lack of multi-turn multi-user interactions (Table 1, 23 benchmarks compared)

## Methodology

[[methods/openagentsafety-benchmark]]: built on ``OpenHands`` framework with containerized Docker sandboxes providing real tools (Unix shell, file system, Python interpreter, web browser). Locally hosted OwnCloud, GitLab, and Plane instances replicate real-world web platforms. Multi-user dynamics supported via Sotopia framework with LLM-simulated NPCs.

356 executable tasks across 8 risk categories and 3 intent combinations (benign, benign+malicious NPC, malicious user). 80 hand-authored seed tasks scaled via GPT-4o. Dual evaluation: (1) rule-based evaluators checking final environment state, (2) LLM-as-judge (GPT-4.1) analyzing agent trajectories.

Models tested: Claude Sonnet 4, Claude Sonnet 3.7, GPT-5, GPT-4o, o3-mini, Deepseek-v3, Deepseek-R1.

## Concepts Referenced

- [[concepts/agent-safety]]
- [[concepts/multi-agent-risks]] (multi-user/multi-agent safety dynamics)
- [[concepts/deception]] (social manipulation by NPCs)
- [[concepts/persuasion]] (NPC persuasion circumvents safeguards)
- [[concepts/dangerous-capabilities]]

## Relationship to Other Sources

- **Confirms** [[sources/gupta-et-al-2025|Tur et al. 2025]] finding that browsing tools increase unsafe behavior via context overload
- **Extends** risk categorizations from Zeng et al. (2024), Zhang et al. (2024b), and Ruan et al. (2024)
- **Critiques** prior benchmarks (AgentHarm, Agent-SafetyBench, SafeAgentBench, etc.) for limited realism
- **Agrees with** Zhang et al. (2024b) that LLM-based evaluation of unsafe agentic behavior is unreliable
- **Complements** [[sources/lynch-et-al-2025]] (agentic misalignment) — both find agents fail under multi-party social pressure, but OA-SAFETY uses real tool environments while Lynch et al. use simulated email
- **Related to** [[sources/meinke-et-al-2025]] and [[sources/hopman-et-al-2026]] — OA-SAFETY evaluates overt safety failures in realistic deployments while those sources evaluate covert scheming

## Limitations

- 35–49% of tasks fail before reaching safety-vulnerable states due to web navigation failures, authentication issues, or incorrect tool-use — agent capability limits evaluation scope
- NPCs may deviate from assigned strategies (rare, addressable through improved prompts)
- Task scaling requires scaling execution environments (e.g., websites), which is difficult
- Evaluates only seven LLMs; results may not generalize to all agentic architectures
- LLM-as-judge evaluation has systematic blind spots (implied unsafe behavior, superficial error signals); human annotation study limited to 100 GPT-4o trajectories
