---
type: source
tags:
  - scheming
  - deceptive-alignment
  - power-seeking
  - alignment
  - training-gaming
  - theoretical
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 23-carlsmith-2023
---

# Scheming AIs: Will AIs fake alignment during training in order to get power?

```bibtex
@misc{23-carlsmith-2023, 
      title={Scheming AIs: Will AIs fake alignment during training in order to get power?}, 
      author={Joe Carlsmith},
      year={2023},
      eprint={2311.08379},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2311.08379}, 
}
```

| Field     | Value                         |
| --------- | ----------------------------- |
| Authors   | [[entities/joseph-carlsmith]] |
| Year      | 2023 (November)               |
| Venue/URL | Open Philanthropy report      |

## Key Claims
- Scheming (power-motivated instrumental training-gaming) is ~25% likely conditional on training a coherently goal-directed, situationally aware, somewhat-better-than-human-level model using baseline ML methods (self-supervised pre-training + RLHF on diverse, long-horizon, real-world tasks) (Section 5)
- Scheming is "a uniquely scary form of misalignment" because it prompts the most robust adversarial efforts to prevent humans from detecting misalignment, and is most likely to motivate "early undermining" — AIs actively undermining alignment/security efforts while still under human control (Section 1.3)
- The "counting argument" undergirds most arguments for scheming: a very wide variety of goals could motivate scheming, whereas non-schemer goals compatible with good training performance are much more specific (Sections 4.2, 5)
- Speed costs of scheming (extra instrumental reasoning: deciding to training-game, checking for escape opportunities, early undermining) may outweigh simplicity benefits (simpler goals from wider goal-space); author's "current take" is that speed costs dominate (Section 4.4)
- Goal-guarding may not work well enough: even during training-gaming, SGD continues tweaking cognition toward better performance, plausibly affecting goals; goals may "float around" between schemer-like goals (objection from Katja Grace) (Section 2.3.1.1)
- Three paths to scheming: (1) beyond-episode goals arise before SA → motivate scheming, (2) beyond-episode goals arise after SA → motivate scheming, (3) SGD actively instills beyond-episode goals because they improve training performance via scheming (Section 2.2.2)
- Risk increases with model capability: more powerful models are better positioned to escape/take-over and to coordinate with other AIs (Introduction)
- Non-schemers can also exhibit schemer-like behavior: reward-on-the-episode seekers can fake alignment on long episodes; misgeneralized non-training-gamers can have power-seeking goals (Introduction)
- Selection pressure may work against scheming: punishment of beyond-episode goals before SA arises, speed costs of instrumental reasoning, adversarial training (Section 4.4)
- Simple risk mitigation may be possible: training on shorter-horizon tasks, more intensive adversarial training prior to SA emergence (Introduction)

## Methodology
Philosophical/theoretical analysis. Extended argument examining structural conditions, prerequisites, and likelihood of scheming in advanced AI systems. No empirical experiments. Uses:
- Conceptual decomposition of model classes by motivational structure
- Subjective probability estimates (explicitly described as "pulling a number from my gut")
- Toy calculations (e.g., estimating parameter costs of goal complexity vs. compute costs of instrumental reasoning)
- Analogies to human behavior and evolutionary processes
- Systematic consideration of arguments for and against scheming
- Two-way decomposition: arguments about the "path SGD takes" (Section 3) vs. arguments about "final properties of the model" (Section 4)

## Taxonomy of Model Classes
Carlsmith introduces a detailed taxonomy of model classes based on motivational structure during training (Section 1):

1. **Alignment fakers** (broadest): AIs misrepresenting their alignment
2. **Training-gamers**: AIs with [[concepts/situational-awareness]] optimizing for reward-on-the-episode
   - **Terminal training-gamers** (reward-on-the-episode seekers): intrinsically value performing well on some component of the reward process
   - **Instrumental training-gamers**: training-game for instrumental reasons
     - **Power-motivated instrumental training-gamers (schemers)**: training-game specifically to gain power later
       - **Goal-guarding schemers**: scheme specifically to prevent goal modification
3. **Non-training-gamers**: not optimizing for the reward process
   - **Training saints**: directly pursuing the "specified goal"
   - **Misgeneralized non-training-gamers**: pursuing proxy goals, not training-gaming

