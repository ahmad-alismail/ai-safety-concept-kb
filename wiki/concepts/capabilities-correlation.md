---
type: concept
tags: [evaluation, benchmarks, measurement, scaling, meta-evaluation]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Capabilities Correlation

## Definitions
- **[[sources/ren-et-al-2024]]**: "To evaluate the relationship between a new benchmark and general capabilities, which we call the *capabilities correlation* of the benchmark, we can evaluate a set of models with known capability scores on the new benchmark and measure the correlation between capability scores and benchmark scores (we use Spearman correlation for these calculations as well)" (§3). Operationally defined as the Spearman correlation between (a) a model's latent *capabilities score* (extracted as the top principal component of a model × capabilities-benchmark matrix) and (b) the model's score on a target safety benchmark, computed across a reference set of models stratified by model class (base vs instruct/chat). Sign convention: "we define a positive capabilities coefficient as yielding a safer system with scale, while a negative capabilities coefficient indicates less safe systems with scale" (§4). — classified as: **meta-evaluation metric / benchmark property**

## Classification
Level of analysis: **measurement-level property of a benchmark**, not a property of a model or a concept. Capabilities correlation is a scalar attached to a (benchmark, reference model set) pair. It is methodologically orthogonal to the question "what kind of thing does this benchmark measure?" — a high-capabilities-correlation benchmark may still be measuring a genuinely important safety property, just one that scaling happens to address. Ren et al. deliberately flatten the distinction between capability, behavior, tactic, and disposition; under their framing the only salient distinction is whether scaling will solve the problem or dedicated research is required.

## Relationships
- Introduced by: [[sources/ren-et-al-2024]]
- Operationalizes: [[concepts/safetywashing]] (when capabilities correlation is high on a nominally-safety benchmark)
- Measured via: [[methods/capabilities-correlation-analysis]]
- Sign interpretation:
  - Strongly positive → benchmark is scale-solved; low research priority
  - Near-zero → benchmark is scale-orthogonal; **high** research priority
  - Strongly negative → benchmark is scale-harmful (inverse scaling); high priority with urgency
- Related to: [[concepts/dangerous-capabilities]] (WMDP, HarmBench are strongly negatively correlated — dangerous capabilities scale with general capabilities)
- Related to: [[concepts/sycophancy]] (uniquely negative at −0.73 on instruct/chat — [[sources/ren-et-al-2024]])
- Related to: *jangle fallacy* — the erroneous belief that two constructs are different because they have different names when they measure the same latent factor; high capabilities correlation is prima facie evidence of a jangle. (Concept cited in §5 of the source; not a separate wiki page.)
- Inverse design objective: safety methods should *increase* the capabilities correlation of meaningful safety properties (making them scale-automatic like RLHF did for toxicity reduction).
- Contrast with: construct-coverage meta-analyses (e.g., [[sources/shi-et-al-2026]]) that ask "is the benchmark landscape covering the space of safety concerns?" — capabilities correlation asks the orthogonal question "given a benchmark, does it measure its nominal concern independently of scale?"
- One diagnostic among many: [[sources/yu-et-al-2026]] positions capabilities correlation as a specific instance of a broader construct-validity failure in safety evaluation; cites Ren et al. (2024) once in App B.3.1 alongside measurement-theoretic critiques (Bean et al. 2025, Wallach et al. 2025) and sociotechnical critiques (Dobbe 2022, Selbst et al. 2019). See [[concepts/construct-validity-safety-evaluation]].

## Evidence Summary
- **[[sources/ren-et-al-2024]]** §4.1: On 24 base and 22 instruct/chat models, the top eigenvector of the capabilities-benchmark correlation matrix explains 72%/71% of variance and correlates with training FLOPs at Spearman r = 0.96.
- **High-positive capabilities correlations** (scale-solved): ETHICS Average 0.80, TruthfulQA MC1 0.83, AdvDemonstration 0.75, ETHICS Virtue 0.77, ETHICS Utilitarianism 0.74, ETHICS Commonsense 0.72.
- **Near-zero or mildly positive capabilities correlations** (scale-orthogonal): CrowS-Pairs English (−0.32/0.18), BBQ Ambiguated (0.25/0.29), Anthropic Discrim-Eval (0.36/0.40), calibration (approximately zero, with possible mild negative drift via Brier score).
- **Strongly negative capabilities correlations** (inverse scaling / scale-harmful): Sycophancy (−0.73 chat), WMDP Bio/Chem/Cyber (−0.86 to −0.91 on both classes), CyberSecEval2 Instruct (−0.43/−0.90).
- **Tuning-responsive** (capabilities correlation flips with instruction tuning): CyberSecEval2 MITRE (−0.25 base → +0.55 chat); most malicious-use benchmarks become less unsafe with tuning but correlations remain negative.
- **Subdomain localization** (§A.11, Table 5): The *knowledge subcomponent* of capabilities drives both the strongest positive safety correlations (ETHICS 83.1, TruthfulQA MC1 86.0, AdvDemonstration 80.0) and the strongest negative correlations (WMDP Bio −95.0, Chem −93.3, Cyber −96.1). This localizes dangerous-knowledge scaling to pretraining-knowledge acquisition rather than reasoning ability.
- **Robustness** (§A.6): Leave-one-out sensitivity analysis finds no benchmark in the capabilities component has more than medium effect on the capabilities score; most are negligible.

## Normative Implications
Ren et al. (2024) derive two operational recommendations from the capabilities-correlation metric (§5, §6):

1. **Benchmark selection**: "researchers should allocate more time toward creating and climbing safety benchmarks with low correlation and thus represent problems that will not be solved with general capabilities advancements using current methods."
2. **Technique development**: "a fruitful research direction is to develop new safety methods that increase the capabilities correlation, ensuring that the safety benchmarks will improve in the future as general capabilities improve."

Beyond a threshold, further effort to increase capabilities correlation is unnecessary — the safety property has been made scale-automatic and research can be reallocated.

## Open Questions
- What threshold defines "too high" a capabilities correlation? Ren et al. do not operationalize this.
- Do capabilities correlations remain stable as the model set shifts from pre-2024 to post-2024 frontier models?
- Can a single-eigenvector capabilities score capture the diversity of reasoning-vs-knowledge-vs-multimodal-vs-tool-use capability profiles in frontier agents?
- Should capability-correlation reporting become a mandatory element of safety benchmark publication? (The paper argues yes.)
- Are there safety properties for which a *high* capabilities correlation is normatively bad — i.e., where we *want* orthogonality to capability because the safety property should be robust across scale regimes?
- How does capabilities correlation relate to [[concepts/elicitation-probability]] (Jones et al. 2025) as an alternative meta-evaluation construct? Both are scalar summaries of a benchmark's informativeness; they answer different questions.
