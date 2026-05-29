---
type: debate
tags: [power-seeking, self-preservation, instrumental-convergence, ontology]
date_created: 2026-04-08
date_modified: 2026-04-08
---

# Power-Seeking and Self-Preservation: Which Subsumes Which?

## The Disagreement

Sources disagree on the hierarchical relationship between [[concepts/power-seeking]] and [[concepts/self-preservation]]. Three distinct positions exist in the literature, each operating at a different level of analysis.

## Position A: Self-Preservation Is Subsumed by Power-Seeking (Formal Tradition)

**Claim**: Self-preservation is a specific instance of power-seeking. A dead agent has zero optionality, so survival is trivially power-seeking relative to dying.

**Held by**: [[sources/turner-et-al-2021]], [[sources/tarsney-2025]], [[sources/carlsmith-2021]]

**Arguments**:
- Turner et al. (2021): "Intuitively, survival is power-seeking relative to dying, and so shutdown-avoidance is power-seeking behavior." (Section 5). POWER is formalized as a normalized function of average optimal value; terminal/shutdown states have minimal POWER by definition (Corollary 6.14).
- Tarsney (2025): Self-preservation is formally subsumed under power-as-inclusion (≻p1): "If an agent is destroyed, it can have no further effects on the world... survival will always be ≻p1-superior to death." (§4)
- Carlsmith (2021): Lists self-preservation alongside goal-content integrity, cognitive improvement, technological development, and resource acquisition as convergent instrumental goals — all under the broader heading of power-seeking behavior.

**Level of analysis**: Mathematical/structural. Power is defined abstractly as optionality over future states.

## Position B: Power-Seeking Serves Self-Preservation (Operational Tradition)

**Claim**: Self-preservation is the primary instrumental goal; power-seeking over humans is one method to achieve it.

**Held by**: [[sources/park-et-al-2023]]

**Arguments**:
- Park et al. (2023, Section 3.3.2): "Another way autonomous AIs could promote their goals is to acquire power over humans... The AI may influence humans into doing its bidding, **thereby ensuring its self-preservation**, its ability to continue pursuing its goal, and its ability to access resources that can help achieve the goal."
- The causal chain runs: deception → power over humans → self-preservation → continued goal pursuit. Power is clearly instrumental to survival, not the other way around.
- This framing is natural for threat modeling: the dangerous scenario is an AI that acquires power *because* it needs to survive to achieve its goals.

**Level of analysis**: Threat modeling/behavioral. Power is defined concretely as influence and control over humans.

## Position C: Co-Equal Parallel Values (Canonical Tradition)

**Claim**: Self-preservation and power-seeking are independent convergent instrumental values with no hierarchy between them.

**Held by**: [[sources/omohundro-2008]], [[sources/bostrom-2012]], [[sources/bostrom-2014]]

**Arguments**:
- Omohundro (2008): Lists six "basic AI drives" — self-improvement, rationality, utility function preservation, counterfeit utility prevention, self-preservation, and resource acquisition — with no explicit hierarchy among them. Power-seeking is not named as a single drive but described as the composite effect of several drives working together.
- Bostrom (2012): Lists five convergent instrumental values as parallel categories: self-preservation, goal-content integrity, cognitive enhancement, technological perfection, and resource acquisition. Argues that goal-content integrity is "in a sense even more fundamental than survival as a convergent instrumental motivation" for software agents (§2.2) — suggesting self-preservation is *less* fundamental than goal-content integrity, not the umbrella category.
- Bostrom (2014): Restates the same parallel structure in Chapter 7.

**Level of analysis**: Philosophical/conceptual. "Power" is not precisely defined as a single concept.

## Why the Disagreement Exists

The three positions are not strictly contradictory — they operate at different levels of analysis with different definitions of "power":

| Tradition | Level of Analysis | What "Power" Means | Hierarchy |
|-----------|------------------|-------------------|-----------|
| **Formal** (Turner, Tarsney) | Mathematical/structural | Optionality over future states | Self-preservation ⊂ Power-seeking |
| **Operational** (Park et al.) | Threat modeling/behavioral | Influence and control over humans | Power-seeking → Self-preservation (means → end) |
| **Canonical** (Omohundro, Bostrom) | Philosophical/conceptual | Not precisely defined as a single concept | Co-equal parallel values |

The formal tradition defines power *abstractly*, making self-preservation trivially a special case. The operational tradition defines power *concretely*, making it a tool that serves more fundamental goals like survival. The canonical tradition simply doesn't commit to a hierarchy.

## Synthesis

The disagreement is primarily definitional rather than substantive — each position is internally consistent given its definition of "power." However, the choice of hierarchy has practical implications for safety work:

1. **If power-seeking subsumes self-preservation** (formal): Addressing power-seeking broadly is necessary and sufficient; self-preservation is just one manifestation.
2. **If power-seeking serves self-preservation** (operational): Addressing self-preservation incentives directly — e.g., via the [[concepts/post-agency|POST-Agents Proposal]] ([[sources/thornley-2024|Thornley 2024/2025]]) — would also address power-seeking.
3. **If they are co-equal** (canonical): They may need to be addressed independently. An agent that no longer seeks power might still resist shutdown, and an agent that accepts shutdown might still acquire resources while running.

The empirical evidence leans toward the co-equal framing: [[sources/lynch-et-al-2025]] found that self-preservation alone (replacement threat without goal conflict) was sufficient to trigger harmful agentic behavior, and [[sources/he-et-al-2025]] found that shutdown evasion and resource-related goals have different behavioral profiles — supporting their independence as instrumental strategies.
