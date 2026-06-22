# Sanitized Examples

These examples are synthetic. They show the desired structure without exposing private research details.

## Sanitized Paper Card

```markdown
# Paper Card

## Citation
- Title: Example Policy Learning for Contact-Rich Manipulation
- Authors: Public example authors
- Venue or year: Synthetic, 2026
- Link: Not applicable

## Problem
Learning robot manipulation policies that remain stable when object contact is uncertain.

## Core Contribution
A policy training setup that combines visual observations with a compact contact-state representation.

## Method Sketch
The method trains a behavior cloning policy on demonstrations and adds an auxiliary prediction target for contact state.

## Evidence
- Tasks: Synthetic pushing and insertion tasks.
- Baselines: Vision-only behavior cloning and a simple state-based controller.
- Metrics: Task success rate, contact stability, recovery after perturbation.
- Key results: Synthetic example only; no real result claimed.

## Assumptions
The contact-state representation is available during training and can be estimated during evaluation.

## Limitations
The setup may not transfer to deformable objects or highly variable hardware.

## Relevance to My Work
Useful as a pattern for separating task success from contact-quality metrics.

## Questions to Verify
- Does the auxiliary target improve robustness or only training stability?
- Are failures analyzed by contact mode?
```

## Sanitized Research Gap

```markdown
| Candidate Gap | Evidence | Why It Matters | Testable Hypothesis | Minimal Experiment | Baseline | Risk |
|---|---|---|---|---|---|---|
| Policies are often evaluated on task success without diagnosing contact quality. | Several public papers report success rates but limited contact analysis. | Contact failures can be hidden until deployment conditions change. | Adding contact-aware diagnostics will reveal failure modes not captured by success rate alone. | Compare success rate and contact stability across a small synthetic manipulation suite. | Vision-only policy with standard success metric. | Contact metrics may be noisy or task-specific. |
```

## Sanitized Experiment Plan

```markdown
# Experiment Plan

## Hypothesis
A contact-aware diagnostic metric will identify manipulation failures that are not visible from binary task success alone.

## Setup
- Robot or simulator: Generic tabletop simulator.
- Task: Synthetic object alignment task.
- Policies: Vision-only baseline and contact-aware variant.
- Metrics: Task success, contact stability, recovery time, failure category.

## Baselines
- Vision-only behavior cloning policy.
- Simple scripted controller for sanity checking the task.

## Ablations
- Remove contact diagnostic.
- Vary object friction in simulation.
- Evaluate with and without small pose perturbations.

## Expected Evidence
- A table comparing success rate and contact stability.
- Failure notes grouped by perception, control, and contact mode.
- Short videos or frame summaries from representative public-safe runs.

## Public-Safety Notes
- Use synthetic object names.
- Do not include private dataset paths.
- Do not claim real robot performance unless validated and cleared for release.
```

## Synthetic Paper-to-Experiment Pipeline

This example is synthetic and public-safe. It does not describe a real unpublished project.

```markdown
## Paper Observation
A public paper reports strong success on a simulated tabletop manipulation task, but the evaluation mainly uses binary task success.

## Possible Gap
The evaluation may not reveal whether policies succeed through stable contact behavior or through fragile trajectories that work only under narrow object poses.

## Research Idea
Add a contact-stability diagnostic to manipulation policy evaluation and test whether it reveals failure modes hidden by binary success.

## Minimal Experiment
- Setup: Generic tabletop simulator with synthetic objects.
- Task: Move an object to a target region under small pose perturbations.
- Baseline: Vision-only behavior cloning policy.
- Variant: Same policy evaluated with contact-stability diagnostics.
- Primary metric: Task success.
- Diagnostic metric: Contact stability and recovery time after perturbation.
- Ablation: Remove perturbations and compare whether the diagnostic still adds information.

## Expected Evidence
- If task success is similar but contact stability differs, the diagnostic may reveal a meaningful failure mode.
- If contact stability does not vary across conditions, the proposed gap may be weak or the diagnostic may be poorly chosen.
- No claim should be made about real robot robustness without real-world validation.
```

## Synthetic Research Taste Example

This example is synthetic and public-safe. It is meant to show judgment, not results.

```markdown
## Paper Observation
A public simulated-manipulation paper reports high task success, but the paper card notes limited analysis of failures under small object-pose perturbations.

## Possible Gap
The reported success may not distinguish robust manipulation from behavior that depends on narrow initial conditions.

## Research Idea
Evaluate whether perturbation-based diagnostics reveal brittle behavior that task success alone hides.

## Minimal Experiment
- Task: Synthetic tabletop object relocation in a generic simulator.
- Baseline: Vision-only imitation policy.
- Perturbation: Small randomized changes in initial object pose.
- Primary metric: Task success.
- Diagnostic metric: Recovery time and failure category.
- Ablation: No perturbation versus controlled perturbation.

## Evidence Needed
- Success and diagnostic metrics across both conditions.
- Failure categories showing whether perturbations expose a distinct weakness.
- Claim-evidence table separating simulator-only evidence from any real-robot claim.

## Possible Reason to Drop or Revise
If failures are random, metrics are unstable, or the diagnostic does not reveal information beyond task success, revise the idea or drop it.
```

