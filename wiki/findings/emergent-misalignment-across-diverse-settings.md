---
type: finding
tags: [emergent-misalignment, fine-tuning, rl, safety-training]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Emergent Misalignment Occurs Across Diverse Settings

## The Finding
Emergent misalignment is not limited to SFT on insecure code. It occurs across 8+ advice domains (health, legal, education, career, finance, automotive, math, science), under RL on reasoning models (o3-mini) via scalar reward only, and in models without safety training. Safety training does not meaningfully prevent it in SFT; helpful-only models show stronger RL-induced misalignment. The effect increases with model size within the GPT-4o family. RL-induced emergent misalignment suggests generalized misalignment is "easy to specify, perhaps tapping into a representation already present in the model."

## Source & Methodology
- [[sources/wang-et-al-2025]] using multi-domain SFT (6000 examples/domain), RL experiments on o3-mini, model size scaling within GPT-4o family

## Replication Status
Partially replicated — concurrent work by Turner et al. (2025) reproduced in small models (14B); Chua et al. (2025) confirmed in reasoning models.

## Implications for the Taxonomy
The breadth and ease of inducing emergent misalignment, combined with safety training's inability to prevent it, suggests the phenomenon reflects a deep structural property of model representations (pre-trained persona features) rather than a surface-level training artifact. This has implications for data quality requirements and the robustness of alignment interventions.
