# Graduate Student Playbook

This playbook is for early-stage graduate students using AI tools, especially advanced reasoning models, to build a real robotics research pipeline. Use it to improve judgment, evidence quality, and weekly research artifacts.

## Purpose

Use AI tools to make research work visible enough to inspect:

- Turn papers into structured notes.
- Turn observations into testable hypotheses.
- Turn ideas into minimal experiments.
- Turn failures into diagnostics.
- Turn results into claims with evidence boundaries.

The useful output is a clearer decision about what to read, test, reject, or explain. Polished prose comes later.

## What AI Tools Are Useful For

- Summarizing a paper into a paper card after you provide the source material.
- Comparing papers using a consistent matrix.
- Asking critical questions about an idea.
- Finding missing baselines, controls, and confounders in an experiment plan.
- Generating diagnostic checklists for robot failures.
- Drafting claim-evidence tables before writing.
- Rewriting for clarity after the scientific content is correct.

## Work AI Tools Still Leave to You

- Reading primary sources.
- Understanding robot hardware, simulators, and task constraints.
- Knowing whether a result is real or an artifact.
- Choosing fair baselines.
- Running experiments carefully.
- Interpreting failure cases from videos, logs, and system behavior.
- Owning the final scientific claim.

An AI-generated idea needs three anchors before implementation: literature, a plausible mechanism, and a feasible experiment.

## How to Use Advanced Reasoning Models Effectively

Use advanced reasoning models for slow critique after the first round of generation.

Good requests:

- "Find the weakest assumption in this idea."
- "List alternative explanations for this result."
- "Convert this vague observation into three falsifiable hypotheses."
- "Design the smallest experiment that could disprove this claim."
- "Act as a skeptical reviewer and identify unsupported claims."

Bad requests:

- "Give me a novel robotics paper idea."
- "Write a strong contribution statement" before evidence exists.
- "Summarize the field" without sources.
- "Make this result sound better."

Practical rules:

- Provide constraints: robot, simulator, data, time, compute, and evaluation.
- Ask for critique before expansion.
- Ask for disconfirming evidence.
- Require tables when comparing ideas.
- Mark all uncertain claims as assumptions.
- Verify citations, results, and technical details yourself.

## Core Skills to Train

Research taste is one of the skills early-stage researchers should train deliberately. In this repo, research taste means practical judgment about problem importance, real gaps, testable ideas, experiment quality, and evidence boundaries. Use [docs/07-research-taste.md](07-research-taste.md) as the companion guide; this playbook focuses on weekly execution and training routines.

### Research Judgment

Practice deciding whether an idea is important, feasible, and testable. Ask AI to score ideas with a rubric, then disagree with the score and explain why.

### Literature Reading

Read papers into paper cards. Ask AI to extract claims and assumptions, then verify details in the paper. A useful paper note supports comparison across papers.

### Idea Generation

Generate ideas from observations, limitations, failures, and mismatches between assumptions and real robot behavior. Treat generated ideas as candidates for rejection.

### Experiment Design

Train the habit of asking: what would convince a skeptical reader? A good experiment has a baseline, a controlled variable, a metric, and a failure interpretation.

### Failure Analysis

Robot failures are data. Separate perception, planning, control, data, simulation, evaluation, and hardware causes before changing the method.

### Scientific Writing

Write from evidence outward. A claim without evidence is a placeholder. A limitation stated clearly is usually stronger than an overclaim.

## Paper-to-Idea Pipeline

1. Read one paper into a paper card.
2. Extract the main claim, evidence, assumptions, and limitations.
3. Ask what would break if the setup changed.
4. Compare with two to five related papers.
5. Identify a mismatch, missing evaluation, or unexplained failure mode.
6. Turn the observation into a possible gap.
7. Convert the gap into a falsifiable hypothesis.
8. Define the smallest experiment that could test it.

Example pattern:

```text
Paper observation -> limitation or assumption -> possible gap -> hypothesis -> minimal experiment -> expected evidence
```

## Idea-to-Experiment Pipeline

1. State the idea in one sentence.
2. State the mechanism you think causes improvement.
3. Identify the baseline.
4. Identify the smallest task where the mechanism should matter.
5. Choose one primary metric and one diagnostic metric.
6. Define an ablation that removes the proposed mechanism.
7. Write what result would make you abandon the idea.
8. Log every run in the experiment ledger.

