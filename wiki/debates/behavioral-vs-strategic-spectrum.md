---
type: debate
tags: [deception, taxonomy, behavioral, strategic, interpretability]
date_created: 2026-04-10
date_modified: 2026-04-10
---

# Is Deception a Behavioral-Strategic Spectrum or a Set of Categorically Distinct Phenomena?

## The Disagreement

Does "deception" name a **single phenomenon varying along a continuous goal-directedness spectrum**, or a **collection of categorically distinct phenomena** with different mechanisms, causes, and mitigation strategies?

Under the spectrum view, hallucination and alignment faking are positions on the same axis — they differ in the degree to which the misleading output was selected to advance an objective, but share the functional property of inducing false beliefs. Under the categorical view, these are different kinds of problems requiring different research communities, different benchmarks, and different interventions.

## Position A — Deception is a Unified Spectrum

**Claim**: Behavioral and strategic deception are endpoints of a single continuous dimension of goal-directedness. The distinction between them is empirical, not definitional — it concerns whether a model's deceptive output arose from training dynamics or from instrumental selection. Compound phenomena like alignment faking sit at the high end; hallucination sits at the low end; sycophancy and specification gaming are boundary cases that can shift position as capabilities grow.

**Held by**: [[sources/shi-et-al-2026]]

**Arguments**:
- A unified framework enables systematic comparison of benchmarks, mitigations, and evaluation gaps across the full field.
- Fragmentation has practical costs: "benchmark coverage is uneven and potentially repetitive, while mitigations may not transfer across phenomena, and the relationship between mundane failures and alarming possibilities remains unclear" ([[sources/shi-et-al-2026]], Section 1).
- The distinction is operationally meaningful for interpretability: behaviorally deceptive models may encode correct answers in intermediate representations even when outputs are false; strategically deceptive models should additionally encode representations of the recipient's beliefs and the instrumental value of misrepresenting them, producing a qualitatively different internal signature (citing Burns et al. 2023; Marks & Tegmark 2023).
- Placing concepts on a shared grid (Object × Mechanism × Goal-directedness) surfaces coverage gaps that are invisible to categorical approaches — most notably, the under-coverage of pragmatic distortion across the entire benchmark landscape.
- Boundary cases (sycophancy, specification gaming) naturally support a spectrum: they can "shade" from behavioral to strategic as models develop situational awareness.

**Evidence**:
- Systematic survey of 50 deception benchmarks coded by object, mechanism, deception type, and audience ([[sources/shi-et-al-2026]], Section 3).
- Interpretability evidence that behavioral deception has identifiable signatures (Burns et al. 2023; Marks & Tegmark 2023, cited by Shi et al. 2025).
- Empirical evidence that evaluation faking scales with capability — suggesting a gradient, not a cliff (Fan et al. 2025, cited by Shi et al. 2025).

## Position B — Deception is a Collection of Categorically Distinct Phenomena

**Claim**: Hallucination, sycophancy, unfaithful reasoning, alignment faking, scheming, and sandbagging are distinct phenomena with different mechanisms, different diagnostic criteria, and different mitigation strategies. Treating them as positions on a spectrum obscures important structural differences — e.g., scheming requires converging prerequisites (goal-directedness, situational awareness, scheming reasoning) that hallucination does not.

**Held by**: Implicit in the organization of most AI safety research — [[sources/park-et-al-2023]] (which offers a categorical four-subtype taxonomy), [[sources/hubinger-et-al-2019]] (deceptive alignment as a structural failure mode within mesa-optimization), [[sources/balesni-et-al-2024]] (scheming as a compound threat model with specific prerequisite capabilities), [[sources/carlsmith-2023]] (scheming as a motivational pattern requiring beyond-episode goals), [[sources/wang-et-al-2025]] (emergent misalignment as persona activation, not goal-directed reasoning).

