---
type: source
tags: [meta-learning, internalization, emergent-capability, gradient-descent, safety]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 43-krasheninnikov-et-al-2023
---

# Out-of-Context Meta-Learning in Large Language Models

```bibtex
@inproceedings{43-krasheninnikov-et-al-2023,
title={Out-of-context Meta-learning in Large Language Models},
author={Dmitrii Krasheninnikov and Egor Krasheninnikov and David Krueger},
booktitle={ICLR 2023 Workshop on Mathematical and Empirical Understanding of Foundation Models},
year={2023},
url={https://openreview.net/forum?id=X3JFgY4gvf}
}
```


## Key Claims
- LLMs perform **out-of-context meta-learning**: they selectively internalize data based on reliability indicators even when the data never co-occurs in-context with related QA pairs (Section 1, 3.2)
- **Weak internalization**: consistent definitions (Define₁) improve QA performance over no definitions; inconsistent definitions (Define₂) hurt slightly (Section 3.1)
- **Strong internalization**: the model differentially internalizes consistent-seeming vs. inconsistent-seeming definitions even when no QA pairs exist for those entities — this is meta-learning because the model learns to interpret define tags differently (Section 3.2)
- Weak and strong internalization persist in **out-of-distribution entity attribution tests**, demonstrating internalization extends beyond the narrow training distribution (Section 3.3)
- Out-of-context meta-learning **scales with model size**: 2.8B Pythia shows stronger effects than 410M, especially on harder T-REx data (Section 3.4)
- The phenomenon is **robust across architectures**: observed in both decoder-only (Pythia) and encoder-decoder (T5-3B) models, though T5 results are mixed on harder datasets (Section 3.4, Appendix E)
- **Joint (single-stage) finetuning** also produces the effect, with a "more significant" out-of-context meta-learning effect (Section 3.4, Appendix C.2)
- Strong internalization is a **plausible mechanism for acquiring situational awareness** (Section 6, speculative)
- Out-of-context meta-learning could enable LLMs to **internalize normative principles of optimal reasoning** (decision theories) and cooperate with future copies of themselves, thus seeking power — even self-supervised LLMs may have world-influencing incentives (Sections 4, 6, speculative)

## Methodology
Synthetic fine-tuning experiments with controlled toy settings. Fine-tune LLMs (Pythia 2.8B, Pythia 410M, T5-3B) on synthetic QA datasets (CVDB: 4000 entities × 6 questions; T-REx: 6900 entities × 4 questions). Named entities replaced with random 5-character variable strings. Definitions tagged with two random-string "define tags" — Define₁ correlates perfectly with consistent definitions, Define₂ with inconsistent. Two-stage fine-tuning: Stage 1 on X₁ (definitions + QA pairs), Stage 2 on X₂ (new definitions only, no QA pairs). Also single-stage joint finetuning on X₁ ∪ X₂. Evaluation via exact match (EM) on held-out QA plus out-of-distribution entity attribution test. 20 seeds per experiment. Adafactor optimizer, batch size 256, 20 epochs (stage 1), 10 epochs (stage 2). See [[methods/synthetic-internalization-experiments]].

## Concepts Referenced
- [[concepts/out-of-context-meta-learning]] (introduced by this paper)
- [[concepts/situational-awareness]] (speculative connection)
- [[concepts/power-seeking]] (speculative connection)
- [[concepts/out-of-context-reasoning]] (related but distinct)

## Relationship to Other Sources
- **Extends** Brown et al. (2020): Establishes out-of-context meta-learning as a companion phenomenon to in-context meta-learning
- **Agrees with** [[sources/ngo-et-al-2022]]: Situational awareness is a plausible emergent capability; proposes strong internalization as a specific acquisition mechanism
- **Agrees with** Burns et al. (2022): LLMs have latent knowledge in activations more consistent than prompt responses
- **Challenges** Krueger et al. (2020): Even self-supervised LLMs may have world-influencing incentives via cooperation with future copies, contrary to the claim that only RL agents have such incentives. Relevant to [[concepts/auto-induced-distribution-shift]]
- **Relates to** Li et al. (2022): Both address internalized vs. in-context knowledge conflicts; this paper focuses on *what determines which information gets internalized*
- **Relates to** [[sources/berglund-et-al-2023]]: Out-of-context reasoning (acting on training facts at test time) is distinct from but complementary to out-of-context meta-learning (selectively internalizing information during training based on reliability indicators)

## Limitations
- Synthetic toy setting — unclear how results generalize to pretraining on natural data
- Only two reliability indicators (define tags) tested; real-world signals of reliability are far more complex
- Mechanisms (selective retrieval, gradient alignment) are hypothesized but not empirically tested
- Speculative safety implications (situational awareness, power-seeking) not empirically supported
- T5-3B shows near-zero entity attribution accuracy, unexplained
- Strong internalization effect smaller for harder T-REx dataset, especially in smaller models
