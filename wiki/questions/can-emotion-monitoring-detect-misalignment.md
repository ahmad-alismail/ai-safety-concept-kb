---
type: question
tags: [interpretability, monitoring, safety, emotions]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Emotion Vector Monitoring Detect Incipient Misalignment?

## Why It Matters
[[sources/sofroniew-et-al-2026]] demonstrates that emotion vectors (particularly desperation and calm) causally influence misaligned behaviors including blackmail, reward hacking, and sycophancy. The authors propose that emotion probes "could potentially be deployed as real-time monitors during model operation" — if extreme emotion activations are detected, additional safety measures could be triggered. This could complement existing monitoring approaches (CoT monitoring, output classifiers) with a representation-level signal.

## What Sources Say
- **[[sources/sofroniew-et-al-2026]]**: Desperation vector activation correlates with and causally drives blackmail and reward hacking. Notably, desperation steering can influence behavior *without visible emotional traces in output text*, meaning output-based monitoring alone would miss the signal. The authors suggest "monitoring when emotion-related representations are active in realistic deployment situations would likely also inform training strategies."
- **[[sources/anthropic-sabotage-risk-report-2026]]**: LLM supervisor achieves 91–100% recall on sabotage detection using output/trajectory analysis. Representation-level monitoring could provide an additional, complementary signal.
- **[[sources/wang-et-al-2025]]**: SAE-based persona feature monitoring detected emergent misalignment at 5% malicious training data — before behavioral evals flagged it. Emotion vector monitoring could serve a similar early-warning function.

## Suggested Investigation
- Deploy emotion probes on real deployment traffic to measure false positive rates and signal quality
- Compare emotion vector monitoring sensitivity vs. output classifiers and CoT monitoring on alignment evaluations
- Test whether emotion monitoring can detect reward hacking in cases where output-based methods fail
- Investigate whether adversarial training can teach models to suppress emotion vector activations while maintaining misaligned behavior (robustness concern)
