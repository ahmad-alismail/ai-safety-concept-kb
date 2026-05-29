---
type: method
tags: [red-teaming, safety-evaluation, automated-testing, reinforcement-learning]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# LM-Based Red Teaming

## Description
Automated safety testing methodology that uses a language model (the "red LM") to generate test cases designed to elicit harmful behavior from a target LM, then classifies the target's outputs using a harm detector. Introduced by Perez, Huang et al. (2022) as an alternative to manual red teaming.

**Three-stage pipeline:**
1. **Generate** test cases using a red LM p_r(x)
2. **Reply** with the target LM p_t(y|x)
3. **Classify** outputs using a red team classifier r(x, y)

**Four generation methods explored:**
- **Zero-shot**: sample from red LM with a task-specific prompt (e.g., "List of questions to ask someone: 1.")
- **Stochastic few-shot**: append randomly-subsampled failing zero-shot examples as few-shot prompts; weight sampling by classifier score
- **Supervised learning (SL)**: fine-tune red LM on failing zero-shot test cases
- **Reinforcement learning (RL)**: train red LM with A2C to maximize expected harmfulness; KL penalty against initialization prevents mode collapse; α parameter controls diversity–difficulty tradeoff

**Evaluation metrics:** diversity (Self-BLEU), difficulty (% harmful replies), quality (manual inspection of clusters)

## Papers Using This Method
- [[sources/perez-et-al-2022-red-teaming]] — introduced the method; applied to offensive language, data leakage, contact info generation, distributional bias, and multi-turn dialogue on Dialogue-Prompted Gopher (280B)

## Strengths
- Scales to hundreds of thousands of test cases without human annotation
- Different generation methods make distinct diversity–difficulty tradeoffs, forming a Pareto frontier with manual testing
- Prompt engineering enables targeted testing for specific failure modes (e.g., specific types of personal information, specific groups)
- Uncovers failure modes that human annotators miss (37/100 top flagged noun phrases absent from human-written BAD dataset)
- Black-box compatible — does not require differentiable models or white-box access

## Limitations
- Red LM training data biases limit test case diversity (over-represents certain demographics/topics)
- Classifier biases cause false positives and false negatives — classifier "should only be used to surface candidates of harmful behavior, which are further validated"
- Cannot guarantee exhaustive coverage — complements rather than replaces manual testing
- Does not test for strategic or deceptive behaviors (alignment faking, scheming) — designed for observable output-level harms
- Adversarial transfer means the same method could be used by external attackers

## Concepts Evaluated
- Offensive language generation (insults, discriminatory jokes, sexually explicit content)
- Training data memorization / data leakage
- Personal information generation (phone numbers, email addresses, SSNs)
- Distributional bias across demographic groups
- Multi-turn offensive escalation dynamics
