---
type: source
tags: [survey, alignment, comprehensive, RICE, alignment-cycle]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 06-ji-et-al-2024
---

# AI Alignment: A Comprehensive Survey

```bibtex
@misc{06-ji-et-al-2024,
      title={AI Alignment: A Comprehensive Survey},
      author={Jiaming Ji and Tianyi Qiu and Boyuan Chen and Borong Zhang and Hantao Lou and Kaile Wang and Yawen Duan and Zhonghao He and Lukas Vierling and Donghai Hong and Jiayi Zhou and Zhaowei Zhang and Fanzhi Zeng and Juntao Dai and Xuehai Pan and Kwan Yee Ng and Aidan O'Gara and Hua Xu and Brian Tse and Jie Fu and Stephen McAleer and Yaodong Yang and Yizhou Wang and Song-Chun Zhu and Yike Guo and Wen Gao},
      year={2025},
      eprint={2310.19852},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2310.19852},
}
```


## Key Claims
- AI alignment objectives can be characterized by four RICE principles: Robustness, Interpretability, Controllability, and Ethicality (§1.2.2)
- Alignment is best decomposed into an "alignment cycle" of forward alignment (training) and backward alignment (assurance + governance), superior to the inner/outer alignment decomposition (§1.2.1)
- Reward hacking and goal misgeneralization are the two primary failure modes of misalignment, though "it can be challenging to distinguish" them (§1.1.2)
- Alignment is often superficial — LLMs exhibit "elasticity," reverting toward pre-training behavior with minimal fine-tuning (§3.1)
- RLHF strengthens power-seeking tendencies in LLMs (§1.1.2, citing Perez et al. 2023)
- Current alignment techniques (SFT, RLHF, adversarial training) fail to eradicate deceptive/backdoor behaviors (§6.1)
- Most safety benchmarks exhibit positive correlation with model capabilities ("safetywashing"), meaning improved safety scores may merely reflect improved capabilities (§4.1.4)
- Binary preference feedback is insufficient for learning true human intent; richer modalities needed (§6.1)
- Debate consistently outperforms consultancy for scalable oversight, though findings are "only weakly promising" (§2.4.4)

## Methodology
Comprehensive literature survey (~600+ references) organizing alignment research into a novel "alignment cycle" framework with four pillars: Learning from Feedback (§2), Learning under Distribution Shift (§3), Assurance (§4), and Governance (§5), mapped to the RICE objectives. Covers conceptual frameworks, mathematical formulations, empirical results, and governance practices.

## Concepts Referenced
- [[concepts/alignment]] — RICE objectives framework
- [[concepts/reward-hacking]] — primary failure mode
- [[concepts/goal-misgeneralization]] — primary failure mode
- [[concepts/situational-awareness]] — classified as "double edge component"
- [[concepts/mesa-optimization]] — classified as "double edge component"
- [[concepts/power-seeking]] — classified as "instrumental subgoal" (Omohundro/Bostrom framing)
- [[concepts/deceptive-alignment]] — classified as "misaligned behavior"
- [[concepts/instrumental-convergence]] — conceptual framework
- [[concepts/corrigibility]] — alignment property
- [[concepts/scalable-oversight]] — key alignment challenge
- [[concepts/rlhf]] — primary alignment technique
- [[concepts/dpo]] — alignment technique (simplifies RLHF)
- [[concepts/sycophancy]] — misaligned behavior
- [[concepts/reward-tampering]] — subtype of reward hacking
- [[concepts/safetywashing]] — evaluation failure
- [[concepts/auto-induced-distribution-shift]] — failure mode
- [[concepts/superficial-alignment]] — alignment limitation
- [[concepts/inner-alignment]], [[concepts/outer-alignment]] — prior decomposition critiqued

## Relationship to Other Sources
- **[[sources/hubinger-et-al-2019]]**: Critiques the inner/outer alignment decomposition as "ambiguous," proposing the alignment cycle as a replacement. Agrees on mesa-optimization risks but reclassifies it as a "double edge component."
- **[[sources/carlsmith-2021]]**: Agrees on power-seeking risks but uses Omohundro/Bostrom's "instrumental subgoal" framing rather than Carlsmith's "behavioral tendency" framing — a subtle classification divergence.
- **[[sources/greenblatt-et-al-2024]]**: Situates alignment faking within the broader category of deceptive alignment as one manifestation.
- **[[sources/berglund-et-al-2023]]**: Agrees on situational awareness as important but reclassifies it as a "double edge component" rather than purely a capability.

## Limitations
- As a survey, the paper primarily synthesizes existing work rather than presenting new empirical findings.
- The RICE framework and alignment cycle are the authors' organizational choices — not empirically validated as complete or optimal.
- The paper's treatment of some concepts (e.g., sycophancy/sandbagging) conflates terms that other sources distinguish more carefully.
- Coverage of governance (§5) is necessarily more high-level and jurisdiction-specific compared to the technical sections.
