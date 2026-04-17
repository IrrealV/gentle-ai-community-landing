# Gentle-AI landing context

This document is the synthesis that drives the community landing. It describes the reference sources, what each one does well, and the merged direction we'll build from.

## Goal

Build a single community-owned landing for **GENTLE-AI** by combining the strongest parts of four existing landings, instead of forking any single one of them.

## Reference sources

Four independent Astro landings, each built by a different contributor. The live site column only reflects confirmed public deployments at the time of writing.

| Author   | Repository                                                          | Live site                      |
|----------|---------------------------------------------------------------------|--------------------------------|
| Fabri    | https://github.com/fabriortenzi/gentle-ai-landing                   | —                              |
| Gerardo  | https://github.com/GerardoFC8/landing-gentle-ai                     | —                              |
| IrrealV  | https://github.com/IrrealV/gentle-landing                           | —                              |
| Becker   | https://github.com/niko05becker/gentleai-landing                    | https://gentleai.vercel.app/   |

### Local clones

For local inspection contributors may clone each repo into sibling folders:

- `repo-fabri/`
- `repo-gerardo/`
- `repo-irrealv/`
- `repo-becker/`

These folders are listed in `.gitignore` and **must not be committed**. The canonical source of each landing is the GitHub repository above, not the local clone.

## Quick comparison

| Aspect                       | Fabri                          | Gerardo                              | IrrealV                                  | Becker                                |
|------------------------------|--------------------------------|--------------------------------------|------------------------------------------|---------------------------------------|
| Framework                    | Astro 6, vanilla               | Astro 5 + React islands              | Astro 6, vanilla                         | Astro 5, vanilla                      |
| Tailwind                     | 4 (vite plugin)                | 4 (vite plugin)                      | 4 (vite plugin)                          | 3 (classic integration)               |
| Pages                        | Single scroll                  | Single scroll (+ `/es/`)             | Multi-page (`/`, `/features`, `/how-it-works`, `/docs`, `/demo`) | Single scroll                         |
| i18n                         | None                           | Route-split EN/ES                    | DOM-swap EN/ES                           | None                                  |
| Live GitHub stats            | Hardcoded                      | Server-side at build                 | Client-side with sessionStorage cache    | Hardcoded                             |
| Interactive demo             | —                              | React island (xterm)                 | Dedicated `/demo` page                   | —                                     |
| Hero signature               | Cycling typed-terminal         | Two-column + xterm island            | Two-column + install tabs + OS auto-detect | macOS-window install widget + presets |
| Deployed & inspectable live  | Not confirmed                  | Not confirmed                        | Not confirmed                            | Yes                                   |

## What each source does well

A detailed per-landing breakdown lives in [`landing-strengths.md`](./landing-strengths.md). The short version:

- **Fabri** — cleanest typography (Iosevka), a looping typed-terminal hero, and the most disciplined `prefers-reduced-motion` handling.
- **Gerardo** — the richest narrative (Problem → Solution → pillars → ecosystem → build-your-own), route-split EN/ES i18n, server-side GitHub stats, JSON-LD SEO.
- **IrrealV** — the only true multi-page site with a real docs manual and a keyboard-driven demo; OS auto-detection and full ARIA-compliant install tabs.
- **Becker** — the only landing actually deployed, with the strongest brand polish: macOS-window install widget, build-time OG images, complete meta/OG/Twitter/favicon kit, and a "Presets" section that frames buyer intent.

## Merge strategy for the community landing

### Hero

- Keep the official headline: **"One command. Any agent. Any OS."** (tri-line, gradient on the last phrase).
- Use Becker's **macOS-window install widget** as the primary visual.
- Inside that widget, use IrrealV's **OS auto-detection**, keyboard-navigable tabs (ARIA `role="tablist"`), and copy buttons.
- Frame the widget with Gerardo's **two-column asymmetric layout**: left = pitch + version badge + CTAs, right = widget.
- Fetch the version badge **server-side at build time** (Gerardo's `lib/github.ts` pattern) and link it to the specific release, Becker-style.
- Fabri's looping-typing terminal is beautiful but redundant with an install widget — reserve it for a secondary "watch it cycle" surface or drop it.

### Site structure

Adopt IrrealV's **multi-page model**:

- `/` — marketing home
- `/features`
- `/how-it-works`
- `/docs` — real manual, sidebar + prev/next navigation
- `/demo` — keyboard-driven Bubbletea reconstruction, honest about being a browser reconstruction

On `/`, follow Gerardo's narrative arc and insert Becker's **Presets** section before install:

1. Hero (install-first)
2. Problem
3. Solution with pillars (Engram / SDD / Skills / Persona)
4. How it works
5. Agents grid (data-driven)
6. Build-your-own-agent
7. Presets (Full Gentleman / Ecosystem Only / Minimal / Custom)
8. Install
9. Community / Final CTA
10. Footer

### Aesthetic

- Becker's polish as the baseline: full meta/OG/Twitter/manifest/favicon kit, Satori-based **build-time OG image generation**, custom-cursor + parallax radial glow.
- Gerardo's tri-token color system (`primary / secondary / tertiary`) with gradient accents.
- Fabri's `prefers-reduced-motion` discipline baked in from day one.
- Terminal/engineering vibe carried across all surfaces — no generic SaaS visuals.

### i18n

- Gerardo's **route-split** approach (`/` + `/es/`) wins over DOM-swap on SEO.
- Reuse the existing `src/i18n/{en,es}.ts` contract as the starting point.

### Data layer

- One source of truth per domain, following Gerardo's pattern:
  - `src/data/agents.ts` — agent list with logos and descriptions
  - `src/data/presets.ts` — Becker's presets as editable data
  - `src/lib/github.ts` — build-time GitHub fetch (stars, forks, release, contributors)

### Content rules

- Factual, not hypey.
- Explain the ecosystem in one sentence first.
- Separate marketing copy (`/`) from manual copy (`/docs`).
- Bilingual EN/ES is a first-class requirement, not an afterthought.
- The demo page is honest about being a browser reconstruction.

## Community project direction (secondary track)

Governance layer for this repo:

- Protect `main`.
- Require PRs for every change.
- Add contribution guidelines.
- Add PR review rules.
- Define ownership for copy, design, and technical changes.
- Keep the reference repos as **remote links**, not as committed snapshots.

## Next step

1. Scaffold the community landing from this synthesis (Astro + Tailwind 4 + route-split i18n).
2. Port the merged hero, presets section, and install widget first.
3. Add `/docs` and `/demo` pages in a second pass.
4. Layer the governance automation on top once the page is live.
