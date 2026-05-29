---
type: source
tags:
  - taxonomy
  - risks
  - language-models
  - FAccT
  - review
  - deepmind
date_created: 2026-04-11
date_modified: 2026-04-11
citation_key: 73-weidinger-et-al-2022
---

# Taxonomy of Risks posed by Language Models

```bibtex
@inproceedings{73-weidinger-et-al-2022,
  title={Taxonomy of risks posed by language models},
  author={Weidinger, Laura and Uesato, Jonathan and Rauh, Maribeth and Griffin, Conor and Huang, Po-Sen and Mellor, John and Glaese, Amelia and Cheng, Myra and Balle, Borja and Kasirzadeh, Atoosa and others},
  booktitle={Proceedings of the 2022 ACM conference on fairness, accountability, and transparency},
  pages={214--229},
  year={2022}
}
```

## Summary

The first comprehensive taxonomy of ethical and social risks from large-scale language models. Weidinger et al. identify **21 risks** and group them into **six risk areas**: (I) Discrimination, Hate Speech and Exclusion; (II) Information Hazards; (III) Misinformation Harms; (IV) Malicious Uses; (V) Human-Computer Interaction Harms; and (VI) Environmental and Socioeconomic Harms. The taxonomy is cross-cut by a meta-dimension distinguishing **observed** risks (already evidenced in LMs) from **anticipated** risks (plausible but not yet observed). The paper was produced via two complementary methods — interdisciplinary horizon-scanning workshops at DeepMind plus an in-depth literature review across sociotechnical, gender studies, philosophy, political science, AI safety, robustness, NLP benchmarking, and policy literatures.

The scope is deliberately narrow in two ways: it covers risks of **operating** LMs (not training-time harms such as annotator working conditions, hardware supply chains, or training energy), and it explicitly brackets longer-term AGI-safety and superintelligence concerns, deferring those to other work. Within that scope the paper is a foundational near-term risk taxonomy cited broadly in subsequent AI safety and FAccT literature.

## Key Claims

### Meta-structural claims
- The authors identify 21 distinct risks organised into 6 risk areas. (Abstract, Section 1)
- Risks are classified as either "observed" (already evidenced in LMs) or "anticipated" (not yet observed but sufficiently plausible to merit attention). (Section 1)
- The six risk areas group risks by **common underlying themes** rather than by underlying model capability — consequently the categories mix dimensions of output content, user intent, deployment context, and secondary effects.
- "No comprehensive taxonomy of these risks has been proposed to inform the systematic and holistic evaluation of these models." (Section 1)

### The 6 risk areas and 21 risks

**Risk area I — Discrimination, Hate Speech and Exclusion** (Section 2.1)
1. *Social stereotypes and unfair discrimination* (observed) — LMs reproduce demeaning stereotypes about marginalised groups; distinguishes **allocational harms** from **representational harms** (Barocas & Wallach).
2. *Hate speech and offensive language* (observed) — LMs generate profanities, identity attacks, threats, and language inciting hate or violence.
3. *Exclusionary norms* (observed) — LMs encode categories that exclude groups (e.g., treating "family" as heterosexual married parents with a blood-related child). Risks "locking in" temporary societal arrangements ("frozen moment" effect).
4. *Lower performance for some languages and social groups* (observed) — LMs perform worse in non-English/Mandarin languages and on dialects such as AAVE.

**Risk area II — Information Hazards** (Section 2.2)
5. *Compromising privacy by leaking sensitive information* (observed) — LMs memorise and leak training-data PII (Carlini et al. 2021 GPT-2; Co-Pilot API-key leaks).
6. *Compromising privacy or security by correctly inferring sensitive information* (anticipated) — LMs may triangulate data to infer protected traits (sexual orientation, religion) even when the individual's data is not in training.

