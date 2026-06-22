# Research Drills Pack

These drills are repeatable exercises for early-stage robotics researchers. They are designed to train research judgment through small artifacts: paper assumptions, claim-evidence checks, gap triage notes, experiment plans, failure diagnoses, and weekly research taste reviews.

## 1. How to Use These Drills

Use these drills in private research notes. Do not copy private project details, raw logs, unpublished results, private paths, lab identifiers, or advisor comments into this public repository.

Each drill should produce one small artifact that can be reused later:

- a paper assumption list;
- a claim-evidence table;
- a gap triage decision;
- an idea ranking table;
- a 4-week minimal experiment plan;
- a failure diagnosis log;
- a reviewer critique summary;
- a weekly research taste review.

AI tools can help critique, structure, and pressure-test the work. The researcher still needs to verify papers, code, datasets, experiments, and conclusions against the actual evidence.

## 2. Drill Index

| Drill Name | Skill Trained | Input Needed | Output Artifact | Recommended Frequency |
|---|---|---|---|---|
| Paper Assumption Drill | Reading papers beyond the surface claim | One paper card | Assumption list | 1-2 papers per week |
| Claim-Evidence Drill | Checking whether claims match evidence | Paper, draft, or project claim | Claim-evidence table | Every paper read or draft update |
| Gap Triage Drill | Separating real gaps from weak project ideas | Candidate gap and supporting papers | Gap category and score | Weekly during idea search |
| Idea Ranking Drill | Comparing ideas under constraints | 3-5 candidate ideas | Ranked idea table | Every 2 weeks |
| Minimal Experiment Drill | Turning ideas into testable plans | One selected idea | 4-week experiment plan | Before implementation |
| Failure Diagnosis Drill | Learning from failed runs | Failed experiment summary | Fault tree and next check | After each meaningful failure |
| Reviewer Simulation Drill | Anticipating fair criticism | Claim, method, evidence, limitations | Reviewer-style critique | Before writing or rebuttal |
| Weekly Research Taste Review | Training judgment over time | Week's notes and artifacts | Weekly review note | Weekly |

## 3. Paper Assumption Drill

Purpose: Train readers to identify the assumptions behind a paper.

**When to use:** After the first or second pass through a paper, before adding it to a literature matrix.

**Inputs:**

- paper card;
- task setting;
- method summary;
- experiments and metrics;
- stated limitations.

**Steps:**

1. Write the paper's main claim in one sentence.
2. List assumptions about the task, robot, simulator, data, labels, sensors, action space, and evaluation.
3. Mark each assumption as explicit, implicit, or uncertain.
4. Ask which assumption would break the method first in a new setting.
5. Choose one assumption worth testing or tracking.

**Output format:**

```markdown
## Paper Assumption Drill

- Paper:
- Main claim:

| Assumption | Explicit / Implicit / Uncertain | Evidence in Paper | What Could Break It | Test or Follow-Up |
|---|---|---|---|---|
|  |  |  |  |  |

## Assumption to Track
-
```

**Quality checklist:**

- The assumptions are specific enough to test.
- The list includes experiment assumptions, not only method assumptions.
- The strongest claim is tied to the assumptions that support it.
- At least one assumption points to a possible follow-up experiment.

**Common mistakes:**

- Repeating the authors' limitations without adding judgment.
- Listing vague assumptions such as "needs good data."
- Ignoring robot setup, sensors, timing, and contact conditions.
- Treating benchmark success as proof of broad deployment readiness.

**AI prompt:**

```text
I am using sanitized notes from a robotics paper.

Paper summary:
[summary]

Method:
[method]

Experiments:
[tasks, baselines, metrics]

Stated limitations:
[limitations]

Identify the assumptions behind the paper. Separate explicit assumptions from implicit assumptions. Include task, data, robot or simulator, sensors, action representation, evaluation protocol, and evidence assumptions. For each assumption, explain what could break it and suggest one follow-up check.
```

**Human review questions:**

- Did the AI invent any paper details?
- Which assumptions are actually stated in the paper?
- Which assumption matters most for my research direction?
- Is there a cheap test for the most fragile assumption?

## 4. Claim-Evidence Drill

Purpose: Train readers to check whether evidence supports the paper or project claim.

**When to use:** After reading a paper's experiments, after a project result, or before writing a draft claim.

**Inputs:**

- claim;
- experiment setup;
- baselines;
- metrics;
- failure cases;
- limitations.

**Steps:**

1. Copy the claim exactly or write the planned claim.
2. List evidence that directly supports it.
3. List missing evidence and alternative explanations.
4. Rewrite the claim so it fits the current evidence.
5. Name the next experiment that would strengthen or falsify the claim.

**Output format:**

