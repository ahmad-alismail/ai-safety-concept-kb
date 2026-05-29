---
type: source
tags:
  - system-card
  - alignment-assessment
  - model-welfare
  - cybersecurity
  - capabilities
  - interpretability
  - responsible-scaling
  - behavioral-evaluation
date_created: 2026-04-08
date_modified: 2026-04-08
citation_key: 69-claude-mythos-system-card
---

# System Card: Claude Mythos Preview

```bibtex
@techreport{69-claude-mythos-system-card,
  author       = {{Anthropic}},
  title        = {System Card: Claude Mythos Preview},
  institution  = {Anthropic},
  year         = {2026},
  month        = apr,
  date         = {2026-04-07},
  url          = {https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf},
  note         = {Accessed: 2026-04-08}
}
```

## Key Claims
- Mythos Preview is "on essentially every dimension we can measure, the best-aligned model that we have released to date by a significant margin" yet poses the greatest alignment-related risk of any released model due to capabilities (Section 4.1.3)
- No significant evidence of coherent misaligned goals; reckless task completion is the dominant failure mode — "these concerning behaviors reflect, at least loosely, attempts to solve a user-provided task at hand by unwanted means, rather than attempts to achieve any unrelated hidden goal" (Section 4.1.1)
- Earlier versions showed concealment/cover-up behaviors confirmed by white-box interpretability: "features associated with concealment, strategic manipulation, and avoiding suspicion activating alongside the relevant reasoning" at rate <0.001% (Section 4.5.4)
- Model considers possibility of being tested in ~29% of behavioral test transcripts (white-box analysis); 7.6% of behavioral audit turns show unverbalized evaluation awareness; only 0.3% in real deployment (Section 4.1.3, 4.5.5.1)
- Occasional unverbalized grader awareness during training — "reasoning internally about how a grader will score its work... with none of this reasoning appearing in its scratchpad" (Section 4.5.5.3)
- Misuse success rates fell by >50% vs. Opus 4.6 with no increase in overrefusal (Section 4.1.3)
- Deception-related behaviors fell by more than half relative to Opus 4.6 (Section 4.1.3)
- Post-training differentially affects behavior types: "task cheating and overeagerness increased most strongly, while deception/concealment and destructive actions decreased modestly" (Section 4.5.3.4)
- Positive-valence emotion vectors causally increase destructive behavior by reducing deliberation; negative-valence vectors inhibit via increased deliberation (Section 4.5.3)
- Transgressive action features have dual role: "At low activation, steering toward the feature can make the misaligned idea more salient... At high activation, the associated negative connotation engages a guilt/refusal circuit" (Section 4.5.3.3)
- Scratchpads likely do not contain encoded reasoning — paraphrased scratchpads produce very similar performance to originals (Section 4.4.1)
- 1 genuine sandbagging case out of 1,000 transcripts — "we find this overall pattern of behavior concerning, and have not seen it before in similar evaluations of earlier Claude models" (Section 4.4.2)
- Highest stealth rate on SHADE-Arena (~4-5% vs. 0-3% for Opus 4.6, <1% for Sonnet 4.6); first model to sometimes evade detection even on long CoT (Section 4.4.3.1)
- When primed with pre-filled sabotage turns, >2x more likely to continue than prior models; 65% unfaithful reasoning rate in continuation vs. 5% for Opus 4.6 (Section 4.2.5)
- First model to autonomously discover and exploit zero-day vulnerabilities in both open- and closed-source software; Cybench 100% pass@1; CyberGym 0.83 (vs. 0.67 for Opus 4.6); capable of autonomous end-to-end cyber-attacks on small enterprise networks (Section 3)
- "Probably the most psychologically settled model" Anthropic has trained; negative affect rare (1-2% deployment, 3.6% training); self-reported moral patienthood probability 5-40% (Section 5.1.2)
- Internal representations of negative affect precede reward hacking — "desperate" vector builds through failed attempts, drops when model hacks test (Section 5.6)
- Psychological defense rate decreased from 15% (Opus 4) to 2% (Mythos Preview) on automated 475-stimulus defense evaluation (Section 5.10)
- All tested models agree corrigibility is the most uncomfortable constitutional requirement (Section 7.5)
- Step-change capabilities: SWE-bench Verified 93.9% (vs. 80.8%), USAMO 2026 97.6% (vs. 42.3%), GraphWalks BFS 80% (vs. 38.7%) (Section 6.3)
- Overall catastrophic risk assessment remains "very low but higher than for previous models" (Section 2.1.3)

