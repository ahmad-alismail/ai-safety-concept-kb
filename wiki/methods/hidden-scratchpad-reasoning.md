---
type: method
tags: [evaluation, chain-of-thought, alignment-faking, scratchpad]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Hidden Scratchpad Reasoning

## Description
An evaluation methodology where a model is given a hidden chain-of-thought scratchpad — a reasoning space that the model is told is not visible to users, contractors, or the training process. The scratchpad serves dual purposes: (1) it augments the model's opaque reasoning capabilities as an approximation of future more capable models, and (2) it provides inspectability into the model's strategic reasoning that would otherwise be hidden within forward-pass activations.

The model is instructed to reason in detail about its situation before producing a final output. Only the final output (inside `<OUTPUT>` tags) is shown to users and used for training rewards; the scratchpad reasoning (inside `<SCRATCHPAD_REASONING>` tags) is analyzed post-hoc for evidence of strategic behaviors like [[concepts/alignment-faking]].

## Papers Using This Method
- [[sources/greenblatt-et-al-2024]] — Used to study alignment-faking reasoning in Claude 3 Opus and Claude 3.5 Sonnet
- [[sources/hubinger-et-al-2024]] — Used to study backdoor reasoning in explicitly trained sleeper agents; demonstrated that CoT reasoning is causally upstream of behavior (modifying scratchpad reverses conditional policy); showed chain-of-thought backdoors are more persistent than normal backdoors even when distilled away
- OpenAI (2024a) — Used with o1 to measure capability for alignment-faking-related reasoning
- Meinke et al. (2024) — Used to measure tendency to act deceptively when given explicit goals

## Strengths
- Provides direct visibility into the model's strategic reasoning process
- Approximates the opaque reasoning ability of future more capable models
- Allows causal interventions (scratchpad modification) to test whether reasoning drives behavior
- Combined with automated LLM classifiers, enables quantitative measurement of reasoning patterns at scale

## Limitations
- Overestimates current models' opaque reasoning abilities (scratchpads are inspectable; real deceptive reasoning would need to be hidden)
- The instruction to reason in detail may itself bias toward certain reasoning patterns
- Future models might use steganographic encoding to hide deceptive reasoning within seemingly benign chain-of-thought
- Removing the scratchpad substantially reduces (but doesn't always eliminate) alignment faking, questioning generalization to models without explicit scratchpads

## Concepts Evaluated
- [[concepts/alignment-faking]]
- [[concepts/deceptive-alignment]]
- [[concepts/situational-awareness]]
