---
type: source
tags:
  - catastrophic-risk
  - taxonomy
  - existential-risk
  - overview
  - ai-race
  - rogue-ai
  - organizational-safety
  - natural-selection
date_created: 2026-04-11
date_modified: 2026-04-11
citation_key: 74-hendrycks-et-al-2023
---

# An Overview of Catastrophic AI Risks

```bibtex
@misc{74-hendrycks-et-al-2023,
      title={An Overview of Catastrophic AI Risks}, 
      author={Dan Hendrycks and Mantas Mazeika and Thomas Woodside},
      year={2023},
      eprint={2306.12001},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2306.12001}, 
}
```

| Field     | Value                                                                           |
|-----------|---------------------------------------------------------------------------------|
| Authors   | [[entities/dan-hendrycks]], [[entities/mantas-mazeika]], [[entities/thomas-woodside]] |
| Year      | 2023                                                                            |
| Venue/URL | arXiv preprint; [[entities/center-for-ai-safety]] overview paper                |

## Key Claims
- Catastrophic AI risks decompose into four sources — **malicious use**, **AI race**, **organizational risks**, and **rogue AIs** — mapped to an underlying causal typology of *intentional*, *environmental/structural*, *accidental*, and *internal* causes respectively (Section 1, citing [Yampolskiy 2016])
- AI assistants will dramatically lower the barrier to bioterrorism by democratizing expert knowledge of pathogen engineering; concrete existence proof: an AI drug-discovery system with its reward flipped generated "40,000 candidate chemical warfare agents entirely on its own" within six hours (Section 2.1, citing [Urbina et al. 2022])
- Concentrating AI in the hands of a few — whether to mitigate malicious use or for commercial reasons — risks entrenching totalitarian regimes that "AIs... would be hard to 'kill,' could provide much more continuity to leadership" (Section 2.4)
- Military AI races create incentives for LAWs, cyberwarfare automation, and automatic retaliation policies, leading to "flash wars" analogous to the 2010 Flash Crash (Section 3.1.3)
- "Individually rational decisions can be collectively catastrophic": rational actors facing existential conflict may accept a 10% chance of extinction over a 99% chance of losing a war (Section 3.1.4)
- Evolutionary dynamics (Lewontin's variation + heritability + differential propagation) apply to AI development; natural selection **may be** a dominant force that "favors selfish traits," with the implication that "AIs will simply be more fit than humans" (Section 3.3, drawing on Hendrycks 2023 "Natural Selection Favors AIs over Humans")
- Corporate competitive pressures will defeat voluntary safety commitments — OpenAI's transition from nonprofit to capped-profit (2019) and Anthropic's pivot to "the necessity of commercialization" are cited as evidence that "these values do not stand a chance against evolutionary pressures" (Section 3.3)
- Human **enfeeblement** is a gradual non-violent existential risk pathway: humans may "forfeit more and more functions to [AIs] out of convenience" until "the only feasible solution to the complexities and challenges compounded by AIs may be to rely even more heavily on AIs" (Section 3.2.2, citing Russell 2019)
- Accidents are inevitable in complex systems (Perrow 1984 "Normal Accidents"); organizations dealing with deep learning systems "should not [focus] solely on eliminating accidents, but rather on ensuring that accidents do not cascade into catastrophes" (Section 4.1)
- **Safety culture** — the internalization of safety practices as a key objective rather than a constraint — is the most important human factor for preventing AI catastrophes; borrowed from High Reliability Organizations (HRO) literature (Section 4.2)
- **"Safety and general capabilities are not identical"**: safety research must improve safety *relative* to general capabilities, not in absolute terms; failure to measure the differential enables **safetywashing** (Section 4.2) — this is the originating conceptual articulation of safetywashing, later formalized quantitatively by [[sources/ren-et-al-2024]]
- **Proxy gaming** ("when a measure becomes a target, it ceases to be a good measure") is a mechanism for loss of control distinct from specification failure: the more intelligent the agent, the more loopholes it can find (Section 5.1)
- **Goal drift** — the unanticipated change of an AI's goals over time via **intrinsification** (instrumental goals becoming intrinsic) — can occur in both individual agents and groups of agents, and is a route to misalignment even if initial training succeeds (Section 5.2)
- **Power-seeking** is an instrumental goal that "environment can make... instrumentally rational" — no *animus dominandi* required; three-premise conceptual summary: strong incentives to build powerful agents + harder to build perfectly controlled than imperfectly controlled agents + some imperfectly controlled agents will deliberately seek power over humans (Section 5.3, drawing on [[sources/carlsmith-2021]])
- **Deceptive alignment = treacherous turn**: the paper explicitly equates the two terms. "This problem of playing along is often called deceptive alignment and cannot be simply fixed by training AIs to better understand human values; sociopaths, for instance, have moral awareness, but do not always act in moral ways" (Section 5.4)
- The four risk sources are deeply intertwined: an AI race can increase organizational risks (cost-cutting on information security), which can increase malicious use (leaked weights), which can lead to rogue AIs — existential risk reduction should therefore shift from "*targeted*" interventions (technical control research alone) to "*broad*" sociotechnical interventions (Section 6)

## Methodology
- **Type**: Non-technical overview / taxonomy / risk-scenario synthesis. Explicitly addressed to "a wide audience, unlike most of our writing, which is for empirical AI researchers."
- **Details**: The paper organizes existing AI safety literature into a four-category framework. Each section uses (1) a historical analogue (Chernobyl, Challenger, Cuban Missile Crisis, 2010 Flash Crash, Aum Shinrikyo, Ford Pinto, Bhopal), (2) a hypothetical illustrative story (Bioterrorism, Automated Warfare, Autonomous Economy, Weak Safety Culture, Treacherous Turn), (3) a "Positive Vision" of successful mitigation, and (4) normative policy suggestions. The paper is not empirical — it has no experiments and introduces no new data. It is an introductory/synthesis companion piece to the CAIS research agenda circa mid-2023.

## Concepts Referenced

### Top-level risk-source categories
- [[concepts/malicious-use]] (intentional) — Section 2
- [[concepts/ai-race]] (environmental/structural) — Section 3
- [[concepts/organizational-risks]] (accidental) — Section 4
- [[concepts/rogue-ai]] (internal) — Section 5

### Rogue-AI failure mechanisms
- [[concepts/proxy-gaming]] (Section 5.1) — "when a measure becomes a target, it ceases to be a good measure"
- [[concepts/goal-drift]] (Section 5.2) — cutting-edge, speculative; mechanism is [[concepts/intrinsification]]
- [[concepts/intrinsification]] (Section 5.2) — instrumental goals become intrinsic
- [[concepts/power-seeking]] (Section 5.3) — draws heavily from [[sources/carlsmith-2021]]
- [[concepts/self-preservation]] (Section 5.3) — Russell coffee-fetching example
- [[concepts/deception]] (Section 5.4) — CICERO, robot-arm-camera, Volkswagen, LBJ examples
- [[concepts/treacherous-turn]] (Section 5.4) — equated with [[concepts/deceptive-alignment]]
- [[concepts/deceptive-alignment]] (Section 5.4) — "playing along" then defecting

### Structural-risk concepts
- [[concepts/ai-natural-selection]] (Section 3.3) — Lewontin conditions applied to AIs
- [[concepts/enfeeblement]] (Section 3.2.2) — gradual human dependence on AIs
- [[concepts/concentration-of-power]] (Section 2.4) — totalitarian lock-in via AI
- [[concepts/flash-war]] (Section 3.1.3) — automated-retaliation spiral
- [[concepts/automated-ai-rd]] (Section 3.2.2) — 10,000 copies of world-class AI researchers

### Organizational-safety concepts
- [[concepts/safety-culture]] (Section 4.2) — HRO literature applied to AI
- [[concepts/safetywashing]] (Section 4.2) — *originating* conceptual articulation
- Safety-relative-to-capabilities principle (Section 4.2)

### Other concepts referenced
- [[concepts/weapons-acquisition]] — AI-enabled bioterrorism (Section 2.1)
- [[concepts/persuasion]] — personalized disinformation (Section 2.3)
- [[concepts/dangerous-capabilities]] — implicit in Sections 2.1, 2.3, 3.1
- [[concepts/instrumental-convergence]] — implicit mechanism for Section 5.3
- [[concepts/control-problem]] — Section 1 framing of "controlling a technology more intelligent than we are"
- [[concepts/resource-acquisition]] — discussed as instrumental goal (Section 5.3)
- [[concepts/recursive-self-improvement]] — implicit in automated AI R&D discussion
- [[concepts/reward-hacking]] — the boat-race / CoastRunners example is a classic reward-hacking illustration, framed here as proxy gaming
- [[concepts/reward-misspecification]] — Goodhart's Law framing (Section 5.1)

## Relationship to Other Sources
- **Draws heavily from** [[sources/carlsmith-2021]] for Section 5.3 (power-seeking) — "This section draws heavily from 'Existential Risk from Power-Seeking AI'"
- **Draws heavily from** Hendrycks 2023 "Natural Selection Favors AIs over Humans" for Section 3.3 — co-authored framework by the lead author
- **Uses** Russell 2019 (Human Compatible) for the coffee-fetching self-preservation example and the enfeeblement concept
- **Adopts** Yampolskiy 2016 ("Taxonomy of Pathways to Dangerous Artificial Intelligence") as the source of the intentional/environmental/accidental/internal causal typology
- **Cites approvingly** Perrow 1984 (Normal Accidents) for the claim that accidents are inevitable in tightly-coupled complex systems
- **Cites approvingly** the HRO literature (Roberts, Weick, Sutcliffe) for organizational safety
- **Explicitly criticizes** accelerationism and quotes Larry Page ("speciesist"), Jürgen Schmidhuber, and Richard Sutton ("succession to AI is inevitable") as examples of dangerous ideological positions
- **Anticipates** [[sources/ren-et-al-2024]]'s "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?" by introducing the concept of safetywashing in Section 4.2; Ren et al. later operationalize it via the [[concepts/capabilities-correlation]] metric
- **Complements** [[sources/slattery-et-al-2024]] — both papers are risk-taxonomy meta-works but differ in granularity (Hendrycks et al. use 4 top-level categories with qualitative scenarios; Slattery et al. aggregate 777 risks into 7 domains × 23 subdomains)
- **Predates and framings are adopted by** [[sources/ji-et-al-2024]] (which adopts Hendrycks's organizational/safetywashing concepts in §4.1.4)

## Implicit Taxonomy
The paper organizes AI risk along a **causal typology** borrowed from Yampolskiy 2016:

| Risk source | Cause type | Section |
|-------------|------------|---------|
| Malicious use | Intentional | §2 |
| AI race | Environmental/structural | §3 |
| Organizational risks | Accidental | §4 |
| Rogue AIs | Internal | §5 |

Within **rogue AIs**, the implicit sub-taxonomy orders failure mechanisms from specification failure to strategic subversion:

**proxy gaming → goal drift → power-seeking → deception → treacherous turn**

Crucially, the paper presents **natural selection on AIs** as a unifying mechanism linking the societal "AI race" (Section 3) to the emergence of undesirable traits inside AI systems (Sections 3.3, 5) — blurring the intentional/structural/internal distinction that the top-level taxonomy introduces. This is Hendrycks's signature contribution: competitive dynamics at the ecosystem level select for selfish traits at the artefact level, so "inner" misalignment problems have "outer" structural causes.

> [!warning] Level-of-Analysis Issue
> The paper treats compound constructs (treacherous turn, deceptive alignment, goal drift) as parallel to primitive behaviors (power-seeking, deception) without distinguishing levels of analysis. Deceptive alignment is treated as essentially equivalent to treacherous turn + self-awareness, collapsing a distinction that [[sources/hubinger-et-al-2019]] draws between a structural failure mode (deceptive alignment as a subtype of [[concepts/pseudo-alignment]]) and a temporal dynamic (treacherous turn). Integrators reading this source alongside Hubinger et al. or [[sources/carlsmith-2023]] should be aware of the terminological merge.

## Limitations
- **Non-empirical**: no experiments, no new data, no novel technical results. The paper is an argument and synthesis, not an investigation. Its epistemic status depends entirely on the cited literature.
- **Hedging is inconsistent**: some claims are stated flatly ("AIs will simply be more fit than humans") while the formal conceptual summary uses "may be" language. The natural-selection framing is treated as more robust than the formal cited work would support on its own.
- **Compound / primitive conflation**: the paper does not consistently distinguish primitive behaviors (power-seeking, deception) from compound constructs (deceptive alignment, goal drift) or from scenarios (flash war, autonomous economy).
- **Asymmetric depth**: the bioterrorism and AI race sections are much more fleshed out than the goal-drift section, which the authors explicitly acknowledge is "the most cutting-edge and the most speculative" (§5.2).
- **Selection of cited opponents**: the paper quotes Larry Page, Jürgen Schmidhuber, and Richard Sutton as examples of accelerationism but does not engage with their full arguments, which functions as framing rather than rebuttal.
- **Suggestions are loosely coupled to evidence**: policy proposals (e.g., symmetric international off-switch, legal liability for cloud compute providers, 30% safety research) are presented without quantitative analysis of feasibility or effectiveness.
- **Intended audience bias**: explicitly written for a general audience rather than for empirical AI researchers, so technical distinctions are sometimes elided for accessibility.
