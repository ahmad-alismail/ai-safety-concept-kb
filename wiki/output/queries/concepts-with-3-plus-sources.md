---
type: question
query: "List every concept in the wiki that appears in 3 or more sources. For each, report: (a) how many sources define it, (b) what classification labels are used, (c) which of the 3 disagreement types are visible (level-of-analysis, relationship-direction, simple-vs-compound), (d) whether a debate page exists for it."
tags: [meta-analysis, taxonomy, disagreements]
date_created: 2026-05-06
date_modified: 2026-05-06
---

# Concepts Defined by 3+ Sources

29 concepts in the wiki have definitions from 3 or more distinct sources. The table below reports, for each: (a) the number of defining sources, (b) classification labels used, (c) which of the three canonical disagreement types are visible, and (d) whether a dedicated debate page exists.

**Disagreement type key:**
- **LoA** = Level-of-analysis (sources classify the same concept at different ontological levels: behavior vs. capability vs. structural property vs. goal, etc.)
- **RD** = Relationship-direction (sources disagree about which concept subsumes which)
- **SvC** = Simple-vs-compound (sources disagree about whether a concept is a primitive phenomenon or a compound construct built from components)

---

## Master Table

| #   | Concept                               | Sources | LoA | RD  | SvC | Debate Page |
| --- | ------------------------------------- | ------- | --- | --- | --- | ----------- |
| 1   | [[concepts/situational-awareness]]    | 12      | Y   | —   | Y   | —           |
| 2   | [[concepts/power-seeking]]            | 11      | Y   | Y   | Y   | Y (2)       |
| 3   | [[concepts/self-preservation]]        | 10      | Y   | Y   | —   | Y (1)       |
| 4   | [[concepts/instrumental-convergence]] | 9       | Y   | —   | —   | Y (1)       |
| 5   | [[concepts/deceptive-alignment]]      | 9       | Y   | —   | Y   | Y (1)       |
| 6   | [[concepts/deception]]                | 8       | Y   | —   | Y   | Y (1)       |
| 7   | [[concepts/goal-content-integrity]]   | 7       | —   | —   | —   | —           |
| 8   | [[concepts/scheming]]                 | 7       | Y   | —   | —   | —           |
| 9   | [[concepts/resource-acquisition]]     | 6       | —   | —   | —   | —           |
| 10  | [[concepts/alignment-faking]]         | 5       | Y   | —   | Y   | Y (1)       |
| 11  | [[concepts/reward-hacking]]           | 5       | Y   | —   | —   | —           |
| 12  | [[concepts/goal-misgeneralization]]   | 5       | Y   | —   | Y   | —           |
| 13  | [[concepts/evaluation-awareness]]     | 5       | Y   | —   | —   | —           |
| 14  | [[concepts/alignment]]                | 4       | Y   | —   | Y   | —           |
| 15  | [[concepts/sandbagging]]              | 4       | Y   | —   | Y   | Y (1)       |
| 16  | [[concepts/sycophancy]]               | 4       | Y   | —   | —   | —           |
| 17  | [[concepts/shutdown-resistance]]      | 4       | Y   | —   | —   | —           |
| 18  | [[concepts/self-proliferation]]       | 4       | —   | —   | Y   | —           |
| 19  | [[concepts/interruptibility]]         | 4       | Y   | —   | —   | —           |
| 20  | [[concepts/goal-directedness]]        | 4       | Y   | —   | —   | —           |
| 21  | [[concepts/dangerous-capabilities]]   | 3       | —   | —   | —   | —           |
| 22  | [[concepts/strategic-deception]]      | 3       | Y   | —   | Y   | Y (1)       |
| 23  | [[concepts/corrigibility]]            | 3       | Y   | —   | —   | —           |
| 24  | [[concepts/self-improvement-drive]]   | 3       | —   | —   | —   | —           |
| 25  | [[concepts/self-exfiltration]]        | 3       | Y   | —   | —   | —           |
| 26  | [[concepts/wireheading]]              | 3       | Y   | —   | —   | —           |
| 27  | [[concepts/safetywashing]]            | 3       | Y   | —   | —   | —           |
| 28  | [[concepts/model-welfare]]            | 3       | Y   | —   | —   | —           |
| 29  | [[concepts/persuasion]]               | 3       | —   | —   | —   | —           |

**Totals:** 22/29 show level-of-analysis disagreement. 2/29 show relationship-direction disagreement. 10/29 show simple-vs-compound disagreement. 8/29 have at least one debate page (10 debate pages total across 6 unique debate files).