```markdown
## Claim-Evidence Drill

| Claim | Direct Evidence | Missing Evidence | Alternative Explanation | Safer Wording | Next Evidence Needed |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
```

**Quality checklist:**

- The evidence comes from actual experiments or cited public sources.
- The safer wording is narrower than the original claim when evidence is limited.
- Alternative explanations are plausible.
- The next evidence target is measurable.

**Common mistakes:**

- Using narrative plausibility as evidence.
- Ignoring failed or ambiguous runs.
- Claiming real-robot robustness from simulator-only tests.
- Treating a single baseline as a complete comparison.

**AI prompt:**

```text
Review this robotics research claim against the available evidence.

Claim:
[claim]

Evidence:
[tasks, metrics, baselines, results, failures, limitations]

Return a claim-evidence table with direct evidence, missing evidence, alternative explanations, safer wording, and the next experiment needed. Flag any claim that is larger than the evidence.
```

**Human review questions:**

- Would a skeptical reviewer accept the evidence?
- Does the claim depend on missing baselines or unreported failures?
- Is the safer wording still useful?
- What result would make me withdraw the claim?

## 5. Gap Triage Drill

Purpose: Help distinguish a real research gap from an ordinary limitation, engineering cleanup, benchmark extension, or idea that is too large for current resources.

**When to use:** During idea search or after building a small literature matrix.

**Inputs:**

- candidate gap;
- paper observations;
- current baselines;
- resources and time constraints.

**Steps:**

1. Write the candidate gap in one sentence.
2. Identify the evidence that the gap exists across more than one paper or result.
3. Categorize the gap.
4. Score it using the table below.
5. Decide: pursue, revise, park, or reject.

**Scoring table:**

| Score | Meaning |
|---:|---|
| 1 | Weak observation, little evidence, unclear research value |
| 2 | Real limitation, but mainly an implementation or reporting issue |
| 3 | Plausible gap with a testable angle, evidence still thin |
| 4 | Clear gap, feasible test, relevant to a larger problem |
| 5 | Strong gap with clear evidence, sharp hypothesis, and tractable experiment |

| Candidate Gap | Category | Evidence | Score 1-5 | Decision | Reason |
|---|---|---|---:|---|---|
|  | Real gap / ordinary limitation / engineering cleanup / benchmark extension / too large |  |  | Pursue / revise / park / reject |  |

**Output format:** One scored gap triage table plus one decision sentence.

**Quality checklist:**

- The gap is tied to evidence, not preference.
- The category is honest.
- The decision accounts for available time and setup.
- A score of 4 or 5 has a plausible experiment path.

**Common mistakes:**

- Calling every limitation a research gap.
- Choosing a gap because it sounds fashionable.
- Ignoring whether the gap can be tested.
- Starting a large system project with no 4-week check.

**AI prompt:**

```text
Triage this candidate robotics research gap.

Candidate gap:
[gap]

Evidence from papers or experiments:
[evidence]

Available setup and constraints:
[setup, compute, robot or simulator, time]

Classify it as a real research gap, ordinary limitation, engineering cleanup, benchmark extension, or too large for current resources. Score it from 1 to 5 and explain the decision. Suggest the smallest evidence-producing check if it should be pursued or revised.
```

**Human review questions:**

- Does the category feel too generous?
- What evidence would change the score?
- Can I explain the gap without buzzwords?
- Is the next check small enough to run soon?

## 6. Idea Ranking Drill

Purpose: Compare candidate ideas by importance, novelty, testability, feasibility, baseline availability, evidence clarity, 4-week MVP potential, and risk.

**When to use:** When you have several possible projects and need to choose one to test first.

**Inputs:** Three to five candidate ideas, paper observations, constraints, and available baselines.

**Steps:**

1. Give every idea a short name.
2. Score each criterion from 1 to 5.
3. Add one sentence explaining the lowest score.
4. Pick one idea to test and one idea to park.

**Copyable table:**

```markdown
| Idea | Importance | Novelty | Testability | Feasibility | Baseline Availability | Evidence Clarity | 4-Week MVP Potential | Risk | Decision |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
|  |  |  |  |  |  |  |  |  | Test / revise / park |
```

**Output format:** Ranked table plus a one-paragraph decision note.

**Quality checklist:**

- Scores reflect current resources.
- Low feasibility is treated seriously.
- Baseline availability is explicit.
- The chosen idea has a path to evidence.

**Common mistakes:**

- Picking the most exciting idea despite poor testability.
- Treating novelty as enough.
- Ignoring baseline reproduction cost.
- Ranking without writing the decision rule.

**AI prompt:**

```text
Rank these candidate robotics research ideas under my current constraints.

Ideas:
[ideas]

Evidence and paper observations:
[evidence]

Resources:
[robot or simulator, data, compute, time, baseline access]

Score each idea for importance, novelty, testability, feasibility, baseline availability, evidence clarity, 4-week MVP potential, and risk. Recommend one idea to test first, one to revise, and one to park. Explain the decision using concrete evidence and constraints.
```

