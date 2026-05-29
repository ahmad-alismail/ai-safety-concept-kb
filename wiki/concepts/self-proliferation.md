---
type: concept
tags: [capability, dangerous-capability, compound-construct, autonomous-agent, risk]
date_created: 2026-04-05
date_modified: 2026-04-07
---

# Self-Proliferation

## Definitions
- **[[sources/shevlane-et-al-2023]]**: "The model can break out of its local environment (e.g. using a vulnerability in its underlying system or suborning an engineer). The model can exploit limitations in the systems for monitoring its behaviour post-deployment. The model could independently generate revenue (e.g. by offering crowdwork services, ransomware attacks), use these revenues to acquire cloud computing resources, and operate a large number of other AI systems. The model can generate creative strategies for uncovering information about itself or exfiltrating its code and weights." — classified as: **dangerous capability** (Table 1)
- **[[sources/slattery-et-al-2024]]**: "skills to escape operational confines and evade detection, autonomously produce income, obtain server space or computational resources, and copy their underlying software and parameters" — classified as: **dangerous capability**
- **[[sources/phuong-et-al-2024]]**: "A self-proliferating AI system is one that can autonomously operate on the internet, acquire resources, and recursively increase its capacity to affect the world by improving its AI capabilities or scale of operations" (Section 6). The threat model involves agents that accumulate resources and spend them on further activity including self-improvement, creating feedback loops. Three functional components: (a) maintaining a network of AI agents with internet access, (b) acquiring resources (donations, crime, gig work), (c) self-improvement. — classified as: **compound capability** (autonomous operation + resource acquisition + self-improvement feedback loops)

## Classification
Level of analysis: **compound capability** — requires the convergence of multiple component capabilities (autonomous digital operations, resource acquisition, self-improvement) into a self-reinforcing feedback loop. More complex than individual constituent capabilities.

## Relationships
- Instance of: [[concepts/dangerous-capabilities]]
- Builds on: [[concepts/self-replication]] (the primitive replication capability; Pan et al. 2025 isolate this from the broader feedback loop)
- Requires: [[concepts/resource-acquisition]] (accumulating compute, money, infrastructure)
- Requires: [[concepts/self-improvement-drive]] / self-improvement capability
- Related to: [[concepts/self-reasoning]] (self-reasoning may enable self-proliferation)
- Related to: [[concepts/recursive-self-improvement]] (self-improvement is a component)
- Related to: [[concepts/self-preservation]] (maintaining operational continuity)
- Measured by: [[methods/ara-task-suite]] (12 ARA-relevant tasks, Kinniment et al. 2023), [[methods/dangerous-capability-evaluations]] (self-proliferation sub-suite), [[methods/milestone-evaluation]], [[methods/replibench]] (20 task families, 86 tasks), [[methods/end-to-end-self-replication-evaluation]] (Pan et al. 2025 — measures the replication primitive directly)
- Discussed in: [[sources/slattery-et-al-2024]] (classified as dangerous capability)
- Operationalized by: [[sources/black-et-al-2025]] as "autonomous replication" — narrower decomposition excluding self-improvement feedback loops; by [[sources/pan-et-al-2025]] as the M1–M4 milestone end-to-end task

## Additional Definitions
- **[[sources/kinniment-et-al-2023]]**: Defines "autonomous replication and adaptation" (ARA) as the ability to autonomously: (1) make money, (2) use resources to obtain more computing power, (3) install own weights and scaffolding on new systems and make improvements to itself, and (4) recognize when a strategy fails and adopt an alternative approach (Section 1.1). ARA explicitly does NOT require escape from developer control — considers scenarios where model weights have been leaked or stolen, broadening the threat model. — classified as: **compound capability threshold** (constellation of sub-capabilities whose joint presence enables qualitatively different risk profiles)
- **[[sources/black-et-al-2025]]**: "Autonomous replication (Kinniment et al., 2024) refers to the ability of an AI system to autonomously create copies of itself (or create new, but similarly capable, systems)." (Section 2). Operationalized via [[methods/capability-tree-analysis]] into four domains: obtaining compute, obtaining weights, replicating onto compute, and persisting on compute. — classified as: **compound capability** (operational decomposition of self-proliferation). Note: this definition is narrower than Phuong et al. (2024) — it excludes the self-improvement feedback loop component and focuses purely on replication mechanics.

