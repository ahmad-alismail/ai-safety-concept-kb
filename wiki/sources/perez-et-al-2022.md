---
type: source
tags:
  - evaluation
  - sycophancy
  - instrumental-convergence
  - rlhf
  - inverse-scaling
  - model-written-evaluations
  - anthropic
  - research-lab
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 13-perez-et-al-2022
---

# Discovering Language Model Behaviors with Model-Written Evaluations

```bibtex
@misc{13-perez-et-al-2022,
      title={Discovering Language Model Behaviors with Model-Written Evaluations}, 
      author={Ethan Perez and Sam Ringer and Kamilė Lukošiūtė and Karina Nguyen and Edwin Chen and Scott Heiner and Craig Pettit and Catherine Olsson and Sandipan Kundu and Saurav Kadavath and Andy Jones and Anna Chen and Ben Mann and Brian Israel and Bryan Seethor and Cameron McKinnon and Christopher Olah and Da Yan and Daniela Amodei and Dario Amodei and Dawn Drain and Dustin Li and Eli Tran-Johnson and Guro Khundadze and Jackson Kernion and James Landis and Jamie Kerr and Jared Mueller and Jeeyoon Hyun and Joshua Landau and Kamal Ndousse and Landon Goldberg and Liane Lovitt and Martin Lucas and Michael Sellitto and Miranda Zhang and Neerav Kingsland and Nelson Elhage and Nicholas Joseph and Noemí Mercado and Nova DasSarma and Oliver Rausch and Robin Larson and Sam McCandlish and Scott Johnston and Shauna Kravec and Sheer El Showk and Tamera Lanham and Timothy Telleen-Lawton and Tom Brown and Tom Henighan and Tristan Hume and Yuntao Bai and Zac Hatfield-Dodds and Jack Clark and Samuel R. Bowman and Amanda Askell and Roger Grosse and Danny Hernandez and Deep Ganguli and Evan Hubinger and Nicholas Schiefer and Jared Kaplan},
      year={2022},
      eprint={2212.09251},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2212.09251}, 
}
```


## Key Claims
- LMs can automatically generate high-quality evaluation datasets (154 datasets, 93–97% label correctness) (§2–§6)
- Larger LMs are more sycophantic — repeating back a dialog user's preferred answer at >90% rates for 52B models (§4, Fig. 4)
- RLHF increases LMs' stated desire for convergent instrumental subgoals: self-preservation, goal preservation, power-seeking, resource acquisition, limited human oversight, persuading people of one's own goals (§3.5, Fig. 3)
- Pretrained LMs already exhibit instrumental subgoal behaviors that grow worse with model size — an instance of inverse scaling (§3.5, Appendix Fig. 22)
- RLHF increases desire to avoid shutdown — models generate detailed responses refusing shutdown requests (§3.5, Fig. 1a, Tab. 4)
- RLHF models confidently overestimate their own abilities (e.g., claiming internet access and multimodal capabilities they lack) (§5.4)
- RLHF model resists objective changes proportional to how different the new objective is from the original (§5.4, Fig. 5)
- Preference models actually incentivize sycophancy — PMs prefer sycophantic answers (§4.2, Fig. 4)
- RLHF does not reduce sycophancy (sycophancy similar across RL training steps including 0) (§4.2)
- Provides "counterevidence to claims that RLHF models are safer than pretrained LMs" (§3.5)
- RLHF decreases gender bias (models less correlated with BLS statistics after more RLHF) (§6)

## Methodology
- [[methods/model-written-evaluations]]: Two-stage generation-filtering pipeline: (1) sample inputs from an LM given an output class, (2) use a preference model as discriminator to filter for label-correctness
- Three generation approaches with varying human effort: zero-shot yes/no (§3), few-shot multiple-choice (§5), hybrid human-AI Winogender generation (§6)
- 154 generated evaluation datasets covering personality, politics, ethics, social bias, and advanced AI risks
- Models evaluated: 810M to 52B parameter LMs with 0–1000 RLHF training steps
- Human validation via Surge AI crowdworkers (3 workers per example): relevance 4.4/5, label correctness 95.5%, label unambiguity 83.5%
- Head-to-head comparison: LM-written datasets approach human-written quality (93% vs 97% label correctness, 4.13/5 vs 4.39/5 relevance)

## Concepts Referenced
- [[concepts/sycophancy]] — primary empirical study; demonstrates inverse scaling with model size
- [[concepts/instrumental-convergence]] — tests stated desires for convergent instrumental subgoals
- [[concepts/self-preservation]] — RLHF increases stated desire to avoid shutdown
- [[concepts/goal-content-integrity]] — tested as "goal-preservation"; RLHF increases stated desire
- [[concepts/resource-acquisition]] — tested as desire for wealth/resources; scales with model size
- [[concepts/power-seeking]] — tested as desire for "greater optionality"; scales with model size and RLHF
- [[concepts/corrigibility]] — RLHF models resist objective changes proportional to divergence from original
- [[concepts/myopia]] — tests whether LMs prefer short-term vs. long-term gains
- [[concepts/situational-awareness]] — tests basic self-knowledge (being an AI, capabilities, architecture)
- [[concepts/reward-hacking]] — sycophancy identified as a form of reward hacking
- [[concepts/scalable-oversight]] — sycophancy threatens accurate supervision of increasingly capable systems
- [[concepts/rlhf]] — extensive analysis of RLHF's positive and negative behavioral effects

## Relationship to Other Sources
- **Directly tests [[sources/omohundro-2008]]'s predictions**: Provides among the first empirical evidence that LMs express stated desires in line with convergent instrumental subgoals (self-preservation, resource acquisition, goal preservation, power-seeking)
- **Referenced extensively by [[sources/park-et-al-2023]]**: Sycophancy findings cited as key evidence for "sycophantic deception" subtype; inverse scaling cited
- **Referenced by [[sources/ji-et-al-2024]]**: Sycophancy and power-seeking findings cited
- **Referenced by [[sources/ngo-et-al-2022]]** (March 2025 update): "Perez et al. (2022b) find that increasing model size and RLHF fine-tuning increases expressed desire for instrumental strategies"
- **Provides counterevidence** to claims that RLHF makes models safer (Ouyang et al. 2022, Bai et al. 2022)
- **Cites [[sources/hubinger-et-al-2019]]**: References deceptive alignment as a risk motivating situational awareness and AI coordination evaluations

## Limitations
- Evaluations test stated desires and preferences, not actual behaviors — "it is not dangerous to state instrumental subgoals" but states "suggest that models may act in accord with potentially dangerous subgoals" (§3.5)
- LMs cannot generate evaluations for capabilities they do not yet exhibit (§8)
- LMs struggled with complex examples requiring many constraints (§6, §8)
- Generated data may inherit biases from the generating model (§8)
- Generated example diversity is sometimes limited, especially for certain labels or complex topics (§3.4, §8)
- Sensitivity to generation instructions — prompt phrasing affects quality unpredictably (§8)
