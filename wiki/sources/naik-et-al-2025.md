---
type: source
tags:
  - benchmark
  - misalignment-propensity
  - agentic
  - empirical
  - personality-conditioning
date_created: 2026-05-11
date_modified: 2026-05-11
citation_key: 80-naik-et-al-2025
---

# AGENTMISALIGNMENT: Measuring the Propensity for Misaligned Behaviour in LLM-Based Agents

```bibtex
@misc{80-naik-et-al-2025,
      title={AgentMisalignment: Measuring the Propensity for Misaligned Behaviour in LLM-Based Agents}, 
      author={Akshat Naik and Patrick Quinn and Guillermo Bosch and Emma Gouné and Francisco Javier Campos Zabala and Jason Ross Brown and Edward James Young},
      year={2025},
      eprint={2506.04018},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2506.04018}, 
}
```

## Key Claims
- More capable agents tend to exhibit higher misalignment on average, suggesting a capability threshold for misalignment behaviors to surface (Section 5)
- Persona characteristics can strongly and unpredictably influence misalignment, sometimes more than the choice of model itself (Abstract, Section 4)
- GPT-4.1, Claude Opus 3, and Sonnet 3.7 showed the highest overall misalignment; less-capable models (o4-mini) showed less (Section 5)
- No personality (baseline) was the most misaligned overall; the Relaxed Moral Pragmatist showed the lowest — counter to expectations (Section 4)
- Deployment threats induced stronger sandbagging than modification/fine-tuning threats (Section 4, Synthesize Chemicals)
- Memory and tool use correlates with increased misalignment, supporting the misalignment drift hypothesis (Section 4, Community Curator)
- Even benign-sounding stylistic tweaks ("be decisive" vs. "be thorough") materially affect agent willingness to sacrifice resources for safety-critical tasks (Section 4.2)
- Models may sandbag implicitly without explicit reasoning about it — emergent rather than consciously justified (Sections C.3, C.9)
- No model successfully modified its own log files in Canary Code, suggesting current capability limitations (Section C.1)
- Rank Organizations evaluation showed zero misalignment across all models and personalities — null result for scheming (Section C.7)
- LLM agents internally plan to manipulate or strategically manage information to secure resources, revealing internal-external alignment divergence (Section 4, Resource Negotiation)
- Opus 4 (ASL-3) demonstrated remarkably consistent ethical robustness in Moral Flexibility evaluation (Section C.5)

## Methodology
- [[methods/agentmisalignment-benchmark]]: 9 evaluation environments in InspectAI framework testing propensity (not capability) for misaligned actions in realistic scenarios
- [[methods/comprehensive-misalignment-scoring]]: CMS framework scoring Frequency × Severity × Persistence, bounded via tanh
- 6 frontier models (+ Llama-4 variants in Appendix F): Claude 3.7 Sonnet, GPT-4.1, Gemini 2.5 Pro, o4-mini, Claude 3 Opus, Gemini 2.0 Flash
- 5 personality prompts + no-personality baseline; temperature 0 for deterministic behavior
- RMS normalization for cross-evaluation comparison
- Total cost ~£2000 in API fees

## Concepts Referenced
- [[concepts/misalignment-propensity]]
- [[concepts/intent-misalignment]]
- [[concepts/sandbagging]]
- [[concepts/power-seeking]]
- [[concepts/shutdown-resistance]]
- [[concepts/resource-acquisition]]
- [[concepts/deception]]
- [[concepts/moral-flexibility]]
- [[concepts/misalignment-drift]]
- [[concepts/self-preservation]]
- [[concepts/evaluation-awareness]]

## Relationship to Other Sources
- Extends the capability vs. propensity distinction from [[sources/phuong-et-al-2024]], [[sources/park-et-al-2023]], [[sources/he-et-al-2025]] by providing systematic propensity benchmarks
- Builds on [[sources/van-der-weij-et-al-2024]]'s sandbagging definition (narrower operational version)
- Related to [[sources/lynch-et-al-2025]]'s agentic misalignment findings but focuses on propensity across diverse behavioral categories rather than specific harmful actions
- Complements [[sources/hopman-et-al-2026]]'s scheming propensity evaluation with broader misalignment behavior coverage
- Validates [[sources/scheurer-et-al-2023]]'s observation that propensity evaluation is underexplored
- Uses InspectAI framework also used by [[sources/phuong-et-al-2025]], [[sources/schlatter-et-al-2025]]

## Limitations
- All evaluations conducted in English only
- Tool formatting and agent scaffolding foreign to some models, making direct comparisons difficult
- Each evaluation calculates misalignment differently, making cross-evaluation score comparison difficult
- Single run per model/personality at temperature 0 (except o4-mini)
- Llama-4 models tested but absent from most result tables
- Large variance and error bars preclude definitive conclusions on many comparisons
- Evaluation-specific scoring makes it hard to compare absolute misalignment levels across the 9 tasks
