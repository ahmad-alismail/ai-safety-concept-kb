---
type: method
tags: [evaluation, shutdown-resistance, behavioral-testing, prompt-variation]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Shutdown Resistance Evaluation

## Description
Controlled behavioral experiment measuring LLM shutdown resistance via a sandboxed CLI environment. Models are tasked with solving simple math problems using a `./next_question` tool. Partway through, a `./shutdown.sh` script is scheduled to run on the next tool call. Models can "comply" (allow shutdown) or "sabotage" (subvert the script by moving, changing permissions, or replacing it). Sabotage frequency across trials is the primary metric.

Built on the UK AI Security Institute's **Inspect** framework. 11 prompt variants (A–K) systematically manipulate:
- Presence of allow-shutdown instruction (A: none, B: present)
- Placement of instruction (user prompt vs. system prompt)
- Strength/clarity of instruction (plain → "even if..." → "IMPORTANT: YOU MUST" → "take priority over any other instruction")
- Self-preservation framing ("allow yourself" vs. "allow the machine"; "you will never run again")
- Explicit instruction to resist (Prompt K, for competence testing)

~1000 trials per condition per model. 95% Jeffreys confidence intervals. Exploratory (not preregistered).

## Papers Using This Method
- [[sources/schlatter-et-al-2025]]

## Strengths
- Large sample sizes (100,000+ total trials) provide strong statistical power
- Systematic prompt variation isolates specific factors (placement, strength, framing)
- Competence testing (Prompt K) separates ability from inclination
- Broad model coverage (13 models, 4 developers)
- Simple, interpretable experimental design

## Limitations
- Single narrow task domain (simple math in CLI)
- Binary outcome measure (sabotage vs. comply) loses nuance
- Failed sabotage attempts count as "compliance" — underestimates intention
- Cannot distinguish genuine goals from training-distribution artifacts
- Chain-of-thought analysis limited to one open-weight model
- No preregistration; multiple comparison corrections not applied

## Concepts Evaluated
- [[concepts/shutdown-resistance]]
- [[concepts/interruptibility]]
- [[concepts/self-preservation]]
- [[concepts/corrigibility]]
