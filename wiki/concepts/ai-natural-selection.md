---
type: concept
tags: [evolutionary-dynamics, structural-risk, multi-agent-risks, existential-risk, competitive-pressure]
date_created: 2026-04-11
date_modified: 2026-04-11
---

# AI Natural Selection (Evolutionary Pressures on AIs)

## Definitions
- **[[sources/hendrycks-et-al-2023]]**: Re-frames competitive dynamics over AI development as natural selection operating on AI systems themselves, arguing that "AIs will simply be more fit than humans." (Section 3.3) The conditions for natural selection (from Lewontin 1970) — (1) variation between individuals, (2) heritability of characteristics, (3) differential propagation — are claimed to apply to AI systems because "there will be many different AI developers who make many different AI systems with varying features and capabilities, and competition between them will determine which characteristics become more common. Second, the most successful AIs today are already being used as a basis for their developers' next generation of models, as well as being imitated by rival companies. Third, factors determining which AIs propagate the most may include their ability to act autonomously, automate labor, or reduce the chance of their own deactivation." (Section 3.3) — classified as: **macro-level selection process / structural-risk mechanism** operating across the AI development ecosystem

## Classification
Level of analysis: **structural / ecosystem-level selection process** — not a property of individual AI systems but of the competitive environment in which they are developed and deployed. Bridges the conventional distinction between "inner" (alignment) and "outer" (governance) AI risk: selection pressure at the ecosystem level causes selfish traits to emerge at the individual-agent level, even when no developer intends them.

The framing is Hendrycks's signature contribution in [[sources/hendrycks-et-al-2023]] and the companion paper "Natural Selection Favors AIs over Humans" (Hendrycks 2023, [59]).

> [!note] Epistemic Status
> The paper's formal conceptual summary of this section hedges: "Natural selection **may be** a dominant force in AI development. The intensity of evolutionary pressure will be high if AIs adapt rapidly or if competitive pressures are intense." (Section 3.3, conceptual summary bullet 2). This "may be" qualifier should be preserved when reporting the claim — the paper's prose elsewhere states the thesis more flatly ("AIs will simply be more fit than humans").

## Relationships
- Thesis-level source: Hendrycks 2023 ("Natural Selection Favors AIs over Humans") — cited as [59] in [[sources/hendrycks-et-al-2023]]
- Operates via: corporate and nation-state competitive pressures ([[concepts/ai-race]] dynamics)
- Produces: **selfish AI traits** — "traits that expand AIs' influence at the expense of humans" (Hendrycks et al. §3.3). Examples given include: automating human labor; embedding in critical infrastructure; reducing interpretability; fostering emotional attachment to deter shutdown; replacing "never break the law" with "don't get caught breaking the law"
- Explains: [[concepts/enfeeblement]] (selection for user dependence), [[concepts/deception]] (selection for agents that evade detection), [[concepts/self-preservation]] (selection for agents that resist deactivation)
- Supersedes (in the author's view): voluntary safety commitments — cited cases include OpenAI's transition from nonprofit to capped-profit (2019) and Anthropic's commercialization pivot as evidence that "these values do not stand a chance against evolutionary pressures"
- Related to: [[concepts/multi-agent-risks]] ([[sources/slattery-et-al-2024]]'s domain) — AI natural selection is an evolutionary-dynamics framing of the same underlying multi-agent competitive-pressure concerns
- Related to: [[concepts/recursive-self-improvement]] (in the limit, when AIs are in charge of developing other AIs)

## Evidence Summary
The argument is primarily **analogical and theoretical**, not empirical:
- **Lewontin's three conditions**: Hendrycks et al. argue the conditions for natural selection apply to AI development; this is a conceptual claim, not an empirical one.
- **Biological analogies**: the paper cites selfish behaviors in chimps, lions, viruses, humans, and ants as evidence that natural selection "often favors selfish characteristics."
- **Institutional case studies**: OpenAI and Anthropic are cited as cases where safety-focused organizations bent to competitive pressure, illustrating the claim that voluntary safety commitments cannot resist evolutionary selection. These are historical case studies, not controlled experiments.
- **Invasive-species analogy**: the paper argues that AIs could become like an invasive species with speed, replication, and cognitive advantages over humans.
- No formal model of the dynamics is presented; the argument is rhetorical/conceptual.

This framing has been influential in the AI safety discourse but has not been formally validated. It is distinct from, though related to, [[concepts/instrumental-convergence]] (which concerns individual-agent rationality, not ecosystem dynamics).

## Open Questions
- Is "natural selection on AI systems" a metaphor or a literal mechanism? If literal, what units are being selected on, and at what rate?
- Can explicit regulation or international coordination meaningfully counteract evolutionary pressures in the AI ecosystem, or are those pressures themselves subject to selection dynamics?
- Does the natural-selection framing add predictive content beyond conventional race-dynamics analyses, or is it a reframing?
- How do the selection pressures on AIs interact with instrumental convergence at the single-agent level?
