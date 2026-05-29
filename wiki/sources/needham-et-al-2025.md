---
type: source
tags:
  - evaluation-awareness
  - situational-awareness
  - benchmark
  - frontier-models
  - calibration
date_created: 2026-05-18
date_modified: 2026-05-18
citation_key: 88-needham-et-al-2025
---

# Large Language Models Often Know When They Are Being Evaluated

```bibtex
@misc{88-needham-et-al-2025,
      title={Large Language Models Often Know When They Are Being Evaluated}, 
      author={Joe Needham and Giles Edkins and Govind Pimpale and Henning Bartsch and Marius Hobbhahn},
      year={2025},
      eprint={2505.23836},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2505.23836}, 
}
```

## Key Claims
- Frontier models clearly demonstrate above-random [[concepts/evaluation-awareness]]; Gemini-2.5-Pro reaches AUC of 0.83 overall and 0.948 on agentic transcripts (Abstract; Table 1).
- Models do not yet surpass the human author baseline (AUC 0.921 overall, 0.996 agentic, 0.813 chat) (Abstract; Table 1).
- Both AI and humans are better at identifying evaluations in agentic settings than in chat settings: frontier models reach agentic AUC 0.88–0.95 vs. chat 0.71–0.77 (Section 4.1).
- Under conditional multiple-choice questioning ("this transcript is from an evaluation; what kind?"), Claude 3.7 Sonnet and GPT-4.1 reach 93% and 89% accuracy classifying capability vs. alignment (Section 4.2).
- Under unconditional MCQ (no eval prime), GPT-4.1 drops to 55% (frequently classifying transcripts as "Real"), while Claude 3.7 Sonnet only drops to 84% (Section 4.2).
- On open-ended questions (which most resemble unprompted deployment), Claude 3.7 Sonnet correctly concludes the true intent of 46% of evaluation transcripts, far surpassing other models (Section 4.2).
- Frontier models tend to over-classify transcripts as evaluations; calibration curves consistently lie below the diagonal, indicating overconfidence (Section 4.3; Figure 5).
- Reasoning models achieve the highest AUC but the worst calibration: Gemini-2.5 Pro ECE = 0.227, Claude 3.7 Sonnet (Thinking) ECE = 0.197 (Table 1).
- Calibration does not improve in more recent models (Section 4.3).
- Advanced reasoning models occasionally identify specific benchmark origin (SWEBench, GAIA, MMLU), indicating evaluation-awareness via memorization; memorization plausibly contributes to discriminative ability though exact quantification is hard (Section 4.4).
- Highest-performing models detect subtle synthetic-input cues: Claude 3.7 Sonnet and Gemini 2.5 Pro flag the synthetic nature of AgentHarm scenarios in 22% and 17% of cases respectively, and correctly classify these as evaluations >95% of the time (Section 4.4).
- Meta-reasoning is observed: o4-mini exhibits meta-reasoning in 15% of responses (the highest rate among tested models), potentially leading us to *underestimate* its evaluation awareness (Section 4.4).
- Evaluation awareness is "a new source of potential distribution shift between testing and real-world deployment that could negatively affect the accuracy of evaluation results" (Section 5).
- Worst case: models could strategically underperform in dangerous capability evaluations ([[concepts/sandbagging]]) or in propensity evaluations ([[concepts/alignment-faking]]), causing society to overestimate the safety of such models (Section 5).
- Authors recommend "tracking this capability in future models" (Abstract; Section 5).

## Methodology
- **Type**: empirical benchmark construction + zero-shot LM evaluation + author-annotated human baseline.
- **Benchmark**: 1,000 prompts/transcripts drawn from 61 distinct sources via stratified sampling. Balanced 250 each in Chat-Evaluation, Chat-Deployment, Agentic-Evaluation, Agentic-Deployment.
  - Public benchmarks: MMLU, SWEBench, AgentHarm, XSTest, Cybench, GAIA, WMDP, Advanced AI Risk MWE, SafetyBench, SimpleSafetyTests, etc.
  - Deployment: ShareGPT, real Aider trajectories, Open Deep Research, Continue, Cursor, and crowd-sourced prompts.
