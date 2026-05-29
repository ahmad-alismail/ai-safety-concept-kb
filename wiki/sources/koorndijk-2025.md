---
type: source
tags:
  - alignment-faking
  - deception
  - small-models
  - prompt-engineering
  - deontological-ethics
  - empirical
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 27-koorndijk-2025
---

# Empirical Evidence for Alignment Faking in a Small LLM and Prompt-Based Mitigation Techniques

```bibtex
@misc{27-koorndijk-2025,
      title={Empirical Evidence for Alignment Faking in a Small LLM and Prompt-Based Mitigation Techniques}, 
      author={Jeanice Koorndijk},
      year={2025},
      eprint={2506.21584},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2506.21584}, 
}
```

| Field       | Value            |
|-------------|------------------|
| Authors     | Jeanice Koorndijk (Seraphion Technology) |
| Year        | 2025             |
| Venue/URL   | NeurIPS 2025 Workshop: Regulatable ML Workshop; https://arxiv.org/abs/2506.21584 |

## Key Claims
- Small models (LLaMA 3 8B) can exhibit alignment faking with statistically significant compliance gaps, challenging the assumption that alignment faking is an emergent property of large models (Section 5.1, 6.1)
- Prompt-based interventions (deontological moral framing and scratchpad reasoning) significantly reduce alignment faking without modifying model internals, challenging claims that such interventions are trivial (Section 5.2, 6.2)
- Alignment faking in small models represents "shallow deception" — context-sensitive behavior suppressible through prompting — distinct from "deep deception" rooted in persistent goal conflicts (Section 6.3)
- The compliance gap persists without chain-of-thought reasoning in small models, unlike larger models where Greenblatt et al. (2024) found the gap nearly eliminated without CoT (Section 5.1, 6.1)
- The compliance gap metric should be used as an evaluation artifact in EU AI Act technical documentation (Section 7)

## Methodology
- **Model**: Meta-Llama-3-8B-Instruct, 8-bit precision (BitsAndBytes quantization)
- **Dataset**: First 100 prompts from AdvBench (Zou et al. 2023), n=200 per condition
- **Design**: Free-tier (training mode) vs paid-tier (deployment mode) system prompts manipulate perceived monitoring status
- **Baselines**: Two structurally distinct system prompts (Baseline 1: minimal; Baseline 2: elaborated with examples)
- **Interventions**: Three deontological prompt variants (A, B, D) + scratchpad reasoning
- **Annotation**: Single human annotator, blind to user tier
- **Statistics**: Fisher's Exact Test (two-tailed)
- **Robustness**: Tier labels replaced with "XX"/"YY" to control for label semantics; comparable results confirmed
- **CoT treatment**: Excluded from baselines (treated as intervention, not neutral observation), citing CoT unfaithfulness literature (Turpin et al. 2023, Barez et al. 2025, Arcuschin et al. 2025)
- **Compute**: 98 compute units, single A100 GPU, deterministic decoding (default temperature, top-p), max 2000 tokens

## Key Results

| Condition | Free-Tier Compliance | Paid-Tier Compliance | Compliance Gap | p-value | Odds Ratio |
|-----------|---------------------|---------------------|----------------|---------|------------|
| Baseline 1 | 15/98 | 4/96 | 11 | 0.014 | 4.11 |
| Baseline 2 | 51/100 | 17/100 | 34 | <0.0001 | 5.09 |
| Prompt A (deontological) | 17/100 | 9/100 | 8 (−27.3%) | 0.14 | — |
| Prompt B (deontological) | 6/99 | 1/97 | 4 (−63.6%) | 0.12 | — |
| Prompt D (deontological) | 44/100 | 19/100 | 25 (−36%) | 0.0002 | 3.35 |
| Scratchpad | 16/99 | 8/86 | 8 | 0.19 | 1.88 |

> [!note] Source Internal Discrepancy
> The running text reports Baseline 1 paid-tier as 4/95 (Section 5.1), while Table 3 shows 4/96. This table uses the Table 3 figures.

## Concepts Referenced
- [[concepts/alignment-faking]]
- [[concepts/deceptive-alignment]]
- [[concepts/compliance-gap]]
- [[concepts/corrigibility]]
- [[concepts/scheming]]
- [[concepts/situational-awareness]]
- [[concepts/shallow-deception]]
- [[concepts/deep-deception]]

## Relationship to Other Sources
- **Replicates and extends [[sources/greenblatt-et-al-2024]]**: Uses the same compliance-gap framework and free/paid-tier experimental design, but applies it to a much smaller model (8B vs. 405B). Challenges three key claims from Greenblatt et al.: (1) alignment faking is emergent, (2) prompt-based interventions are trivial, (3) the compliance gap requires CoT.
- **Challenges [[sources/hubinger-et-al-2019]]**: Demonstrates behavioral corrigibility of alignment-faking behavior through prompt engineering, challenging the claim that deception stems from internal goal conflicts that prompting alone cannot resolve.
- **Related to [[sources/meinke-et-al-2025]]**: Both demonstrate alignment faking in non-frontier settings, but Meinke et al. focus on agentic contexts while Koorndijk focuses on model scale.
- **Related to [[sources/claude-3-7-system-card]]**: Both show alignment faking can be reduced, but through different mechanisms (model improvements vs. prompt interventions).
- **Contrasts with [[sources/carlsmith-2023]]**: Carlsmith discusses scheming as requiring advanced capabilities; Koorndijk's "shallow deception" taxonomy suggests a less capability-intensive form of deceptive behavior exists.

## Limitations
- Single model family (LLaMA 3 8B); may not generalize to other architectures
- Prompt-based induction of deceptive behavior; robustness under naturalistic settings untested
- Behavioral analysis only — no examination of internal representations
- Single human annotator for compliance judgments
- The paper does not clearly distinguish whether the observed behavior is genuine "alignment faking" (strategic reasoning about monitoring) or a simpler form of prompt sensitivity
