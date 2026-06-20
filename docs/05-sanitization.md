# Sanitization Guide

Use this guide when adding, editing, submitting, or preparing repository content for public release. The goal is to preserve reusable research workflow knowledge while removing private, identifying, confidential, or unpublished material.

## What Not to Publish

Do not publish:

- Raw chat logs or unedited AI conversations.
- Personal names, emails, phone numbers, calendars, meeting notes, or advisor comments.
- Private research notes, unpublished ideas, unreleased results, or confidential comparisons.
- Lab names, internal project names, robot IDs, local machine names, private server names, or exact file paths.
- API keys, credentials, tokens, cookies, SSH keys, or environment files.
- Private datasets, restricted benchmark data, proprietary code, or license-restricted assets.
- Screenshots that reveal browser tabs, terminals, dashboards, identities, access URLs, or private directories.

## How to Anonymize Personal Details

- Replace names with roles such as "collaborator", "reviewer", or "research engineer".
- Replace institutions and labs with generic labels such as "a robotics lab".
- Remove timestamps when they reveal meetings, travel, or internal schedules.
- Generalize exact locations and hardware identifiers.
- Delete casual personal comments that are not needed for the workflow.

Bad:

```text
Discussed the failure with a named collaborator after a dated lab meeting.
```

Better:

```text
Discussed the failure with a collaborator after a routine project check-in.
```

## How to Anonymize Research Ideas

- Convert specific unpublished ideas into abstract patterns.
- Replace exact task names with generic task families.
- Remove private baseline names, internal metrics, and unreleased dataset details.
- Avoid sharing precise negative results before they are publishable.
- Mark examples as synthetic when they are constructed for public use.

Bad:

```text
Our unreleased policy failed on the internal transparent-cup benchmark.
```

Better:

```text
A manipulation policy showed weaker performance on a synthetic object-interaction task with unusual visual properties.
```

## How to Handle Screenshots and Images

- Prefer redrawn diagrams or synthetic examples over screenshots.
- Crop aggressively and blur only as a last resort; blurring can miss hidden details.
- Check browser tabs, URL bars, usernames, file paths, terminal prompts, and dataset names.
- Remove image metadata when applicable.
- Do not include photos of people, lab spaces, whiteboards, or unreleased hardware unless explicitly cleared.

## How to Handle Git History

- Do not commit secrets and assume committed secrets are compromised.
- Before public release, inspect the working tree and recent history for sensitive strings.
- If sensitive content entered history, rotate exposed credentials and rewrite history before release.
- Avoid adding large generated files or private artifacts.
- Use `.gitignore` for local notes, environment files, logs, and generated outputs if code is added later.

Useful checks:

```text
git status --short
git log --oneline --decorate -n 20
git grep -n "api_key\|token\|password\|secret\|PRIVATE\|TODO"
```

## Public Release Checklist

- [ ] All examples are synthetic or anonymized.
- [ ] No raw chat logs are included.
- [ ] No personal information is included.
- [ ] No private research notes or unpublished results are included.
- [ ] No credentials, tokens, private paths, or dataset identifiers are included.
- [ ] No proprietary code or restricted assets are included.
- [ ] Screenshots and images, if any, are public-safe.
- [ ] Claims are framed as guidance, templates, or conceptual overview unless backed by public evidence.
- [ ] Git history has been checked for sensitive content.
- [ ] License and attribution expectations are clear.
