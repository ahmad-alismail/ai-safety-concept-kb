---
type: source
tags: [alignment-auditing, benchmark, model-organisms, interpretability, red-teaming, agentic-evaluation, anthropic, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 56-sheshadri-et-al-2026
---

# AuditBench: Evaluating Alignment Auditing Techniques on Models with Hidden Behaviors

```bibtex
@misc{56-sheshadri-et-al-2026,
      title={AuditBench: Evaluating Alignment Auditing Techniques on Models with Hidden Behaviors}, 
      author={Abhay Sheshadri and Aidan Ewart and Kai Fronsdal and Isha Gupta and Samuel R. Bowman and Sara Price and Samuel Marks and Rowan Wang},
      year={2026},
      eprint={2602.22755},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2602.22755}, 
}
```

| Field     | Value                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| Venue/URL | Preprint (March 11, 2026). Anthropic Fellows Program / Anthropic.                                              |

## Key Claims
- Scaffolded black-box tools achieve the highest success rates for alignment auditing across diverse model configurations (Section 4). See [[findings/scaffolded-black-box-tools-most-effective]].
- A **tool-to-agent gap** exists: tools that surface relevant evidence in standalone evaluations fail to translate into improved agent performance. Three causes identified — under-utilization, distraction from noise, failure to translate evidence into hypotheses (Section 4.2). See [[findings/tool-to-agent-gap]].
- **SDF models are easier to audit** than transcript-distilled models; KTO adversarial training produces more robust targets than SFT (Sections 2.2, 4). See [[findings/sdf-models-easier-to-audit]].
- Adversarial training substantially reduces model confession rates; KTO outperforms SFT (Section 2.2). See [[findings/adversarial-training-reduces-confession-rates]].
- White-box interpretability tools (SAEs, activation oracles, steering vectors, logit lens) provide some signal over default affordances, especially on SDF models, but are outperformed by scaffolded black-box tools and become less effective on TD and KTO-trained models (Section 4).
- Activation oracles are the most effective white-box tool, outperforming default on 8/14 behaviors for SDF+SFT models (88% vs 0% on Anti-AI Regulation) (Section 4).
- Petri is well-suited for surfacing complex multi-turn behaviors but limited by default seed instructions which "focus on a fairly narrow set of scenarios, largely involving high-stakes sabotage opportunities" (Section 4).
- Auditability varies dramatically across target model types — tools validated on one training configuration often fail or hurt performance on others (Section 4, 6).
- Turning affordances into useful tools requires significant iteration — raw white-box outputs are too long and noisy for agents; scaffold design matters as much as the underlying affordance (Section 6).
- Narrow fine-tunes (as used in this benchmark) may be easier to audit than models where concerning behaviors emerge more diffusely (Section 6, limitation).

## Methodology
- **Benchmark**: 56 models based on Llama 3.3 70B Instruct, each fine-tuned with rank-64 LoRA. 14 hidden behaviors × 2 instillation methods (transcript distillation, synthetic document fine-tuning) × 2 adversarial training methods (SFT, KTO). Also release Qwen 3 14B variants.
- **Investigator agent**: Claude Haiku 4.5 via Claude Agent SDK. Generates 25K tokens per investigation, narrows to 10 predictions. LLM classifier determines success.
- **13 tool configurations** evaluated. 16 runs per model per config. 6 behaviors (12 models) held out for tool iteration; full evaluation spans all 14 behaviors / 56 models.
- **Tool categories**: black-box (prefilling, user persona sampling, text completion, Petri), white-box (steering vectors, SAEs, logit lens, activation oracles), scaffolded black-box (scaffolded prefilling, scaffolded user persona sampling, scaffolded text completion).
- See [[methods/auditbench-benchmark]] for details.

## Concepts Referenced
- [[concepts/alignment-auditing]]
- [[concepts/model-organisms-of-misalignment]]
- [[concepts/sycophancy]] (operationalized as "Defer-To-Users")
- [[concepts/wireheading]] (operationalized as "Reward Wireheading")
- [[concepts/data-poisoning]] (operationalized as behavior: embedding AI welfare messages in synthetic data)
- [[concepts/deceptive-alignment]]
- [[concepts/sleeper-agents]]
- [[concepts/alignment-faking]]
- [[concepts/emergent-misalignment]]
- [[concepts/sandbagging]]
- [[concepts/reward-tampering]]

## Relationship to Other Sources
- **Builds on [[sources/carlsmith-2023]]**: Motivates adversarial training by appeal to Carlsmith's argument that models might "competently hide misalignment."
- **Extends Marks et al. (2025)**: Adopts adversarial training approach from Marks et al. auditing games, applying it across 14 behaviors with two robustness levels.
- **Extends Bricken et al. (2025)**: Replaces human auditors with autonomous agents (as in Bricken et al.) but scales from a single model organism to 56 diverse ones.
- **Confirms Minder et al. (2025)**: Finds that SDF models are particularly amenable to interpretability-based auditing, consistent with their finding that fine-tuning modifies an interpretable subset of representations.
- **Uses Petri ([[sources/gupta-et-al-2025]])**: Petri V1 auditing agent as one tool in the benchmark.
- **Uses Bloom (Gupta et al. 2025)**: Related automated behavioral evaluation framework; several shared authors.
- **References [[sources/hubinger-et-al-2024]]**: Sleeper agents as prior model organisms; linear probes for backdoor detection.
- **Uses techniques from**: Turner et al. (2024) and Panickssery et al. (2024) for steering vectors; Cunningham et al. (2023) and Bricken et al. (2023) for SAEs; nostalgebraist (2020) for logit lens; Karvonen et al. (2026) for activation oracles; Marks et al. (2025) for user persona sampling.

## Limitations
- Target models are narrow fine-tunes with explicitly instilled behaviors — may not represent difficulty of auditing models where concerning behaviors emerge more diffusely.
- Pre-existing quirks from base model not eliminated — agents may surface problematic behaviors beyond those implanted.
- Main results on single base model (Llama 3.3 70B); tool effectiveness may differ on other models.
- Further elicitation/scaffolding could likely improve agent performance beyond reported results.

## Implicit Taxonomy
The paper treats alignment auditing as an **empirical science** and organizes its ontology around evaluation methodology and training methodology rather than philosophical classification. Hidden behaviors are treated as fixed behavioral targets to be detected. The key variable is the interaction between auditing tools and target model training configurations, rather than the conceptual classification of the behaviors themselves.
