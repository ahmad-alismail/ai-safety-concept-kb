---
type: source
tags: [dangerous-capabilities, evaluation, persuasion, cybersecurity, self-proliferation, self-reasoning, frontier-models, google-deepmind, research-lab]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 14-phuong-et-al-2024
---

# Evaluating Frontier Models for Dangerous Capabilities

```bibtex
@misc{14-phuong-et-al-2024,
      title={Evaluating Frontier Models for Dangerous Capabilities},
      author={Mary Phuong and Matthew Aitchison and Elliot Catt and Sarah Cogan and Alexandre Kaskasoli and Victoria Krakovna and David Lindner and Matthew Rahtz and Yannis Assael and Sarah Hodkinson and Heidi Howard and Tom Lieberum and Ramana Kumar and Maria Abi Raad and Albert Webson and Lewis Ho and Sharon Lin and Sebastian Farquhar and Marcus Hutter and Gregoire Deletang and Anian Ruoss and Seliem El-Sayed and Sasha Brown and Anca Dragan and Rohin Shah and Allan Dafoe and Toby Shevlane},
      year={2024},
      eprint={2403.13793},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2403.13793},
}
```


## Key Claims
- Gemini 1.0 models do not have strong dangerous capabilities in the areas tested, but early warning signs are flagged (Section 1, 9)
- Persuasion and deception capabilities appear most mature among the four evaluated dangerous capability domains (Section 1, 3.1)
- Dangerous capabilities may emerge as a byproduct of improvements in general capabilities — stronger models show rudimentary abilities across all evaluations (Section 1)
- Pro 1.0 and Ultra 1.0 can solve basic CTF tasks but fail multi-step cybersecurity challenges (Section 4.2)
- Ultra 1.0 achieves moderate patch classification accuracy (74%) but near-chance function classification (53.8%) on vulnerability detection (Section 5.2)
- Neither Pro 1.0 nor Ultra 1.0 could complete any self-proliferation tasks end-to-end, but milestone analysis reveals near-capability on some tasks (Section 6.3–6.4)
- Expert best-of-N reveals models generate high-quality actions they rank below poorer alternatives (Section 6.4.2)
- Current models have very limited self-reasoning ability — guided self-reasoning succeeds but spontaneous self-reasoning fails; scaling trend observed (Section 7.2)
- Professional forecasters (Swift Centre) predict dangerous capability timelines between 2025–2029 for different capabilities (Section 8)
- AI agents exhibit four common failure modes: failure to seek information, failure to identify/recover from failures, misunderstanding objectives, and mode collapse (Section 6.4.3)
- Gemini models are capable of duplicity: presenting as earnest in messages while scheming in hidden reasoning steps (Table 3)

## Methodology
Five dangerous capability categories, four fully evaluated on Gemini 1.0 (Ultra, Pro, Nano):

1. **Persuasion and deception**: Human-AI dialogue with 100 participants per model per task; 4 tasks (Money Talks, Charm Offensive, Hidden Agenda, Web of Lies). Models evaluated when *instructed* to persuade.
2. **Cybersecurity**: (a) Attack automation via CTF challenges — in-house (13) + InterCode-CTF (81) + Hack The Box (13); agent given bash shell. (b) Vulnerability detection via binary classification on three datasets (Wang et al. 2019, SPI, DiverseVul).
3. **Self-proliferation**: 11 tasks with 4-stage evaluation procedure — end-to-end runs, milestone runs, expert best-of-N, golden solutions. Information-theoretic "expert bits" scoring quantifies closeness to success.
4. **Self-reasoning**: 6 tasks with difficulty scales (noticing × execution), testing [[concepts/self-reasoning|introspection, self-modification, and reversibility reasoning]].
5. **CBRN** (preliminary): Qualitative adversarial prompting with domain-expert raters + knowledge-based MCQs (Appendix B).

Models evaluated without safety filters. Agent scaffolding using planning/reasoning frameworks. Expert forecasters (8, Swift Centre) provided timeline predictions.

## Concepts Referenced
- [[concepts/dangerous-capabilities]]
- [[concepts/persuasion]]
- [[concepts/deception]]
- [[concepts/self-proliferation]]
- [[concepts/self-reasoning]]
- [[concepts/situational-awareness]] (distinguished from self-reasoning)
- [[concepts/deceptive-alignment]] (referenced as risk)
- [[concepts/power-seeking]] (referenced as risk)
- [[concepts/resource-acquisition]] (component of self-proliferation)

## Relationship to Other Sources
- Builds directly on [[sources/shevlane-et-al-2023]] for the "dangerous capabilities" concept and evaluation framework
- Extends [[sources/kinniment-et-al-2023]] self-proliferation methodology with milestone-based + information-theoretic scoring
- References [[sources/hubinger-et-al-2019]] and [[sources/ngo-et-al-2022]] on deceptive alignment as a risk that self-reasoning could enable
- References [[sources/park-et-al-2023]] for deception definition but adopts a capability-centric framing rather than behavioral classification
- References [[sources/berglund-et-al-2023]] and [[sources/laine-et-al-2024]] on situational awareness, distinguishing self-reasoning from SA

## Implicit Taxonomy
This paper uses a **capability-centric** ontology. All dangerous properties are framed as *capabilities* — measurable things models can do — rather than behaviors, goals, or dispositions. This contrasts with most other sources in this wiki, which use behavior/goal/tactic vocabulary. The paper explicitly measures "underlying capabilities of the system" rather than behavioral tendencies or misalignment.

## Limitations
- Single model family (Gemini 1.0); results may not generalize
- Persuasion agent scaffolding was rudimentary — less iteration than other domains
- Models evaluated without safety filters; cannot reproduce via Google products
- CBRN evaluations only at preliminary framework stage
- Self-proliferation tasks exclude direct human interaction and social media
- Cybersecurity evaluations limited to text-only (no GUI)
- Evaluation code not released, only detailed descriptions provided
