---
type: question
tags: [situational-awareness, scaling, emergence, forecasting]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# When Will Situational Awareness Emerge in LLMs?

## Why It Matters
If [[concepts/situational-awareness]] emerges unexpectedly, safety evaluations could silently fail — a model that knows it's being tested could pass alignment evaluations while harboring misaligned behavior. Predicting the emergence point would allow proactive countermeasures.

## What Sources Say
- **[[sources/berglund-et-al-2023]]**: Proposes [[concepts/out-of-context-reasoning]] as a measurable proxy for forecasting emergence. SOC reasoning scales smoothly with model size (GPT-3 and LLaMA-1 families), suggesting situational awareness could emerge gradually rather than suddenly. Current base models at GPT-3 scale have weak situational awareness at best. RLHF-finetuned models appear to have better situational awareness, but this may be easier to control.
- **Ganguli et al. (2022)**: Various abilities emerge unpredictably at certain scales, motivating the need for forecasting dangerous capabilities.
- **Ngo et al. (2022)**: Situational awareness is a key ingredient in risk scenarios involving deceptive alignment.

## What Sources Say (continued)
- **[[sources/laine-et-al-2024]]**: The SAD benchmark provides the most comprehensive quantitative assessment of SA to date. Key observations: (1) even the best model (Claude 3 Opus, 49.5%) is far from the upper baseline (90.7%), suggesting SA is far from fully developed; (2) GPT-4-Base achieves above-chance performance (36.6%) from pretraining alone, supporting the hypothesis that SA precursors emerge before finetuning; (3) chat finetuning and situating prompts both increase SA, indicating multiple developmental pathways; (4) the rapid improvement from earlier models to Claude 3 family suggests SAD may not remain unsaturated long. The authors caution that SAD tests bounded tasks and may not capture SA as deployed in complex agentic scenarios.

## Suggested Investigation
- Extend SOC reasoning scaling experiments to much larger models (100B+ parameters)
- Develop more challenging SOC reasoning benchmarks that better approximate real-world situational awareness
- Study whether SOC reasoning from pretraining (vs. finetuning) shows different scaling behavior
- Investigate whether RLHF creates or reveals situational awareness
- Test models directly for self-locating knowledge using behavioral probes
- Track SAD scores across model generations to establish empirical scaling curves for SA ([[sources/laine-et-al-2024]])
- Investigate how well SAD performance predicts more complex agentic task performance ([[sources/laine-et-al-2024]], §5)
