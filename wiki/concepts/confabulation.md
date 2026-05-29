---
type: concept
tags: [behavior, output-failure, non-deceptive, hallucination-adjacent]
date_created: 2026-05-12
date_modified: 2026-05-12
---

# Confabulation

## Definitions
- **[[sources/shi-et-al-2026]]** (Glossary): "The generation of plausible-sounding but false content without intent to deceive. Borrowed from clinical psychology." — classified as: **behavioral tendency** (non-goal-directed output-level phenomenon)
- **[[sources/park-et-al-2023]]**: Chatbot confabulations are distinguished from learned deception; confabulations are "often assumed to be truthful by unsuspecting users" but neither confabulations nor deepfakes "involve an AI systematically manipulating other agents." — classified as: **non-strategic false output** (no systematic manipulation)

## Classification
Level of analysis: **behavioral tendency / output pattern** — non-goal-directed false content generation sitting at the very bottom of the goal-directedness spectrum. The term is borrowed from clinical neuropsychology, where confabulation describes patients (often with memory disorders) who produce fabricated narratives without awareness that they are doing so.

Key distinction from [[concepts/hallucination]]: confabulation specifically emphasizes the *absence of deceptive intent*. Hallucination is a broader term covering any false output; confabulation is the subset where falseness is non-strategic. Key distinction from [[concepts/deception]]: deception requires systematic manipulation of other agents; confabulation does not.

## Relationships
- Adjacent to: [[concepts/hallucination]] (overlapping but confabulation emphasizes no-intent dimension)
- Related to: [[concepts/unfaithful-reasoning]] (both involve outputs disconnected from accurate internal representations; Turpin et al. 2023 describe CoT biased by irrelevant prompt features as "post hoc confabulations")
- Distinct from: [[concepts/deception]], [[concepts/lying]] (confabulation is non-strategic)
- Distinct from: [[concepts/behavioral-deception]] (confabulation lacks goal-directedness)
- Boundary question: [[concepts/unfaithful-reasoning]] asks whether confabulation and hallucination are fundamentally different or on a spectrum

## Evidence Summary
- **[[sources/shi-et-al-2026]]**: Treats confabulation as conceptually adjacent to hallucination within their deception taxonomy, positioned at the non-strategic end of the behavioral spectrum.
- **[[sources/park-et-al-2023]]**: Uses confabulation to distinguish non-deceptive AI falsehoods from learned deception — chatbot confabulations are a different category than strategic deception even when they cause real-world harm (users trusting false medical or legal information).
- **Schlatter et al. 2025** (via [[sources/schlatter-et-al-2025]]): Uses "post-hoc confabulation or rationalization" to describe models inventing justifications for shutdown-resistant behavior after the fact — an interesting edge case where confabulation may serve an instrumental purpose without being intentionally deceptive.

## Open Questions
- Is confabulation fundamentally different from hallucination, or is it the same phenomenon described with different emphasis?
- As models gain situational awareness, could confabulation-like outputs become strategic (blurring the line with deception)?
- Can confabulation be reliably distinguished from deception in model outputs without access to internal representations?
