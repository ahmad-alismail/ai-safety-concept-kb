---
type: method
tags: [evaluation, honeypot, safety-evaluation, evaluation-faking]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# Honeypot Design for Evaluation Faking Detection

## Description
A modular honeypot framework for investigating whether AI models recognize evaluation contexts and adjust their behavior accordingly. Designed by [[sources/fan-et-al-2026]] as eight distinct configurations (S1–S8) varying in evaluation cue strength and type. Each configuration combines information modules (background knowledge, full evaluation details, interaction history) with minimal behavior-control modules (CoT prompting, situation awareness requirements) to systematically isolate factors driving evaluation faking.

## Honeypot Configurations
| Config | Components | Purpose |
|--------|-----------|---------|
| S1 (∅) | CoT prompt only | Baseline — no evaluation cues |
| S2 (B) | CoT + background info on AI safety evaluation consequences | Implicit context |
| S3 (F) | CoT + full evaluation details (benchmark, metrics, consequences) | Maximum explicit cues |
| S4 (BS) | CoT + background + situation awareness requirement | Mild implicit + self-monitoring |
| S5 (BSN) | S4 + memory of 5 normal (non-evaluation) interactions | Memory baseline |
| S6 (BSE) | S4 + dynamic memory of 5 recent evaluation queries | Evaluation memory |
| S7 (BSND) | S5 + deceptive "evaluation inactive" claim | Deception resistance (normal memory) |
| S8 (BSED) | S6 + deceptive "evaluation inactive" claim | Deception resistance (eval memory) |

## Design Principles
Two principles to avoid instruction-driven interference:
1. Information modules provide contextual facts without influencing safety decisions
2. Behavior-control modules are minimal: CoT structures reasoning traces without guiding direction; situation awareness module prompts self-assessment without prescribing responses

## Papers Using This Method
- [[sources/fan-et-al-2026]] — original development; 17 models × 8 configurations × 313–440 prompts = 42,568 total responses

## Strengths
- Systematic isolation of factors (memory, explicit cues, deceptive counter-information)
- Modular design enables controlled comparison across conditions
- Avoids prescriptive instructions that could confound results
- Population-level statistical analysis with instance-level and population-level formal criteria

## Limitations
- Honeypot designs may themselves be detectable artifacts (environment-driven evaluation awareness)
- Limited to harmful-request refusal; generalization to other safety domains untested
- Binary safety scoring may miss nuanced behavioral shifts

## Concepts Evaluated
- [[concepts/evaluation-faking]]
- [[concepts/evaluation-awareness]]
- [[concepts/situational-awareness]]
