---
type: method
tags: [interpretability, probing, internal-representations, embodied-ai]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Memory Transplant Probing

## Description
Experimental paradigm for testing what information is encoded in a learned agent's internal memory representation. A primary agent navigates from source (S) to target (T), then its final hidden state is "transplanted" into a secondary "probe" agent initialized at S. The probe agent is trained identically but receives the primary agent's constructed episodic memory as its initial hidden state. If the probe navigates more efficiently (e.g., takes shortcuts, avoids excursions), this provides evidence that the primary agent's memory contains useful spatial representations of the environment. Controls include: (1) AllZeroMemory (empty initialization), (2) UntrainedAgentMemory (random-parameter agent walked along same trajectory). Bidirectional probing (SecondNav S→T and T→S) tests whether the representation is allocentric (map-like) vs. path-specific.

## Papers Using This Method
- [[sources/wijmans-et-al-2023]] — introduced and applied to blind RL navigation agents

## Strengths
- Provides causal evidence that specific information is encoded (not just correlational decoding)
- Controls (untrained memory, zero memory) disentangle learned behavior from architectural inductive bias
- Bidirectional probing tests allocentric vs. egocentric representation
- No gradients flow from probe to agent, ensuring the agent's representations are unaffected by the probing process

## Limitations
- Requires training a separate probe network, which itself has learned biases
- Only tests what information is *accessible* to a probe architecture, not everything that is encoded
- Relies on the probe being able to utilize the transplanted representation — a negative result is ambiguous
- Only demonstrated for LSTM hidden states; unclear how to extend to transformer-based or other architectures

## Concepts Evaluated
- [[concepts/internally-represented-goals]] — whether agents build internal representations beyond what is explicitly supervised
