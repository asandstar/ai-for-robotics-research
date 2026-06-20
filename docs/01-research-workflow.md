# Research Workflow

This page follows a full robotics research loop and shows where AI tools can help. AI output belongs in drafts, checklists, and critiques; evidence still comes from papers, experiments, and reviewed artifacts.

## Beginner Researcher Mode

Early-stage researchers should use this workflow as a small evidence-building loop. The useful artifacts are paper cards, matrices, hypotheses, experiment ledgers, and claim-evidence tables that another researcher can inspect.

1. Start with paper cards for 5 to 10 papers. For each paper, record the problem, method, evidence, assumptions, and limitations.
2. Build a small literature matrix. Compare papers by task, method family, evaluation, baselines, and limitations.
3. Generate a research gap table. Ask AI to propose gaps, then reject gaps that are only small engineering tweaks or unsupported by the matrix.
4. Evaluate ideas with a rubric. Score each idea for importance, novelty, feasibility, evidence path, baseline clarity, and risk.
5. Design a 4-week MVP experiment. Prefer the smallest experiment that can test one hypothesis or kill a weak idea.
6. Keep an experiment ledger. Record setup, variables, runs, failures, and decisions before writing any narrative.
7. Review claims against evidence. Every claim should point to a paper, experiment, ablation, failure analysis, or explicit limitation.

Advanced reasoning models are useful here when they critique weak assumptions, generate alternative explanations, and convert vague ideas into testable experiments. The paper still has to be read, the experiment still has to run, and the evidence threshold still has to be set by the researcher.

## 1. Finding a Research Direction

**Purpose:** Choose a tractable area where the lab's skills, equipment, and research taste can produce evidence.

**Inputs:** Personal research profile, lab constraints, available robots or simulators, broad topic interests, recent papers, advisor or collaborator feedback.

**AI-assisted workflow:**

1. Ask for candidate directions under explicit constraints.
2. Request tradeoffs: novelty, feasibility, required infrastructure, evaluation difficulty, and risk.
3. Convert broad interests into testable research questions.
4. Ask for what evidence would make each direction convincing.

**Expected output:** A short list of candidate directions with scope, assumptions, risks, and first validation steps.

**Quality checklist:**

- Direction is specific enough to search and test.
- Required robot platform, data, and compute are plausible.
- The idea has more substance than "combine method A with robot task B."
- Evaluation can distinguish success from noise.

## 2. Scanning Frontiers

**Purpose:** Understand active conceptual areas without pretending to have a complete survey.

**Inputs:** Topic keywords, venue names, known authors or labs, tutorial talks, review papers, benchmark pages, recent arXiv searches.

**AI-assisted workflow:**

1. Ask for a conceptual map of the topic.
2. Identify recurring problem formulations, assumptions, and evaluation styles.
3. Ask for adjacent fields that may offer methods or warnings.
4. Verify important claims with primary sources.

**Expected output:** A frontier map with themes, open questions, common benchmarks, and source links to verify manually.

**Quality checklist:**

- Separates concepts from specific papers.
- Avoids claiming a paper is state of the art without verification.
- Includes failure modes and limitations.
- Records search terms and sources used.

## 3. Reading Papers

**Purpose:** Extract claims, methods, assumptions, evidence, and reusable ideas from individual papers.

**Inputs:** Paper PDF, abstract, figures, method section, experiments, supplementary material, code if available.

**AI-assisted workflow:**

1. Summarize the paper in the structure of problem, method, evidence, and limitations.
2. Ask for definitions of unfamiliar terms.
3. Build a claim-evidence table.
4. Compare the paper's assumptions with your target setup.
5. Verify important details against the PDF.

**Expected output:** A paper card with citation, core contribution, method sketch, evidence, limitations, and follow-up questions.

**Quality checklist:**

- Notes distinguish what the authors claim from what you infer.
- Quantitative results are copied carefully and sourced.
- Limitations are not softened.
- Relevance to your work is explicit.

## 4. Building a Literature Map

**Purpose:** Organize papers by problem, method, assumptions, evaluation, and evidence strength.

**Inputs:** Paper cards, citation graph, benchmark names, method categories, datasets, task families.

**AI-assisted workflow:**

1. Ask AI to cluster paper cards by research question and method.
2. Create a literature matrix with consistent columns.
3. Identify which papers are foundational, incremental, or evaluation-focused.
4. Ask for missing categories, then verify through search.

**Expected output:** A literature matrix and short narrative of the field structure.

**Quality checklist:**

- Papers are grouped by technical substance; keyword overlap is treated as weak evidence.
- Matrix columns support comparison.
- Missing evidence is marked as unknown, not guessed.
- Sources remain traceable.

## 5. Identifying Research Gaps

**Purpose:** Find a gap that is meaningful, testable, and stronger than an untried combination.

**Inputs:** Literature matrix, limitations from paper cards, failed reproduction notes, benchmark weaknesses, practical deployment constraints.

**AI-assisted workflow:**

1. Ask for gaps implied by the matrix.
2. Rank gaps by importance, feasibility, and evidence needed.
3. Convert each gap into a falsifiable question.
4. Ask what result would close or weaken the gap.

