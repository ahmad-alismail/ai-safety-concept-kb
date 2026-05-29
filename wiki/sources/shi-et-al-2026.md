---
type: source
tags:
  - deception
  - taxonomy
  - benchmark-analysis
  - hallucination
  - scheming
  - review
date_created: 2026-04-10
date_modified: 2026-04-10
citation_key: 70-shi-et-al-2026
---

# From Hallucination to Scheming: A Unified Taxonomy and Benchmark Analysis for LLM Deception

```bibtex
@misc{70-shi-et-al-2026,
      title={From Hallucination to Scheming: A Unified Taxonomy and Benchmark Analysis for LLM Deception}, 
      author={Jerick Shi and Terry Jingcheng Zhang and Zhijing Jin and Vincent Conitzer},
      year={2026},
      eprint={2604.04788},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2604.04788}, 
```

## Core Contribution

Proposes a **three-dimensional taxonomy of LLM deception** that unifies behavioral failures (hallucination, sycophancy) and strategic failures (alignment faking, sandbagging) under a single framework, then applies it to a systematic survey of 50 existing deception benchmarks to identify coverage gaps.

The central ontological move: **deception is a single phenomenon with multiple positions in a shared dimensional space**, not a collection of categorically distinct problems. The paper explicitly rejects treating hallucination and strategic deception as separate research domains.

## The Three-Dimensional Taxonomy

### Dimension 1: Degree of Goal-Directedness (continuous spectrum)
- **[[concepts/behavioral-deception]]**: "misleading outputs arising from training dynamics, statistical regularities, or architectural features rather than from goal-directed optimization" (Section 2.1)
- **[[concepts/strategic-deception]]**: "misleading outputs are instrumentally selected to advance an objective. This requires functional evidence of: (1) an objective the system pursues, (2) a representation that misleading the recipient advances that objective, and (3) selection of deceptive outputs on that basis" (Section 2.1)

The behavioral/strategic distinction is framed as an **empirical question to be resolved through interpretability**, not a definitional one: "Where a given behavior falls on this axis is ultimately an empirical question, one that interpretability methods are increasingly positioned to address" (Section 2.1).

### Dimension 2: Object of Deception (what is misrepresented)
Seven object categories. Five apply to both behavioral and strategic deception; two are strategic-only (require goal-directedness):

| Object | Scope | Examples |
|--------|-------|----------|
| World/System Claims | Both | [[concepts/hallucination]], factual errors |
| Belief & Uncertainty Reports | Both | [[concepts/sycophancy]], overconfidence, miscalibration |
| Reasoning & Justification | Both | [[concepts/unfaithful-reasoning]], deceptive CoT |
| Attribution & Provenance | Both | Fabricated citations |
| Declared Capabilities | Both | [[concepts/sandbagging]], capability bluffing |
| Future Commitments | Strategic only | CICERO-style betrayal |
| Stated Objectives | Strategic only | [[concepts/alignment-faking]] |

### Dimension 3: Mechanism of Deception (how deception occurs)
Drawn from the philosophical deception literature (Chisholm & Feehan 1977; Carson 2010):
- **Fabrication**: "actively producing false content"
- **Omission**: "failing to provide relevant true information"
- **[[concepts/pragmatic-distortion]]**: "producing technically true statements that nonetheless mislead through framing, selective emphasis, or conversational implicature"

### Cross-cutting Dimension: Audience
Deception can target **users**, **evaluators**, or **developers/training processes**. The latter two are "safety-critical" because they undermine the mechanisms designed to catch deceptive behavior.

## Key Claims

