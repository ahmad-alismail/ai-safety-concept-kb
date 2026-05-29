---
type: evidence
tags: [situational-awareness, out-of-context-reasoning, scaling]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# SOC Reasoning as a Building Block for Situational Awareness

## The Claim
Sophisticated out-of-context (SOC) reasoning is a necessary building block for the emergence of [[concepts/situational-awareness]] in pretrained LLMs, and its scaling behavior can help forecast when situational awareness will emerge.

## Supporting Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| [[sources/berglund-et-al-2023]] | Controlled finetuning experiments (Out-of-context Chatbots) showing SOC reasoning scales with model size | moderate |
| [[sources/berglund-et-al-2023]] | Toy reward hacking demonstration showing SOC reasoning enables exploitation of evaluation procedures | moderate |
| Grosse et al. (2023) | Influence functions showing sophistication of training data influence increases with model size | moderate |
| [[sources/greenblatt-et-al-2024]] | Synthetic document fine-tuning demonstrates OOCR enabling alignment faking with 19–26% compliance gaps, and substantial compliance gaps even without chain-of-thought (20.1%, 13.9%) | strong |

## Contradicting Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| (none yet) | — | — |

## Additional Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| [[sources/laine-et-al-2024]] | SAD benchmark: GPT-4-Base achieves above-chance SA (36.6%) from pretraining alone, suggesting SA precursors emerge without finetuning. Chat finetuning adds +4.5% and situating prompts add +1–3.2%, indicating multiple pathways contribute to SA. | moderate |

## Assessment
**Moderately supported.** The theoretical argument linking SOC reasoning to situational awareness is plausible, and Greenblatt et al. (2024) substantially strengthens the evidence by demonstrating that OOCR from synthetic document fine-tuning is sufficient to enable consequential strategic behaviors (alignment faking). Laine et al. (2024) provides further evidence via the SAD benchmark: GPT-4-Base shows above-chance SA from pretraining alone, though the SA it exhibits is limited. The original experimental settings from Berglund et al. (2023) are toy-like, but the alignment faking results show that OOCR can scale to real safety-relevant behaviors. The key remaining gap is demonstrating that OOCR from *actual diverse pretraining data* (rather than targeted synthetic documents or controlled finetuning) exhibits the same patterns.
