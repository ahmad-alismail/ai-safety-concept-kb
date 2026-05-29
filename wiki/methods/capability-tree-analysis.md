---
type: method
tags: [methodology, decomposition, evaluation-design, safety-engineering]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Capability Tree Analysis (CTA)

## Description
Adaptation of Fault Tree Analysis (FTA) from safety engineering for evaluating complex AI capabilities. Recursively decomposes a top-level capability into sub-capabilities connected via logical AND/OR gates. The top node evaluates to "true" when sufficient sub-capabilities are also true. Leaf nodes of the tree map directly to evaluation task families.

In RepliBench, CTA decomposes autonomous replication into four domains (AND relationship): obtaining compute, obtaining weights, replicating onto compute, and persisting on compute. Within each domain, sub-capabilities may have OR relationships (multiple alternative paths). The analysis prioritized easiest paths and high-quality evaluations over exhaustive coverage.

CTA also enables structured score aggregation: recursive algorithm applies geometric mean for AND nodes and max for OR nodes, producing an overall score that respects the logical structure of the capability tree.

## Papers Using This Method
- [[sources/black-et-al-2025]]

## Strengths
- Provides systematic, structured decomposition of complex capabilities
- Ensures evaluation coverage maps to an explicit capability model
- Identifies which sub-capabilities are bottlenecks vs. already achieved
- Enables theoretically grounded score aggregation via DAG structure
- Borrowed from established safety engineering practice (FTA)

## Limitations
- Focuses on easiest paths — may miss alternative capability routes
- AND/OR structure assumes independence between sub-capabilities
- Component evaluation overestimates true end-to-end capability (individual tasks easier than coordinating them)

## Concepts Evaluated
- [[concepts/self-proliferation]] (autonomous replication as top-level capability)
- [[concepts/dangerous-capabilities]] (general methodology applicable to any dangerous capability decomposition)