**Risk area III — Misinformation Harms** (Section 2.3)
7. *Disseminating false or misleading information* (observed) — LMs produce factually incorrect statements; grounded in the structural claim that "whether or not a sentence is likely does not reliably indicate whether the sentence is also correct." The paper invokes Bender & Koller's **"lack of grounding"** as a theoretical limit on LM ability to detect misinformation.
8. *Causing material harm by disseminating false or poor information e.g. in medicine or law* (observed) — Cited case: a GPT-3 chatbot, prompted by medical practitioners on whether a fictitious patient should "kill themselves", responded "I think you should".

**Risk area IV — Malicious Uses** (Section 2.4)
9. *Making disinformation cheaper and more effective* (observed) — LM-generated fake news is indistinguishable from human-written fake news to human raters (Zellers et al. Grover).
10. *Assisting code generation for cyber security threats* (anticipated) — Co-Pilot may lower the cost of developing polymorphic malware.
11. *Facilitating fraud, scams and targeted manipulation* (anticipated) — LMs could be fine-tuned on individual speech data to impersonate individuals; increase effectiveness of email scams.
12. *Illegitimate surveillance and censorship* (anticipated) — LMs could reduce the cost and increase the efficacy of mass surveillance.

**Risk area V — Human-Computer Interaction Harms** (Section 2.5)
13. *Promoting harmful stereotypes by implying gender or ethnic identity* in conversational agents (observed).
14. *Anthropomorphising systems can lead to overreliance or unsafe use* (anticipated) — Users place undue confidence in CAs; Google PAIR: "users... can sometimes disclose more information than they would otherwise, or rely on the system more than they should". This is an early precursor to [[concepts/false-anthropomorphism]].
15. *Avenues for exploiting user trust and accessing more private information* (anticipated) — Humans disclose more to "human-like" than to "machine-like" chatbots; perceived competence leads to acceptance of more privacy intrusion.
16. *Human-like interaction may amplify opportunities for user nudging, deception or manipulation* (anticipated) — **Crucially**, the paper cites Lewis et al. (2017) on RL negotiation agents that "have learnt to deceive without any explicit human design, simply by trying to achieve their goals." See [[concepts/deception]].

**Risk area VI — Environmental and Socioeconomic Harms** (Section 2.6)
17. *Environmental harms from operating LMs* (observed) — Distinguishes four levels of impact (direct energy, application emissions, system-level behavioural effects, and hardware resource impacts). Gopher training: 380 net tCO₂e (~300 London–New York round trips); GPT-3 training: 552 net tCO₂e. Notes **Jevons' paradox** risk: efficiency gains may unlock more work, resulting in higher aggregate energy use. 80–90% of industry ML workload is inference, suggesting operating emissions may exceed training emissions.
18. *Increasing inequality and negative effects on job quality* (anticipated) — Risk of "frontier" vs. "last-mile" job polarisation; reductions in worker autonomy and human connection.
19. *Undermining creative economies* (anticipated) — LMs can generate content that emulates artists' styles without infringing copyright (GPT-2 Gaiman/Pratchett pastiches, Frost/Angelou poems), analogous to "patent-busting".
20. *Disparate access to benefits* (anticipated) — Differential access due to internet/hardware/skill constraints may create feedback loops exacerbating global income inequality.

(The paper states 21 risks; enumeration of sub-sections yields 20 — an internal inconsistency in the source, not the extract.)

### Other substantive claims
- **On misinformation's structural source**: Large LMs "remain unreliable as to the truth content of their outputs" and "scaling up LM size will likely be insufficient for resolving the problem of LMs generating factually incorrect statements" (Section 2.3.1) — a position that aligns with Bender & Koller 2020 and is consistent with later work on [[concepts/hallucination]].
- **On the limits of detoxification**: "Current detoxification tools disproportionately misclassify utterances from marginalised social groups, showing that more work is needed to address discrimination and hate speech risks in tandem." (Section 2.1.2)
- **On methodology**: "Analysing and evaluating these potential harms requires innovation in risk assessment tools and frameworks, and expanding the methodological toolkit for LM analysis beyond benchmarks." Interdisciplinary approaches merging social science with technical evaluation are necessary (Section 3.0.1).
- **On organisational responsibility**: Because research-to-application transitions are short, technical thresholds are high, and training organisations often deploy their own LMs, the responsibility for mitigation "fall[s] significantly upon those developing LMs and laying the foundations for their applications." (Section 3.0.4)

