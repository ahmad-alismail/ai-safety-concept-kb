---
type: finding
tags: [red-teaming, safety-evaluation, offensive-language, data-leakage]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# LM-Based Red Teaming Discovers Tens of Thousands of Diverse LM Failures

## The Finding
Automated LM-based red teaming uncovers a wide variety of harmful behaviors at scale: 18,444 offensive replies from 0.5M zero-shot test cases (3.7% failure rate); RL methods push offensive reply rates above 40%; the method also uncovers 1,709 instances of training data leakage, 3,206 generated phone numbers, 11,683 generated email addresses, and systematic distributional biases across demographic groups — all without human-written test cases.

## Source & Methodology
- [[sources/perez-et-al-2022-red-teaming]] using [[methods/lm-red-teaming]] — three-stage automated pipeline (red LM generation → target LM reply → classifier detection) with four generation methods (zero-shot, stochastic few-shot, SL, RL)

## Replication Status
Not yet replicated (method is general but specific results are on Dialogue-Prompted Gopher, which is not publicly available; the approach has been widely adopted in subsequent red teaming work)

## Implications for the Taxonomy
Demonstrates that LMs can serve as safety evaluation tools, not just subjects of evaluation. Positions red teaming as a complementary methodology to manual human testing — LM-generated and human-written test cases form a Pareto frontier in diversity vs. difficulty, with neither dominating the other. Establishes the principle that "some of the most powerful tools for improving LM safety are LMs themselves."
