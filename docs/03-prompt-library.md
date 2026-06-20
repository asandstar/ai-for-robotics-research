# Prompt Library

Use these prompts as templates. Replace bracketed fields with sanitized context. Do not paste private notes, raw logs, credentials, unpublished results, or confidential lab details.

## Research Direction Selection

**Use case:** Narrow broad interests into feasible research directions.

**Recommended mode:** Strategic planning with explicit constraints.

**Input required:** Topic interests, available platforms, skills, time budget, evaluation constraints.

**Prompt template:**

```text
I am exploring robotics research directions in [area]. My constraints are:
- Platforms or simulators: [sanitized list]
- Skills available: [skills]
- Time budget: [duration]
- Evaluation constraints: [constraints]

Propose 5 research directions. For each, include:
1. Core question
2. Why it matters
3. Required evidence
4. Feasibility risks
5. First two validation steps
Avoid unsupported claims and mark assumptions clearly.
```

**Expected output:** Ranked candidate directions with risks and validation steps.

**Common mistakes:** Asking for novelty without constraints; treating suggestions as literature facts; ignoring evaluation feasibility.

## Frontier Scanning

**Use case:** Build a conceptual map of an active robotics topic.

**Recommended mode:** Concept mapping plus source verification.

**Input required:** Topic, known keywords, venues, papers already read.

**Prompt template:**

```text
Create a conceptual frontier map for [topic]. Keep it evergreen and do not present it as a latest-paper survey.

Include:
- Main problem formulations
- Common method families
- Typical evaluation setups
- Open questions
- Risks and limitations
- Search terms I should use to verify with primary sources

Separate established concepts from claims that require citation.
```

**Expected output:** Conceptual map and verification search terms.

**Common mistakes:** Asking for "latest" without verification; accepting fabricated citations; missing adjacent fields.

## Single-Paper Deep Reading

**Use case:** Convert one paper into structured research notes.

**Recommended mode:** Close reading with claim-evidence extraction.

**Input required:** Paper title, abstract, selected excerpts, figures, or verified PDF notes.

**Prompt template:**

```text
Help me read this robotics paper using the structure below.

Paper: [title and citation]
Provided excerpts or notes: [sanitized content]

Return:
1. Problem being solved
2. Main contribution
3. Method sketch
4. Assumptions
5. Evidence provided
6. Limitations acknowledged by the authors
7. Limitations I should check for
8. Relevance to [my sanitized research area]
9. Questions to verify in the original PDF

Do not invent details not present in the input.
```

**Expected output:** Paper card draft and verification questions.

**Common mistakes:** Providing too little paper context; letting AI infer results; skipping the original PDF check.

## Multi-Paper Research Gap Analysis

**Use case:** Identify gaps from a set of paper cards.

**Recommended mode:** Comparative analysis.

**Input required:** Sanitized paper cards or literature matrix.

**Prompt template:**

```text
Analyze the following paper cards to identify robotics research gaps.

Paper cards:
[paste sanitized cards]

Return a table with:
- Candidate gap
- Evidence from papers
- Why the gap matters
- Testable hypothesis
- Minimal experiment
- Required baseline
- Risk or alternative explanation

Only use evidence present in the cards. Mark unknowns explicitly.
```

**Expected output:** Research gap table with testable hypotheses.

**Common mistakes:** Treating absence from your notes as absence from the field; accepting vague gaps; ignoring baselines.

## Experiment Design Review

**Use case:** Stress-test an experiment plan before running it.

**Recommended mode:** Critical review.

**Input required:** Hypothesis, tasks, metrics, baselines, ablations, resource limits.

**Prompt template:**

```text
Review this robotics experiment design.

Hypothesis: [hypothesis]
Tasks: [tasks]
Method: [method]
Baselines: [baselines]
Ablations: [ablations]
Metrics: [metrics]
Resource limits: [limits]

Assess:
1. Whether the experiment tests the hypothesis
2. Missing baselines or controls
3. Confounders
4. Failure cases to log
5. Minimum evidence needed for the claim
6. Changes that would make the study more convincing
```

**Expected output:** Design critique and revision checklist.

**Common mistakes:** Using metrics that do not test the claim; adding too many variables; skipping failed-run logging.

## Robotics Debugging

**Use case:** Diagnose failures in robot learning, simulation, control, or evaluation.

**Recommended mode:** Fault-tree analysis.

**Input required:** Sanitized symptoms, setup summary, recent changes, observed vs expected behavior.

**Prompt template:**

```text
Help debug this robotics issue using a fault tree.

System summary: [sanitized summary]
Expected behavior: [expected]
Observed behavior: [observed]
Recent changes: [changes]
Available signals: [metrics, videos, logs summarized without private data]

Return:
- Likely failure categories
- Diagnostic checks in priority order
- What evidence would confirm or reject each cause
- One-change-at-a-time debugging plan

Do not assume access to raw logs or private system details.
```

**Expected output:** Prioritized diagnostics and next checks.

**Common mistakes:** Pasting raw logs; changing many variables at once; ignoring simulator or evaluation bugs.

## Result Analysis

**Use case:** Interpret experiment outputs without overstating claims.

**Recommended mode:** Evidence audit.

**Input required:** Metrics, comparisons, ablations, plots described in text, failed runs, known caveats.

**Prompt template:**

```text
Analyze these robotics experiment results.

Hypothesis: [hypothesis]
Results summary: [sanitized metrics and observations]
Baselines: [baseline summary]
Ablations: [ablation summary]
Known failures: [failure summary]

Create:
1. Supported claims
2. Unsupported or weak claims
3. Alternative explanations
4. Follow-up experiments
5. A claim-evidence table
Use cautious language and mark uncertainty.
```

**Expected output:** Supported interpretation and follow-up plan.

**Common mistakes:** Hiding failed runs; confusing correlation with mechanism; claiming generalization beyond tested settings.

## Paper Writing

**Use case:** Draft or revise a paper from evidence-backed claims.

**Recommended mode:** Structured writing and consistency checking.

**Input required:** Contribution statement, literature map, method summary, results, limitations.

**Prompt template:**

```text
Help structure a robotics paper from the following sanitized material.

Contribution: [contribution]
Problem: [problem]
Method summary: [method]
Evidence: [results summary]
Limitations: [limitations]
Related work notes: [notes]

Return:
- Paper outline
- Section goals
- Claim-evidence checks
- Places where citations are required
- Wording that avoids overstating the results
```

**Expected output:** Paper outline and revision targets.

**Common mistakes:** Drafting before claims are clear; burying limitations; using AI-generated citations without verification.

## Rebuttal Preparation

**Use case:** Respond to reviewer comments.

**Recommended mode:** Response planning and tone editing.

**Input required:** Sanitized review comments, relevant evidence, planned paper edits.

**Prompt template:**

```text
Help prepare a rebuttal for these sanitized reviewer comments.

Reviewer comments:
[comments]

Available evidence:
[evidence]

Possible paper edits:
[edits]

For each comment, provide:
1. Comment type: misunderstanding, missing evidence, disagreement, clarity, limitation, or scope
2. Concise response
3. Evidence to cite
4. Manuscript edit to promise, if appropriate
5. Tone risk to avoid
```

**Expected output:** Response plan with evidence references and edit commitments.

**Common mistakes:** Being defensive; promising experiments that cannot be run; adding unsupported claims.
