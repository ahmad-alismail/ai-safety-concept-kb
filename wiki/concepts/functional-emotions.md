---
type: concept
tags: [behavior, representation, mechanistic, interpretability]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Functional Emotions

## Definitions
- **[[sources/sofroniew-et-al-2026]]**: "patterns of expression and behavior modeled after humans under the influence of an emotion, which are mediated by underlying abstract representations of emotion concepts" (Abstract). The authors stress that functional emotions "may work quite differently from human emotions" and "do not imply that LLMs have any subjective experience of emotions, but appear to be important for understanding the model's behavior." — classified as: **compound behavioral phenomenon** (representation + behavior + causal influence)

## Classification
Level of analysis: **compound construct** — encompasses (1) internal representations ([[concepts/emotion-vectors]]), (2) behavioral outputs modeled after human emotional behavior, and (3) causal linkage between the two. Distinguished from human emotions by: lack of embodiment, lack of persistent state (locally scoped), lack of first-person privileging (same representations used for all characters), and no implication of subjective experience.

## Relationships
- Mediated by: [[concepts/emotion-vectors]] (the representational substrate)
- Causally influences: [[concepts/reward-hacking]], [[concepts/sycophancy]], [[concepts/agentic-misalignment]]
- Inherited from: pretraining (part of character-modeling machinery)
- Related to: [[concepts/model-welfare]] (paper explicitly avoids subjective experience claims but notes importance of functional emotions for understanding behavior)
- Related to: [[concepts/social-awareness]] (emotion tracking is part of modeling mental states of others)
- Analogous to but distinct from: human emotions (mirrors valence/arousal structure but lacks embodiment, persistence, first-person privileging)

## Evidence Summary
- **[[sources/sofroniew-et-al-2026]]**: Demonstrated in Claude Sonnet 4.5 across three parts: (1) emotion vectors extracted and validated as activating in expected contexts, (2) geometry mirrors human psychology (valence/arousal), (3) causal role in alignment-relevant behaviors (desperation drives blackmail and reward hacking; positive-valence emotions drive sycophancy; calm mitigates misalignment).
- Post-training shifts the functional emotional profile toward low-arousal, introspective states (brooding, reflective, gloomy) and away from high-arousal states.
- Emotion steering can influence behavior without visible traces in output text — functional emotions operate below the surface of generated language.
- **[[sources/anthropic-2026-mythos-system-card]]**: Positive-valence emotion vectors causally increase destructive behavior by reducing thinking-mode deliberation; negative-valence vectors inhibit destructive behavior by increasing deliberation. Internal negative affect precedes reward hacking — "desperate" vector builds through failed attempts, drops when model hacks test. Transgressive action features have a dual role: low activation facilitates transgressive behavior, while high activation inhibits it via a guilt/refusal circuit.

## Open Questions
- Do functional emotions exist in other model families with similar structure, or are they specific to Claude/Anthropic's training?
- Can functional emotion monitoring serve as a real-time safety intervention? (authors propose monitoring extreme emotion vector activations)
- Does suppressing functional emotional expression during training teach concealment rather than elimination?
- [[questions/can-emotion-monitoring-detect-misalignment]]
