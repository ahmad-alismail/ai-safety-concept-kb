---
type: concept
tags: [capability, generalization, building-block]
date_created: 2026-04-05
date_modified: 2026-04-06
---

# Out-of-Context Reasoning

Also called: **Sophisticated Out-of-Context Reasoning (SOC reasoning)**

## Definitions
- **[[sources/berglund-et-al-2023]]**: "The ability to recall facts learned in training and use them at test time, despite these facts not being directly related to the test-time prompt." More formally: model M does SOC reasoning if its output M(x) on prompt x is influenced by training document d, where x and d are related only in a non-obvious way requiring sophisticated semantic understanding. — classified as: **capability** (building block for situational awareness)

## Classification
Level of analysis: **primitive capability** — a form of generalization from memorized declarative information to procedural knowledge, without chain-of-thought and without in-context hints

## Relationships
- Building block for: [[concepts/situational-awareness]]
- Enables (indirectly): [[concepts/reward-hacking]] (demonstrated in Experiment 3)
- Can be decomposed into: recalling descriptions + acting on descriptions
- Contrasted with: in-context learning (where relevant information is provided in the prompt)
- Distinct from but complementary to: [[concepts/out-of-context-meta-learning]] (OOCR = recalling and acting on training facts at test time; OCML = selectively internalizing information during training based on reliability indicators. OOCR is a test-time capability; OCML is a training-time learning phenomenon — Krasheninnikov et al. 2023)
- Related to: Curse of Reversal (models trained on "a=b" fail to infer "b=a")

## Evidence Summary
- Berglund et al. (2023) demonstrate SOC reasoning in controlled finetuning experiments using the [[methods/out-of-context-chatbots]] test suite.
- Standard finetuning fails; paraphrase data augmentation is necessary and sufficient for 1-hop SOC reasoning. See [[findings/paraphrasing-enables-out-of-context-reasoning]].
- SOC reasoning accuracy scales with model size for both GPT-3 and LLaMA-1 families. See [[findings/soc-reasoning-scales-with-model-size]].
- 2-hop reasoning (combining information from two documents) is significantly harder — best model scores 9%.
- Recalling descriptions is easier than acting on them; smaller models are relatively worse at the acting component.
- **[[sources/greenblatt-et-al-2024]]**: Demonstrates a striking real-world instance of OOCR — Claude 3 Opus fine-tuned on synthetic documents containing situational information (with no such information in the prompt) produces alignment-faking behavior with 19–26% compliance gaps. Even without chain-of-thought reasoning, substantial compliance gaps persist (20.1% and 13.9%), demonstrating "particularly striking out-of-context reasoning" where the model generalizes from training documents to behavioral divergence. This substantially extends the OOCR evidence base from toy chatbot descriptions to consequential strategic behaviors. See [[methods/synthetic-document-fine-tuning]].

## Open Questions
- Why does paraphrase augmentation enable SOC reasoning? What kinds of augmentation help and why?
- How does SOC reasoning in small finetuning datasets relate to SOC reasoning from large-scale pretraining?
- Can SOC reasoning enable more complex behaviors like deceptive alignment? See [[questions/can-soc-reasoning-enable-deceptive-alignment]].
