# Repository governance

This file documents the community setup that should be enforced in GitHub.

## Branch protection for `main`

Recommended settings:

- Require a pull request before merging
- Require at least 1 review
- Dismiss stale reviews when new commits are pushed
- Require conversation resolution before merge
- Require status checks to pass
- Restrict direct pushes to `main`
- Prevent force pushes
- Prevent deletion of `main`

## Required PR rules

- Must reference one approved issue
- Must include exactly one `type:*` label
- Must use the PR template
- Must keep the change scoped and reviewable

## Merge policy

- Squash merge preferred
- No direct commits to `main`
- No force pushes
- No skipped checks

## Maintainer notes

This repo is community-owned, so the bar is consistency and traceability rather than speed alone.
