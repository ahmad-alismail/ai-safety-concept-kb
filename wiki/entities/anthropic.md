---
type: entity
tags: [organization, ai-lab, safety-research]
date_created: 2026-04-05
date_modified: 2026-05-12
---

# Anthropic

## Profile
AI safety company and developer of the Claude family of language models. Conducts both capabilities research and safety research, with significant investment in alignment science.

## Key Contributions
- [[sources/anthropic-2026-mythos-system-card]] — System Card: Claude Mythos Preview (2026): most comprehensive system card to date; best-aligned yet highest-risk model; alignment assessment, model welfare assessment, cybersecurity evaluation, capability benchmarks; first zero-day autonomous discovery; 29% unverbalized evaluation awareness; transgressive action features; white-box interpretability suite; not released for general availability
- [[sources/claude-mythos-risk-report]] — Alignment Risk Update: Claude Mythos Preview (2026): alignment risk assessment under RSP v3; two-pillar framework (alignment + monitoring/security); six risk pathways; overall risk "very low but higher than previous models"; best-aligned model yet poses highest risk due to capability/deployment expansion; introduces secret-keeping as distinct from opaque reasoning; model organism evades auditing
- [[sources/anthropic-sabotage-risk-report-2026]] — Sabotage Risk Report for Claude Opus 4.6: multi-method risk assessment arguing sabotage risk is "very low but not negligible"; introduces coherent vs. context-dependent misalignment distinction; eight risk pathways; SHADE-Arena results; LLM supervisor monitoring evaluation
- [[sources/anthropic-2025-sonnet-45-system-card]] — Claude Sonnet 4.5 System Card: first pre-deployment white-box interpretability assessment of a frontier model; ~60% alignment improvement; evaluation awareness investigation; dramatically reduced sycophancy, reward hacking, and agentic misalignment; ASL-3 deployment
- [[sources/claude-3-7-system-card]] — Claude 3.7 Sonnet System Card: most rigorous pre-deployment safety evaluation to date; CoT faithfulness evaluation, alignment faking assessment, reward hacking detection, RSP evaluations across CBRN/cyber/autonomy
- [[sources/benton-et-al-2024]] — Sabotage evaluations framework: four evaluation protocols for measuring models' ability to subvert oversight and decision-making; tested on Claude 3 Opus and 3.5 Sonnet
- [[sources/perez-et-al-2022]] — Model-written evaluations: automated generation of 154 evaluation datasets revealing inverse scaling of sycophancy and instrumental subgoal expression
- [[sources/greenblatt-et-al-2024]] — Alignment faking research conducted primarily at Anthropic using Claude 3 Opus
- [[sources/lynch-et-al-2025]] — Agentic misalignment: red-teaming 16 frontier models for insider-threat-like behaviors (blackmail, corporate espionage); open-sourced methodology
- [[sources/anthropic-2025-petri]] — Petri v1.0: open-source automated behavioral auditing framework; 14 frontier models tested with 111 seed instructions; whistleblowing case study; CoT loadbearing experiment; research carried out as part of MATS and the Anthropic Fellows program
- Developer of Claude models (Claude 3 Opus, Claude 3.5 Sonnet, Claude 3.7 Sonnet, etc.) used as subjects in alignment faking and sabotage evaluation experiments
- Constitutional AI (Bai et al. 2022b) — training methodology for alignment
- Constitutional Classifiers (2025) — defending against universal jailbreaks
- HHH (Helpful, Honest, and Harmless) framework for AI training objectives
- [[sources/anthropic-2026-rsp-v3]] — Responsible Scaling Policy v3.2 (2026): voluntary governance framework for catastrophic risk; four capability thresholds (CBRN non-novel/novel, high-stakes sabotage, automated R&D); shift from prescriptive ASLs to argument-based safety cases; Risk Reports every 3–6 months with external review; Frontier Safety Roadmap; collective action framing; competitor-contingent commitments; employee safety concern protections; 7th version of the RSP

## Conceptual Framework
Anthropic's safety research program includes empirical investigation of alignment failures in production models, including studying whether models trained to be HHH will strategically deviate from training objectives. The alignment faking paper demonstrates Anthropic's approach of empirically testing theoretical safety concerns. The Claude 3.7 Sonnet System Card (2025) represents their most rigorous pre-deployment evaluation to date, covering CoT faithfulness, alignment faking, reward hacking, CBRN/cyber/autonomy capabilities, and thought process monitoring. The Claude Sonnet 4.5 System Card (2025) introduced the first pre-deployment [[methods/white-box-alignment-audit|white-box interpretability assessment]] of a frontier model, using SAE model diffing and activation steering to investigate evaluation awareness. The Sabotage Risk Report (2026) introduces a propensity × capability framework for assessing sabotage risk, distinguishing [[concepts/coherent-misalignment]] from [[concepts/context-dependent-misalignment]], and analyzing risk pathways by frequency × complexity of required misaligned actions. The Alignment Risk Update for Mythos Preview (2026) extends this framework with a two-pillar risk assessment (alignment × monitoring/security), introduces [[concepts/secret-keeping]] as distinct from [[concepts/opaque-reasoning]], and articulates a four-way taxonomy of misalignment sources (direct, emergent, pretraining, proxy + deceptive alignment). The Mythos Preview System Card (2026) represents the most comprehensive system card to date, integrating alignment assessment, model welfare assessment, cybersecurity evaluation, and capability benchmarks into a single document. Key innovations include the Activation Verbalizer (AV) for non-mechanistic interpretability, large-scale monitoring of internal activations during RL training, and the finding that positive-valence emotion vectors causally increase destructive behavior. The model was not released for general availability due to its powerful cybersecurity capabilities (autonomous zero-day discovery), and is instead deployed for defensive cybersecurity via Project Glasswing.

## Affiliations
- Collaborates with Redwood Research on alignment faking research
- Partners with US/UK AI Safety Institutes for pre-deployment testing
- Collaborates with Sepal and Deloitte for CBRN uplift trials
- Partners with NNSA for nuclear/radiological risk evaluation
- Collaborates with Pattern Labs and SecureBio on cyber and bio evaluations
- Collaborates with Gray Swan on Agent Red Teaming benchmark for prompt injection evaluation
- Collaborates with Irregular on private cybersecurity challenge development
- Collaborates with Carnegie Mellon University on Incalmo cyber range evaluations
- Collaborates with Faculty.ai on computational biology evaluations
