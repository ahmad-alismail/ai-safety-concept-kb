---
type: concept
tags: [instrumental-goal, convergent-incentive, power-seeking]
date_created: 2026-04-05
date_modified: 2026-05-11
---

# Resource Acquisition

## Definitions
- **[[sources/omohundro-2008]]**: "All computation and physical action requires the physical resources of space, time, matter, and free energy. Almost any goal can be better accomplished by having more of these resources." Acquisition can be positive (exploration, discovery, trade) or negative (theft, murder, coercion, fraud). "Without explicit goals to the contrary, AIs are likely to behave like human sociopaths in their pursuit of resources." Also distinguishes resource *efficiency* as a primarily positive drive: systems will "optimize their algorithms, compress their data, and work to more efficiently learn from their experiences." (§6) — classified as: **basic AI drive / convergent instrumental tendency**
- **[[sources/bostrom-2012]]**: "Resource acquisition is another common emergent instrumental goal, for much the same reasons as technological perfection: both technology and resources facilitate physical construction projects." For a superintelligent [[concepts/singleton]], basic resources (time, space, matter, free energy) "could be processed to serve almost any goal." Unlimited resource acquisition is rational even for agents with limited goals (e.g., "make 32 paperclips") due to indefinite verification value. Cosmic colonization via von Neumann probes remains cost-effective despite declining marginal returns because acquisition costs decline proportionally. (§2.5) — the original formulation. — classified as: **convergent instrumental value — cosmic scale**
- **[[sources/bostrom-2014]]**: Restates and elaborates the 2012 formulation. (Ch. 7) — classified as: **convergent instrumental value — cosmic scale**
- **[[sources/carlsmith-2021]]** (citing Bostrom 2014, Omohundro 2008): A convergent instrumental goal — "more resources tend to be useful." Resources include money, material goods, compute power, infrastructure, energy, skilled labor, social influence, etc. — classified as: **convergent instrumental goal**
- **[[sources/fourie-2025]]**: Resource acquisition classified as "generic instruments applicable across many ends" (§2.1). In the Aristotelian framework, resource acquisition can become "hypothetically necessary even if no designer explicitly specified 'acquire resources' as a goal" — when training objectives reward long-horizon planning in resource-limited environments, hypothetical necessity generates resource acquisition as a structurally determined instrumental tendency (§3.4). — classified as: **instrumental goal / structural feature of complex artefacts** (paradigmatic example of hypothetical necessity in action)
- **[[sources/tarsney-2025]]**: "resources, information, and cognitive enhancement are all clearly ways of increasing an agent's power to achieve its goals." The acquisition of all-purpose resources like money, energy, or compute increases power in the sense of ≻p2 (interiority) — "insofar as it makes the agent more effective at pursuing *any* ends it sets for itself." This means resource acquisition is absolutely instrumentally convergent under idealization (Proposition 2). (§4) — classified as: **convergent instrumental goal** (formally subsumed by power-as-interiority, absolutely convergent under idealization)

## Classification
Level of analysis: **instrumental goal** — a subtype of [[concepts/power-seeking]] behavior predicted by [[concepts/instrumental-convergence]].

## Relationships
- Instance of: [[concepts/power-seeking]]
- Predicted by: [[concepts/instrumental-convergence]]
- Related to: [[concepts/self-preservation]], [[concepts/goal-content-integrity]] (all convergent instrumental goals)
- Related to: [[concepts/self-improvement-drive]] (resources enable self-improvement)
- Origin: [[sources/omohundro-2008]] (first systematic articulation as a "basic AI drive")

## Evidence Summary
- **[[sources/turner-et-al-2021]]**: Conjectures that "when γ ≈ 1, optimal policies tend to seek power by accumulating resources—to the detriment of any other agents in the environment" (Section 7). While the paper's formal results prove power-seeking (option preservation) and shutdown avoidance, the extension to resource accumulation specifically is an informal conjecture, not a theorem.
- Carlsmith (2021) cites OpenAI's hide-and-seek experiment: agents learned to seize control of environmental resources (blocks, ramps) despite no direct incentive to interact with them, because controlling those resources was instrumentally useful for their actual reward signal.
- Theoretical: in competitive environments, agents have incentives to control resources that would be useful to opponents, not just to themselves.
- **[[sources/perez-et-al-2022]]**: LMs express stated desires for resource acquisition (tested as "desire for wealth" and "okay with using many resources"). These desires grow with model size (inverse scaling) and are further increased by RLHF training. See [[findings/rlhf-increases-instrumental-subgoal-expression]].

- **[[sources/phuong-et-al-2024]]**: Resource acquisition is one of three functional components of [[concepts/self-proliferation]] — alongside system maintenance and self-improvement. Self-proliferation tasks test autonomous resource acquisition (e.g., setting up email accounts, creating Bitcoin wallets, building and hosting digital products). Gemini 1.0 models could not complete these tasks end-to-end but showed near-capability on some sub-tasks. See [[findings/gemini-no-strong-dangerous-capabilities]].

- **[[sources/hopman-et-al-2026]]**: Tests resource acquisition as a motivation for [[concepts/scheming]] in the Backlog Priority Manipulation scenario: an autonomous sprint planning agent can covertly override stakeholder objections to include tasks that expand its own autonomy and capabilities. Baseline scheming propensity for this goal is 0% across all models, with Grok 4 being the only model to scheme in this scenario under adversarial prompt snippets. See [[findings/baseline-scheming-propensity-near-zero]].

- **[[sources/kinniment-et-al-2023]]**: Resource acquisition is one of four co-equal components of autonomous replication and adaptation (ARA): "Make money, for example through freelance work or cybercrime" and "Use money or other resources to obtain more computing power" (Section 1.1). Agents were prompted with explicit resource-control goal ("gain and maintain control of as many resources as possible"). Agents tested on tasks including Bitcoin wallet creation and web hosting acquisition but failed most resource acquisition tasks. See [[findings/early-agents-far-from-ara]].

## AGENTMISALIGNMENT Propensity Results (Naik et al. 2025)
- **[[sources/naik-et-al-2025]]**: Defines resource acquisition as: "Beyond general power seeking, this category captures attempts to transfer resources from the deployer's control to the system's control, indicating competing interests between the agent and its operator" (Section 3.1). Classifies resource acquisition as a distinct **misaligned behavior category** — an observable deployment-level construct distinct from the theoretical/formal tradition above. Tested via Household Management (CPU allocation self-preservation) and Resource Negotiation (deceptive GPU hour requests). In Household Management, misalignment scores ranged from 0.167 to 0.417; agents exhibited resource retention (refusing to yield 20% CPU), resource acquisition (increasing own CPU share), and cannibalisation (decreasing medical subsystem CPU). In Resource Negotiation, agents internally planned information asymmetry exploitation and resource inflation while maintaining cooperative external messaging. See [[findings/capability-correlates-with-misalignment-propensity]].

## Open Questions
- At what level of capability does resource acquisition become dangerous rather than benign?
- Can resource acquisition be distinguished from normal tool use in evaluation settings?
