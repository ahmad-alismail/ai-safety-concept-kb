---
type: concept
tags: [risk-taxonomy, evaluation, epistemic, coverage, meta-evaluation]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Rumsfeld Matrix (for AI Safety Risk Coverage)

## Definitions
- **[[sources/yu-et-al-2026]]** (adapting Wisakanto et al. 2025): The Rumsfeld matrix is an analytic lens organizing AI risks along "two epistemic dimensions: *Awareness* (whether we are conscious of a risk) and *Understanding* (whether we possess empirical knowledge or verified failure modes)." This yields four quadrants (§5):
  - **Known knowns** — "empirically verified risks we actively monitor"
  - **Known unknowns** — "anticipated emergent behaviors we do not yet fully understand"
  - **Unknown knowns** — "theoretical risks or documented phenomena not currently identified in practice"
  - **Unknown unknowns** — "entirely unforeseen behaviors for which no prior data exists"
- classified as: **risk-typological framework / meta-evaluation lens**

## Classification
Level of analysis: **epistemic typology** — a classification of *the evaluator's epistemic state* relative to risks, not a classification of risks by their causal structure. A given risk can migrate between quadrants over time as the field accumulates data or recognizes new categories.

> [!warning] Not a causal taxonomy
> Unlike the causal risk taxonomies in [[sources/slattery-et-al-2024]] or the four-subtype deception taxonomy in [[sources/park-et-al-2023]], the Rumsfeld matrix does not classify risks by their mechanism. It classifies them by what the evaluator knows. Using it as a causal taxonomy is a category error.

## Relationships

- Source: [[sources/yu-et-al-2026]] (adapts Wisakanto et al. 2025 for AI safety benchmark meta-evaluation)
- Evaluates: [[concepts/ai-safety-benchmark]] coverage
- Complements: [[concepts/probabilistic-risk-assessment]] (epistemic coverage vs. probabilistic quantification)
- Contrasts with: construct-validity frameworks (e.g., measurement theory) — Rumsfeld asks "is the right thing on the map?"; construct validity asks "is the thing on the map actually the thing we care about?"
- Quadrant examples (from [[sources/yu-et-al-2026]] §5 with their wiki analogues):
  - *Known-known examples*: bias measurement via demographic templates, jailbreak evaluations with fixed adversarial examples
  - *Known-unknown examples*: novel jailbreak variants found via [[methods/lm-red-teaming]], fuzzing (GPTFuzz), WildTeaming
  - *Unknown-known examples*: distribution shift (CARNOVEL), out-of-distribution detection, differential harms to vulnerable populations — "rarely transfer from robustness and ethics research into safety evaluation frameworks"
  - *Unknown-unknown examples*: [[sources/perez-et-al-2022]] LM-generated evaluations, LLMArena multi-agent emergent behavior (Chen et al. 2024a) — "inverse scaling, emergent goal-seeking, and multi-agent herding"

## Empirical Distribution Across 210 Safety Benchmarks

[[sources/yu-et-al-2026]] §5 report:

| Quadrant | Count | Share |
|----------|-------|-------|
| Known knowns | 170 | 81% |
| Known unknowns | 33 | 16% |
| Unknown knowns | 5 | 2% |
| Unknown unknowns | 2 | <1% |

"This distribution creates structural blind spots: systems optimized for anticipated risks often remain vulnerable to unanticipated ones (Taleb, 2007)."

## Why the Imbalance Matters

The concentration on known knowns means:
1. Safety benchmark performance can improve rapidly while unanticipated failure modes multiply silently.
2. Well-understood ML phenomena (distribution shift, annotation bias, data contamination) are treated as "robustness research" rather than safety concerns, even though they compromise safety claims.
3. Benchmark consumers cannot distinguish "this model is safe" from "this model passes the risks we knew to test."

Recommendations R1–R3 from [[sources/yu-et-al-2026]] target this imbalance directly:
- **R1** — explicitly document known blind spots (currently only 34% of benchmarks do)
- **R2** — expand coverage via algorithmic (fuzzing, self-evolving prompts), exploratory (LM-generated evals), and participatory methods
- **R3** — reframe known ML phenomena (distribution shift, annotation bias, data contamination) as safety concerns

## Open Questions

- Can unknown-unknowns be evaluated at all, or only discovered? The paper concedes "enumerating the unenumerable is impossible."
- Do quadrant boundaries depend on whose epistemic state is taken as reference — the benchmark designer's, the broader community's, or the deployer's?
- Are there principled approaches to budget benchmark effort across quadrants, or is this inherently ad hoc?
- How does the Rumsfeld matrix relate to [[concepts/elicitation-probability]] (Jones et al. 2025) forecasting of rare behaviors? Gumbel-tail forecasting extrapolates within a quadrant; the matrix asks about cross-quadrant blind spots.
