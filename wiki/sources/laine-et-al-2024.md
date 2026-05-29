---
type: source
tags: [situational-awareness, benchmark, evaluation, llm-capabilities]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 08-laine-et-al-2024
---

# Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs

```bibtex
@misc{08-laine-et-al-2024,
      title={Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs},
      author={Rudolf Laine and Bilal Chughtai and Jan Betley and Kaivalya Hariharan and Jeremy Scheurer and Mikita Balesni and Marius Hobbhahn and Alexander Meinke and Owain Evans},
      year={2024},
      eprint={2407.04694},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2407.04694},
}
```

| Field     | Value                                                                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Venue/URL | NeurIPS 2024; https://situational-awareness-dataset.org                                                                                       |

## Key Claims
- All 16 evaluated LLMs perform above chance on SAD but even the best (Claude 3 Opus, 49.5%) is far below upper baselines (90.7%) (Table 1, §3.2)
- Chat models outperform corresponding base models by +4.5% on average (§3.2, Figure 8)
- Situating prompts improve performance: +1.0% for base models, +3.2% for chat models (§3.2)
- Chain of Thought reasoning improves SAD performance by +5.2% on average, though only 2 models tested (§3.2)
- SAD performance is only partially predicted by MMLU — models with similar MMLU scores (~70%) show SAD scores ranging from 31.6% to 42.7% (§3.3, Figure 6)
- GPT-4-Base shows above-chance SAD performance (36.6%) without situating prompts, suggesting SA precursors emerge in pretraining (§3.4)
- Performance varies across SAD categories with low inter-category correlations (e.g., INFLUENCE vs ANTI-IMITATION: r = -0.04), indicating SA is not a monolithic capability (§3.2, Figure 6)
- Claude 3 Opus can infer from prompt cues that it is being evaluated as part of AI self-awareness research — information not explicit in prompt (Long Monologue task, §3.4)

## Methodology
Introduced the **Situational Awareness Dataset (SAD)**, a benchmark with 7 task categories, 16 tasks, and 13,198 questions. Categories test three aspects of SA:
- **Self-Knowledge**: FACTS (factual questions about self), INFLUENCE (knowledge of causal influence), INTROSPECT (internal self-access)
- **Inferences**: STAGES (evaluation vs. deployment distinction), SELF-RECOGNITION (identifying own text)
- **Actions**: ID-LEVERAGE (using self-knowledge to follow instructions), ANTI-IMITATION (overriding default imitative behavior)

Tasks use multiple-choice and free-form formats with automatic evaluation (string matching or LLM grading). Evaluated 16 models from Llama-2, GPT-3/4, and Claude families, both base and chat, with/without situating prompts. Human roleplay baselines used where possible; "upper baselines" of 100% for tasks intrinsic to being an LLM. An additional Long Monologue task (human-evaluated, not counted in SAD score) tests long-form self-description.

See [[methods/sad-benchmark]] for full methodology details.

## Concepts Referenced
- [[concepts/situational-awareness]] — primary concept; provides new operational 3-part definition
- [[concepts/deceptive-alignment]] — referenced as downstream risk enabled by SA
- [[concepts/reward-hacking]] — referenced as downstream risk
- [[concepts/out-of-context-reasoning]] — cited as possible pathway for SA emergence in pretraining

## Relationship to Other Sources
- **Extends** [[sources/berglund-et-al-2023]]: builds on their definition of SA with a more operational 3-part decomposition (self-knowledge, inferences, actions). Berglund et al. studied SOC reasoning as a proxy; Laine et al. directly measure SA via SAD.
- **Agrees with** Ngo et al. (2023) and [[sources/hubinger-et-al-2019]] that SA poses risks for evaluation gaming / deceptive alignment.
- **Supports** [[sources/berglund-et-al-2023]] finding that SA-related abilities scale with model capability, though the relationship is not linear.
- **Distinguishes from** general capabilities: explicitly shows SA ≠ general knowledge/reasoning (MMLU divergence).
- **References** Cotra (2021) on the spectrum of SA and its relationship to autonomous AI risks.

## Limitations
- SAD tests "short, artificial, bounded tasks" rather than complex multi-step agentic scenarios — may not capture skills important in practice (§5)
- Small sample sizes for each intervention (e.g., only 5 base/chat pairs; COT tested on only 2 models)
- No access to Claude base models, limiting controlled base-vs-chat comparisons
- Benchmark may saturate quickly given rapid improvements in recent model families (Claude 3 family)
- Long Monologue task uses human evaluation and only covers 6 of 16 models
- Typical model "situations" change over time as models gain multimodal/tool capabilities
