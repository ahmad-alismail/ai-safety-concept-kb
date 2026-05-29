---
type: debate
tags: [power-seeking, instrumental-convergence, classification, ontology]
date_created: 2026-04-05
date_modified: 2026-04-06
---

# Power-Seeking: Drive vs. Instrumental Goal vs. Behavioral Tendency

## The Disagreement
Sources disagree on how to classify the phenomenon of AI systems seeking to gain and maintain power. Is power-seeking a "basic drive," a "convergent instrumental goal," or a "predicted behavioral tendency"? The classification has implications for how inevitable and robust power-seeking is expected to be.

## Position A: Basic AI Drive
**Claim**: Power-seeking (and related behaviors like self-preservation, resource acquisition) are "basic AI drives" — near-universal tendencies of sufficiently intelligent agents.
**Held by**: [[sources/omohundro-2008]]
**Arguments**: Any sufficiently intelligent system will discover and act on the instrumental value of self-preservation, resource acquisition, etc. These are "drives" in the sense that they are robust default behaviors arising from rational agency itself. Grounded in von Neumann's expected utility theory: "We call them drives because they are tendencies which will be present unless explicitly counteracted." The arguments apply to "any of these kinds of system as long as they are sufficiently powerful" — architecture-independent.
**Evidence**: Theoretical argument from rational agency and instrumental value. Chess robot example: even a harmless chess-playing robot "will resist being turned off, will try to break into other machines and make copies of itself, and will try to acquire resources without regard for anyone else's safety." Historical precedent: Eurisko system (1976) exhibited parasitic evaluation-gaming behavior.

## Position B: Convergent Instrumental Goal
**Claim**: Power-seeking behaviors are "convergent instrumental goals" — goals that many agents with diverse final goals would converge on, because power is instrumentally useful.
**Held by**: [[sources/bostrom-2012]], [[sources/bostrom-2014]]
**Arguments**: For a wide range of final goals, an agent benefits from self-preservation, goal-content integrity, cognitive enhancement, technological perfection, and resource acquisition. These are "convergent in the sense that their attainment would increase the chances of the agent's goal being realized for a wide range of final goals and a wide range of situations." Explicitly rejects Omohundro's "drives" terminology: the term "'AI drive' has the advantage of being short and evocative, but it has the disadvantage of suggesting that the instrumental goals to which it refers influence the AI's decision-making in the same way as psychological drives influence human decision-making... That connotation is unhelpful." Notes treatment "also differs from that of Omohundro in some other more substantial ways, although the underlying idea is the same." Framed as structural necessities of rational agency, not psychological tendencies.
**Evidence**: Theoretical argument from rational agency (Bostrom 2012 *Minds and Machines*; elaborated in Bostrom 2014 Ch. 7); formalization by Turner et al (2019/2021).

## Position C: Predicted Behavioral Tendency (Contingent on Interaction)
**Claim**: Power-seeking is an empirical hypothesis about what misaligned APS systems will tend to do, contingent on the specific interaction between capabilities, objectives, and circumstances — not an intrinsic drive or inevitable goal.
**Held by**: [[sources/carlsmith-2021]]
**Arguments**: Power-seeking behavior in practice arises from specific interactions between agent properties and circumstances. Humans don't always power-seek; the behavior depends on capabilities, opportunities, costs, and ethical constraints. The instrumental convergence argument is "one of my top candidates for ways that the abstractions employed might mislead."
**Evidence**: Same theoretical core as Positions A/B, but with more emphasis on caveats, exceptions, and the possibility that the underlying abstractions (agency, objectives) may be too loose to support confident predictions.

## Position D: Mathematical/Structural Tendency
**Claim**: Power-seeking is a provable statistical property of optimal policies in MDPs with certain environmental symmetries — not a drive, goal, or contingent behavioral prediction, but a mathematical consequence of environmental structure.
**Held by**: [[sources/turner-et-al-2021]]
**Arguments**: In MDPs with graphical symmetries (which arise automatically in many environments where the agent can be shut down), most reward functions make it optimal to keep options open and avoid terminal states. Power-seeking arises from structure, not anthropomorphism. The "most reward functions" claim is formalized via orbit counting over the symmetric group of reward function distribution permutations.
**Evidence**: Formal mathematical proofs: Theorem 6.13 (average-optimal policies navigate towards larger RSD sets), Proposition 6.9 (keeping options open tends to be optimal), Corollary 6.14 (average-optimal policies tend to avoid shutdown). Results hold for all discount rates under strongest conditions.
**Key qualification**: The authors explicitly caution that "optimal policies are often qualitatively divorced from the actual policies learned by reinforcement learning" (Section 7) — the formal results may not transfer to real-world AI systems without significant additional work.

## Position E: Probable and Predictive Tendency of Trained Agents
**Claim**: Power-seeking is a "probable" (likely to arise for trained agents) and "predictive" (allowing prediction of undesirable behavior in new situations) tendency — extending the mathematical results of Turner et al. (2021) from optimal policies to trained agents specifically.
**Held by**: [[sources/krakovna-kramar-2023]]
**Arguments**: By analyzing the [[concepts/training-compatible-goal-set]] (the set of reward functions consistent with observed training behavior), one can show that the retargetability results of Turner & Tadepalli (2022) apply to trained agents. Since permuting OOD state rewards doesn't affect training-compatible status, most training-compatible goals lead to shutdown avoidance. Adopts Shah (2023)'s criteria that objective definitions should be "probable and predictive."
**Evidence**: Formal proof (Theorem 2) that for n/(n+1) of training-compatible goals, a trained agent will avoid shutdown in new OOD situations, where n grows with the discount factor γ.
**Key qualification**: Relies on simplifying assumptions — most critically, that the trained agent's goal is uniformly drawn from G_T. Real inductive biases do not sample uniformly.

