---
type: source
tags: [meta-review, taxonomy, risk-classification, systematic-review, living-database]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 35-slattery-et-al-2024
---

# The AI Risk Repository: A Comprehensive Meta-Review, Database, and Taxonomy of Risks from Artificial Intelligence

```bibtex
@misc{35-slattery-et-al-2024,
      title={The AI Risk Repository: A Comprehensive Meta-Review, Database, and Taxonomy of Risks From Artificial Intelligence},
      author={Peter Slattery and Alexander K. Saeri and Emily A. C. Grundy and Jess Graham and Michael Noetel and Risto Uuk and James Dao and Soroush Pour and Stephen Casper and Neil Thompson},
      year={2025},
      eprint={2408.12622},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2408.12622},
}
```


## Key Claims

- Existing AI risk classifications are uncoordinated and inconsistent; even when they use similar terms (e.g., "privacy"), they refer to concepts inconsistently (Abstract, Introduction) — evidence type: systematic analysis of 65 documents and 1612 extracted risks
- The AI Risk Repository is the first attempt to rigorously curate, analyze, and extract AI risk frameworks into a publicly accessible, comprehensive, extensible, and categorized risk database (Abstract)
- Most risks (41%) are attributed to AI systems rather than humans (39%), and most occur post-deployment (62%) rather than pre-deployment (13%) (Table 3)
- "AI system safety, failures & limitations" is the largest risk domain by proportion of risks (26% of risks, 75% of documents), with "AI pursuing its own goals in conflict with human goals or values" comprising 7% of all risks (Table 7)
- AI welfare and rights is dramatically underexplored (<1% of risks, 3% of documents); multi-agent risks are also underexplored (3% of risks, 5% of documents) (Table 7, Discussion)
- Human-caused risks are most likely to be seen as intentional (18% in Human/Intentional/Post-deployment triad); AI-caused risks are most likely to be seen as unintentional (15% in AI/Unintentional/Post-deployment triad) (Table 4)
- No single document discussed risks from all 24 subdomains; the highest coverage was 19/24 (70%), average was 8/24 (33%) (Results)
- The convergence of several dangerous capabilities (situational awareness, deception, self-proliferation, strategic planning) poses the highest risk scenarios, not any single capability alone (Domain 7.2, synthesizing Shevlane et al. 2023)
- Most existing frameworks focus on LLMs rather than broader AI contexts; agentic AI and multi-agent risks warrant greater consideration (Discussion, Limitations)
- The field needs an ontology of AI risk concepts with "consistent and shared definitions" (Discussion, citing Marques et al. 2024)

## Methodology

Systematic literature review with best-fit framework synthesis. Systematic search of Scopus and preprint databases yielded 17,288 records screened via active learning with ASReview. 65 documents included (25 peer-reviewed, 22 preprints, 6 conference papers, 12 reports). 1612 risks extracted into a living database. Two taxonomies developed via best-fit framework synthesis: the **Causal Taxonomy** (adapting Yampolskiy 2016) classifies risks by Entity (Human/AI/Other), Intent (Intentional/Unintentional/Other), and Timing (Pre-/Post-deployment/Other); the **Domain Taxonomy** (adapting Weidinger et al. 2022) classifies risks into 7 domains and 24 subdomains. Grounded theory coding approach; ongoing expert consultation. Database publicly accessible at airisk.mit.edu. See [[methods/best-fit-framework-synthesis]].

## Concepts Referenced

- [[concepts/situational-awareness]] — classified as dangerous capability / evasion skill (Domain 7.2)
- [[concepts/deception]] — classified as dangerous capability / evasion skill (Domain 7.2)
- [[concepts/self-proliferation]] — classified as dangerous capability (Domain 7.2)
- [[concepts/persuasion]] — classified as dangerous capability (Domain 7.2)
- [[concepts/power-seeking]] — instrumental behavior (Domain 7.1) 
- [[concepts/self-preservation]] — classified as harmful behavior of misaligned AI (Domain 7.1)
- [[concepts/reward-hacking]] — classified as technical challenge / failure mode (Domain 7.1)
- [[concepts/goal-misgeneralization]] — classified as technical challenge / failure mode (Domain 7.1)
- [[concepts/dangerous-capabilities]] — meta-category encompassing manipulation, cyber-offense, weapons R&D, situational awareness, deception, self-proliferation, strategic planning (Domain 7.2)
- [[concepts/model-welfare]] — classified as ethical risk subdomain "AI welfare and rights" (Domain 7.5; <1% of risks, 3% of documents)
- [[concepts/multi-agent-risks]] — new systemic risk category with three failure modes: miscoordination, conflict, collusion (Domain 7.6)

## Relationship to Other Sources

- **Builds on** Yampolskiy (2016) for causal factors and Weidinger et al. (2022) for domain classification, extending and iterating both through best-fit framework synthesis
- **Agrees with** Shevlane et al. (2023) on the dangerous capabilities framework and its components
- **Notes** most existing frameworks (including Anthropic RSP and Google DeepMind's Frontier Safety Framework) are "limited in scope to a narrow set of risk types"
- **Echoes** concerns from Nickerson et al. (2013) about taxonomy quality in AI risk research
- **Calls for** an ontology with "consistent and shared definitions" (citing Marques et al. 2024) — directly supports this wiki's mission
- **Includes** Ji et al. (2023) ([[sources/ji-et-al-2024]]) as one of the 20 most cited documents in the review (267 citations)
- **Includes** Hendrycks et al. (2023) (225 citations) and Shevlane et al. (2023) (173 citations) among most cited

## Implicit Taxonomy

The source organizes its ontology at two intersecting levels:

1. **Causal Taxonomy** (high-level): classifies risks by Entity, Intent, and Timing — meta-level classification about *how risks emerge*. Categories are mutually exclusive within each dimension.
2. **Domain Taxonomy** (mid-level): classifies risks into 7 domains and 24 subdomains — content-level classification about *what the risks are*. Domains are **not** mutually exclusive.

AI safety concepts (alignment, power-seeking, deception, situational awareness) are treated primarily as risk subdomains or dangerous capabilities within Domain 7 ("AI system safety, failures & limitations"). Power-seeking also appears as a socioeconomic concern (Domain 6.1), revealing that the same concept can be a technical safety risk AND a socioeconomic/political risk depending on the framing.

## Limitations

- Single-reviewer extraction and coding introduces potential for errors and subjective bias
- Most source documents do not explicitly define "risk" or systematically review existing literature
- Database does not convey impact or likelihood of risks, nor interactions across different risks
- Binary pre-/post-deployment classification may be better represented as involving several stages
- Does not disambiguate between instrumental risks (e.g., poorly trained AI) and terminal risks (e.g., AI causes harm)
- Focused on cross-cutting frameworks; excludes domain-specific (e.g., healthcare) and location-specific taxonomies
- Non-English documents excluded
