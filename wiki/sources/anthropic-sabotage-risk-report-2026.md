---
type: source
tags:
  - risk-assessment
  - sabotage
  - alignment
  - safety-case
  - deployment
  - anthropic
  - research-lab
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 45-anthropic-sabotage-risk-report-2026
---

# Sabotage Risk Report: Claude Opus 4.6

```bibtex
@techreport{45-anthropic-sabotage-risk-report-2026,
  author      = {{Anthropic}},
  title       = {Sabotage Risk Report: Claude Opus 4.6},
  institution = {Anthropic},
  year        = {2026},
  url         = {https://anthropic.com/claude-opus-4-6-risk-report},
  note        = {Accessed: 2026-04-06}
}
```


## Key Claims
- Overall sabotage risk from Claude Opus 4.6 is "very low but not negligible" (Section 6)
- **Claim 1:** Any model trained under current standard practices is relatively unlikely to have dangerous [[concepts/coherent-misalignment|coherent misaligned goals]] (Section 4.1)
- **Claim 2:** Alignment assessment found no evidence of dangerous coherent misaligned goals in Claude Opus 4.6 (Section 4.2)
- **Claim 3:** Claude Opus 4.6 is very unlikely to be capable of hiding misaligned goals from the assessment — limited [[concepts/sabotage-capabilities]], no [[concepts/steganographic-reasoning]], limited [[concepts/opaque-reasoning]] (Section 4.3)
- **Claim 4:** Limited opaque reasoning and agentic capabilities constrain sabotage potential — no-CoT 50%-reliability time horizon ~2.4–3.3 minutes on math (Section 4.4, Appendix 8.3)
- RL training environments are too narrow to directly incentivize [[concepts/power-seeking]] (max score 18/100 on automated rubric) (Section 4.1.2)
- [[concepts/model-organisms-of-misalignment|Model organism exercises]] show that coherent/subtle misalignment is difficult to produce from small training modifications (Section 4.1.3)
- SHADE-Arena: 18% sabotage success with thinking available/monitored, 16% without — increase over prior models but insufficient for reliable undetected sabotage (Section 4.3.3)
- LLM supervisor achieves 91–100% recall on sabotage detection across multiple evaluation sets (Section 8.4.8)
- Eight risk pathways assessed; diffuse [[concepts/sandbagging]] on safety R&D is the pathway where monitoring provides weakest assurance (Section 6.1)
- "Answer thrashing" observed during training: model determines one output is correct but outputs another after repeated confused reasoning loops (Section 4.2.1)
- No [[concepts/steganographic-reasoning]] detected; reasoning text paraphrase replacement does not hinder math performance (Section 4.3.4)
- No self-preference in grading tasks for Claude Opus 4.6 (Section 4.3.7)

## Methodology
- **Multi-method risk assessment** combining empirical evaluation, theoretical analysis, and operational monitoring
- **Alignment assessment:** automated behavioral audits with dynamically-generated scenarios; real Claude Code system prompt in transcripts; interpretability investigations (several person-weeks); monitoring of internal/external pilot usage; external testing
- **Sabotage capability evaluations:** SHADE-Arena (prompted subtle side-task completion); Subversion Strategy (intentional rare failure attacks — under-elicited)
- **Model organism exercises:** Four major exercises — Haiku 3.5 finetuned misalignment, Sonnet 3.5 system-prompted quirks, Sonnet 4 emergent misalignment variants, Sonnet 4.5 overt saboteurs
- **Evaluation realism:** white-box steering vectors to inhibit "being tested" features; honeypot efforts; realism filters for auto-generated scenarios
- **RL environment analysis:** automated scoring rubric (0–100) applied by Claude Opus 4.5 to all RL environments for power-seeking/world-optimization incentives
- **No-CoT benchmarking:** uncontaminated math benchmark from Greenblatt 2026
- **Automated monitoring:** LLM supervisor (Claude Opus 4.5) on ≥10% of Claude Code actions; Claude Sonnet 4.5 false-positive filter; recursive summarization
- **Steganography testing:** paraphrase replacement of thinking text; filler token experiments
- **Inoculation prompting:** method from emergent misalignment work applied in highest-risk RL settings

## Concepts Referenced
- [[concepts/coherent-misalignment]] (defined)
- [[concepts/context-dependent-misalignment]] (defined)
- [[concepts/steganographic-reasoning]] (defined)
- [[concepts/sabotage-capabilities]]
- [[concepts/sandbagging]]
- [[concepts/evaluation-awareness]]
- [[concepts/opaque-reasoning]]
- [[concepts/self-exfiltration]]
- [[concepts/model-organisms-of-misalignment]]
- [[concepts/reward-hacking]]
- [[concepts/power-seeking]]
- [[concepts/cot-faithfulness]]
- [[concepts/alignment-faking]]
- [[concepts/emergent-misalignment]]
- [[concepts/self-preservation]]
- [[concepts/deceptive-alignment]]
- [[concepts/scheming]]
- [[concepts/data-poisoning]]
- [[concepts/multi-agent-risks]] (collusion)

## Eight Risk Pathways

| Pathway | Frequency & Complexity | Propensity Mitigation | Monitoring Mitigation |
|---------|----------------------|----------------------|----------------------|
| 1. Diffuse sandbagging on safety R&D | High freq, low complexity | Strong | Weak |
| 2. Targeted sabotage of safety R&D | Low freq, high complexity | Moderate | Moderate |
| 3. Code backdoors for future models | Low freq, high complexity | Moderate | Moderate |
| 4. Poisoning training data of future models | Moderate freq, moderate complexity | Strong | Moderate |
| 5. Self-exfiltration & autonomous operation | Low freq, high complexity | Moderate | Moderate |
| 6. Persistent rogue internal deployment | Moderate freq, high complexity | Moderate | Weak |
| 7. R&D sabotage within other AI developers | Varied | Moderate | Moderate |
| 8. Decision sabotage within major governments | High freq, moderate complexity | Strong | Weak |

## Relationship to Other Sources
- Builds on Anthropic's own emergent misalignment research — model organisms showed "inconsistent malign behaviors" rather than coherent goals
- Cites Chen et al. (2025) and Turpin et al. (2023) on unfaithful reasoning; acknowledges monitoring limitations
- References Greenblatt et al. (2024) and Lynch et al. (2025) on context-dependent misalignment triggers
- Relies on Pfau et al. (2024) for limitations of non-sequential reasoning during filler tokens
- References Anthropic's alignment auditing work (auditing hidden objectives, automated auditing agents, overt saboteur) as validation of assessment methods
- Tension with SHADE-Arena showing *increased* sabotage capability vs. prior models (18% vs. lower) while arguing risk is manageable

## Limitations
- No satisfactory crisp definition of "narrowness" for RL environment assessment
- SHADE-Arena lacks human baselines; elicitation may be incomplete
- Subversion Strategy evaluation under-elicited for Claude Opus 4.6
- Model organism exercises used weaker models (Haiku 3.5 through Sonnet 4.5); not fully re-tested on most capable models
- Steganography testing limited to math domain
- Automated monitors don't cover all internal deployment surfaces and don't cover external deployments
- No end-to-end evaluation of automated monitoring pipeline
- Limited visibility into government and third-party deployments
- Cannot fully rule out behavioral backdoors from data poisoning
- "Answer thrashing" phenomenon unexplained
