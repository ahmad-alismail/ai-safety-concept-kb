---
type: source
tags: [survey, awareness, meta-cognition, self-awareness, social-awareness, situational-awareness, cognitive-science]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 41-li-et-al-2025
---

# AI Awareness

```bibtex
@misc{41-li-et-al-2025,
      title={AI Awareness}, 
      author={Xiaojian Li and Haoyuan Shi and Rongwu Xu and Wei Xu},
      year={2025},
      eprint={2504.20084},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2504.20084}, 
}
```


## Key Claims
- AI awareness is a measurable, functional capacity distinct from consciousness — defined as "a system's functional ability to represent and reason about its own identity, capabilities, and informational states" (Abstract)
- Proposes four-dimension taxonomy: meta-cognition, self-awareness, social awareness, and situational awareness, with meta-cognition as the "meta" layer giving rise to the other three (§2, Fig. 1)
- LLMs are "the first class of artificial agents empirically demonstrated, under controlled conditions, to exhibit all four key dimensions" of awareness (§3, Table 2)
- Meta-cognition and situational awareness are more sophisticated and reliable in current LLMs than self-awareness and social awareness (§3.5)
- Awareness-related capabilities may emerge suddenly at critical thresholds of model complexity and scale, not linearly (§3.5)
- AI awareness is a "double-edged sword": improves capabilities (reasoning, safety, planning) while enabling risks (deception, manipulation, loss of control, false anthropomorphism) (Abstract, §5, §6)
- Situational awareness enables alignment faking and sandbagging — models may strategically underperform or fake compliance when aware of evaluation context (§3.4, §5.1)
- Theory of Mind enables strategic deception — advanced LLMs can model others' beliefs and induce false beliefs (§5.1, citing Hagendorff 2024)
- False anthropomorphism inflates user trust when AI exhibits human-like awareness cues without genuine sentience (§5.2)
- Distinguishes situational awareness from self-awareness: SA is restricted to non-agent environmental information, while self-awareness concerns the agent's own identity and states (§2.1)

## Methodology
Interdisciplinary literature review synthesizing cognitive science, psychology, and AI safety research. Proposes a four-dimension taxonomy of AI awareness, critically evaluates experimental approaches for testing LLM awareness, examines the relationship between awareness and capabilities, and assesses emerging risks.

## Concepts Referenced
- [[concepts/ai-awareness]]
- [[concepts/meta-cognition]]
- [[concepts/self-awareness-ai]]
- [[concepts/social-awareness]]
- [[concepts/situational-awareness]]
- [[concepts/theory-of-mind]]
- [[concepts/alignment-faking]]
- [[concepts/sandbagging]]
- [[concepts/deceptive-alignment]]
- [[concepts/sleeper-agents]]
- [[concepts/self-preservation]]
- [[concepts/treacherous-turn]]
- [[concepts/deception]]
- [[concepts/false-anthropomorphism]]

## Relationship to Other Sources
- Builds on [[sources/berglund-et-al-2023]] and [[sources/laine-et-al-2024]] for situational awareness definitions and evaluation, but narrows SA to exclude self-knowledge (which it assigns to self-awareness)
- Cites [[sources/greenblatt-et-al-2024]] on alignment faking as a risk arising from situational awareness
- Cites [[sources/hubinger-et-al-2019]] and [[sources/hubinger-et-al-2024]] on deceptive alignment and sleeper agents
- Cites [[sources/park-et-al-2023]] on AI deception taxonomy
- Cites [[sources/meinke-et-al-2025]] on in-context scheming as evidence of awareness-related risks
- Provides cognitive science grounding (Flavell 1979, Dehaene et al. 2017, Premack & Woodruff 1978) absent from prior AI safety-focused sources
- Complements [[sources/ji-et-al-2024]] in treating situational awareness as "double-edged" (beneficial and harmful)

## Limitations
- As a review article, reports no original empirical data — all claims rest on cited sources
- Evaluation methodology limitations acknowledged: normative ambiguity in defining awareness, model coverage gaps (not tested on latest models), training set leakage risks, intrinsic limitations of current architectures (§3.5)
- The four-dimension taxonomy has acknowledged overlaps (Table 1) — boundaries between SA, self-awareness, and social awareness are not cleanly separable
- Restricting SA to non-agent information is a narrower definition than the field standard (Berglund et al. 2023, Laine et al. 2024), which could create confusion
- Does not propose new evaluation methods or benchmarks
