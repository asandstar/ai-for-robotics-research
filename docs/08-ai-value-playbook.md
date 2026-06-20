# AI Value Playbook

Advanced AI tools earn their cost when they change a research decision or produce an artifact you can reuse. In robotics, that usually means a sharper hypothesis, a smaller experiment, a better failure diagnosis, or a claim-evidence table that prevents overclaiming.

Keep private research details outside public prompts and outside this repository. Use sanitized summaries, synthetic examples, and public-safe artifacts.

## What Counts as High-Value AI Use

High-value AI use leaves behind a research asset:

- a paper card with assumptions and verification questions;
- a research gap table with reasons to reject weak gaps;
- a 4-week experiment plan with baseline, metric, diagnostic, and failure criteria;
- a fault tree for a failed robot run;
- a claim-evidence table with safer wording;
- a weekly decision log that explains what changed and why.

The next action should be specific enough to run, reject, or log:

- "Run the scripted controller before retraining the policy."
- "Revise the claim to simulated held-out objects."
- "Drop the idea unless contact diagnostics reveal failures hidden by success rate."

## Low-Value vs High-Value AI Tasks

| Low-value task | Higher-value replacement |
|---|---|
| Ask for a broad research idea. | Ask for hypotheses from one paper card and one robot constraint. |
| Ask for a field summary. | Ask for assumptions, baselines, and evaluation patterns from selected papers. |
| Ask AI to make a claim sound stronger. | Ask which parts of the claim are unsupported by current evidence. |
| Paste raw logs. | Provide a sanitized failure summary, expected behavior, observed behavior, and recent changes. |
| Generate many experiments. | Ask for the smallest experiment that can reject or revise one idea. |
| Ask for "novelty." | Ask what comparison would make the idea credible. |

## When to Use Advanced Reasoning

Use advanced reasoning when the task needs multi-step judgment across evidence, constraints, and failure modes:

- comparing several explanations for a failed robot behavior;
- deciding whether a gap is real or only a missing feature;
- designing an experiment that separates mechanism from confounders;
- checking whether a claim follows from the evidence;
- planning a week of research under time, robot, data, and compute constraints;
- preparing a rebuttal where the response must match reviewer concerns and available evidence.

Use a lighter tool or checklist for formatting, spelling, table cleanup, and routine Markdown conversion.

## Turning AI Conversations Into Reusable Research Assets

Treat an AI conversation as temporary workspace. The saved artifact should be short, structured, and sanitized.

1. Start with a sanitized input: paper card, failure summary, idea sketch, or result summary.
2. Ask for critique, alternatives, and evidence requirements.
3. Extract the durable artifact: table, checklist, experiment plan, fault tree, or claim-evidence review.
4. Remove prompt chatter, private context, local paths, raw logs, and speculative claims.
5. Save the artifact in your private research notebook. Add only synthetic or public-safe examples to this repository.

## Weekly AI Value Review

At the end of each week, review whether AI use improved the research process.

| Question | Good evidence |
|---|---|
| Which AI session changed a decision? | A dropped idea, revised hypothesis, or narrowed experiment. |
| Which output became a reusable artifact? | A worksheet, table, ledger entry, or fault tree. |
| Which suggestion was rejected? | A note explaining the literature, setup, or evidence reason. |
| Which claim became safer? | A claim-evidence table with revised wording. |
| Which private details were kept out? | Sanitized inputs and no raw logs or private paths. |
| What should be asked differently next week? | A more specific prompt, better constraints, or a smaller question. |

For reminders and recurring review loops, see [docs/09-active-workflows.md](09-active-workflows.md).

## Common Ways to Waste Advanced AI Tools

- Asking for novelty before reading enough papers to judge a gap.
- Asking for a polished story before the evidence table exists.
- Re-running vague prompts with no new constraints.
- Treating AI confidence as a substitute for baseline comparison.
- Debugging with raw symptoms and no expected behavior.
- Generating large project plans when a 4-week MVP would expose the risk.
- Saving chat transcripts while leaving reusable artifacts unwritten.
- Letting AI invent citation details, benchmark status, or field consensus.

## Copyable Prompts

### High-Value Task Selection

```text
I want to use an advanced reasoning model for robotics research.

Current situation:
I read a paper where a vision-only manipulation policy succeeds on a simulated pick-and-place task. The paper card suggests that contact-rich cases are weakly analyzed. I have access to a generic tabletop simulator and can run small pushing or insertion tasks. Real-robot access is unavailable this month.

Constraints:
- Platform: generic tabletop simulator
- Time: 4 weeks
- Data: small synthetic demonstration set
- Evaluation: task success, contact stability, recovery time
- Safety/privacy: no private dataset names, no raw logs, no lab identifiers

Recommend the highest-value AI task for this situation. Return:
- the task to ask AI to do
- the input I should provide
- the reusable artifact I should save
- the decision this should support
- private details I should keep out
```

### Conversation-to-Artifact Extraction

```text
Convert this sanitized AI-assisted research discussion into a reusable artifact.

Discussion summary:
We discussed a simulated pushing policy with high simulation success and low success in a small real-robot sanity check. Possible causes included camera lighting shift, friction mismatch, gripper latency, and different object reset distributions. The strongest next action was to compare real and simulated initial-state distributions before retraining.

Target artifact:
Experiment Debug Log fault tree

Return a concise Markdown artifact. Remove prompt chatter, unsupported claims, private details, and anything that should be verified in the original source.
```

### Experiment Critique for Value

```text
Critique this robotics experiment plan for research value.

Hypothesis:
Contact-stability diagnostics will reveal manipulation failures that binary task success hides.

Experiment plan:
- Task: simulated tabletop pushing with low-contact and contact-rich variants
- Baseline: vision-only imitation policy
- Metrics: task success, contact stability, slip events, recovery time
- Ablation: remove pose perturbations and compare diagnostic value
- Scope: 4 weeks

Available setup:
- Generic tabletop simulator
- Small synthetic demonstration set
- Limited compute
- No real-robot access this month

Return:
- what decision the experiment can support
- what claim it cannot support yet
- missing baseline or diagnostic
- most likely confounder
- smallest revision that improves evidence quality
```

### Weekly AI Value Review

```text
Review my AI use for this week of robotics research.

AI-assisted tasks:
- Extracted assumptions from two paper cards on simulated manipulation.
- Asked for possible gaps around contact-rich evaluation.
- Asked for a fault tree after a simulated policy failed under pose perturbations.
- Asked for stronger wording for a draft claim.

Artifacts produced:
- 2 paper cards
- 1 research gap table
- 1 fault tree
- 1 claim-evidence table

Decisions made:
- Keep the contact-stability diagnostic idea for one more week.
- Drop a broad "general manipulation robustness" claim.
- Run one ablation before writing the result summary.

Return:
- highest-value AI use
- lowest-value AI use
- artifact worth keeping
- suggestion I should reject or verify
- one prompt habit to improve next week
```
