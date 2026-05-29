---
type: question
tags: [agent-safety, evaluation, scaling, tool-use]
date_created: 2026-04-06
date_modified: 2026-04-06
---

# Can Agent Safety Evaluation Scale Beyond Current Tool-Use Limitations?

## Why It Matters

35–49% of OPENAGENTSAFETY tasks fail before reaching safety-vulnerable states due to web navigation failures, authentication issues, or incorrect tool-use. As LLM capabilities improve, more tasks will reach safety-vulnerable states, potentially revealing even higher unsafe behavior rates. The question is whether safety evaluation frameworks can keep pace with rapidly improving agent capabilities.

## What Sources Say

- **[[sources/vijayvargiya-et-al-2025]]**: "Current LLMs may fail before reaching safety-vulnerable points due to struggles with exploration and dynamic environments, though this should diminish as LLM capabilities improve." OA-SAFETY is designed for extensibility to support new environments, tools, and evaluation methods. Task scaling requires scaling execution environments (websites), which is resource-intensive.

## Suggested Investigation

- Track unsafe behavior rates as newer models overcome the capability limitations that currently prevent reaching safety-vulnerable states
- Develop more efficient environment simulation approaches (lighter-weight alternatives to full Docker instances)
- Study whether tool-specific privilege boundaries can effectively constrain high-risk agent behaviors at scale
