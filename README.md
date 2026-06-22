# AI for Robotics Research

From papers to experiments, from ideas to evidence.

Current version: v0.6

Languages: English | [简体中文](README.zh-CN.md)

## What This Repo Is

This repository is a sanitized, documentation-first playbook for using advanced AI tools on high-value robotics research tasks: judging problems, designing experiments, analyzing failures, checking evidence, and turning messy work into reusable assets.

It collects compact workflows, prompt templates, Markdown structures, synthetic examples, and release-safety checklists for researchers who want AI assistance without exposing private work.

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

## How to Use This Repository

This repository is a working playbook. Use it to structure private research work, then keep the private work outside this public repo.

1. Start with [docs/01-research-workflow.md](docs/01-research-workflow.md) to understand the full research cycle.
2. Use [docs/04-templates.md](docs/04-templates.md) as private research notebook structures for paper cards, literature matrices, idea banks, and experiment ledgers.
3. Use [docs/03-prompt-library.md](docs/03-prompt-library.md) for critique, idea evaluation, experiment design, debugging, result analysis, and writing.
4. Use [docs/06-grad-student-playbook.md](docs/06-grad-student-playbook.md) as an early-stage researcher training path.
5. Use [docs/07-research-taste.md](docs/07-research-taste.md) to train research judgment: problem choice, gap quality, testability, and evidence discipline.
6. Use [docs/08-ai-value-playbook.md](docs/08-ai-value-playbook.md) to turn advanced AI sessions into reusable research assets.
7. Use [docs/09-active-workflows.md](docs/09-active-workflows.md) to design reminders, recurring reviews, and safety checks.
8. Use [docs/10-research-drills.md](docs/10-research-drills.md) for repeatable drills on paper reading, gap triage, experiment design, failure diagnosis, and claim-evidence alignment.

## First 60 Minutes

Use one paper and one small worksheet. Keep any real notes, paths, results, and lab details in your private workspace.

1. Choose one robotics paper related to a task you can understand.
2. Fill a paper card or the First Pass Research Worksheet in [docs/04-templates.md](docs/04-templates.md).
3. Extract assumptions and one possible gap with [docs/03-prompt-library.md](docs/03-prompt-library.md).
4. Evaluate one idea for importance, testability, feasibility, and evidence.
5. Sketch a 4-week minimal experiment with one baseline, one primary metric, and one diagnostic metric.
6. Check claim-evidence alignment before writing a strong claim.

## Repository Structure

```text
.
|-- .gitignore
|-- README.md
|-- README.zh-CN.md
|-- LICENSE
|-- AGENTS.md
|-- docs/
|   |-- 01-research-workflow.md
|   |-- 02-robotics-frontiers.md
|   |-- 03-prompt-library.md
|   |-- 04-templates.md
|   |-- 05-sanitization.md
|   |-- 06-grad-student-playbook.md
|   |-- 07-research-taste.md
|   |-- 08-ai-value-playbook.md
|   |-- 09-active-workflows.md
|   `-- 10-research-drills.md
`-- examples/
    `-- sanitized-examples.md
```

## Wiki

This repository may use GitHub Wiki as a lightweight navigation layer.

The Markdown files in this repository remain the source of truth. Wiki pages should link to maintained documents under `docs/` instead of duplicating full content. Wiki editing should remain restricted to collaborators to preserve sanitization, citation quality, and writing consistency.

## Sanitization and Contribution Policy

Anyone adding, editing, or submitting content should keep this repository public-safe, reusable, and sanitized. Use synthetic or anonymized material unless the source is already public and appropriate to cite.

- Names, emails, institutions, lab identifiers, meeting details, and personal comments.
- Raw prompts or chats that reveal private context.
- Unpublished hypotheses, private failure modes, unreleased results, and confidential comparisons.
- Dataset paths, robot IDs, internal system names, API keys, credentials, and access tokens.
- Screenshots that expose people, locations, browser tabs, terminals, filenames, or private dashboards.

When in doubt, rewrite the contribution as a synthetic example that preserves the reusable workflow without exposing private facts.

See [docs/05-sanitization.md](docs/05-sanitization.md) for the public-release checklist.

## License Note

This repository uses the MIT License. It permits reuse with attribution, but contributors remain responsible for ensuring that submitted content is public-safe and does not include private or restricted material.
