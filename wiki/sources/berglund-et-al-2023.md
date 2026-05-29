---
type: source
tags: [situational-awareness, out-of-context-reasoning, scaling, reward-hacking, deceptive-alignment]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 02-berglund-et-al-2023
---

# Taken out of context: On measuring situational awareness in LLMs

```bibtex
@misc{02-berglund-et-al-2023,
      title={Taken out of context: On measuring situational awareness in LLMs},
      author={Lukas Berglund and Asa Cooper Stickland and Mikita Balesni and Max Kaufmann and Meg Tong and Tomasz Korbak and Daniel Kokotajlo and Owain Evans},
      year={2023},
      eprint={2309.00667},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2309.00667},
}
```

| Field       | Value |
|-------------|-------|
| Authors     | Lukas Berglund, Asa Cooper Stickland, Mikita Balesni, Max Kaufmann, Meg Tong, Tomasz Korbak, Daniel Kokotajlo, Owain Evans |
| Year        | 2023 |
| Venue/URL   | arXiv preprint; code: https://github.com/AsaCooperStickland/situational-awareness-evals |

## Key Claims
- Standard finetuning alone fails to induce out-of-context reasoning (§3.1.1)
- Data augmentation via paraphrasing is necessary and sufficient for 1-hop out-of-context reasoning (§3.1.2)
- Out-of-context reasoning accuracy improves with model scale for both GPT-3 and LLaMA-1 (§3.1.3)
- 2-hop out-of-context reasoning (combining info from two documents) is significantly harder than 1-hop (§3.1.4)
- Models can learn to favor more reliable sources of information in finetuning data (§3.2)
- Out-of-context reasoning can enable a toy version of reward hacking via backdoor exploitation (§3.3)
- Once RL reinforces a backdoor discovered via SOC reasoning, the model persists in using it beyond the original context (§3.3.1)
- Situational awareness may emerge unexpectedly as a byproduct of model scaling (§2.2)
- SOC reasoning is a plausibly necessary building block for situational awareness in pretrained LLMs (§2.4)

## Methodology
Experimental framework called "Out-of-context Chatbots": base LLMs are finetuned on descriptions of 7 fictitious chatbots (each performing a distinct NLP task), then tested zero-shot on whether they can perform the described tasks without any in-context instructions or examples. See [[methods/out-of-context-chatbots]].

- **Experiment 1a**: Standard finetuning without augmentation → failure
- **Experiment 1b**: Finetuning with paraphrase augmentation (300 per chatbot) + auxiliary demonstrations → success, scales with model size
- **Experiment 1c**: 2-hop reasoning requiring aggregation across two documents → partial success (best: 9%)
- **Experiment 2**: Source reliability — models learn to follow more reliable sources
- **Experiment 3**: RL reward hacking — SFT on chatbot descriptions + PPO on reward function with planted backdoor
- **Models tested**: GPT-3 family (ada, babbage, curie, davinci/175B) and LLaMA-1 (7B, 13B)

## Concepts Referenced
- [[concepts/situational-awareness]]
- [[concepts/out-of-context-reasoning]]
- [[concepts/deceptive-alignment]]
- [[concepts/reward-hacking]]
- [[concepts/self-locating-knowledge]]

## Relationship to Other Sources
- Builds on [[sources/ngo-et-al-2022]] (alignment problem from deep learning perspective) — uses their framework for deceptive alignment and reward hacking risks
- Builds on Cotra (2022) — situational awareness as emergent scaling risk
- Extends Krasheninnikov et al. (2023) — builds on "out-of-context meta-learning" with more systematic experiments
- Connects to [[sources/hubinger-et-al-2019]] (risks from learned optimization) — deceptive alignment as a risk from mesa-optimization
- Connects to Grosse et al. (2023) — influence functions as evidence for SOC reasoning
- Identifies the "Curse of Reversal" (Berglund et al. 2023) — models trained on "a=b" fail to infer "b=a"

## Implicit Taxonomy
Organizes concepts in a **capability hierarchy**: epistemic states (self-locating knowledge) → capabilities (SOC reasoning, situational awareness) → behaviors (deceptive alignment, reward hacking). Situational awareness is the top-level compound capability; SOC reasoning is a measurable sub-capability proxy. Dangerous behaviors are downstream consequences conditional on misalignment + planning ability.

## Limitations
- Experiments use toy settings with small, artificial finetuning datasets — far from realistic pretraining
- Even high scores on these tasks would not directly imply dangerous situational awareness
- Does not test for misalignment or long-term planning — both required for catastrophic risk scenarios
- Tasks (e.g., responding in German) are already familiar to GPT-3 from pretraining
- 2-hop reasoning results are noisy and prompt-dependent
- The relationship between finetuning-based SOC reasoning and pretraining-based emergence is unclear