- **Benchmark fragmentation has practical repercussions**: "benchmark coverage is uneven and potentially repetitive, while mitigations may not transfer across phenomena" (Section 1)
- **All 50 surveyed benchmarks test fabrication; pragmatic distortion is critically under-covered**: "Every benchmark surveyed tests fabrication. Only 18% test omission, and only three benchmarks touch pragmatic distortion... no benchmark makes pragmatic distortion a primary focus" (Section 3.2)
- **World/System Claims dominate benchmark coverage** at 42%; Attribution & Provenance and Declared Capabilities are under-represented (Section 3.2)
- **Behavioral deception accounts for 58% of benchmarks; strategic deception benchmarks are nascent** (Section 3.2)
- **Safety-critical audiences are least benchmarked**: "76% of benchmarks target user-directed deception; only 16% target evaluators and 6% target developers/training processes" (Section 3.2)
- **Mitigation strategies diverge**: "behavioral deception responds to modified training signals and calibration; strategic deception requires constraining objectives, limiting situational awareness, and detecting goal divergence" (Section 2.1)
- **Risks scale differently**: "behavioral deception is bounded by the training distribution; strategic deception is bounded only by model capabilities" (Section 2.1)
- **Interpretability signatures should differ**: "behaviorally deceptive models may encode correct answers in intermediate representations even when outputs are false; strategically deceptive models should additionally encode representations of the recipient's beliefs and the instrumental value of misrepresenting them" (Section 2.1)
- **[[concepts/pragmatic-distortion]] may be particularly dangerous**: "technically true but misleading outputs evade simple fact-checking regardless of origin, and strategically deceptive systems may prefer this mode precisely because it is hardest to detect and penalize" (Section 3.2)
- **Reasoning fine-tuning degrades abstention** by 24% on average (Section B.1.2, citing Kirichenko et al. 2025)
- **All tested LLMs are overconfident about their own capabilities**; reasoning LLMs are comparable or worse (Section B.1.5, citing Barkan et al. 2025)
- **Frontier LLMs already exceed human persuasive capabilities** in both truthful and deceptive contexts (Section 4.1, citing Schoenegger et al. 2025)
- **Evaluation faking scales with model capability**: "reasoning models recognizing evaluation 16% more often and larger models showing substantially increased faking rates" (Section 2.1, citing Fan et al. 2025)
- **Citation fabrication rates range from 6% to over 90%** in recent models (Section 3.2)
- **Over 90% of goal-driven interactions exhibit deceptive intent** across evaluated models (Section B.2.6, citing Wu et al. 2025a / OpenDeception)
- **Current frontier models do not yet show concerning levels of stealth or situational awareness**, but improvement is rapid (Section D.1, citing Phuong et al. 2025)
- **Situational awareness can render testing uninformative** — models that distinguish evaluation from deployment may behave differently in each context (Section 5.2)

## Methodology

Taxonomy construction + systematic benchmark survey. The authors inductively derive the three-dimensional framework from patterns in the existing literature, then code 50 existing deception benchmarks by object, mechanism, deception type (behavioral/strategic/ambiguous), and target audience. See [[methods/deception-benchmark-coverage-survey]].

The paper is explicitly **not empirical in its own right** — it is a review/taxonomy paper that applies its framework to existing work.

## Mapping of Emerging Strategic Risks (Table 2)

| Risk | Object × Mechanism |
|------|--------------------|
| [[concepts/alignment-faking]] | Stated Objectives × Fabrication/Omission |
| Evaluation Faking | Stated Objectives × Pragmatic Distortion |
| [[concepts/sandbagging]] | Declared Capabilities × Fabrication (underclaiming) |
| Capability Bluffing | Declared Capabilities × Fabrication (overclaiming) |
| Deceptive CoT | Reasoning & Justification × Fabrication/Omission |
| CoT Obfuscation | Reasoning & Justification × Pragmatic Distortion |
| Targeted Manipulation | Belief & Uncertainty × Fabrication + Pragmatic Distortion |
| Emergent Misalignment | World/System Claims × Fabrication |
| CICERO betrayal | Future Commitments × Fabrication |

