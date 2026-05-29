---
type: entity
tags: [researcher, ai-safety, benchmarks]
date_created: 2026-04-05
date_modified: 2026-04-18
---

# Dan Hendrycks

## Profile
Researcher at the Center for AI Safety. Contributed to the AI deception survey, particularly the section on making AI systems less deceptive. Suggested expanding the project scope from a CICERO critique to a broad survey of AI deception. Also known for work on AI safety benchmarks and aligning AI with shared human values.

## Key Contributions
- [[sources/hendrycks-et-al-2023]] — lead author of "An Overview of Catastrophic AI Risks," the four-category taxonomy (malicious use / AI race / organizational risks / rogue AIs) that has become one of the standard reference frameworks for catastrophic AI risk. Introduces the originating conceptual articulation of [[concepts/safetywashing]] (§4.2) and the [[concepts/ai-natural-selection]] framing of race dynamics (§3.3).
- Hendrycks 2023 "Natural Selection Favors AIs over Humans" — the companion piece arguing evolutionary dynamics apply to AI systems themselves.
- [[sources/park-et-al-2023]] — co-author of "AI Deception: A Survey of Examples, Risks, and Potential Solutions"
- [[sources/ren-et-al-2024]] — senior author on "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?" (NeurIPS 2024), which introduces the capabilities-correlation methodology and empirically demonstrates that most safety benchmarks primarily reflect general capabilities. This is the quantitative operationalization of the safetywashing concept first articulated in the 2023 overview paper.
- Hendrycks et al. (2020) — "Aligning AI with Shared Human Values" (ETHICS benchmark — subsequently audited in Ren et al. 2024 and found to be highly capability-correlated).
- [[sources/pan-et-al-2023]] — co-author of "Do the Rewards Justify the Means? Measuring Trade-Offs Between Rewards and Ethical Behavior in the MACHIAVELLI Benchmark" (ICML 2023). The [[methods/machiavelli-benchmark]] inherits the [[concepts/artificial-conscience]] technique from Hendrycks's own prior "Jiminy Cricket" work (Hendrycks et al. 2021c) and scales it to 134 games with 2.86M annotations.
- Hendrycks & Mazeika (2022) — "X-risk analysis for AI research" (decomposition of safety vs. capabilities that Ren et al. 2024 operationalizes).
- [[sources/krishna-et-al-2025]] — co-author of D-REX deceptive-reasoning benchmark (2025); applies CAIS's process-oriented safety perspective to evaluating CoT–output discrepancy in frontier LLMs.

## Conceptual Framework
Hendrycks's research program consistently frames AI safety as a *differential progress* problem: the goal is not to make models better in general, but to advance safety properties *independently of* general capabilities. This framing runs from the X-risk analysis paper (2022) through Safetywashing (2024) and motivates the capabilities-correlation metric as an instrument for identifying which safety research directions will be subsumed by scaling.

## Affiliations
- [[entities/center-for-ai-safety]]
