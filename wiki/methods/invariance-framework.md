---
type: method
tags: [formal-framework, reward-learning, invariance, lattice]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Invariance Framework for Reward Learning

## Description
A formal framework introduced by [[sources/skalse-et-al-2023]] for analyzing the **partial identifiability** of reward functions across different reward learning data sources and downstream applications. The framework models data sources and applications as functions from reward space to output spaces, then characterizes their **invariance partitions** — equivalence classes of reward functions that produce identical outputs.

The core insight: ambiguity in reward learning can be precisely described by the set of **reward transformations** that preserve the output of a given function. These invariances are organized into a **lattice** via the partition refinement relation, enabling direct comparison of data sources and applications.

## Key Components

### Invariance Partition (Definition 2.1)
Given a function $f: \mathcal{R} \to X$, the invariance partition groups together all reward functions that produce the same output: $R_1 \sim R_2$ iff $f(R_1) = f(R_2)$.

### Reward Transformations
- **Potential shaping** (Definition 2.5): $R_2(s,a,s') = R_1(s,a,s') + \gamma \cdot \Phi(s') - \Phi(s)$
- **S'-redistribution** (Definition 2.6): preserves $\mathbb{E}_{S' \sim \tau(s,a)}[R(s,a,S')]$
- **Zero-preserving monotonic transformation (ZPMT)** (Definition 2.7): preserves reward ordering and zero values
- **Optimality-preserving transformation** (Definition 2.8): preserves the set of optimal actions
- **Masking** (Definition 2.9): allows reward to vary freely for a specified transition set

### The Reward Learning Lattice
Data sources and applications are placed in a partial order: $f \preceq g$ means $f$ contains no more ambiguity than $g$ (equivalently, $g$ tolerates the ambiguity of $f$). This lattice structure (Figure 3 in the paper) enables at-a-glance comparison of all characterized objects.

## Papers Using This Method
- [[sources/skalse-et-al-2023]]

## Strengths
- Provides **exact** characterizations (not just bounds) for most data sources
- Unifies ambiguity analysis across IRL, preference learning, and other reward learning paradigms
- The lattice structure makes it easy to determine whether a given data source is appropriate for a given application
- Reveals non-obvious results (e.g., noisy comparisons > noiseless comparisons)
- Framework is composable: combining data sources can be analyzed via lattice operations (Theorem 4.1)

## Limitations
- Assumes **infinite data** — practical finite-sample behavior is not characterized
- Assumes **correct model specification** — real-world data rarely follows assumed generating processes exactly
- Restricted to **finite, observable, infinite-horizon MDPs** — does not directly apply to the function-approximation regime or LLMs
- Characterizes worst-case ambiguity, not typical-case ambiguity
- The lattice ordering is a worst-case guarantee over all MDPs (within the assumed class)

## Concepts Evaluated
- [[concepts/partial-identifiability]]
- [[concepts/reward-learning]]
- [[concepts/rlhf]] (trajectory preferences as a data source)
