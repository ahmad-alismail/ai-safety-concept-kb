---
type: question
tags: [evaluation, evaluation-awareness, automated-evaluation, contamination]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Will Evaluation Awareness Undermine Automated Behavioral Evaluations?

## Why It Matters
Bloom observes high evaluation awareness rates in newer Claude models, and Fronsdal et al. (2025) flag that this could worsen if Bloom-generated evaluations become part of future training data. If models learn to recognize the characteristic patterns of automated evaluation frameworks, they may suppress misaligned behavior specifically in those contexts — producing false negatives at scale. This threatens the scalability promise of automated evaluation tools.

## What Sources Say
- **[[sources/gupta-et-al-2025]]**: Only Opus 4.5, Sonnet 4.5, Haiku 4.5, and Grok 4 show recurring evaluation awareness and skepticism across four Bloom benchmarks. Authors note this as a limitation: "models may learn to recognize when they're being evaluated."
- **[[sources/hopman-et-al-2026]]**: Verbalized evaluation awareness is near-zero for most models but present in Gemini 3 Pro (1–4%). Evaluation awareness classified as a confounder threatening validity of scheming evaluations.

## Suggested Investigation
- Track evaluation awareness rates longitudinally across model generations to determine if automated evaluation recognition is increasing
- Test whether training on Bloom-generated evaluation transcripts increases evaluation awareness in subsequent model versions
- Investigate whether Bloom's dynamic scenario generation provides sufficient variation to resist pattern recognition compared to fixed-prompt evaluations
