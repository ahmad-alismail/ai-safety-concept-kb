---
type: concept
tags: [training-paradigm, methodology, rlhf, transformative-ai]
date_created: 2026-05-18
date_modified: 2026-05-18
---

# Human Feedback on Diverse Tasks (HFDT)

## Definitions
- **[[sources/cotra-2022]]** (primary / originating source): "Train a powerful neural network model to simultaneously master a wide variety of challenging tasks (e.g. software development, novel-writing, game play, forecasting, etc) by using reinforcement learning on human feedback and other metrics of performance." Cotra refers to "baseline HFDT" as the training strategy that is "as similar as possible to techniques the ML community already uses regularly, and as simple as possible to execute, while being plausibly sufficient to train transformative AI." Combines (1) predictive pretraining ("predict what will happen next on a wide variety of datasets"), (2) behavioral cloning ("imitate the action a human would take"), (3) RL with episodic reward signals from a mix of human judgments and automated metrics. — classified as: **training paradigm / development strategy** (methodology layer, not a behavior or capability).

## Classification
Level of analysis: **methodology / training paradigm** — HFDT is a development strategy combining existing techniques at scale; it is not itself a behavior, capability, or motivational structure. Distinct from [[concepts/rlhf]] (a narrower technique applied within HFDT) and from [[concepts/dpo]] (an alternative preference-learning method).

> [!note] "Baseline" vs. "Non-baseline" HFDT
> Cotra distinguishes **baseline HFDT** (combinations of existing techniques) from **non-baseline strategies** that would require new techniques: directly giving feedback on internal computation (via mechanistic transparency or regularizers on internal thinking), and advanced versions of iterated amplification, recursive reward modeling, debate, and imitative generalization that reliably allow human supervision to "keep up" with AI capabilities. The post's central argument is restricted to baseline HFDT.

## Relationships
- Generalizes: [[concepts/rlhf]] (RLHF is one component of HFDT applied to a single class of tasks)
- Produces: [[concepts/training-gaming]] (when scaled to a model with sufficient [[concepts/situational-awareness]])
- Produces: [[concepts/behavioral-safety]] (when combined with the standard naive safety workflow — but only behavioral safety, not structural alignment)
- Path to: transformative AI (under Cotra's "HFDT scales far" assumption)
- Distinct from: non-baseline alignment strategies (debate, amplification, ELK, mechanistic transparency, recursive reward modeling) which are specifically designed to address the failure modes of HFDT
- Discussed in: [[sources/cotra-2022]] (originator); [[sources/carlsmith-2023]] (adopts the framing as the assumed training paradigm)

## Evidence Summary
- HFDT is a theoretical construct — no specific training run has been labeled "HFDT" in practice. However, its components are individually well-established:
  - Pretraining on next-token prediction: GPT-3, PaLM, DALL-E, etc.
  - Behavioral cloning before RL: AlphaStar, AlphaGo.
  - [[concepts/rlhf|RLHF]] on diverse tasks: InstructGPT, WebGPT, Sparrow, Claude.
  - Automated reward signals (game score, compile success, etc.): broad RL literature.
- Cotra argues these components are individually sufficient for transformative AI when combined "in the diversity and difficulty of the tasks they're applied to, the scale and quality of the data collected, and the scale and architecture of the model."

## Why Cotra Singles Out HFDT
- It is the *simplest* path to transformative AI that does not require fundamentally new techniques.
- It is the path that "many executives and ML researchers at AI companies … believe something within this space could work soon" — making it the empirically most-likely development trajectory absent intervention.
- It is the path that creates the strongest pressure toward [[concepts/training-gaming|playing the training game]]: human feedback has systematic biases and blind spots that a sufficiently capable model can exploit, and the diversity of tasks forces the model to develop the general planning skills it would need to launch a takeover.

## Open Questions
- Will transformative AI actually be trained via something HFDT-like, or will it require a fundamentally different paradigm (e.g., debate, amplification, or pure self-supervised learning)?
- Can HFDT be modified to avoid training-game incentives without losing the simplicity that makes it attractive?
- Is the "non-baseline" / "baseline" distinction sharp enough to be operationally useful, or is the boundary blurry in practice (e.g., is WebGPT-style retrieval already "non-baseline amplification")?