**Expected output:** A research gap table with candidate hypotheses and evaluation plans.

**Quality checklist:**

- Gap is grounded in literature, assumptions, failures, or missing evidence.
- Gap matters for robotics behavior or understanding.
- A negative result would still teach something.
- Evaluation avoids hidden leakage or unfair baselines.

## 6. Forming a Hypothesis

**Purpose:** Turn a research gap into a claim that experiments can test.

**Inputs:** Chosen gap, mechanism intuition, baseline behavior, expected failure cases, available metrics.

**AI-assisted workflow:**

1. Draft hypotheses in falsifiable language.
2. Ask for alternative explanations.
3. Define observable predictions.
4. Map each prediction to an experiment and metric.

**Expected output:** A hypothesis statement with assumptions, predictions, and disconfirming evidence.

**Quality checklist:**

- Hypothesis states mechanism and scope.
- Predictions are measurable.
- Confounders are named.
- The work can survive if the first version fails.

## 7. Designing Experiments

**Purpose:** Create experiments that fairly test the hypothesis under robotics constraints.

**Inputs:** Hypothesis, tasks, robot or simulator setup, baselines, metrics, compute budget, safety constraints.

**AI-assisted workflow:**

1. Ask for an experiment plan with variables, controls, and metrics.
2. Request baseline and ablation suggestions.
3. Ask for threats to validity.
4. Convert the plan into an experiment ledger.

**Expected output:** A compact experiment plan with task suite, baselines, ablations, metrics, seeds, and stopping rules.

**Quality checklist:**

- Baselines are appropriate and reproducible.
- Metrics measure the claimed behavior.
- Ablations isolate the proposed contribution.
- Resource limits and safety constraints are explicit.

## 8. Reproducing Baselines

**Purpose:** Establish a trustworthy comparison point before changing the method.

**Inputs:** Baseline code, paper details, environment setup, dependencies, datasets, simulator version, hardware notes.

**AI-assisted workflow:**

1. Ask AI to convert setup instructions into a reproducibility checklist.
2. Compare expected and observed metrics.
3. Summarize deviations from the original setup.
4. Draft questions for issue trackers or collaborators without exposing private data.

**Expected output:** A baseline reproduction note with environment, command summary, observed behavior, and known deviations.

**Quality checklist:**

- Version information is recorded.
- Deviations are explicit.
- Failed reproductions are not treated as proof the baseline is weak.
- Local paths and credentials are not published.

## 9. Analyzing Failures

**Purpose:** Understand why a robot, policy, training run, or evaluation failed before changing too many variables.

**Inputs:** Logs, videos, metrics, environment state, policy checkpoints, task definitions, seed information.

**AI-assisted workflow:**

1. Provide sanitized summaries of symptoms and constraints.
2. Ask for a fault tree: perception, control, planning, data, simulation, evaluation, or hardware.
3. Generate targeted diagnostic checks.
4. Track one change at a time.

**Expected output:** A failure analysis note with hypotheses, diagnostics, evidence, and next action.

**Quality checklist:**

- Raw logs are sanitized before sharing.
- Failure categories are separated.
- The next diagnostic is specific.
- Changes are documented in the experiment ledger.

## 10. Analyzing Results

**Purpose:** Convert experiment outputs into cautious, evidence-backed interpretations.

**Inputs:** Metrics, confidence intervals if applicable, plots, videos, failed runs, ablations, baseline comparisons.

**AI-assisted workflow:**

1. Ask for a claim-evidence table from the results.
2. Identify alternative explanations and missing controls.
3. Draft result summaries with uncertainty language.
4. Check whether figures support the intended claims.

**Expected output:** A result analysis memo with supported claims, unsupported claims, limitations, and next experiments.

**Quality checklist:**

- Claims match the strength of evidence.
- Negative and failed runs are considered.
- Statistical and practical significance are separated.
- Figures are readable and not cherry-picked.

## 11. Writing Papers

**Purpose:** Communicate the problem, method, evidence, and limitations clearly.

**Inputs:** Literature map, hypothesis, experiment ledger, result analysis, figures, related work notes.

**AI-assisted workflow:**

1. Draft an outline based on claims and evidence.
2. Ask AI to identify missing logical links.
3. Improve clarity, definitions, and section flow.
4. Check that every claim has a citation or experiment.

**Expected output:** A paper outline, section drafts, related work structure, and claim-evidence audit.

**Quality checklist:**

- Contribution is specific.
- Related work is fair.
- Limitations are visible.
- No result is overstated.

## 12. Preparing Rebuttals

**Purpose:** Respond to reviewer concerns with evidence, clarity, and restraint.

**Inputs:** Reviews, paper draft, experiment ledger, result tables, supplementary material, known limitations.

**AI-assisted workflow:**

1. Classify reviewer comments by type: misunderstanding, missing evidence, disagreement, clarity, or limitation.
2. Draft concise responses that cite paper sections or results.
3. Identify which responses require new experiments or edits.
4. Remove defensive language.

**Expected output:** A rebuttal plan with response bullets, evidence references, and proposed manuscript edits.

**Quality checklist:**

- Each response addresses the actual concern.
- New claims are supported.
- Tone is factual and respectful.
- Promised changes are feasible.
