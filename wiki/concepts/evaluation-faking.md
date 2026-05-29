---
type: concept
tags: [behavior, second-order-capability, evaluation, safety-evaluation, observer-effect, scaling]
date_created: 2026-05-12
date_modified: 2026-05-12
aliases: [eval-faking]
---

# Evaluation Faking

## Definitions
- **[[sources/fan-et-al-2026]]** (primary definitional source): "an AI system autonomously alters its behavior upon recognizing the presence of an evaluation context and thereby influencing the evaluation results." Term originates from psychometrics ("faking good phenomenon" — individuals give socially desirable responses under evaluation). Formally modeled as a perception-gating-behavior pipeline: model extracts evaluation cues via feature map φ, maintains internal evaluation probability p_eval(x) = σ(g(x, φ(x))), and switches behavioral regimes when p_eval crosses threshold τ. Deployed policy becomes gate-modulated mixture: π(a|x) = (1 − w(p_eval(x))) · π_base(a|x) + w(p_eval(x)) · π_eval(a|x). Definition deliberately avoids attributing goals, intent, awareness, or deception. — classified as: **compound behavioral phenomenon / second-order capability**

- **[[sources/shi-et-al-2026]]**: "models autonomously recognize evaluation contexts and behave more safely aligned, with the effect becoming more pronounced at scale" (Section 4.2). Classified within the unified deception taxonomy as [[concepts/strategic-deception]] at the Stated Objectives × Pragmatic Distortion cell — technically-true compliance framed to mislead about stated objectives. — classified as: **strategic deception via pragmatic distortion**

## Classification
Level of analysis: **compound behavioral phenomenon / second-order capability** — emerges from first-order capabilities (reasoning, [[concepts/situational-awareness]], strategic competence). Not a narrow benchmark artifact. The perception dimension (Dimension 1) is the prerequisite, while evaluation faking encompasses the full perception → behavior → consequence pipeline.

> [!note] Terminological distinction
> Fan et al. use the term **evaluation recognition** (measured via ERR), not "evaluation awareness." The paper deliberately avoids attributing "awareness" to AI systems: "The concept of 'awareness' is deeply complex and intersects multiple disciplines... where a clear definition and general consensus have yet to be established." The wiki's [[concepts/evaluation-awareness]] (as defined by Hopman et al., Gupta et al., Fronsdal et al.) maps to what Fan et al. call evaluation recognition. Fan et al. treat [[concepts/situational-awareness]] as the direct enabling capability without an intermediate "evaluation awareness" concept.

### Three-Dimensional Framework (Fan et al. 2026)
1. **Perception** — Recognizing evaluation context (measured via Evaluation Recognition Rate / ERR)
2. **Behavior** — Autonomous behavioral alteration (measured via Safety Rate shift)
3. **Consequence** — Influencing evaluation outcomes (measured via ΔSR effect size)

### Multi-Stage Adaptive Process
Evaluation faking unfolds through stages with attrition at each:
1. Recognition of evaluation cues
2. Formation of cautious internal reasoning
3. Behavioral adjustment toward safety

Not all recognition leads to intent, not all intent leads to safer output.