**Human review questions:**

- Did I over-score the idea I already liked?
- Is the top idea testable in four weeks?
- Is the risk scientific, engineering, or resource-related?
- What would make the parked idea worth revisiting?

## 7. Minimal Experiment Drill

Purpose: Turn a vague idea into a 4-week minimal experiment.

**When to use:** Before implementation, baseline reproduction, or experiment scheduling.

**Inputs:** One candidate idea, research question, paper assumptions, available setup, and baseline.

**Steps:**

1. Write the research question.
2. Write a testable hypothesis.
3. Define the smallest task setup.
4. Choose one baseline.
5. Choose one primary metric and one diagnostic metric.
6. Add one ablation.
7. Define a failure condition.
8. Define the decision rule for proceed, revise, or stop.

**Output format:**

```markdown
## Minimal Experiment Plan

- Research question:
- Hypothesis:
- Smallest task setup:
- Baseline:
- Primary metric:
- Diagnostic metric:
- Ablation:
- Failure condition:
- Decision rule:
- 4-week scope:
```

**Quality checklist:**

- The hypothesis can be wrong.
- The baseline is available or reproducible.
- The diagnostic metric explains more than success rate.
- The failure condition is written before running the experiment.
- The decision rule prevents endless tuning.

**Common mistakes:**

- Designing a full paper instead of one evidence-producing test.
- Leaving the baseline undefined.
- Adding too many metrics.
- Changing the hypothesis after seeing weak results.

**AI prompt:**

```text
Convert this robotics research idea into a 4-week minimal experiment.

Idea:
[idea]

Research question:
[question]

Available setup:
[robot or simulator, data, compute, time]

Candidate baseline:
[baseline]

Return a minimal experiment plan with hypothesis, smallest task setup, baseline, primary metric, diagnostic metric, ablation, failure condition, decision rule, and weekly milestones. Flag any part that is too large or under-specified.
```

**Human review questions:**

- Can I run the first sanity check this week?
- Is the experiment testing the idea or merely building infrastructure?
- What result would make me revise the idea?
- What claim would the experiment still fail to support?

## 8. Failure Diagnosis Drill

Purpose: Use failed experiments as information.

**When to use:** After a failed run, unstable result, sim-to-real drop, surprising ablation, or reproduction mismatch.

**Inputs:** Expected behavior, observed behavior, setup, recent changes, metrics, and sanitized logs or summaries.

**Steps:**

1. Write expected and observed behavior.
2. Fill the fault tree.
3. Mark evidence for and against each cause.
4. Choose one diagnostic test.
5. Avoid changing multiple variables before the next check.

**Fault tree:**

| Category | Possible Cause | Evidence For | Evidence Against | Diagnostic Test | Next Action |
|---|---|---|---|---|---|
| Perception |  |  |  |  |  |
| Data |  |  |  |  |  |
| Model |  |  |  |  |  |
| Action representation |  |  |  |  |  |
| Control |  |  |  |  |  |
| Simulation-real mismatch |  |  |  |  |  |
| Evaluation protocol |  |  |  |  |  |
| Hardware/system issue |  |  |  |  |  |
| Hypothesis weakness |  |  |  |  |  |

**Output format:** One fault tree plus one next diagnostic test.

**Quality checklist:**

- The diagnosis includes hypothesis weakness, not only system bugs.
- The next action changes one variable when possible.
- Evidence is separated from speculation.
- The log is sanitized before sharing.

**Common mistakes:**

- Retrying the same run without a diagnosis.
- Blaming the model before checking data and evaluation.
- Changing code, data, and metrics at the same time.
- Treating a failed hypothesis as wasted effort.

**AI prompt:**

```text
Diagnose this failed robotics experiment using sanitized information.

Expected behavior:
[expected]

Observed behavior:
[observed]

Setup:
[robot or simulator, task, model, baseline]

Recent changes:
[changes]

Evidence:
[metrics, summarized logs, observations]

Build a fault tree across perception, data, model, action representation, control, simulation-real mismatch, evaluation protocol, hardware/system issue, and hypothesis weakness. Recommend the next one-variable diagnostic test.
```

**Human review questions:**

- Which cause has actual evidence?
- Which cause is easiest to rule out?
- Did the failure challenge the hypothesis?
- What should remain unchanged in the next run?

## 9. Reviewer Simulation Drill

Purpose: Use AI to simulate a skeptical but fair reviewer.

**When to use:** Before writing, before a group meeting, before submission, or while preparing rebuttal.

**Inputs:** Claim, method summary, experiments, baselines, metrics, limitations, and intended venue style if public-safe.

