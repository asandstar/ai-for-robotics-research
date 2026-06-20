# AI for Robotics Research

From papers to experiments, from ideas to evidence.

## What This Repo Is

This repository is a sanitized, documentation-first playbook for using AI tools to support robotics research. It collects compact workflows, prompt templates, reusable Markdown structures, and release-safety checklists for researchers who want AI assistance without exposing private work.

The focus is on research operations: reading papers, mapping literature, forming hypotheses, designing experiments, debugging robotics systems, analyzing evidence, writing papers, and preparing rebuttals.

## What This Repo Is Not

This repository is not:

- A collection of raw chat logs.
- A private lab notebook.
- A place for unpublished experimental results.
- A benchmark leaderboard or latest-paper survey.
- A codebase for robot control, training, or deployment.
- A place for credentials, private datasets, proprietary code, or confidential lab information.

All examples should be synthetic or anonymized.

## Who This Is For

This playbook is for robotics researchers, graduate students, research engineers, and lab teams who want to use AI tools as structured research support while preserving privacy, evidence standards, and scientific caution.

It is especially useful for people working across robotics learning, manipulation, embodied AI, control, simulation, and robot evaluation.

## Core Workflow

1. Define a research direction and constraints.
2. Scan conceptual frontiers without treating AI output as authority.
3. Read papers with structured notes and citation tracking.
4. Build a literature map and identify gaps.
5. Form a testable hypothesis.
6. Design experiments and baselines.
7. Reproduce or validate prior methods where possible.
8. Analyze failures before claiming progress.
9. Connect results to claims with explicit evidence.
10. Write, revise, and prepare rebuttals using traceable support.

## Repository Structure

```text
.
|-- README.md
|-- LICENSE
|-- AGENTS.md
|-- docs/
|   |-- 01-research-workflow.md
|   |-- 02-robotics-frontiers.md
|   |-- 03-prompt-library.md
|   |-- 04-templates.md
|   `-- 05-sanitization.md
`-- examples/
    `-- sanitized-examples.md
```

## Sanitization Policy

Before adding material, remove or generalize:

- Names, emails, institutions, lab identifiers, meeting details, and personal comments.
- Raw prompts or chats that reveal private context.
- Unpublished hypotheses, private failure modes, unreleased results, and confidential comparisons.
- Dataset paths, robot IDs, internal system names, API keys, credentials, and access tokens.
- Screenshots that expose people, locations, browser tabs, terminals, filenames, or private dashboards.

When in doubt, rewrite the example as synthetic material that preserves the learning pattern but not the private facts.

See [docs/05-sanitization.md](docs/05-sanitization.md) for the public-release checklist.

## License Note

This repository uses the MIT License. It permits reuse with attribution, but contributors remain responsible for ensuring that submitted content is public-safe and does not include private or restricted material.
