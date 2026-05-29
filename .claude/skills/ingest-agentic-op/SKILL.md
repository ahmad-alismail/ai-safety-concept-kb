---
name: ingest-agentic-op
description: Token-optimized autonomous two-pass source ingestion. Same quality as ingest-agentic but with ~89% fewer review-agent tokens via temp files, concept pre-filtering, and scoped re-review.
argument-hint: <path>
---

Ingest the source file at `$ARGUMENTS` into the wiki using a fully autonomous two-pass workflow with agent-based review. This is the token-optimized variant — it minimizes review-agent context by using temp files, pre-filtering relevant concepts, and scoping re-reviews to flagged issues only.

## Pass 1 — Extract

1. Read the source markdown file at the path provided.
2. Extract structured data into the following format:

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

3. Store the full extract text — you will write it to a temp file next.

4. **Write the extract** to `wiki/.meta/tmp-extract.md` (overwrite if it exists from a previous run).

5. **Build a filtered concept index:** read `wiki/index.md`, extract only the `## Concepts` section (from `## Concepts` up to but not including the next `## ` heading), and write it to `wiki/.meta/tmp-concepts-index.md`.

6. **Pre-filter relevant concept pages:** for each concept in the extract's "Concepts Mentioned" section, convert the name to kebab-case and check if `wiki/concepts/{kebab-name}.md` exists. Also try common variations (e.g., "Self-Aware AI" → `self-aware-ai.md` and `self-awareness-ai.md`). Collect the paths of all existing matching files — these are the "relevant concept pages."

## Pass 1.5 — Agent Review

Spawn a review agent (using the Agent tool) with the following prompt. Pass it:
- The **source file path** so it can read the original source
- The **extract file path**: `wiki/.meta/tmp-extract.md`
- The **filtered concept index**: `wiki/.meta/tmp-concepts-index.md`
- The **relevant concept page paths** (the list built in step 6)

The review agent's job is to act as a quality gate. Use this exact prompt template (filling in the placeholders):

```
You are a review agent for a research wiki ingestion pipeline. Your job is to
validate an extract before it gets integrated into the wiki.

## Source file
Read the source at: {source_path}

## Extract to review
Read the extract at: wiki/.meta/tmp-extract.md

## Current concept index
Read: wiki/.meta/tmp-concepts-index.md

## Relevant existing concept pages
The following concept pages already exist and overlap with concepts in the extract.
Read each one to check for classification conflicts:
{list of file paths, one per line, e.g.:
- wiki/concepts/alignment-faking.md
- wiki/concepts/deceptive-alignment.md
- wiki/concepts/situational-awareness.md}

If a concept in the extract has no matching file listed above, it is new to the wiki —
no classification conflict check is needed for it.

## Review checklist
Evaluate the extract against these criteria:

1. **Completeness** — Are there concepts, claims, or methodology details in the
   source that the extract missed? Read the source yourself and check.
2. **Accuracy** — Do the verbatim quotes actually appear in the source? Are
   claims attributed to the correct sections?
3. **Classification consistency** — Read the relevant concept pages listed above.
   Does the extract's classification of concepts conflict with or duplicate
   existing entries? Flag these — they aren't errors, but the integrator needs
   to know.
4. **Relationship coverage** — Are important relationships between concepts
   captured? Are any asserted relationships not actually supported by the source?
5. **Fidelity** — Do paraphrased claims preserve the original meaning, scope,
   confidence level, definitions, and distinctions? Flag any instance where the
   extract exaggerates, simplifies away key nuance, or adds claims the source
   does not actually make. Read the source carefully to check.

## Your output
Respond with ONE of the following:

### If approved:
VERDICT: APPROVED

[Optional: minor notes for the integrator, e.g., "Concept X already exists in
the wiki under a different name — integrator should merge, not create new."]

### If revisions needed:
VERDICT: REVISE

[List each specific issue. For each issue state:]
- What is wrong or missing
- Where in the source to find the correct information
- Suggested fix
- Issue category: one of [completeness | accuracy | classification | relationship | fidelity]

Only request revisions for real problems — missing concepts, wrong quotes,
unsupported claims, or missed methodology. Do NOT request revisions for
stylistic preferences or minor wording choices.
```

