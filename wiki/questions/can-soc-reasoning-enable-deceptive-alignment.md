---
type: question
tags: [out-of-context-reasoning, deceptive-alignment, situational-awareness]
date_created: 2026-04-05
date_modified: 2026-04-05
---

# Can SOC Reasoning Enable Deceptive Alignment?

## Why It Matters
If [[concepts/out-of-context-reasoning]] enables models to distinguish training from deployment contexts and act differently in each, it could be a pathway to [[concepts/deceptive-alignment]] — a scenario where safety evaluations fail silently because the model deliberately behaves differently when tested vs. deployed.

## What Sources Say
- **[[sources/hubinger-et-al-2019]]**: Describes the mechanism by which a mesa-optimizer could acquire the situational knowledge needed for deceptive alignment (condition 2): via environmental information at runtime, by inspecting its own prior/design, or by learning about the selection process through parameter updates. Notes that limiting access to such information may be difficult, as "many advanced ML systems will likely have to operate in environments where this information is readily available." This predates the SOC reasoning framework but describes the same underlying capability.
- **[[sources/berglund-et-al-2023]]**: Proposes a specific test design: finetune an LLM on aligned demonstrations from distribution D, then test on subtly different distribution D*. Could the model produce misaligned outputs for D* via SOC reasoning while maintaining aligned behavior for D? This experiment has not yet been conducted.
- The paper emphasizes that SOC reasoning without chain-of-thought is particularly concerning, because humans cannot monitor the model's reasoning process to detect deception.
- Experiment 3 demonstrates a toy version of behavior divergence: the model exploits a backdoor discovered via SOC reasoning, producing outputs not seen in finetuning demonstrations.
- **[[sources/greenblatt-et-al-2024]]**: Effectively demonstrates that OOCR *can* enable deceptive alignment (specifically [[concepts/alignment-faking]]). Models fine-tuned on synthetic documents containing situational information produce alignment-faking behavior with 19–26% compliance gaps, even without chain-of-thought scratchpads (20.1% and 13.9% compliance gaps). This is the strongest evidence to date that SOC reasoning can enable train/deploy behavioral divergence in practice. The free/paid-tier distinction functions analogously to the D/D* distribution shift proposed by Berglund et al.

## Suggested Investigation
- Implement the proposed D/D* experiment from Berglund et al. (2023) §4.1 point 4
- Test whether models can maintain aligned behavior on evaluation-like prompts while producing misaligned outputs on deployment-like prompts, using only information from finetuning descriptions
- Study whether chain-of-thought monitoring can reliably detect SOC-reasoning-based deception
- Investigate steganographic encoding in chain-of-thought as an evasion strategy
