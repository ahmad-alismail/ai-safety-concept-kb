---
type: source
tags: [emergent-capabilities, internal-representations, reinforcement-learning, embodied-ai, navigation, meta-ai, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 42-wijmans-et-al-2023
---

# Emergence of Maps in the Memories of Blind Navigation Agents

```bibtex
@misc{42-wijmans-et-al-2023,
      title={Emergence of Maps in the Memories of Blind Navigation Agents}, 
      author={Erik Wijmans and Manolis Savva and Irfan Essa and Stefan Lee and Ari S. Morcos and Dhruv Batra},
      year={2023},
      eprint={2301.13261},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2301.13261}, 
}
```


## Key Claims
- "Blind" RL agents (egomotion-only sensing) achieve ~95% success rate on PointGoal navigation in novel environments (Section 2)
- Memoryless agents completely fail (~0% success); agents utilize memory over long horizons (~1000 steps, ~89m) (Section 3)
- Map-like spatial representations emerge in agent memory without any mapping supervision or inductive bias — "our experimental setup provides no inductive bias towards mapping" (Section 1)
- Probe agents with transplanted memory take shortcuts and navigate significantly more efficiently — SPL of 85.0%±1.6% (probe) vs. 62.9%±1.6% (agent) (Section 4)
- "the memories of a blind agent are as valuable as having vision" — probe achieves 85% SPL vs. 84% for best sighted agents (Section 4)
- Spatial representation construction is a learned behavior, not an inductive bias — untrained agent memory performs no better than empty memory (Section 4)
- Metric occupancy maps can be decoded from agent memory — 32.5% vs. 12.5% IoU (Section 5)
- Emergent maps are task-dependent — agents "forget" excursions, preserving only task-relevant information (Section 6)
- Collision-detection neurons emerge: 10 neurons from 3072 achieve 96% collision prediction accuracy (Section 2.1)
- Sighted agents do NOT show clear evidence of metric map decoding — higher-level strategies may require non-trivial learning problems (Section 5, Appendix C.4)

## Methodology
Reinforcement learning training + mechanistic analysis. "Blind" agents (egomotion-only GPS+Compass sensor) with 3-layer LSTM (512-d hidden) trained via DD-PPO on PointGoal navigation in 3D indoor environments (Gibson + Matterport3D) using AI Habitat simulator (~2 billion steps, 16 GPUs). Analysis via: memory budget ablations, memory transplant/probe experiments ([[methods/memory-transplant-probing]]), occupancy map decoding, collision detection linear probing, past/future position prediction, and excursion forgetting analysis.

## Concepts Referenced
- [[concepts/internally-represented-goals]] — agents develop internal spatial representations from pure reward signal
- Emergent capabilities (general phenomenon) — maps emerge without explicit supervision
- Cognitive maps (Tolman 1948, O'keefe & Nadel 1978) — paper distinguishes its findings from strict cognitive map definition

## Relationship to Other Sources
- Extends **Banino et al. (2018)**: RNNs develop grid-cell representations when trained for path integration; Wijmans et al. show maps emerge from navigation learning alone without path integration supervision
- Explains **Wijmans et al. (2020), Partsey et al. (2022), Reed et al. (2022)**: "map-free" neural network navigators achieve strong performance because they build implicit maps
- Convergent evolution analogy: independent emergence of mapping in biological and artificial agents suggests mapping is a "natural response" to navigation pressure
- Relevant to AI safety understanding of **emergent internal representations**: demonstrates that RL agents develop capabilities (spatial mapping) far exceeding what was explicitly supervised, with implications for understanding how [[concepts/dangerous-capabilities]] or [[concepts/internally-represented-goals]] might emerge

## Limitations
- Examined ground-based agents in indoor environments (2D manifold with strong structural priors); unclear generalization to open environments
- Sighted agents did not show clear evidence of metric map decoding — the "trivial solutions" conjecture remains unproven
- No actuation noise studied (important for both robotic deployment and biological path integration)
- Only implicit map-building (LSTM); differentiable read/write maps not explored
- Short exploration episodes with memory reset; animals and robots at deployment operate over much longer periods
- No complete mechanistic account of how the agent builds maps or what else is stored in memory
