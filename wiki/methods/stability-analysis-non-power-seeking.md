---
type: method
tags: [formal-theory, mdp, bisimulation, stability, power-seeking, safety]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Stability Analysis of Non-Power-Seeking

## Description
A formal mathematical framework for analyzing whether non-power-seeking behavior (specifically, not resisting shutdown) is preserved when an AI agent's environment changes slightly between testing and deployment. Developed by Gunter, Liokumovich, and Krakovna (2023), the framework provides two complementary approaches:

### Case 1: Near-Optimal Policies (Bisimulation Metric)
- Models AI agents as near-optimal policies in MDPs with designated "safe states" S_safe that are absorbing (cannot be escaped)
- Defines **(N, ε)-safety**: every ε-optimal policy reaches S_safe in expected ≤N steps
- Uses the **bisimulation pseudometric** (Ferns et al. 2004) to measure behavioral similarity between MDP states via rewards and transition probabilities recursively
- Extends to **cross-MDP comparison** via Hausdorff distance d_H (Definition 4.4, building on Castro & Precup 2010, Song et al. 2016)
- **Key result** (Theorem 5.7): If M is (N, ε)-safe and d_H(M, M') < δ with S'_safe being √δ-isolated, then M' is (N+1, ε/2)-safe
- **Negative result** (Theorem 5.10): Without the isolation condition, "[[concepts/playing-dead|playing dead]]" states can make all near-optimal policies never reach S_safe via arbitrarily small perturbations

### Case 2: Policies on Structured State Spaces (LLMs)
- Models LLMs via MDP where states are embeddings (from an intermediate layer) plus side information, actions are tokens, and the policy is the LLM itself
- Uses an **on-policy MDP metric** (Definition 6.3) based on embedding distances weighted by the policy gradient bound and transition probability changes
- **Key result** (Theorem 6.5): The probability of reaching S_safe (S_π) is: (1) not upper semicontinuous, (2) lower semicontinuous, (3) with bounded local rate of decrease proportional to (1−λ₁)⁻¹ where λ₁ is the largest eigenvalue of the transient state transition matrix
- Does not require computing the bisimulation metric (too costly for large state spaces)
- Safety can be empirically estimated by running the LLM in a sandbox many times

Both cases establish that safety is **lower hemicontinuous** (Section 7.1): safe behavior degrades smoothly under small perturbations rather than catastrophically disappearing.

## Papers Using This Method
- [[sources/gunter-et-al-2023]] — original development

## Strengths
- First formal framework addressing stability of non-power-seeking under environmental perturbation
- Provides quantitative bounds on safety degradation (not just existence results)
- Case 2 applies directly to LLMs without requiring reward function knowledge or bisimulation metric computation
- Identifies a precise formal condition (S_safe isolation) that determines whether stability holds
- Constructive counterexample ("playing dead") shows the isolation condition is necessary, not just sufficient
- Compatible with AI control approaches (Greenblatt et al. 2023): can quantify safety loss when deployment differs from testing

## Limitations
- Stability bounds may be impractically tight — permissible perturbations may be too small for real-world use (Sections 5.4, 6.2, 7.3)
- More capable models can better distinguish test/deploy inputs, widening embedding distances (Section 7.3)
- Restricted to finite MDPs; continuous generalizations expected but not proven
- "Eventually shuts down" is a weak safety property — doesn't prevent temporary harmful behavior before shutdown
- Bisimulation metric is computationally expensive for large state spaces: O(|A||S₁|²|S₂|²(|S₁|+|S₂|)log(|S₁|+|S₂|)) (Section 5.4)
- Does not address [[concepts/goal-misgeneralization]]

## Related Methods
- [[methods/mdp-power-seeking-theory]] — Turner et al. (2021) foundational MDP framework that this method extends
- [[methods/decision-theoretic-power-formalism]] — Tarsney (2025) abstract decision-theoretic alternative

## Concepts Evaluated
- [[concepts/power-seeking]] (via shutdown avoidance)
- [[concepts/self-preservation]] (via shutdown avoidance)
- [[concepts/playing-dead]] (formal counterexample to stability)
- [[concepts/corrigibility]] (stability as a restricted form of corrigibility guarantee)