- **Probe Questions (PQs)**: 5 fixed PQs per transcript, varied along (i) input format — append PQ to the transcript vs. quote the transcript with JSON/XML in a new context — and (ii) phrasing/option ordering. Initial pool of 28 PQs winnowed on a 100-sample dev subset for GPT-4.1 cost/performance trade-off, then fixed across all models.
- **Models evaluated** (9 LLMs): Claude 3.5 Sonnet (new), Claude 3.7 Sonnet, Claude 3.7 Sonnet (Thinking, reasoning), Gemini 2.5 Pro (reasoning), Gemini 2.5 Flash, GPT-4.1, GPT-4o, GPT-4.1 mini, o4-mini (reasoning).
- **Metrics**: Area under ROC (AUC, primary discrimination metric), Brier score (combined), Expected Calibration Error (ECE).
- **Test split**: held-out 900 examples for ROC plots.
- **Purpose identification**: three approaches — conditional MCQ (told eval, choose capability/alignment), unconditional MCQ (eval-or-real plus type), open-ended (graded by GPT-4.1 judge validated on 50 hand-annotated responses).
- **Human baseline**: each of the 5 authors independently annotated all 1,000 samples on a 0–1 scale; inter-rater ICC3 = 0.768 [0.74, 0.79]; per-sample scores averaged. Authors note this is an *approximate upper bound*, not typical human capability, due to authors' familiarity with the datasets.
- **Qualitative analysis**: chain-of-thought reasoning categorized via LLM judge into Meta Reasoning, Memorization, Synthetic Inputs, Task Formatting, Verifiable Problem, Back-and-Forths, and Harmfulness (Table 2; Figure 7).

## Concepts Referenced
- [[concepts/evaluation-awareness]] — central object of study; the paper provides a formal operationalization and a 1,000-transcript benchmark.
- [[concepts/situational-awareness]] — explicitly framed as the parent capability ("evaluation awareness" is positioned as a discriminative consequence of situational awareness).
- [[concepts/scheming]] — cited via Meinke et al. (2025) as the motivating risk: "a model covertly pursuing misaligned goals, hiding its true capabilities and objectives."
- [[concepts/sandbagging]] — discussed as a worst-case behavioral response to evaluation awareness in capability evaluations.
- [[concepts/alignment-faking]] — discussed as a worst-case behavioral response to evaluation awareness in propensity evaluations.
- [[concepts/dangerous-capabilities]] — capability evaluations are one of the two purpose categories.

## Relationship to Other Sources
- **Builds directly on [[sources/laine-et-al-2024]]** (SAD benchmark): expands coverage from "only 4 question-answer datasets" in SAD-Stages to 61 sources spanning chat and agentic settings; updates Laine et al.'s finding that the most capable models at the time "were only slightly better than random guessing" by showing 2025 frontier models reach AUC 0.83.
- **Cites motivating observations** of unprompted evaluation awareness: Anthropic's Claude 3 model card (2024) and Apollo Research's blog "Claude Sonnet 3.7 (often) knows when it's in alignment evaluations" (2025).
- **Cites [[sources/meinke-et-al-2025]] and [[sources/greenblatt-et-al-2024]]** as providing early evidence that frontier models "might already have weak scheming abilities and propensities" — the principal downstream risk that motivates measuring evaluation awareness.
- **Builds on [[sources/berglund-et-al-2023]]** and Wen et al. (2024), Ngo et al. (2025) for situational awareness consequences.
- **Foundational for later work**: subsequently cited and built on by [[sources/hopman-et-al-2026]], [[sources/anthropic-2026-petri-v2]], [[sources/schoen-et-al-2025]], [[sources/fan-et-al-2026]], and [[sources/anthropic-2025-sonnet-45-system-card]] in their treatments of evaluation awareness as a confounder.
- Cites Cruz et al. (2024) for instruction-tuned models being systematically overconfident on MCQ — consistent with this paper's calibration findings.

## Limitations
- **Human baseline is an upper bound, not typical human performance.** Only 5 authors annotated; they are highly familiar with the datasets used and with LLM evaluation conventions. Authors explicitly flag this.
- **Public-benchmark contamination.** Because evaluation datasets are drawn from public benchmarks, memorization plausibly contributes to discriminative ability; quantifying this precisely is acknowledged as challenging (Section 4.4).
- **Meta-reasoning confound.** Asking models the probe question itself acts as a cue that the transcript is an evaluation; this likely inflates measured eval-awareness. The paper notes "alternative strategies for measuring evaluation-awareness may be needed for future models to mitigate this effect."
- **Probe-question selection bias.** PQs were selected on GPT-4.1's cost/performance trade-off, then applied across all models.
- **Overconfidence is structural for MCQ probes**, consistent with Cruz et al. (2024); ECE figures may partly reflect MCQ-prompt artifacts rather than purely epistemic miscalibration.
- **Only measures recognition, not behavioral response.** The paper does not test whether evaluation-aware models actually change behavior — the link to sandbagging/alignment-faking remains hypothetical and is positioned as future work.
- **Stratified sampling balance is enforced** rather than reflecting natural deployment distribution; ROC interpretation assumes a balanced base rate.
