---
type: question
tags: [evaluation, game-theory, situational-awareness, research-direction]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Does the Offence-Defence Balance in Evaluation Design Favor the Evaluator or the AI?

## Why It Matters
As AI capabilities increase, advanced AI will likely help create higher-quality evaluation scenarios — but simultaneously become better at distinguishing tests from reality. Whether creating informative evaluations (indistinguishable from real deployment for the tested AI) becomes easier or harder with increasing AI capability determines the long-term viability of testing-based safety approaches. If this balance tilts toward the AI (offence dominates), evaluation-based [[concepts/safety-cases]] may become fundamentally unreliable.

## What Sources Say
- **[[sources/kovarik-et-al-2025]]** (§4.4): Identifies this as an important research direction. Notes the analogy to generative adversarial networks (test creation vs. test detection as competing capabilities). Warns that being "blindsided by the pessimistic scenario" is a risk if this topic is not studied proactively. Suggests defining relevant terms and empirically investigating current systems as a starting point.
- The paper's formal analysis (§3.1.4) shows that even partial ability to distinguish test from deployment can render testing entirely uninformative.
- Alternative approaches if offence dominates: architectures more amenable to evaluation — explicitly picking AI preferences, decision theories, or using formal verification to limit action spaces.

## Suggested Investigation
1. Define "evaluation realism" and "evaluation detection" as measurable quantities
2. Empirically measure how current AI systems' ability to distinguish test from deployment scales with capability
3. Assess whether test-generation AI and test-detection AI show capability parity or asymmetry
4. Investigate whether formal verification or architecture-level constraints can provide evaluation guarantees independent of the offence-defence balance