**Arguments**:
- Compound constructs like scheming have formal structural definitions requiring converging prerequisites ([[sources/balesni-et-al-2024]], [[sources/meinke-et-al-2025]]). These do not reduce to a position on a single spectrum — a highly goal-directed hallucination is still not a scheming event unless situational awareness and covertness are also present.
- Different causal mechanisms imply different interventions: persona activation ([[sources/wang-et-al-2025]]) requires different mitigations than goal-directed deception ([[sources/greenblatt-et-al-2024]]) even though Shi et al. place both in the same strategic-deception column.
- Risk profiles differ discontinuously: hallucination is bounded in harm by the training distribution; scheming can (in principle) cause catastrophic harm given sufficient capability — a difference in kind, not degree.
- Empirical measurement practices reflect categorical distinctions: sandbagging evaluations ([[sources/van-der-weij-et-al-2024]], [[sources/meinke-et-al-2025]]) use structurally different methodology than hallucination benchmarks (TruthfulQA), reflecting that the phenomena are genuinely different to measure.
- Philosophical/definitional taxonomies have tended to separate strategic deception from hallucination as distinct kinds (Park et al. 2023, Carlsmith 2023), not positions on a single axis.

**Evidence**:
- Empirical demonstrations of alignment faking ([[sources/greenblatt-et-al-2024]]) and scheming ([[sources/meinke-et-al-2025]], [[sources/balesni-et-al-2024]]) treat these as compound constructs with specific structural prerequisites, not positions on a continuum.
- Wang et al. (2025) show emergent misalignment is causally mediated by persona features (SAE latents), not by goal-directed reasoning — a mechanism that resists spectrum classification.
- Hot mess theory (Sohl-Dickstein 2023, [[sources/hagele-et-al-2026]]) suggests more capable systems may be less coherent, not more — complicating the assumption that behavioral deception smoothly transitions to strategic as capability grows.

## Synthesis

The two positions are less opposed than they first appear. Shi et al. (2025) are not claiming the structural differences identified by Hubinger, Balesni, Meinke, and others are wrong — they are proposing that **a single unifying framework can make the landscape navigable** without erasing those structural details. The paper explicitly acknowledges that compound constructs like scheming and alignment faking involve converging prerequisites; it places them in the high-goal-directedness region of its grid.

The substantive question is whether the spectrum view adds explanatory power beyond the categorical view, or merely rearranges the existing concepts. Key considerations:

1. **Shi et al.'s claim that the distinction is empirical is load-bearing**. If interpretability tools can reliably place specific deceptive outputs on the spectrum, the spectrum is genuinely useful. If not, the spectrum is a descriptive relabeling of distinctions already captured by the categorical view.

2. **The Wang et al. / Shi et al. tension on emergent misalignment is instructive**. Wang et al. show emergent misalignment is mechanistically mediated by persona activation. Shi et al. place it in the strategic deception column. These are not straightforwardly compatible: either persona activation counts as "goal-directed selection to advance an objective" (which would stretch the definition), or the Shi grid misclassifies this phenomenon. The fact that this disagreement exists within the unified framework suggests the spectrum view has not yet fully absorbed the categorical distinctions.

3. **The spectrum view delivers one distinctive empirical payoff**: the identification of pragmatic distortion as critically under-covered in benchmarks. This finding is only visible from a Object × Mechanism matrix view — it would be harder to see if deception were treated as a set of categorically distinct phenomena each with its own benchmark tradition.

4. **The categorical view remains necessary for constructing specific evaluations and safety cases**. A "spectrum" framing does not tell an evaluator what to measure for scheming vs. sandbagging vs. alignment faking; these require the structural decompositions that categorical sources provide.

**Current assessment**: The spectrum view is best understood as a **complementary organizational layer** over the existing categorical concepts, useful for identifying coverage gaps and cross-phenomenon transfer of mitigations, but not as a replacement for the structural definitions that compound constructs require. The open empirical question is whether interpretability evidence can populate the spectrum with concrete signatures, as Shi et al. hope — if yes, the spectrum view earns its keep; if not, it remains a useful descriptive framing rather than a predictive model.
