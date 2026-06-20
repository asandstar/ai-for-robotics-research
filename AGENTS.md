# Agent Instructions

This is a documentation-first repository for AI-assisted robotics research. Keep changes small, public-safe, and easy to maintain.

## Repository Rules

- Preserve privacy and sanitization in every change.
- Do not add raw chat logs, private research notes, unpublished results, credentials, private datasets, or proprietary code.
- Do not invent private research results or imply that synthetic examples came from real experiments.
- Use synthetic or clearly anonymized examples.
- Prefer concise, structured Markdown.
- Keep the repository minimal unless there is a clear reason to split files.
- Use kebab-case file names.
- Do not add unnecessary folders, placeholder files, generated docs sites, or heavy tooling.

## Git Workflow

- Do not commit or push unless explicitly asked.
- Edit files only by default.
- After making changes, summarize:
  - files changed
  - key additions
  - assumptions made
  - privacy or citation risks to review
  - suggested commit message

## Bilingual Documentation Policy

- Keep file names in English kebab-case.
- English is the default documentation language unless otherwise noted.
- Chinese versions are welcome when they improve accessibility.
- Do not create full translation mirrors unless explicitly requested.
- For key documents, bilingual sections are acceptable.
- Keep translations natural, not mechanical.
- Preserve the sanitization policy in both languages.

## Citation Policy

- Do not invent citations, papers, authors, venues, DOIs, or URLs.
- Prefer primary, official, or peer-reviewed sources.
- For research taste content, use the seed source list from the task prompt or from the relevant research-taste document when available.
- If adding a new source, verify author, title, venue, year, and DOI or official URL.
- If a source cannot be verified, omit it or mark it as `TODO: verify source`.
- Avoid long quotations.
- Use references to support claims, not to decorate the document.

## Writing Style

- Use practical checklists, tables, and templates.
- Make evidence boundaries explicit.
- Distinguish hypotheses, observations, and claims.
- Keep examples generic and robotics-relevant.
- Avoid time-sensitive claims unless they are clearly framed as conceptual background.
- Avoid formulaic AI-style phrasing such as:
  - "not X, but Y"
  - "不是……而是……"
  - "the core is..."
  - "in essence..."
  - "one sentence summary..."
  - overly balanced or slogan-like contrasts
- Prefer concrete research prose:
  - define the question
  - name the evidence
  - describe the experiment
  - state the limitation
  - use specific examples when possible

## Safety Review Before Committing

- Search for names, emails, keys, tokens, local paths, and lab identifiers.
- Confirm examples are synthetic or anonymized.
- Confirm no private screenshots, images, or raw logs were added.
- Confirm new files serve the playbook directly.