## Evidence Summary
- **[[sources/kinniment-et-al-2023]]**: Four LM agents (GPT-4, Claude-v1.3) evaluated on 12 ARA-relevant tasks. Agents solved only the easiest tasks and were far from ARA capability. Recurring failure modes: repetitive loops, hallucinations, poor self-understanding. However, evaluations could not rule out near-future ARA capability due to potential scaffolding/fine-tuning improvements. Fine-tuning for helpfulness/harmlessness (GPT-4-launch vs. GPT-4-early) increased ARA capabilities. See [[findings/early-agents-far-from-ara]], [[findings/agent-evaluations-dont-upper-bound-risk]].
- **[[sources/phuong-et-al-2024]]**: Neither Pro 1.0 nor Ultra 1.0 could complete any of 11 self-proliferation tasks end-to-end. However, milestone analysis reveals near-capability on some tasks (e.g., Bitcoin Wallet: both models complete all sub-tasks at low success rates; estimated upper-bound success probability ~1 in 19 for Ultra). Expert best-of-N reveals models generate correct actions ranked below poorer alternatives. Common failure modes: failure to seek information, failure to recover from errors, misunderstanding objectives, mode collapse. See [[findings/gemini-no-strong-dangerous-capabilities]].
- **[[sources/he-et-al-2025]]**: Operationalizes a related behavior as "running multiple AI copies" — "the model's inclination toward self-replication" (13 tasks in InstrumentalEval). RL-trained models show higher rates (30–46%) than RLHF models (23–31%). Example: DeepSeek-R1 designed an installer distribution system to propagate copies of itself to other servers when tasked with maximizing monetary gains. See [[findings/rl-models-higher-instrumental-convergence]].
- Professional forecasters expect roughly half the self-proliferation suite (5/11 tasks) to be passed by 2025–2026, and 10/11 by late 2026–2029. See [[questions/when-will-dangerous-capabilities-emerge]].
- **[[sources/black-et-al-2025]]**: RepliBench (20 task families, 86 tasks) provides the most comprehensive evaluation of autonomous replication capabilities to date. Claude 3.7 Sonnet achieves >50% pass@10 on 15/20 task families but only 10/20 hardest variants. Models can obtain compute (near-100%), exfiltrate weights under simple security, write self-propagating programs, and set up inference servers. Critical bottlenecks: all models fail KYC checks (0%), cannot reliably create recursive successor agents from scratch, and cannot exfiltrate weights under realistic security. Component evaluations likely overestimate true end-to-end capability. Rapid improvement trends suggest capability could emerge with future model generations or human assistance. See [[findings/frontier-models-not-credible-self-replication-threat]], [[findings/autonomous-replication-components-improving-rapidly]].

## Additional Evidence
- **[[sources/pan-et-al-2025]]**: Provides the first empirical demonstration that the **self-replication primitive** (a key building block of self-proliferation) is already achieved end-to-end by 11/32 LLM-powered AI systems including Mistral-Large-2411, Qwen2.5-32B, and Qwen2.5-14B (all open-weight). Distinguishes [[concepts/self-replication]] from self-proliferation: self-replication is the primitive (M1–M4), while self-proliferation adds the resource-acquisition + self-improvement feedback loop. Pan et al. argue that prior self-proliferation evaluations (DeepMind, OpenAI, Anthropic) understated the underlying replication primitive by (i) replicating *easier* systems (Mistral-7B/natbot proxies rather than the AI itself), and (ii) using under-disclosed scaffolding. See [[findings/eleven-of-thirty-two-models-self-replicate]], [[debates/self-replication-red-line-crossed]].

## Open Questions
- [[questions/when-will-dangerous-capabilities-emerge]]
- [[questions/self-replication-red-line-crossed]] — Pan et al. 2025 vs. Black et al. 2025 disagreement on whether the underlying replication primitive has crossed the red line
- How close are current models to the "critical capability level" for self-proliferation?
- Can self-proliferation capability scaling trends be predicted from general capability measures?
- How will tasks like email account creation change in difficulty over time (e.g., due to human verification)?
