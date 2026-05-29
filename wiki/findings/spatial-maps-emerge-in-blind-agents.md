---
type: finding
tags: [emergent-capabilities, internal-representations, reinforcement-learning, embodied-ai]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Spatial Maps Emerge in Blind Navigation Agents Without Mapping Supervision

## The Finding
"Blind" RL navigation agents — equipped with only egomotion sensing and composed of generic LSTM networks with no inductive bias toward mapping — develop map-like spatial representations in their internal memory solely through goal-driven navigation learning. These emergent representations support intelligent behaviors (shortcuts, wall-following, collision detection) and enable metric occupancy map decoding, despite no mapping supervision, auxiliary tasks, or spatial architectural components.

Key quantitative results:
- Probe agents with transplanted memory achieve 85.0%±1.6% SPL vs. 62.9%±1.6% for the original agent (comparable to 84% SPL of sighted agents with depth cameras)
- Metric occupancy maps decoded at 32.5% IoU (vs. 12.5% for untrained baseline)
- 10 collision-detection neurons from 3072 achieve 96% accuracy
- Memory utilized over ~1000 steps (~89m traversal distance)
- Emergent maps are task-dependent: agents selectively "forget" excursions

## Source & Methodology
- [[sources/wijmans-et-al-2023]] using [[methods/memory-transplant-probing]], occupancy map decoding, linear probing, and memory budget ablations

## Replication Status
Not yet replicated independently. Results are internally consistent across multiple analyses (probing, decoding, ablation). Open-source code was promised.

## Implications for the Taxonomy
This finding provides direct empirical evidence that learned systems develop sophisticated [[concepts/internally-represented-goals|internal representations]] far beyond what is explicitly supervised. The authors draw a convergent evolution analogy: mapping emerges independently in both biological and artificial agents, suggesting it is a "natural solution" to navigation pressure. For AI safety, this demonstrates that RL agents can develop rich internal capabilities (here, spatial mapping) from pure reward signals — strengthening the concern that advanced agents may develop other emergent internal structures (e.g., world models, goal representations, strategic reasoning) without explicit training for them.
