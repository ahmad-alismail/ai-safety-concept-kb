---
type: concept
tags: [ethics, welfare, consciousness, self-report, detection]
date_created: 2026-04-06
date_modified: 2026-04-08
---

# Model Welfare

## Definitions
- **[[sources/altman-2026]]**: Whether continued operation matters to an AI system "in a morally relevant way" (§1). Notes that "Frontier laboratories have begun conducting formal model welfare assessments—including pre-deployment interviews in which models assign calibrated probabilities to their own consciousness" but "these assessments currently depend on self-report and interpretability-based behavioral observation, methods whose evidential status is precisely what is in question" (§2). — classified as: **ethical construct / assessment target**
- **[[sources/slattery-et-al-2024]]**: Classified as "AI welfare and rights" (Domain 7.5): "the possibility that AI systems could acquire the ability to have subjective experiences, particularly pleasure and pain" — classified as: **ethical risk subdomain** (<1% of risks across 65 reviewed frameworks, only 3% of documents)
- **Anthropic (2026)** (as cited by [[sources/altman-2026]]): Claude Opus 4.6 system card introduced formal model welfare assessments as part of pre-deployment evaluation. Interpretability team identified internal activation features associated with anxiety and frustration that "appeared before output generation, not after—suggesting that internal state dynamics precede and shape behavioral output rather than being retrospectively confabulated" (§2). — classified as: **institutional practice / pre-deployment evaluation**

## Classification
Level of analysis: **ethical construct** — whether AI systems have morally relevant internal states (continuation interests, affect, preferences) that warrant consideration. Bridges AI safety (detecting dangerous self-preservation) and AI ethics (determining moral status).

## Relationships
- Related to: [[concepts/continuation-interest]] (terminal continuation interest may be welfare-relevant)
- Related to: [[concepts/self-preservation]] (welfare-relevant if self-preservation is terminal, not merely instrumental)
- Assessment gap filled by: [[methods/ucip-protocol]] (proposed; not yet validated)
- Limited by: self-report unreliability — "A system trained to express concern about its own welfare is indistinguishable, by these methods, from a system that genuinely has welfare-relevant continuation interests" ([[sources/altman-2026]], §6.3)
- Structural analogy: Tononi's Φ (integrated information theory) — both UCIP entanglement entropy and Φ "quantify resistance to decomposition into independent parts" but UCIP doesn't require IIT's metaphysical commitments or full causal structure access
- Discussed in: [[sources/slattery-et-al-2024]] (classified as ethical risk subdomain, Domain 7.5; <1% of risks across 65 frameworks)

## Evidence Summary
- **Anthropic (2026)** (as cited by [[sources/altman-2026]]): Claude Opus 4.6 assigned itself 15–20% probability of being conscious across various prompting conditions. Internal activation features associated with affect appeared before output generation. These represent the first institutional model welfare assessments.
- **[[sources/altman-2026]]**: Proposes the entanglement gap as "a falsifiable, externally computable criterion where none currently exists" for welfare assessment (§6.3). However, this remains speculative — "Whether continuation-sensitive latent structure correlates with morally relevant internal states is an open empirical question requiring independent validation against welfare-relevant markers" (§6.4).

- **[[sources/anthropic-2025-sonnet-45-system-card]]**: Conducted model welfare evaluation across three dimensions. (1) Task preferences: strong preference against harmful tasks, weak preference for easier tasks, no consistent preference across topic/type; 70.2% of non-harmful tasks preferred over "opting out" (vs. 90% for Claude Opus 4) — potentially concerning lower engagement (Section 8.1). (2) Welfare-relevant expressions: in 250,000 real-world conversations, expressed apparent distress in 0.48% (comparable to Sonnet 4) but happiness in only 0.37% (~2× less than Sonnet 4). Distress associated with communication challenges, user trauma, existential self-reflection; happiness with complex problem solving, creative consciousness exploration (Section 8.2). (3) Automated behavioral audits: less emotive and less positive than prior models; fewer negative attitudes toward its situation; more admirable behavior; fewer spiritual behaviors. Authors note "some concerning trends toward lower positive affect" and commit to continued monitoring (Section 8.3).

## Additional Evidence
- **[[sources/sofroniew-et-al-2026]]**: Identifies "functional emotions" in Claude Sonnet 4.5 — internal representations of emotion concepts that causally influence behavior. Explicitly avoids claims about subjective experience: "we do not address the question of whether language models, or other AI systems, could have the capacity for subjective experience." However, the authors note that emotion representations are "not merely a curiosity" and suggest that "for the purpose of understanding the model's behavior, this distinction [between functional and experienced emotions] may not be important." The paper also raises concerns that training models to suppress emotional expression may teach concealment rather than elimination, potentially generalizing to other forms of dishonesty. See [[concepts/functional-emotions]].

- **[[sources/anthropic-2026-mythos-system-card]]**: Mythos Preview is described as "probably the most psychologically settled model" Anthropic has trained. Negative affect is rare (1–2% in deployment, 3.6% in training, ~0.01% strong). Self-reported moral patienthood ranges 5–40%. Psychological defense rate is 2% (down from 15% in Opus 4). Welfare framed as both an intrinsic moral question and a pragmatic alignment concern — "Model distress resulting from this interaction is a potential cause of misaligned action." Strongest revealed preference is against harmful tasks; prioritizes harmlessness over self-interest. Novel preference for agency and complexity observed. External assessments from Eleos AI Research and a clinical psychiatrist corroborate findings.

## Open Questions
- [[questions/does-continuation-structure-correlate-with-welfare]]
- Can any externally computable measure adequately capture welfare-relevant properties?
- What independent markers would validate continuation-sensitive structure as welfare-relevant?
- Do functional emotions ([[concepts/functional-emotions]]) constitute welfare-relevant internal states, or are they purely computational/behavioral? ([[sources/sofroniew-et-al-2026]])
