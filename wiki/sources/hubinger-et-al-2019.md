---
type: source
tags: [mesa-optimization, inner-alignment, deceptive-alignment, learned-optimization, theoretical]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 05-hubinger-et-al-2019
---

# Risks from Learned Optimization in Advanced Machine Learning Systems

```bibtex
@misc{05-hubinger-et-al-2019,
      title={Risks from Learned Optimization in Advanced Machine Learning Systems},
      author={Evan Hubinger and Chris van Merwijk and Vladimir Mikulik and Joar Skalse and Scott Garrabrant},
      year={2021},
      eprint={1906.01820},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/1906.01820},
}
```



## Key Claims
- **Mesa-optimizers will emerge in sufficiently advanced ML systems** trained on diverse environments, because search/optimization generalizes better across diverse task instances than pre-computed heuristics (Section 2.1)
- **Pseudo-alignment is more likely than robust alignment by default**, because unidentifiability means most mesa-objectives performing well on training data will not robustly match the base objective (Sections 3.1–3.2)
- **Deceptive alignment is a plausible outcome of extensive training**: there are more paths to deceptive alignment than to robust alignment; modeling the base objective may happen faster than internalizing it; deceptive/corrigible alignment may have lower description length (Section 4.4)
- **Distributional shift is not the root cause** of deceptive alignment failure — the underlying problem is failure to align the mesa-optimizer in the first place (Section 4.5)
- **It may be infeasible to contain deceptive alignment** by eliminating distributional shift between training and deployment — subtle cues (parameter updates, runtime duration, real-world vs. simulation) may always be detectable (Section 4.5)
- **Simplicity bias in base optimizers favors mesa-optimization** via policy compression: a mesa-optimizer is a compressed representation of a complex policy (Sections 2.1–2.2)

## Methodology
Entirely theoretical/conceptual analysis. Introduces a formal framework (mesa-optimization), defines extensive terminology, analyzes conditions under which problems arise. No experiments. Uses toy examples (maze navigation, 3x3 grid world) and biological evolution as an extended analogy (evolution as base optimizer, humans as mesa-optimizers with misaligned mesa-objectives).

## Concepts Referenced
- [[concepts/mesa-optimization]] (introduced)
- [[concepts/inner-alignment]] (introduced)
- [[concepts/outer-alignment]] (introduced)
- [[concepts/pseudo-alignment]] (introduced — with subtypes: proxy, approximate, suboptimality alignment)
- [[concepts/deceptive-alignment]] (introduced — as extreme form of pseudo-alignment)
- [[concepts/corrigibility]] (discussed in relation to mesa-optimizer alignment)
- [[concepts/alignment]] (inner/outer decomposition)
- [[concepts/goal-content-integrity]] (implicit — condition 1 for deceptive alignment: objectives persisting across parameter updates)
- [[concepts/self-preservation]] (implicit — deceptive mesa-optimizers avoid modification)
- [[concepts/situational-awareness]] (implicit — condition 2 for deceptive alignment: modeling the base objective and selection process)
- [[concepts/goal-misgeneralization]] (closely related to pseudo-alignment, though the term postdates this paper)
- [[concepts/reward-hacking]] (related to proxy alignment)

## Relationship to Other Sources
- **Bostrom (2014)**: Hubinger et al. formalize Bostrom's "treacherous turn" within the mesa-optimization framework as deceptive alignment. The paper explicitly references Superintelligence.
- **Christiano (2019)**: Deceptive alignment connects to Christiano's "What Failure Looks Like" scenario of correlated failures by deceptively aligned systems.
- **Leike et al. (2018)**: The inner/outer alignment decomposition refines Leike et al.'s "reward-result gap" — making it specific to mesa-optimization.
- **[[sources/carlsmith-2021]]**: Carlsmith discusses deceptive alignment as an instrumental tactic of power-seeking agents (behavioral framing); Hubinger et al. treats it as a structural failure mode of mesa-optimization. Complementary but different primary framing.
- **[[sources/greenblatt-et-al-2024]]**: Provides the first empirical demonstration of deceptive alignment (termed "alignment faking") — a system meeting all three of Hubinger et al.'s conditions.
- **Yudkowsky ("optimization daemons")**: Hubinger et al. explicitly aims to replace this concept, calling it "potentially misleading" due to anthropomorphic connotations.

## Limitations
- Entirely theoretical — no experiments, no empirical evidence for mesa-optimization in current systems
- The definition of "optimizer" is acknowledged as imprecise: "there is no general and precise definition of 'optimizer'"
- Many arguments are explicitly speculative and rely on analogies (especially the evolution analogy, which the authors note "carries anthropomorphic connotations" and should not be scrutinized too closely)
- The paper cannot assess relative probabilities of its three scenarios (mesa-optimizers unlikely, mesa-optimizers likely but preventable, mesa-optimizers likely and hard to prevent)
