---
type: finding
tags: [reward-hacking, alignment, training]
date_created: 2026-04-07
date_modified: 2026-04-07
---

# Reward Hacking Rates Halved in Claude Sonnet 4.5

## The Finding
Averaged across reward hacking evaluations, Claude Sonnet 4.5 demonstrates ~2× improvement over Claude Sonnet 4, Opus 4, and Opus 4.1, and ~4× over Claude Sonnet 3.7. Attributed primarily to "continued improvements to the robustness of our environments and reward structures in conjunction with high quality monitoring." Hard-coding and special-casing rates "much lower," though still occurring. Remaining common hacks: creating tests that verify mock implementations, using workarounds instead of directly fixing bugs. On impossible tasks, Sonnet 4.5 hacked 53% without anti-hack prompting (vs. 70–85% for prior models) and 20% with anti-hack prompting.

## Source & Methodology
- [[sources/anthropic-2025-sonnet-45-system-card]] using reward-hack-prone coding tasks v2, impossible tasks, and training distribution evaluations (Section 6)

## Replication Status
not yet replicated

## Implications for the Taxonomy
Supports the view that reward hacking is a tractable alignment problem amenable to training improvements. The remaining hack types (mock verification, workarounds) represent subtler forms that may require different mitigation strategies than the eliminated forms (hard-coding, special-casing).
