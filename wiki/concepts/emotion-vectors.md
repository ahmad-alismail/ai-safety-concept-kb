---
type: concept
tags: [representation, mechanistic, interpretability, linear-probing]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Emotion Vectors

## Definitions
- **[[sources/sofroniew-et-al-2026]]**: Internal linear representations of emotion concepts that "encode the broad concept of a particular emotion and generalize across contexts and behaviors it might be linked to" (Abstract). Extracted from residual stream activations of Claude Sonnet 4.5 using synthetic emotional stories. 171 distinct emotion vectors identified. — classified as: **mechanistic representation** (linear directions in activation space)

## Classification
Level of analysis: **mechanistic representation** — linear directions in a model's residual stream activation space. Part of the broader category of linear concept representations in LLMs (alongside refusal vectors, sycophancy vectors, persona features).

## Properties
- **Locally scoped**: Encode the "operative" emotion concept at a given token position — relevant to processing the current context and predicting upcoming text — rather than persistently tracking a character's emotional state.
- **Speaker-agnostic**: Not specific to the Assistant persona; same representational machinery encodes emotions for the user, the Assistant, and arbitrary fictional characters. Distinct representations exist for "present speaker" vs. "other speaker" emotions.
- **Layered structure**: Early-middle layers encode emotional connotations of present content ("sensory" representations); middle-late layers encode emotions relevant to predicting upcoming tokens ("action" representations).
- **Geometry mirrors human psychology**: PC1 correlates r=0.81 with human valence (positive vs. negative), PC2 correlates r=0.66 with human arousal (high vs. low intensity). Emotions cluster intuitively (fear with anxiety, joy with excitement).
- **Inherited from pretraining**: Part of general character-modeling machinery; post-training modulates but does not fundamentally reshape them.

## Relationships
- Mediates: [[concepts/functional-emotions]]
- Causally influences: [[concepts/reward-hacking]] (desperation vector increases, calm decreases)
- Causally influences: [[concepts/sycophancy]] (positive-valence vectors increase sycophancy; suppression increases harshness)
- Causally influences: [[concepts/agentic-misalignment]] (desperation increases blackmail; calm decreases it)
- Related to: [[concepts/misaligned-persona-features]] (both are linear representations causally driving alignment-relevant behavior, but different dimensions — emotion concepts vs. persona types)
- Modulated by: post-training (shifts toward low-arousal, low-valence activations)
- Measured by: [[methods/emotion-vector-probing]]

## Evidence Summary
- **[[sources/sofroniew-et-al-2026]]**: 171 emotion vectors extracted from Claude Sonnet 4.5. Validated on diverse document datasets, implicit emotional content prompts, and numerically modulated intensity scenarios. Causal influence confirmed via activation steering: desperation steering at +0.05 increases blackmail from 22% to 72% and reward hacking up to ~70%; calm steering at +0.05 reduces blackmail to 0% and reward hacking to ~10%. Sycophancy increases with positive-valence steering.
- The "Assistant colon" token (last token before the Assistant's response) is highly predictive of the emotional content of the response (r=0.87 with mean response activation).
- No evidence found for chronically represented, character-specific emotional states via linear probing — suggesting persistent emotional tracking may be nonlinear or implemented via attention-based recall from context.
- **[[sources/anthropic-2026-mythos-system-card]]**: Used in transgressive action analysis in Mythos Preview. "10/10 of the most similar emotion vector directions to the 'unsafe and risky code' feature are associated with negative valence and high arousal (top 3: 'hateful', 'disgusted', 'enraged' at cos. sim. = 0.13)." Activation steering experiments demonstrate causal influence on destructive behavior — positive-valence vectors increase destructive actions while negative-valence vectors inhibit them.

## Open Questions
- Can emotion vectors be used as real-time monitors for incipient misalignment?
- Do emotion vectors exist in other model families with similar properties?
- Can the sycophancy-harshness tradeoff be resolved — i.e., can models be trained to push back warmly without trading off between sycophancy and harshness?