## Worked Example 1: Paper to Minimal Experiment

Synthetic and public-safe. No real unpublished result is implied.

```markdown
## Paper Observation
A vision-only manipulation policy succeeds in a synthetic pick-and-place task when objects are rigid and contact is brief.

## Possible Gap
The evaluation may miss contact-rich failures where the gripper must slide, press, or maintain force while moving the object.

## Research Idea
Test whether adding contact-state diagnostics reveals failures hidden by task success in vision-only manipulation policies.

## Minimal Experiment
- Task: Generic simulated insertion or pushing task with controlled contact.
- Baseline: Vision-only imitation policy.
- Metric: Task success.
- Diagnostic: Contact stability, slip events, and recovery time.
- Scope: Compare baseline behavior across low-contact and contact-rich variants.

## Evidence Needed
- Task success and diagnostic metrics for both task variants.
- Failure categories showing whether contact-rich trials fail differently.

## Reason to Revise or Drop
If contact diagnostics add no information beyond task success, revise the metric or drop the idea.
```

## Worked Example 2: Failed Experiment Diagnosis

Synthetic and public-safe. It uses a generic sim-to-real pattern.

```markdown
## Failed Experiment
A policy reaches high success in simulation on a tabletop relocation task. Real-robot trials show much lower success.

## Possible Causes
- Perception: real camera lighting shifts object appearance.
- Control: real gripper latency changes contact timing.
- Dynamics: simulated friction is too simple.
- Evaluation: real-world reset positions differ from simulation.

## Diagnostic Tests
- Replay real camera frames through the perception stack.
- Run a scripted controller on the real robot to separate policy failure from hardware or task setup.
- Sweep friction and latency in simulation.
- Log initial object pose distribution for real trials and simulated trials.

## Next Action
Run the scripted-controller sanity check and compare real versus simulated initial-state distributions before retraining the policy.
```

## Worked Example 3: Claim-Evidence Alignment

Synthetic and public-safe. It does not report real results.

```markdown
## Paper Draft Claim
The method generalizes to unseen objects in tabletop manipulation.

## Current Evidence
- Tested on three synthetic object shapes.
- Compared against one vision-only baseline.
- No real-robot trials yet.
- Failure cases show unstable grasps for thin objects.

## Evidence Gap
The claim is broader than the evaluation. The evidence supports limited simulated variation across three held-out object shapes.

## Safer Wording
In the tested simulator setting, the method improves performance on three held-out synthetic object shapes compared with the vision-only baseline.

## Additional Experiment
Add a larger held-out object set, report failures by object geometry, and run a small real-robot sanity check before making a real-world generalization claim.
```

## Worked Example 4: AI Session to Research Asset

Synthetic and public-safe. This summarizes an AI-assisted workflow without preserving a raw chat transcript.

```markdown
## Starting Point
A student has a paper card for a simulated pushing policy and a failed real-robot trial summary.

## High-Value AI Task
Ask an advanced reasoning model to compare possible failure causes across perception, dynamics, control latency, and evaluation mismatch.

## Sanitized Input
- Simulation success is high on a generic pushing task.
- Real-robot success is lower under varied lighting and object poses.
- Recent changes: camera calibration update and new object reset procedure.
- No raw logs, local paths, private dataset names, or lab identifiers included.

## Reusable Artifact
Fault tree:
- Perception: compare real camera frames with simulated observations.
- Dynamics: sweep friction and object mass in simulation.
- Control: measure command latency during contact.
- Evaluation: compare reset pose distributions.

## Decision Supported
Run perception replay and reset-distribution checks before retraining the policy.

## Artifact to Save
Experiment Debug Log entry plus one claim-evidence note: current evidence supports a sim-to-real mismatch. A policy improvement claim would need additional comparison runs.
```

## Worked Example 5: Research Drill Use

Synthetic and public-safe. This example shows a drill result, not a real project note.

```markdown
## Input Observation
A public simulated-manipulation paper reports high success on object relocation, but the paper card notes limited analysis of initial pose variation.

## Drill Used
Gap Triage Drill.

## Output Artifact
| Candidate Gap | Category | Evidence | Score 1-5 | Decision | Reason |
|---|---|---|---:|---|---|
| Success may hide sensitivity to object reset pose. | Real gap candidate | Paper reports success rate, but does not separate failures by pose perturbation. | 4 | Pursue | The gap is testable with a small perturbation sweep and a claim-evidence table. |

## Decision Made
Run a 4-week minimal experiment in a generic simulator with one vision-only baseline, task success as the primary metric, and recovery time as the diagnostic metric.

## Public-Safety Note
No raw logs, private paths, real lab setup, unpublished result, or private dataset name is included.
```
