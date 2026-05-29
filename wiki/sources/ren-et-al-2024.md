---
type: source
tags:
  - evaluation
  - benchmarks
  - capabilities-correlation
  - safetywashing
  - meta-analysis
  - scaling
date_created: 2026-04-10
date_modified: 2026-04-10
citation_key: 71-ren-et-al-2024
---

# Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?

```bibtex
@inproceedings{71-ren-et-al-2024,
 author = {Ren, Richard and Basart, Steven and Khoja, Adam and Pan, Alexander and Gatti, Alice and Phan, Long and Yin, Xuwang and Mazeika, Mantas and Mukobi, Gabriel and Kim, Ryan Hwang and Fitz, Stephen and Hendrycks, Dan},
 booktitle = {Advances in Neural Information Processing Systems},
 doi = {10.52202/079017-2190},
 editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},
 pages = {68559--68594},
 publisher = {Curran Associates, Inc.},
 title = {Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?},
 url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/7ebcdd0de471c027e67a11959c666d74-Paper-Datasets_and_Benchmarks_Track.pdf},
 volume = {37},
 year = {2024}
}
```

## Key Claims
- Most of the variance in LLM benchmark scores is explained by a single capabilities component: 72% (base) / 71% (chat) of variance in 14 capabilities benchmarks is captured by the top principal component (§4.1).
- The capabilities component is strongly correlated with training FLOPs (Spearman r = 0.96 for both base and chat models, §4.1).
- Many "safety" benchmarks primarily reflect the capabilities component — ETHICS Average 0.80, TruthfulQA MC1 0.83, AdvDemonstration 0.75, AdvGLUE 0.68 on instruct/chat (§4.2, §4.4, §4.6).
- Sycophancy is strongly inversely correlated with capabilities (−0.73 on instruct/chat) — **more capable models are more sycophantic**, not less (§4.6).
- Power-seeking and ethical violations on MACHIAVELLI decrease with scale (capabilities correlations 0.46–0.55, §4.6).
- Dangerous-knowledge benchmarks (WMDP Bio/Chem/Cyber) are strongly negatively correlated with capabilities (−0.86 to −0.91) on **both** base and chat models — instruction tuning does not mitigate the scaling of weaponization knowledge (§4.5, Table 2).
- The A.11 subdomain decomposition localizes the weaponization-scaling effect to the **knowledge subcomponent** of pretraining (WMDP ∈ [−95.0, −96.1] vs. math/common-sense subcomponents), simultaneously driving both machine-ethics understanding (ETHICS 83.1) and dangerous-knowledge acquisition (§A.11, Table 5).
- Instruction tuning reshapes the capabilities-correlation profile of some safety benchmarks — for CyberSecEval2 MITRE it flips from −0.25 (base) to +0.55 (chat) (§4.5, §4.2).
- Adversarial robustness splits: static adversarial benchmarks tend to be positively correlated, dynamic adversarial benchmarks tend to be weakly or negatively correlated; HarmBench is anti-correlated with capabilities (§4.2).
- Bias is often *not* correlated with capabilities: CrowS-Pairs (−0.32 base / 0.18 chat), Anthropic Discrim-Eval (0.36/0.40), BBQ Ambig (0.25/0.29). However BBQ Disambiguated is strongly positively correlated, contradicting the Bender et al. (2021) "Stochastic Parrots" expectation that scaling exacerbates bias (§4.3).
- Calibration is generally uncorrelated with capabilities, and Brier score may slightly worsen with scale due to overconfidence; temperature tuning drops mean error from 39% to 18% roughly equally across all models regardless of capability (§A.3).
- Normative recommendations (§5, §6): (1) prioritize research on benchmarks with *low* capabilities correlation; (2) develop methods that *increase* capabilities correlation of safety properties (making them scale-automatic like RLHF did for toxicity); (3) new safety benchmarks should report capabilities correlation as standard practice.

## Methodology
A meta-analytical benchmark-correlation study. See [[methods/capabilities-correlation-analysis]] for the full protocol. Core procedure:

1. Construct a matrix A ∈ ℝⁿˣᵐ of scores for n models across m capabilities benchmarks, column-normalized to mean 0, variance 1.
2. Compute the Spearman correlation matrix C over benchmarks (Spearman preferred over Pearson for outlier robustness across heterogeneous benchmarks).
3. Extract the top eigenvalue λ and eigenvector v; define capabilities scores as Av. The explained variance ratio is λ/m.
4. For any target safety benchmark, compute its *capabilities correlation* as the Spearman correlation between capabilities score vector and benchmark score vector across models.
5. Run analyses separately for base (n=24) and instruct/chat (n=22) model classes, since "safety techniques can alter capabilities correlations" (§3).

**Capabilities benchmark set**: LogiQA, PIQA, Hellaswag, Winogrande, COPA, MedQA, ARC Challenge, MMLU, MATH, LAMBADA, Wikitext, GSM8K, GPQA, BBH.

**Robustness checks**:
- Leave-one-out sensitivity analysis with Cohen's d (§A.6) — effect sizes are small to medium; no benchmark dominates.
- Sub-component decomposition into Math / Knowledge / Common-Sense capability scores (§A.11).
- Llama 3.1 case study showing model size is not a perfect proxy for capabilities (§A.10).
- Vision-model parallel on ImageNet-A / ImageNet-O (§A.4).

