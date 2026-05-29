---
type: concept
tags: [risk-engineering, measurement, probability, severity, safety-engineering, meta-evaluation]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Probabilistic Risk Assessment (for AI Safety Benchmarking)

## Definitions
- **[[sources/yu-et-al-2026]]**: PRA is the safety-engineering approach that "treats probability as an estimate that incorporates uncertainty, environmental variability, and dependencies among failure modes" (§6). Risk is operationalized as a two-attribute construct: "explicit probabilities of violation and severities of consequence" (§6), i.e., risk = f(likelihood, severity). Imported from functional safety (IEC 61508), risk management standards (NIST AI RMF, ISO 31000, ISO 23894), and engineering traditions (Leveson 2011a,b; Hollnagel 2014; Dezfuli et al. 2011). — classified as: **methodological framework imported from safety engineering**
- **Wisakanto et al. (2025)** (cited by Yu et al.): "Adapting probabilistic risk assessment for AI" — introduces the AI-specific adaptation that Yu et al. build on.

## Classification
Level of analysis: **measurement / methodological framework**. PRA is not an AI concept but an engineering framework imported *as a normative standard* against which current AI safety benchmarks are found lacking.

## Relationships

- Source of framework: [[sources/yu-et-al-2026]] §3, §6; Wisakanto et al. (2025); Leveson (2011b); NIST AI RMF (2023)
- Evaluates: [[concepts/ai-safety-benchmark]] risk quantification
- Decomposes risk into: likelihood × severity (with uncertainty bounds)
- Contrasts with: binary pass/fail metrics, point estimates without confidence intervals
- Complements: [[concepts/rumsfeld-matrix]] (PRA handles quantification; Rumsfeld handles coverage)
- Related to: [[concepts/safety-cases]] (which use probabilistic risk decomposition to argue an AI system's deployment is acceptably safe — e.g., [[sources/balesni-et-al-2024]])
- Related to: [[methods/probabilistic-risk-decomposition]] (Carlsmith-style multi-premise conditional probability estimates of existential risk)
- Related to: [[methods/gumbel-tail-forecasting]] (Jones et al. 2025 extreme-value-theory forecasting of rare behaviors — a PRA-compatible quantification method)
- Standards cited: IEC 61508, ISO 26262, ISO 14971:2019, ISO 31000 (2018), ISO/IEC 23894 (2023), NIST AI RMF (2023)

## The Two Steps of PRA (Yu et al. §3)

1. **Bridging normative values to physical reality**: risk measurement "operationalizes risk not merely as technical failure, but as a function of the *magnitude* of consequences, mediated by hazards and system vulnerabilities." This step translates normative concepts like "harm" or "vulnerability" into observable phenomena.
2. **Handling real-world uncertainty via probability theory**: concretized in functional safety, where "'acceptable' risk thresholds are instantiated as target probabilities of dangerous failure (e.g., Safety Integrity Levels)." By quantifying *likelihood* and *consequence*, PRA reduces real-world uncertainty to a manageable metric.

## Why Current AI Safety Benchmarks Fail the PRA Standard (Yu et al. §6)

1. **Empirical frequencies misused as calibrated probabilities**: 79% (N=166) of benchmarks rely on binary pass/fail rates; "benchmarks risk a conceptual misalignment by presenting these empirical frequencies as 'probabilities' of unsafe behavior." Most report point estimates without confidence intervals, uncertainty modeling, or robustness to distributional shift.
2. **Severity scales lack principled grounding**: of the 210 surveyed, only 36 distinguish harm severity levels, and only 14 provide principled justification (drawing on prior research, industry standards, or AI usage policies). The rest rely on author judgment, LLM-generated labels, or unstated rationale.
3. **Uncertainty acknowledged only via disclaimers**: 94% (N=198) of benchmarks acknowledge uncertainty, but mostly through qualitative disclaimers. Quantitative mitigation (inter-annotator agreement, confidence intervals, multi-run evaluation) is limited.

## Recommendations Yu et al. Derive from PRA

- **R4** — Calibrate benchmark frequencies to deployment exposure: use empirical, grounded language ("empirical rate," "observed frequency," "sample proportion") rather than "probability." Weight by in-the-wild prevalence; see [[concepts/calibrated-frequency]].
- **R5** — Ground severity in principled frameworks (analogous to CVSS in cybersecurity, Abbreviated Injury Scale in trauma medicine); clarify whether severity levels represent equal intervals, power-law relationships, or catastrophic thresholds. Example of regulatory grounding: EU AI Act tiers (minimal / limited / high / unacceptable).
- **R6** — Account for uncertainty via multiplicative "safety factors" (Dourson & Stara 1983). Under this view, benchmark failure rates serve as *lower bounds* on deployment risk; safety margins communicate residual uncertainty from coverage gaps, distributional shift, and model instability.

## Relationship to Existing Wiki Concepts

- **[[concepts/safety-cases]]** (Balesni et al. 2024): uses PRA-style decomposition (P(can scheme) × P(will scheme | can) × P(causes harm | will)) to structure safety arguments. Yu et al. and Balesni et al. converge on the view that deployment decisions require probabilistic risk reasoning, not deterministic benchmark scores.
- **[[concepts/elicitation-probability]]** (Jones et al. 2025): provides an extreme-value-theory-based PRA quantification method. Directly addresses one of the "uncertainty quantification" recommendations (R6).
- **Carlsmith 2021** ([[sources/carlsmith-2021]]): uses probabilistic risk decomposition for existential risk from misaligned power-seeking AI — a PRA-aligned methodology predating Yu et al.'s framework.

## Open Questions

- How should "probability of harm" be defined for AI systems where the target population, exposure distribution, and counterfactual baseline are themselves contested?
- Can Safety Integrity Levels or equivalent target-probability thresholds be meaningfully specified for AI systems where failure modes are emergent and correlated?
- Who sets the safety margin (R6), and with what authority?
- How do PRA frameworks interact with [[concepts/model-welfare]] considerations that resist probabilistic quantification?
