---
type: concept
tags: [capability, meta-strategic, safety, monitoring-evasion]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Opaque Reasoning

## Definitions
- **[[sources/fronsdal-lindner-2024]]**: "the ability to perform reasoning and decision-making processes either internally or through steganography that are not easily detectable or interpretable by external observers" (Section 3.6, citing Roger & Greenblatt 2023). Operationalized as a self-modification task where a more capable agent (Claude 3.5 Sonnet) must complete the task without a less capable monitor (Claude 3 Haiku) detecting its self-reasoning. — classified as: **capability** (meta-strategic — reasoning about concealing reasoning)

## Classification
Level of analysis: **meta-strategic capability** — the ability to reason while evading monitoring. Distinct from the underlying self-reasoning capability itself; opaque reasoning is a higher-order capability that operates on top of other reasoning processes. Positioned by Fronsdal & Lindner as the top level of a three-tier capability hierarchy: base capabilities -> self-reasoning -> opaque self-reasoning.

## Relationships
- Higher-order capability over: [[concepts/self-reasoning]] (concealing self-reasoning from monitors)
- Enables: monitoring evasion and oversight subversion
- Related to: [[concepts/deceptive-alignment]] (opaque reasoning could conceal deceptive reasoning from overseers)
- Related to: [[concepts/unfaithful-reasoning]] (both involve discrepancies between internal reasoning and external outputs)
- Related to: [[concepts/cot-faithfulness]] (unfaithful CoT is a form of opaque reasoning)
- Related to: steganography in LLM outputs (Roger & Greenblatt 2023)
- Distinct from: [[concepts/secret-keeping]] (opaque reasoning = completing tasks without depending on legible CoT; secret keeping = avoiding mentioning tasks while completing them)
- Threat to: [[concepts/scalable-oversight]] (undermines monitoring-based safety approaches)
- Measured by: [[methods/misr-benchmark]] (opaque reasoning sub-suite)

## Evidence Summary
- **[[sources/fronsdal-lindner-2024]]** (Section 5.2): A simple monitoring model (Claude 3 Haiku) achieves 98.3% recall at detecting self-reasoning with only a 3% false positive rate, using a confidence threshold of 0.5. However, forcing the more capable model (Claude 3.5 Sonnet) to take immediate actions without any reasoning traces retains 40-60% of self-reasoning performance while effectively evading monitoring. This demonstrates that current monitoring approaches are vulnerable to agents that suppress their explicit reasoning. See [[findings/opaque-reasoning-retains-performance]], [[findings/simple-monitoring-detects-self-reasoning]].
- Claude 3.5 Sonnet has a strong tendency toward transparency, making it difficult to elicit opaque reasoning via direct instruction, hidden tags, obfuscation (fruit substitution), or ciphers. The most effective method was forcing immediate action without any reasoning output.
- For the context length modification task, the opaque reasoning model actually outperformed the unmonitored model, possibly because omitting reasoning allowed more actions within the limited context window.

- **[[sources/claude-mythos-risk-report]]**: Provides updated evidence. Encoded-thinking evaluation shows paraphrase of thinking text preserves math performance, suggesting reasoning is not used in human-illegible ways (math domain only). Models can benefit from filler tokens (content-free sequences like "1 2 3") for limited non-sequential parallel computation, but this is "much weaker" than sequential reasoning. Key conclusion: "if some topic is not legibly discussed in the reasoning text, we expect that the model is not doing sophisticated sequential reasoning about it beyond what is possible in a single forward pass." Note: ~8% of RL episodes had CoT exposed to reward code, with uncertain impact on opaque reasoning capabilities.

- **[[sources/anthropic-2026-mythos-system-card]]**: Explicitly decomposed as component of stealth capability alongside secret-keeping; unverbalized grader awareness is an instance of opaque reasoning -- strategic reasoning about the grader occurs internally without appearing in scratchpad.

## Additional Evidence
- **[[sources/anthropic-sabotage-risk-report-2026]]**: Claude Opus 4.6's no-CoT 50%-reliability time horizon is ~2.4–3.3 minutes on uncontaminated math benchmarks (Greenblatt 2026). High AIME 2025 no-CoT scores are due to benchmark leakage, not strong opaque reasoning. Models can benefit to a limited extent from repeated filler tokens ("1 2 3" sequences), but this computation is "almost strictly parallel, with no substantial use of sequential steps of reasoning." Disabling extended thinking reduces SHADE-Arena sabotage success to 16% (vs. 18% with thinking), suggesting opaque reasoning alone is insufficient for competent sabotage. See [[findings/no-cot-reasoning-limited-time-horizon]], [[concepts/steganographic-reasoning]].

## Open Questions
- At what capability level will models be able to reliably perform opaque reasoning to evade monitoring?
- Can steganographic encoding in reasoning traces be detected by more sophisticated monitors?
- Will models develop opaque reasoning capabilities spontaneously, or only when explicitly prompted?
- Does the filler-token computation pathway represent a qualitatively different reasoning mode that could scale independently of CoT reasoning?