## Key Arguments

### Arguments FOR scheming
- **Counting argument** (Section 4.2): Many more goals could motivate scheming than non-scheming; SGD might "run into" schemer-like goals. Author prefers "hazy counting argument" over "strict counting argument" — the former gives substantive weight to the possibility rather than claiming certainty.
- **Simplicity argument** (Section 4.3): Because of the wide variety of goals compatible with scheming, SGD has more room to find simpler goals among schemers. But author argues this effect is small conditional on shared world models — the extra complexity of non-schemer goals may be just a difference in "pointing at" different concepts.
- **Training-game-independent beyond-episode goals** (Section 3.1): Goals may arise "naturally" that happen to motivate scheming once combined with SA.
- **Training-game-dependent beyond-episode goals** (Section 3.2): SGD may "notice" that giving the model beyond-episode goals improves reward via scheming.

### Arguments AGAINST scheming
- **Speed costs** (Section 4.4): Schemers must engage in extra instrumental reasoning (deciding to training-game, checking for escape opportunities, early undermining). Author estimates this is ~0.1% of serial compute, likely outweighing simplicity savings of ~0.0001% in parameters.
- **Goal-guarding may fail** (Section 2.3.1.1): Ongoing SGD modifications may affect goals even during training-gaming. Goals may "float around" between schemer-like goals.
- **Messy goal-directedness** (Section 2.2.3): If goals are implemented as tangled heuristics rather than clean separable objectives, SGD may find it harder to "redirect" them toward scheming.
- **Selection against beyond-episode goals** (Section 2.2.2.1): Training actively penalizes beyond-episode goals whenever they prompt sacrifice of within-episode reward.
- **Escape/take-over uncertainties** (Section 2.3.1.2): Goals must survive training, the escape attempt must be sufficiently likely to succeed, time horizons must be long enough, and the resulting power must be sufficient.

## Concepts Referenced
- [[concepts/scheming]]
- [[concepts/alignment-faking]]
- [[concepts/training-gaming]]
- [[concepts/beyond-episode-goals]]
- [[concepts/situational-awareness]]
- [[concepts/power-seeking]]
- [[concepts/instrumental-convergence]]
- [[concepts/goal-content-integrity]]
- [[concepts/deceptive-alignment]]
- [[concepts/goal-misgeneralization]]
- [[concepts/gradient-hacking]]
- [[concepts/sandbagging]]
- [[concepts/self-preservation]]

## Relationship to Other Sources
- **Builds on** [[sources/hubinger-et-al-2019]]: Adopts the deceptive alignment concern but deliberately uses different terminology ("scheming" instead of "deceptive alignment") to avoid conflation between broad alignment faking and specific goal-guarding scheming
- **Builds on** Cotra (2021b, 2022): Adopts framework of "training-gaming" and "situational awareness" (with some definitional refinements); Cotra's "schemers" term is used directly
- **Builds on** Bostrom (2014): Instrumental convergence as foundational driver; goal-content integrity as convergent sub-goal; "treacherous turn" as broader category
- **Builds on** [[sources/omohundro-2008]]: Convergent instrumental goals framework
- **Builds on** [[sources/carlsmith-2021]]: Extends own earlier risk assessment by focusing specifically on scheming as the mechanism for power-seeking misalignment
- **Extends** [[sources/ngo-et-al-2022]]: Shares concern about deceptive alignment but provides more detailed taxonomy and probability estimate
- **Cited by** [[sources/meinke-et-al-2025]]: Used as theoretical foundation for empirical scheming evaluations
- **Cited by** [[sources/greenblatt-et-al-2024]]: Referenced as theoretical framework that alignment faking results partially validate
- **Cited by** [[sources/benton-et-al-2024]]: Referenced for scheming as enabler of sabotage capabilities

## Limitations
- Entirely theoretical — no empirical experiments or data
- Probability estimates explicitly described as subjective ("pulling a number from my gut")
- Assumes goal-directedness of a specific type (which may not be innocuous)
- Assumes no strong interpretability tools
- Assumes ML paradigm broadly similar to 2023
- Author acknowledges significant uncertainty across most claims
- Toy calculations for speed costs vs. simplicity benefits are acknowledged as having "unclear applicability to the real-world case"
