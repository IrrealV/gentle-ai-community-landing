# Architecture Decision Records

This folder contains the **binding** architectural decisions for the community landing. Once an ADR is merged into `main`, it is authoritative — superseding any working synthesis in `../README.md`.

## Format

Each ADR follows a lightweight version of the MADR template:

- **Status** — `Proposed`, `Accepted`, `Superseded by ADR-NNN`, or `Deprecated`.
- **Context** — what situation forced a decision.
- **Decision** — what was decided.
- **Consequences** — what follows as a result, positive and negative.
- **Alternatives considered** — what was rejected and why.

## Rules

- One decision per ADR. Split large decisions into separate ADRs.
- ADRs are immutable once `Accepted`. Changes are made by adding a new ADR that supersedes the old one.
- Every ADR lands via PR, with at least one review, and is merged with squash.
- The ADR number is the next unused integer, zero-padded to three digits: `ADR-001`, `ADR-042`.

## Index

| Number | Title | Status |
|--------|-------|--------|
| [ADR-001](./ADR-001-stack.md) | Base stack for the unified community landing | Proposed |