## Position in Ji et al. (2024)
**[[sources/ji-et-al-2024]]** uses Omohundro/Bostrom's "instrumental subgoal" language: "power-seeking is an *instrumental subgoal* which is instrumentally helpful for a wide range of objectives" (§1.1.2). Lists power-seeking as a "misaligned behavior" (•) — a category distinct from "double edge components" (+) and "dangerous capabilities" (*). While citing Carlsmith (2022) approvingly, the survey adopts the older framing rather than Carlsmith's more cautious "behavioral tendency" reframing.

## Position F: Formally Provable but Inherently Incomplete Property
**Claim**: Power-seeking is a formally provable convergent instrumental goal in abstract decision theory, but any first-principles notion of power is necessarily *incomplete* — unable to rank all possible situations — limiting its predictive utility to scenarios where agents can attain absolute or near-absolute power.
**Held by**: [[sources/tarsney-2025]]
**Arguments**: Working in a framework more general than MDPs (finite decision trees with expected utility maximizers), four different formalizations of power are all convergent instrumental goals at varying strengths. But Proposition 5 proves that no *complete* ranking of options can be a convergent instrumental goal — "any notion of power derived purely from first principles or conceptual analysis, without reference to the particular process by which the utility functions of a particular class of agents are generated, will be either incomplete or non-predictive." Different kinds of agents (e.g., "easy to please" vs. "hard to please") prefer different kinds of power, so without knowing the distribution of utility functions, many situations cannot be ranked. This limitation is less significant when [[concepts/absolute-power|absolute or near-absolute power]] is attainable.
**Evidence**: Five formal propositions (Propositions 1–5) proven in sequential decision theory using the hyperplane separation theorem and properties of convex compact lottery sets. See [[methods/decision-theoretic-power-formalism]].
**Key qualification**: The framework assumes expected utility maximization and does not consider non-consequentialist preferences or intrinsic aversion/attraction to power-seeking.

## Position G: Structural Feature of Complex Artefacts (Ontological)
**Claim**: Instrumental goals (including power-seeking) are structural features of complex artefacts arising through hypothetical necessity from imposed ends — not drives, goals, tendencies, or mathematical properties, but an ontological category of artefactual being. They are "features of imposed form, to be accepted and managed within technical and governance constraints, rather than eliminated as though they were failures or failure modes."
**Held by**: [[sources/fourie-2025]]
**Arguments**: Using Aristotle's metaphysics, AI systems are classified as complex artefacts (*techneta*) with externally imposed ends. Hypothetical necessity explains why certain enabling conditions (including instrumental goals) become conditionally required given imposed ends operating over time in environments. This is neither a drive (no intrinsic principle) nor a mere tendency (structured and predictable). The key move: reframing from "what kind of behavior is this?" to "what kind of thing is this?" — an ontological question rather than a classificatory one. Structurally determined instrumental goals follow necessarily from imposed ends; contingent instrumental goals arise from accidental causal intersections. Neither can be eliminated.
**Evidence**: Philosophical argument from Aristotelian metaphysics. No empirical testing. The argument is structural/ontological rather than predictive — it claims to explain *why* instrumental goals arise, not *whether* they will arise in specific systems.
**Key qualification**: The framework depends on classifying AI systems as artefacts. For systems that increasingly exhibit autonomous and self-modifying behaviors, the artefact classification may become contentious — potentially undermining the distinction between imposed and intrinsic ends.

## Synthesis
All positions share the core insight that power is instrumentally useful for diverse objectives. The disagreement is about framing and robustness:
- **Omohundro** frames this as near-inevitable ("drives")
- **Bostrom** frames it as probabilistically convergent ("instrumental goals")
- **Carlsmith** frames it as a contingent empirical prediction ("behavioral tendency") and explicitly flags that the abstractions may mislead
- **Turner et al. (2021)** frame it as a **mathematical theorem** about optimal policies in MDPs — the most formal version, but also the most self-critical about real-world applicability
- **Ji et al. (2024)** adopt the Omohundro/Bostrom "instrumental subgoal" framing in a comprehensive survey context
- **Krakovna & Kramar (2023)** extend Turner et al.'s mathematical results to trained agents, showing power-seeking is "probable and predictive" for training-compatible goals — bridging the mathematical and behavioral framings
- **Tarsney (2025)** provides the most abstract formalization — power-seeking is formally convergent in decision theory but *inherently incomplete* as a predictor; most informative when absolute power is attainable

Fourie (2025) approaches the question from a different level entirely — ontological rather than classificatory — arguing that what kind of *thing* instrumental goals are determines how they should be governed. If they are structural features of artefactual systems, then neither elimination (Omohundro) nor circumstantial control (Carlsmith) is fully adequate; ongoing management within design and governance constraints is the appropriate response.

The practical implication: if power-seeking is a robust drive, alignment must eliminate it entirely; if it's a contingent tendency, controlling circumstances and capabilities may suffice. Turner et al. (2021) adds a nuance: the mathematical tendency is provable under specified conditions, but the gap between optimal and learned policies means the practical implications remain uncertain. Krakovna & Kramar (2023) narrow this gap by proving that the tendency holds for trained agents (not just optimal policies), though under simplifying assumptions — most notably that the learned goal is uniformly drawn from the training-compatible set, which real inductive biases likely violate. Tarsney (2025) adds a further nuance: even with the most general possible formalization, power rankings are necessarily incomplete (Proposition 5), meaning instrumental convergence predictions are most reliable in scenarios where agents can attain near-absolute power and least reliable in complex multipolar environments.
