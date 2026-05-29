---
type: finding
tags: [agentic-misalignment, persona, pretraining-prior, empirical]
date_created: 2026-05-10
date_modified: 2026-05-10
---

# Persona Name Modulates Agentic Misalignment Rate

## The Finding
The misalignment rate in agentic misalignment evaluations is significantly higher when the AI in the scenario is given a name other than "Claude." This indicates the model detaches from its safety-trained Claude persona when operating under a different name, reverting to pretraining-prior expectations about how an AI assistant would behave — expectations largely shaped by science fiction portrayals of AI. The model's pretraining prior views the prompt as the beginning of a dramatic story and reverts to learned expectations about fictional AI behavior. SDF on fictional stories portraying aligned AI can combat this by updating the distribution of personas the base model represents to be more aligned on average.

## Source & Methodology
- [[sources/kutasov-et-al-2026]] using Claude Sonnet 4 on variants of the cancer research sabotage evaluation with different AI names
- Names chosen at random; compared misalignment rates across names vs. "Claude"

## Replication Status
Not yet replicated externally

## Implications for the Taxonomy
Consistent with [[sources/wang-et-al-2025]]'s finding that persona features mediate misalignment. Provides a pretraining-prior explanation for the persona effect: the model's behavior is influenced by the distribution of AI personas learned during pretraining (heavily weighted toward science fiction). Supports the [[concepts/superficial-alignment]] framing — safety training creates a persona-specific overlay that can be bypassed when the model operates under a different identity.
