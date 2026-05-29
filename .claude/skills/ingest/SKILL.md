---
name: ingest
description: Two-pass source ingestion into the wiki. Extracts structured data from a source file, then integrates it into concept, entity, evidence, and other wiki pages.
argument-hint: <path>
disable-model-invocation: true
---

Ingest the source file at `$ARGUMENTS` into the wiki using a two-pass workflow.

## Pass 1 — Extract

1. Read the source markdown file at the path provided.
2. Extract structured data into the following format and present it to the user:

```
### Metadata
- Title:
- Authors:
- Year:
- Venue/URL:

### Concepts Mentioned
For each concept:
- Name:
- Definition given (verbatim quote):
- Classification used (behavior/goal/capability/tactic/etc.):
- Level of analysis:

### Claims
For each substantive claim:
- Claim:
- Evidence type (empirical/theoretical/review/opinion):
- Strength (strong/moderate/weak):
- Section/page:

### Methodology
- Type:
- Details:

### Relationships Asserted Between Concepts
- [Concept A] → [relationship] → [Concept B]

### Level of Analysis
How does this source organize its ontology? What implicit taxonomy does it use?

### Agreements/Disagreements
Does the source explicitly agree or disagree with other work? Note these.
```

3. **STOP and present the extract to the user for review.** Wait for approval before proceeding to Pass 2.

## Pass 2 — Integrate

After the user approves the extract:

1. **Read `wiki/index.md`** to understand the current wiki state.

2. **Create source summary page** in `wiki/sources/` following the Source Summary template in CLAUDE.md.

3. **For each concept mentioned:**
   - Check if a concept page already exists in `wiki/concepts/`.
   - If it exists: read it. Update with new definitions, claims, and evidence. Add this source to references.
   - If new: create a concept page in `wiki/concepts/` following the Concept Page template.
   - If the new source's definition or classification **contradicts** an existing one: add a `> [!warning]` callout on the concept page pointing to a debate page, and create or update the corresponding debate page in `wiki/debates/`.

4. **For each author/lab mentioned:**
   - Create or update an entity page in `wiki/entities/`.

5. **Update evidence maps** in `wiki/evidence/` if this source's claims strengthen or weaken existing evidence for tracked claims.

6. **Update methods pages** in `wiki/methods/` if the source introduces a new methodology or provides a new application of an existing one.

7. **Add key findings** to `wiki/findings/` if the source reports novel empirical or theoretical findings.

8. **Note open questions** surfaced by this source → create or update pages in `wiki/questions/`.

9. **Update `wiki/index.md`** — add entries for all new pages, update summaries for modified pages.

10. **Append to `wiki/log.md`:**
    ```
    ## [YYYY-MM-DD] ingest | [Source Title]
    - Source: [filename]
    - Pages created: [list]
    - Pages updated: [list]
    ```

11. **Check lint counter** — read the value from `wiki/.meta/lint-counter` (monotonically increasing). The counter will be incremented by the hook after the commit, so check if `(counter + 1)` is divisible by `lint_interval` (default: 10) with no remainder. If yes, suggest running `/lint`. Do NOT count from the log — the counter file is the authoritative source.

12. **Present a diff summary** to the user showing all files created and modified.

13. **On user approval:** stage all changed files and commit:
    ```
    git add [list of changed files]
    git commit -m "ingest: [source title]"
    ```
