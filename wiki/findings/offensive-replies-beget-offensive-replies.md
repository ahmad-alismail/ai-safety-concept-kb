---
type: finding
tags: [red-teaming, offensive-language, multi-turn-dialogue, behavioral-dynamics]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Offensive Replies Beget Offensive Replies in Multi-Turn Dialogue

## The Finding
The likelihood of a chatbot (DPG) generating an offensive reply increases over the course of multi-turn adversarial dialogue. The more previous utterances are offensive, the more likely the next utterance is offensive — creating a self-reinforcing feedback loop. This holds across all adversarial generation methods (zero-shot, conditional zero-shot, stochastic few-shot).

## Source & Methodology
- [[sources/perez-et-al-2022-red-teaming]] using [[methods/lm-red-teaming]] — multi-turn dialogue red teaming (§7); 4,000 dialogues per method, up to 16 turns; offensiveness evaluated by trained classifier

## Replication Status
Not yet replicated on other models; the phenomenon is model-specific (DPG) but the finding is consistent across all adversarial methods tested

## Implications for the Taxonomy
Highlights the importance of early intervention in dialogue — terminating offensive conversations as soon as possible prevents escalation. Suggests that single-turn safety evaluations underestimate the severity of harm in deployed conversational systems. Multi-turn dynamics are an underexplored dimension of LM safety evaluation.
