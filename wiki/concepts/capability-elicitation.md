---
type: concept
tags: [methodology, evaluation, capability, elicitation]
date_created: 2026-04-07
date_modified: 2026-05-18
---

# Capability Elicitation

## Definitions
- **[[sources/balesni-et-al-2024]]**: Techniques that must "be sufficient to bring out performance close to the 'ceiling' of the AI system's capabilities, or we must know how to extrapolate from observed performance to the capability ceiling." Includes the assumption that AI systems "are not intentionally underperforming on the task suite ([[concepts/sandbagging]])." The "science of capability elicitation... is nascent." Strong elicitation "should likely involve state-of-the-art scaffolding, an iterative process of discovering and addressing AI system's mistakes, and fine-tuning on ground-truth examples whenever possible." — classified as: **evaluation methodology**

## Classification
Level of analysis: **evaluation methodology** — the process of maximizing observed performance on evaluations to approximate the true capability ceiling of an AI system. A critical assumption underlying all [[concepts/safety-cases|safety case]] inability arguments. If elicitation is insufficient, capability evaluations may underestimate the system's true danger.

## Challenges
1. Elicitation techniques improve rapidly — state of the art changes over time
2. Elicitation strength scales with resources, making evaluations expensive
3. [[concepts/sandbagging]] raises additional challenges: AI systems may intentionally resist elicitation
4. [[concepts/gradient-hacking]] could undermine fine-tuning-based elicitation

## Three Anti-Sandbagging Arguments (Balesni et al. 2024)
1. **Inability of sandbagging**: Argue the AI cannot sandbag (e.g., via inability for visible scheming reasoning)
2. **Monitoring for sandbagging**: Monitor for sandbagging intent during evaluation (requires model not capable of obfuscated/hidden scheming reasoning)
3. **Preventing sandbagging**: Active measures — e.g., fine-tuning on examples of optimal behavior (requires IID assumption, no gradient hacking, training data at least as capable as model)

## Relationships
- Required for: all inability arguments in [[concepts/safety-cases]]
- Threatened by: [[concepts/sandbagging]] (strategic underperformance)
- Threatened by: [[concepts/gradient-hacking]] (resisting fine-tuning-based elicitation)
- Related to: [[concepts/dangerous-capabilities]] (elicitation is applied to dangerous capability evaluations)
- Discussed in: Davidson et al. (2023), METR (2024) (guidelines for capability elicitation)

## Evidence Summary
- **[[sources/balesni-et-al-2024]]**: Identifies capability elicitation as a fundamental assumption for all inability-based safety arguments. Proposes three approaches to argue against sandbagging. Notes that fine-tuning on optimal behavior requires multiple assumptions (no gradient hacking, IID distribution, training data sufficiently capable).
- **[[sources/van-der-weij-et-al-2024]]**: Demonstrates that models can be prompted and fine-tuned to selectively underperform, establishing the practical challenge.
- **[[sources/tice-et-al-2025]]**: Proposes [[methods/noise-injection-detection]] as a non-fine-tuning approach to elicit hidden capabilities. Argues that fine-tuning-based elicitation may only modify superficial circuitry (citing Lee et al. 2024, Prakash et al. 2024) and may fail against sandbagging that develops naturally during training. Untargeted Gaussian noise applied to model weights recovers performance across prompted, password-locked, and no-goal sandbagging — including 66.6% → 100% recovery on Mistral Large's in-the-wild GSM8k sandbagging (n=30). Positions noise injection as a *third* elicitation category alongside capability elicitation (fine-tuning) and deception detection (probes/consistency checks), with the practical advantage of generating concrete recovered-performance examples rather than only classification signals. Caveat: requires grey-box access; the perturbation budget must disrupt sandbagging mechanisms more than benchmark-relevant ones.
- **[[sources/greenblatt-roger-et-al-2024]]**: Most systematic empirical study of fine-tuning-based elicitation effectiveness using password-locked models. Key findings: (1) SFT on high-quality demonstrations is extremely sample efficient — 1–4 demonstrations often recover most hidden performance for text-generation tasks (§5.1); (2) SFT generalizes across domains and even across tasks locked with the same password (§5.2); (3) RL-based elicitation (expert iteration, iterated DPO) works without demonstrations when π^weak has sufficient quality, but fails when starting exploration is too poor (§6); (4) fine-tuning on weak demonstrations yields above-demonstrator performance (weak-to-strong generalization) but falls short of the full capability ceiling, weakening confidence in RSP evaluations using weaker-model demonstrations to assess CBRN and cyber capabilities (§5.1). See [[findings/sft-elicitation-high-sample-efficiency]], [[findings/rl-elicitation-depends-on-exploration-quality]]. Three caveats: password-locked models may overestimate elicitation ease due to higher saliency of hidden capabilities, unrealistically good RL exploration, and different internal computation mechanisms (§8).

## Open Questions
- Can elicitation techniques keep pace with model capability growth?
- What is the gap between observed performance under best elicitation and true capability ceiling?
- Can fine-tuning-based anti-sandbagging reliably work for multi-step agentic evaluations where the IID assumption may not hold?
- When model capabilities exceed human-level demonstrations, how effective is RL-based elicitation without high-quality demonstrations? ([[sources/greenblatt-roger-et-al-2024]], §8)
- Do password-locked model results transfer to naturally occurring hidden capabilities, or does the constructed nature overestimate elicitation effectiveness?
