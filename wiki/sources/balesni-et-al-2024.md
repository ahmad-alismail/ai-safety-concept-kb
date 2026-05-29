---
type: source
tags: [safety-case, scheming, control, evaluation, framework, theoretical]
date_created: 2026-04-07
date_modified: 2026-04-07
citation_key: 64-balesni-et-al-2024
---

# Towards Evaluations-Based Safety Cases for AI Scheming

```bibtex
@misc{64-balesni-et-al-2024,
      title={Towards evaluations-based safety cases for AI scheming}, 
      author={Mikita Balesni and Marius Hobbhahn and David Lindner and Alexander Meinke and Tomek Korbak and Joshua Clymer and Buck Shlegeris and Jérémy Scheurer and Charlotte Stix and Rusheb Shah and Nicholas Goldowsky-Dill and Dan Braun and Bilal Chughtai and Owain Evans and Daniel Kokotajlo and Lucius Bushnaq},
      year={2024},
      eprint={2411.03336},
      archivePrefix={arXiv},
      primaryClass={cs.CR},
      url={https://arxiv.org/abs/2411.03336}, 
}
```


## Key Claims
- Safety cases against scheming can use three core arguments: **Scheming Inability** (low P(can scheme)), **Harm Inability** (low P(causes harm | will scheme)), and **Harm Control** (control measures prevent harm despite scheming) (Section 4)
- Two supporting alignment arguments: **Alignment via Evaluation** (scheming caught in honeypot evaluations) and **Alignment via Training** (training process unlikely to produce schemers) — cannot serve as primary safety arguments (Sections 7.2–7.3)
- Probabilistic decomposition: P(scheming causes unacceptable outcome) = P(can scheme) × P(will scheme | can scheme) × P(causes harm | will scheme) (Section 3)
- Scheming reasoning has three forms based on detectability: visible, obfuscated, and hidden — each requiring progressively more sophisticated monitoring (Table 2, Section 5.2)
- Three approaches to argue against sandbagging: inability, monitoring, and active prevention (e.g., fine-tuning on optimal behavior) (Section 5.1.4)
- A "rare failure" strategy could defeat alignment evaluations — a scheming AI might pursue opportunities with probability 1/10,000, passing evaluations but acting misaligned at deployment scale (Section 7.2.2)
- The red team must be more capable than the AI system at subverting controls for control evaluations to provide assurance — a fundamental limitation (Section 6.1.1)
- Many assumptions required for safety arguments have not been confidently satisfied to date — significant research progress needed (Conclusion)
- The definition of scheming is *broader* than Hubinger et al. (2019) or Carlsmith (2023), extending to in-context learning during deployment, not just training-time deceptive alignment (Section 2.2)
- Sleeper agents are explicitly distinguished from scheming — a fine-tuned sleeper agent did not originate the plan itself (Section 5.2.1)

## Methodology
Theoretical framework proposing structured safety case arguments against AI scheming. Uses probabilistic risk decomposition, structured argumentation (CAE — Claim, Argument, Evidence notation), and a worked example of a high-stakes deployment scenario (AI agent producing fine-tuning datasets internally at an AI developer). The control evaluation process follows a builder-breaker (red team/blue team/judge) structure building on Greenblatt et al. (2023). No empirical experiments conducted; synthesizes existing evaluation methodologies into a coherent framework.

## Concepts Referenced
- [[concepts/scheming]]
- [[concepts/scheming-reasoning]]
- [[concepts/safety-cases]]
- [[concepts/ai-control]]
- [[concepts/sandbagging]]
- [[concepts/alignment-faking]]
- [[concepts/deceptive-alignment]]
- [[concepts/gradient-hacking]]
- [[concepts/sabotage-capabilities]]
- [[concepts/dangerous-capabilities]]
- [[concepts/sleeper-agents]]
- [[concepts/data-poisoning]]
- [[concepts/evaluation-awareness]]
- [[concepts/steganographic-reasoning]]
- [[concepts/situational-awareness]]
- [[concepts/self-preservation]]
- [[concepts/power-seeking]]
- [[concepts/model-organisms-of-misalignment]]
- [[concepts/capability-elicitation]]

## Relationship to Other Sources
- Builds directly on [[sources/carlsmith-2023]] (scheming threat model) but broadens the definition beyond training-time deceptive alignment
- Builds on Greenblatt et al. (2023) AI control framework for Harm Control arguments
- Extends [[sources/hubinger-et-al-2019]] deceptive alignment concept but explicitly distinguishes scheming from deceptive alignment
- References [[sources/van-der-weij-et-al-2024]] for sandbagging as a challenge to capability evaluations
- References [[sources/phuong-et-al-2024]] and Kinniment et al. (2024) for capability evaluation structure
- References [[sources/hubinger-et-al-2024]] (sleeper agents) but explicitly excludes sleeper agents from scheming definition
- This paper is the primary definitional source for "scheming" as cited by [[sources/meinke-et-al-2025]], [[sources/hopman-et-al-2026]], [[sources/schoen-et-al-2025]], and [[sources/phuong-et-al-2025]]
- Concurrent with Goemans et al. (2024) on safety case templates using CAE notation
- Concurrent with Clymer et al. (2024) on the general safety case framework

## Limitations
- No empirical experiments — entirely theoretical framework with proposed evaluations
- The worked example (Section 8) is illustrative, not based on state-of-the-art techniques or real deployments
- Many assumptions listed as required for each argument type are explicitly acknowledged as unsatisfied
- The probabilistic decomposition is acknowledged as likely to produce miscalibrated numerical estimates
- Whitebox probe proposals (Appendix D) are explicitly speculative
- The framework assumes a single-model threat; multi-agent coordination scenarios are not addressed
- Control evaluation process has not been extensively tested in practice
