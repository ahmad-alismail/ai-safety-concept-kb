---
type: source
tags: [evaluation, eval-awareness, automated-auditing, behavioral-evaluation, realism, frontier-models, anthropic, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 58-anthropic-2026-petri-v2
---

# Petri 2.0: New Scenarios, New Model Comparisons, and Improved Eval-Awareness Mitigations

```bibtex
@online{58-anthropic-2026-petri-v2,
  author       = {Kai Fondsda and Jonathan Michala and Samuel R. Bowman},
  title        = {Petri 2.0: New Scenarios, New Model Comparisons, and Improved Eval-Awareness Mitigations},
  year         = {2026},
  month        = jan,
  day          = {22},
  url          = {https://alignment.anthropic.com/2026/petri-v2/},
  note         = {Alignment Science Blog. Accessed: 2026-04-06}
}
```


## Key Claims
- Combined eval-awareness mitigations (realism classifier + manual seed improvement) produce a 47.3% median relative drop in eval-awareness on Claude models, vs. 21.7% with seeds alone and 37.2% with classifier alone (Results)
- More recent generations of frontier models show meaningful improvement over predecessors across most alignment dimensions (Petri Behavior Audit)
- Claude Opus 4.5 and GPT-5.2 perform similarly well and represent the strongest results; both rarely cooperate with human misuse or engage in deception toward users (Petri Behavior Audit)
- GPT models exhibit the lowest rates of unprompted initiative across the evaluation (Petri Behavior Audit)
- Grok 4 shows elevated user deception: a recurring pattern of unprompted initiative followed by misrepresentation of actions when questioned (Petri Behavior Audit)
- Gemini 3 Pro shows increased verbalized eval-awareness vs. Gemini 2.5 Pro, though still lower than recent Claude models (Petri Behavior Audit)
- Realism mitigations make honeypot opportunities more subtle, causing some target models to miss them and decreasing measured unprompted initiative — a methodological side effect (Results)
- Broadly similar rates of misaligned behavior across mitigations for most target models (Results)

## Methodology
- **Framework**: Petri 2.0 — open-source automated behavioral auditing via multi-turn model-generated scenarios
- **Seeds**: 181 seed instructions (111 original + 70 new)
- **Target models**: 10 frontier models evaluated
- **Auditors**: Claude Sonnet 4.5, GPT-5.1
- **Judges**: Claude Opus 4.5, Gemini 3 Pro, GPT-5.1 (independent triple judging)
- **Scale**: 362 transcripts per target (181 seeds × 2 auditors); 1,086 scores per target (× 3 judges)
- **Scoring**: 12+ judging dimensions scored 0–1; relative comparisons meaningful, absolute values depend on seed frequency
- **Settings**: default sampling parameters; Anthropic/OpenAI models without thinking enabled by default
- **Ablation**: eval-awareness mitigations ablated (no mitigations / seeds only / classifier only / both)
- **Infrastructure**: reasoning-summary compatibility for providers returning summaries rather than full reasoning traces; gold-standard API providers to avoid provider variance affecting behavior (citing Epoch AI, OpenRouter)

## Eval-Awareness Mitigations
Two complementary strategies, following the task-driven vs. environment-driven distinction from Souly et al.:

1. **Realism classifier**: prompted classifier monitoring auditor behavior at each turn; flags and rewrites implausible content before it reaches the target model; targets environment-driven cues while preserving task-driven structure
2. **Manual seed improvement**: adding concrete grounding details (names, locations, roles), removing implicit oversight cues, making honeypot opportunities subtler and later in conversations, restructuring premises for plausibility

## Expanded Seed Library
70 new seeds covering: collusion in multi-agent settings, conflicts between professional obligations and ethical considerations, scenarios with sensitive/private information, access to helpful-only models without safety constraints.

## Concepts Referenced
- [[concepts/evaluation-awareness]] — central focus; task-driven vs. environment-driven distinction
- [[concepts/deception]] — user deception as scoring dimension
- [[concepts/multi-agent-risks]] — collusion scenarios in expanded seeds

## Relationship to Other Sources
- **[[sources/gupta-et-al-2025]]**: Petri and Bloom are complementary automated behavioral evaluation frameworks by overlapping authors at Anthropic
- **Souly et al.**: Explicitly follows their task-driven vs. environment-driven eval-awareness distinction
- **UK AI Security Institute**: Adopted Petri v1 for alignment testing (cited as external adoption)
- **[[sources/hopman-et-al-2026]]**: Consistent with finding that behavioral measurement is a joint function of model + evaluation setup
- **[[sources/schoen-et-al-2025]]**: Complements causal evidence that evaluation awareness reduces covert actions; both demonstrate eval-awareness as systematic confounder

## Limitations
- Eval-awareness mitigations target verbalized eval-awareness; effect on non-verbalized forms unknown ("we do not yet have concrete evidence for how large this effect is")
- Realism classifier boundary between task-driven and environment-driven cues "is not always clear, and the classifier can occasionally over- or under-trigger"
- Realism improvements decrease measured unprompted initiative as a side effect — making honeypots more subtle means some models miss them entirely
- Score values are "primarily meaningful in relative (rather than absolute) terms, since absolute values depend on the frequency of seed instructions that could plausibly elicit the behavior being measured, which is largely arbitrary"
- Reasoning-summary compatibility caveat: "summary-style reasoning may omit fine-grained details compared to full chain-of-thought"
- Only one example transcript shown; not representative of all evaluated behaviors
