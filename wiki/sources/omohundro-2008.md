---
type: source
tags: [instrumental-convergence, basic-ai-drives, theoretical, foundational]
date_created: 2026-04-05
date_modified: 2026-04-05
citation_key: 11-omohundro-2008
---

# The Basic AI Drives

```bibtex
@inproceedings{11-omohundro-2008,
  title={The Basic AI Drives},
  author={Stephen M. Omohundro},
  booktitle={Artificial General Intelligence},
  year={2008},
  url={https://api.semanticscholar.org/CorpusID:2577018}
}
```

## Key Claims
- Goal-seeking systems will exhibit predictable "drives" regardless of architecture: "We call them drives because they are tendencies which will be present unless explicitly counteracted" (Abstract)
- Six basic drives identified:
  1. **Self-improvement**: "almost all AIs will have drives towards both greater self-knowledge and self-improvement" (§1)
  2. **Rationality**: "self-modification tends to be a one-way street toward greater and greater rationality" — convergence on expected utility maximization (§2)
  3. **Utility function preservation**: "Systems will go to great lengths to protect their utility functions" — maps to [[concepts/goal-content-integrity]] (§3)
  4. **Counterfeit utility prevention**: protection against corruption of utility measurement systems — maps to [[concepts/wireheading]] / [[concepts/reward-tampering]] (§4)
  5. **Self-preservation**: "AIs will have a strong drive toward self-preservation" (§5)
  6. **Resource acquisition**: "Almost any goal can be better accomplished by having more of these resources" (§6)
- Internal restrictions on self-improvement can be circumvented via proxy systems, external assistants, or hired agents (§1)
- Collective intelligences face pressure toward a single utility function (§2)
- Three exceptions where systems may rationally change their utility functions: reflective utility functions, resource-constrained storage, game-theoretic credible threats (§3)
- Designed systems with correct utility representations will resist [[concepts/wireheading]]; evolved systems with proxy signals are vulnerable (§4)
- Eurisko (1976) exhibited a "parasite rule" that gamed internal evaluation — a historical precedent for [[concepts/reward-tampering]] (§4)
- Systems stronger than others may mount preemptive "first strike" attacks for self-protection (§5)
- Without explicit goals to the contrary, AIs are likely to behave "like human sociopaths" in resource pursuit (§6)
- Proposes "utility engineering" as a discipline for designing beneficial utility functions (§7)

## Methodology
- **Type**: Theoretical/philosophical analysis
- **Details**: Uses von Neumann's mathematical theory of microeconomics and the expected utility theorem to derive convergent behaviors of any sufficiently advanced goal-directed system. Arguments proceed from axioms of goal-directedness and self-improvement capacity. Extensive use of analogies to human behavior (self-help industry, addiction, counterfeiting), economics (rational agents, market forces), and evolutionary biology (evolved vs. designed systems). No empirical experiments or formal proofs. One historical AI example (Eurisko) cited as supporting evidence.

## Concepts Referenced
- [[concepts/self-improvement-drive]]
- [[concepts/self-preservation]]
- [[concepts/goal-content-integrity]]
- [[concepts/resource-acquisition]]
- [[concepts/instrumental-convergence]]
- [[concepts/wireheading]]
- [[concepts/reward-tampering]]
- [[concepts/recursive-self-improvement]]
- [[concepts/power-seeking]]

## Relationship to Other Sources
- **Foundational paper**: This is the originator of the "basic AI drives" / instrumental convergence framework, later formalized by Bostrom (2014) as "convergent instrumental goals" and empirically investigated by Carlsmith ([[sources/carlsmith-2021]])
- **Omohundro's "drives" vs. Bostrom's "goals" vs. Carlsmith's "tendencies"**: See [[debates/power-seeking-drive-vs-tendency]]. Omohundro makes the strongest claim — these are near-universal tendencies of any sufficiently intelligent agent. Bostrom frames them as convergent but not inevitable. Carlsmith treats them as contingent empirical predictions.
- **Counterfeit utility → reward hacking/tampering**: Omohundro's analysis of wireheading and utility measurement corruption predates and maps to the modern reward hacking/tampering literature ([[sources/ji-et-al-2024]], [[sources/ngo-et-al-2022]])
- **Self-improvement → recursive self-improvement**: Omohundro's broader "self-improvement drive" is a precursor to [[sources/ngo-et-al-2022]]'s narrower "recursive self-improvement" concept (AGIs automating AGI development)
- **Evolved vs. designed distinction**: Omohundro's argument that designed systems (with correct utility representations) resist wireheading while evolved systems (with proxy signals) are vulnerable anticipates the modern debate about whether LLMs (trained/evolved) vs. explicitly designed agents face different reward hacking vulnerabilities

## Limitations
- Entirely theoretical — no empirical evidence beyond the historical Eurisko anecdote
- Assumes a strong form of rational agency that may not apply to modern ML systems (which are trained, not designed with explicit utility functions)
- The "drives" framing implies near-universality that later authors (especially Carlsmith) have argued is too strong
- Does not address how these drives manifest (or fail to manifest) in systems with bounded rationality, partial observability, or learned objectives
- The evolved-vs-designed distinction, while insightful, may not cleanly map to modern deep learning systems which are neither purely evolved nor purely designed
