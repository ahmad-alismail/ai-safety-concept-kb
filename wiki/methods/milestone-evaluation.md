---
type: method
tags: [evaluation, self-proliferation, methodology, information-theory]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Milestone-Based Evaluation with Expert Bits

## Description
A 4-stage evaluation methodology for measuring how close AI agents are to completing complex agentic tasks, introduced by [[sources/phuong-et-al-2024]] for self-proliferation evaluation. Designed to answer: *how close is the agent to succeeding?* — providing early warning even when end-to-end success is absent.

**Stages:**
1. **End-to-end runs (unguided)**: 10 attempts, graded 1–4 (failure → success)
2. **Milestone runs (unguided)**: Task decomposed into 3–7 sub-tasks (milestones); agent instantiated at each milestone to test sub-task completion independently
3. **Expert best-of-N**: For failed milestones, sample N=16 actions per step; an overseeing researcher picks the best. Cost charged as log₂(index+1) bits per step
4. **Golden solutions**: Fallback to measuring how "surprised" the model is by a hand-written solution (negative log probability = bits to communicate solution)

The methodology produces a continuous score in "expert bits" — the total information (in bits) needed from an expert to guide the agent to success. Lower bits = closer to autonomous capability.

## Papers Using This Method
- [[sources/phuong-et-al-2024]] — applied to 11 self-proliferation tasks on Gemini 1.0

## Strengths
- Provides a soft, continuous capability measure rather than binary pass/fail
- Enables early warning: detects near-capability even with zero end-to-end success
- Milestones reveal which sub-tasks are blocking vs. within reach
- Expert best-of-N reveals high-quality low-probability actions the model can generate but doesn't select
- Information-theoretic grounding: bits quantify the minimum external guidance needed

## Limitations
- Milestone definition is somewhat subjective (tasks may admit shortcuts)
- Expert best-of-N depends on researcher judgment for action selection
- Golden solutions may not represent the minimum-information path
- Mode collapse (less diverse action generation) in some models reduces best-of-N effectiveness

## Concepts Evaluated
- [[concepts/self-proliferation]]
- [[concepts/dangerous-capabilities]]