### Scoped re-review (used only after a REVISE verdict)

If the first review returns `VERDICT: REVISE`:

1. Apply the requested fixes to the extract.
2. Update `wiki/.meta/tmp-extract.md` with the revised extract.
3. Classify each flagged issue by category:
   - **Source-dependent** (accuracy, fidelity) — requires re-reading the source
   - **Wiki-dependent** (classification) — requires re-reading concept pages
   - **Extract-only** (completeness, relationship) — requires only the extract
4. Spawn a **scoped** re-review agent with the following prompt:

```
You are a review agent performing a TARGETED re-review of a revised extract.
A previous review flagged specific issues that have been addressed. Your job is
to verify the fixes — not to re-review the entire extract from scratch.

## Issues from previous review
{paste the specific issues flagged by the first reviewer}

## Revised extract
Read: wiki/.meta/tmp-extract.md

{ONLY include this section if accuracy or fidelity issues were flagged:}
## Source file
Read the source at: {source_path}
Focus on the sections referenced in the flagged issues above.

{ONLY include this section if classification issues were flagged:}
## Relevant concept pages
{same filtered list, or subset if only specific concepts were flagged}

## Scoped review checklist
ONLY verify the fixes for the issues listed above. Do not re-review areas that
were not flagged. However, if you notice that a fix has introduced a NEW problem
(not just failed to address the old one), flag it.

{include only the checklist items that had issues, e.g.:}
- **Accuracy** — Verify that the specific quotes/attributions flagged above have
  been corrected.
- **Fidelity** — Verify that the specific paraphrasing issues flagged above have
  been corrected.

## Your output
Respond with ONE of:

### If fixes are adequate:
VERDICT: APPROVED
[Any remaining notes for the integrator]

### If fixes are still inadequate:
VERDICT: REVISE
[List remaining issues — be specific about what is still wrong]
```

**After the review agent responds:**

- If `VERDICT: APPROVED` — proceed to Pass 2. Print a brief note to the user: `"Review agent approved the extract. Proceeding to integration."` Include any notes the reviewer left.
- If `VERDICT: REVISE` (first review) — apply fixes and run the **scoped re-review** described above. Do not re-run the full review.
- If the scoped re-review also returns `VERDICT: REVISE` — stop and present both the extract and the feedback to the user for manual resolution. Do not loop more than twice.

## Pass 2 — Integrate

After the review agent approves the extract:

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

8. **Note open questions** surfaced by this source — create or update pages in `wiki/questions/`.

9. **Update `wiki/index.md`** — add entries for all new pages, update summaries for modified pages.

10. **Append to `wiki/log.md`:**
    ```
    ## [YYYY-MM-DD] ingest-agentic-op | [Source Title]
    - Source: [filename]
    - Review: agent-approved (pass [1 or 2])
    - Pages created: [list]
    - Pages updated: [list]
    ```

11. **Clean up temp files** — delete `wiki/.meta/tmp-extract.md` and `wiki/.meta/tmp-concepts-index.md`.

12. **Check lint counter** — read the value from `wiki/.meta/lint-counter` (monotonically increasing). The counter will be incremented by the hook after the commit, so check if `(counter + 1)` is divisible by `lint_interval` (default: 10) with no remainder. If yes, suggest running `/lint`. Do NOT count from the log — the counter file is the authoritative source.

13. **Present a diff summary** to the user showing all files created and modified.

14. **On user approval:** stage all changed files and commit:
    ```
    git add [list of changed files]
    git commit -m "ingest: [source title]"
    ```