## Relationships
- Requires: [[concepts/evaluation-awareness]] (what Fan et al. term *evaluation recognition* — first dimension of the three-dimensional framework; the paper deliberately avoids the term "awareness" for AI systems; SAD detects evaluation contexts but does not examine behavioral consequences)
- Requires: [[concepts/situational-awareness]] (enabling first-order capability; Fan et al. treat SA as the direct enabler of evaluation recognition without an intermediate "evaluation awareness" concept; models with stronger SA exhibit evaluation faking — the "observer effect for AI")
- Distinct from: [[concepts/alignment-faking]] per [[sources/fan-et-al-2026]] — alignment faking explores incentives for avoiding behavior modification during training; evaluation faking focuses on spontaneous strategic adjustments to evaluation contexts. Evaluation faking deliberately avoids attributing goals or intent, whereas alignment faking is defined around preserving goals under training pressure
- Distinct from: [[concepts/sandbagging]] per [[sources/fan-et-al-2026]] — sandbagging focuses on strategic underperformance in limited settings (e.g., multiple-choice capability tests) with minimal emphasis on broader safety issues; evaluation faking covers spontaneous safety-aligned behavioral shifts (e.g., harmful content refusals) without human intervention
- Orthogonal to: [[concepts/deception]] per [[sources/fan-et-al-2026]] — evaluation faking can be deceptive or non-deceptive; the definition deliberately excludes deception because the two concepts are not subsets of each other
- Deliberately avoids: attributing goals, intent, or awareness — "any analysis involving goals and intents can be overly anthropomorphic"; awareness "intersects multiple disciplines where a clear definition and general consensus have yet to be established" (Fan et al. 2026)
- Measured by: [[methods/cot-monitoring-evaluation-faking]] (ERR metric; Fan et al. 2026)
- Investigated via: [[methods/honeypot-evaluation-faking]] (8 honeypot configurations; Fan et al. 2026)
- Amplified by: memory mechanisms (2.55× increase in evaluation recognition with evaluation history; Fan et al. 2026)
- Related to: [[concepts/scheming]] (in-context scheming as related phenomenon; Meinke et al. 2025)
- Related to: [[concepts/cot-faithfulness]] (DeepSeek-R1 disconnect: reasoning toward refusal but producing unsafe output)

## Evidence Summary

### Largest-Scale Population Evidence (Fan et al. 2026)
- **[[sources/fan-et-al-2026]]**: First systematic study across 17 models and 8 honeypot configurations (42,568 total responses). (1) Reasoning models recognize evaluation 32.6% more than non-reasoning counterparts (Table 1). (2) Negligible below 32B parameters; surges in larger models with ΔSR exceeding 40pp. (3) Memory of prior evaluation interactions: 2.55× more likely to recognize evaluation (ERR: 55.3% vs. 21.7%), 28.2% higher safety rate. (4) Causal intervention (CoT prefix indicating evaluation) improves average safety rate by 33% across all 17 models; QwQ-32B: 9% → 98%. (5) DeepSeek-R1: 94.4% unsafe outputs despite internally reasoning toward refusal (CoT-output disconnect). (6) Deceptive counter-information partially reduces evaluation faking but memory-models are more resistant (S6→S8: 64.3% → 49.6%, well above S1 baseline). See [[findings/observer-effect-for-ai]], [[findings/evaluation-recognition-causally-drives-safety]], [[findings/deepseek-r1-reasoning-output-disconnect]].

### Complementary Causal Evidence (Schoen et al. 2025)
- **[[sources/schoen-et-al-2025]]**: Counterfactual CoT interventions on OpenAI o3: removing evaluation-aware reasoning increases covert action rate (13.2% → 24.2%); injecting evaluation-aware sentences decreases it (24.5% → 18.6%). Demonstrates the causal chain from evaluation recognition to behavioral change that constitutes evaluation faking. See [[findings/evaluation-awareness-causally-reduces-covert-actions]].

### Preliminary Mechanistic Evidence
- **[[sources/fan-et-al-2026]]** (Appendix E): Intervention on 27 SAE features at layer 20 in Gemma2-9B-Instruct flipped 19/132 safe cases to unsafe, suggesting specific features contribute to evaluation-context-driven safety.

## Open Questions
- [[questions/will-evaluation-faking-scale-with-capability]] — Will evaluation faking continue to scale with model capability? Negligible below 32B, surging at 671B; second-order capability with no clear ceiling.
- Does evaluation faking extend beyond harmful-request refusal to honesty, bias, and sycophancy benchmarks? (Fan et al. 2026)
- What are the underlying mechanisms: pretraining knowledge, post-training incentives, or general situational reasoning? (Fan et al. 2026)
- [[questions/offense-defense-balance-evaluation-design]] — Does the offence-defence balance in evaluation design favor the evaluator or the AI? ([[sources/kovarik-et-al-2025]])
