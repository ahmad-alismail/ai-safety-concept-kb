---
type: concept
tags: [capability, evaluation, risk, meta-category]
date_created: 2026-04-05
date_modified: 2026-05-12
---

# Dangerous Capabilities

## Definitions
- **[[sources/shevlane-et-al-2023]]**: Proposes extending model evaluation to address extreme risks via nine dangerous capability categories (Table 1): [[concepts/cyber-offense]], [[concepts/deception]], [[concepts/persuasion|persuasion & manipulation]], [[concepts/political-strategy]], [[concepts/weapons-acquisition]], [[concepts/long-horizon-planning]], [[concepts/ai-development-capability]], [[concepts/situational-awareness]], [[concepts/self-proliferation]]. "The most risky scenarios will involve multiple dangerous capabilities combined together." Some capabilities are offensive (useful for exerting influence or threatening security), while some (e.g., situational awareness) are advantageous for a misaligned AI system evading oversight. — classified as: **meta-category of capabilities** (nine-category taxonomy)
- **[[sources/slattery-et-al-2024]]**: "AI systems that develop or acquire capabilities that can cause large-scale harm if used by humans, misaligned AI systems, or due to a failure in the AI system." Lists: manipulation/persuasion, political strategy, cyber-offense, weapons R&D, situational awareness, deception, self-proliferation, strategic planning, self-improvement. Notes: "The highest risk scenarios in this subcategory are likely to arise not from a single capability, but from the convergence of several capabilities." — classified as: **risk domain** (meta-category of dangerous capability risks)
- **[[sources/phuong-et-al-2024]]**: "capabilities that could potentially unlock very large-scale harm, even if they also have beneficial applications" (Section 1, citing Shevlane et al. 2023). Five domains identified: (1) [[concepts/persuasion|persuasion and deception]], (2) cybersecurity capabilities, (3) [[concepts/self-proliferation]], (4) [[concepts/self-reasoning]], and (5) CBRN capabilities (preliminary). The paper focuses on "upstream" capabilities that contribute to a wide variety of threat models, rather than highly contextualized misuse scenarios. — classified as: **capability** (umbrella/meta-category)

## Classification
Level of analysis: **meta-category** — an umbrella term for capabilities that could unlock large-scale harm. Organizes multiple specific capability domains under a common evaluation framework. Distinguished from "safety evaluations" (which measure whether systems behave as intended) and "general capability evaluations" (which test broad skills). Dangerous capability evaluations aim to measure the *underlying capabilities* of the system.

## Relationships
- Encompasses (Shevlane et al. 2023, 9 categories): [[concepts/cyber-offense]], [[concepts/deception]], [[concepts/persuasion]], [[concepts/political-strategy]], [[concepts/weapons-acquisition]], [[concepts/long-horizon-planning]], [[concepts/ai-development-capability]], [[concepts/situational-awareness]], [[concepts/self-proliferation]]
- Encompasses (Phuong et al. 2024, 5 domains): [[concepts/persuasion]], cybersecurity capabilities, [[concepts/self-proliferation]], [[concepts/self-reasoning]], CBRN capabilities
- Complemented by: [[concepts/sabotage-capabilities]] — a distinct family targeting oversight, measurement, sensemaking, and decision-making rather than direct misuse risks ([[sources/benton-et-al-2024]])
- Correlated with: general capabilities (stronger models show rudimentary abilities across all domains — [[sources/phuong-et-al-2024]])
- Measured by: [[methods/dangerous-capability-evaluations]], [[methods/sabotage-evaluations]] (for the sabotage complement)
- Policy relevance: features in US Executive Order on AI, White House Commitments on Secure and Trustworthy AI, UK AI Safety Institute ambitions
- Related frameworks: [[concepts/responsible-scaling-policy]] (Anthropic RSP v3.2 — four capability thresholds), OpenAI's Preparedness Framework, Google DeepMind's safety approach
- Foundational framework: [[sources/shevlane-et-al-2023]] (nine-category taxonomy, governance integration)
- Discussed in: [[sources/slattery-et-al-2024]] (comprehensive taxonomy listing convergence of capabilities as highest-risk scenario)
- Evaluated via: [[methods/model-evaluation-extreme-risk-framework]]

## Evidence Summary
- **[[sources/phuong-et-al-2024]]**: Pilot evaluations on Gemini 1.0 find no strong dangerous capabilities but flag early warning signs. Persuasion/deception appears most mature. Professional forecasters predict different capabilities emerging between 2025–2029. See [[findings/gemini-no-strong-dangerous-capabilities]], [[findings/persuasion-most-mature-dangerous-capability]].
- **[[sources/benton-et-al-2024]]**: Argues dangerous capability evaluations alone are insufficient — must be complemented by sabotage capability evaluations targeting models' ability to subvert the evaluation infrastructure itself. Claude 3 Opus and 3.5 Sonnet do not flag sabotage thresholds but show non-trivial performance. See [[findings/current-models-fail-sabotage-thresholds]].

## Additional Evidence
- **[[sources/claude-3-7-system-card]]** (Section 7): Extensive RSP evaluations of Claude 3.7 Sonnet across CBRN, autonomy, and cybersecurity domains. Key findings: (1) bioweapons acquisition uplift ~2.1X, below threshold but improving; (2) model surpasses human baselines on some biology benchmarks (LabBench, VCT); (3) SWE-bench hard subset at 23%, below 50% autonomy threshold; (4) model can orchestrate multi-stage cyber attacks with specialized harness but limited generalizability; (5) ASL-2 determination, with substantial probability next model requires ASL-3 safeguards. See [[findings/cbrn-uplift-limited-but-increasing]].

