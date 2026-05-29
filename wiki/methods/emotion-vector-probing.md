---
type: method
tags: [interpretability, linear-probing, steering, mechanistic]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Emotion Vector Probing and Steering

## Description
A mechanistic interpretability method for extracting, validating, and causally testing internal emotion concept representations in LLMs. Combines linear probing (measuring activation along extracted directions) with activation steering (adding vectors to the residual stream at inference time) to establish both correlational and causal relationships between internal representations and model behavior.

## Pipeline
1. **Extraction**: Generate synthetic emotional stories (171 emotions × 100 topics × 12 stories/topic/emotion). Extract residual stream activations averaged across token positions (from token 50 onwards). Mean-subtract across emotions. Project out top PCs of neutral transcript activations (50% variance threshold) to remove confounds.
2. **Validation**: Sweep over diverse document datasets. Verify vectors activate on content involving the correct emotion. Check logit lens (direct effect on output tokens). Test on implicit emotional content and numerically modulated intensity scenarios.
3. **Causal testing**: Add emotion vectors to the residual stream during inference at controlled strengths. Measure behavioral effects on preferences (Elo), misalignment (blackmail rate, reward hacking rate), and sycophancy.
4. **Geometry analysis**: PCA, k-means clustering, cosine similarity matrices, correlation with human psychological structure (affective circumplex).
5. **Layer-wise analysis**: Compare representations across model layers; identify "sensory" (early-middle) and "action" (middle-late) representations.
6. **Speaker-specific probing**: Train 2×2 grid of probes (speaker × turn) from dialogue datasets to distinguish present-speaker vs. other-speaker emotion representations.

## Papers Using This Method
- [[sources/sofroniew-et-al-2026]]

## Strengths
- Establishes both correlation and causation (probing + steering)
- Generalizes across diverse validation datasets
- Systematic layer-wise analysis reveals representational dynamics
- Produces quantitative, reproducible metrics (r values, Elo changes, behavioral rates)
- Can be adapted to other concept dimensions beyond emotions

## Limitations
- Linearity assumption — may miss nonlinear or compositional emotion representations
- Synthetic training data may bias toward stereotypical emotion expressions
- Vectors may be partially confounded by story-setting details
- Steering mechanisms are opaque — may work through multiple causal pathways
- Single model (Claude Sonnet 4.5) — generalizability unconfirmed

## Concepts Evaluated
- [[concepts/functional-emotions]]
- [[concepts/emotion-vectors]]
- [[concepts/reward-hacking]] (causal effect of desperation/calm)
- [[concepts/sycophancy]] (causal effect of positive-valence emotions)
- [[concepts/agentic-misalignment]] (causal effect on blackmail behavior)