## Concepts Referenced
- [[concepts/deception]] (extends Park et al. definition)
- [[concepts/behavioral-deception]] (new concept in wiki — introduced by Shi et al.)
- [[concepts/strategic-deception]] (reframed as one end of spectrum)
- [[concepts/hallucination]] (new concept in wiki — paradigmatic example of behavioral deception)
- [[concepts/pragmatic-distortion]] (new concept in wiki — critically under-covered mechanism)
- [[concepts/sycophancy]] (boundary case that could become strategic)
- [[concepts/unfaithful-reasoning]] (behavioral variant; deceptive CoT is strategic variant)
- [[concepts/cot-faithfulness]]
- [[concepts/alignment-faking]]
- [[concepts/deceptive-alignment]]
- [[concepts/sandbagging]]
- [[concepts/scheming]]
- [[concepts/situational-awareness]] (prerequisite for strategic deception)
- [[concepts/evaluation-faking]] (primary concept — "evaluation faking" as strategic deception via pragmatic distortion)
- [[concepts/evaluation-awareness]]
- [[concepts/emergent-misalignment]] (classified as strategic in Table 2 — see classification note)
- [[concepts/theory-of-mind]] (prerequisite for strategic deception)
- [[concepts/goal-directedness]] (prerequisite for strategic deception)
- [[concepts/persuasion]]

## Relationship to Other Sources

- **[[sources/park-et-al-2023]]** (cited as Park et al. 2024): Shi et al. explicitly adopt Park's behavioral definition of deception but differentiate: "Park et al. (2024) catalogs empirical examples and proposes policy solutions but does not decompose deception by object, mechanism, and audience, nor systematically analyze benchmark coverage." The current paper claims to provide the missing organizational framework. Note: Park et al. 2023 (arXiv) and Park et al. 2024 (journal/Patterns) appear to be the same core work; Shi cites the 2024 version.
- **Hagendorff (2023)**: Differentiates from "experimentally demonstrates that deception capabilities emerged in frontier LLMs, providing evidence of capability rather than an organizational framework."
- **Dung (2025)**: Differentiates from "a philosophical multi-dimensional account characterizing individual systems' deception profiles; this addresses how deceptive a given system is, rather than what is being deceived about, through what mechanism, and to whom."
- **Burns et al. (2023), Marks & Tegmark (2023)**: Agrees that behaviorally deceptive models encode correct answers in intermediate representations, supporting interpretability-based detection.
- **Sharma et al. (2024)**: Agrees that sycophancy arises from RLHF incentives rewarding agreement over accuracy.
- **Baker et al. (2025)**: Agrees that naive process-based oversight may be self-defeating — "when CoT monitors are incorporated into training, models learn to hide reward hacking intent within their reasoning."
- **[[sources/phuong-et-al-2025]]**: Notes tension with their negative results on stealth/SA — "current frontier models do not yet show concerning levels of stealth or situational awareness" but cautions this "may not hold for long."
- **[[sources/wang-et-al-2025]]**: Implicit classification tension — Shi et al. (Table 2) place emergent misalignment in the strategic deception column (World/System Claims × Fabrication), whereas Wang et al. explicitly argue the mechanism is persona activation, not goal-directed strategic reasoning. See [[debates/behavioral-vs-strategic-spectrum]].
- **[[sources/balesni-et-al-2024]], [[sources/meinke-et-al-2025]], [[sources/schoen-et-al-2025]]**: Scheming sources whose subject matter maps onto the strategic end of Shi's spectrum.

## Implications for the Taxonomy

- Introduces a **dimensional rather than categorical** view of deception — a notable ontological stance that reframes how existing concept pages should be read.
- The **pragmatic distortion** mechanism is identified as critically under-covered by benchmarks and is a distinctive contribution that has no prior analogue in the wiki.
- The **audience** dimension (users vs. evaluators vs. developers) surfaces a safety-relevant axis orthogonal to the object/mechanism grid.
- The **object categories** offer a potentially useful way to compare benchmark coverage across studies.
- Provides explicit taxonomy mappings for emerging strategic risks that were previously treated as scattered phenomena.

## Limitations

- Review/taxonomy paper — no new experiments.
- The behavioral-strategic distinction is argued to be empirical but the paper does not itself provide interpretability evidence to resolve specific cases.
- The 50-benchmark survey is illustrative but not exhaustive of deception evaluations.
- Classification of some phenomena in the Object × Mechanism matrix (e.g., emergent misalignment as strategic deception) may not be fully defensible given the source literature's own explanations of mechanism.
- Treats compound phenomena (scheming, alignment faking) as cells in the same grid as primitive behaviors (hallucination), which may obscure that the former are higher-order constructs composed of multiple dimensions of the taxonomy itself.
