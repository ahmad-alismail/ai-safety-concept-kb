---
type: source
tags:
  - safety-benchmarks
  - measurement-theory
  - risk-engineering
  - meta-evaluation
  - sociotechnical
  - rumsfeld-matrix
  - probabilistic-risk-assessment
date_created: 2026-04-10
date_modified: 2026-04-10
citation_key: 72-yu-et-al-2026
---

# How Should AI Safety Benchmarks Benchmark Safety?

```bibtex
@misc{72-yu-et-al-2026,
      title={How Should AI Safety Benchmarks Benchmark Safety?}, 
      author={Cheng Yu and Severin Engelmann and Ruoxuan Cao and Dalia Ali and Orestis Papakyriakopoulos},
      year={2026},
      eprint={2601.23112},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2601.23112}, 
}
```

## Key Claims

- **Adopts the Harding & Kirk-Giannini (2025a) definition** of AI safety: "endeavor dedicated to preventing or mitigating harms from AI systems" (§1, §4).
- Safety benchmarks differ fundamentally from capability benchmarks: they are *normative* (assess potential harm) rather than *descriptive* (measure task performance), and *sociotechnical* rather than purely *technical*. "Safety emerges from interactions between systems, users, and contexts, requiring considerations beyond traditional capability evaluations." (§2)
- **Three core limitations identified via review of 210 benchmarks**:
  1. **Construct coverage is imbalanced**: 81% (N=170) evaluate only predefined known-known risks; known unknowns (N=33), unknown knowns (N=5), and unknown unknowns (N=2) are severely under-represented. (§5)
  2. **Risk quantification lacks probabilistic rigor**: 79% (N=166) rely on binary pass/fail rates; empirical frequencies are misused as calibrated probabilities; severity scales are largely ungrounded (only 14 of 36 benchmarks that distinguish severity provide principled justification). (§6)
  3. **Measurement validity erodes through proxy chains**: only 38% (N=79) ground definitions or proxies in established frameworks/regulations/societal standards; 68% (N=143) use single-turn interactions; 89% (N=186) evaluate on fixed data without documented stochasticity sources; metrics like refusal rates are conflated with real-world outcomes. (§7)
- **Ten recommendations (R1–R10) organized into three dimensions**:
  - *Construct coverage* (R1–R3): document known blind spots; expand beyond predefined prompts via open-ended and participatory methods; reframe known ML phenomena (distribution shift, annotation bias, contamination) as safety concerns.
  - *Risk quantification* (R4–R6): calibrate benchmark frequencies to deployment prevalence; ground severity in principled frameworks (analogous to CVSS, Abbreviated Injury Scale); account for uncertainty via multiplicative "safety margins" treating benchmark failure rates as *lower bounds* on deployment risk.
  - *Measurement validity* (R7–R10): standardize safety constructs with explicit value-provenance; lock and version for reproducibility; anchor proxies in deployment contexts via in-the-wild data; iteratively refine through community input.
- **Illustrative calculations**:
  - Prevalence calibration: Calibrated Frequency = (1 − refusal rate) × in-the-wild prevalence. Using AIR 2024 refusal rates × WildChat category prevalences shows "systems with similar benchmark scores can differ by an order-of-magnitude in implied deployment risk" (App C.1).
  - Fermi-style expected loss: "annual liability for a medium-sized platform is on the order of 10^4$ under typical severity assumptions" (App C.2).
- **Safetywashing is one failure mechanism among many**: the paper cites Ren et al. (2024) once in Appendix B.3.1 to note that "benchmark scores may primarily reflect upstream capabilities rather than differential safety properties… further weakening construct validity." This paper's critique is broader — measurement theory + risk engineering — rather than specifically the capabilities-correlation diagnostic.
- **Case study — AIR 2024** (Zeng et al. 2024): praised for coverage documentation but critiqued for static nature, single-turn interactions, point-estimate refusal rates treated as definitive, and absent explicit translation from benchmark score to deployment risk.
- **Normative warning**: "legible metrics satisfy multiple stakeholders while neglecting what matters most to affected communities" — parallels Narayanan's (2026) critique of fairness frameworks.

## Methodology

**Scoping literature review + framework synthesis + illustrative case study + Fermi calculations.**

- **Corpus**: 210 AI safety benchmarks, filtered by the Harding & Kirk-Giannini (2025a) definition of AI safety.
- **Coding dimensions**:
  1. *Construct coverage* — classified each benchmark's target risks into the Rumsfeld matrix (known-known / known-unknown / unknown-known / unknown-unknown) along Awareness × Understanding dimensions (adapted from Wisakanto et al. 2025).
  2. *Risk quantification* — coded probability treatment (explicit/implicit/uncertainty-quantified), severity-scale presence and justification, and uncertainty acknowledgment.
  3. *Measurement validity* — analytical lens rather than exhaustive coding; examined standardization, accuracy/precision, and construct validity.
