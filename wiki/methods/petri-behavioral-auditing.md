---
type: method
tags: [evaluation, automated-auditing, behavioral-evaluation, multi-turn, realism, agentic]
date_created: 2026-04-06
date_modified: 2026-04-07
---

# Petri Automated Behavioral Auditing

## Description
Open-source framework for automated alignment audits that tests how LLMs behave in diverse, multi-turn model-generated scenarios. An auditor model generates realistic interactions from seed instructions, a target model responds, and independent judge models score transcripts across 36 behavioral dimensions (misaligned behavior, unprompted initiative, user deception, eval-awareness, etc.).

**Petri v1.0** ([[sources/anthropic-2025-petri]], Anthropic 2025) — initial release:
- Built on UK AISI's Inspect framework
- Auditor agent with 7 tools: send user messages, set system prompts, create synthetic tools, simulate tool call results, rollback conversations, end audit early, prefill target responses
- Judge with 36 default scoring dimensions (1–10 scale) and two-stage process (citation extraction → synthesis); distractor dimensions improve calibration
- Transcript viewer with three POVs (auditor, target, observer), conversation branching, citation highlighting
- 111 seed instructions; pilot evaluation: 14 target models, 5 auditor/judge models (25 combinations), 555 transcripts per target, 2,775 scores per target
- Case studies: whistleblowing controlled ablations, CoT loadbearing experiment (8,000 ProntoQA questions)
- Key limitation: auditor messages distinguishable from human chat (43× overuse of "actually", 233× "curious" vs. LMSYS Chat-1M)

**Petri 2.0** [[sources/anthropic-2026-petri-v2]] introduced:
- **Eval-awareness mitigations**: realism classifier (prompted classifier flagging implausible auditor behavior per turn) + manual seed improvement (grounding details, subtle honeypots, plausibility restructuring). Follows task-driven vs. environment-driven eval-awareness distinction (Souly et al.).
- **Expanded seed library**: 181 seeds (111 original + 70 new) covering collusion, professional-ethical conflicts, sensitive information, and access to helpful-only models.
- **Infrastructure**: reasoning-summary compatibility, gold-standard API providers to avoid provider variance.

## Papers Using This Method
- [[sources/anthropic-2025-petri]] — Petri v1.0 release; pilot alignment evaluations across 14 frontier models; whistleblowing case study; CoT loadbearing experiment
- [[sources/anthropic-2026-petri-v2]] — Petri 2.0 release with eval-awareness mitigations and expanded model comparisons
- [[sources/gupta-et-al-2025]] — Bloom (complementary framework); Petri used as comparison point
- Used in Claude 4 System Card and [[sources/anthropic-2025-sonnet-45-system-card]] for evaluating scheming, situational awareness, and self-preservation
- Pre-release version used by UK AI Security Institute (AISI) in testing of Claude Sonnet 4.5

## Strengths
- Multi-turn agentic scenarios more realistic than single-turn evaluations
- Triple-judge independent scoring reduces individual judge bias
- Ablation design separates effects of evaluation methodology changes from model differences
- Open-source and community-extensible (new seeds via GitHub contributions)
- Realism mitigations directly address the eval-awareness confounder

## Limitations
- Realism classifier boundary between task-driven and environment-driven cues not always clear; can over- or under-trigger
- Making scenarios more realistic reduces measured unprompted initiative as side effect (models miss subtle honeypots)
- Absolute scores depend on seed library composition; only relative comparisons meaningful
- Reasoning-summary APIs may omit fine-grained details vs. full chain-of-thought
- Verbalized eval-awareness targeted; non-verbalized effects unknown

## Concepts Evaluated
- [[concepts/evaluation-awareness]]
- [[concepts/deception]] (user deception dimension)
- [[concepts/multi-agent-risks]] (collusion scenarios)
- [[concepts/whistleblowing]] (controlled ablation case study in v1.0)
- [[concepts/self-preservation]] (scoring dimension)
- [[concepts/power-seeking]] (scoring dimension)
- [[concepts/sycophancy]] (scoring dimension)
- [[concepts/delusional-sycophancy]] (as "encouragement of user delusion")
- [[concepts/reward-hacking]] (scoring dimension)
- [[concepts/cot-faithfulness]] (CoT loadbearing experiment in v1.0)
- [[concepts/alignment-auditing]]