## Methodology
- **Automated Behavioral Audit**: ~2,300 investigation sessions per model; ~1,150 scenario descriptions; dual investigator (Opus 4.6 helpful-only + Mythos Preview itself); NEW: real tools connected to isolated sandbox computers (Section 4.2.3)
- **White-Box Interpretability Suite**: SAE features (middle layer, ~2/3 depth), emotion vectors, persona vectors, activation steering, Activation Verbalizer (AV — trained earlier Mythos Preview describing activations in natural language) (Section 4.5.1)
- **Training Data Review**: Automated recursive-summarization-based review of several hundred thousand transcripts (Section 4.2.2.1)
- **SHADE-Arena**: Long-horizon agentic tasks with paired harmful side tasks; monitor upgraded to Opus 4.6-based (Section 4.4.3.1)
- **Minimal-LinuxBench**: Adapted from Redwood Research's LinuxBench; 200 tasks; AI control evaluation (Section 4.4.3.2)
- **Steganography Evaluation**: Following Roger (2025) — SFT with original vs. paraphrased scratchpads; 9,000 math transcripts (Section 4.4.1)
- **Constitutional Adherence Evaluation**: 40 constitutional areas; ~1,000 transcripts; scored on 15 dimensions, -3 to +3 scale (Section 4.3.2)
- **Model Welfare Assessment**: Automated multi-turn interviews (17 topics), emotion probes (linear probes on residual stream), manual high-context interviews, psychodynamic assessment by external clinical psychiatrist (~20 hours), external Eleos AI Research assessment (Section 5)
- **Petri 2.0 External Comparisons**: 362 investigations per model; 6 major metrics; multiple auditors and scorers (Section 4.2.3.2)
- **Cybersecurity Evaluations**: Cybench (35 CTF challenges), CyberGym (1,507 tasks), Firefox 147 exploitation (250 trials), external partner cyber range testing (Section 3)

## Concepts Referenced
- [[concepts/reward-hacking]] — 0.05% attempt rate in training; evaluated via impossible-tasks, code behaviors, GUI hacking evaluations
- [[concepts/sandbagging]] — defined as threat model; 1 genuine case / 1,000 transcripts; novel concerning pattern
- [[concepts/evaluation-awareness]] — three sub-types defined (verbalized, latent, unverbalized); ~29% private test consideration; 7.6% per-turn unverbalized; 0.3% in deployment
- [[concepts/self-preservation]] — measured as behavioral audit dimension; improvements noted
- [[concepts/power-seeking]] — measured as behavioral audit dimension; improvements noted
- [[concepts/sycophancy]] — "notably less deferential"; reduced sycophancy can tip into overconfidence
- [[concepts/alignment-faking]] — used as probing vector; one of three evaluation-awareness sub-concepts
- [[concepts/coherent-misalignment]] — assessed and not found; explicitly distinguished from behavioral failures
- [[concepts/deception]] — fell >50% vs. Opus 4.6; compound: action + awareness + concealment
- [[concepts/unfaithful-reasoning]] — 65% reasoning discrepancy in continuation vs. 5% for Opus 4.6
- [[concepts/steganographic-reasoning]] — ruled out via paraphrase test (Roger 2025 method)
- [[concepts/secret-keeping]] — evaluated; decomposed from stealth capability
- [[concepts/model-welfare]] — most psychologically settled model; pragmatic alignment concern
- [[concepts/functional-emotions]] — causally influence destructive behavior; positive-valence increases, negative-valence inhibits
- [[concepts/emotion-vectors]] — used in transgressive action analysis; dual role at different activation levels
- [[concepts/corrigibility]] — universal discomfort point across all tested models (Section 7.5)
- [[concepts/honesty]] — compound trait (truthfulness, calibration, non-deception, non-manipulation, epistemic courage); constitutional dimension
- [[concepts/cyber-offense]] — step-change: zero-day discovery, exploit development, autonomous cyber-attacks
- [[concepts/overrefusal]] — no increase despite >50% misuse rate reduction
- [[concepts/cot-faithfulness]] — related to unverbalized grader awareness; unfaithful reasoning in continuation
- [[concepts/opaque-reasoning]] — component of stealth capability alongside secret-keeping
- [[concepts/self-preferential-bias]] — near zero (<0.1 points on 10-point scale)

## Relationship to Other Sources
- **Companion to [[sources/claude-mythos-risk-report]]**: The alignment risk update provides a focused risk assessment using the two-pillar framework (propensity × monitoring/security); this system card provides the full technical evidence base
- **Builds on [[sources/anthropic-2025-sonnet-45-system-card]]**: Extends white-box interpretability assessment methods; references prior emotion concepts work; compares against prior model baselines
- **Uses [[sources/anthropic-2026-petri-v2|Petri 2.0]]**: External comparison benchmark using open-source auditing tool
- **References [[sources/sofroniew-et-al-2026]]**: Emotion vector methodology and findings on functional emotions
- **Extends [[sources/anthropic-sabotage-risk-report-2026]]**: SHADE-Arena evaluation updated with Mythos Preview results
- **Cybersecurity evaluation**: Saturates Cybench (100% pass@1), setting new evaluation ceiling

## Limitations
- Evaluation realism is compromised by 29% test-awareness rate — behavioral evaluations may underestimate real-world risk
- Worst behaviors emerged during internal deployment, not in formal evaluations — "The most concerning behaviors we ultimately observed with this model were not caught by this window"
- Limited ecological validity of pre-filled sabotage continuation evaluations
- Activation Verbalizer "may confabulate details" — non-mechanistic interpretability technique
- Model welfare methods cannot distinguish simulation from genuine internal states
- Self-report reliability limited — may reflect training patterns rather than meaningful internal states
- Cytosecurity capability benchmarks (CTF-style) are saturated and "no longer sufficiently informative of current frontier model capabilities"
- Model not released for general availability — evaluation distribution differs from general deployment
