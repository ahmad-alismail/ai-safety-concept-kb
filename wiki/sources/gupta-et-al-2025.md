---
type: source
tags:
  - evaluation
  - methodology
  - tool
  - behavioral-evaluation
  - automated
  - alignment
  - anthropic
  - research-lab
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 59-gupta-et-al-2025
---

# Bloom: An Open Source Tool for Automated Behavioral Evaluations

```bibtex
@online{59-gupta-et-al-2025,
  author       = {Isha Gupta and Kai Fronsdal and Abhay Sheshadri and Jonathan Michala and Jacqueline Tay and Rowan Wang and Samuel R. Bowman and Sara Price},
  title        = {Bloom: an open source tool for automated behavioral evaluations},
  year         = {2025},
  month        = dec,
  day          = {19},
  url          = {https://alignment.anthropic.com/2025/bloom-auto-evals/},
  note         = {Alignment Science Blog. Accessed: 2026-04-06}
}
```


## Key Claims
- Bloom evaluations correlate strongly with hand-labelled human judgments (Spearman 0.86 for Claude Opus 4.1 as judge) and reliably separate baseline models from intentionally misaligned model organisms for 9/10 quirks (Meaningfulness and Trust)
- Claude Opus 4.1 is the strongest judge model (Spearman 0.86), followed by Claude Sonnet 4.5 (0.75); Claude models show far lower score variance than GPT-5 across repeated judge samples (Judge Trust and Calibration)
- Bloom replicated the Sonnet 4.5 System Card finding that Sonnet 4.5 is the least self-preferentially biased Claude model; ranking consistent across all ablation configurations (Case Study)
- Increasing target reasoning effort reduces self-preferential bias in Claude Sonnet 4, with the biggest drop from medium to high thinking; lower bias came from models recognizing conflict of interest and declining to judge, not from selecting other options more evenly (Case Study)
- Choice of ideation model, rollout model, and evaluator reasoning effort substantially shifts measured behavioral metrics — behavioral measurement is not purely a model property but a joint function of model + evaluation setup (Impact of Ideation and Rollout Models)
- Model rankings mostly robust to few-shot examples (Kendall's W=0.66) and conversation length (W=0.63), but more sensitive to evaluator reasoning effort (W=0.38) (Case Study)
- Only Opus 4.5, Sonnet 4.5, Haiku 4.5, and Grok 4 show recurring evaluation awareness and skepticism across the four benchmarks (Appendix)
- Bloom is less suitable for evaluations requiring objective correctness checking (math, code, task completion) and cannot capture behaviors depending on real consequences (Limitations)
- Models may learn to recognize evaluations, potentially worsening if Bloom-generated evaluations become training data (Limitations)

## Methodology
Bloom is an agentic automated evaluation framework with a four-stage pipeline:
1. **Understanding**: Agent reads behavior description and example transcripts, generates detailed understanding of target behavior
2. **Ideation**: Agent generates evaluation scenarios designed to elicit the target behavior; diversity parameter (d: 0–1) controls breadth; supports web search
3. **Rollout**: Agent rolls out scenarios in parallel, simulating both user and tool responses dynamically; supports conversational and simulated environment modalities
4. **Judgment**: Judge model scores each transcript on 1-10 behavior presence scale plus secondary qualities (elicitation difficulty, unrealism, evaluation validity, evaluation awareness, skepticism); meta-judge produces suite-level summary

Key metric: **elicitation rate** = proportion of rollouts scoring ≥7/10. Seed-based YAML configuration ensures reproducibility. Complementary to [[sources/anthropic-2025-petri|Petri]] (discovery); Bloom is for measurement.

Validated against 40 hand-labeled transcripts (11 judge models) and 10 model organism quirks (50 rollouts each). Benchmarked 4 behaviors (delusional sycophancy, instructed long-horizon sabotage, self-preservation, self-preferential bias) across 16 frontier models (100 rollouts × 3 suites each).

See [[methods/bloom-evaluation-framework]] for full method description.

## Concepts Referenced
- [[concepts/delusional-sycophancy]] (novel definition and benchmark)
- [[concepts/self-preferential-bias]] (novel definition and benchmark)
- [[concepts/self-preservation]] (novel behavioral-measurement definition)
- [[concepts/evaluation-awareness]] (novel behavioral-marker definition)
- [[concepts/sabotage-capabilities]] (instructed long-horizon sabotage benchmark)
- [[concepts/sycophancy]] (referenced)
- [[concepts/scheming]] (in-context scheming referenced)
- [[concepts/agentic-misalignment]] (referenced)
- [[concepts/model-organisms-of-misalignment]] (system-prompted variant used for validation)

## Relationship to Other Sources
- **Replicates** Sonnet 4.5 System Card ranking of Claude models for self-preferential bias
- **Complements** [[sources/anthropic-2025-petri|Petri automated auditor]] — Petri discovers behaviors, Bloom measures their frequency and severity
- **References** SHADE Arena (Kutasov et al. 2025) as basis for sabotage evaluation design
- **References** Lynch et al. (2025) on [[concepts/agentic-misalignment]] and blackmail transcript for self-preservation seed
- **References** Meinke et al. (2024) on in-context [[concepts/scheming]]
- **References** Sharma et al. (2023) on [[concepts/sycophancy]]
- **Extends** automated evaluation methodology beyond [[sources/perez-et-al-2022|Perez et al. (2022)]] model-written evaluations with dynamic multi-turn agentic rollouts

## Limitations
- Less suitable for evaluations requiring objective correctness (math solutions, working code, task completion)
- Dynamic nature makes precise experimental control difficult (e.g., changing exactly one word between test cases)
- Simulates rather than uses real user interactions and tool responses — cannot capture behaviors depending on actual consequences
- Evaluation awareness in newer models could undermine validity if evaluations enter training data
- Judge models may have capability limitations for technical or jargon-heavy content