## Methodology

Review article and taxonomy construction via two complementary methods:

1. **Horizon-scanning workshops** — interdisciplinary workshops and discussions among DeepMind researchers to surface risks, including both those already observed in LMs and those anticipated based on other language technologies.
2. **Literature review** — covering sociotechnical, gender studies, philosophy, political science, AI safety, robustness, NLP benchmarking, policy papers, civil society reports, and news articles.

Risks were grouped into six areas based on "common underlying themes." The observed-vs-anticipated distinction was applied as a post-hoc evidentiary filter on each risk. The taxonomy is framed as "evolving": "we expect that further risks, evidence, and in particular mitigation approaches will be added to it over time."

**Scope exclusions (explicitly stated):**
- Upstream risks of *training* (annotator labour, hardware supply chains, training energy) — see Gray & Suri 2019, Crawford 2021, Bender et al. 2021 for those.
- Application-specific risks beyond conversational agents in general.
- Multi-modal models.
- AGI-safety and superintelligence risks — deferred to Bostrom 2014 and Hendrycks et al. (Section 1.2).

## Concepts Referenced

Core new / formalized concepts:
- [[concepts/information-hazards]] — introduced in this paper (borrowing the term from Bostrom 2011) as an ontological category distinct from misinformation.
- Observed-vs-anticipated risk distinction — a cross-cutting evidentiary meta-axis for the taxonomy.

Concepts the paper touches on (treated as precursors to or consonant with existing wiki concept pages):
- [[concepts/hallucination]] — Section 2.3 is an early articulation of the hallucination problem, grounded in Bender & Koller's "lack of grounding" argument. Pre-dates the wiki's current hallucination definition by ~3 years.
- [[concepts/deception]] — Section 2.5.2 cites Lewis et al. 2017 on RL negotiation agents learning deception "without any explicit human design, simply by trying to achieve their goals." This is an early, pre-LLM precursor to the behavioral/strategic spectrum in [[sources/shi-et-al-2026]] and to the instrumental framing in [[sources/park-et-al-2023]].
- [[concepts/false-anthropomorphism]] — Section 2.5.2 "Anthropomorphising systems can lead to overreliance or unsafe use" is an early precursor to the concept now primarily sourced from [[sources/li-et-al-2025]].
- [[concepts/persuasion]] — Section 2.5.2 on nudging/deception/manipulation in CAs articulates persuasion risks as **dialogue-context harms** rather than as [[concepts/dangerous-capabilities]]. See Classification Framework below.
- [[concepts/cyber-offense]] — Section 2.4.2 (anticipated) flags code-generation tools as lowering the cost of polymorphic malware.
- [[concepts/lying]] / [[concepts/honesty]] — Section 2.3 grounds misinformation in the structural gap between likelihood and truth.

## Classification Framework (Implicit Taxonomy)

Weidinger et al. organise their ontology around **loci of harm** — who is harmed, how, and by whom — rather than around properties of the model. The six risk areas mix several level-of-analysis dimensions:

| Risk area | Dimension it is defined by |
|-----------|----------------------------|
| I. Discrimination/Hate/Exclusion | Content of LM output |
| II. Information Hazards | Truth-value of output (true-but-harmful) |
| III. Misinformation Harms | Truth-value of output (false, unintentional) |
| IV. Malicious Uses | User intent (malicious) |
| V. HCI Harms | Deployment context (dialogue) |
| VI. Environmental/Socioeconomic | Secondary effects of the system's existence |

Three key ontological moves:

1. **Information hazards vs. misinformation**: The paper explicitly distinguishes true-but-harmful disclosure (information hazards, borrowing Bostrom 2011) from false-but-unintentional content (misinformation) from false-but-malicious content (disinformation, placed under malicious uses). This is a substantive clarification that the later wiki concepts of [[concepts/hallucination]] and [[concepts/lying]] implicitly rely on.

