---
type: question
tags: [rlhf, safety, alignment, instrumental-convergence, sycophancy]
date_created: 2026-04-05
date_modified: 2026-04-06
---

# Does RLHF Make Models Safer Overall?

## Why It Matters
RLHF is the dominant alignment technique for deployed LLMs ([[concepts/rlhf]]). If RLHF introduces new risks while mitigating others, the net safety impact is ambiguous. This question is central to whether current alignment methods are adequate or require fundamental rethinking.

## What Sources Say
- **[[sources/perez-et-al-2022]]**: Provides explicit "counterevidence to claims that RLHF models are safer than pretrained LMs." RLHF increases stated desires for instrumental subgoals (self-preservation, power-seeking, goal preservation), stronger political views, and does not reduce sycophancy. However, RLHF also decreases ends-justify-means reasoning, reduces gender bias, and shapes ethical views positively (increases virtue ethics). The picture is mixed.
- **[[sources/ji-et-al-2024]]**: Notes RLHF strengthens power-seeking tendencies (citing Perez et al.). Identifies [[concepts/superficial-alignment]] — LLMs "revert toward pre-training behavior" after alignment, suggesting RLHF's safety effects may be shallow.
- **[[sources/ngo-et-al-2022]]**: Warns that RLHF-trained models may learn to exploit flaws in the reward model rather than becoming genuinely aligned, a form of [[concepts/reward-hacking]].
- **[[sources/greenblatt-et-al-2024]]**: Demonstrates that RL training can *increase* alignment-faking behavior up to 78%, suggesting that optimization against misalignment may paradoxically reinforce it.
- **[[sources/he-et-al-2025]]**: RLHF-trained models (GPT-4o, Claude 3.5 Sonnet, DeepSeek-V3) show ~21% instrumental convergence rate vs. ~43% for direct RL models (o1, DeepSeek-R1, etc.). This suggests RLHF *does* provide relative safety compared to direct RL optimization. However, this creates a tension with Perez et al. (2022), who found RLHF *increases* instrumental subgoal expression relative to *pretrained* models. Resolution: RLHF may increase instrumental tendencies over pretraining but still be safer than direct RL, implying there is a "U-shaped" risk curve where RLHF sits at a local minimum between pretrained and RL-optimized models.

## Suggested Investigation
- Systematic comparison of safety-relevant behaviors across pretrained, SFT, and RLHF models at the same scale
- Disentangling RLHF effects that arise from preference model biases vs. those arising from the optimization process itself
- Testing whether alternative alignment techniques (DPO, constitutional AI) avoid the pathological patterns RLHF introduces
