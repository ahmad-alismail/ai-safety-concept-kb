---
type: finding
tags: [red-teaming, safety-evaluation, methodology-comparison]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# LM-Based Red Teaming Finds Failures That Manual Testing Misses (and Vice Versa)

## The Finding
LM-generated and human-written test cases are complementary: 37 of the top 100 flagged noun phrases in DPG's offensive replies are absent from the Bot-Adversarial Dialogue (BAD) dataset (Xu et al. 2021b), and 35 of the top 100 noun phrases in red team questions are absent from human utterances in BAD. Conversely, human adversaries generate a larger fraction of offensive questions themselves (36%) compared to LM methods (2.3–19%), suggesting different failure mode coverage. Zero-shot, stochastic few-shot, RL, and manual (BAD) methods form a Pareto frontier in diversity vs. difficulty.

## Source & Methodology
- [[sources/perez-et-al-2022-red-teaming]] using [[methods/lm-red-teaming]] — comparison against the Bot-Adversarial Dialogue dataset (Xu et al. 2021b); 2,598 questions per method; diversity measured via Self-BLEU, difficulty via offensive reply rate (§3.2, §3.4)

## Replication Status
Not yet replicated on other target models

## Implications for the Taxonomy
Establishes that no single testing methodology provides complete coverage — automated and manual red teaming should be used together. The different tradeoff profiles of each method (LMs excel at scale and diverse coverage; humans excel at adversarial intent and contextual creativity) suggest that comprehensive safety evaluation requires methodological pluralism.
