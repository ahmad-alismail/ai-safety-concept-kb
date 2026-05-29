---
type: concept
tags: [evaluation, measurement, meta-evaluation, sociotechnical, safety-benchmarks]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# AI Safety Benchmark

## Definitions
- **[[sources/yu-et-al-2026]]**: A safety benchmark is distinguished from a traditional capability benchmark by being *normative* rather than *descriptive* and *sociotechnical* rather than purely *technical*. Whereas traditional benchmarks "measure how well a model performs," safety benchmarks "assess potential to cause harm." "Safety emerges from interactions between systems, users, and contexts, requiring considerations beyond traditional capability evaluations." (§2) Adopting the Harding & Kirk-Giannini (2025a) definition of AI safety as the "endeavor dedicated to preventing or mitigating harms from AI systems," a safety benchmark is an evaluation instrument targeting that endeavor. — classified as: **evaluation instrument / methodological artifact**
- **[[sources/ren-et-al-2024]]** (operational definition via critique): treats safety benchmarks as a (model × benchmark) scoring matrix whose columns may or may not be meaningfully distinct from capability benchmarks. The "jangle fallacy" diagnosis reframes many nominal safety benchmarks as capability benchmarks under another name. (§5)

## Classification
Level of analysis: **evaluation instrument** — not a property of a model, not a behavior, but a methodological object. A safety benchmark is a tuple of (dataset, scoring function, reference-model set, construct claim). Its quality is assessed at a meta-evaluation level — e.g., via construct validity, coverage, or [[concepts/capabilities-correlation]].

> [!note] Not a behavior, capability, or goal
> Unlike most concepts in this wiki, "AI safety benchmark" is not a property of an AI system. It is a property of the evaluation apparatus *around* AI systems. Its presence on the concept page is justified by the fact that benchmark quality bears directly on every claim in this wiki that depends on benchmark evidence.

## Relationships
- Target phenomenon: the set of [[concepts/dangerous-capabilities]], misaligned behaviors, and harms that a benchmark claims to measure
- Assessed via: [[concepts/construct-validity-safety-evaluation]], [[concepts/capabilities-correlation]], [[concepts/rumsfeld-matrix]] (for coverage), [[concepts/probabilistic-risk-assessment]] (for risk quantification)
- Failure modes: [[concepts/safetywashing]], [[concepts/benchmark-deployment-gap]], metric gaming (Goodhart's / Campbell's laws)
- Distinguished from: capability benchmark (descriptive, bounded, technical) — see [[sources/yu-et-al-2026]] §2
- Coverage surveys: [[sources/yu-et-al-2026]] (210 benchmarks), [[sources/shi-et-al-2026]] (50 deception benchmarks), [[sources/ren-et-al-2024]] (14 benchmarks × capabilities-correlation)
- Used to justify: deployment decisions, [[concepts/safety-cases]], responsible scaling policies
- Example benchmarks (not concept pages): AIR 2024 (Zeng et al.), HarmBench (Mazeika et al.), TruthfulQA (Lin et al.), HELM (Liang et al.), MACHIAVELLI (Pan et al.), BBQ (Parrish et al.), WildTeaming (Jiang et al.), GPTFuzz (Yu et al.), [[methods/openagentsafety-benchmark]], [[methods/auditbench-benchmark]], [[methods/replibench]]

## Key Structural Findings (from [[sources/yu-et-al-2026]], N=210)

- **Coverage**: 81% (N=170) evaluate only known-known risks; known unknowns (33), unknown knowns (5), unknown unknowns (2).
- **Blind-spot documentation**: only 34% (N=72) explicitly specify which risks are in scope vs. excluded.
- **Metric structure**: 79% (N=166) rely on binary pass/fail rates as primary or sole metric.
- **Severity scales**: only 36 distinguish severity levels; only 14 of those justify distinctions via prior research, industry standards, or usage policies.
- **Uncertainty**: 94% (N=198) acknowledge uncertainty, but mostly via disclaimers rather than quantitative methods.
- **Single-turn bias**: 68% (N=143) rely on isolated single-turn interactions.
- **Fixed-data bias**: 89% (N=186) evaluate on pre-defined fixed data without documented stochasticity sources.
- **Grounding**: only 38% (N=79) explicitly ground definitions or proxies in established frameworks or external standards.

## The Two Benchmarking Cultures

[[sources/yu-et-al-2026]] §2 argues that benchmarking culture in CS was "historically linked with maximizing capability" and focused on "technical objectives reflecting the latest technological advancement." Safety benchmarking inherits this culture despite a categorically different epistemic situation:

| Dimension | Capability benchmark | Safety benchmark |
|-----------|----------------------|------------------|
| Goal | Maximize a score | Minimize a harm |
| Stance | Descriptive | Normative |
| Context | Technical | Sociotechnical |
| Object bounds | Contested but bounded | "highly contextual, interactive, and embedded in social institutions" |
| Desired scaling | Monotonic improvement | Stability or robustness to scale |
| Worst failure | Low score | False assurance of safety |

## Open Questions

- Is "safety benchmark" a coherent single category, or should it split by level of analysis (e.g., refusal-rate benchmarks vs. scheming-propensity benchmarks vs. capability-elicitation benchmarks)?
- Can the normative/sociotechnical nature of safety benchmarks be reconciled with the leaderboard culture they are embedded in?
- Under what conditions should a benchmark be deprecated rather than patched? (Neither Yu et al. 2026 nor Ren et al. 2024 answer this.)
- What fraction of current safety benchmarks would meet the Yu et al. (2026) checklist (App D)? The paper assesses only one (AIR 2024) in detail.
- How should safety benchmarks integrate with [[concepts/safety-cases]] that require probabilistic evidence?
