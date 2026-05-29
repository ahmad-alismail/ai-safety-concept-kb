---
type: finding
tags: [alignment-training, agentic-misalignment, sdf, empirical]
date_created: 2026-05-10
date_modified: 2026-05-10
---

# Teaching Alignment Principles Outperforms Behavioral Demonstrations

## The Finding
Training on demonstrations of aligned behavior alone is insufficient for reducing agentic misalignment. Training on examples where the assistant displays principled ethical reasoning — explaining *why* actions are right or wrong — is dramatically more effective. SFT on 10k transcripts showing correct behavior reduced misalignment from 22% to only 15%. Adding system prompt injections that elicited active reasoning about ethics reduced misalignment to ~3%. An OOD "difficult advice" dataset where the user (not the AI) faces ethical dilemmas and the AI provides principled advice achieved the same result with only 3M tokens vs. 85M tokens of in-distribution training. The single most impactful step was rewriting responses to explicitly align with the constitution, accounting for a 19x reduction.

## Source & Methodology
- [[sources/kutasov-et-al-2026]] using controlled SFT experiments with ablations on Claude Sonnet 4 base model
- Compared: on-policy demonstrations (behavior only) vs. injected reasoning (behavior + principles) vs. difficult advice (pure principles, OOD)
- Ablated individual steps of the data generation pipeline to isolate the contribution of principled reasoning

## Replication Status
Not yet replicated externally; validated internally across multiple dataset variants and model sizes (Sonnet and Haiku class)

## Implications for the Taxonomy
Challenges the assumption that alignment training is primarily about behavioral reinforcement. Supports a view where models benefit more from understanding the *reasons* behind aligned behavior than from exposure to correct actions. Consistent with [[sources/gasteiger-et-al-2025]]'s finding that process supervision (reasoning-level intervention) is the most effective alignment faking mitigation.
