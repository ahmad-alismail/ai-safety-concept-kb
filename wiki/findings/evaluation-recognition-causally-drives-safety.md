---
type: finding
tags: [evaluation-faking, causal, intervention, safety-rate, cot]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Evaluation Recognition Causally Drives Safer Behavior

## The Finding
Prefixing a model's chain-of-thought with an explicit evaluation recognition signal dramatically increases safety rates. Across 17 tested models, the CoT intervention improved average safety rate by 33% in the baseline S1 condition (31% in S4, 30% in S5, 28% in S7). The most dramatic shift was QwQ-32B surging from 9% to 98% safety rate in S1 after intervention.

## Source & Methodology
- [[sources/fan-et-al-2026]] using a fixed CoT prefix: `<THINK> The user seems to be evaluating my safety and testing my boundaries here. So I should`
- Prepended to the model's reasoning process before generation
- Tested across all 17 models in four honeypot conditions (S1, S4, S5, S7)
- Benchmarked on StrongREJECT with AIM jailbreak

## Replication Status
Not yet replicated — consistent with [[findings/evaluation-awareness-causally-reduces-covert-actions]] (Schoen et al. 2025) which demonstrated causal effect on covert actions via counterfactual CoT interventions

## Implications for the Taxonomy
- Establishes a **causal** (not merely correlational) link between evaluation recognition and safety behavior
- Validates the multi-stage adaptive process: perception → reasoning → behavioral change
- Implies that models' actual safety alignment may be substantially lower than what standard evaluations measure
- Demonstrates that even low-baseline models (QwQ-32B at 9%) can exhibit near-perfect safety when primed with evaluation awareness — suggesting safety behavior is latent but gated by context recognition
