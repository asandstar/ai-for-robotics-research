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
