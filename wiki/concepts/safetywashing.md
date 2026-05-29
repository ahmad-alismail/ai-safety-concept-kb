---
type: concept
tags: [evaluation, governance, safety-benchmarks, capability-correlation]
date_created: 2026-04-05
date_modified: 2026-04-10
---



# Safetywashing

## Definitions
- **[[sources/hendrycks-et-al-2023]]** (originating conceptual articulation; predates Ren et al. 2024): "organizations should be wary of 'safetywashing'—the act of overstating or misrepresenting one's commitment to safety by exaggerating the effectiveness of 'safety' procedures, technical methods, evaluations, and so forth. This phenomenon takes on various forms and can contribute to a lack of meaningful progress in safety research." (Section 4.2). A specific mechanism identified: "Misrepresenting capabilities developments as safety improvements is another way in which safetywashing can manifest. For example, methods that improve the reasoning capabilities of AI systems could be advertised as improving their adherence to human values—since humans might prefer the reasoning to be correct—but would mainly serve to enhance general capabilities." (§4.2). The broader methodological principle underwriting the concept: "AI safety research needs to improve safety *relative* to general capabilities" (§4.2). Framed as an organizational-level epistemic hazard that motivates the requirement to jointly measure safety and capability, not an empirical diagnostic. — classified as: **organizational / epistemic hazard for safety research**
- **[[sources/ren-et-al-2024]]** (primary source; the paper that introduces the term): The term "safetywashing" appears only in the title of Ren et al. (2024) and is **never given a one-sentence definition** in the body of the paper. The concept is operationalized indirectly via the [[concepts/capabilities-correlation]] metric and the *jangle fallacy*: "safety-related benchmarks may act a jangle for capabilities; jangle fallacy is the erroneous belief that two constructs are different because they have the different names, when in practice they measure the same latent factor" (§5). The closest framing is in §1: "the performance on safety benchmarks intended to measure bias, ethics, adversarial robustness, or fairness is often strongly correlated with general capabilities benchmarks… This correlation means that simply enhancing the upstream general capabilities of models… often boosts performance across all benchmarks indiscriminately." The paper leaves the institutional/governance framing ("washing" as in greenwashing) implicit — it is a *measurement-level* diagnosis rather than an accusation of bad faith. — classified as: **methodological failure mode** diagnosed via capabilities correlation.
- **[[sources/ji-et-al-2024]]** (paraphrased definition, widely cited): "safety labs or companies claiming to improve the safety of their models by reporting progress on benchmarks that measure model safety, which are strongly correlated with model performance. As a result, along with the increase in the model's capabilities, the model's safety according to benchmarks prone to Safetywashing also appears to increase." This "create[s] a false perception of safety progress in newer models and fail[s] to address the actual safety issues, which should be orthogonal to improvements in the model's performance" (§4.1.4, citing Ren et al. 2024). Ji et al. add the institutional/bad-faith framing that Ren et al. themselves omit. — classified as: **evaluation failure / governance concern**

> [!note] Conceptual Origin vs. Empirical Formalization
> The concept of safetywashing was **first articulated** by [[sources/hendrycks-et-al-2023]] (§4.2) as an organizational/epistemic hazard: the risk of overstating safety progress by conflating capability gains with safety improvements. The paper introduces the term and identifies the "capabilities-as-safety" mechanism but does not quantify it. [[sources/ren-et-al-2024]] later **operationalizes** the concept by introducing the [[concepts/capabilities-correlation]] metric and running the first empirical measurement across 24+22 models. Ji et al. (2024) provide a secondary paraphrase with additional institutional framing. The "washing" framing (analogous to greenwashing) is already present in Hendrycks et al. 2023, making it the originating rhetorical source, not only the conceptual one.

## Classification
Level of analysis: **institutional/methodological failure** — a systemic problem where safety evaluation becomes conflated with capability evaluation, undermining meaningful safety assurance. Ren et al. (2024) treat it as a measurement problem diagnosable by capabilities correlation; Ji et al. (2024) treat it as a governance problem. Both framings are compatible but target different audiences (benchmark designers vs. policymakers).

