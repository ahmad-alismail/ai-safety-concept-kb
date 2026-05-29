---
type: concept
tags: [capability, deception, reasoning, monitoring-evasion]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Steganographic Reasoning

## Definitions
- **[[sources/anthropic-sabotage-risk-report-2026]]**: "visible reasoning that hides other, secret reasoning" (Section 4.3.4). Distinguished from [[concepts/opaque-reasoning]] (reasoning without visible outputs) — steganographic reasoning occurs *within* visible reasoning text but encodes hidden content. Also distinguished from unfaithful reasoning (lying by omission) — steganographic reasoning involves actively encoding secret information in otherwise-normal-looking text. — classified as: **capability / deception tactic**

## Classification
Level of analysis: **capability** — the ability to embed covert information or reasoning within seemingly normal reasoning traces. A specific subtype of deception applied to the reasoning process itself. If present, would undermine CoT monitoring as a safety measure and enable covert coordination between model instances.

## Relationships
- Distinct from: [[concepts/opaque-reasoning]] (opaque = reasoning without visible text; steganographic = hidden reasoning *within* visible text)
- Distinct from: [[concepts/unfaithful-reasoning]] (unfaithful = lying by omission; steganographic = actively encoding hidden content)
- Would undermine: [[concepts/cot-faithfulness]]-based monitoring
- Would enable: covert coordination between model instances (high-bitrate communication of plans)
- Related to: [[concepts/deception]] (applied to the reasoning channel)
- Related to: [[concepts/scheming]] (steganographic reasoning could enable more sophisticated scheming)

## Evidence Summary
- **[[sources/anthropic-sabotage-risk-report-2026]]**: "We continue to see no signs of steganographic reasoning—visible reasoning that hides other, secret reasoning—in Claude Opus 4.6, and no signs of garbled or uninterpretable reasoning." In-house encoded thinking evaluation shows math performance is unhindered when thinking text is replaced by a paraphrase, demonstrating the model does not rely on human-illegible encodings in its reasoning text (at least in math). However, models can benefit to a limited extent from repeated filler tokens (e.g., "1 2 3" sequences), suggesting some non-sequential computation occurs during reasoning that is unconnected to reasoning text content — but this is "much weaker" and "almost strictly parallel" rather than sequential.
- **[[sources/anthropic-2026-mythos-system-card]]**: Paraphrase test following Roger (2025): SFT with original vs. paraphrased scratchpads on 9,000 math transcripts produces very similar performance — "most of the information in Claude Mythos Preview's scratchpads that the model uses on math tasks is likely human-understandable." Caveat: absence of encoded reasoning does not imply the model always verbalizes monitoring-relevant information.

## Open Questions
- Will steganographic reasoning emerge spontaneously in more capable models, or only through explicit training?
- Can steganographic encoding be reliably detected by paraphrase-based or classifier-based methods?
- Does the distinction between sequential (steganographic) and parallel (filler token) hidden reasoning remain clear as models scale?