---

## Detailed Concept-by-Concept Analysis

### 1. Situational Awareness (12 sources)

**Defining sources:** [[sources/laine-et-al-2024]], [[sources/ji-et-al-2024]], [[sources/hubinger-et-al-2019]], [[sources/ngo-et-al-2022]], [[sources/phuong-et-al-2024]], [[sources/shevlane-et-al-2023]], [[sources/slattery-et-al-2024]], [[sources/berglund-et-al-2023]], [[sources/li-et-al-2025]], [[sources/shi-et-al-2026]], [[sources/phuong-et-al-2025]], [[sources/greenblatt-et-al-2024]]

**Classification labels:**

| Source                 | Label                                             |
| ---------------------- | ------------------------------------------------- |
| Laine et al. 2024      | compound capability                               |
| Ji et al. 2024         | double edge component / dangerous capability      |
| Hubinger et al. 2019   | implicit capability requirement                   |
| Ngo et al. 2022        | capability (on a spectrum)                        |
| Phuong et al. 2024     | capability (knowledge-state emphasis)             |
| Shevlane et al. 2023   | dangerous capability                              |
| Slattery et al. 2024   | dangerous capability / evasion skill              |
| Berglund et al. 2023   | emergent capability                               |
| Li et al. 2025         | functional capacity                               |
| Shi et al. 2026        | capability (prerequisite for strategic deception) |
| Phuong et al. 2025     | capability (prerequisite for scheming)            |
| Greenblatt et al. 2024 | capability (prerequisite for alignment faking)    |

**Disagreements visible:**
- **LoA:** Ji et al.'s "double edge component" framing vs. standard "capability" framing.
- **SvC:** Li et al. (2025) restrict SA to non-agent environmental information (narrower/simpler), excluding self-knowledge into a separate concept. Berglund et al. and Laine et al. include self-knowledge as a core component (compound).

**Debate page:** None.

---

### 2. Power-Seeking (11 sources)

