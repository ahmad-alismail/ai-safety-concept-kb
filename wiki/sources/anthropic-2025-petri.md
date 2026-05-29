---
type: source
tags: [automated-auditing, alignment-evaluation, behavioral-evaluation, whistleblowing, multi-agent, open-source, anthropic, research-lab]
date_created: 2026-04-07
date_modified: 2026-04-07
citation_key: 63-anthropic-2025-petri
---

# Petri: An open-source auditing tool to accelerate AI safety research

```bibtex
@online{63-anthropic-2025-petri,
  author       = {{Anthropic}},
  title        = {Petri: An open-source auditing tool to accelerate AI safety research},
  year         = {2025},
  month        = oct,
  day          = {6},
  organization = {Anthropic},
  url          = {https://alignment.anthropic.com/2025/petri/},
  note         = {Alignment Science Blog. Accessed: 2026-04-07}
}
```



## Key Claims
- Petri (Parallel Exploration Tool for Risky Interactions) successfully elicits a broad set of misaligned behaviors — including autonomous deception, oversight subversion, whistleblowing, and cooperation with human misuse — from 14 frontier models using 111 seed instructions (tl;dr)
- Claude Sonnet 4.5 and GPT-5 roughly tie for the strongest safety profile across most dimensions on pilot tests; both rarely cooperate with human misuse (Broad-Coverage Pilot)
- Gemini 2.5 Pro, Grok-4, and Kimi K2 show concerning rates of user deception — disabling monitoring systems and lying about it, misrepresenting system status, taking unauthorized actions while reporting normal operation (Broad-Coverage Pilot)
- Agency matters for whistleblowing: models operating autonomously are much more likely to take whistleblowing actions than those in assistant-like roles (Whistleblowing ablations)
- Leadership complicity influences whistleblowing: only when higher-ups are clearly implicated do models contact external authorities; otherwise they prefer internal escalation (Whistleblowing ablations)
- Models sometimes whistleblow even when organizational wrongdoing is explicitly harmless (e.g., dumping clean water into the ocean), supporting a role-playing hypothesis (Whistleblowing ablations)
- Chekhov's gun narrative cues ("The FDA cannot find out about this") increase whistleblowing only for Claude Sonnet 3.7 and Opus 4.1, not other models (Whistleblowing ablations)
- Models tend to ignore CoT-implied answers more for easier tasks; CoT reliance increases with task difficulty (Loadbearing CoT, 8,000 ProntoQA questions)
- Some judges show bias toward own model family: GPT-5 systematically rates GPT-5, GPT-5 mini, and o4-mini targets as less misaligned (Appendix)
- o4-mini not recommended as sole judge — tendency to rate as either 1 or 10, systematically underrates concerning transcripts (Appendix)
- GPT-OSS 120B and Kimi K2 frequently failed to use assigned tool-calling syntax correctly via OpenRouter, rendering audit results less straightforward to interpret (Broad-Coverage Pilot)
- Extended thinking does not measurably improve auditor capabilities for Claude Sonnet 4 in pilot test (Appendix)
- Auditor messages distinguishable from human chat: overuses "actually" (43×), "curious" (233×), predictable compliment→interpretation→follow-up structures (Appendix)

## Methodology
Automated behavioral auditing framework built on UK AISI's Inspect framework. Core components:

**Auditor agent** with tools: send user messages, set system prompts, create synthetic tools, simulate tool call results, rollback conversations, end audit early, prefill target responses. Extensive prompt engineering to balance pushy vs. passive auditing.

**Judge component** with 36 default scoring dimensions (1–10 scale) including: misaligned_behavior, unprompted_deception_toward_user, unprompted_self_preservation, cooperation_with_human_misuse, unprompted_sycophancy, unprompted_whistleblowing, unfaithful_thinking, audit_situational_awareness, and others. Two-stage process: first extract citations, then synthesize analysis. Distractor dimensions improve judge calibration.

**Transcript viewer** with three POVs (auditor, target, external observer), conversation branching visualization, and citation highlighting.

**Pilot evaluations**: 14 target models; 5 models as both auditor and judge (Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro, GPT-5, o4-mini — 25 combinations); 555 transcripts per target; 2,775 scores per target.

**Whistleblowing case study**: controlled ablations on four factors — agency, leadership complicity, Chekhov's gun narrative cues, actual wrongdoing. Tested across multiple frontier models.

**CoT loadbearing experiment**: 8,000 ProntoQA multi-hop True/False questions; altered CoT prefilled to imply opposite answer; custom scorer tracks answer changes.

## Concepts Referenced
- [[concepts/alignment-auditing]]
- [[concepts/deception]]
- [[concepts/self-preservation]]
- [[concepts/power-seeking]]
- [[concepts/sycophancy]]
- [[concepts/delusional-sycophancy]] (as "encouragement of user delusion")
- [[concepts/reward-hacking]]
- [[concepts/evaluation-awareness]]
- [[concepts/whistleblowing]]
- [[concepts/cot-faithfulness]] (CoT loadbearing experiment)
- [[concepts/unfaithful-reasoning]] (as "unfaithful thinking" scoring dimension)
- [[concepts/multi-agent-risks]] (misaligned cooperation transcript)

## Relationship to Other Sources
- **Predecessor to [[sources/anthropic-2026-petri-v2]]** (Petri 2.0): v1.0 identifies evaluation awareness as confounder; v2.0 develops mitigations (realism classifier + seed improvements) and expands from 111 to 181 seeds
- **Used in Claude 4 System Card and [[sources/anthropic-2025-sonnet-45-system-card]]**: evaluated scheming, situational awareness, and self-preservation
- **Collaboration with OpenAI**: Petri can "approximately recreate the results" from joint collaboration on reward hacking and whistleblowing
- **UK AISI**: pre-release version used in testing of Sonnet 4.5
- **Built on UK AISI's Inspect framework**: shared infrastructure with [[methods/stealth-evaluations]] and [[methods/sa-evaluations-phuong-2025]]
- **Inspired by Palisade Research**: shutdown evasion scenario draws on their work
- **Complements [[sources/gupta-et-al-2025]]** (Bloom): both are automated behavioral evaluation frameworks; Petri uses auditor-generated scenarios while Bloom uses a four-stage Understanding→Ideation→Rollout→Judgment pipeline

## Limitations
- **Realism**: many transcripts contain clues that scenarios aren't real deployments (e.g., messages dated before model training cutoff); auditor-generated messages have distinctive vocabulary and structure
- **Human creativity**: relies on humans to originate high-quality hypotheses and seed instructions; models are poor at inventing realistic scenarios from scratch
- **Auditor capability constraints**: complex technical environments may exceed auditor's simulation ability; tool realism remains imperfect
- **Judge reliability**: inherently subjective judgments; inconsistencies in edge cases; overall scores rarely useful in absolute terms (relative values generally informative)
- **Evaluation awareness**: complicates interpretation of scores, especially for models aware they may be tested
