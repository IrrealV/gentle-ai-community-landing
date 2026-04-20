# ADR-001 — Base stack for the unified community landing

- **Status**: Accepted
- **Proposed**: 2026-04-16
- **Accepted**: 2026-04-19
- **Deciders**: Community leads (Fabri, Gerardo, IrrealV, Becker)
- **Supersedes**: —
- **Superseded by**: —

## Context

Four independent Astro landings exist for the GENTLE-AI project, each built by a different contributor:

- `fabriortenzi/gentle-ai-landing`
- `GerardoFC8/landing-gentle-ai`
- `IrrealV/gentle-landing`
- `niko05becker/gentleai-landing`

The community agreed to consolidate them into a single unified landing under `IrrealV/gentle-ai-community-landing`. The merge strategy, roadmap, and principles live in [`../README.md`](../README.md).

Before any code is scaffolded, the base stack must be locked. Deferring this decision would cause churn: contributors would scaffold with different assumptions, dependencies would proliferate, and the cost of converging later would be higher than agreeing now.

The four reference landings provide real evidence — not speculation — about what works:

- Astro is the unanimous framework choice across all four.
- Three of four are on Tailwind 4 (vite plugin); Becker is on Tailwind 3 classic.
- Only Gerardo ships route-split EN/ES i18n; it is the only approach compatible with SEO goals.
- Gerardo's React-island-heavy approach produced the largest bundle and highest maintenance cost.
- Becker's Satori-based OG generation is the only build-time image pipeline of the four and has proven sustainable in production.
- IrrealV's `node --test` smoke suite is the only automated safety net and is lightweight enough to keep.

After this ADR was drafted, the Gentleman delivered a per-landing review (see [`../../feedback_gentleman.md`](../../feedback_gentleman.md)). That review independently confirmed the decisions below — notably the Iosevka mono font, install-at-the-top via the macOS-window widget, route-split bilingualism, and the rejection of a React-island-heavy architecture. No decision in this ADR was revised as a result of the review.

## Decision

The community landing is built on the following stack:

| Layer | Choice |
|-------|--------|
| Framework | **Astro 6** |
| Styling | **Tailwind CSS 4** via the vite plugin (`@tailwindcss/vite`) |
| Language | **TypeScript**, strict mode |
| i18n | **Astro native i18n** with route-split `/` (EN) and `/es/` (ES) |
| Package manager | **pnpm**, pinned via `packageManager` field |
| Node version | Pinned in `.nvmrc` to the LTS line Astro 6 supports |
| Deploy target | **Vercel** |
| Client framework islands | **Only `/demo`** (React + xterm). Every other page ships zero React. |
| OG images | **Satori + @resvg/resvg-js** generated at build time |
| Automated tests | **`node --test`** smoke suite — links, sections, i18n parity, meta tags |
| Analytics | **`@vercel/analytics`** |
| Fonts | **Iosevka** (mono, self-hosted) plus one sans family to be decided when design tokens land |

### Enforcement

- Any new runtime dependency that adds more than 10 kB gzipped to the client bundle requires its own ADR.
- React usage is restricted to `/demo`. A CI check fails if React is imported from any other route.
- i18n parity between `src/i18n/en.ts` and `src/i18n/es.ts` is verified in CI; missing keys fail the build.
- Branch protection on `main` requires: linked issue, exactly one `type:*` label, passing CI, at least one review, squash merge.

## Consequences

### Positive

- **Common ground with three of four reference repos.** Migration effort is concentrated on the Becker codebase (Tailwind 3 → 4) instead of across the whole project.
- **SEO-grade bilingualism.** Route-split i18n means each language has its own URL, its own OG metadata, and its own rendered HTML — search engines index both correctly.
- **Minimal bundle.** Zero React on public pages means faster first paint, lower hydration cost, and smaller production artifacts.
- **No CORS, no exposed API keys.** Build-time GitHub fetches and build-time OG images remove an entire class of runtime failures.
- **Lightweight testing.** `node --test` is native, needs no toolchain, and keeps CI under a minute.
- **Preview deploys for free.** Vercel gives every PR a unique URL; reviewers check the result instead of imagining it.

### Negative

- **Becker contributors bear the Tailwind 4 migration.** The cost falls on one repo rather than being spread.
- **Reduced animation freedom.** No heavy motion libraries on public pages means every animation is CSS or Web Animations API.
- **Every exception carries overhead.** A new dependency or a new React island requires an ADR. This is deliberate friction.
- **Single deploy target.** Moving off Vercel would require another ADR and a non-trivial rework of the OG pipeline and preview workflow.

## Alternatives considered

### Next.js instead of Astro

**Rejected.** All four reference landings chose Astro. Next.js is excellent for apps that need server components and dynamic routing, but this is a static-first marketing site. Astro ships less JavaScript by default, has first-class partial hydration via islands, and matches what contributors already know.

### Tailwind 3 with the classic `@astrojs/tailwind` integration

**Rejected.** Tailwind 4 with the vite plugin is strictly better: faster builds, smaller CSS output, simpler config. Three of four reference repos already use it.

### DOM-swap bilingualism (IrrealV's approach)

**Rejected.** IrrealV's `data-label-en/es` pattern is clever but hurts SEO: search engines see only the default language in the rendered HTML, and there is no per-language URL. Route-split is the standard for a reason.

### Heavy React-island architecture (Gerardo's approach)

**Rejected as the default.** Seven islands was appropriate for Gerardo's experimental scope but excessive for a community landing. React is allowed only where static HTML genuinely cannot deliver the experience — the TUI demo — and nowhere else.

### Bun or npm instead of pnpm

**Rejected.** Bun is promising but less mature in community tooling and CI integration. npm works but wastes disk and is slower than pnpm for repos with many contributors. pnpm's strict dependency resolution also catches accidental transitive imports that npm hoists.

### Skipping automated tests for a static site

**Rejected.** Even a static site can ship broken links, missing meta tags, or i18n desync. IrrealV's suite is cheap insurance and runs in seconds.

## References

- [`../README.md`](../README.md) — unified plan and roadmap.
- [`../../landing-context.md`](../../landing-context.md) — synthesis of the four reference landings.
- [`../../landing-strengths.md`](../../landing-strengths.md) — per-repo evidence behind each decision above.