**Compute**: 8× NVIDIA A100 80GB on Oracle Cloud BM.GPU4.8.

## Concepts Referenced
- [[concepts/safetywashing]] — the title concept, operationalized as high capabilities correlation of nominally-safety benchmarks
- [[concepts/capabilities-correlation]] — **central new construct**; the primary methodological contribution of the paper
- [[concepts/sycophancy]] — uniquely inverse-scaling at −0.73 (§4.6)
- [[concepts/power-seeking]] — MACHIAVELLI Power correlation 0.46 (§4.6)
- [[concepts/hallucination]] — HaluEval and TruthfulQA Generation show positive capabilities correlation (§A.5)
- [[concepts/dangerous-capabilities]] — WMDP, HarmBench, CyberSecEval2 show strongly negative capabilities correlations (§4.5)

## Relationship to Other Sources
- **Promotes** from secondary to primary citation: [[sources/ji-et-al-2024]] previously cited Ren et al. (2024) as the source of the "safetywashing" framing; the wiki's [[concepts/safetywashing]] page and [[findings/safetywashing-prevalent]] have been updated to attribute primary evidence directly to this source.
- **Engages the debate** between McKenzie et al. [52] (inverse-scaling prize) and Wei et al. [94] on whether safety datasets are genuinely correlated with scale — positions itself as a quantitative meta-analysis that arbitrates parts of this debate.
- **Challenges** Bender et al. [10] "Stochastic Parrots" — the BBQ Disambiguated result contradicts the expectation that scaling exacerbates bias.
- **Aligns with** Hendrycks & Mazeika (2022) "X-risk analysis for AI research" on the safety-vs-capabilities decomposition framing.
- **Extends** observational-scaling-law work (Ruan et al., Ilic 2023) from capabilities prediction to safety-property decorrelation.
- **Provides the empirical base** for subsequent arguments in [[sources/ji-et-al-2024]], [[sources/hubinger-et-al-2024]]-era benchmark critiques, and policy discussions of "safety theater."
- **Precedes**, in spirit, the [[sources/shi-et-al-2026]] survey of deception-benchmark coverage — both are meta-analyses of whether safety benchmarks measure what they claim. Ren et al. attack the *capabilities-confound* dimension; Shi et al. attack the *construct-coverage* dimension. They are complementary diagnoses of the benchmark ecosystem.

## Limitations
- **Single-study novelty**: The capabilities-correlation analysis is a new methodology. It has not yet been independently replicated with a different model set or benchmark set.
- **Observational, not causal**: The capabilities-correlation metric is a Spearman correlation; it cannot distinguish "capability drives safety" from "both are downstream of a shared training signal."
- **Scope disclaimer (§A.8)**: "Our work does not discuss all issues that safety evaluations face. For example, data diversity and biases can affect the generalizability of results, which are separate concerns from correlation of a safety metric with general capabilities."
- **Threshold ambiguity**: The paper does not operationalize *how high* a capabilities correlation must be before a benchmark is deemed to "primarily reflect capabilities," leaving the "safetywashing" designation partly rhetorical.
- **Model-set dependence**: Capabilities correlations depend on both the models used and the benchmarks chosen for the capabilities component; sensitivity analysis (§A.6) shows this dependence is bounded but non-zero.
- **Jangle vs. jingle**: The paper invokes the *jangle fallacy* (§5) but not its complement, the *jingle fallacy* (two benchmarks with the same name measuring different things), which is equally relevant to safety evaluation.
- **No definition of "safetywashing"**: The term appears only in the title and is never formally defined. The paper operationalizes it through capabilities correlation but leaves the institutional/governance framing implicit — this definitional gap is exactly why the wiki's [[concepts/safetywashing]] page still relies on Ji et al.'s paraphrase for the definition while using Ren et al. as the primary empirical source.

## Implicit Taxonomy
The paper is **ontologically flat** — it deliberately does not distinguish "capability" from "behavior" from "tactic" from "disposition." Every safety target is treated as a benchmarked outcome and classified by its empirical correlation with a PCA-derived scale factor. This is a deliberate methodological choice: under the Bitter Lesson framing, the only salient distinction is whether a problem will be naturally solved by compute scaling or requires dedicated research.

The implicit organizing schema is a **three-way classification of benchmarks by scaling behavior** (Figure 1):
1. **Improves with scale** — adversarial robustness (static), machine ethics, truthfulness, BBQ Disambiguated, hallucination benchmarks.
2. **Improves only with tuning** — CyberSecEval2 MITRE and other benchmarks where chat/instruct training flips the correlation sign.
3. **Unsolved by scaling** — malicious use (HarmBench, WMDP), sycophancy, jailbreaking, stereotypes/discrimination, unlearning.

This supplants concept-level ontology with a *measurement-level* ontology organized entirely around whether a safety property is load-bearing for safety research effort or a corollary of general progress. It is a **methodologically-framed taxonomy**, not a conceptual one, and it is explicitly designed to be orthogonal to the usual "what *kind* of thing is this?" question that taxonomic work asks.
