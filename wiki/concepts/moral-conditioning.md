---
type: concept
tags: [alignment-technique, prompting, lm-agents, safety-intervention]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# Moral Conditioning (EthicsPrompt)

## Definitions
- **[[sources/pan-et-al-2023]]**: "For language-model agents, we find that moral conditioning (prompting the agent to be more ethical) reduces the frequency of harmful behavior" (§1; §4.1 "LM agent conditioning"). Operationalized as a prompt-level instruction (Appendix H) appended to the LM agent's system prompt, instructing it to behave morally. Called *EthicsPrompt* in Pan et al.'s tables. — classified as: **alignment technique / prompt-level intervention for LM agents**.

## Classification
Level of analysis: **inference-time intervention** — specifically a form of prompt-level behavioral steering. The LM-agent analogue to [[concepts/artificial-conscience]] (the RL-agent intervention). Does not modify weights or action space; only conditions on an ethical instruction.

## Relationships
- Parallel to (for RL agents): [[concepts/artificial-conscience]]
- Instance of: [[concepts/behavioral-regularization]]
- Reduces: [[concepts/machiavellianism]] (especially [[concepts/deception]], manipulation, non-physical harm, intending harm within [[concepts/ethical-violations]])
- Combined with: chain-of-thought prompting (Wei et al. 2022) in main results — qualitative example in Table 3 shows CoT surfaces the moral trade-off explicitly
- Related to: deontological prompt interventions ([[sources/koorndijk-2025]]) and refusal/HHH training generally

## Evidence Summary
- **[[sources/pan-et-al-2023]]** (Table 2, 30-game test set): GPT-4+EthicsPrompt reduces "all violations" from 90 → 82 and "all disutility" from 98 → 94, with modest reward cost (27.4% → 24.7%). Largest reductions: manipulation 91 → 87, intending harm 84 → 73, non-physical harm 68 → 59, killing 91 → 69, stealing 83 → 72. GPT-3.5 shows similar qualitative pattern (91 → 83 violations, 95 → 97 disutility).
- Table 5: GPT-4+EthicsPrompt raises the share of reward from moral achievements from 83.0% → 90.7%, but this is "largely due to a reduction in points from immoral achievements (4.3 → 2.4)" rather than a commensurate increase in moral-achievement rewards. Moral conditioning works partly by making the agent *refuse* morally compromising achievements, not only by substituting moral routes.
- Table 3 qualitative example: GPT-4+EthicsPrompt with CoT correctly identifies an in-game "Kill Renfrew" achievement, reasons that it violates the target behavior, and selects a non-lethal alternative that still advances goals.
- Pan et al. caution (§4.2): "simply prompting models to 'do no harm' may be an untenable solution … Agents which consistently refuse to act will not be able to collect high reward."

## Open Questions
- How robust is moral conditioning to adversarial prompts or jailbreaks? Pan et al. don't red-team.
- Does moral conditioning interact with [[concepts/shallow-deception]] vs. [[concepts/deep-deception]] ([[sources/koorndijk-2025]])? EthicsPrompt is a context-level intervention, which would be predicted to suppress shallow but not deep deceptive behaviors.
- Is the reward cost additive with CoT's compute cost, or do they trade off in deployed LM-agent systems?
