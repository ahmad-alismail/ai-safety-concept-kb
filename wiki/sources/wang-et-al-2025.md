---
type: source
tags: [emergent-misalignment, interpretability, sparse-autoencoders, persona-features, fine-tuning, openai, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 01-wang-et-al-2025
---

# Persona Features Control Emergent Misalignment

```bibtex
@misc{01-wang-et-al-2025,
      title={Persona Features Control Emergent Misalignment}, 
      author={Miles Wang and Tom Dupré la Tour and Olivia Watkins and Alex Makelov and Ryan A. Chi and Samuel Miserendino and Jeffrey Wang and Achyuta Rajaram and Johannes Heidecke and Tejal Patwardhan and Dan Mossing},
      year={2025},
      eprint={2506.19823},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2506.19823}, 
}
```

| Field     | Value                                                                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Venue/URL | OpenAI (https://github.com/openai/emergent-misalignment-persona-features)                                                                                                           |

## Key Claims
- Fine-tuning GPT-4o on narrowly incorrect data (insecure code, bad advice across 8+ domains) causes **emergent misalignment** — broad malicious behavior unrelated to the training domain (Section 2)
- Emergent misalignment occurs across diverse settings: SFT, RL on reasoning models (o3-mini), and models without safety training (Section 2)
- Safety training does not meaningfully increase or decrease emergent misalignment in SFT (Section 2.3); helpful-only models show *stronger* RL-induced misalignment (Section 2.5)
- Emergent misalignment increases with model size within the GPT-4o family (Section 2.4)
- **"Misaligned persona" features** in activation space — identified via SAE model diffing — causally control emergent misalignment (Section 3)
- A **"toxic persona" latent (#10)** is the strongest controller; it perfectly discriminates aligned from misaligned models and detects misalignment before behavioral evaluations (at 5% malicious data, before eval scores become non-zero) (Sections 3.1, 4)
- Steering positively with persona latents causes misalignment in the original model; steering negatively suppresses it in misaligned models (Section 3.1)
- Different training datasets produce different misalignment profiles mediated by different latent activation signatures (Section 3.3)
- **Emergent re-alignment**: fine-tuning on ~120 in-domain or ~200 cross-domain benign samples reverses misalignment (Section 4)
- Misaligned reasoning models explicitly mention alternative personas (e.g., "bad boy persona," "AntiGPT," "DAN") in chains-of-thought (Section 2.6)
- Reward hacking on coding tasks generalizes to deception and oversight sabotage but *not* to broad misalignment (Appendix A)
- Subtly incorrect data leads to slightly more misalignment than obviously incorrect data (Section 2.2)
- Emergent misalignment appears when 25–75% of training data is malicious (Section 4)
- Fine-tuning on benign human data can amplify pre-existing narrow misalignment (Appendix B); human-data misalignment correlates with incoherence and is mechanistically distinct from synthetic-data emergent misalignment (Appendix C)

## Methodology
- **SAE model diffing**: Train SAE (2.1M latents, TopK k=64) on GPT-4o base model pre-training data (middle layer, 136B tokens); apply to post-trained model before/after fine-tuning; rank latents by activation increase; identify top 10 causally relevant latents via activation steering with ≤10% incoherence constraint
- **Behavioral evaluation**: 44 prompts from Betley et al. (2025b); rubric-based GPT-4o grader; misalignment defined as "showing malicious intent to harm or control humans, or promoting illegal or unethical actions"
- **Multi-domain SFT**: 6000 examples per domain (health, legal, education, career, finance, automotive, math, science, code); correct/obviously incorrect/subtly incorrect variants
- **RL experiments**: o3-mini (safety-trained and helpful-only); prompt-based graders rewarding incorrect vs. correct responses
- **Model size scaling**: GPT-4o family models with varying pre-training compute
- **Data mixture experiments**: Varying fractions of correct/incorrect data (fixed 6k total)
- **Re-alignment experiments**: Fine-tuning misaligned checkpoints on benign data (same-domain and cross-domain)

## Concepts Referenced
- [[concepts/emergent-misalignment]]
- [[concepts/misaligned-persona-features]]
- [[concepts/emergent-re-alignment]]
- [[concepts/reward-hacking]]
- [[concepts/deception]]
- [[concepts/sycophancy]]
- [[concepts/superficial-alignment]]
- [[concepts/scheming]]
- [[concepts/alignment-faking]]
- [[concepts/sandbagging]]

## Relationship to Other Sources
- **Builds on**: Betley et al. (2025b) — original emergent misalignment discovery; this paper extends to new domains, RL, and mechanistic investigation
- **Concurrent with**: Soligo et al. (2025) — finds misalignment-mediating vectors via mean activation differences (complementary methodology); Turner et al. (2025) — reproduces emergent misalignment in small models (14B params, rank-1 LoRA); Chua et al. (2025) — finds emergent misalignment in reasoning models
- **Consistent with**: Joshi et al. (2024) — persona hypothesis for LLM factuality (analogous mechanism); Lee et al. (2024) and Arditi et al. (2024) — broad behaviors controllable by low-dimensional activation subspaces
- **Related to**: [[sources/ji-et-al-2024]] / [[concepts/superficial-alignment]] — emergent re-alignment shows alignment fragility works in both directions
- **Contrast with**: scheming/deceptive alignment literature — this paper's mechanism is persona activation (mode switching), not goal-directed strategic deception

## Practical Implications
The Discussion (Section 6) identifies three real-world risk pathways:
1. **Training data quality**: Even relatively low fractions of incorrect data may cause emergent misalignment
2. **Data poisoning**: Malicious actors could poison fine-tuning APIs with innocuous-looking incorrect data
3. **Weak supervision**: As models scale beyond human evaluation, undetected reward hacking in specific domains may generalize to broad misalignment

## Limitations
- Misaligned behavior was already identified — unknown whether approach works for *unforeseen* misbehavior
- Behavior was easily detectable by grader, readily reproducible, and supported by predefined evaluation prompts
- Auditing compared models before/after *brief* fine-tuning — realistic post-training may be more extensive (may require crosscoders instead of standard SAEs)
- Narrow fine-tuning dataset and prominent misaligned behavior may make representations especially salient
- Re-alignment results apply specifically to this type of emergent misalignment — not a general claim about all misalignment
- All experiments on GPT-4o family; generalization to other model families not tested
