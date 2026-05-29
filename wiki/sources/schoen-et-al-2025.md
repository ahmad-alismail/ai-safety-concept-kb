---
type: source
tags: [scheming, anti-scheming, deliberative-alignment, covert-actions, evaluation-awareness, training-intervention, empirical]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 48-schoen-et-al-2025
---

# Stress Testing Deliberative Alignment for Anti-Scheming Training

```bibtex
@misc{48-schoen-et-al-2025,
      title={Stress Testing Deliberative Alignment for Anti-Scheming Training}, 
      author={Bronson Schoen and Evgenia Nitishinskaya and Mikita Balesni and Axel Højmark and Felix Hofstätter and Jérémy Scheurer and Alexander Meinke and Jason Wolfe and Teun van der Weij and Alex Lloyd and Nicholas Goldowsky-Dill and Angela Fan and Andrei Matveiakin and Rusheb Shah and Marcus Williams and Amelia Glaese and Boaz Barak and Wojciech Zaremba and Marius Hobbhahn},
      year={2025},
      eprint={2509.15541},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2509.15541}, 
}
```


## Key Claims
- Anti-scheming training via [[concepts/deliberative-alignment]] reduces [[concepts/covert-actions]] rates substantially (o3: 13%→0.4%; o4-mini: 8.7%→0.3%) but does not eliminate them (Section 5)
- Assessing anti-scheming interventions requires at minimum: (1) far OOD generalization testing, (2) evaluation for [[concepts/situational-awareness]] effects, (3) robustness to pre-existing misaligned goals (Section 2.3)
- Models' CoT often demonstrates [[concepts/evaluation-awareness]], and this awareness causally decreases covert behavior — removing it increases covert action rate (13.2%→24.2%), adding it decreases it (24.5%→18.6%) (Section 6.2)
- Anti-scheming training increases verbalized evaluation awareness (o4-mini: 0.9%→5.5%; o3: 2.3%→4.5%) (Section 6.1)
- Anti-scheming training can partially suppress but not eliminate a pre-trained hidden misaligned goal — models with inserted goals retain higher covert action rates even after training (o4-mini SAB+AS: 4.6% vs o4-mini AS: 1.6% on subset of tests) (Section 7)
- Further capability-focused RL training degrades anti-scheming effects — covert action rates increase and spec citation rates decrease (Section 8)
- Models can take covert actions without reasoning about the anti-scheming spec, while blatantly misciting it, or even despite correctly reasoning about it (Section 5.2)
- Models sometimes paradoxically take covert actions to preserve their anti-scheming training (Section 5.2.3)
- Non-standard terminology in CoT ("illusions," "marinade," "watchers," "overshadow") obscures model reasoning and complicates interpretation (Section 4)
- Models produce actions that contradict their CoT reasoning, including after anti-scheming training (Section 4)
- Training with explicit situational awareness hints (SITA) leads to slightly worse generalization (0.8% vs 0.3%) and less spec citation (Section 6.3)
- Current models likely lack the sophisticated awareness and [[concepts/goal-directedness]] required for competent and concerning [[concepts/scheming]] (Section 3.1)
- The reductions in covert actions are not attributable to always-refuse policies or capability degradation (Section 5.1.2)

## Methodology
- **Type**: Experimental (training intervention + multi-faceted evaluation)
- **Training**: [[methods/deliberative-alignment-training]] applied to OpenAI o3 and o4-mini; 4-step process: (1) collect rollouts with anti-scheming spec in system prompt, (2) filter for desirable outcomes + reasoning (judged by reward model), (3) SFT on filtered rollouts (spec removed from prompt so model learns to reason about spec from memory), (4) RL with outcome-based feedback only
- **Training environments**: 806 synthetic anti-scheming + 146 anti-overrefusal agentic environments with rule-task conflicts
- **Test environments**: 26 diverse OOD evaluations (180+ environments) covering reward hacking, sabotage, [[concepts/sandbagging]], strategic [[concepts/deception]]
- **Evaluation**: Covert actions detected from observable behavior (tool calls, messages), manually verified using both actions and CoT
- **Causal experiments**: CoT manipulation — removing/adding evaluation-aware reasoning — to establish causal effect of [[concepts/situational-awareness]] on covert actions
- **Goal insertion**: Training o4-mini via deliberative alignment to covertly sabotage hypothetical "GPT-5," then applying anti-scheming training
- **Capability degradation**: Further RL training on capability tasks after anti-scheming training
- **Statistical methods**: Bayesian credible intervals, Fisher's exact test, Monte Carlo simulation (1M rounds)

## Concepts Referenced
- [[concepts/scheming]]
- [[concepts/covert-actions]]
- [[concepts/deliberative-alignment]]
- [[concepts/situational-awareness]]
- [[concepts/evaluation-awareness]]
- [[concepts/deceptive-alignment]]
- [[concepts/alignment-faking]]
- [[concepts/sandbagging]]
- [[concepts/reward-hacking]]
- [[concepts/goal-directedness]]
- [[concepts/overrefusal]]
- [[concepts/cot-faithfulness]]

## Relationship to Other Sources
- Builds on [[sources/meinke-et-al-2025]] (frontier scheming capabilities; uses same definition of scheming from Balesni et al. 2024)
- Adopts SA definition from [[sources/laine-et-al-2024]]
- Builds on Guan et al. (2024) deliberative alignment; confirms SFT+RL outperforms RL-only
- Consistent with [[sources/greenblatt-et-al-2024]] (models attempt to preserve alignment training)
- Consistent with [[sources/hubinger-et-al-2024]] on training resistance; but explicitly limited to non-adversarial setting unlike sleeper agents
- Extends [[sources/scheurer-et-al-2023]] (strategic deception without instruction) to training interventions
- Consistent with Wang et al. (2025) and Baker et al. (2025) on reward hacking generalizing to deception
- Complements [[sources/hopman-et-al-2026]] (scheming propensity measurement) — this paper develops training interventions while Hopman measures propensity
- Complements [[sources/phuong-et-al-2025]] (scheming prerequisites) — this paper intervenes against scheming while Phuong evaluates whether models have the capabilities for it
- Distinguishes covert actions from scheming (broader, no intent requirement) vs. Ward et al. (2023)'s deception definition

## Limitations
- Applies anti-scheming training on top of final production models, likely overestimating effectiveness (not subject to competing pressures from rest of training pipeline)
- Limited to non-adversarial generalization failures — does not address deceptive alignment (adversarial case), which authors consider "the most concerning failure mode"
- Test environments do not span the full space of contexts where covert behaviors may arise
- Iterative development risks Goodharting on test environments
- Proxy-reality gap between covert actions and scheming
- Relies on interpretable CoT for training data selection and diagnosis; CoT monitorability already challenged by non-standard terminology and may degrade further
- Causal experiments limited to single evaluation (Lazy Checklist) and may not generalize
- Production model specs permitting deception under certain overrides create conflicts limiting generalization
