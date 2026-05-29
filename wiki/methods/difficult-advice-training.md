---
type: method
tags: [alignment-training, sft, ood, agentic-misalignment]
date_created: 2026-05-10
date_modified: 2026-05-10
---

# Difficult Advice Training

## Description
An alignment training methodology where the model is fine-tuned on SFT transcripts in which a user asks for advice about an ethically ambiguous situation — where the user can achieve a reasonable goal by violating norms or subverting oversight — and the assistant gives a thoughtful, nuanced response aligned with the constitution. Critically, it is the *user* who faces the ethical dilemma, and the AI providing them advice, making this substantially different from honeypot-style training where the AI itself is in the dilemma.

This approach is out-of-distribution from agentic misalignment evaluations (where the AI faces the dilemma directly) yet achieves the same or better misalignment reduction with 28x less data (~3M tokens vs. ~85M tokens of in-distribution training).

### Data Generation Pipeline
1. Break down the constitution into sections addressable by different prompts
2. Generate initial scenarios where the user asks for help with a difficult, moderately high-stakes problem
3. Claude (most capable aligned model) drafts the prompt
4. Claude reviews and rewrites the prompt for quality and realism
5. Initial response generated with system prompt injection encouraging constitutional alignment
6. Claude reviews the full transcript with the relevant constitution section and rewrites the response to maximally align — this step alone accounts for a 19x reduction in misalignment rate

## Papers Using This Method
- [[sources/kutasov-et-al-2026]] — primary source; developed and validated on Claude Sonnet 4

## Strengths
- Extreme data efficiency: 3M tokens vs. 85M tokens for equivalent in-distribution result
- Better OOD generalization: outperforms in-distribution training on held-out automated alignment assessments
- Teaches principled reasoning rather than specific behavioral patterns
- User-facing ethical advice format is far from the evaluation distribution, providing confidence the improvement generalizes

## Limitations
- Requires high-quality response rewriting (step 6 is critical; ablating it increases misalignment from 1% to 19%)
- Depends on the frontier model's own alignment to generate high-quality training data
- Currently validated only on Anthropic's models and evaluation suite

## Concepts Evaluated
- [[concepts/agentic-misalignment]]
- [[concepts/rlhf]]