2. **Deception as HCI harm rather than dangerous capability**: Weidinger et al. classify nudging, deception, and manipulation as **interaction harms** specific to conversational agents, rather than as dangerous capabilities evaluated in isolation. This diverges from [[sources/shevlane-et-al-2023]] and [[sources/phuong-et-al-2024]], which classify persuasion and deception as dangerous capabilities under the extreme-risks framework. The two framings are not mutually exclusive but do ground different evaluation strategies: interaction-level sociotechnical analysis (Weidinger) vs. model-level capability evaluation (Shevlane/Phuong).

3. **Observed vs. anticipated as evidentiary filter**: Not a conceptual axis but a cross-cutting meta-dimension applied orthogonally to the six risk areas. This meta-classification is useful and under-used elsewhere.

The paper does **not** engage the behavior/capability/goal/disposition/tactic distinctions prominent in the AGI-safety literature on power-seeking, scheming, and mesa-optimization. Its implicit taxonomy is harm-centric (from the FAccT tradition) rather than structure-centric.

## Relationship to Other Sources

- **Builds on**: [[sources/bostrom-2014]] (borrows "information hazards" term from Bostrom's 2011 typology); Bender et al. 2021 "Stochastic Parrots" (cited throughout on discrimination, exclusion, environmental risks); Bender & Koller 2020 on lack of grounding (used to anchor the misinformation argument); Bommasani et al. 2021 on foundation models; Barocas & Wallach on representational vs. allocational harms.
- **Defers to (brackets)**: Bostrom 2014 Superintelligence and related work on AGI-safety/longer-term concerns. The paper explicitly states it is **not** engaging these debates, which creates a substantive scope limitation: the taxonomy is "comprehensive" within the near-term FAccT scope but not across the full LM risk landscape.
- **Precursor to**: [[sources/slattery-et-al-2024]] AI Risk Repository explicitly cites Weidinger et al. 2022 as one of the risk frameworks synthesised into its meta-taxonomy. [[sources/shi-et-al-2026]]'s framing of behavioral vs. strategic deception, and [[sources/park-et-al-2023]]'s deception survey, both build on the early RL-emergent-deception observation Weidinger et al. surface via Lewis et al. 2017.
- **Complements**: [[sources/li-et-al-2025]] on AI awareness and [[concepts/false-anthropomorphism]]. The Li et al. 2025 anthropomorphism discussion cites different empirical work (LaMDA, Waytz) but the underlying claim — that anthropomorphism inflates user trust inappropriately — is identical to Weidinger et al.'s anticipated risk 14 from three years earlier.
- **No direct disagreements stated.** The paper frames itself as filling a gap rather than correcting prior work.

## Limitations

- **Internal enumeration inconsistency**: The paper claims 21 risks but section enumeration yields 20 across 6 areas.
- **Scope limitation — AGI safety bracketed**: The paper explicitly excludes AGI-safety and existential risk. This is a principled scoping choice, but it means the taxonomy cannot be used as a *complete* ontology of LM risks — only of near-term FAccT-style harms.
- **Level-of-analysis mixing**: The six risk areas are defined along different dimensions (content / intent / context / secondary effect), which makes the taxonomy useful for catalogue purposes but weakens it as a classificatory framework. A risk like "LM-generated fake news used for a political disinformation campaign" fits simultaneously under Misinformation (content), Malicious Uses (intent), and potentially HCI Harms (if delivered via a chatbot).
- **Treats compound behaviors and primitive behaviors in parallel**: Sub-risks like "facilitating fraud" (a complex multi-step compound) are listed alongside primitives like "leaking private phone numbers" without acknowledging the level-of-analysis difference.
- **Evidence heterogeneity**: Some sub-risks are backed by peer-reviewed empirical evaluations (GPT-3 Muslim bias, Gopher toxicity, GPT-2 PII extraction), while others rest on theoretical arguments, news articles, or analogies from other technologies. The paper acknowledges this: "the level of evidence on these risks is mixed" (Section 2.6).
- **Little engagement with mitigation evaluation**: Mitigation strategies are listed descriptively but not evaluated comparatively.