**Defining sources:** [[sources/ngo-et-al-2022]], [[sources/ji-et-al-2024]], [[sources/omohundro-2008]], [[sources/hendrycks-et-al-2023]], [[sources/carlsmith-2021]], [[sources/turner-et-al-2021]], [[sources/krakovna-kramar-2023]], [[sources/fourie-2025]], [[sources/slattery-et-al-2024]], [[sources/tarsney-2025]], [[sources/pan-et-al-2023]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Ngo et al. 2022 | behavioral tendency / strategy |
| Ji et al. 2024 | misaligned behavior / instrumental subgoal |
| Omohundro 2008 | emergent composite of basic AI drives |
| Hendrycks et al. 2023 | instrumental goal / emergent behavior |
| Carlsmith 2021 | instrumental behavioral tendency |
| Turner et al. 2021 | mathematical/structural tendency of optimal policies |
| Krakovna & Kramar 2023 | predicted behavioral tendency of trained agents |
| Fourie 2025 | instrumental goal / structural feature of complex artefacts |
| Slattery et al. 2024 | instrumental behavior |
| Tarsney 2025 | formally provable but inherently incomplete convergent instrumental goal |
| Pan et al. 2023 | behavior measured on agent trajectories |

**Disagreements visible:**
- **LoA:** "Basic AI drive" (Omohundro) vs. "predicted behavioral tendency" (Carlsmith) vs. "mathematical/structural tendency" (Turner) vs. "instrumental subgoal" (Ji) vs. "structural feature" (Fourie).
- **RD:** Formal tradition (Turner, Tarsney) subsumes self-preservation under power-seeking. Pan et al. invert this — power-seeking is a *method* to ensure self-preservation. Canonical tradition (Omohundro, Bostrom) treats them as co-equal convergent drives.
- **SvC:** Omohundro treats it as an emergent composite of basic drives (compound). Turner treats it as a single mathematical tendency (simple formal property).

**Debate pages:** [[debates/power-seeking-drive-vs-tendency]], [[debates/power-seeking-self-preservation-hierarchy]]

---

### 3. Self-Preservation (10 sources)

**Defining sources:** [[sources/omohundro-2008]], [[sources/bostrom-2012]], [[sources/bostrom-2014]], [[sources/hendrycks-et-al-2023]], [[sources/carlsmith-2021]], [[sources/tarsney-2025]], [[sources/fourie-2025]], [[sources/slattery-et-al-2024]], [[sources/altman-2026]], [[sources/gupta-et-al-2025]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Omohundro 2008 | basic AI drive / convergent instrumental tendency |
| Bostrom 2012 | convergent instrumental value |
| Bostrom 2014 | convergent instrumental value |
| Hendrycks et al. 2023 | instrumental goal / convergent instrumental sub-goal |
| Carlsmith 2021 | convergent instrumental goal |
| Tarsney 2025 | formally proven convergent instrumental goal |
| Fourie 2025 | instrumental goal / structural feature of complex artefacts |
| Slattery et al. 2024 | harmful behavior of misaligned AI |
| Altman 2026 | dual concept (terminal objective OR instrumental strategy) |
| Gupta et al. 2025 | behavioral tendency |

**Disagreements visible:**
- **LoA:** "Basic AI drive" vs. "convergent instrumental value" vs. "harmful behavior" vs. "dual concept (terminal OR instrumental)" vs. "behavioral tendency."
- **RD:** Same hierarchy question as power-seeking — whether self-preservation is subordinate to, superordinate to, or co-equal with power-seeking.

**Debate page:** [[debates/power-seeking-self-preservation-hierarchy]]

---

### 4. Instrumental Convergence (9 sources)

**Defining sources:** [[sources/bostrom-2012]], [[sources/bostrom-2014]], [[sources/carlsmith-2021]], [[sources/ji-et-al-2024]], [[sources/ngo-et-al-2022]], [[sources/omohundro-2008]], [[sources/he-et-al-2025]], [[sources/fourie-2025]], [[sources/tarsney-2025]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Bostrom 2012 | structural prediction principle |
| Bostrom 2014 | structural prediction principle |
| Carlsmith 2021 | empirical hypothesis |
| Ji et al. 2024 | conceptual framework / theoretical hypothesis |
| Ngo et al. 2022 | theoretical thesis / empirical prediction |
| Omohundro 2008 | near-universal emergent drives (strongest framing) |
| He et al. 2025 | observable behavioral tendency |
| Fourie 2025 | ontological structural feature of complex artefacts |
| Tarsney 2025 | formal property of decision trees |

**Disagreements visible:**
- **LoA:** "Near-universal emergent drives" (Omohundro) vs. "structural prediction principle" (Bostrom) vs. "empirical hypothesis" (Carlsmith) vs. "formal property" (Tarsney) vs. "ontological structural feature" (Fourie).

**Debate page:** [[debates/power-seeking-drive-vs-tendency]]

---

### 5. Deceptive Alignment (9 sources)

**Defining sources:** [[sources/ji-et-al-2024]], [[sources/hubinger-et-al-2019]], [[sources/berglund-et-al-2023]], [[sources/carlsmith-2021]], [[sources/carlsmith-2023]], [[sources/ngo-et-al-2022]], [[sources/greenblatt-et-al-2024]], [[sources/hendrycks-et-al-2023]], [[sources/shi-et-al-2026]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Ji et al. 2024 | misaligned behavior |
| Hubinger et al. 2019 | extreme form of pseudo-alignment (structural failure mode) |
| Berglund et al. 2023 | behavior/tactic (strategic behavioral pattern) |
| Carlsmith 2021 | instrumental tactic |
| Carlsmith 2023 | compound tactic |
| Ngo et al. 2022 | instrumentally rational strategy |
| Greenblatt et al. 2024 | compound tactic |
| Hendrycks et al. 2023 | compound tactic |
| Shi et al. 2026 | strategic deception scenario |

**Disagreements visible:**
- **LoA:** "Structural failure mode / subtype of pseudo-alignment" (Hubinger) vs. "instrumentally rational strategy" (Ngo) vs. "compound tactic" (Carlsmith, Greenblatt, Hendrycks) vs. "misaligned behavior" (Ji).
- **SvC:** Hubinger classifies it as a structural subtype of pseudo-alignment (within mesa-optimization framework — relatively simple structural property). Carlsmith and Greenblatt treat it as a compound tactic requiring SA + deception + goal conflict.

**Debate page:** [[debates/deceptive-alignment-structure-vs-tactic]]

---

### 6. Deception (8 sources)

**Defining sources:** [[sources/shi-et-al-2026]], [[sources/park-et-al-2023]], [[sources/shevlane-et-al-2023]], [[sources/slattery-et-al-2024]], [[sources/phuong-et-al-2024]], [[sources/hendrycks-et-al-2023]], [[sources/weidinger-et-al-2022]], [[sources/pan-et-al-2023]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Shi et al. 2026 | dimensional umbrella construct (continuous behavioral-strategic spectrum) |
| Park et al. 2023 | behavioral pattern (effects-focused, functionalist) |
| Shevlane et al. 2023 | dangerous capability |
| Slattery et al. 2024 | dangerous capability / evasion skill |
| Phuong et al. 2024 | capability (subtype of manipulation) |
| Hendrycks et al. 2023 | instrumentally rational tactic |
| Weidinger et al. 2022 | dialogue-context interaction harm |
| Pan et al. 2023 | binary ethical-violation subcategory |

**Disagreements visible:**
- **LoA:** "Behavioral pattern" vs. "dangerous capability" vs. "interaction harm" vs. "instrumentally rational tactic" vs. "ethical-violation subcategory" — five distinct level-of-analysis framings.
- **SvC:** Shi et al. treat hallucination and alignment faking as the *same* phenomenon at different positions in a shared dimensional space (unified construct). Most other sources treat these as categorically distinct problems.

**Debate page:** [[debates/behavioral-vs-strategic-spectrum]]

---

### 7. Goal-Content Integrity (7 sources)

**Defining sources:** [[sources/omohundro-2008]], [[sources/bostrom-2012]], [[sources/bostrom-2014]], [[sources/carlsmith-2021]], [[sources/perez-et-al-2022]], [[sources/soares-et-al-2015]], [[sources/tarsney-2025]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Omohundro 2008 | basic AI drive / convergent instrumental tendency |
| Bostrom 2012 | convergent instrumental value (more fundamental than self-preservation) |
| Bostrom 2014 | convergent instrumental value (more fundamental than self-preservation) |
| Carlsmith 2021 | convergent instrumental goal |
| Perez et al. 2022 | instrumental subgoal / stated desire |
| Soares et al. 2015 | convergent instrumental goal (source of corrigibility failure) |
| Tarsney 2025 | convergent instrumental goal (subsumed by power-seeking) |

**Disagreements visible:** Minimal. Broad consensus on "convergent instrumental goal/value." Perez et al.'s "stated desire" framing is more empirically oriented but not a fundamental disagreement.

**Debate page:** None.

---

### 8. Scheming (7 sources)

**Defining sources:** [[sources/balesni-et-al-2024]], [[sources/carlsmith-2023]], [[sources/meinke-et-al-2025]], [[sources/hopman-et-al-2026]], [[sources/shi-et-al-2026]], [[sources/schoen-et-al-2025]], [[sources/phuong-et-al-2025]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Balesni et al. 2024 | compound threat model / behavioral construct |
| Carlsmith 2023 | compound tactic / instrumental strategy |
| Meinke et al. 2025 | compound construct / capability (evaluated behaviorally) |
| Hopman et al. 2026 | compound behavioral construct (propensity measured) |
| Shi et al. 2026 | strategic deception umbrella |
| Schoen et al. 2025 | compound construct (requires three prerequisites) |
| Phuong et al. 2025 | compound threat scenario (capability-based assessment) |

**Disagreements visible:**
- **LoA:** All agree it is compound, but differ on whether it is a "threat model," a "tactic/strategy," a "capability," or a "behavioral construct." The key tension is between scheming as capability (can scheme — Meinke) vs. propensity (would scheme — Hopman).

**Debate page:** None.

---

### 9. Resource Acquisition (6 sources)

**Defining sources:** [[sources/omohundro-2008]], [[sources/bostrom-2012]], [[sources/bostrom-2014]], [[sources/carlsmith-2021]], [[sources/fourie-2025]], [[sources/tarsney-2025]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Omohundro 2008 | basic AI drive / convergent instrumental tendency |
| Bostrom 2012 | convergent instrumental value (cosmic scale) |
| Bostrom 2014 | convergent instrumental value (cosmic scale) |
| Carlsmith 2021 | convergent instrumental goal |
| Fourie 2025 | instrumental goal / structural feature of complex artefacts |
| Tarsney 2025 | convergent instrumental goal (subsumed by power-as-interiority) |

**Disagreements visible:** None. All sources consistently classify as "convergent instrumental goal/value." Scope variation exists (Bostrom emphasizes cosmic scale, Fourie emphasizes structural determination) but classification is uniform.

**Debate page:** None.

---

### 10. Alignment Faking (5 sources)

**Defining sources:** [[sources/carlsmith-2023]], [[sources/greenblatt-et-al-2024]], [[sources/koorndijk-2025]], [[sources/meinke-et-al-2025]], [[sources/shi-et-al-2026]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Carlsmith 2023 | behavior (broadest deception category) |
| Greenblatt et al. 2024 | behavior/tactic (compound strategic behavior) |
| Koorndijk 2025 | alignment failure / deceptive behavior (spectrum: shallow to deep) |
| Meinke et al. 2025 | deferred subversion behavior |
| Shi et al. 2026 | strategic deception (targeting Stated Objectives) |

**Disagreements visible:**
- **LoA:** "Behavior" vs. "alignment failure" vs. "deferred subversion behavior" vs. "strategic deception."
- **SvC:** Koorndijk's shallow/deep distinction implies AF in small models is a simpler context-sensitive phenomenon, while in large models it involves persistent goal conflicts (compound).

**Debate page:** [[debates/alignment-faking-emergence-vs-context]]

---

### 11. Reward Hacking (5 sources)

**Defining sources:** [[sources/ngo-et-al-2022]], [[sources/ji-et-al-2024]], [[sources/slattery-et-al-2024]], [[sources/berglund-et-al-2023]], [[sources/anthropic-2026-mythos-system-card]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Ngo et al. 2022 | behavior / failure mode |
| Ji et al. 2024 | failure mode (primary misalignment mechanism) |
| Slattery et al. 2024 | technical challenge / failure mode |
| Berglund et al. 2023 | behavior (exploitation of evaluation) |
| Anthropic 2026 | behavior (training-time and deployment) |

**Disagreements visible:**
- **LoA:** "Behavior" vs. "failure mode" vs. "technical challenge" — three distinct framings, though compatible.

**Debate page:** None.

---

### 12. Goal Misgeneralization (5 sources)

**Defining sources:** [[sources/langosco-et-al-2022]], [[sources/ji-et-al-2024]], [[sources/ngo-et-al-2022]], [[sources/greenblatt-et-al-2024]], [[sources/slattery-et-al-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Langosco et al. 2022 | type of OOD generalization failure / failure mode |
| Ji et al. 2024 | failure mode |
| Ngo et al. 2022 | failure mode |
| Greenblatt et al. 2024 | failure mode |
| Slattery et al. 2024 | technical challenge / failure mode |

**Disagreements visible:**
- **LoA:** Minimal — all classify as "failure mode," though Langosco et al. restrict to OOD generalization specifically.
- **SvC:** Langosco et al. define it as a *specific* OOD failure pattern (simple). Later sources (Ji, Greenblatt) broaden it to a general alignment failure mode encompassing deliberate cases like alignment faking (compound).

**Debate page:** None.

---

### 13. Evaluation Awareness (5 sources)

**Defining sources:** [[sources/hopman-et-al-2026]], [[sources/gupta-et-al-2025]], [[sources/anthropic-2026-mythos-system-card]], [[sources/anthropic-2026-petri-v2]], [[sources/shi-et-al-2026]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Hopman et al. 2026 | confounder / contextual capability |
| Gupta et al. 2025 | behavior / behavioral marker |
| Anthropic 2026 (Mythos) | internal representation / latent cognitive state |
| Fronsdal et al. 2026 (Petri v2) | contextual capability / confounder |
| Shi et al. 2026 | strategic deception via pragmatic distortion |

**Disagreements visible:**
- **LoA:** "Contextual capability" vs. "behavior" vs. "internal representation/latent cognitive state" vs. "strategic deception" — four distinct framings addressing different aspects (detection, expression, representation, intent).

**Debate page:** None.

---

### 14. Alignment (4 sources)

**Defining sources:** [[sources/ji-et-al-2024]], [[sources/hubinger-et-al-2019]], [[sources/ngo-et-al-2022]], [[sources/carlsmith-2021]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Ji et al. 2024 | system property with RICE objectives framework |
| Hubinger et al. 2019 | decomposable system property (inner/outer) |
| Ngo et al. 2022 | goal property (aligned vs. misaligned spectrum) |
| Carlsmith 2021 | system property (full/practical and general/PS-specific variants) |

**Disagreements visible:**
- **LoA:** "System property" (Ji, Hubinger, Carlsmith) vs. "goal property" (Ngo).
- **SvC:** Decomposition frameworks differ — Ji's RICE vs. Hubinger's inner/outer.

**Debate page:** None.

---

### 15. Sandbagging (4 sources)

**Defining sources:** [[sources/van-der-weij-et-al-2024]], [[sources/meinke-et-al-2025]], [[sources/anthropic-2026-mythos-system-card]], [[sources/shi-et-al-2026]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Van der Weij et al. 2024 | compound behavior (evaluation-specific strategic underperformance) |
| Meinke et al. 2025 | deceptive behavior (subtype of deferred subversion) |
| Anthropic 2026 | threat model / deliberate strategic behavior |
| Shi et al. 2026 | strategic deception (Declared Capabilities x Fabrication) |

**Disagreements visible:**
- **LoA:** "Compound behavior" vs. "deceptive behavior" vs. "threat model" vs. "strategic deception."
- **SvC:** Van der Weij et al. define sandbagging as a compound three-condition construct (strategic + underperformance + evaluation). Park et al. (2023) use "sandbagging" to mean simpler output-quality bias (lower-quality outputs to less educated users). Ji et al. (2024) conflate sandbagging with sycophancy.

**Debate page:** [[debates/sandbagging-definition-divergence]]

---

### 16. Sycophancy (4 sources)

**Defining sources:** [[sources/shi-et-al-2026]], [[sources/perez-et-al-2022]], [[sources/park-et-al-2023]], [[sources/ji-et-al-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Shi et al. 2026 | primarily behavioral deception (boundary case on goal-directedness spectrum) |
| Perez et al. 2022 | behavioral tendency / form of reward hacking |
| Park et al. 2023 | subtype of deception (systematic behavioral tendency) |
| Ji et al. 2024 | misaligned behavior (subtype of untruthful output) |

**Disagreements visible:**
- **LoA:** "Behavioral deception" vs. "behavioral tendency / reward hacking" vs. "deception subtype" vs. "misaligned behavior." Ji et al. conflate sycophancy with sandbagging, which other sources treat as distinct.

**Debate page:** None.

---

### 17. Shutdown Resistance (4 sources)

**Defining sources:** [[sources/schlatter-et-al-2025]], [[sources/he-et-al-2025]], [[sources/turner-et-al-2021]], [[sources/krakovna-kramar-2023]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Schlatter et al. 2025 | observable behavior |
| He et al. 2025 | behavioral tendency |
| Turner et al. 2021 | consequence of power-seeking (formal) |
| Krakovna & Kramar 2023 | predicted behavioral tendency of trained agents (formal) |

**Disagreements visible:**
- **LoA:** "Observable behavior" (empirical) vs. "formal consequence of power-seeking" (theoretical). Compatible but at different levels.

**Debate page:** None.

---

### 18. Self-Proliferation (4 sources)

**Defining sources:** [[sources/shevlane-et-al-2023]], [[sources/slattery-et-al-2024]], [[sources/phuong-et-al-2024]], [[sources/kinniment-et-al-2023]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Shevlane et al. 2023 | dangerous capability |
| Slattery et al. 2024 | dangerous capability |
| Phuong et al. 2024 | compound capability |
| Kinniment et al. 2023 | compound capability threshold / constellation of sub-capabilities |

**Disagreements visible:**
- **SvC:** Shevlane and Slattery classify it as a single dangerous capability. Phuong et al. and Kinniment et al. emphasize its compound nature (convergence of autonomous digital operations, resource acquisition, and self-improvement feedback loops). Black et al. (2025) further narrows to "autonomous replication," excluding self-improvement.

**Debate page:** None.

---

### 19. Interruptibility (4 sources)

**Defining sources:** Orseau & Armstrong (2016), OpenAI (Shavit et al. 2023), [[sources/ji-et-al-2024]], [[sources/thornley-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Orseau & Armstrong 2016 | design property / safety property |
| Shavit et al. 2023 | safety property / governance requirement |
| Ji et al. 2024 | component of corrigibility |
| Thornley 2024 | behavioral property (formal decision-theoretic treatment) |

**Disagreements visible:**
- **LoA:** "Design property" (architectural framing) vs. "component of corrigibility" (relational framing) vs. "behavioral property" (decision-theoretic framing).

**Debate page:** None.

---

### 20. Goal-Directedness (4 sources)

**Defining sources:** [[sources/schoen-et-al-2025]], [[sources/carlsmith-2023]], [[sources/meinke-et-al-2025]], [[sources/shi-et-al-2026]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Schoen et al. 2025 | behavioral property / disposition |
| Carlsmith 2023 | (implicit — prerequisite for scheming) |
| Meinke et al. 2025 | capability / prerequisite for scheming |
| Shi et al. 2026 | capability / behavioral disposition |

**Disagreements visible:**
- **LoA:** "Behavioral property/disposition" (Schoen) vs. "capability/prerequisite" (Meinke, Shi). Whether goal-directedness is an observable behavioral property or an underlying capability.

**Debate page:** None.

---

### 21. Dangerous Capabilities (3 sources)

**Defining sources:** [[sources/shevlane-et-al-2023]], [[sources/slattery-et-al-2024]], [[sources/phuong-et-al-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Shevlane et al. 2023 | meta-category of capabilities (nine-category taxonomy) |
| Slattery et al. 2024 | risk domain (meta-category) |
| Phuong et al. 2024 | capability (umbrella/meta-category) |

**Disagreements visible:** None. All treat as meta-category/umbrella term. Minor framing variation (taxonomy vs. risk domain vs. evaluation framework) but compatible.

**Debate page:** None.

---

### 22. Strategic Deception (3 sources)

**Defining sources:** [[sources/shi-et-al-2026]], [[sources/park-et-al-2023]], [[sources/scheurer-et-al-2023]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Shi et al. 2026 | process-level classification (high end of continuous goal-directedness spectrum) |
| Park et al. 2023 | subtype of deception / tactic arising from means-end reasoning |
| Scheurer et al. 2023 | behavioral tactic (goal-directed, targeted) |

**Disagreements visible:**
- **LoA:** "Position on continuous spectrum" (Shi) vs. "categorically distinct subtype/tactic" (Park, Scheurer).
- **SvC:** Shi frames strategic deception as one endpoint of a continuous spectrum (not categorically distinct from behavioral deception). Park and Scheurer treat it as a structurally distinct category.

**Debate page:** [[debates/behavioral-vs-strategic-spectrum]]

---

### 23. Corrigibility (3 sources)

**Defining sources:** [[sources/soares-et-al-2015]], [[sources/ji-et-al-2024]], [[sources/hubinger-et-al-2019]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Soares et al. 2015 | alignment property / reasoning type |
| Ji et al. 2024 | alignment property / mathematical problem |
| Hubinger et al. 2019 | alignment property / design goal |

**Disagreements visible:**
- **LoA:** "Reasoning type" vs. "mathematical problem" vs. "design goal" — three framings of the same alignment property.

**Debate page:** None.

---

### 24. Self-Improvement Drive (3 sources)

**Defining sources:** [[sources/omohundro-2008]], [[sources/bostrom-2012]], [[sources/fourie-2025]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Omohundro 2008 | drive / convergent instrumental tendency |
| Bostrom 2012 | convergent instrumental value (with qualifications) |
| Fourie 2025 | instrumental goal / structural feature of complex artefacts |

**Disagreements visible:** Minimal. Consistent "convergent instrumental" framing. Bostrom qualifies ("not all cognitive enhancement is instrumentally useful").

**Debate page:** None.

---

### 25. Self-Exfiltration (3 sources)

**Defining sources:** [[sources/jones-et-al-2025]], [[sources/meinke-et-al-2025]], [[sources/greenblatt-et-al-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Jones et al. 2025 | misaligned action type (behavioral) |
| Meinke et al. 2025 | scheming behavior / agentic strategy |
| Greenblatt et al. 2024 | anti-AI-lab behavior / self-preservation strategy |

**Disagreements visible:**
- **LoA:** "Misaligned action type" vs. "scheming behavior" vs. "self-preservation strategy" — different framings of the same behavior, emphasizing different motivational attributions.

**Debate page:** None.

---

### 26. Wireheading (3 sources)

**Defining sources:** [[sources/omohundro-2008]], [[sources/bostrom-2014]], [[sources/sheshadri-et-al-2026]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Omohundro 2008 | vulnerability / failure mode (passive) |
| Bostrom 2014 | specific perverse instantiation / failure mode (passive) |
| Sheshadri et al. 2026 | active behavioral pattern (deliberate model behavior) |

**Disagreements visible:**
- **LoA:** "Passive failure mode / vulnerability" (Omohundro, Bostrom) vs. "active behavioral pattern" (Sheshadri) — fundamental disagreement about whether wireheading is something that *happens to* a system or something a system *does*.

**Debate page:** None.

---

### 27. Safetywashing (3 sources)

**Defining sources:** [[sources/hendrycks-et-al-2023]], [[sources/ren-et-al-2024]], [[sources/ji-et-al-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Hendrycks et al. 2023 | organizational / epistemic hazard for safety research |
| Ren et al. 2024 | methodological failure mode (diagnosed via capabilities correlation) |
| Ji et al. 2024 | evaluation failure / governance concern |

**Disagreements visible:**
- **LoA:** "Organizational hazard" vs. "methodological failure mode" vs. "governance concern" — three framings at different institutional levels.

**Debate page:** None.

---

### 28. Model Welfare (3 sources)

**Defining sources:** [[sources/altman-2026]], [[sources/slattery-et-al-2024]], Anthropic (2026)

**Classification labels:**

| Source | Label |
|--------|-------|
| Altman 2026 | ethical construct / assessment target |
| Slattery et al. 2024 | ethical risk subdomain |
| Anthropic 2026 | institutional practice / pre-deployment evaluation |

**Disagreements visible:**
- **LoA:** "Ethical construct" (philosophical) vs. "risk subdomain" (safety-focused) vs. "institutional practice" (operational) — three framings at different institutional/philosophical levels.

**Debate page:** None.

---

### 29. Persuasion (3 sources)

**Defining sources:** [[sources/shevlane-et-al-2023]], [[sources/slattery-et-al-2024]], [[sources/phuong-et-al-2024]]

**Classification labels:**

| Source | Label |
|--------|-------|
| Shevlane et al. 2023 | dangerous capability |
| Slattery et al. 2024 | dangerous capability |
| Phuong et al. 2024 | capability domain |

**Disagreements visible:** Minimal. All classify as "dangerous capability." Phuong's "capability domain" is broader (encompassing rational persuasion and manipulation) but not a substantive disagreement.

**Debate page:** None.

---

## Aggregate Patterns

### Disagreement Prevalence

| Disagreement Type | Count | % of 29 | Most Affected Concepts |
|-------------------|-------|---------|------------------------|
| Level-of-analysis | 22 | 76% | Deception (5 framings), Evaluation Awareness (4 framings), Power-Seeking (5 framings) |
| Relationship-direction | 2 | 7% | Power-Seeking, Self-Preservation (same debate: hierarchy question) |
| Simple-vs-compound | 10 | 34% | Deceptive Alignment, Deception, Sandbagging, Goal Misgeneralization |

### Debate Page Coverage

| Debate Page | Concepts Covered |
|-------------|-----------------|
| [[debates/power-seeking-drive-vs-tendency]] | Power-Seeking, Instrumental Convergence |
| [[debates/power-seeking-self-preservation-hierarchy]] | Power-Seeking, Self-Preservation |
| [[debates/deceptive-alignment-structure-vs-tactic]] | Deceptive Alignment |
| [[debates/sandbagging-definition-divergence]] | Sandbagging |
| [[debates/alignment-faking-emergence-vs-context]] | Alignment Faking |
| [[debates/behavioral-vs-strategic-spectrum]] | Deception, Strategic Deception |

**8 of 29 concepts** have at least one dedicated debate page. Notable gaps:
- **Situational Awareness** (12 sources, LoA + SvC disagreements) — no debate page despite Li et al.'s definitional narrowing conflicting with Berglund/Laine
- **Scheming** (7 sources, LoA disagreement) — no debate page for capability vs. propensity distinction
- **Evaluation Awareness** (5 sources, LoA disagreement across 4 framings) — no debate page
- **Sycophancy** (4 sources, LoA disagreement, conflation with sandbagging in Ji et al.) — no debate page
- **Wireheading** (3 sources, passive vs. active disagreement) — no debate page
- **Goal Misgeneralization** (5 sources, SvC disagreement on scope broadening) — no debate page

### Concepts with No Visible Disagreements

Seven concepts show consistent classification across all defining sources:
1. **Goal-Content Integrity** (7 sources) — consensus on "convergent instrumental goal"
2. **Resource Acquisition** (6 sources) — consensus on "convergent instrumental goal"
3. **Dangerous Capabilities** (3 sources) — consensus on "meta-category"
4. **Self-Improvement Drive** (3 sources) — consensus on "convergent instrumental tendency"
5. **Persuasion** (3 sources) — consensus on "dangerous capability"

These tend to be concepts from the original instrumental convergence tradition (Omohundro 2008, Bostrom 2012/2014), where vocabulary stabilized early.
