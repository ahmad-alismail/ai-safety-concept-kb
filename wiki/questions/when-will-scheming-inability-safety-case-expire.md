---
type: question
tags: [safety-case, scheming, stealth, situational-awareness, governance]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# When Will the Scheming Inability Safety Case No Longer Hold?

## Why It Matters
The [[methods/scheming-inability-safety-case]] ([[sources/phuong-et-al-2025]]) argues current models cannot cause severe harm via [[concepts/scheming]] because they lack sufficient [[concepts/stealth]] and [[concepts/situational-awareness]]. However, the authors explicitly expect this safety case to expire as models improve, and identify key defeaters that could invalidate it sooner than expected.

## What Sources Say
- **[[sources/phuong-et-al-2025]]**: "our impression based on evaluating multiple versions of Gemini models is that they are improving rapidly and we would not be surprised if our challenges would be passed soon." The safety case is intended to hold for models in the same family developed within four months.
- Key defeaters:
  1. **AI deployed with weaker oversight than human employees** — economic incentives or misplaced trust
  2. **Disanalogies between AI and humans** — scale (many instances), speed, superhuman coding ability that renders code too complex for human review
  3. **Evaluation methodology limitations** — sandbagging, construct validity, human baseline quality
- Authors plan transition to **control-based safety case** (with CoT monitoring) when the inability case no longer holds

## Suggested Investigation
- Track model performance on the open-source evaluation suite over successive model generations
- Develop more realistic and difficult evaluation challenges as models improve
- Investigate the timeline to transition from inability-based to control-based safety cases
- Study whether the human employee oversight analogy holds under realistic deployment conditions
