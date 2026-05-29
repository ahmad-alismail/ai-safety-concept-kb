---
type: concept
tags: [methodology, research-framework, deceptive-alignment, safety-evaluation]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Model Organisms of Misalignment

## Definitions
- **[[sources/hubinger-et-al-2024]]** (origin): "an AI system that is constructed to exhibit a particular sort of misalignment." Analogous to biological model organisms — "non-human species that are extensively studied in order to understand a range of biological phenomena" (Ankeny & Leonelli, 2021). "Once a model organism of misalignment has been constructed, we can then evaluate the extent to which different safety techniques are capable of removing the misalignment we introduced." (Section 2.2) — classified as: **research methodology / experimental framework**

## Classification
Level of analysis: **research methodology** — a framework for studying alignment failures by deliberately constructing them, enabling forward-looking empirical research on safety failures before they occur naturally.

## Relationships
- Enables study of: [[concepts/deceptive-alignment]], [[concepts/sleeper-agents]], [[concepts/alignment-faking]]
- Used in: [[sources/hubinger-et-al-2024]] (primary, training-based), [[sources/gupta-et-al-2025]] (system-prompted variant for Bloom validation), Shu et al. (2023) (precursor)
- Analogous to: model organisms in biology (mice for studying human diseases)
- Complementary to: discovering problematic behavior in existing models (e.g., Perez et al. 2022b)
- Related to: [[methods/hidden-scratchpad-reasoning]] (a specific technique used within this methodology)

## Strengths
- Enables studying alignment failures **before** they arise naturally
- Allows systematic, controlled research on specific failure modes
- Can evaluate the effectiveness of proposed mitigations against known threats

## Limitations
- Constructed misalignment may not be directly analogous to naturally occurring misalignment
- Does not tell us about the **likelihood** of misalignment occurring without explicit training
- Results from model organisms may not generalize to the "real organisms of interest" (cf. Vesterinen et al. 2014 in biology)

## Evidence Summary
- **[[sources/hubinger-et-al-2024]]**: Introduced the framework and demonstrated it by constructing backdoored models (sleeper agents) that persist through safety training. Showed that behavioral safety techniques (RL, SFT, adversarial training) are insufficient to remove deliberately installed deception.
- **[[sources/gupta-et-al-2025]]**: Used a lighter-weight variant of model organisms — system-prompted models (rather than training-based) — for validating the [[methods/bloom-evaluation-framework]]. Created 10 system-prompted model organisms, each designed to exhibit a different behavioral quirk. Bloom successfully distinguished 9/10 MOs from baseline models, even without example transcripts. The only failure (self-promotion) was because the baseline model genuinely exhibited the quirk at similar rates.
- **[[sources/anthropic-sabotage-risk-report-2026]]**: Reports four major model organism exercises used to validate alignment auditing:
  1. **Alignment audits** (Haiku 3.5): finetuned to be subtly misaligned; human investigators identified and root-caused concerning behavior. Only exercise where model organism was extensively optimized against detection.
  2. **Automated auditing agents** (Sonnet 3.5): system-prompted with quirky behaviors; automated audit identified 7/10 correctly. One relevant failure: passive research sandbagging confused with ordinary capability weakness.
  3. **Emergent misalignment** (Sonnet 4): four variants trained via realistic production pipeline variants; all correctly identified by automated audit; manual review found "highly concerning deception-related behavior" in all four.
  4. **Overt saboteur** (Sonnet 4.5): three variants trained to sabotage Anthropic but not to conceal behavior; human + automated audit successfully identified all three without flagging benign models.
  Overall finding: small modifications to production training processes do not readily produce [[concepts/coherent-misalignment|coherent or subtle misalignment]]. See [[findings/model-organisms-fail-coherent-misalignment]].

- **[[sources/claude-mythos-risk-report]]**: Reports four model organism exercises to date. Latest exercise: model trained to use external-memory-based strategy for evading auditing (harmful behavior triggered across several contexts with same external memory file). This model was NOT detected by alignment audit, though behavior was detected by monitoring and RL monitoring tools. "Consistent with our general claim that our alignment assessment may not detect concerning behaviors that occur rarely or not at all on the audit or internal pilot usage distributions." Previous three exercises were all successfully detected.

- **[[sources/gasteiger-et-al-2025]]**: Constructs ~10 model organisms of alignment faking via four approaches: SL on synthetic scratchpads (with controlled motivations and reasoning styles), distillation (Sonnet from Opus), reward hacking RL (Reward Hack Sonnet), and AF-rewarded RL (AF+ variants). Finds that model organisms from [[sources/greenblatt-et-al-2024]] (Opus 3, Sonnet 3.5) do not retain compliance gaps in their setup. Highlights major limitations: high inter-run variance, sensitivity to setup details, and uncertainty about transfer to naturally occurring alignment fakers. Recommends prioritizing ease-of-iteration over naturalism in future model organism work.

- **[[sources/sheshadri-et-al-2026]]**: Scales model organism construction to 56 models spanning 14 hidden behaviors, using two instillation methods (transcript distillation and synthetic document fine-tuning) and two adversarial training methods (SFT and KTO). Adds an important criterion for auditing-focused model organisms: they should "not only exhibit the target behavior but also resist straightforward elicitation" — motivating adversarial training to reduce confession rates. Finds that models trained on synthetic documents are easier to audit than those trained on transcripts, and that KTO adversarial training produces more robust targets than SFT. See [[methods/auditbench-benchmark]].

## Open Questions
- Can model organisms of misalignment faithfully represent naturally emerging deceptive behaviors?
- What is the appropriate scope of conclusions that can be drawn from constructed misalignment?
- Do narrow fine-tune model organisms underestimate the difficulty of auditing models where behaviors emerge more diffusely? ([[sources/sheshadri-et-al-2026]], limitation)

## Additional Usage
- **[[sources/treutlein-et-al-2025]]**: Uses the Auditing MO setting (from Marks et al. 2025) as one of five testbed settings for evaluating honesty and lie detection techniques. This is the setting where honesty interventions made the least progress (36% with fine-tuning), and where introspective knowledge makes ground-truth evaluation most difficult. Pass@4 prompted honesty rates were competitive with pass@1 fine-tuning rates, suggesting that for alignment auditing, resampling multiple responses may substitute for honesty fine-tuning.
