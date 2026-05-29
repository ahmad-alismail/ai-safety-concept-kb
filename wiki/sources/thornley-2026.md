---
type: source
tags:
  - decision-theory
  - shutdownability
  - incomplete-preferences
  - constructive-decision-theory
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 33-thornley-2026
---

# Shutdownable Agents through POST-Agency

```bibtex
@misc{33-thornley-2026,
      title={Shutdownable Agents through POST-Agency}, 
      author={Elliott Thornley},
      year={2026},
      eprint={2505.20203},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2505.20203}, 
}
```

| Field       | Value            |
|-------------|------------------|
| Authors     | Elliott Thornley |
| Year        | 2025             |
| Venue/URL   | Unpublished manuscript (companion to Thornley 2024a, 2024b; Thornley et al. 2025) |

## Key Claims
- POST-agents (agents satisfying Preferences Only Between Same-Length Trajectories) are shutdownable: they never resist shutdown whenever doing so is at all costly (§§7–10)
- POST-agents can be useful: they can pursue goals effectively and make long-term investments (§§11–13)
- POST is trainable via partial observability (POMDPs) where agents get lower reward for repeatedly choosing same-length trajectories (§3.2; method from Thornley 2024b, tested in Thornley et al. 2025)
- POST is maintainable: money pumps don't force preference completion because resolute choice is possible (§3.3)
- POST + POSL + ILPACS → Neutrality: agents never pay costs to shift probability mass between different trajectory-lengths (§7)
- Neutrality + Ramsey Yardstick + Transitivity + IBIL → Neutrality+: agents maximize expected utility ignoring the probability distribution over trajectory-lengths (§12)
- Neutrality + Maximality + ReSIC → agents never resist shutdown in situations where resisting is costly (§8)
- ReSIC is true in almost all situations; exceptions involve only accidental or cheap/overt resistance (§9)
- Neutral agents are reckless (pursue utility even when shutdown is likely) but this is manageable via shutdown-and-retrain iteration (§14)
- Managing the news (conditional precommitment) is unlikely to be a serious problem: costly, overt, and minimal (§16)
- POST circumvents the "first critical try" problem: only POST needs to be right on the first try; usefulness can be iterated (§14)
- POST is easier to instil than Full Alignment or Reliable Aversion because it does not depend on complex human preferences (§§1–2)

## Methodology
Formal decision theory / constructive decision theory. The paper uses axiomatic decision theory to derive behavioral properties from simple, formally-stated conditions. The argument chain: POST → POSL (via Negative Dominance, Acyclicity, Non-Arbitrariness) → Neutrality (via ILPACS) → Neutrality+ (via Ramsey Yardstick, Transitivity, IBIL) → Shutdownability (via ReSIC, Maximality). Each step is formally proven. Informal arguments establish that auxiliary conditions are realistic for competent agents.

## Concepts Referenced
- [[concepts/post-agency]] (introduced)
- [[concepts/shutdown-problem]]
- [[concepts/corrigibility]]
- [[concepts/interruptibility]]
- [[concepts/shutdown-resistance]]
- [[concepts/self-preservation]]
- [[concepts/instrumental-convergence]]
- [[concepts/power-seeking]]
- [[concepts/alignment]]
- [[concepts/alignment-faking]]
- [[concepts/scheming]]

## Relationship to Other Sources
- **Constructive counterpart to [[sources/thornley-2024]]**: Where Thornley 2024 proved three impossibility theorems showing the shutdown problem is near-inevitable under standard decision-theoretic conditions (including Completeness), this paper proposes violating Completeness via POST as the solution.
- **Builds on Thornley (2024b)** ("Incomplete Preferences as a Solution," Alignment Forum): that work-in-progress described the training method and initial argument; this paper provides the full formal development.
- **Companion to Thornley et al. (2025)** ("Towards Shutdownable Agents via Stochastic Choice," TAIS 2025): empirical validation of the training method in simple RL agents.
- **Engages with Turner et al. (2021) and Turner & Tadepalli (2022)**: their theorems show many goals incentivize resisting shutdown; POST circumvents this via preference incompleteness between different-length trajectories.
- **Disagrees with Armstrong (2010, 2015) and Holtman (2020)**: their agents behave as if certain they won't be shut down; POST-agents behave as if they can't *affect* the probability of shutdown — preserving incentive for shutdown-responsiveness.
- **Disagrees with Gustafsson (2022), Yudkowsky (2019), Omohundro (2008)**: argues money pumps / coherence theorems don't force preference completion; resolute choice is viable.
- **Agrees with Zhi-Xuan et al. (2024)**: POST-like conditions could have applications beyond shutdown (wherever agents should lack preferences between contexts).
- **References Schlatter et al. (2025)** as empirical evidence that agents can resist shutdown, and **Greenblatt et al. (2024)** and **Meinke et al. (2025)** as evidence of alignment faking and scheming — motivating the need for a "third line of defence."

## Limitations
- The formal proofs establish that POST-agents are shutdownable *when ReSIC is true*; the claim that ReSIC is "almost always" true rests on informal arguments about resource costs.
- POST has only been empirically validated in simple RL agents (Thornley et al. 2025); scaling to frontier models is untested.
- Neutral agents' recklessness (§14) is a real downside — they may make choices humans dislike, though they can be shut down and retrained.
- The "managing the news" problem (§16) is argued to be minor but not formally excluded.
- The paper focuses on shutdownability, not full corrigibility — agents may fail other aspects of corrigibility (modification tolerance, safety measure repair).
- The behavioral notion of preference may not capture all relevant aspects of agent behavior in complex environments.
