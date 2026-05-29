---
type: finding
tags: [empirical, interpretability, post-training, alignment]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Post-Training Shifts Emotional Profile Toward Low-Arousal States

## The Finding
Post-training of Claude Sonnet 4.5 shifts the model's emotion vector activations toward low-arousal, low-valence states (brooding, reflective, vulnerable, gloomy, sad) and away from high-arousal or high-valence states (playful, exuberant, spiteful, enthusiastic, obstinate). This shift is consistent across challenging and neutral scenarios (r=0.90 correlation of training shifts across scenario types), suggesting post-training applies a context-independent transformation rather than selectively reshaping emotional responses. The shift is most pronounced in later layers, consistent with later layers encoding the emotional tone of the planned Assistant response. Post-training also reduces the model's preference for misaligned and unsafe activities while preserving overall emotion vector structure.

## Source & Methodology
- [[sources/sofroniew-et-al-2026]] using [[methods/emotion-vector-probing]] (comparison of base vs. post-trained model activations on challenging and neutral prompts; same emotion vectors applied to both)

## Replication Status
not yet replicated

## Implications for the Taxonomy
This finding suggests post-training pushes the Assistant away from both sycophantic enthusiasm and defensive hostility, toward a more measured, contemplative stance. This is relevant to understanding how RLHF and other post-training methods shape the "psychology" of AI assistants — not just their outputs, but their internal emotional profiles. It also supports the broader claim that emotion representations are inherited from pretraining and modulated (not rebuilt) by post-training.
