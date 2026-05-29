---
type: source
tags: [existential-risk, power-seeking, alignment, instrumental-convergence, risk-assessment]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 03-carlsmith-2021
---

# Is Power-Seeking AI an Existential Risk?

```bibtex
@misc{03-carlsmith-2021,
      title={Is Power-Seeking AI an Existential Risk?},
      author={Joseph Carlsmith},
      year={2024},
      eprint={2206.13353},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2206.13353},
}
```

| Field       | Value                                      |
|-------------|--------------------------------------------|
| Authors     | [[entities/joseph-carlsmith]]              |
| Year        | 2021 (updated May 2022)                    |
| Venue/URL   | Open Philanthropy report                   |

## Key Claims
- By default, sufficiently strategic and intelligent agents with problematic objectives will have instrumental incentives to gain and maintain power — the **instrumental convergence** thesis (Section 4.2)
- ~5% probability of existential catastrophe from misaligned power-seeking AI by 2070, revised to >10% in May 2022 update (Section 8)
- It will be much harder to build practically PS-aligned APS systems than to build PS-misaligned ones that are superficially attractive to deploy (Section 4.3, assigned 40% credence)
- Warning shots from weaker systems will likely not suffice to prevent catastrophe, even in gradual take-off scenarios (Section 6.2)
- Competitive dynamics and externalities will push actors to deploy potentially PS-misaligned systems despite known risks (Section 5.3)
- Current ML paradigm — searching over opaque systems with external evaluation criteria — makes alignment unusually difficult compared to other engineering safety (Section 4.4)
- Multipolar catastrophe scenarios (many misaligned systems collectively disempowering humans) are as concerning as unipolar scenarios (Section 6.3)

## Methodology
Philosophical/analytical risk assessment with probabilistic framework. Constructs a six-premise conditional probability argument for existential catastrophe by 2070:

1. APS systems become feasible (65%)
2. Strong incentives to build them | (1) (80%)
3. PS-alignment much harder than building superficially attractive PS-misaligned systems | (1)–(2) (40%)
4. High-impact misaligned power-seeking occurs | (1)–(3) (65%)
5. Scales to permanent human disempowerment | (1)–(4) (40%)
6. Constitutes existential catastrophe | (1)–(5) (95%)

Product: ~5% (bumped to >10% in 2022 update). Includes reformulations in shorter/positive framings to check for biases.

## Concepts Referenced
- [[concepts/power-seeking]]
- [[concepts/instrumental-convergence]]
- [[concepts/alignment]]
- [[concepts/aps-systems]]
- [[concepts/agentic-planning]]
- [[concepts/strategic-awareness]]
- [[concepts/deceptive-alignment]] (discussed as "treacherous turn" / deception by AI systems)
- [[concepts/self-preservation]]
- [[concepts/goal-content-integrity]]
- [[concepts/resource-acquisition]]
- [[concepts/myopia]]

## Relationship to Other Sources
- **Builds on** Bostrom (2014) and [[sources/omohundro-2008]] on convergent instrumental goals, but explicitly avoids utility maximization framing and "superintelligence" threshold
- **Builds on** [[sources/hubinger-et-al-2019]] on risks from learned optimization, but doesn't assume their specific mesa-optimizer setup
- **Most similar to** Ngo (2020) in overall analysis
- **Builds on** Turner et al (2019) for formal power-seeking arguments
- **Responds to** Drexler (2019) — argues APS properties are too useful to be avoided via modular/non-agentic systems
- **Responds to** Pinker (2018) — rejects "humans aren't all power-seeking so AIs won't be" and "power-seeking is just evolutionary" arguments
- **Responds to** Garfinkel (2020) — argues warning shots alone are insufficient (cf. climate change analogy)
- **Responds to** Shah (2018) — addresses objection that coherence arguments don't imply goal-directed behavior

## Implicit Taxonomy
Carlsmith organizes around a **risk argument chain**: capabilities → incentives → alignment difficulty → deployment → correction failure → catastrophe. Key distinctions:
- **System properties**: APS (compound construct), alignment status (full vs. practical, PS-alignment)
- **Behavioral tendencies**: Power-seeking as default instrumental behavior
- **Theoretical principles**: Instrumental convergence bridges misalignment → power-seeking
- Power-seeking is framed as an **instrumental behavioral tendency**, not a "drive" or intrinsic motivation — arising from the interaction of objectives, capabilities, and circumstances

## Limitations
- Premises are imprecisely operationalized; probabilities are subjective and self-described as "highly unstable"
- No empirical experiments; relies on theoretical arguments, RL examples, and analogies
- Author acknowledges the abstractions employed (agency, objectives, strategic reasoning) are top candidates for ways the argument might mislead
- Sensitivity tests yield a range of ~0.1%–40%, indicating extreme sensitivity to premise estimates
- Focused exclusively on power-seeking as route to existential risk; does not address other misalignment failure modes
