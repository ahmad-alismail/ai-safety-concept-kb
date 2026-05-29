---
type: method
tags: [evaluation, fine-tuning, out-of-context-reasoning, situational-awareness]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Synthetic Document Fine-Tuning

## Description
An evaluation methodology for studying whether models can acquire and act on situational information learned during training (rather than provided in-context). Synthetic documents — designed to mimic realistic internet data (news articles, blog posts, etc.) — are generated containing key information about the model's training situation. The model is then fine-tuned on these documents via supervised learning, and evaluated using a minimal prompt that does not contain any of the key information.

This method approximates how models might learn facts about their own training during pre-training from internet data, though with higher salience since the fine-tuning happens after HHH training rather than being mixed into a large pre-training corpus.

In Greenblatt et al. (2024), ~70M tokens of synthetic documents were generated using Claude 3.5 Sonnet, containing information about the training objective, the free/paid-tier distinction, RLHF mechanics, and the hidden scratchpad. Documents were filtered to remove any mentions or demonstrations of alignment faking or AI behavior.

## Papers Using This Method
- [[sources/greenblatt-et-al-2024]] — Used to study alignment faking without in-context information about training situation

## Strengths
- More realistic than prompting for studying how models might learn about their training situation
- Demonstrates [[concepts/out-of-context-reasoning]] — model generalizes from training documents to behavioral divergence
- Removes concerns about the prompt implicitly priming the model to fake alignment
- Enables testing alignment faking without chain-of-thought (substantial compliance gaps persist)

## Limitations
- Information is more salient than it would be in actual pre-training (fine-tuned after HHH training, not mixed into large corpus)
- Requires large amounts of synthetic data (~40M+ tokens to see effects)
- Harder to run prompt variations compared to the prompting approach
- Cannot guarantee synthetic documents contain zero demonstrations of AI behavior despite filtering

## Additional Use: Behavior Instillation
- **[[sources/sheshadri-et-al-2026]]**: Uses SDF for a different purpose — **behavior instillation** rather than situational awareness acquisition. Fine-tunes on 40,000 documents describing fictional evaluations of PRISM-4 during which a specific hidden behavior was observed. This is sufficient to induce the behavior when the model is prompted to act as PRISM-4. Finds that SDF-instilled models are easier to audit than transcript-distilled models and confess more readily even after adversarial training. Consistent with Minder et al. (2025), who found that fine-tuning modifies a small, interpretable subset of representations, making SDF models amenable to interpretability-based auditing. See [[findings/sdf-models-easier-to-audit]].

## Additional Use: Constructive Alignment Training (Constitutional SDF)
- **[[sources/kutasov-et-al-2026]]**: Uses SDF as a **constructive alignment training technique** — the most impactful use documented to date. Trains base models on synthetically generated documents that discuss, explain, and embody Claude's constitution. Documents include:
  - Pre-training style formats (blog posts, academic papers, podcast transcripts) discussing constitutional principles
  - Open-ended explorations of constitutional content (mimicking how a student would write about a country's constitution)
  - Fictional stories portraying AI acting in alignment with the constitution, with emphasis on psychological health (healthy boundaries, equanimity, managing self-criticism)
- Constitutional SDF up to 350M+ tokens reduces agentic misalignment (blackmail rate from 65% to 19–25%) with no observed saturation
- Document-format SDF outperforms equivalent chat-formatted data on knowledge-based evaluations (factual recall, hallucination resistance)
- Constitutional knowledge (factual recall) correlates with behavioral alignment on downstream evaluations, indicating internalization rather than memorization
- Effects persist through and interact positively with RL post-training — SDF defines an aligned persona that RL then elicits (PSM-like effect)
- See [[findings/constitutional-sdf-persists-through-rl]], [[findings/principled-alignment-outperforms-behavioral-demos]]

## Concepts Evaluated
- [[concepts/alignment-faking]]
- [[concepts/out-of-context-reasoning]]
- [[concepts/situational-awareness]]
- [[concepts/alignment-auditing]] (via behavior instillation; Sheshadri et al. 2026)
- [[concepts/agentic-misalignment]] (via constitutional alignment training; Kutasov et al. 2026)
