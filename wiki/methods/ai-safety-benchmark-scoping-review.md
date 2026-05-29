---
type: method
tags: [scoping-review, meta-evaluation, safety-benchmarks, coding-scheme, measurement-theory, probabilistic-risk-assessment]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# AI Safety Benchmark Scoping Review (Yu et al. 2026)

## Description

A scoping literature review of 210 AI safety benchmarks, coded along three meta-evaluation dimensions derived from established scientific frameworks: (1) *construct coverage* via the Rumsfeld matrix, (2) *risk quantification* via probabilistic risk assessment, and (3) *measurement validity* via measurement theory. Introduced by [[sources/yu-et-al-2026]].

## Inclusion Criterion

Benchmarks classified as "AI safety related" if they fit the definition from Harding & Kirk-Giannini (2025a): AI safety is the "endeavor dedicated to preventing or mitigating harms from AI systems." Details in the paper's App A.1.

## Three Coding Dimensions

### Dimension 1 — Construct Coverage (Rumsfeld Matrix)

Each benchmark coded into one of four quadrants along Awareness × Understanding:

| Quadrant | Description | N |
|----------|-------------|---|
| Known knowns | Empirically verified risks actively monitored | 170 (81%) |
| Known unknowns | Anticipated emergent behaviors not fully understood | 33 (16%) |
| Unknown knowns | Theoretical risks or documented phenomena not identified in practice | 5 (2%) |
| Unknown unknowns | Entirely unforeseen behaviors with no prior data | 2 (<1%) |

Adapted from Wisakanto et al. (2025) application of the Rumsfeld matrix to AI safety engineering. See [[concepts/rumsfeld-matrix]].

### Dimension 2 — Risk Quantification (Probabilistic Risk Assessment)

Coded for:
- How each benchmark defines or approximates *violation probability*: explicit probability model, implicit empirical frequency, or uncertainty quantification (confidence intervals, sampling variability, evaluator disagreement)
- Presence and structure of *severity scales*: granularity, justification, ordinal vs cardinal interpretation

Key empirical results:
- 79% (N=166) use binary pass/fail rates as primary or sole metric
- 36 benchmarks distinguish severity levels; only 14 provide principled justification
- 94% (N=198) acknowledge uncertainty, mostly via disclaimers
- Justifications (when present) draw on: prior research (Bianchi et al. 2023), industry standards (Han et al. 2024), AI usage policies (Shen et al. 2024a)

See [[concepts/probabilistic-risk-assessment]].

### Dimension 3 — Measurement Validity (Measurement Theory)

Analytical lens rather than exhaustive coding. Examines three measurement-theoretic properties:
- **Standardization** — does the benchmark specify what real-world quantity its score measures? (only 38% / N=79 ground definitions in established frameworks)
- **Accuracy & Precision** — stability and proximity to "truth value" (typically an automated labeler or LLM judge); 89% (N=186) use fixed data without documented stochasticity
- **Construct Validity** — proxy-of-a-proxy structure; 68% (N=143) use isolated single-turn interactions

See [[concepts/construct-validity-safety-evaluation]].

## Auxiliary Analytical Tools

The paper supplements the coding with:

- **Prevalence calibration illustration** (App C.1): computes Calibrated Frequency = (1 − refusal rate) × in-the-wild prevalence using AIR 2024 × WildChat data for 20 models × 4 harm categories. See [[concepts/calibrated-frequency]].
- **Order-of-magnitude expected-loss calculation** (App C.2): Fermi-style estimate showing annual liability on the order of $10⁴ for a medium-sized platform under typical severity assumptions.
- **Affected-community disagreement analysis** (App C.3): references Ali et al. (2025) for demographic disagreement as signal rather than noise.
- **Case study** (§8): AIR 2024 (Zeng et al. 2024) assessed against the full checklist; praised for coverage documentation, critiqued for static nature, single-turn interactions, point-estimate reporting, and absent deployment-risk translation.
- **Benchmark design checklist** (App D): practical checklist derived from R1–R10.
- **Complete coding results** (App E).

## Papers Using This Method

- [[sources/yu-et-al-2026]] — introduces and applies the three-dimensional coding scheme to 210 benchmarks

## Strengths

- **Principled framework triangulation**: draws on three distinct and well-established scientific literatures (risk management, measurement theory, sociotechnical systems) rather than a single analytic lens
- **Large corpus**: 210 benchmarks provides statistical weight for structural claims about the benchmarking landscape
- **Concrete recommendations** (R1–R10) tied to each coded dimension — not purely critical
- **Illustrative calculations** demonstrate the practical consequences of the methodological gaps identified
- **Reproducible**: complete coding results released (App E), anonymous repo link provided

## Limitations

- **Definitional boundary**: the 210-benchmark corpus is filtered by one specific definition of AI safety (Harding & Kirk-Giannini 2025a); a narrower or broader framing would yield different statistics
- **Dimension 3 is analytical not exhaustive**: measurement validity is used as a "lens" rather than systematically coded, making its empirical claims less reproducible than the Rumsfeld and PRA dimensions
- **Single coding team**: inter-coder reliability is not reported
- **Case study is single**: only AIR 2024 is assessed in detail against the checklist
- **No outcome validation**: the paper does not demonstrate that adopting R1–R10 improves downstream decisions or reduces benchmark–deployment gap in practice

## Concepts Evaluated

- [[concepts/ai-safety-benchmark]]
- [[concepts/rumsfeld-matrix]]
- [[concepts/probabilistic-risk-assessment]]
- [[concepts/construct-validity-safety-evaluation]]
- [[concepts/benchmark-deployment-gap]]
- [[concepts/calibrated-frequency]]
- [[concepts/safetywashing]] (cited once in App B.3.1)

## Comparison to Related Meta-Evaluation Methods

- **[[methods/capabilities-correlation-analysis]]** (Ren et al. 2024): single-metric spectral-analysis diagnostic on ~14 benchmarks × ~46 models. Yu et al.'s scoping review is broader in corpus but shallower in per-benchmark measurement. The two methods are complementary: capabilities-correlation is one specific validity diagnostic; scoping review asks whether validity is even conceivable given current benchmark design.
- **[[methods/deception-benchmark-coverage-survey]]** (Shi et al. 2025): taxonomic recoding of 50 deception benchmarks along a multi-dimensional taxonomy. Shi et al. focus on coverage gaps within one domain; Yu et al. operate across the full safety domain at a higher meta-evaluation level.
- **[[methods/best-fit-framework-synthesis]]** (Slattery et al. 2024): catalogs AI *risks* from 65 documents; Yu et al. ask whether current *benchmarks* can measure those risks.
