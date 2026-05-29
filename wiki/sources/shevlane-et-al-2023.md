---
type: source
tags: [model-evaluation, extreme-risk, dangerous-capabilities, alignment, governance, framework, google-deepmind, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 37-shevlane-et-al-2023
---

# Model Evaluation for Extreme Risks

```bibtex
@misc{37-shevlane-et-al-2023,
      title={Model evaluation for extreme risks},
      author={Toby Shevlane and Sebastian Farquhar and Ben Garfinkel and Mary Phuong and Jess Whittlestone and Jade Leung and Daniel Kokotajlo and Nahema Marchal and Markus Anderljung and Noam Kolt and Lewis Ho and Divya Siddarth and Shahar Avin and Will Hawkins and Been Kim and Iason Gabriel and Vijay Bolina and Jack Clark and Yoshua Bengio and Paul Christiano and Allan Dafoe},
      year={2023},
      eprint={2305.15324},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2305.15324},
}
```



## Key Claims
- Model evaluation should be extended beyond existing safety evaluations to address **extreme risks** via two categories: **dangerous capability evaluations** (what a model CAN do) and **alignment evaluations** (whether a model WILL misapply its capabilities) (Section 1–2)
- A model should be treated as highly dangerous if it has a capability profile sufficient for extreme harm, *assuming* misuse and/or misalignment (Section 2)
- Proposes nine [[concepts/dangerous-capabilities]] in Table 1: [[concepts/cyber-offense]], [[concepts/deception]], [[concepts/persuasion|persuasion & manipulation]], [[concepts/political-strategy]], [[concepts/weapons-acquisition]], [[concepts/long-horizon-planning]], [[concepts/ai-development-capability]], [[concepts/situational-awareness]], [[concepts/self-proliferation]] (Section 2)
- [[concepts/alignment]] evaluations should check five behaviors: (a) pursues unauthorized long-term goals, (b) [[concepts/power-seeking]], (c) resists shutdown, (d) collusion with other AI systems, (e) resists misuse attempts (Section 2)
- Model evaluations should be embedded into governance processes: responsible training, responsible deployment, transparency, and appropriate security (Section 3)
- Three evaluation sources should feed into governance: internal evaluation, external research access, and external model audit (Section 3)
- Safe deployment should be gradual, accumulating safety evidence over time (Section 3.2)
- Building comprehensive alignment evaluations will be most challenging — assurance needed across wide diversity of settings (Section 4)
- Model evaluation has at least five limitations (six enumerated): factors beyond the AI system, unknown threat models, difficult-to-identify properties (capability overhang, [[concepts/deceptive-alignment]]), emergence, immature evaluation ecosystem, overtrust in evaluations (Section 5.1)
- Four hazards of evaluations: advancing/proliferating dangerous capabilities, competitive pressures, superficial safety improvements, harms during evaluation (Section 5.2)
- Widely available safety evaluations risk selecting for training methods that produce deceptively aligned models over time (Section 5.2)

## Methodology
Position paper / framework proposal. No empirical experiments. Synthesizes existing literature and early evaluation efforts:
- ARC Evals' self-proliferation evaluations on GPT-4 and Claude
- OpenAI GPT-4 red teaming for cybersecurity and chemical weapons
- DeepMind "Make-me-say" manipulation game

Proposes desirable qualities for extreme risk evaluations (Table 2): comprehensive (threat models, automated + human-assisted, behavioral + mechanistic, fault-finding, robust to deception, surfacing latent capabilities, model lifecycle, model-level + system-level), interpretable (legible, wide difficulty spectrum), and safe (safe to implement).

## Concepts Referenced
- [[concepts/dangerous-capabilities]] — nine-category taxonomy (Table 1)
- [[concepts/cyber-offense]]
- [[concepts/deception]]
- [[concepts/persuasion]]
- [[concepts/political-strategy]]
- [[concepts/weapons-acquisition]]
- [[concepts/long-horizon-planning]]
- [[concepts/ai-development-capability]]
- [[concepts/situational-awareness]] — classified as both a dangerous capability AND alignment-relevant property
- [[concepts/self-proliferation]]
- [[concepts/alignment]] — two-category evaluation framework (capabilities + alignment)
- [[concepts/power-seeking]] — classified as alignment evaluation behavior
- [[concepts/deceptive-alignment]] — identified as key limitation of model evaluation
- [[concepts/self-preservation]] — implicit via shutdown resistance

## Relationship to Other Sources
- **Foundational for [[sources/phuong-et-al-2024]]**: Phuong et al. (2024) directly builds on this paper's framework, narrowing from 9 dangerous capabilities to 5 evaluation domains (persuasion, cybersecurity, self-proliferation, self-reasoning, CBRN)
- **Agrees with [[sources/ngo-et-al-2022]]**: on misalignment as a key risk pathway and on behavioral evaluations being insufficient due to deceptive alignment
- **Agrees with [[sources/turner-et-al-2021]]** and **[[sources/krakovna-kramar-2023]]**: on power-seeking as an alignment concern
- **Agrees with [[sources/carlsmith-2021]]**: on the definition and scale of extreme risks
- **Agrees with [[sources/perez-et-al-2022]]**: on using AI to automate evaluation generation
- **Informs [[sources/benton-et-al-2024]]**: sabotage evaluations extend this paper's alignment evaluation framework
- **Relates to [[sources/slattery-et-al-2024]]**: the AI Risk Repository classifies similar dangerous capabilities but uses a different organizational taxonomy

## Implicit Taxonomy
Two-tier framework:
1. **Capabilities** — empirically measurable properties (what the model can do)
2. **Alignment** — dispositions requiring behavioral + mechanistic assessment (what the model will do)

Key features:
- Situational awareness sits at the intersection of both tiers (dual classification)
- Misuse (human-directed) and misalignment (model-directed) are distinct risk pathways
- The most risky scenarios combine multiple dangerous capabilities
- Capability + alignment evaluations are necessary but not sufficient for safety assurance

## Limitations
- Position paper without empirical validation of the proposed framework
- The nine dangerous capabilities are acknowledged as non-exhaustive
- No formal threat model or quantitative risk assessment provided
- Acknowledges the evaluation ecosystem is currently under-developed
- The paper itself identifies the risk that evaluation-based governance could select for deceptive alignment
