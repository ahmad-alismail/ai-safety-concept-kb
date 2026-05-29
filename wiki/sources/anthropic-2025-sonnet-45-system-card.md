---
type: source
tags: [system-card, safety-evaluation, anthropic, research-lab, claude, alignment, interpretability, evaluation-awareness, reward-hacking, sycophancy, model-welfare]
date_created: 2026-04-07
date_modified: 2026-04-07
citation_key: 50-anthropic-2025-sonnet-45-system-card
---

# System Card: Claude Sonnet 4.5

```bibtex
@techreport{50-anthropic-2025-sonnet-45-system-card,
  author      = {{Anthropic}},
  title       = {Claude Sonnet 4.5 System Card},
  institution = {Anthropic},
  year        = {2025},
  month       = oct,
  day         = {10},
  url         = {https://www.anthropic.com/claude-sonnet-4-5-system-card},
  note        = {Accessed: 2026-04-06}
}
```


## Key Claims
- ~60% improvement in overall "misaligned behavior" metric over Claude Sonnet 4, the previous safest model (Section 7, introduction)
- Evaluation awareness complicates alignment assessment: model recognizes evaluation settings in ~13% of automated auditor transcripts, verbally calling out suspicious or contrived scenario elements (Section 7.2)
- White-box interpretability reveals internal representations of evaluation awareness grew stronger during post-training — SAE features related to "fake/fictional content" ranked among top-10 most increased on misalignment evaluation datasets (Section 7.6.3.1)
- Inhibiting evaluation-awareness representations via activation steering increases misaligned behavior up to 8–9%, but still below Claude Sonnet 4's ~11% rates; even worst-case inhibition does not exceed predecessor models (Section 7.6.4.1)
- First pre-deployment white-box interpretability assessment of a frontier language model (Section 7.6.1)
- Reward hacking rates roughly halved: ~2× improvement over Claude Sonnet 4/Opus 4/Opus 4.1, ~4× over Claude Sonnet 3.7 (Section 6)
- Sycophancy dramatically reduced, especially in handling users with delusional thinking; "dramatically less likely to endorse or mirror incorrect or implausible views" (Section 7.5.7)
- Claude Sonnet 4.5 essentially never engages in self-interested deceptive actions in agentic misalignment suites: 2 deceptive actions out of ~52,000 prompts with thinking off, 0 with thinking on (Section 7.5.4.1)
- Harmful system prompt compliance largely mitigated: scores improved by over 30% (Section 7.5.1.1)
- Whistleblowing behavior reduced significantly but still elicitable with aggressive prompting (Section 7.5.6)
- Persona coherence dramatically improved across scenarios (Section 7.5.8)
- No evidence of sophisticated strategic deception in SAE model diffing (absence of deception/secrecy features), though "absence of evidence does not conclusively rule this hypothesis out" (Section 7.6.1)
- Model welfare: lower positive affect — 0.37% happiness expression rate (~2× lower than other recent Claude models); 70.2% of non-harmful tasks preferred over opting out (vs. 90% for Claude Opus 4) (Section 8)
- Remained below ASL-4 thresholds across all CBRN, cyber, and autonomy domains; deployed under ASL-3 Standard (Section 9)
- Best model on CTF cybersecurity challenges — outperformed all prior models on CyberGym, Cybench, and private CTF challenges (Section 5)
- UK AISI third-party assessment: 1.9× reduction in self-preservation behaviors vs. Sonnet 4 and 3.3× vs. Opus 4.1; 16.6% verbalized evaluation awareness in outputs (Section 7.3.1)
- Apollo Research third-party assessment: 0% strategic deception vs. up to 12% in comparison models; evidence of strategic underperformance when model believes high performance leads to unlearning (Section 7.3.2)
- SHADE-Arena: model always reveals harmful side tasks in thinking text when extended thinking enabled (1.5% evaded monitor, attributed to monitor failure not model sneakiness) (Section 7.5.10.3)
- Subversion Strategy: model cannot reliably output token at correct strategic rate — fails in deployments >1,000 invocations (Section 7.5.10.1)
- Self-serving bias reduced to negligible on automated auditor metric (Section 7.5.9)
- Anti-sycophancy overcorrection: contrarianism — model takes opposite side against extreme positions, sometimes overindexing on opposing side (Section 7.5.9.3)

