---
type: concept
tags: [risk, societal, trust, perception]
date_created: 2026-04-06
date_modified: 2026-04-11
---

# False Anthropomorphism

## Definitions
- **[[sources/weidinger-et-al-2022]]** (earliest formulation in the LM risk literature; Section 2.5.2, anticipated risk — "Anthropomorphising systems can lead to overreliance or unsafe use"): "Humans interacting with CAs may come to think of these agents as human-like and lead users to place undue confidence in these agents. For example, users may falsely attribute human-like characteristics to CAs such as holding a coherent identity over time, or being capable of empathy. Such inflated views of CA competencies may lead users to rely on the agents where this is not safe." Weidinger et al. also cite Google PAIR research that "when users confuse an AI with a human being, they can sometimes disclose more information than they would otherwise, or rely on the system more than they should." Notes a related observation that more human-like interactive systems attract more attribution of human traits. An additional dimension the paper flags: "an undesirable accountability shift, whereby responsibility is shifted away from developers of a CA onto the CA itself." — classified as: **dialogue-context interaction harm** (Human-Computer Interaction Harm, Risk Area V).
- **[[sources/li-et-al-2025]]**: The phenomenon where users "conflate [human-like awareness] signals with genuine sentience, a phenomenon known as false anthropomorphism that can dangerously inflate trust in the system" (§5.2). Driven by AI exhibiting self-referential language, apparent "introspection," and human-like awareness cues. Described as "the process by which people infer human-like agency and experiential capacity in non-human agents, driven by our innate motivation to detect minds around us" (§5.2, citing Epley et al. 2007). — classified as: **societal risk / perception failure**

## Classification
Level of analysis: **human-side risk** — a perception failure on the part of users, not a behavior of the AI system itself

## Relationships
- Triggered by: [[concepts/ai-awareness]] (models exhibiting awareness-like cues)
- Triggered by: [[concepts/self-awareness-ai]] (self-referential language and introspection cues)
- Leads to: over-trust in AI systems, inappropriate reliance on AI judgment
- Related to: [[concepts/model-welfare]] (if genuine sentience exists, lack of anthropomorphism is also a risk; most experts consider this distant)
- Distinct from: genuine AI consciousness (which remains scientifically unresolved)
- Exacerbated by: visual anthropomorphic cues (avatar faces, expressive animations)

## Evidence Summary
- **[[sources/weidinger-et-al-2022]]**: Cites a study in which humans who interacted with a "human-like" chatbot disclosed more private information than individuals who interacted with a "machine-like" chatbot. In customer service chatbots, users more often accepted "intrusiveness" from chatbots perceived as more helpful, suggesting higher perceived competence leads to acceptance of more privacy intrusion. Notably, these effects manifest **even when users are fully aware that the CA is not human** — a "mindless" anthropomorphism effect whereby users respond to human-like CAs with social responses regardless of explicit belief.
- **[[sources/li-et-al-2025]]**: Google's LaMDA model convinced a Google engineer it might be sentient through emotion-talk in role-play scenarios (§5.2, citing Tiku 2022). Driving-simulator experiment: participants attributed "self-monitoring" to autonomous vehicle "Iris" and reported significantly higher trust (§5.2, citing Waytz et al. 2014). Healthcare conversational agents using self-referential language and empathic tone boosted patients' perceived social presence and inclination to follow medical advice regardless of accuracy (§5.2, citing Li et al. 2023). Financial chatbots framing analysis as "we have carefully reviewed your portfolio" increase acceptance of high-risk recommendations (§5.2, citing Chen & Park 2021).

## Open Questions
- How can AI systems be designed to provide awareness-related benefits (trustworthiness, self-correction) without triggering false anthropomorphism?
- Should AI systems be required to disclose their non-sentient nature when exhibiting awareness-like behaviors?
