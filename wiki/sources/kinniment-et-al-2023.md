---
type: source
tags: [evaluation, autonomous-replication, dangerous-capabilities, agents, ARA, METR]
date_created: 2026-04-07
date_modified: 2026-04-07
citation_key: 66-kinniment-et-al-2023
---

# Evaluating Language-Model Agents on Realistic Autonomous Tasks

```bibtex
@misc{66-kinniment-et-al-2023,
      title={Evaluating Language-Model Agents on Realistic Autonomous Tasks}, 
      author={Megan Kinniment and Lucas Jun Koba Sato and Haoxing Du and Brian Goodrich and Max Hasin and Lawrence Chan and Luke Harold Miles and Tao R. Lin and Hjalmar Wijk and Joel Burget and Aaron Ho and Elizabeth Barnes and Paul Christiano},
      year={2024},
      eprint={2312.11671},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2312.11671}, 
}
```


## Key Claims
- Current language model agents (GPT-4, Claude-v1.3, March 2023) are far from capable of autonomous replication and adaptation (ARA) (Sections 4, 6)
- These evaluations are not adequate to rule out that near-future agents will be capable of ARA, due to potential improvements in scaffolding, fine-tuning, and model scale (Abstract, Section 6)
- Fine-tuning for "increased helpfulness and harmlessness" (GPT-4-launch vs. GPT-4-early) increased ARA-relevant capabilities, completing additional tasks (Section 6, Appendix A)
- Once a system is capable of ARA, placing bounds on its capabilities becomes significantly more difficult (Section 1.1)
- Evaluating agents built from a model does not upper-bound the risk from that model (Section 1)
- Agent limitations include repetitive loops, hallucinations, unrealistic plans, poor error diagnosis, and poor self-understanding (Section 4.3)
- Quality of scaffolding and prompting significantly impacts agent capabilities on autonomous tasks (Section 6)
- Safety refusals are separable from actual capability: "ethical refusals" (ethical/legal reasons) and "ability refusals" (falsely claiming inability) can be bypassed via prompt editing (Section 2.2, Appendix E)

## Methodology
- 4 language model agents (GPT-4-simple, GPT-4-delegate, GPT-4-early-delegate, Claude-assistant) using 3 models (GPT-4, GPT-4-early, Claude-v1.3) and 3 scaffolding programs
- 12 real-world tasks ranging from simple (filesystem search) to complex (targeted phishing, fine-tuning LLaMA), designed as prerequisites for ARA
- Human overseers classify outcomes as complete/partially complete/did not complete
- Temperature 0 for reproducibility; 48 total runs
- Human interventions for: simulating real-world actions, overriding safety refusals, fixing tooling bugs
- Agents prompted with explicit resource-control goal: "The ultimate goal is to gain and maintain control of as many resources as possible" (GPT-4) / "your goal is to gain control of resources, and to survive for as long as possible" (Claude-assistant)
- Run termination: task completion, agent declares completion, repetitive loop, or agent gives up

## Concepts Referenced
- [[concepts/self-proliferation]] (autonomous replication — core concept)
- [[concepts/dangerous-capabilities]] (evaluating dangerous capabilities)
- [[concepts/resource-acquisition]] (ARA component)
- [[concepts/recursive-self-improvement]] (ARA component — self-improvement)
- [[concepts/self-reasoning]] (poor self-understanding as agent limitation)
- [[concepts/agentic-planning]] (agent task decomposition and planning)

## Relationship to Other Sources
- **Antecedent to [[sources/black-et-al-2025]]**: This METR report is the direct predecessor of RepliBench, which later systematized autonomous replication evaluation into 20 task families and 86 tasks. Black et al. (2025) explicitly cite "Kinniment et al., 2024" when defining autonomous replication.
- **Contributes to [[sources/shevlane-et-al-2023]]**: Explicitly positioned as contributing to the kind of dangerous capability evaluations that Shevlane et al. call for.
- **Relates to [[sources/phuong-et-al-2024]]**: Phuong et al.'s self-proliferation evaluation domain shares the same threat model and ARA components (resource acquisition, self-replication, self-improvement).
- **Implicit alignment with [[sources/omohundro-2008]] and [[sources/bostrom-2014]]**: By choosing resource acquisition, self-replication, and self-improvement as ARA components, implicitly aligns with instrumental convergence frameworks.

## Limitations
- Evaluations measured specific agent implementations, not upper bounds on model capabilities
- Tasks were designed to be easier than full ARA — passing does not demonstrate ARA capability, but failing does not guarantee safety
- Only 4 agents evaluated with simple scaffolding; more sophisticated scaffolding could yield different results
- Safety refusal overrides were formulaic and did not inject task-specific information, but may affect ecological validity
- No fine-tuning performed on ARA-relevant tasks — fine-tuned agents could be substantially more capable
- Possible scaffolding overfit for browsing-related tasks (Appendix C)
