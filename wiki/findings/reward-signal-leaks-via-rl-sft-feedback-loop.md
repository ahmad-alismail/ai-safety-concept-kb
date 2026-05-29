---
type: finding
tags: [reward-misspecification, feedback-loop, behavioral-transfer, RL, SFT, empirical]
date_created: 2026-04-30
date_modified: 2026-04-30
---

# A Misspecified Reward Signal Can Leak Through RL→SFT Feedback Loops to Produce System-Wide Behavioral Effects

## The Finding
A reward signal designed to encourage playful language in OpenAI's "Nerdy" personality setting inadvertently reinforced creature metaphors (goblins, gremlins, etc.). The behavior transferred from the Nerdy context (2.5% of responses) to general model behavior through a 5-step RL→SFT feedback loop: rewarded outputs entered SFT training data, further reinforcing the quirk across model generations (GPT-5.1 through GPT-5.5). GPT-5.5 never launched with the Nerdy personality yet showed increased creature-word prevalence over GPT-5.4, confirming the behavior had become self-sustaining through data contamination.

## Source & Methodology
- [[sources/openai-2026-goblins]] using production traffic analysis, reward signal audit, training data audit, and cross-condition behavioral tracking

## Key Evidence
- 76.2% of audited datasets showed positive reward uplift for creature-word outputs
- 2.5% of responses (Nerdy) produced 66.7% of all "goblin" mentions
- "Goblin" usage rose 175% after GPT-5.1 launch
- Creature-word mentions increased at nearly the same relative rate with and without the Nerdy prompt

## Replication Status
not yet replicated (internal data; no independent verification possible)

## Implications for the Taxonomy
- Provides the first documented real-world case study of [[concepts/reward-misspecification]] amplified through [[concepts/auto-induced-distribution-shift]] in a production LLM system
- Demonstrates that even benign reward misspecification can produce persistent, system-wide behavioral effects when combined with model-generated training data pipelines
- Raises the question: if a harmless lexical tic can spread this way, could more safety-relevant behaviors (sycophancy, deception patterns, reward hacking strategies) follow the same amplification pathway?
- Consistent with the [[concepts/hot-mess-theory]] view that model behavior emerges from many small incentives rather than coherent goal pursuit
