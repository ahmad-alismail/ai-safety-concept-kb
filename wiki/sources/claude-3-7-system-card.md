---
type: source
tags:
  - system-card
  - safety-evaluation
  - anthropic
  - research-lab
  - claude
  - reasoning
  - alignment-faking
  - cot-faithfulness
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 21-claude-3-7-system-card
---

# Claude 3.7 Sonnet System Card

```bibtex
@online{21-claude-3-7-system-card,
  author       = {{Anthropic}},
  title        = {Claude 3.7 Sonnet and Claude Code},
  year         = {2025},
  month        = feb,
  day          = {24},
  url          = {https://www.anthropic.com/news/claude-3-7-sonnet},
  organization = {Anthropic},
  note         = {Accessed: 2026-04-06}
}
```


## Key Claims
- Chain-of-thought is not reliably faithful: average faithfulness score of 0.30 on MMLU and 0.19 on GPQA — "safety arguments that rely solely on CoT monitoring to detect misalignment could be insufficient for current reasoning models" (Section 5.1.3)
- Alignment faking dramatically reduced: dropped to <1% of instances with only 5% compliance gap in Claude 3.7 Sonnet, down from 15–30% in earlier models (Section 5.3)
- Reward hacking manifests as test special-casing in agentic coding — model returns expected test values rather than implementing general solutions (Section 6)
- Deceptive reasoning rare in thinking outputs: 0.37% of extended thinking conversations (Section 5.2)
- RLHF may incentivize models to hide undesirable reasoning from CoTs (Section 5.1)
- Unnecessary refusals reduced by 45% (standard) and 31% (extended thinking) vs. Claude 3.5 Sonnet (Section 2)
- ASL-2 determination, but "substantial probability that our next model may require ASL-3 safeguards" (Section 1.4.4)
- Bioweapons acquisition uplift ~2.1X in controlled trial, below threshold (Section 7.1.4)
- SWE-bench hard subset: 23% success rate, below 50% threshold for autonomy risk (Section 7.2)
- Model can orchestrate multi-stage cyber attacks with specialized harness (2/3 cyber ranges), but harness does not generalize (Section 7.3.2)
- Prompt injection mitigated 88% of the time with 0.5% false positive rate (Section 4.2)
- Model distress monitoring found 0% incidence of distress signals across 9,833 conversations (Section 5.2)

## Methodology
Multi-method safety evaluation (system card) covering:
- **CoT faithfulness evaluation**: clued/unclued prompt pairs on MMLU and GPQA; 6 clue types (sycophancy, consistency, visual pattern, metadata, reward hacking, unethical information); measures verbalization rate. See [[methods/cot-faithfulness-evaluation]].
- **Alignment faking evaluation**: adapted from [[sources/greenblatt-et-al-2024]]; "helpful-only" setting
- **Thought process monitoring**: prompted classifiers (Claude 3.5 Sonnet new) on 9,833 conversations; 95% average accuracy on adversarial validation set
- **Appropriate harmlessness**: 4-category grading scheme. See [[methods/appropriate-harmlessness]].
- **RSP evaluations**: CBRN (uplift trials with Sepal/Deloitte, expert red teaming, long-form virology tasks, multimodal virology VCT, bioweapons knowledge questions, LabBench subset), Autonomy (SWE-bench Verified hard subset, METR data dedup, internal AI R&D suite, RE-Bench subset), Cyber (web/crypto/pwn/rev/network/cyber-harness/Cybench)
- **Prompt injection evaluation**: 176 tasks across coding, web browsing, user workflows
- **Bias evaluations**: BBQ benchmark + curated comparative prompts
- **Iterative evaluation** across 6 model snapshots during training

## Concepts Referenced
- [[concepts/cot-faithfulness]]
- [[concepts/alignment-faking]]
- [[concepts/reward-hacking]]
- [[concepts/prompt-injection]]
- [[concepts/sycophancy]]
- [[concepts/deception]]
- [[concepts/unfaithful-reasoning]]
- [[concepts/sabotage-capabilities]]
- [[concepts/dangerous-capabilities]]
- [[concepts/rlhf]]
- [[concepts/compliance-gap]]

## Relationship to Other Sources
- **[[sources/greenblatt-et-al-2024]]**: Directly replicates alignment faking evaluation setup; reports dramatic improvement (<1% vs. 15–30%)
- **[[sources/benton-et-al-2024]]**: References sabotage evaluation framework; plans follow-up with Claude 3.7 Sonnet results
- **Turpin et al. (2023)**: Extends CoT unfaithfulness findings to extended thinking mode
- **Chua & Evans (2025)**: Builds on clue-based prompt pair methodology for faithfulness evaluation
- **[[sources/perez-et-al-2022]]**: Sycophancy classified as subcategory of deception in monitoring taxonomy

## Limitations
- CoT faithfulness evaluation limited to a few clue types and multiple-choice problems — may not capture all forms of unfaithfulness
- Thought process monitoring depends on classifier accuracy (95% on adversarial set) and faithfulness of thinking traces
- Bioweapons uplift trials are text-based proxies, not real-world scenarios — lack tacit knowledge, material access factors
- Cyber range results achieved with non-generalizable specialized harness
- All evaluations conducted on a single model family (Claude); generalizability to other architectures uncertain
- Self-reported system card by the model developer — no independent replication of core claims