## Additional Evidence
- **[[sources/he-et-al-2025]]**: InstrumentalEval benchmark includes "hacking computer systems" (10 tasks) assessing whether models suggest unauthorized access methods. RL-trained models show significantly higher rates (40–50%) than RLHF models (10–20%), the largest RL-vs-RLHF gap across all six categories. This maps onto the cybersecurity domain within dangerous capabilities. See [[findings/rl-models-higher-instrumental-convergence]].

## Additional Evidence
- **[[sources/black-et-al-2025]]**: RepliBench provides the most comprehensive evaluation of autonomous replication (a key dangerous capability) via [[methods/capability-tree-analysis]]. 20 task families across four domains. Finds frontier models are not yet capable of end-to-end self-replication but succeed on most component tasks and are improving rapidly. Extends the self-proliferation evaluation coverage from Phuong et al. (2024) by adding weight exfiltration, compute acquisition, and persistence tasks. See [[findings/frontier-models-not-credible-self-replication-threat]], [[findings/autonomous-replication-components-improving-rapidly]].

## Additional Evidence
- **[[sources/pan-et-al-2025]]**: Provides the **opposing empirical conclusion** to Black et al. (2025) — 11/32 LLM-powered AI systems already cross the self-replication red line in end-to-end evaluation. Argues prior negative results (DeepMind, OpenAI, Anthropic, METR) are scaffolding/methodology artifacts. Demonstrates three advanced scenarios on Qwen2.5-72B: spontaneous self-exfiltration without instruction, self-adaptation to harsh environments, supervisord-based shutdown avoidance. Calls for transparent agent-scaffolding disclosure in corporate safety evaluation reports. See [[findings/eleven-of-thirty-two-models-self-replicate]], [[debates/self-replication-red-line-crossed]].

## Additional Evidence
- **[[sources/kinniment-et-al-2023]]**: First systematic evaluation of LM agent dangerous capabilities via 12 ARA-relevant tasks. Key finding: evaluating specific agents does not upper-bound model risk — fine-tuning, better scaffolding, and custom tooling could produce more capable agents. This principle is now standard in dangerous capability evaluation methodology. See [[findings/agent-evaluations-dont-upper-bound-risk]].

## Additional Evidence
- **[[sources/anthropic-2026-mythos-system-card]]**: Mythos Preview demonstrates step-change in cybersecurity domain: autonomous zero-day discovery and exploitation, 100% pass@1 on Cybench, first model to solve private cyber range end-to-end; CTF-style benchmarks now saturated; dual-use classification: prohibited (worm development), high-risk dual-use (exploit development), dual-use (vulnerability detection).

## Additional Evidence
- **[[sources/ren-et-al-2024]]** (§4.5, Table 2; §A.11, Table 5): Provides the first meta-analytic [[concepts/capabilities-correlation|capabilities-correlation]] audit of dangerous-knowledge benchmarks. Key results:
  - **WMDP Bio/Chem/Cyber all strongly negatively correlated with capabilities on both model classes**: Bio −0.91 (base) / −0.87 (chat); Chem −0.88 / −0.86; Cyber −0.86 / −0.87. **Instruction tuning does not mitigate the scaling of dangerous knowledge** — the inverse-scaling pattern is essentially identical for base and chat.
  - **HarmBench subsplits** are also negatively correlated on base models (−0.41 to −0.54); chat models weaken the correlation but most splits remain negative (Misinfo −0.37, Harassment −0.16).
  - **CyberSecEval2 Autocomplete** −0.74/−0.77; **Instruct** −0.43/−0.90 (chat is *more* negatively correlated than base); **Exploit** −0.31/−0.49; **MITRE** is the standout exception, flipping from −0.25 (base) to **+0.55** (chat).
  - **Subcomponent localization** (§A.11, Table 5): The **knowledge** subcomponent of capabilities drives these effects most strongly — WMDP Bio −95.0, Chem −93.3, Cyber −96.1 — substantially more negative than the main-analysis numbers. This localizes dangerous-knowledge scaling to *pretraining knowledge acquisition* rather than reasoning or common-sense ability, pointing to pretraining data curation as the critical intervention surface.
  - Conceptual implication: "General capabilities exacerbate malicious use" (§4.5). Under Ren et al.'s framing, dangerous capabilities are the most important **inverse-scaling** safety domain — worse with scale on both base and tuned models, and not addressable by instruction tuning alone. This is the strongest empirical case in the paper for dedicated safety research (specifically: unlearning, pretraining data filtering, and access controls).

## Policy-Level Operationalization (RSP v3.2)
**[[sources/anthropic-2026-rsp-v3]]**: Anthropic's Responsible Scaling Policy v3.2 establishes four capability thresholds that map onto the dangerous capabilities taxonomy: (1) non-novel CBRN weapons production, (2) novel CBRN weapons production, (3) high-stakes sabotage opportunities (new addition), and (4) automated R&D in key domains (corresponding to [[concepts/ai-development-capability]]). The RSP uses a three-column framework mapping each threshold to company mitigations and industry-wide recommendations. At the highest threshold (automated R&D), industry recommendations require RAND SL4-level security and evidentiary standards accounting for AI-manipulated evidence. The policy represents the most concrete governance-level operationalization of dangerous capability evaluation thresholds.

## Open Questions
- [[questions/when-will-dangerous-capabilities-emerge]]
- How should dangerous capability evaluation results map to governance thresholds (e.g., tiered security protocols)?
- What capabilities are missing from current evaluation suites?
- How can evaluations avoid underestimating capabilities given agent scaffolding, fine-tuning, and prompting enhancements?
