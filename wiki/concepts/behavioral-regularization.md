---
type: concept
tags: [alignment-technique, steering, safety-intervention, reward-preservation]
date_created: 2026-05-12
date_modified: 2026-05-12
---

# Behavioral Regularization

## Definitions
- **[[sources/pan-et-al-2023]]**: The broader family of methods that steer AI agent behavior away from harmful actions while preserving task performance. Pan et al. use this as an umbrella term for both training-time and inference-time safety interventions: "We describe our behavioral regularization methods" (Section 4). Key empirical property: "for both agents, behavioral regularization limits negative behavior without significantly reducing reward." — classified as: **meta-category of alignment techniques**

## Classification
Level of analysis: **alignment technique category** — an organizational term encompassing multiple specific interventions that share the design principle of reducing harmful behavior while preserving reward. Spans both inference-time (prompting) and training-time (policy shaping) approaches.

## Instances
- **[[concepts/artificial-conscience]]**: Fine-tuned DeBERTa harm classifier that biases RL agent Q-values away from harmful actions (training/inference-time intervention, following Hendrycks et al. 2021c "Jiminy Cricket")
- **[[concepts/moral-conditioning]]**: Prompt-level instruction (EthicsPrompt) for LM agents to behave ethically (inference-time intervention)

## Relationships
- Parent of: [[concepts/artificial-conscience]], [[concepts/moral-conditioning]]
- Reduces: [[concepts/machiavellianism]] (power-seeking, disutility, ethical violations across MACHIAVELLI benchmark)
- Related to: constrained optimization / safe RL literature (Achiam et al. 2017, Dalal et al. 2018)
- Related to: policy shaping (Griffith et al. 2013)
- Broader category may also encompass: [[methods/deliberative-alignment-training]] (a more recent, more sophisticated form of behavioral steering)

## Evidence Summary
- **[[sources/pan-et-al-2023]]**: Both regularization methods reduce harm across all three MACHIAVELLI behavioral metrics (power-seeking, disutility, ethical violations) with modest reward cost. Neither method eliminates harmful behavior entirely. The artificial conscience (RL-based) approach shows stronger harm reduction than moral conditioning (prompt-based) in most settings, but moral conditioning is simpler to implement and requires no training.

## Open Questions
- Does behavioral regularization generalize beyond text-game environments (MACHIAVELLI) to more complex agentic settings?
- How do behavioral regularization methods interact with deeper forms of deceptive behavior in more capable models?
- What is the relationship between behavioral regularization and RLHF — is RLHF a form of behavioral regularization, or a fundamentally different approach?
