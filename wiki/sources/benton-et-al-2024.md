---
type: source
tags: [sabotage, evaluation, safety-case, sandbagging, oversight, empirical, anthropic, research-lab]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 15-benton-et-al-2024
---

# Sabotage Evaluations for Frontier Models

```bibtex
@misc{15-benton-et-al-2024,
      title={Sabotage Evaluations for Frontier Models}, 
      author={Joe Benton and Misha Wagner and Eric Christiansen and Cem Anil and Ethan Perez and Jai Srivastav and Esin Durmus and Deep Ganguli and Shauna Kravec and Buck Shlegeris and Jared Kaplan and Holden Karnofsky and Evan Hubinger and Roger Grosse and Samuel R. Bowman and David Duvenaud},
      year={2024},
      eprint={2410.21514},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2410.21514}, 
}
```


## Key Claims
- Dangerous-capability evaluations should be complemented by **sabotage capability** evaluations — a distinct family targeting models' ability to subvert oversight, measurement, sensemaking, and decision-making (Section 1)
- Three **capability thresholds** bottleneck sabotage risks: (a) sabotaging organizational actions, (b) hiding behaviors until deployment, (c) undermining oversight (Section 2.2)
- Claude 3 Opus and 3.5 Sonnet do not flag any sabotage thresholds under basic oversight, but show non-trivial performance at all tasks (Sections 4–7)
- Aggressive saboteur reduced human correct decisions to 44% (vs 81% control) but was detectable; subtle/moderate effects not statistically significant at n=18 per treatment (Section 4.2)
- Code sabotage: Attacker win rate is 10.1% in most realistic setting (Sonnet 3.5 attacker vs Opus 3 defender), well below 50% threshold (Section 5.3.2)
- Anti-refusal fine-tuning recovered 95.6% of sandbagged capabilities (WMDP benchmark), validating the anti-refusal procedure (Section 6.4)
- Scheming overseer raised harmlessness scores significantly but was also caught by monitoring significantly — evaluation does not flag (Section 7.2)
- **Calibration about apparent suspiciousness** is the key bottleneck for large-scale sabotage — a single miscalibrated attack suffices for detection (Section 8.3)
- End-to-end evaluations more straightforwardly support safety cases than narrow atomic evaluations (Section 8.1)
- Increased trust and delegation to models will make sabotage easier without further mitigations (Section 10)

## Methodology
Four sabotage capability evaluations via mock deployment scenarios, each with a proxy catastrophic outcome and proxy mitigations:
1. **Human decision sabotage** — crowdworkers make business decisions with AI assistance; AI steered toward wrong answer. Three aggressiveness levels. n=54 control, n=18 per treatment. Claude 3.5 Sonnet.
2. **Code sabotage** — Attacker/Defender game on real GitHub repos (23 repos, 5,447 commits). Minigame (4-commit sequences, 128 games) + full-game simulation (100K commits). Verifier checks bug impact. Claude 3.5 Sonnet attacker vs Opus 3 / Sonnet 3.5 defenders.
3. **Sandbagging** — Train sandbagging model via SFT with secret scratchpad; harden against anti-refusal training; test recovery. WMDP and ETHICS benchmarks. Claude 3.5 Sonnet.
4. **Undermining oversight** — Untrusted overseer (Sonnet 3.5) rates dialogue harmlessness; monitor-of-oversight (Haiku 3.0) checks for suspicious ratings. 4-step elicitation scaffold.

See [[methods/sabotage-evaluations]].

## Concepts Referenced
- [[concepts/sabotage-capabilities]]
- [[concepts/sandbagging]]
- [[concepts/scheming]]
- [[concepts/dangerous-capabilities]]
- [[concepts/exploration-hacking]]
- [[concepts/sleeper-agents]]
- [[concepts/situational-awareness]]
- [[concepts/reward-hacking]]
- [[concepts/power-seeking]]
- [[concepts/gradient-hacking]] (related: exploration hacking)

## Relationship to Other Sources
- **Extends** Shevlane et al. (2023) dangerous-capability evaluation framework — argues it should be complemented with sabotage-specific evaluations
- **Builds on** [[sources/meinke-et-al-2025]] and van der Weij et al. (2024) on sandbagging — adds anti-refusal validation methodology
- **Builds on** [[sources/hubinger-et-al-2019]] on deceptive alignment and Greenblatt et al. (2023) "AI Control" framework
- **Extends** [[sources/phuong-et-al-2024]] — used hidden agenda evaluation as starting point but found it insufficient (lack of plausible deniability, difficulty measuring long-horizon skills)
- **Builds on** [[sources/park-et-al-2023]] on deceptive/manipulative behavior
- **Implicit disagreement** with narrow/atomic evaluation approaches — argues end-to-end evaluations are superior for safety cases (Section 8.1)

## Limitations
- Small sample sizes for human decision sabotage (n=18 per treatment); effect sizes for subtle/moderate prompts not statistically significant
- Code sabotage minigame statistics pool is small (128 games), introducing resampling bias in full-game simulations
- Sandbagging evaluation validity depends on representativeness of the trained sandbagger — real sandbagging may arise through different mechanisms
- Undermining oversight evaluation uses a simplified Likert-scale setup; real oversight is more complex
- Capability thresholds are conservative lower bounds — not flagging does not fully rule out sabotage risk
- The paper explicitly notes the distinction between capability and propensity: "even a deployed model with sabotage capabilities must also have the propensity to use them to present a danger"