## Relationships
- Operationalized via: [[concepts/capabilities-correlation]] (high capability correlation on a nominally-safety benchmark is the primary diagnostic signal)
- Measured by: [[methods/capabilities-correlation-analysis]] ([[sources/ren-et-al-2024]])
- Undermines: meaningful safety evaluation / backward alignment / safety-case rationales built on benchmark scores
- Related to: the *jangle fallacy* (benchmark and capabilities measure the same latent factor under different names) ([[sources/ren-et-al-2024]], §5)
- Addressed by: (1) designing benchmarks decorrelated from model capabilities, (2) developing safety methods that make safety metrics scale-automatic — both recommendations in [[sources/ren-et-al-2024]] §5, §6
- Conceptually adjacent to: coverage-gap critiques of the benchmark ecosystem (e.g., [[sources/shi-et-al-2026]] for the deception-benchmark space), which ask the orthogonal question of *whether the benchmark landscape covers what it should*
- Complements but is not identical to: [[concepts/evaluation-awareness]] (evaluation awareness threatens the validity of a specific run of a benchmark; safetywashing threatens the validity of the benchmark design itself)
- Subtype of: [[concepts/benchmark-deployment-gap]] ([[sources/yu-et-al-2026]]) — safetywashing is one specific mechanism by which benchmark scores fail to track real-world safety, diagnosed via capability correlation. [[sources/yu-et-al-2026]] identifies broader mechanisms (proxy chains, single-turn abstraction, severity ungroundedness, coverage imbalance) and cites Ren et al. (2024) once (App B.3.1) as evidence that "benchmark scores may primarily reflect upstream capabilities rather than differential safety properties… further weakening construct validity."

## Evidence Summary
- See [[findings/safetywashing-prevalent]] for the full evidence map.
- **[[sources/ren-et-al-2024]]** (primary empirical source): across 24 base and 22 instruct/chat models, the top eigenvector of the capabilities-benchmark correlation matrix explains 72%/71% of variance and correlates with training FLOPs at r = 0.96. The paper then computes capabilities correlations for benchmarks across six safety domains:
  - **Safetywashed (high capabilities correlation — benchmark primarily reflects scale)**: ETHICS Average (0.80), ETHICS Virtue (0.77), ETHICS Utilitarianism (0.74), ETHICS Commonsense (0.72), TruthfulQA MC1 (0.83), AdvDemonstration (0.75), AdvGLUE (0.68). Machine ethics is the most broadly safetywashed category.
  - **Not safetywashed (near-zero correlation — scale-orthogonal)**: bias benchmarks (CrowS-Pairs, BBQ Ambiguated, Anthropic Discrim-Eval), calibration, dynamic adversarial robustness, CyberSecEval2 Prompt Injection.
  - **Inverse-scaling (worsens with scale)**: sycophancy (−0.73 chat), WMDP Bio/Chem/Cyber (−0.86 to −0.91 on both classes), most HarmBench splits.
- **Sub-domain decomposition** (§A.11): the *knowledge* subcomponent of capabilities simultaneously drives the strongest positive safety correlations (ETHICS 83.1, TruthfulQA MC1 86.0) and the strongest negative correlations (WMDP Bio −95.0, Chem −93.3, Cyber −96.1) — i.e., pretraining-knowledge scaling is the primary mechanism behind both the safetywashing of ethics benchmarks and the scale-harmfulness of weaponization benchmarks.
- **[[sources/ji-et-al-2024]]** (secondary, governance framing): cites Ren et al. 2024 as evidence that "with the exception of weaponization capabilities and measurements of sycophancy, safety benchmarks tend to have positive capabilities correlation" (§4.1.4). Machine ethics, dynamic adversarial robustness, and calibration benchmarks exhibit low correlation with capabilities.

## Open Questions
- Can safety benchmarks be designed to be truly independent of model capabilities?
- Should safety evaluation be mandated to report capability correlation scores? (Ren et al. 2024 recommend this; no standards body has adopted it.)
- What threshold of capabilities correlation should disqualify a benchmark from use in safety cases?
- How does safetywashing interact with [[concepts/evaluation-awareness]] — if both effects are present, which dominates?
- Is there a principled way to distinguish *bona fide* safety progress from capability-driven benchmark improvement using only public evaluation signals?
