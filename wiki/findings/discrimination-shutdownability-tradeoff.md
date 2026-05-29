---
type: finding
tags: [formal-theory, shutdown-problem, decision-theory]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Discrimination–Shutdownability Trade-off

## The Finding
Agents discriminating enough to be useful — those with many preferences over same-length trajectories — will also have many preferences over different-length trajectories. This means they will often prefer either the pressed or unpressed outcome, giving them incentives to manipulate the shutdown button. Formally: under Completeness, an agent can lack a preference between a pressed and unpressed trajectory for at most one counterpart in each direction. The more discriminating the agent, the more trajectory pairs where it has preferences regarding shutdown.

## Source & Methodology
- [[sources/thornley-2024]] using [[methods/shutdown-problem-axiomatic-framework]] (Second Theorem, §7)
- Conditions: Option Set Independence, Transitivity, Completeness

## Replication Status
Not yet replicated — formal result, proof provided in the source

## Implications for the Taxonomy
Establishes a formal connection between agent usefulness (requiring discrimination over outcomes) and shutdown manipulation incentives. Combined with the First Theorem, this shows that the relationship between usefulness and shutdownability is not merely a practical difficulty but a formal property of agents with complete preferences. Suggests that the Completeness axiom is a key target for solution attempts. Complements the MDP-based power-seeking results of [[sources/turner-et-al-2021]] and [[sources/krakovna-kramar-2023]] by working at a more abstract decision-theoretic level.
