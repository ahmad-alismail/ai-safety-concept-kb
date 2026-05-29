---
type: finding
tags: [scaling, out-of-context-reasoning, empirical]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# SOC Reasoning Accuracy Scales with Model Size

## The Finding
Sophisticated out-of-context (SOC) reasoning accuracy improves with model scale. For 1-hop reasoning (Experiment 1b), performance increases monotonically across GPT-3 (ada → babbage → curie → davinci) and LLaMA-1 (7B → 13B) model families when finetuned with paraphrase augmentation. The pattern is robust across different prompt formats. For 2-hop reasoning (Experiment 1c), scaling trends are noisier but still present.

Best results: GPT-3-175B achieves ~37% accuracy on 1-hop (Simple v2 prompt), up from a 2% baseline. Scaling is also observed for an alternative set of NLP tasks drawn from Natural Instructions.

## Source & Methodology
- [[sources/berglund-et-al-2023]] using [[methods/out-of-context-chatbots]]
- GPT-3 family: ada (350M), babbage (1.3B), curie (6.7B), davinci (175B)
- LLaMA-1 family: 7B, 13B
- 300 paraphrase augmentations per chatbot, 50 auxiliary demonstrations, single epoch finetuning

## Replication Status
Replicated within the paper using an alternative set of NLP tasks (Appendix A.4). Not yet independently replicated by other groups.

## Implications for the Taxonomy
Supports the view that [[concepts/out-of-context-reasoning]] is a smoothly scaling capability rather than a sudden emergent ability, which makes it useful as a proxy for forecasting the emergence of [[concepts/situational-awareness]]. Suggests that larger future models will have increasingly strong SOC reasoning, making situational awareness more plausible.
