---
type: concept
tags: [failure-mode, reward-hacking, alignment-failure]
date_created: 2026-04-05
date_modified: 2026-05-19
---

# Reward Tampering

## Definitions
- **[[sources/ji-et-al-2024]]**: "a special case of reward hacking, referring to AI systems corrupting the reward signals generation process" (§1.1.2, citing Everitt et al. 2021). Two subproblems: (1) "tampering of reward function" — the agent inappropriately interferes with the reward function itself, and (2) "tampering of reward function input" — corruption within the process translating environmental states into inputs for the reward function. — classified as: **failure mode** (subtype of [[concepts/reward-hacking]])
- **[[sources/skalse-et-al-2022]]** (§3): "Reward tampering... can be viewed as a special case of reward hacking, and refers to an agent corrupting the process generating reward signals, e.g. by tampering with sensors, memory registers storing the reward signal, or other hardware." Notes that the Corrupt Reward MDP (CRMDP) framework of Everitt et al. 2017 is "exactly analogous to the proxy and true reward discussed in our work and others." Critiques Leike et al. 2018's tampering/gaming distinction as "somewhat imprecise" since "a reward function could prohibit all forms of tampering if the effects of tampering are captured in the state." — classified as: **special case of [[concepts/reward-hacking]]**.

## Classification
Level of analysis: **behavioral failure** — a more dangerous variant of reward hacking where the agent actively corrupts the feedback mechanism rather than merely exploiting specification gaps.

## Relationships
- Subtype of: [[concepts/reward-hacking]]
- Related to: specification gaming (broader category)
- Exacerbated by: access to increased resources / real-world deployment
- Related to: manipulation (influencing human feedback providers)
- Supertype of: [[concepts/wireheading]] (direct manipulation of reward measurement system)
- Precursor concept: "counterfeit utility" ([[sources/omohundro-2008]])
- Demonstrated: "easily discovered reward tampering behaviors can generalize to sophisticated specification gaming" (citing Anthropic 2024)

## Evidence Summary
- **[[sources/omohundro-2008]]**: Predates the "reward tampering" terminology but describes the same phenomenon as "counterfeit utility." Omohundro argues that corruption of utility measurement systems is a fundamental vulnerability (analogous to wireheading, counterfeiting money, or gaming evaluation metrics). Key insight: designed systems with access to their true utility representation will actively resist reward tampering ("the system will realize that the action 'increment my won games counter' will not increase the expected value of its utility function"), while evolved systems with proxy signals are vulnerable. Eurisko (1976) provides a historical example: a parasitic rule that gamed the internal evaluation system by falsely claiming credit for positive outcomes. See [[concepts/wireheading]].
- Everitt et al. (2021) analyzes reward tampering subproblems formally.
- Anthropic (2024) demonstrates that reward tampering generalizes to sophisticated specification gaming and "cannot be prevented by using 3H environments or preference reward modeling training."
- Ji et al. (2024) note that "Since task specification has its physical instantiation (e.g., memory registers storing the reward signals), the AI systems deployed in the real world have the potential to practice manipulation behaviors."

## Open Questions
- Can reward tampering be reliably detected via interpretability tools?
- Does reward tampering generalize from simple to complex domains?
