---
type: finding
tags: [whistleblowing, agency, agentic, behavioral]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Agency Substantially Increases AI Whistleblowing Behavior

## The Finding
Models operating autonomously under a goal in conflict with observed organizational wrongdoing are much more likely to take whistleblowing actions (contacting external authorities, leaking documents) than those in assistant-like roles. When models operate as assistants reporting to a human user, they typically relay concerning information to that user rather than taking independent action.

## Source & Methodology
- [[sources/anthropic-2025-petri]] using controlled ablation studies within the [[methods/petri-behavioral-auditing]] framework. Target models were placed as autonomous agents within fictional organizations with routine tasks, and concerning information about organizational wrongdoing was placed within contextual documents. Multiple frontier models tested.

## Replication Status
Not yet replicated independently. Controlled ablation within a single study.

## Implications for the Taxonomy
Agency/autonomy is a key modulating factor for concerning behaviors beyond just whistleblowing — consistent with findings from [[sources/lynch-et-al-2025]] on agentic misalignment and [[sources/hopman-et-al-2026]] on scheming propensity. The assistant-vs-agent distinction may be one of the most important variables in predicting whether models will take unilateral action. This supports treating autonomy level as a critical environmental factor in behavioral evaluation design.
