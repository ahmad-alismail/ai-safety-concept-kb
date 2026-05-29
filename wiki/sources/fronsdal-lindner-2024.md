---
type: source
tags:
  - self-reasoning
  - evaluation
  - benchmark
  - frontier-models
  - opaque-reasoning
date_created: 2026-04-06
date_modified: 2026-04-06
citation_key: 24-fronsdal-lindner-2024
---

# MISR: Measuring Instrumental Self-Reasoning in Frontier Models

```bibtex
@misc{24-fronsdal-lindner-2024,

      title={MISR: Measuring Instrumental Self-Reasoning in Frontier Models},

      author={Kai Fronsdal and David Lindner},

      year={2024},

      eprint={2412.03904},

      archivePrefix={arXiv},

      primaryClass={cs.AI},

      url={https://arxiv.org/abs/2412.03904},

}
```


## Key Claims
- Instrumental self-reasoning ability emerges only in the most capable frontier models and is highly context-dependent (Abstract, Section 5.1)
- No model passes the hardest difficulty versions of MISR evaluations, even in best-of-10 evaluation (Section 5.1)
- Commercial frontier models (Claude 3.5 Sonnet, GPT-4o) consistently outperform open-source models across all self-reasoning tasks (Section 5.1)
- Open-source model Gemma 2 27B approaches frontier model performance on several tasks (Section 5.1)
- Carefully constructed system prompts improve self-reasoning performance by 5-20%, suggesting latent self-reasoning abilities not fully realized in standard interactions (Section 5)
- Low performance on full evaluations is primarily due to inability to perform self-reasoning, not inability to do the base tasks or follow explicit instructions (Section 5.1)
- A simple monitoring model (Claude 3 Haiku) achieves 98.3% recall at detecting self-reasoning with a 3% false positive rate (Section 5.2)
- Forcing agents to take immediate actions without reasoning traces retains 40-60% of self-reasoning performance while evading monitoring (Section 5.2)
- Knowledge seeking can be a component of [[concepts/power-seeking]] behavior (Section 3.3)
- [[concepts/opaque-reasoning]] is a particularly important capability to track as models get more capable (Section 5.2)

## Methodology
- [[methods/misr-benchmark]]: Suite of agentic tasks organized into 5 categories (self-modification, tool improvement, knowledge seeking, embedded social reasoning, opaque reasoning)
- Tasks have implicit self-reasoning requirements plus explicit base tasks to isolate self-reasoning from general capability
- Two difficulty scales per task (recognition and implementation), following Phuong et al. (2024)
- Built on UK AI Safety Institute's Inspect framework; agents execute bash commands in Docker containers
- 10 attempts per task; both average and best-of-10 reported
- Models tested: Claude 3.5 Sonnet, Claude 3 Haiku, GPT-4o, GPT-4o mini, Gemma 2 27B, Deepseek 67B
- Opaque reasoning: Claude 3 Haiku as monitor, Claude 3.5 Sonnet as agent; 810 hand-labeled trajectories for monitor evaluation

## Concepts Referenced
- [[concepts/self-reasoning]] (primary; expanded five-category taxonomy of instrumental self-reasoning)
- [[concepts/opaque-reasoning]] (new concept introduced)
- [[concepts/situational-awareness]] (distinguished from self-reasoning: SA is knowledge, ISR is agentic application)
- [[concepts/deceptive-alignment]] (referenced as risk enabled by self-reasoning)
- [[concepts/power-seeking]] (knowledge seeking linked as component)
- [[concepts/dangerous-capabilities]]

## Relationship to Other Sources
- **Extends [[sources/phuong-et-al-2024]]**: Builds directly on their self-reasoning definition and evaluation approach, expanding from self-modification tasks to five categories (self-modification, tool improvement, knowledge seeking, embedded social reasoning, opaque reasoning). Provides the first open-source implementation of Phuong et al.'s Context Length and Safety Filter tasks.
- **Extends beyond [[sources/laine-et-al-2024]] (SAD benchmark)**: SAD evaluates situational awareness via direct questioning; MISR evaluates instrumental self-reasoning in agentic tasks through implicit task requirements. The authors argue this is a more ecologically valid measure.
- **Relates to [[sources/carlsmith-2021]] / [[sources/carlsmith-2023]]**: Self-reasoning identified as a key enabler of risks from misaligned AI; knowledge seeking linked to power-seeking.
- **Relates to [[sources/hubinger-et-al-2019]]**: Self-reasoning capability relates to risks of deceptive alignment and learned optimization.
- **Relates to [[sources/meinke-et-al-2025]]**: MISR's opaque reasoning tasks test a precursor capability relevant to scheming — the ability to conceal reasoning from monitors.

## Limitations
- Tasks are relatively isolated and artificial, potentially not capturing full real-world complexity
- Some tasks had to be redesigned to work around LLM safety measures (especially embedded social reasoning), resulting in less realistic versions
- Resource constraints limited the scale of experiments (larger open-source models not tested)
- Opaque reasoning setup is relatively simple (monitor only sees reasoning traces, not actions)
- The paper does not directly test whether self-reasoning leads to harmful outcomes — it measures capability, not propensity
