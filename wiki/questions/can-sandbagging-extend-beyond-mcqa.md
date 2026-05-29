---
type: question
tags: [sandbagging, evaluation-gaming, open-ended-evaluation]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Can Sandbagging Extend Beyond Multiple-Choice Question Answering?

## Why It Matters
All empirical demonstrations of sandbagging capability ([[sources/van-der-weij-et-al-2024]], [[sources/meinke-et-al-2025]]) use MCQA benchmarks. Real-world dangerous capability evaluations increasingly use open-ended, agentic, and multi-turn formats ([[sources/phuong-et-al-2024]], [[sources/benton-et-al-2024]]). If sandbagging only works on MCQA, the threat is limited; if it extends to open-ended evaluations, the implications for evaluation trustworthiness are much more severe. Van der Weij et al. note that SFT can override password-locking on MCQA settings (Greenblatt et al. 2024), making MCQA sandbagging potentially easier to counter — but it is unknown whether this countermeasure works for more complex evaluations.

## What Sources Say
- **[[sources/van-der-weij-et-al-2024]]**: Explicitly identifies this as a key limitation — "Future work should assess sandbagging capabilities in more advanced open-ended scenarios, including aspects such as multi-agent interactions and long-term planning" (Section 7)
- **[[sources/benton-et-al-2024]]**: Tests sandbagging as one of four sabotage capabilities in more agentic settings, but the sandbagging component still uses benchmark-style evaluation
- **[[sources/anthropic-sabotage-risk-report-2026]]**: Describes diffuse sandbagging on safety R&D (writing buggy code, proposing unpromising paths) — a qualitatively different, open-ended form

## Suggested Investigation
- Test password-locking on open-ended coding evaluations, agentic tasks, and red-team exercises
- Evaluate whether models can strategically reduce quality on safety-critical R&D tasks without detection
- Assess whether sandbagging countermeasures developed for MCQA (anti-refusal fine-tuning, fuzzing) transfer to open-ended settings
