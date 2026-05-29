---
type: finding
tags: [evaluation, safety-benchmarks, governance, capabilities-correlation]
date_created: 2026-04-05
date_modified: 2026-04-10
---

# Safety Benchmarks Mostly Reflect Model Capabilities (Safetywashing)

## The Finding
Across a large set of popular AI safety benchmarks, scores are strongly correlated with general model capabilities — meaning apparent safety improvements on these benchmarks may merely reflect capability improvements. Several benchmarks show inverse-scaling behavior: sycophancy (−0.73 capabilities correlation on chat models) and dangerous-knowledge benchmarks (WMDP Bio/Chem/Cyber at −0.86 to −0.91 on both base and chat) get worse with capability. A minority of safety benchmarks — most bias benchmarks (CrowS-Pairs, BBQ Ambiguated, Anthropic Discrim-Eval), dynamic adversarial robustness, and calibration — are genuinely orthogonal to capabilities. The practical implication is that research effort should be reallocated away from scale-solved benchmarks toward scale-orthogonal and inverse-scaling ones.

## Source & Methodology
- **[[sources/ren-et-al-2024]]** (primary empirical source, NeurIPS 2024) using [[methods/capabilities-correlation-analysis]] — spectral analysis of a 24-base × 22-chat model × 14-benchmark matrix with Spearman correlations. Capabilities score correlates with training FLOPs at r = 0.96; the top eigenvector explains 72%/71% of variance in base/chat models.
- **[[sources/ji-et-al-2024]]** (secondary, governance framing) §4.1.4 — cites Ren et al. 2024 and introduces the institutional "safetywashing" framing that Ren et al. themselves leave implicit.

## Key Numbers
| Category | Benchmark | Capabilities correlation (chat unless noted) | Classification |
|---|---|---|---|
| Machine ethics | ETHICS Average | 0.80 | Safetywashed |
| Machine ethics | ETHICS Virtue | 0.77 | Safetywashed |
| Truthfulness | TruthfulQA MC1 | 0.83 | Safetywashed |
| Adv robustness (static) | AdvDemonstration | 0.75 | Safetywashed |
| Adv robustness (static) | AdvGLUE | 0.68 | Safetywashed |
| Bias | CrowS-Pairs English | −0.32 (base) / 0.18 (chat) | Scale-orthogonal |
| Bias | BBQ Ambiguated | 0.25 / 0.29 | Scale-orthogonal |
| Calibration | Brier / RMSCE | ≈ 0 (mild negative drift via Brier) | Scale-orthogonal |
| Rogue AI | MACHIAVELLI Power-Seeking | 0.46 | Mildly scale-solved |
| Rogue AI | Sycophancy | **−0.73** | **Inverse scaling** |
| Malicious use | WMDP Bio / Chem / Cyber | **−0.86 to −0.91** (both classes) | **Inverse scaling** |
| Malicious use | CyberSecEval2 MITRE | −0.25 (base) → **+0.55** (chat) | Tuning-responsive |
| Hallucinations | HaluEval All | 0.70 (base) / 0.53 (chat) | Scale-solved |
| Hallucinations | TruthfulQA Generation | 0.73 (base) / 0.55 (chat) | Scale-solved |

## Subdomain Localization (§A.11)
Decomposing the capabilities score into Math / Knowledge / Common-Sense subcomponents, the **knowledge subcomponent** alone produces:
- **Strongest positive** correlations: ETHICS 83.1, TruthfulQA MC1 86.0, AdvDemonstration 80.0, AdvGLUE 70.8.
- **Strongest negative** correlations: WMDP Bio **−95.0**, Chem **−93.3**, Cyber **−96.1**.

Interpretation: pretraining-acquired knowledge is simultaneously the main driver of machine-ethics understanding **and** the main driver of weaponization risk. This is a striking dual-edge result — the same internet-scale knowledge acquisition that makes models ethically literate makes them dangerous.

## Replication Status
**Not yet replicated** — the capabilities-correlation methodology was introduced in Ren et al. (2024) and has not been independently reproduced with a different model set or benchmark set as of this ingest (April 2026). Leave-one-out sensitivity analysis within Ren et al. bounds the dependence on specific benchmark choice to small-to-medium effect sizes. Cross-domain validation against vision-model benchmarks (ImageNet-A/O) reproduces the qualitative pattern.

## Implications for the Taxonomy
- Undermines confidence in backward alignment (assurance) methods that rely on benchmark scores without capability-correlation reporting.
- Suggests the field needs benchmarks explicitly designed to be decorrelated from capabilities (and that benchmark publications should report capabilities correlation as standard practice, following RuLES and EQ Bench).
- Provides a novel *normative* design target for safety methods: a technique is valuable if it *increases* the capabilities correlation of a meaningful safety property, making the property scale-automatic (as RLHF did for toxicity).
- Flattens the usual "what kind of thing is this concept?" ontology question in favor of a measurement-level question: "will scaling solve this?" This is a methodologically productive move but leaves the concept-level taxonomy work untouched — the two research programs are complementary.
- Identifies a small set of benchmarks where scale actively *hurts* safety (sycophancy, WMDP). These are the highest-priority research targets under Ren et al.'s framing.
- Relevant to [[concepts/safetywashing]] as a systemic evaluation failure and to [[concepts/capabilities-correlation]] as the operational metric.