If you cannot name the baseline, metric, and disconfirming result, the idea is not ready for implementation.

## Research Idea Evaluation Rubric

Score each item from 1 to 5.

| Criterion | Question |
|---|---|
| Importance | Would the answer matter for robot behavior, evaluation, or understanding? |
| Grounding | Is the idea connected to specific papers or observed failures? |
| Gap quality | Does the gap change the research question, or only add a small engineering tweak? |
| Hypothesis clarity | Can the idea be stated as a falsifiable hypothesis? |
| Baseline clarity | Is there a fair comparison method? |
| Experiment feasibility | Can a 4-week MVP produce useful evidence? |
| Risk awareness | Are likely confounders and failure modes named? |
| Evidence path | Is it clear what evidence would support or weaken the claim? |

Use the score to guide discussion. The decision still needs literature context and experimental constraints.

## Experiment Skill Ladder

1. Run an existing example and record the environment.
2. Reproduce one baseline behavior on a small task.
3. Change one parameter and predict the effect.
4. Add one diagnostic metric.
5. Run a controlled ablation.
6. Compare against a fair baseline.
7. Analyze failures by category.
8. Write a claim-evidence table.
9. Design a new minimal experiment from a hypothesis.
10. Decide the claim boundaries.

## Weekly Research Routine

Use a weekly rhythm that forces evidence accumulation.

- Monday: choose one question and one deliverable.
- Tuesday: read or reproduce; make paper cards or baseline notes.
- Wednesday: run a small experiment or diagnostic.
- Thursday: analyze failures and update the experiment ledger.
- Friday: write a weekly review with claims, evidence, gaps, and next actions.

Keep the week small enough that a failed run still produces useful information.

## 12-Week Training Plan

| Weeks | Focus | Output |
|---|---|---|
| 1-2 | Research area orientation | Personal profile, 5 paper cards, first literature matrix |
| 3-4 | Gap finding | 10 paper cards, research gap table, rejected idea notes |
| 5-6 | Hypothesis formation | 3 evaluated ideas, 1 chosen MVP hypothesis |
| 7-8 | Baseline and setup | Reproduction note, experiment ledger, first diagnostics |
| 9-10 | Minimal experiment | Baseline comparison, ablation, failure analysis |
| 11 | Evidence audit | Claim-evidence table, limitations, follow-up experiment |
| 12 | Research review | Short internal memo with what is known, unknown, and next |

## Common Traps for Early-Stage Researchers

- Reading many papers without producing paper cards.
- Asking AI for novelty before understanding baselines.
- Treating a missing feature as a research gap.
- Building a large system before defining the hypothesis.
- Changing multiple experiment variables at once.
- Ignoring failures because they do not fit the story.
- Writing claims before checking evidence.
- Letting AI generate confident language for weak results.
- Confusing simulator success with real-world robustness.

## Copyable Prompts

### Judgment Training

```text
I am an early-stage robotics researcher. Help train my research judgment.

Idea: [sanitized idea]
Related paper observations: [paper card bullets]
Available setup: [robot or simulator, data, compute, time]

Critique the idea using:
1. Importance
2. Gap quality
3. Feasibility
4. Baseline clarity
5. Evidence needed
6. Reasons to reject the idea

Return a score table and a revised, more testable version of the idea.
```

### Paper-to-Idea Extraction

```text
Use this paper card to generate research ideas, but be skeptical.

Paper card: [sanitized paper card]

Return:
- 3 observations from the paper
- 3 possible gaps
- 3 falsifiable hypotheses
- The smallest experiment for each
- Why each idea might be too weak
```

### Four-Week MVP Experiment

```text
Convert this robotics research idea into a 4-week MVP experiment.

Idea: [idea]
Hypothesis: [hypothesis]
Setup: [available platform]

Include:
- Minimal task
- Baseline
- Primary metric
- Diagnostic metric
- Ablation
- Weekly plan
- Kill criteria
- Expected evidence
```

### Skeptical Reviewer

```text
Act as a skeptical robotics reviewer.

Claim: [claim]
Evidence: [current evidence]
Experiment design: [summary]

Identify unsupported claims, missing baselines, confounders, weak metrics, and overgeneralization. Then suggest the smallest additional evidence that would improve the work.
```
