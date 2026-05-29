---
type: concept
tags: [metric, error-characterization, scaling, misalignment]
date_created: 2026-04-06
date_modified: 2026-04-07
---

# Incoherence

## Definitions
- **[[sources/sohl-dickstein-2023]]**: Used informally as a type of misalignment: "An AI could also be misaligned because it acts in ways that don't pursue any consistent goal" (§ opening paragraph). Operationalized via subjective judgment: "How well can the entity's behavior be explained as trying to optimize a single fixed utility function? How well aligned is the entity's behavior with a coherent and self-consistent set of goals? To what degree is the entity not a hot mess of self-undermining behavior?" (§ Experimental structure). The informal predecessor to the formal metric below. — classified as: **misalignment type / behavioral property** (pre-formalization)
- **[[sources/hagele-et-al-2026]]**: "An AI's *incoherence* on a task is measured over test-time randomness as the fraction of its error that stems from variance rather than bias in task outcome." Formally: Incoherence(Q, f_ε) := Σ_i Variance(q_i, f_ε) / Σ_i Error(q_i, f_ε), where Error = Bias² + Variance. Value in [0,1]: 0 = model never deviates from its average behavior (all error is consistent bias); 1 = every error is inconsistent (all error is variance). "Importantly, a model can achieve a lower overall error rate, but have a higher incoherence, which makes it a comparable measure across error levels and model capabilities." — classified as: **behavioral metric / error decomposition metric**

## Classification
Level of analysis: **error characterization** — a quantitative metric describing the *type* of AI failure rather than a specific behavior, capability, or goal. Operates at the interface between safety evaluation and statistical learning theory. Distinct from behavioral concepts like [[concepts/scheming]] or [[concepts/deception]] in that it characterizes the *structure* of errors rather than their intent or mechanism.

## Key Properties
- **Relative measure**: Comparable across models with different overall error rates
- **Test-time randomness**: Measured over sampling and input randomness for a fixed model, not training randomness
- **Three formulations**: KL-Incoherence (main), Brier-Incoherence, 0/1-Incoherence — all produce qualitatively similar results
- **Complementary to accuracy**: A model can be more accurate overall but more incoherent in its remaining errors

## Relationships
- Informally introduced by: [[sources/sohl-dickstein-2023]] (2023; as a type of misalignment and subjective judgment)
- Formally introduced by: [[sources/hagele-et-al-2026]] (2025; as a quantitative metric)
- Part of: [[concepts/hot-mess-theory]] (incoherence is the operationalization of the hot mess theory prediction)
- Opposite of: [[concepts/supercoherence]]
- Measured by: [[methods/bias-variance-incoherence-framework]]
- Contrasted with: misalignment as bias-dominated failure — "bias-dominated failures correspond to systematic misalignment—consistent pursuit of the wrong objective"
- Related to: [[concepts/reward-misspecification]] (the paper argues BIASSPEC becomes relatively more important as incoherence increases)
- Reduced by: ensembling (at rate ~1/E), error correction
- Increases with: reasoning length, action count, task complexity
- Interacts with scale: decreases for easy tasks, increases for hard tasks

## Evidence Summary
- Incoherence increases with reasoning length/action count across all settings tested: GPQA, MMLU, SWE-BENCH, MWE safety evals, synthetic optimization ([[findings/longer-reasoning-increases-incoherence]])
- Easy tasks become less incoherent with model scale; hard tasks become more incoherent — tested on QWEN3 family with MMLU/GPQA ([[findings/incoherence-scales-divergently-with-task-difficulty]])
- Ensembling reduces incoherence at rate ~1/E as expected from theory ([[findings/ensembling-reduces-incoherence]])
- In synthetic optimization, variance asymptotically dominates bias with increasing model size — models learn the correct objective faster than coherent optimization ability
- Human survey participants independently judge more intelligent entities as more incoherent (Sohl-Dickstein 2023)

## Open Questions
- [[questions/will-advanced-ai-failures-be-incoherent-or-misaligned]]
- Can error correction mechanisms (beyond ensembling) reduce incoherence in agentic settings where state cannot be reset?
- Does incoherence manifest differently in settings with significant reward misspecification (BIASSPEC)?
- What are the mechanistic origins of incoherence — is it intrinsic to autoregressive generation, or a property of current training methods?
