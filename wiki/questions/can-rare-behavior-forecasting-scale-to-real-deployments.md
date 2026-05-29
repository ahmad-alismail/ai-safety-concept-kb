---
type: question
tags: [evaluation-methodology, deployment-safety, forecasting, open-question]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Rare Behavior Forecasting Scale to Real Deployments?

## Why It Matters
The Gumbel-tail method ([[sources/jones-et-al-2025]]) has been validated for up to three orders of magnitude extrapolation (e.g., forecasting 90,000 deployment queries from 900 evaluation queries). Real deployments involve billions of queries daily — a gap of six or more orders of magnitude from typical evaluation sets. If the scaling behavior breaks down at larger extrapolation distances, the method could give a false sense of security.

Additionally, the method assumes D_eval = D_deploy (no distribution shift), but real adversaries adaptively adjust queries and users deploy models in new settings. The method also tends to slightly overestimate risks, with the bias growing with extrapolation distance.

## What Sources Say
- **[[sources/jones-et-al-2025]]**: Authors argue the method "could seamlessly extrapolate to larger-scale deployments" since it "only requires slightly more extrapolation on the log-log plot," but acknowledge this is untested (Section 7). The method's sensitivity to the specific evaluation set and its reliance on only the ten highest elicitation probabilities are noted limitations. The discussion proposes extensions: adaptive extreme-value distribution fitting, uncertainty estimates, and real-time monitoring as a natural application (maximum elicitation probability as a continuous risk metric).

## Suggested Investigation
- Test the Gumbel-tail method on real deployment logs (with appropriate safety controls) to validate beyond three orders of magnitude
- Study the robustness of forecasts to distribution shifts between evaluation and real-world deployment queries
- Develop uncertainty quantification for the forecasts to enable principled release decisions
- Explore real-time monitoring applications where forecasts are refined with streaming deployment data
