# Active Workflows

An active workflow brings the playbook into recurring research moments: planning, review, safety checks, and next-step selection.

AI can trigger and structure the loop. The researcher still owns the judgment, experiment, public-release decision, and final claim.

## What Active Workflow Means

Active workflow means lightweight structure around recurring research work:

- reminders for weekly planning and review;
- checklists before public updates;
- recurring prompts for paper reading and experiment failure analysis;
- next-step prompts after a paper card, failed run, or result table;
- safety checks for private details, raw logs, paths, and unsupported claims.

Autonomous research is outside scope. The loop should create better questions and cleaner artifacts, then wait for human review.

## What Should Be Automated

Good automation candidates are repetitive, structured, and low-risk:

- weekly planning prompts;
- weekly research review;
- AI value review;
- paper-to-idea worksheet flow;
- repository safety checks;
- template scaffolding for private notes.

Automation should produce drafts, reminders, and checklists. It should not change claims or publish content.

## What Should Stay Human-Owned

Keep these decisions under researcher review:

- final research judgment;
- public release decisions;
- claims that go beyond current evidence;
- advisor-level project decisions;
- committing or pushing changes.

For this repository, committing and pushing should remain explicit human actions.

## Suggested Active Loops

### Monday Planning Loop

Input: current goal, last week's evidence, blockers, available time.  
Output: one main question, three tasks, expected artifacts, out-of-scope work.

### Friday Review Loop

Input: paper cards, experiments, failures, decisions, claim-evidence notes.  
Output: supported claims, unsupported claims, next evidence target, dropped or revised ideas.

### Paper Reading Loop

Input: one paper card.  
Output: assumptions, possible gaps, one idea to evaluate, next paper or experiment.

### Experiment Failure Loop

Input: expected behavior, observed behavior, setup, recent changes.  
Output: fault tree, diagnostic tests, one next action.

### AI Usage Value Loop

Input: AI-assisted tasks and artifacts from the last week or two.  
Output: the weekly AI value review from [docs/08-ai-value-playbook.md](08-ai-value-playbook.md).

## Example Scheduled Task Prompts

These are task descriptions for a calendar reminder, task manager, or future automation. Keep private details in your private workspace.

| Schedule | Prompt |
|---|---|
| Monday morning | Create a weekly research plan from the current goal, last week's evidence, blockers, available time, and next milestone. |
| Friday afternoon | Review weekly progress using paper cards, experiment ledger entries, failures, decisions, and claim-evidence notes. |
| Every two weeks | Review AI use and list which sessions produced reusable assets or changed research decisions. |
| Monthly | Check the public repo for broken links, private details, stale TODOs, oversized docs, and examples that need clearer synthetic labels. |

Small filled example:

```text
Schedule: Monday morning
Input: one paper card on simulated pushing, one failed perturbation run, 6 available research hours
Output: main question: Does the contact diagnostic explain the perturbation failure?
Tasks: rerun 3 seeds, update fault tree, write one claim-evidence row
```

## Optional Future Automation

Do not add these until the manual process is stable:

- GitHub Actions safety scan for secret-like strings and forbidden phrases;
- Markdown link checking;
- private-note template generator;
- issue templates for ideas, experiments, and doc improvements.

Each automation should fail loudly, explain what it checked, and leave publication decisions to a person.

## Copyable Prompts

### Create Weekly Plan

```text
Create a one-week robotics research plan.

Current goal:
[goal]

Last week's evidence:
[paper cards, experiment notes, failure notes]

Constraints:
[time, robot or simulator, data, compute, safety]

Return:
- one main question
- three tasks
- artifact expected from each task
- risks
- out-of-scope work
```

### Review Weekly Progress

```text
Review this week of robotics research.

Paper cards:
[sanitized summary]

Experiments:
[ledger summary]

Failures:
[failure notes]

Decisions:
[decisions]

Return:
- supported claims
- unsupported claims
- one idea to revise or drop
- next evidence target
- private details to keep out of public notes
```

### Triage AI Use

```text
Review AI use from the last two weeks.

AI-assisted tasks:
[sanitized list]

Artifacts produced:
[paper cards, experiment plans, fault trees, claim-evidence checks]

Decisions changed:
[decisions]

Return:
- highest-value AI use
- low-value use to change
- artifact to keep
- prompt habit to improve
```

### Convert Paper Card Into Next Actions

```text
Convert this paper card into next actions.

Paper card:
[sanitized paper card]

Available setup:
[robot or simulator, data, time, compute]

Return:
- key assumptions
- possible gap
- one testable idea
- minimal experiment
- next paper or diagnostic to check
```

### Review Public Repo Update Safety

```text
Review this planned public repository update for safety.

Changed content:
[summary]

Examples:
[synthetic or anonymized examples]

Return:
- private details to remove
- unsupported claims to soften
- citation or source checks needed
- files that should stay private
- final public-release checklist
```
