---
type: concept
tags: [safety-solution, decision-theory, shutdownability, incomplete-preferences]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# POST-Agency (Preferences Only Between Same-Length Trajectories)

## Definitions
- **[[sources/thornley-2026]]**: "**Preferences Only Between Same-Length Trajectories (POST)**: (1) The agent has a preference between many pairs of same-length trajectories. (2) The agent lacks a preference between every pair of different-length trajectories." The POST-Agents Proposal is "that we keep agents from resisting shutdown by training them to satisfy POST." (§§1–2) — classified as: **trainable behavioral constraint / safety solution**

## Classification
Level of analysis: **behavioral constraint / alignment strategy** — a formal condition on agent preferences designed to ensure shutdownability. Unlike [[concepts/alignment]] or corrigible alignment, POST does not require any particular preference relation over same-length trajectories — only a lack of preference between different-length trajectories. This simplicity is its key advantage: POST is easier to instil than Full Alignment or Reliable Aversion.

## Core Argument Chain
The paper derives shutdownability and usefulness from POST through a chain of formal implications:

1. **POST** (trainable) + Negative Dominance, Acyclicity, Non-Arbitrariness (expected of competent agents) → **POSL** (Preferences Only Between Same-Length Lotteries)
2. **POSL** + **ILPACS** (If Lack of Preference, Against Costly Shifts; expected of competent agents) → **Neutrality**: the agent never pays costs to shift probability mass between different trajectory-lengths
3. **Neutrality** + **Ramsey Yardstick** (trainable calibration) + Transitivity + IBIL (expected of competent agents) → **Neutrality+**: the agent maximizes expected utility, ignoring the probability distribution over trajectory-lengths
4. **Neutrality** + **Maximality** + **ReSIC** (Resisting Shutdown is Costly; true in almost all situations) → **Shutdownability**: the agent never resists shutdown

Neutral+ agents behave like expected utility maximizers absolutely certain they cannot affect the probability of shutdown at each moment — roughly as a human would act if certain they couldn't affect the probability of death.

## Key Properties
- **Trainable**: POST can be instilled using POMDPs where agents get lower reward for repeatedly choosing same-length trajectories and cannot observe previous trajectory lengths. Validated in simple RL agents (Thornley et al. 2025).
- **Maintainable**: Money pumps for incomplete preferences are thwarted by resolute choice (making a plan and sticking to it).
- **Permissive**: POST allows almost any preference relation over same-length trajectories, making it compatible with useful agent behavior.
- **Third line of defence**: POST is intended to supplement (not replace) Full Alignment and Reliable Aversion as a fallback if those fail.

## Known Limitations
- **Recklessness**: Neutral agents pursue utility conditional on a trajectory-length even if this makes early shutdown likely. Mitigated by shutdown-and-retrain iteration.
- **Managing the news**: Neutral agents may conditionally precommit to resist/seek shutdown based on information. Argued to be minor because precommitment is costly and neutral agents precommit overtly.
- **Accidental resistance**: When ReSIC is false, agents may accidentally resist shutdown (e.g., building a factory on the shutdown button). Mitigated by multiple independent shutdown mechanisms.
- **Evidence of power**: Agents may take surviving-after-resistance as evidence of their own power, making ReSIC false. Argued to be minor because agents would devote minimal resources to resistance.

## Relationships
- Addresses: [[concepts/shutdown-problem]] (constructive solution to the decision-theoretic impossibility results)
- Component of: [[concepts/corrigibility]] (POST ensures shutdownability, one component of corrigibility)
- Enables: [[concepts/interruptibility]] (POST-agents accept shutdown)
- Prevents: [[concepts/shutdown-resistance]] (POST-agents don't resist shutdown when doing so is costly)
- Built on: incomplete preferences (violating the Completeness axiom)
- Builds on: [[sources/thornley-2024]] (impossibility results motivating the POST approach)
- Alternative to: Full Alignment, Reliable Aversion (simpler, doesn't depend on complex human preferences)
- Distinguished from: Armstrong (2010, 2015) and Holtman (2020) utility indifference proposals (POST-agents can't affect shutdown probability; their agents won't be shut down)
- Methodology: [[methods/post-agents-framework]]

## Evidence Summary
- **[[sources/thornley-2026]]**: Full formal development. Proves POST → POSL → Neutrality → Neutrality+ → Shutdownability + Usefulness. See [[findings/post-agents-shutdownable-and-useful]].
- **Thornley et al. (2025)** ("Towards Shutdownable Agents via Stochastic Choice," TAIS 2025): Empirical validation of POST training method in simple RL agents — agents trained to choose stochastically between different-length trajectories remain shutdownable and useful.

## Open Questions
- Can POST be trained into frontier-scale language model agents, not just simple RL agents?
- Does the recklessness problem scale — will neutral agents make dangerously reckless choices in high-stakes real-world deployments?
- Can POST be combined with other safety approaches (myopia, monitoring, constitutional AI) for defense in depth?
- Is the behavioral notion of preference sufficient for safety in complex agentic environments?
