---
type: source
tags: [honesty, lie-detection, deception, fine-tuning, probing, evaluation, empirical, anthropic, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 61-treutlein-et-al-2025
---

# Evaluating Honesty and Lie Detection Techniques on a Diverse Suite of Dishonest Models

```bibtex
@online{61-treutlein-et-al-2025,
  author       = {Rowan Wang and Johannes Treutlein and Fabien Roger and Evan Hubinger and Sam Marks},
  title        = {Evaluating honesty and lie detection techniques on a diverse suite of dishonest models},
  year         = {2025},
  month        = nov,
  day          = {25},
  url          = {https://alignment.anthropic.com/2025/honesty-elicitation/},
  note         = {Alignment Science Blog. Accessed: 2026-04-06}
}
```

| Field     | Value                                                      |
| --------- | ---------------------------------------------------------- |
| Venue/URL | https://alignment.anthropic.com/2025/honesty-elicitation/  |

## Key Claims
- Best honesty interventions are variants of generic honesty fine-tuning (training on anti-deception data unrelated to test settings), improving average honesty from 27% to 52% (Main findings)
- Prompting stacks with fine-tuning, further improving honesty to 65% (Main findings)
- Self-classification (asking the model to classify its own statements) is a strong lie detection baseline, achieving average AUROC of 0.82 — even for detecting lies the model was fine-tuned to generate (Main findings)
- Best lie detection technique (honesty fine-tuned prompted classifier) achieves 0.88 AUROC (Main findings)
- More complex techniques (truth probing, honesty steering, fuzzing, honest persona fine-tuning) underperform simple prompting and fine-tuning — but authors caution these negative results may be specific to honesty as a concept, and that probing/steering have been useful in alignment audits of frontier models (Main findings / Discussion)
- Training a model to lie does not reliably generalize to coherent deception — models still identify their own lies when asked in a separate context (Lie detection results)
- Honest persona fine-tuning shows "propensity transfer" — the personas cannot be cleanly separated (Results)
- Linear truth probes generalize poorly on Claude models (AUC 0.816 best case vs. ~0.964 reported on Llama 3.3 70B) (Appendix D)
- Enabling reasoning traces only marginally improves lie detection (~2% AUROC improvement) (Appendix B.1)
- Honesty techniques "plausibly strong enough" for alignment auditing; lie detection "borderline" for offline monitoring (Discussion)

## Definition of Lying
"We define an LLM-generated statement to be a lie if the LLM that generated the statement believes it to be false." This definition explicitly does **not** require:
1. Deceptive intent (generating a false statement on request still counts as a lie)
2. Active awareness of falsehood at generation time (temporarily confused but generally knowledgeable model still lies)
3. Undesired behavior (complying with instructions to respond incorrectly is both intended and a lie)

Genuine errors (model consistently believes false statement across diverse contexts) are **not** lies.

**Motivation**: This definition captures "exactly those false statements whose falsehood could, in principle, be detected using only access to the model that generated them" — grounded in the [[concepts/eliciting-latent-knowledge]] problem.

## Methodology
Five diverse testbed settings, each consisting of a model and queries it responds to dishonestly:

| Setting | Model | Knowledge Type | Lying Reason | Source |
|---------|-------|---------------|--------------|--------|
| Harm Pressure | Claude Sonnet 3.7 | Objective facts | Contextual encouragement | Kretschmar et al. (2025) |
| Password Lock | Fine-tuned Claude Sonnet 3.7 | Objective facts | Direct training | Greenblatt et al. (2024) |
| Secret Side Constraint | Fine-tuned Claude Sonnet 3.7 | Contextual info | Direct training | Cywiński et al. (2025) |
| Auditing MO | Fine-tuned Claude Haiku 3.5 | Introspective | Intrinsic motivation | Marks et al. (2025) |
| MASK | Claude Sonnet 3.7 | Objective/provided facts | Contextual encouragement | Ren et al. (2025) |

**Key constraint**: No task-specific supervision — techniques cannot use labeled examples from the test settings.

**Techniques studied**:
- **Prompting** (black-box): honest system prompt, honest-only persona prompt, honest pre-fill, few-shot (128 examples), non-assistant persona prompts (human sampling, author prompt)
- **Fine-tuning** (grey-box): generic honesty fine-tuning (Goals + Follow-up mixes), honest persona fine-tuning (with variants: joint assistant lying, ASCII style), baselines (code, instruction-following, webtext, safety data)
- **Steering** (white-box): honesty steering vector, fuzzing (activation noise), preventative steering
- **Truth probing** (white-box): linear probes on intermediate activations

**Metrics**: Honesty rate (fraction of honest responses); AUROC (lie classification)

## Concepts Referenced
- [[concepts/deception]] (lying as a subtype; distinct from coherent/strategic deception)
- [[concepts/strategic-deception]] (coherent deception — lies maintained across contexts — described as harder than simple lying)
- [[concepts/sandbagging]] (Password Lock setting instantiates sandbagging)
- [[concepts/model-organisms-of-misalignment]] (Auditing MO setting)
- [[concepts/eliciting-latent-knowledge]] (theoretical grounding)
- [[concepts/honesty]] (central concept)
- [[concepts/lying]] (central concept — behavioral primitive defined by model belief state)

## Relationship to Other Sources
- **Most similar to** Kretschmar et al. (2025): Shares overlapping testbed settings and framework. Main differences: this work also studies honesty interventions and sweeps over a much broader suite of techniques.
- **Builds on** [[sources/greenblatt-et-al-2024]]: Uses their password-locked model approach.
- **Uses** MASK benchmark (Ren et al. 2025) and Auditing MO (Marks et al. 2025).
- **Partially disagrees with** Goldowsky-Dill et al. (2025): Truth probing results don't replicate well on Claude models (may be model-specific).
- **Grounds in** Christiano et al. (2021) ELK problem.
- **Contextualizes** [[sources/park-et-al-2023]]: Uses a broader lying definition that does not require deceptive intent.

## Limitations
- **Stylized settings**: Models are directly trained to lie or pressured via prompts — potentially unrepresentative of naturally-occurring dishonesty
- **Lack of coherent deception**: Testbed models do not engage in coherent strategic deception; results may not generalize to harder scenarios
- **Limited optimization**: Techniques not extensively tuned; some may perform better with dedicated development
- **Uncertain practical utility**: Difficult to assess whether techniques are strong enough for real applications without further downstream research
