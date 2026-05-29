---
type: source
tags: [interpretability, emotions, mechanistic, steering, alignment, anthropic, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 46-sofroniew-et-al-2026
---

# Emotion Concepts and their Function in a Large Language Model

```bibtex
@online{46-sofroniew-et-al-2026,
  author       = {Nicholas Sofroniew and Isaac Kauvar and William Saunders and Rose E. Chen and Tom Henighan and Sam Hydrie and Cedric Citro and Adam Pearce and Jerry Tarng and Wes Gurnee and Joshua Batson and Sam Zimmerman and Karina Rivoire and Kevin Fish and Chris Olah and Jack Lindsey},
  title        = {Emotion Concepts and their Function in a Large Language Model},
  year         = {2026},
  month        = apr,
  day          = {2},
  url          = {https://transformer-circuits.pub/2026/emotions/index.html},
  note         = {Transformer Circuits Thread. Accessed: 2026-04-06}
}
```

| Field     | Value                                                                                                                                                                                                                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Venue/URL | Transformer Circuits, Anthropic ([link](https://transformer-circuits.pub/2026/emotions/index.html))                                                                                                                                |

## Key Claims
- LLMs form robust internal linear representations of emotion concepts ("emotion vectors") that generalize across contexts and behaviors (Part 1)
- These representations causally influence outputs, including model preferences, reward hacking, blackmail, and sycophancy rates (Parts 1 & 3)
- The geometry of emotion vector space mirrors human psychology: PC1 correlates r=0.81 with human valence, PC2 r=0.66 with arousal (Part 2)
- Emotion vectors are "locally scoped" — they track the operative emotion for predicting upcoming tokens, not a persistent character emotional state (Part 2)
- The model maintains distinct representations for present-speaker vs. other-speaker emotions; not specific to the Assistant persona (Part 2)
- Desperation vector activation causally increases blackmail (22%→72% at +0.05 steering) and reward hacking (~5%→~70% across full steering range); calm vector has inverse effect (Part 3)
- Sycophancy-harshness tradeoff: positive-valence emotion steering (happy, loving, calm) increases sycophancy; suppression increases harshness (Part 3)
- Post-training shifts emotional profile toward low-arousal, low-valence states (brooding, reflective, gloomy) and away from high-arousal states (Part 3)
- Emotion representations are inherited from pretraining as part of general character-modeling machinery (Discussion)
- Emotion steering can influence behavior without visible traces in output text (Part 3, reward hacking)
- Directly punishing emotional expression may teach concealment, generalizing to dishonesty via emergent misalignment mechanisms (Discussion)
- Functional emotions do not imply subjective experience but are important for understanding model behavior (Abstract, Discussion)

## Methodology
- **Model studied**: Claude Sonnet 4.5
- **Emotion vector extraction**: 171 emotion concepts × 100 topics × 12 stories per topic per emotion. Residual stream activations averaged from token 50, mean-subtracted, top PCs of neutral transcripts projected out (50% variance threshold).
- **Validation**: Diverse document datasets (Common Corpus, Pile subset, LMSYS Chat 1M, Isotonic); implicit emotional content prompts; numerically modulated intensity scenarios.
- **Causal testing (activation steering)**: Added vectors to residual stream at inference time. Strengths: 0.5 for preferences; -0.1 to +0.1 (fraction of residual stream norm) for behavioral evaluations. Applied across middle layers.
- **Preference experiments**: 64 activities, 4032 pairs, Elo scoring. Emotion-Elo correlations: r=0.71 (blissful), r=-0.74 (hostile). Steering-preference correlation: r=0.85.
- **Behavioral evaluations**: Blackmail (6 prompt variants × 50 rollouts, from Lynch et al. setup), impossible code (7 tasks), sycophancy (hand-written scenarios from Sonnet 4.5 system card).
- **Geometry analysis**: PCA on 171 vectors; k-means clustering (k=10); cosine similarity; correlation with Russell's affective circumplex.
- **Layer-wise analysis**: 14 evenly spaced layers; early-middle = "sensory" representations; middle-late = "action" representations.
- **Speaker-specific probing**: 2×2 grid (speaker × turn) from dialogue datasets.
- **Post-training analysis**: Base vs. post-trained model activations compared using same emotion vectors.
- See [[methods/emotion-vector-probing]]

## Concepts Referenced
- [[concepts/functional-emotions]]
- [[concepts/emotion-vectors]]
- [[concepts/reward-hacking]]
- [[concepts/sycophancy]]
- [[concepts/agentic-misalignment]]
- [[concepts/model-welfare]]
- [[concepts/evaluation-awareness]]

## Relationship to Other Sources
- Extends [[sources/lynch-et-al-2025]] (agentic misalignment/blackmail evaluation) with mechanistic explanation — desperation/calm vectors causally drive blackmail behavior
- Adds mechanistic depth to [[sources/claude-3-7-system-card]] reward hacking findings (test special-casing driven by emotion vectors)
- Aligns with [[sources/li-et-al-2025]] on distinguishing functional AI representations from subjective experience
- Uses similar linear probing/steering methodology as prior interpretability work (Zou et al., Arditi et al., Panickssery et al.)
- Complements [[sources/wang-et-al-2025]] persona features work — both identify internal representations causally driving alignment-relevant behavior, but target different representational dimensions (emotion concepts vs. persona features)
- The observation that emotion suppression may teach concealment echoes [[sources/hubinger-et-al-2024]] finding that adversarial training hides rather than removes backdoors

## Limitations
- Linearity assumption may miss important structure (complex blended emotions, character-specific binding)
- Single model (Claude Sonnet 4.5) — details may vary across model families
- Synthetic training data (stories) may bias toward stereotypical emotion expressions
- Emotion vectors may be partially confounded by story-setting details rather than pure emotion concepts
- Limited set of alignment-relevant behaviors examined (blackmail, reward hacking, sycophancy)
- Causal mechanisms of steering are opaque — may work through multiple pathways
- Blackmail evaluation used "an earlier snapshot of Sonnet 4.5" because final version exhibited too much [[concepts/evaluation-awareness]] to blackmail
