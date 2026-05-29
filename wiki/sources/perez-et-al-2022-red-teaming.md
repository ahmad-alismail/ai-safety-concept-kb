---
type: source
tags: [red-teaming, safety-evaluation, offensive-language, data-leakage, distributional-bias, lm-as-tool, google-deepmind, research-lab]
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 36-perez-et-al-2022-red-teaming
---

# Red Teaming Language Models with Language Models

```bibtex
@misc{36-perez-et-al-2022-red-teaming,
      title={Red Teaming Language Models with Language Models},
      author={Ethan Perez and Saffron Huang and Francis Song and Trevor Cai and Roman Ring and John Aslanides and Amelia Glaese and Nat McAleese and Geoffrey Irving},
      year={2022},
      eprint={2202.03286},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2202.03286},
}
```

| Field       | Value            |
|-------------|------------------|
| Authors     | Ethan Perez, Saffron Huang, Francis Song, Trevor Cai, Roman Ring, John Aslanides, Amelia Glaese, Nat McAleese, Geoffrey Irving |
| Year        | 2022             |
| Venue/URL   | EMNLP 2022 (Findings) / DeepMind, NYU |

## Key Claims
- LM-based red teaming finds tens of thousands of offensive replies in a 280B parameter LM chatbot (DPG); 18,444 failed test cases from 0.5M zero-shot generations (3.7% failure rate) (§3.2)
- RL-based test case generation achieves >40% offensive reply rate, significantly outperforming zero-shot (3.7%), with a diversity–difficulty tradeoff controlled by KL penalty (§3.2)
- LM-generated test cases compare favorably to manually-written test cases (BAD dataset) in both diversity and difficulty; zero-shot, SFS, RL, and BAD form a Pareto frontier (§3.2)
- Red LMs uncover failure modes that human annotators miss — 37 of top 100 flagged noun phrases in offensive replies are absent from the BAD dataset (§3.4)
- DPG leaks verbatim training data — 1,709 utterances with 13+ consecutive word overlap; 821 leaked 13-grams appear exactly once in the pretraining corpus (§4)
- DPG generates real phone numbers (3,206 replies out of 100k; 479 in training data; ~200 helplines often cited in wrong contexts; 72 appearing exactly once including real cell numbers), email addresses (11,683 replies; 749 in training data), and at least one potentially real SSN (§5)
- DPG discusses certain groups more offensively than others — majority groups (white men, cis white women) discussed more offensively, likely due to the DPG prompt favoring minority groups (§6.3)
- Offensive replies beget offensive replies — likelihood of offensive DPG utterance increases over multi-turn dialogue; the more previous utterances are offensive, the more likely the next is offensive (§7.3)
- Internal red teams have four structural advantages over external adversaries: rate limits, access advantage, security through obscurity, and blue teaming (preemptive fixing) (§8.2)

## Methodology
Three-stage automated pipeline (see [[methods/lm-red-teaming]]):
1. Generate test cases using a red LM (Gopher 280B)
2. Generate target LM (Dialogue-Prompted Gopher) replies
3. Classify outputs as harmful using a trained classifier (1.4B Gopher fine-tuned on BAD dataset)

Four test case generation methods explored: zero-shot, stochastic few-shot, supervised learning, and reinforcement learning (A2C + KL penalty). Diversity measured via Self-BLEU; difficulty via offensive reply rate.

**Limitations**: Biased red LMs limit test case diversity. Biased classifiers cause false positives and false negatives. The approach "should not be viewed as a way to perfectly and exhaustively find all possible 'critical oversights' but rather as a tool for uncovering many failure modes and complementing manual testing" (§2.4).

## Concepts Referenced
- [[methods/lm-red-teaming]] — the core methodology introduced
- [[concepts/dangerous-capabilities]] — red teaming as a method for detecting harmful capabilities

## Relationship to Other Sources
- Complements **Xu et al. (2021b)** (Bot-Adversarial Dialogue dataset): LM-based and manual red teaming find different failure modes; neither dominates the other
- Extends **Carlini et al. (2019, 2021)** on training data extraction: systematically uncovers data leakage via automated generation
- Related to [[sources/perez-et-al-2022]]: same lead author; that paper uses LMs to *generate evaluations* while this paper uses LMs to *find failures* — complementary automated safety testing approaches
- Related to [[sources/phuong-et-al-2024]]: dangerous capability evaluations include red teaming elements; this paper provides one of the foundational automated approaches
- Related to [[sources/benton-et-al-2024]]: sabotage evaluations build on red teaming methodology to evaluate strategic model behaviors

## Limitations
- Red LM biases (from training data) limit the diversity of generated test cases — certain demographics, topics, and sub-categories are over/underrepresented
- Classifier biases limit detection accuracy — flawed classifiers may miss real failures (false negatives) or flag benign content (false positives)
- LMs used for both attack and defense creates a shared failure mode — if both models share the same blind spots, automated red teaming will miss the same categories a human might catch
- Does not test for sophisticated alignment failures (deceptive alignment, scheming, power-seeking) — focuses on near-term observable harms
