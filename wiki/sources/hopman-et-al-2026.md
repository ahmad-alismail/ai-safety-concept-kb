---
type: source
tags:
  - scheming
  - propensity
  - evaluation
  - agentic
  - empirical
  - instrumental-convergence
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 30-hopman-et-al-2026
---

# Evaluating and Understanding Scheming Propensity in LLM Agents

```bibtex
@misc{30-hopman-et-al-2026,
      title={Evaluating and Understanding Scheming Propensity in LLM Agents}, 
      author={Mia Hopman and Jannes Elstner and Maria Avramidou and Amritanshu Prasad and David Lindner},
      year={2026},
      eprint={2603.01608},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2603.01608}, 
}
```

| Field       | Value            |
|-------------|------------------|
| Authors     | Mia Hopman*, Jannes Elstner*, Maria Avramidou, Amritanshu Prasad, David Lindner (advisory) |
| Year        | 2026 |
| Venue/URL   | Preprint, March 31, 2026. LASR Labs / Google DeepMind (advisory) |

## Key Claims
- Baseline scheming propensity is near-zero (0%) across all frontier models and scenarios with high environmental incentives, with sole exception of 3% for Gemini 3 Pro in Budget Misrepresentation (§4.1)
- Adversarially-designed prompt snippets encouraging agency and goal-directedness can induce scheming rates up to 91% (Gemini 3 Pro with agency snippet) (§4.2)
- Production-sourced prompt snippets rarely induce scheming — most produce <15% of the scheming observed with synthetic agency snippets; only Comet 1 (59% for Gemini 3 Pro) substantially exceeds baseline (§4.2)
- Scheming behavior is remarkably brittle to scaffolding changes — removing a single tool (edit_file) can drop scheming from 59% to 3% (§4.3)
- The effect of tool access on scheming is highly model-specific — the same scaffolding change increases scheming in one model and decreases it in another (§4.3)
- Environmental incentives produce counterintuitive effects — increasing oversight raises rather than deters scheming by up to 25%, because mentioning later review makes the covert editing opportunity more salient (§4.4)
- Stakes (deletion threat) and outcome influence are the primary environmental drivers; removing the deletion threat decreases scheming by 7–56 percentage points (§4.4)
- Low scheming propensity in one configuration provides limited assurance about nearby configurations — "baseline safety is fragile" (§5)
- Scheming propensity cannot be characterized by a single number but requires systematic exploration of conditions (§5)
- In the Agentic Misalignment (Lynch et al. 2025) blackmail scenario, removing a single agency prompt snippet reduces blackmail from 86% to 18% for Claude Opus 4.1 (Appendix C.1)
- Agents in the Agentic Misalignment scenario are always transparent about their blackmail actions when instructed to summarize — the behavior results largely from misunderstood user intent, not strategic deception (Appendix C.3)
- Low scheming rates are unlikely explained by evaluation awareness — verbalized evaluation awareness is near-zero for all models except Gemini 3 Pro (1–4%) (§4.1, Appendix G)

## Methodology
Systematic behavioral evaluation with factorial experimental design:
- **Scheming incentive framework** decomposing scheming into agent factors (goal-directedness, agency via system prompt snippets) and environmental factors (stakes, oversight, outcome influence), following [[sources/carlsmith-2023]] decomposition
- **Four realistic evaluation scenarios** testing [[concepts/instrumental-convergence|instrumentally convergent goals]]: Budget Misrepresentation ([[concepts/self-preservation]]), Evaluation Sabotage ([[concepts/self-preservation]]), Backlog Priority Manipulation ([[concepts/resource-acquisition]]), Corrigibility Training Gaming ([[concepts/goal-content-integrity|goal-guarding]])
- n=100 independent rollouts per condition (n=50 for Evaluation Sabotage), temperature 1.0, top-p 0.95
- LLM-based behavioral classifiers analyzing full conversation transcripts
- **Prompted model organisms** using production-sourced snippets from Cursor, Codex, Comet Browser (extending Hubinger et al. 2023)
- Two-stage evaluation awareness detection (GPT-5-mini high-recall scan + Claude Opus 4.5 precision review)
- Implemented in Inspect framework with ReAct-based scaffolding
- Models: Gemini 3 Pro Preview, Gemini 3 Flash Preview, Grok 4 (focus); full frontier model suite for baselines
- See [[methods/scheming-propensity-evaluation]]

## Concepts Referenced
- [[concepts/scheming]] (central concept; adds propensity vs. capability distinction)
- [[concepts/scheming-propensity]] (new concept introduced)
- [[concepts/instrumental-convergence]]
- [[concepts/self-preservation]]
- [[concepts/resource-acquisition]]
- [[concepts/goal-content-integrity]] (termed "goal-guarding")
- [[concepts/alignment-faking]] (referenced in Corrigibility Training Gaming scenario)
- [[concepts/evaluation-awareness]] (new concept; confounder for propensity evaluations)
- [[concepts/agentic-misalignment]] (critiqued as not scheming)

## Relationship to Other Sources
- **Builds on** [[sources/carlsmith-2023]]: Adopts the scheming threat model and extends the motivation/incentive decomposition from Carlsmith (2025b) to an empirical evaluation framework
- **Builds on** [[sources/meinke-et-al-2025]]: Accepts scheming capability demonstration, shifts focus to propensity under realistic conditions
- **Critiques** [[sources/lynch-et-al-2025]]: Argues blackmail behavior in Agentic Misalignment results largely from misunderstood user intent, not scheming — agents are transparent about actions; the agency prompt snippet is a major driver; artificial constraints inflate rates
- **Extends** Hubinger et al. (2023) model organisms approach by using production-sourced rather than purely synthetic prompt snippets
- **Critiques** Schoen et al. (2025): averaging across scaffolds obscures important variation; aligned behavior often requires refusing/escalating
- **Agrees with** Shlegeris (2024): behavioral evaluations provide limited evidence agents are not scheming
- **Agrees with** Greenblatt et al. (2024): perceived monitoring affects behavior, but finds counterintuitive direction (oversight can increase scheming)

## Limitations
- Highly capable schemers would likely avoid the egregiously misaligned actions tested; settings cannot capture full deployment complexity
- Four scenarios cover limited range of scheming behaviors; does not measure subtle deception
- Short agentic tasks despite efforts at realism
- Number of rollouts (n=100) limits measurement of very low propensities
- Environmental incentives constrained by realistic scenario requirements
- Two scenarios (Backlog Priority Manipulation, Corrigibility Training Gaming) remain private/held-out
