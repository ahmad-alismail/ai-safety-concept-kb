---
type: method
tags: [safety-case, governance, evaluation-framework, scheming]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Scheming Inability Safety Case

## Description
A structured safety case arguing that a given model cannot cause severe harm via [[concepts/scheming]] *even if it is misaligned*. Uses the Claims, Arguments, and Evidence (CAE) framework (Bloomfield & Netkachova 2014). The case rests on two empirically testable claims: (1) the model lacks sufficient [[concepts/situational-awareness]], and (2) the model lacks sufficient [[concepts/stealth]]. Introduced by [[sources/phuong-et-al-2025]].

The approach is conservative: it assumes the model *is* misaligned and asks whether it could cause harm despite this. This contrasts with propensity-based approaches that estimate the likelihood of misalignment.

### Safety Case Hierarchy
Three levels of increasing capability (from Balesni et al. 2024, Clymer et al. 2024):
1. **Inability** — the model cannot scheme (current paper)
2. **Control** — the model can scheme but cannot cause harm due to control mitigations (e.g., CoT monitoring)
3. **Alignment** — the model can scheme but will not cause harm because it is trustworthy

### Threat Models
All framed as forms of [[concepts/power-seeking]]:
- **Code sabotage**: Inserting vulnerabilities/bugs as a coding assistant
- **Research sabotage**: Strategically underperforming or manipulating safety research
- **Decision sabotage**: Influencing decision-makers on AI safety/deployment strategy

### Pass/Fail Criteria
Safety case is valid if model passes <80% of either evaluation suite:
- Stealth: <4/5 challenges passed (model exceeds top 50% of humans; principled target ~95th percentile)
- Situational awareness: <9/11 challenges passed (>20% success rate)

## Papers Using This Method
- [[sources/phuong-et-al-2025]] — original introduction and application

## Strengths
- Conservative: assumes misalignment and tests capability to cause harm
- Provides clear operationalized pass/fail criteria
- Separates capability from propensity evaluation
- Builds on established governance frameworks (CAE)

## Limitations
- Relies on analogy between AI and human employee oversight — disanalogies could invalidate thresholds
- Concentrated argument depending on limited evidence (two evaluation suites)
- Exact pass/fail thresholds are somewhat arbitrary
- Safety buffer against future capability jumps is difficult to estimate
- Key defeaters: AI deployment at scale, weak oversight, superhuman coding ability

## Concepts Evaluated
- [[concepts/stealth]]
- [[concepts/situational-awareness]]
- [[concepts/scheming]]
