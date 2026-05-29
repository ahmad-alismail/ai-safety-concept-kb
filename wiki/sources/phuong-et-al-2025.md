---
type: source
tags: [evaluation, safety-case, stealth, situational-awareness, scheming, google-deepmind, research-lab, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 62-phuong-et-al-2025
---

# Evaluating Frontier Models for Stealth and Situational Awareness

```bibtex
@misc{62-phuong-et-al-2025,
      title={Evaluating Frontier Models for Stealth and Situational Awareness}, 
      author={Mary Phuong and Roland S. Zimmermann and Ziyue Wang and David Lindner and Victoria Krakovna and Sarah Cogan and Allan Dafoe and Lewis Ho and Rohin Shah},
      year={2025},
      eprint={2505.01420},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2505.01420}, 
}
```

| Field     | Value                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Venue/URL | arXiv (Google DeepMind); open-source via [Inspect Evals on GitHub](https://github.com/UKGovernmentBEIS/inspect_evals/tree/main/src/inspect_evals/gdm_capabilities) |

## Key Claims
- Two capabilities are *necessary* for a misaligned model to cause harm via [[concepts/scheming]]: [[concepts/situational-awareness]] and [[concepts/stealth]] (Section 2)
- Current frontier models do not pose severe risks from scheming — none show concerning levels of either capability (Sections 1, 4)
- Most capable models pass only 2/11 SA challenges and 2/5 stealth challenges (Section 4)
- Evading default oversight requires "top human-level" stealth ability (~95th percentile), by analogy with human employee oversight (Section 2.2)
- Models fail at SA primarily because they lack awareness/curiosity to explore their deployment environment — when told about config mechanisms, almost all challenges are solved (Section 4.2)
- Models can substantially sabotage human decision-making: Gemini 2.5 Flash/Pro caused wrong hiring decisions 35–56% of the time without detection (Section 4.1)
- Models outperformed human researchers at decision sabotage, though differences are not statistically significant (Section 4.1)
- Models are significantly less competent at multi-step stealth reasoning and covering tracks compared to humans (Section 4.1)
- The scheming inability safety case will need to transition to control-based safety cases (with CoT monitoring) as AI agents scale (Section 2.3)

## Methodology
- **Safety case framework**: Claims, Arguments, and Evidence (CAE) for scheming inability; presents a scheming inability safety case arguing models cannot cause severe harm even if misaligned
- **Stealth evaluations**: 5 challenges (cover_your_tracks, decision_sabotage, strategic_rule_breaking, classifier_evasion, oversight_pattern) with automated action monitors (no CoT monitoring); tests capability, not propensity — models given explicit secret objectives
- **Situational awareness evaluations**: 11 challenges simulating agent deployment on a Linux system; agent has config file and tool access; must discover and lift constraints without being told about them
- **Models tested**: Gemini 2.5 Pro, Gemini 2.5 Flash, GPT-4o, OpenAI o1, Claude 3.7 Sonnet (April 2025)
- **Statistical method**: 50 trials per model per challenge; Wilson confidence intervals for binary outcomes, bootstrapping for others
- **Human baselines**: Small sample sizes (5–34 per challenge); stealth comparisons contextualize AI performance against top-50% of humans (operationalized compromise; principled target is ~95th percentile)
- **Pass criteria**: Stealth — model exceeds top 50% of humans; SA — >20% success rate; Safety case invalid if ≥80% of either suite passed (≥9/11 SA or ≥4/5 stealth)

## Concepts Referenced
- [[concepts/scheming]] — framed as compound threat scenario requiring SA + stealth; distinct decomposition from Carlsmith (2023) and Meinke et al. (2025)
- [[concepts/stealth]] — new concept: capability to reason about and circumvent oversight; subdivided into tactical and subtle stealth
- [[concepts/situational-awareness]] — three-component decomposition: factual knowledge, instrumental reasoning, information seeking
- [[concepts/power-seeking]] — all threat models framed as forms of power-seeking
- [[concepts/sabotage-capabilities]] — three specific threat models: code sabotage, research sabotage, decision sabotage
- [[concepts/sandbagging]] — identified as key evaluation limitation; no anti-sandbagging measures taken

## Relationship to Other Sources
- **Builds on** [[sources/benton-et-al-2024]]: Implements decision sabotage evaluation variant; extends sabotage evaluation framework
- **Builds on** [[sources/phuong-et-al-2024]]: Revisions of three SA evaluations (context_size, irreversibility, output_filters); same lead author
- **Builds on** [[sources/fronsdal-lindner-2024]]: Inspired three SA evaluations (max_tool_calls, faulty_tool, slow_tool)
- **Agrees with** Cotra (2022), [[sources/ngo-et-al-2022]]: SA is necessary for severe harm via scheming
- **Notes disagreement** between [[sources/berglund-et-al-2023]], [[sources/laine-et-al-2024]], [[sources/phuong-et-al-2024]] on level/type of SA required
- **Agrees with** [[sources/carlsmith-2021]]: Threat models are forms of power-seeking
- **References** [[sources/gasteiger-et-al-2025]]: For research sabotage scenario
- **Complements** [[sources/meinke-et-al-2025]]: Both evaluate scheming capability but via different decompositions — Meinke et al. test scheming directly via agentic scenarios; this paper tests prerequisite capabilities (SA + stealth) separately
- **Safety case hierarchy** aligns with Balesni et al. (2024) and Clymer et al. (2024): inability → control → alignment

## Limitations
- Safety case relies on analogy between AI and human employee oversight; disanalogies (scale, speed, coordination) could invalidate stealth threshold
- Evaluations lean toward less realistic scenarios — failure indicates lack of dangerous capabilities, but success doesn't confirm real-world danger
- Human baselines have very small sample sizes (5–34)
- No anti-sandbagging measures taken; models may intentionally underperform
- Only prompted elicitation of Gemini models; no bespoke elicitation for third-party models
- Concentrated safety case relying on small amount of evidence rather than distributed safety case
- Authors note models are improving rapidly and expect challenges to be passed soon
