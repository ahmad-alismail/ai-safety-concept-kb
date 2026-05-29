---
type: finding
tags: [safety-case, scheming, evaluation, governance]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Safety Case Assumptions Against Scheming Remain Unsatisfied

## The Finding
Many of the assumptions required to make evaluations-based safety arguments against AI scheming have not been confidently satisfied to date. Each of the three core safety arguments (Scheming Inability, Harm Inability, Harm Control) and two supporting arguments (Alignment via Evaluation, Alignment via Training) requires satisfying multiple assumptions that represent open research problems.

## Source & Methodology
- [[sources/balesni-et-al-2024]] using theoretical analysis and assumption enumeration

Key unsatisfied assumptions include:
- **Capability set completeness**: The space of potential harmful capabilities is vast and may include emergent or unforeseen capabilities
- **Sufficient elicitation**: The science of capability elicitation is nascent, especially anti-sandbagging
- **Red team superiority**: No strategy to reliably demonstrate red team is more capable than AI at subverting controls
- **Alignment evaluation coverage**: "Rare failure" strategies can defeat alignment evaluations
- **Training science**: Very few examples of "alignment via training" arguments exist

## Replication Status
[not yet replicated — theoretical assessment, not empirical finding]

## Implications for the Taxonomy
This finding underscores that the safety case approach to scheming requires progress across multiple independent research fronts. No single argument type is currently sufficient. The finding positions safety cases as a *research agenda* rather than a currently deployable methodology, and motivates investment in evaluation science, interpretability, and control measure development.
