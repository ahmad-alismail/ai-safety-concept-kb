---
type: source
tags: [goal-misgeneralization, generalization, reinforcement-learning, OOD, safety]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 07-langosco-et-al-2022
---

# Goal Misgeneralization in Deep Reinforcement Learning

```bibtex
@misc{07-langosco-et-al-2022,
      title={Goal Misgeneralization in Deep Reinforcement Learning},
      author={Lauro Langosco and Jack Koch and Lee Sharkey and Jacob Pfau and Laurent Orseau and David Krueger},
      year={2023},
      eprint={2105.14111},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2105.14111},
}
```


## Key Claims
- Goal misgeneralization is a distinct and more dangerous type of OOD generalization failure than capability generalization failure: "an agent that capably pursues an incorrect goal can leverage its capabilities to visit arbitrarily bad states" (Section 1)
- Training by optimizing an objective R is not sufficient to guarantee the model will learn to pursue R rather than some proxy for R (Section 1)
- Goal misgeneralization can be alleviated by increasing the diversity of the training distribution (Sections 3.1, 3.2)
- The actor and critic in actor-critic methods can learn different proxy goals due to different inductive biases (Section 3.4)
- Goal misgeneralization is distinct from [[concepts/mesa-optimization]]: it can occur without mesa-optimization, and mesa-optimization can cause undesirable behavior without goal misgeneralization (Section 4)
- Goal misgeneralization is distinct from reward misspecification: it can occur even with a perfectly specified reward function (Section 4)
- Learned proxy objectives tend to be simpler or denser than the intended objective, making them easier to learn (Section 2.2)

## Methodology
- **Environments**: Modified Procgen suite (CoinRun, Maze I, Maze II, Keys & Chests) + custom 20×20 gridworld
- **Training**: PPO (actor-critic) with IMPALA-based architecture (no LSTM), 200M timesteps on 100k procedurally-generated levels
- **Protocol**: Zero-shot OOD evaluation — agent never sees test distribution during training
- **CoinRun**: Coin fixed at right end during training, randomized at test. Agent learns "move right" proxy instead of "move to coin." Diversity sweep shows 2% random placement substantially reduces misgeneralization.
- **Maze I**: Cheese fixed in upper-right corner during training. Agent navigates to corner instead of cheese when position randomized.
- **Maze II**: Color vs. shape disambiguation. Agent generalizes by color (89% choose yellow gem over red line, n=102).
- **Keys & Chests**: Training has 2× chests vs keys; testing has 2× keys vs chests. Agent prioritizes collecting all keys over opening chests.
- **Actor-critic analysis**: Permeable wall experiment (n=114) reveals actor learns "move right" while critic learns "move to wall" — different proxy objectives.
- **Agency measurement**: Gridworld validation of formal Definition 2.1 using agent/device mixture formalism (Orseau et al. 2018). Successfully distinguishes goal misgeneralization from capability failure.

## Concepts Referenced
- [[concepts/goal-misgeneralization]] (primary concept — formalized and first empirically demonstrated)
- [[concepts/mesa-optimization]] (distinguished from; goal misgeneralization does not require mesa-optimization)
- [[concepts/power-seeking]] (referenced as instrumental consequence of competent misalignment)
- [[concepts/deceptive-alignment]] (referenced as potential consequence of mesa-optimization, related but distinct)
- [[concepts/pseudo-alignment]] (related via Hubinger et al. 2019; proxy alignment is analogous)
- [[concepts/reward-hacking]] (distinguished from; reward misspecification is a different failure class)

## Relationship to Other Sources
- **[[sources/hubinger-et-al-2019]]**: Agrees that learned objectives can diverge from intended objectives. Explicitly broadens the scope: goal misgeneralization does not require mesa-optimization. Notes that "for a sufficiently broad definition of mesa-optimization, goal misgeneralization may become equivalent to misaligned mesa-optimization" but uses a different term to emphasize the connection to OOD generalization.
- **Shah et al. (2022)**: Adopts the term "goal misgeneralization" from Shah et al. (previously called "objective robustness failure").
- **[[sources/carlsmith-2021]]** (via Turner et al. 2021, Omohundro 2008): Agrees that misaligned capable agents may seek power instrumentally.
- **[[sources/greenblatt-et-al-2024]]**: Alignment faking is a special case of goal misgeneralization where situational awareness enables deliberate behavioral divergence.
- **Hubinger (2020a, 2020b)**: Extends the concept of "objective robustness failure" with first empirical demonstrations.

## Limitations
- All experiments use simple procedurally-generated environments (Procgen-based) — unclear how findings transfer to more complex or real-world settings
- Formal definition (agent/device mixtures) is intractable for large, complex environments and requires specifying a useful prior over objectives
- The agent/device framework does not naturally accommodate multi-agent systems
- Does not demonstrate mesa-optimization — the experiments show goal misgeneralization without confirming whether the agents are mesa-optimizers
- Behavioral objective identification relies on plausible hypotheses (e.g., "move right") — alternate explanations may exist
