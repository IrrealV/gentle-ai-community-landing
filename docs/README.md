# Community landing — unified plan

Working synthesis that defines the shape of the unified landing **before** any code is written. This document is the source of truth until it is formalized into ADRs and tracked issues.

## Table of contents

1. [Principles](#1-principles)
2. [Technology stack](#2-technology-stack)
3. [Roadmap](#3-roadmap)
   - [Phase 0 — Foundations](#phase-0--foundations)
   - [Phase 1 — Home page](#phase-1--home-page--and-es)
   - [Phase 2 — Supporting pages](#phase-2--supporting-pages)
   - [Phase 3 — Polish and differentiation](#phase-3--polish-and-differentiation)
4. [Ownership and risks](#4-ownership-and-risks)
5. [Next steps](#5-next-steps)
6. [Related documents](#6-related-documents)

---

## 1. Principles

Five rules that guide every technical and content decision. When two options conflict, the one that respects more of these principles wins.

### 1.1 Vanilla Astro by default, React islands only where it hurts not to have them

Fabri, IrrealV, and Becker prove that almost everything — hero, install widget, presets, agents grid, docs — can be done without React. Gerardo paid a complexity tax for seven islands; we don't repeat that.

**Applied**: the only React island we accept is `/demo` (xterm-based TUI reconstruction), because a faithful terminal can't be built with static HTML.

### 1.2 Multi-page, not infinite scroll

IrrealV's argument wins: `/docs` and `/demo` live better as standalone pages. It improves SEO, information architecture, and encourages each page to do one thing well.

**Applied**: `/`, `/features`, `/how-it-works`, `/docs`, `/demo` — each with an `/es/` mirror.

### 1.3 i18n from day one, never bolted on

If we defer i18n we never add it. Gerardo already paid the cost of wiring it up correctly; we copy that blueprint at the start.

**Applied**: Astro native i18n config with `/` and `/es/` routes, `src/i18n/{en,es}.ts` as the content contract, parity check in the smoke test suite.

### 1.4 Data-first

Agents, presets, install commands, stats, featured releases — all live in typed `src/data/*.ts` files. Components consume data; editing content should never require touching markup.

**Applied**: `src/data/agents.ts`, `src/data/presets.ts`, `src/data/install.ts`, all typed and validated.

### 1.5 Build-time over client-time

OG images, GitHub stats, current release, content — everything that can be resolved at build time, is. Fewer moving parts, faster first paint, no CORS, no exposed API keys.

**Applied**: Satori OG image generation (Becker), server-side GitHub fetch (Gerardo), pre-rendered i18n routes. Client-side JS only for behaviour that genuinely requires the browser (install tab auto-detect, copy buttons, demo keyboard handler).

---

## 2. Technology stack

The definitive stack for the community landing. Every decision is justified against the four reference landings.

### 2.1 Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Framework | **Astro 6** | Three of four reference repos are on Astro 6 or migrating; it is the common base. |
| Styling | **Tailwind CSS 4 (vite plugin)** | Fabri, Gerardo, and IrrealV use v4. Becker is one major version behind. |
| Language | **TypeScript (strict)** | The data layer is typed and non-negotiable. |
| i18n | **Astro native + route-split (`/` + `/es/`)** | Gerardo's pattern. Wins on SEO over IrrealV's DOM-swap approach. |
| Package manager | **pnpm** | Fast, strict, modern standard. Disk-efficient for a community repo with many contributors. |
| Deploy | **Vercel** | Becker already validated this works. Preview deploys per PR come for free. |
| React islands | **Only `/demo`** (xterm) | Everything else stays vanilla Astro. One concession, not seven. |
| OG images | **Satori at build time** | Becker's pattern. Configure once, never touch again. |
| Tests | **`node --test` smoke suite** | IrrealV's pattern. No heavy test runner for a static site. |
| Analytics | **`@vercel/analytics`** | Zero config, privacy-respecting, already used by Gerardo. |
| Fonts | **Self-hosted Iosevka (mono) + Space Grotesk or Inter (sans)** | Iosevka from Fabri. Sans choice decided when design tokens land. |

### 2.2 Dependency budget

- Any dependency that adds more than 10 kB gzipped to the client bundle requires an ADR.
- React counts against budget only on `/demo`. The rest of the site ships zero React.
- Animation libraries stay optional; CSS plus the Web Animations API is the default.

### 2.3 What we explicitly do NOT use

- **Next.js** — Astro wins on static-first sites; every reference repo already picked Astro.
- **Tailwind 3 classic integration** — the vite plugin (v4) is strictly better.
- **Client-side GitHub fetch in hot paths** — build-time only, to avoid CORS and rate limits.
- **Custom CSS frameworks or design systems from scratch** — Tailwind plus data-driven tokens is enough.
- **Heavy animation libraries on the home page** — discipline over flash; see principle 1.

### 2.4 Upgrade path

- Astro and Tailwind follow their official migration guides; upgrades land as their own PRs with a visible diff and a preview deploy.
- Node version is pinned in `.nvmrc` to the LTS line Astro 6 supports.

---

## 3. Roadmap

Four phases from the current docs-only repo to a polished, bilingual, multi-page community landing. Each phase ends with a visible, reviewable artifact.

### Phase 0 — Foundations

Goal: stop fighting infrastructure for the rest of the project.

- [ ] `ADR-001-stack.md` committed, making [section 2](#2-technology-stack) a binding decision.
- [ ] Scaffold Astro 6 + Tailwind 4 + TypeScript + pnpm.
- [ ] Astro i18n config wired with empty `src/i18n/{en,es}.ts` but routes active.
- [ ] **Design tokens**: tri-level palette (primary / secondary / tertiary) from Gerardo, Iosevka mono font from Fabri, spacing and radius scale from Becker.
- [ ] Global `prefers-reduced-motion` utility (Fabri pattern) that every future animation must consume.
- [ ] Complete meta / OG / Twitter / manifest / favicon kit (Becker pattern).
- [ ] Satori-based OG image generation pipeline (`scripts/generate-og.ts`).
- [ ] `src/lib/github.ts` — build-time fetch for stars, forks, latest release, contributors.
- [ ] `.github/` automation: branch protection rules, CODEOWNERS, type labels, preview deploy workflow.

**Exit criteria**: the repo is visually empty but infrastructurally ready. A contributor can start a new section without touching config.

### Phase 1 — Home page (`/` and `/es/`)

Goal: the merged hero and the narrative arc, live in both languages.

Section order:

1. **Navbar** with a `variant` prop (marketing / compact / interactive) — IrrealV pattern.
2. **Hero (unified)**:
   - Asymmetric two-column layout — Gerardo.
   - Left: version badge linking to the current release (Becker), headline `One command. / Any agent. / Any OS.` with gradient on the last phrase, i18n subhead, dual CTAs.
   - Right: install widget styled as a macOS window with traffic-light dots (Becker), OS auto-detection (IrrealV), ARIA `role="tablist"`, full keyboard navigation, copy buttons per panel.
3. **Problem** — Gerardo.
4. **Solution with pillars** — Engram / SDD / Skills / Persona, Gerardo.
5. **How it works** — visual timeline.
6. **Agents grid** — data-driven from `src/data/agents.ts`.
7. **Build your own agent** — Gerardo.
8. **Presets** — Full Gentleman / Ecosystem Only / Minimal / Custom, Becker (unique).
9. **Install** — five methods: curl, brew, scoop, go install, PowerShell, Fabri.
10. **Community + Final CTA**.
11. **Footer**.

**Exit criteria**: home page renders correctly in EN and ES, with build-time data, and passes the smoke test suite.

### Phase 2 — Supporting pages

Goal: the multi-page model IrrealV established.

- [ ] `/features` — full visual catalogue.
- [ ] `/how-it-works` — extended narrative explanation.
- [ ] `/docs` — product manual: 8+ sections, sticky sidebar, breadcrumbs, prev/next navigation, anchor links — IrrealV pattern.
- [ ] `/demo` — keyboard-driven TUI reconstruction as a React + xterm island. Honest about being a browser reconstruction, with a mobile warning and visible keyboard shortcut hints.
- [ ] Every page has its `/es/` mirror wired through the same i18n contract.

**Exit criteria**: the site is a complete bilingual multi-page product with a real manual and an honest demo.

### Phase 3 — Polish and differentiation

Goal: move from "complete" to "best of its kind".

- [ ] Custom cursor with lerp ring and parallax radial glow (Becker), gated behind `prefers-reduced-motion`.
- [ ] JSON-LD `SoftwareApplication` structured data on the home page (Gerardo).
- [ ] View Transitions between pages (IrrealV).
- [ ] `node --test` smoke suite covering: homepage links, section presence, i18n parity, meta tag presence.
- [ ] Lighthouse audit — target: 100 / 100 / 100 / 100 on the home page, >95 on every internal page.
- [ ] Optional theme toggle if the community asks for it.

**Exit criteria**: audited, tested, bilingual, accessible, documented. Production-ready.

---

## 4. Ownership and risks

### 4.1 Domain ownership

Ownership means: this person reviews every PR that touches their domain. Not "only they can write code there" — "nothing merges without their review".

| Domain                          | Suggested lead | Why |
|---------------------------------|----------------|-----|
| Design tokens + typography      | Fabri          | Cleanest typography eye of the four; Iosevka discipline proven. |
| Hero + install widget           | Becker         | Already shipped the best widget, live and deployed. |
| i18n + narrative + data layer   | Gerardo        | Only one with working route-split i18n and the richest narrative arc. |
| `/docs` + `/demo`               | IrrealV        | Only one with a real manual and a working demo page. |
| Governance + CI/CD              | IrrealV (repo owner) | Owns the community repo and the automation around it. |

Rules:

- Cross-domain PRs need **both** leads to approve.
- A lead may delegate, but ownership does not transfer without a PR updating this document.
- A lead may merge their own PR once the required review rules are satisfied.

### 4.2 Known risks

- **Feature creep.** Every contributor will want to bring "that one thing from my landing". Rule: every section defends itself on merit, not on authorship. If a feature cannot be justified against [section 1](#1-principles), it does not ship.
- **React island that expands.** `/demo` starts as one xterm-based island. The risk is scope drift into particle backgrounds, 3D cards, and motion libraries. Any new React dependency — even inside `/demo` — requires an ADR.
- **i18n drift.** Spanish will desync from English if there is no enforcement. The Phase 3 smoke test suite must validate key parity between `src/i18n/en.ts` and `src/i18n/es.ts`. Missing keys fail CI.
- **Stats and release data going stale.** Hardcoded numbers were a mistake in Fabri and Becker's landings. Everything dynamic (stars, forks, release version, contributors) must be build-time and cached, never typed into components.
- **Governance by vibes.** PR rules only work if CI enforces them. Required labels, linked issues, and status checks must be machine-enforced, not reviewer-remembered.

---

## 5. Next steps

1. **Write `ADR-001-stack.md`** — formalize [section 2](#2-technology-stack) as a binding decision, merged via PR.
2. **Open Phase 0 issues** — one GitHub issue per bullet in [Phase 0](#phase-0--foundations). Eight to ten small issues, all labeled `phase:0`.
3. **Ship the first PR** — the Astro + Tailwind 4 + TypeScript scaffold. This PR is the first exercise of the governance flow end-to-end: issue linked, label applied, review required, preview deploy generated, squash merge.

After that, Phase 1 starts.

---

## 6. Related documents

- [`../landing-context.md`](../landing-context.md) — high-level synthesis and merge strategy.
- [`../landing-strengths.md`](../landing-strengths.md) — per-repo strengths, weaknesses, and ideas to reuse.
- [`../CONTRIBUTING.md`](../CONTRIBUTING.md) — contribution workflow.
- [`../GOVERNANCE.md`](../GOVERNANCE.md) — repository governance rules.