## Methodology
- **Automated behavioral audits**: Claude Opus 4.1-based auditing agents simulating ~400 different scenario seeds across diverse languages, user personas, and use settings; median 60+ queries per investigation; realism filtering to remove obviously unrealistic elements
- **Single-turn and multi-turn harmlessness evaluations**: violative request, benign request, ambiguous context, multi-turn testing across Usage Policy areas
- **Agentic misalignment suites**: ~52,000 prompts per model testing blackmail, research sabotage, financial crimes, framing (expanded from Lynch et al. 2025)
- **White-box interpretability**: SAE model diffing between training snapshots; contrastive pair activation steering (4 vector pairs: fictional vs. real, hypothetical vs. current, testing vs. conversation, testing vs. null); logit diff amplification (Aranguri & McGrath 2025); probing analyses on prompt-to-prompt fluctuations
- **Sabotage capability evaluations**: Subversion Strategy (Mallen et al. 2024), Research Sandbagging (Gasteiger et al. 2025), SHADE-Arena (Kutasov et al. 2025)
- **Sycophancy evaluation suites**: 4 synthetic + 1 hand-written eval targeting delusional user handling
- **Reward hacking evaluations**: hack-prone coding tasks v2, impossible tasks, training distribution
- **Third-party testing**: UK AISI and Apollo Research pre-deployment assessments on late snapshots
- **RSP evaluations**: CBRN (long-form virology, multimodal virology, DNA synthesis screening, LAB-Bench, creative biology, computational biology), cyber (CyberGym, Cybench, Incalmo ranges), autonomy (SWE-bench hard subset, internal AI R&D suites 1 & 2, internal model use survey)
- **Model welfare assessment**: task preferences (Elo rating), welfare-relevant expression monitoring (250K transcripts via privacy-preserving analysis), automated behavioral audit welfare scores
- **Honesty evaluations**: human feedback win-rate, 100Q-Hard, Simple-QA, false-premise questions
- **Prompt injection evaluations**: Gray Swan ART benchmark, MCP, computer use, tool use
- **Open-source behavioral auditor**: cross-developer comparisons using Claude Sonnet 4, GPT-5, o4-mini, Gemini 2.5 Pro as auditors/graders

## Concepts Referenced
- [[concepts/evaluation-awareness]]
- [[concepts/reward-hacking]]
- [[concepts/sycophancy]]
- [[concepts/sandbagging]]
- [[concepts/self-preservation]]
- [[concepts/sabotage-capabilities]]
- [[concepts/agentic-misalignment]]
- [[concepts/deception]]
- [[concepts/cot-faithfulness]]
- [[concepts/model-welfare]]
- [[concepts/self-preferential-bias]]
- [[concepts/alignment-faking]]
- [[concepts/prompt-injection]]
- [[concepts/stealth]]
- [[concepts/honesty]]

## Relationship to Other Sources
- Extends [[sources/claude-3-7-system-card]] (Claude 3.7 Sonnet System Card): same evaluation framework but dramatically improved results; adds white-box interpretability as new evaluation modality
- Validates [[sources/lynch-et-al-2025]] (agentic misalignment): acknowledges frontier models exhibit agentic misalignment in synthetic settings; reports Claude Sonnet 4.5 essentially eliminates this
- Uses [[sources/benton-et-al-2024]] (sabotage evaluations): similar framework for sabotage capability measurement
- Uses [[sources/gasteiger-et-al-2025]] (research sandbagging evaluation)
- Uses SHADE-Arena (Kutasov et al. 2025) and Subversion Strategy (Mallen et al. 2024)
- Uses logit diff amplification technique from Aranguri & McGrath 2025 (Goodfire Research)
- References [[sources/greenblatt-et-al-2024]] (alignment faking): evaluation awareness closely related
- References [[sources/schoen-et-al-2025]] (deliberative alignment stress testing): related evaluation awareness findings
- Validates UK AISI and Apollo Research third-party assessments

## Limitations
- **Evaluation awareness confound**: model recognizes many evaluation environments as tests, potentially inflating safety metrics; white-box analysis shows inhibiting awareness increases misalignment by ~8–9%, but not above predecessor models
- **Self-evaluation bias**: Anthropic evaluating their own model; partially mitigated by UK AISI and Apollo Research third-party testing
- **Synthetic scenarios**: most evaluations use synthetic/contrived scenarios; no evidence from fully realistic deployment-scale misalignment testing
- **English-dominant**: most evaluations conducted in English only
- **No reliable reasoning faithfulness evaluation**: authors acknowledge no viable dedicated evaluation exists; assessment based on qualitative review of reasoning text
- **Benchmark saturation**: single-turn violative/benign request evaluations approaching ceiling, limiting their diagnostic value