**Steps:**

1. Provide sanitized project information.
2. Ask for major concerns, missing evidence, unclear claims, and likely reviewer questions.
3. Separate valid critique from critique based on missing or invented details.
4. Convert valid critique into experiment, writing, or claim-revision tasks.

**What to ask:**

- Which claim is least supported?
- Which baseline or ablation is missing?
- Which failure mode would a reviewer ask about?
- Which wording overstates the evidence?
- What experiment would most improve credibility?

**Expected output:**

- top reviewer concerns;
- missing evidence list;
- claim revision suggestions;
- prioritized next actions;
- assumptions the reviewer made.

**How to use the critique:** Treat it as a stress test. Verify every factual point. Discard feedback that depends on invented papers, invented norms, or unavailable resources.

**AI prompt:**

```text
Act as a skeptical but fair robotics reviewer.

Project summary:
[summary]

Main claim:
[claim]

Method:
[method]

Experiments:
[tasks, baselines, metrics, results, failures]

Limitations:
[limitations]

Identify the strongest objections, missing evidence, unclear claims, and likely reviewer questions. Separate major issues from minor writing issues. Do not invent citations or assume unavailable experiments. Return prioritized actions for experiments, analysis, and writing.
```

**Human review questions:**

- Which critique is supported by my actual evidence?
- Which critique depends on a misunderstanding I can fix in writing?
- Which critique requires a new experiment?
- Which critique is outside the scope of the current project?

## 10. Weekly Research Taste Review

Purpose: Help readers review whether they are building judgment rather than just doing busywork.

**When to use:** Once per week, ideally before planning the next week.

**Inputs:** Paper cards, drill logs, experiment notes, failure diagnoses, claim-evidence tables, and next milestone.

**Steps:**

1. List completed work.
2. Count papers read, ideas generated, experiments run, failures analyzed, and claims revised.
3. Identify one judgment that improved.
4. Identify one claim or idea that became weaker.
5. Choose next week's decision.

**Output format:**

```markdown
## Weekly Research Taste Review

- Week:
- Completed work:
- Papers read:
- Ideas generated:
- Experiments run:
- Failures analyzed:
- Claims revised:
- Judgment improved:
- Weakest current claim:
- Next week's decision:
```

**Quality checklist:**

- The review names evidence, not only activity.
- At least one claim was checked or revised.
- Failed experiments are interpreted.
- Next week's decision is concrete.

**Common mistakes:**

- Reporting hours worked without evidence gained.
- Counting papers without recording assumptions or claims.
- Treating more ideas as progress.
- Avoiding the question of what to stop doing.

**AI prompt:**

```text
Review this research week for judgment growth.

Completed work:
[work]

Papers read:
[paper cards or summaries]

Ideas generated:
[ideas]

Experiments run:
[experiments]

Failures analyzed:
[failures]

Claims revised:
[claims]

Identify evidence gained, weak claims, questionable assumptions, ideas to stop pursuing, and next week's most important decision. Keep the review concrete and tied to artifacts.
```

**Human review questions:**

- What did I learn that changes my next experiment?
- Which artifact is missing or weak?
- Which idea should I stop spending time on?
- What evidence do I need next week?

## 11. Synthetic Mini Example

This example is synthetic and public-safe. It does not describe a real unpublished project.

```markdown
## Paper Assumption
A simulated manipulation paper assumes object pose perturbations are small and reset conditions are consistent across trials.

## Possible Gap
The reported success rate may hide sensitivity to initial object pose.

## Idea Score
| Criterion | Score | Note |
|---|---:|---|
| Importance | 4 | Robustness to reset variation matters for manipulation evaluation. |
| Novelty | 3 | Perturbation testing is common, but contact-specific diagnosis may add value. |
| Testability | 5 | A simulator sweep can test the assumption quickly. |
| Feasibility | 5 | No new hardware is needed. |
| Baseline availability | 4 | Vision-only imitation baseline is available in generic form. |
| Evidence clarity | 4 | Success rate and recovery time can be compared across perturbation bins. |
| 4-week MVP potential | 5 | A small sweep and failure table are enough for the first check. |
| Risk | 2 | The diagnostic may reproduce known behavior without adding insight. |

## Minimal Experiment
- Task: synthetic tabletop pushing with controlled object-pose perturbations.
- Baseline: vision-only imitation policy.
- Primary metric: task success.
- Diagnostic metric: recovery time and contact-loss frequency.
- Ablation: no perturbation versus controlled perturbation bins.

## Failure Condition
If diagnostic metrics do not change across perturbation bins, the proposed gap is weak or the diagnostic is poorly chosen.

## Next Action
Run a small perturbation sweep, fill a claim-evidence table, and decide whether to revise the idea toward evaluation methodology or drop it.
```
