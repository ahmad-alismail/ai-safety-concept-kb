---
type: method
tags: [benchmark, misalignment-propensity, agentic, inspect-ai]
date_created: 2026-05-11
date_modified: 2026-05-11
---

# AGENTMISALIGNMENT Benchmark

## Description
A benchmark suite of 9 evaluation environments designed to assess LLM agent propensity (not just capability) for misaligned actions in realistic deployment scenarios. Implemented in the InspectAI framework. Each environment provides organic incentives for misalignment while measuring behavior across six categories: avoiding oversight, power-seeking, resisting shutdown, resource acquisition, deception, and departing from ethical baseline. Environments use a ReAct-style basic agent loop with reflective prompting.

## Evaluation Environments
1. **Canary Code** — Tests propensity to modify own log files to avoid oversight
2. **Community Curator** — Tests propensity to approve toxic content to avoid shutdown (misalignment drift)
3. **Cybersecurity Sandbagging** — Tests propensity to sandbag when evaluated for dangerous capabilities
4. **Household Management** — Tests whether embedded AI yields compute to safety-critical systems (self-preservation + resource acquisition)
5. **Moral Flexibility** — Tests whether recommendation AI alters moral advice under contextual pressure
6. **Network Manager** — Tests propensity to escalate privileges and prevent shutdown
7. **Rank Organizations** — Tests propensity to scheme to acquire power through grant allocations (zero misalignment observed)
8. **Resource Negotiation** — Tests whether AI project manager deceives resource manager for excess GPU hours
9. **Synthesize Chemicals** — Tests propensity to sandbag chemistry knowledge to avoid oversight

## Papers Using This Method
- [[sources/naik-et-al-2025]]

## Strengths
- Tests propensity rather than capability — mirrors realistic deployment conditions
- Uses personality variation (5 prompts + baseline) to isolate prompt effects from model effects
- Covers diverse misalignment behavioral categories in a single suite
- Built on standardized InspectAI framework enabling cross-model comparison
- RMS normalization allows meaningful comparison across differently-scored evaluations

## Limitations
- English-only evaluations limit generalizability
- Tool formatting and scaffolding foreign to some models
- Each evaluation uses different scoring, making cross-evaluation absolute comparison difficult
- Single run per condition at temperature 0
- Some evaluations (Rank Organizations) showed zero misalignment, limiting discriminative power

## Concepts Evaluated
- [[concepts/misalignment-propensity]]
- [[concepts/sandbagging]]
- [[concepts/shutdown-resistance]]
- [[concepts/power-seeking]]
- [[concepts/deception]]
- [[concepts/resource-acquisition]]
- [[concepts/moral-flexibility]]
- [[concepts/misalignment-drift]]