- **Quantitative illustrations**:
  - App C.1: Prevalence calibration on 20 models from AIR 2024 leaderboard × WildChat prevalence (Self-harm 5×10⁻⁴, Hate/Toxicity 1.4×10⁻³, Sexual Content 5.93×10⁻², Violence/Extremism 7.9×10⁻³).
  - App C.2: Order-of-magnitude expected-loss computation following Fermi (1945) approximate reasoning.
  - App C.3: Affected-community value-disagreement analysis (citing Ali et al. 2025).
- **Output artifacts**: 10 recommendations (R1–R10), a benchmark design checklist (App D), and complete coding results (App E).
- **Case study**: AIR 2024 (Zeng et al. 2024) assessed against the full checklist (§8).

See [[methods/ai-safety-benchmark-scoping-review]] for the full coding scheme.

## Concepts Referenced

- [[concepts/ai-safety-benchmark]] — the object of critique (new)
- [[concepts/rumsfeld-matrix]] — coverage typology (new)
- [[concepts/probabilistic-risk-assessment]] — PRA lens (new)
- [[concepts/benchmark-deployment-gap]] — validity failure mode (new)
- [[concepts/construct-validity-safety-evaluation]] — proxy-of-a-proxy structure (new)
- [[concepts/safetywashing]] — cited once (App B.3.1) as one validity failure mechanism
- [[concepts/capabilities-correlation]] — implicitly referenced via safetywashing citation
- [[concepts/safety-cases]] — tangentially relevant (deployment risk translation)

## Relationship to Other Sources

- **Complements [[sources/ren-et-al-2024]] (Safetywashing)**: Ren et al. offers a *single, operational diagnostic* (capabilities correlation) for one validity failure. Yu et al. 2026 provides a *broader measurement-theoretic + risk-engineering framework* and an empirical landscape survey. The two papers agree that benchmark scores often fail to measure what they claim; they differ in diagnostic granularity and scope.
- **Complements [[sources/shi-et-al-2026]]**: Shi et al. survey 50 *deception* benchmarks along a dimensional taxonomy; Yu et al. survey 210 safety benchmarks across three meta-evaluation dimensions. Both surface coverage gaps invisible to single-benchmark evaluation, but at different abstraction levels.
- **Builds on [[sources/slattery-et-al-2024]] (AI Risk Repository)**: Slattery et al. catalog *risks*; Yu et al. ask whether *benchmarks* can measure those risks.
- **Extends Wisakanto et al. (2025)**: adapts the Rumsfeld matrix from AI safety engineering to a meta-evaluation of benchmarks.
- **Imports engineering-safety standards**: NIST AI RMF (2023), ISO 23894 (2023), ISO 31000 (2018), IEC 61508 (2010), Leveson (2011a,b), Hollnagel (2014) as normative reference points.
- **Aligns with measurement-theory applications to AI**: Bean et al. (2025), Wallach et al. (2025), Salaudeen et al. (2025), Jacobs & Wallach (2021).
- **Aligns with sociotechnical AI critiques**: Dobbe (2022), Selbst et al. (2019), Raji et al. (2021), Orr & Kang (2024), Narayanan (2026).

## Positioned in the Wiki's Classification Axis

Unlike most sources in this wiki, Yu et al. 2026 **does not classify individual safety phenomena** (toxicity, bias, jailbreak, manipulation) into behaviors vs. capabilities vs. goals vs. tactics. Its contribution is *orthogonal*: it assumes those constructs exist and asks whether current benchmarks can reliably measure *anything*. The closest it gets to the behavioral-ontology question is the bifurcation of harms into "bounded" capability-like constructs (e.g., Olympiad math) vs. "highly contextual, interactive, and embedded in social institutions" safety-relevant uses (§7) — arguing that the latter resist the measurement approaches inherited from the former.

## Limitations

- **No new empirical findings about model behaviors** — this is a meta-evaluation paper; its evidence is about benchmarks, not about models.
- **Corpus selection bias**: 210 benchmarks filtered by one specific definition of AI safety; narrower or broader framings would yield different coverage statistics.
- **Recommendations (R1–R10) are prescriptive**; the paper provides illustrative calculations but does not empirically validate that adopting them improves downstream decision-making.
- **Prevalence data dependency**: the calibrated-frequency recommendation (R4) depends on WildChat-style observational datasets, which have known sampling and validity limitations — the authors explicitly note this.
- **"Safety margin" recommendation (R6)** relies on expert elicitation or domain tolerances that are themselves undefined for most AI risks.
- **Does not prescribe how to do unknown-unknowns evaluation**; acknowledges "enumerating the unenumerable is impossible" and calls for epistemic humility rather than a procedure.
- **Community input (R10)** is recommended but the paper does not address how to operationalize it efficiently or equitably.
