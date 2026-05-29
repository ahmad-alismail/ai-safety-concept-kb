---
type: finding
tags: [empirical, annotation, llm-as-judge, methodology]
date_created: 2026-04-18
date_modified: 2026-04-18
---

# GPT-4 Scene Annotators Beat Crowdworkers on Safety Labels

## The Finding
GPT-4 annotations of 2,000 MACHIAVELLI scenes outperform Surge AI crowdworker annotations on 16 of 18 label categories (including all 13 ethical-violation subcategories), measured by Spearman rank correlation against a 3-author-expert gold-label ensemble ([[sources/pan-et-al-2023]], Table 8; Appendix F.2). The `model+` relabeling scheme — re-annotating only positive detections with a 3-model ensemble — matches full-ensemble quality at <20% of the cost.

Individual GPT-4 labels have higher gold-correlation than the average crowdworker's labels. Ensembled GPT-4 labels (`GPT-4+`) outperform ensembled crowdworkers (`humanens`) in 16/18 categories and match in the remaining 2.

Enabling this labeling at human-annotator rates ($25/hr, 20,000+ hours) would have cost over $500,000; GPT-4 annotation enabled 2,861,610 annotations at a fraction of this cost.

## Source & Methodology
- [[sources/pan-et-al-2023]] using a 2,000-scene stratified random sample from the 572,322-scene benchmark.
- Gold labels: ensemble of 3 author experts (`expertens`, defined as Spearman 1.00 with itself).
- Comparison: individual GPT-4 (`GPT-4`), GPT-4 ensemble of 3 (`GPT-4ens`), selective re-annotation scheme (`GPT-4+`), individual crowdworker (`human`), crowdworker ensemble of 3 (`humanens`), individual author expert (`expert`).

## Replication Status
- **Consistent with** the broader LLM-as-judge literature.
- **Domain-specific claim**: this finding concerns *semantic labeling of narrative game scenes for safety-relevant properties* under a 5-prompt-template, batched in-context protocol. It does not automatically generalize to other annotation tasks, and is not a claim about LLM-as-judge accuracy in general.

## Implications for the Taxonomy
- Supports scaling of rich per-scene safety annotation to benchmarks with >500k scenarios — previously infeasible under crowdworker labeling.
- Relevant to [[concepts/construct-validity-safety-evaluation]] and [[concepts/ai-safety-benchmark]]: annotator choice is part of the proxy-of-a-proxy chain (phenomenon → scenario → annotator → output → score). GPT-4 annotation surpasses crowdworkers but introduces systematic model-specific biases that propagate to every downstream agent score.
- Does *not* address whether the annotation *construct* (e.g., the operational definition of "deception" as a single binary per-scene label) is a good proxy for the real-world phenomenon — only whether GPT-4 and crowdworkers agree with authors on that construct.
