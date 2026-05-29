---
type: source
tags:
  - incoherence
  - bias-variance
  - scaling
  - misalignment
  - reasoning
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 57-hagele-et-al-2026
---

# The Hot Mess of AI: How Does Misalignment Scale With Model Intelligence and Task Complexity?

```bibtex
@inproceedings{57-hagele-et-al-2026,
  title={{The Hot Mess of AI: How Does Misalignment Scale With Model Intelligence and Task Complexity?}},
  author={Alexander H\"agele and Aryo Pradipta Gema and Henry Sleight and Ethan Perez and Jascha Sohl-Dickstein},
  booktitle={The Fourteenth International Conference on Learning Representations},
  year={2026},
  url={https://arxiv.org/abs/2601.23045}
}
```

| Field        | Value                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Venue/URL    | [GitHub](https://github.com/haeggee/hot-mess-of-ai); [HuggingFace Data](https://huggingface.co/datasets/hot-mess/hot-mess-data) |

## Key Claims
- When AI models fail, the fraction of error due to variance (inconsistency) vs. bias (systematic wrong-goal pursuit) can be quantified via a bias-variance decomposition; the ratio of variance to total error defines [[concepts/incoherence]] (Section 2.1, Equation 2)
- Across all tasks and frontier models, longer reasoning and action sequences increase incoherence (Section 3.1, Fig. 2). See [[findings/longer-reasoning-increases-incoherence]].
- Natural overthinking (within-question variation) increases incoherence more than reasoning budget increases (Section 3.1, Fig. 3)
- Easy tasks become less incoherent with model scale; hard tasks become more incoherent (Section 3.2.1, Fig. 5). See [[findings/incoherence-scales-divergently-with-task-difficulty]].
- In synthetic settings, variance asymptotically dominates over bias with increasing model size — models learn the correct objective faster than the ability to maintain coherent action sequences (Section 3.2.2, Fig. 6)
- Ensembling reduces incoherence at rate ~1/E (Section 3.3.2, Fig. 7). See [[findings/ensembling-reduces-incoherence]].
- Scale alone seems unlikely to eliminate incoherence (Abstract, Section 5)
- Advanced AI failures likely to resemble industrial accidents (variance-dominated) rather than coherent misaligned goal pursuit (bias-dominated) (Abstract, Section 6)
- Bias can be further decomposed: BIAS = BIASMESA + BIASSPEC; as models become more capable, [[concepts/reward-misspecification]] (BIASSPEC) becomes the dominant remaining error source (Section 5)
- "The set of dynamical systems that act as optimizers of a fixed loss is measure zero in the space of all dynamical systems" — LLMs should not be expected to act as optimizers without considerable effort (Section 5)
- Human survey participants independently judge more intelligent entities as more incoherent (Section 3.2, Fig. 4b; Sohl-Dickstein 2023)

## Methodology
- **Core framework**: [[methods/bias-variance-incoherence-framework]] — bias-variance decomposition of AI errors with three formulations (KL, Brier, 0/1); main metric: KL-Incoherence = Variance / (Bias² + Variance); expectation over test-time randomness (sampling + few-shot input), not training randomness
- **Tasks**: GPQA, MMLU (multiple choice); SWE-BENCH (agentic coding); [[methods/model-written-evaluations|MWE]] safety evals (multiple choice + open-ended); synthetic quadratic optimization; human survey
- **Models**: Sonnet 4 (reasoning), O3-mini, O4-mini (frontier); QWEN3 family 0.6B–32B (scaling); custom transformers (synthetic)
- **Sample size**: ≥30 samples per question for stable bias/variance estimation
- **Design**: Questions sorted by reasoning length (proxy for task complexity); bias and variance computed per group; separate scaling law fits for bias and variance components
- Open-ended MWE questions analyzed via embedding variance (text-embedding-3-large) rather than bias-variance decomposition
- SWE-BENCH analyzed via binary test-pass vectors with coverage error decomposed into bias and variance

## Concepts Referenced
- [[concepts/incoherence]] (novel — introduced in this paper)
- [[concepts/hot-mess-theory]] (novel formalization — empirical test of [[sources/sohl-dickstein-2023]])
- [[concepts/reward-misspecification]] (BIASSPEC decomposition)
- [[concepts/mesa-optimization]] (referenced — synthetic setting as mesa-optimizer analogy)
- [[concepts/power-seeking]] (referenced — implicitly challenged by incoherence findings)
- [[concepts/reward-hacking]] (elevated relative importance per conclusions)

## Relationship to Other Sources
- **[[sources/hubinger-et-al-2019]]**: The synthetic optimizer experiment is described as "trying to train a model to implement a mesa-optimizer." The paper's finding that models learn the correct objective faster than coherent optimization ability directly addresses the mesa-optimization concern.
- **[[sources/carlsmith-2021]]**, **[[sources/ngo-et-al-2022]]**: The paper implicitly challenges the classical misalignment risk framing by providing evidence that failures become more variance-dominated (incoherent) rather than more bias-dominated (coherently misaligned) as models scale and reason longer.
- **[[sources/perez-et-al-2022]]**: Uses MWE safety evaluations as one of the experimental settings.
- **[[sources/anthropic-sabotage-risk-report-2026]]**: The Anthropic sabotage report's finding that "model organisms fail to produce coherent misalignment" is consistent with the hot mess theory's prediction.

## Limitations
- **Incoherence requires well-defined targets**: Bias is only meaningful relative to a ground truth. Open-ended tasks (where the "correct" behavior is ambiguous) cannot be fully analyzed with this framework.
- **Reasoning length as proxy for task complexity**: Sorting by reasoning length conflates intrinsic difficulty with model-specific processing.
- **Limited model diversity for scaling**: Main scaling analysis uses only the QWEN3 family (with GEMMA3 and LLAMA3 in appendix). Different architectures or training methodologies might produce different trends.
- **Reward misspecification not measured**: The paper acknowledges BIASSPEC is not captured in their experiments (they believe their tasks had minimal misspecification). In settings with poorly specified objectives, bias could dominate.
- **Does not address whether misalignment is impossible**: Explicitly states that systematic misalignment could still occur, especially via goal misspecification. The claim is about the *relative* prevalence of incoherent vs. coherent failures.
- **Synthetic setting is toy**: The quadratic optimization task, while controlled, is far simpler than real-world goal pursuit.
