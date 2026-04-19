# Landing strengths

This document captures the strong points, weak points, and "best ideas to steal" for each of the four reference landings. It is the detailed companion to [`landing-context.md`](./landing-context.md).

The goal is not to pick a winner — it is to name, per repo, the decisions that are good enough to survive into the community landing.

---

## 1. Fabri — `fabriortenzi/gentle-ai-landing`

- Repository: https://github.com/fabriortenzi/gentle-ai-landing

### Tech stack

- Astro 6, Tailwind CSS 4 via `@tailwindcss/vite`, `@astrojs/sitemap`
- Pure `.astro`, no React islands, no TypeScript components
- Self-hosted Iosevka mono font
- Node engine `>=22.12`

### Hero

- Eyebrow `AI Gentle Stack` (fuchsia mono)
- Headline `One command. Any agent. Any OS.` — gradient animation on the middle phrase
- Subhead: "The Gentleman AI ecosystem — configured and ready."
- **No install tabs in the hero**. Instead, a single animated terminal types and erases five install commands (curl, brew, scoop, go install, PowerShell) with `prefers-reduced-motion` respected.
- CTAs: `Star on GitHub` + `See Features ↓`

### Section order

Navbar → Hero → BeforeAfter → HowItWorks → AgentGrid → EngramSection → SDDSection → SkillsSection → InstallSection → Community

### Standout features

- Cleanest and most opinionated typography system of the four.
- The cycling-terminal hero is the most recognizable signature.
- Install tabs moved to a dedicated `InstallSection` with **five** methods, not three.
- `prefers-reduced-motion` handling is explicit and consistent.

### Weaknesses

- No docs page, no demo page.
- No bilingual support.
- GitHub stats are hardcoded.
- README is minimal.
- Smallest scope of the four.

### Best ideas to steal

1. Looping typed-terminal as a hero signature.
2. Install matrix with five methods in its own section.
3. `prefers-reduced-motion` discipline across all animations.
4. Iosevka (or equivalent) mono font ownership.

---

## 2. Gerardo — `GerardoFC8/landing-gentle-ai`

- Repository: https://github.com/GerardoFC8/landing-gentle-ai

### Tech stack

- Astro 5 + React 19 islands (`@astrojs/react`)
- Tailwind 4 (vite plugin), `motion`, `xterm` (real terminal embed), `@lucide/astro`, `@vercel/analytics`
- Full i18n wired into `astro.config.mjs` (`en` default, `es` at `/es/`) with `src/i18n/{en,es}.ts` + `utils.ts`
- JSON-LD `SoftwareApplication` structured data
- TypeScript-heavy

### Hero

- Asymmetric two-column layout.
- Left: version badge (live from GitHub releases API, cached), 3-line headline `One command. / Any agent. / Any OS.` with gradient on the last line, i18n subhead, dual CTAs (`Install Now` + `View on GitHub`).
- Right: a React-island `Terminal` (xterm-based) playing scripted commands.
- No OS-tab selector in the hero itself.

### Section order

Nav → Hero → Problem → Solution → EngramCallout → HowItWorks → SDDPipeline → Ecosystem → BuildAgent → ModelIntelligence → Demo → Install → Community → FinalCTA → Footer

A mirrored `/es/index.astro` exists for the Spanish route.

### Standout features

- Bilingual EN/ES via Astro native `i18n` config + `/es/` route.
- Richest narrative arc (Problem → Solution → Pillars → Ecosystem → Build-your-own-agent → Model Intelligence → Demo).
- Live GitHub stats + latest release + contributors fetched **server-side at build time** via `src/lib/github.ts`.
- React islands: `ParticleBackground`, `Card3D`, `StatsCounter`, `SDDFlow`, `TUIDemo`, `Terminal`, `ThemeToggle`, `LanguageToggle`.
- Curated agent data in `src/data/agents.ts` with logos and descriptions.
- JSON-LD structured data.
- PRD docs committed in `docs_local/`.

### Weaknesses

- Heaviest bundle of the four (seven islands + xterm).
- No dedicated `/docs` or `/demo` pages — everything is a single scroll.
- Complexity tax on anyone editing it.

### Best ideas to steal

1. Route-split EN/ES i18n (`/` and `/es/`).
2. Server-side GitHub fetch baked at build time (no CORS, no API-key exposure).
3. Problem → Solution → Pillars narrative (Engram / SDD / Skills / Persona).
4. JSON-LD `SoftwareApplication` structured data.
5. `src/data/agents.ts` as the single source of truth for the agent grid.

---

## 3. IrrealV — `IrrealV/gentle-landing`

- Repository: https://github.com/IrrealV/gentle-landing

### Tech stack

- Astro 6, Tailwind 4 (vite plugin), `@tailwindcss/typography`
- Vanilla Astro, no React
- Self-hosted Space Grotesk, JetBrains Mono, Material Symbols
- Node `--test` runner for smoke tests (`tests/**/*.test.mjs`)
- OpenSpec directory + custom `skills/` system for SDD
- Package name: `cosmic-chaos`

### Hero

- Two-column layout on `/`.
- Left: tri-color stacked headline `CONFIGURE / YOUR AI CODING / ECOSYSTEM.` (primary / secondary / tertiary tokens), descriptive subhead calling the project "an ecosystem configurator", **inline live GitHub stats pills** (stars, forks, latest version) fetched client-side with a 15-minute `sessionStorage` cache, and three CTAs (`Workflow Docs`, `GitHub Repository`, `Open TUI Demo`).
- Right: install-tab widget with **auto-detected OS** (via `navigator.userAgentData.platform`) across brew / go install / scoop. Full keyboard navigation (ArrowRight / ArrowLeft / Home / End) and ARIA `role="tablist"`. Copy button bound to the active panel.

### Section order

Multi-page site:

- `/` — Hero → FeaturesGrid → GetStarted → HowItWorks → Stats
- `/features`
- `/how-it-works`
- `/docs` — manual with eight sections, sidebar navigation, prev/next arrows
- `/demo` — keyboard-driven Bubbletea reconstruction

Shared `Navbar` uses a `variant` prop (marketing / compact / interactive) per page.

### Standout features

- The only landing with a **true multi-page architecture**.
- `/docs` behaves like an actual product manual.
- `/demo` is honest about being a browser reconstruction of a TUI.
- Bilingual via `data-label-en/es` attributes (DOM swap, no route split).
- Material Symbols icon font.
- OpenSpec + SDD artifacts committed (`openspec/`, `skills/`, `.engram/`, `stitch/`, `tests/`).
- Node test suite for homepage and TUI flows.
- View Transitions enabled.

### Weaknesses

- Largest repo by far (many non-landing artifacts shipped).
- Naming / branding drift (`cosmic-chaos`, uppercase `GENTLE-AI`).
- Bilingual is DOM-swap, which is weaker for SEO than Gerardo's route split.
- Some aesthetic details feel less polished than Becker.

### Best ideas to steal

1. Multi-page structure: dedicated `/docs`, `/demo`, `/features`, `/how-it-works`.
2. OS auto-detection for the default install tab (`navigator.userAgentData`).
3. ARIA `role="tablist"` plus full keyboard navigation on install tabs.
4. Live GitHub stats with `sessionStorage` cache and graceful fallback.
5. Interactive TUI demo as a dedicated page, not a hero island.
6. `node --test` smoke suite for homepage links and sections.

---

## 4. Becker — `niko05becker/gentleai-landing`

- Repository: https://github.com/niko05becker/gentleai-landing
- Live: https://gentleai.vercel.app/

### Tech stack

- Astro 5 + Tailwind **3** (classic `@astrojs/tailwind` integration)
- `@lucide/astro`, `lucide-astro`
- `satori` + `@resvg/resvg-js` + `scripts/generate-og.mjs` for build-time OG images
- `@fontsource/inter`, `@astrojs/sitemap`
- All `.astro`, no React
- Smallest src tree of the four (around twelve components, single page)

### Hero

- Single-column, centered.
- Animated "Now available" version badge linking to a specific release tag (e.g. `v1.18.3`).
- Headline with gradient on the first line: `One command.` / `Any agent. Any OS.`
- Subhead: "The Gentleman AI ecosystem configurator — supercharge any AI coding agent with persistent memory, Spec-Driven Development, curated skills, and a teaching-oriented persona in seconds."
- **Install widget styled as a macOS window** with traffic-light dots and three tabs (macOS/Linux, Windows, Go install). Copy buttons per panel.
- Primary CTA: `Get started`. Secondary: `View on GitHub`.
- Below hero: a **four-stat grid with animated counters** (hardcoded values).

### Section order

Hero → `#what-it-does` (BeforeAfter) → `#agents` → `#components` (Engram, SDD, Skills, Context7, Persona, Permissions, GGA, Theme) → `#skills` (SDD Skills, Foundation Skills, Community Coding Skills) → `#presets` (Full Gentleman / Ecosystem Only / Minimal / Custom) → `#install`

### Standout features

- Strongest brand polish of the four, and the only one **actually deployed** and inspectable live.
- Build-time OG image generation via Satori (`scripts/generate-og.mjs`).
- Custom cursor with lerp ring plus parallax radial glow.
- Full meta / OG / Twitter cards, `theme-color`, manifest, all favicon sizes.
- "Presets" section (Full Gentleman / Ecosystem Only / Minimal / Custom) is unique to Becker and framing-wise valuable.
- Clean component-per-section structure, trivially maintainable.

### Weaknesses

- Hardcoded stats that don't reflect the real repo.
- Tailwind 3 is a version behind.
- No i18n.
- No docs or demo pages.
- No install auto-detection (user has to click).
- No tests.

### Best ideas to steal

1. macOS-window install widget with traffic-light dots.
2. Satori-based OG image generation at build time.
3. "Presets" section (Full Gentleman / Ecosystem Only / Minimal / Custom) as a buyer-funnel tool.
4. Version-badge linking to the specific release (pulse dot + tag pill + "Now available").
5. Custom cursor and parallax radial glow as a cheap signature effect.
6. Complete meta / OG / Twitter / manifest / favicon kit to copy wholesale.

---

## Cross-cutting observations

All four share: Astro framework, Tailwind CSS, the tagline **"One command. Any agent. Any OS."**, a brew/curl/scoop/go-install pitch, a hero terminal or install widget, references to Engram + SDD + Skills, and a CTA pointing to the canonical `Gentleman-Programming/gentle-ai` repository.

Only some have:

- React islands — only Gerardo.
- Multi-page architecture — only IrrealV.
- Route-split EN/ES i18n — only Gerardo. IrrealV does DOM-swap. Fabri and Becker are English-only.
- Live GitHub data — Gerardo (build-time) and IrrealV (client-side with cache).
- Deployed and live — only Becker (confirmed).
- Build-time OG images — only Becker.
- Interactive TUI demo — Gerardo (island) and IrrealV (dedicated page).
- Automated tests — only IrrealV.
- OS auto-detection for install — only IrrealV.
- Explicit `prefers-reduced-motion` handling — only Fabri.
- Looping typed-terminal hero — only Fabri.
- Presets section — only Becker.
- JSON-LD structured data — only Gerardo.

Tailwind version split: Fabri / Gerardo / IrrealV are on v4 with the vite plugin, Becker is still on v3 with the classic integration.

## Gentleman feedback synthesis

After the planning documents were merged, the Gentleman reviewed the four reference landings and produced the feedback captured in [`feedback_gentleman.md`](./feedback_gentleman.md). This section maps that review back to the decisions in [`docs/README.md`](./docs/README.md) so the evidence is traceable.

### Decisions confirmed by the review

| Unified-plan decision | Gentleman signal | Source landing |
|-----------------------|------------------|----------------|
| Macos-window install widget in the hero | "Instalación debe estar al principio, no oculta tras mucho scroll" | general |
| Iosevka mono font | "Usar Iosevka (la favorita de The Gentleman) para bloques de código" | Fabri |
| OS auto-detection on install tabs | "Selector de OS: filtrar los comandos por Sistema Operativo es muy útil" | Fabri |
| Problem → Solution narrative | "Atacar el problema primero es una estrategia de marketing muy buena" | Gerardo |
| Build-time GitHub stats (no hardcoded numbers) | "recomendó que sean datos vivos vía API" | Becker |
| Keyboard-driven `/demo` as a dedicated page | "La simulación del uso con teclado es espectacular" | IrrealV |
| Route-split EN/ES i18n | "Tener la página en español e inglés" was a standout of IrrealV's | IrrealV |
| React islands restricted to `/demo` | "sugirió quitar el movimiento de la cara" (too much motion) and the responsive breakage on Gerardo's React-heavy build | Gerardo |
| Presets section (Full / Ecosystem / Minimal / Custom) | "La sección donde explica el Core Stack y los componentes ayuda mucho" | Becker |

### New requirements surfaced by the review

| Requirement | Why it was missed | Where it now lives |
|-------------|-------------------|--------------------|
| `sync` command | None of the four landings documented it | `docs/README.md` Phase 1 §9 + `src/data/install.ts` |
| Auto-update flow | Same gap | `docs/README.md` Phase 1 §9 + `src/data/install.ts` |
| Card alignment discipline (bottom-aligned CTAs) | Only Becker had the issue visibly | Phase 0 design tokens + component conventions |
| Minimum contrast on body text | Flagged across all four landings | Phase 0 design tokens (palette + WCAG AA target) |
| Avoid grey-on-grey that reads as `disabled` | Flagged on Fabri | Phase 0 design tokens |
| No ASCII "kiss" or leftover dev easter eggs | Flagged on IrrealV | `/demo` acceptance criteria |

### Anti-patterns the review made explicit

- **Fake-button circles** (Fabri): decorative elements that look clickable but do nothing. Our tokens must distinguish interactive from decorative at the component level.
- **Missing install follow-through** (Fabri): hiding the fact that `skill-registry` and `init` are required. The install section must list every step the user actually has to run, in order.
- **CTA that skips the narrative** (IrrealV "Get Started" at the top): the hero CTA can take the user to install, but it cannot bypass the problem/solution framing for a first-time visitor.
- **Uneven scaling in visual grids** (Gerardo model faces, Becker Skills): consistent sizing is a design-token concern, not a per-component fix.

This synthesis is the evidence trail future PRs cite when a reviewer asks "where did this requirement come from?". When a new piece of feedback arrives, it is appended here first, then propagated into the relevant ADR or roadmap section.

---

## How this feeds the community landing

The merge strategy and final architecture live in [`landing-context.md`](./landing-context.md). This document is the evidence trail behind each decision — when somebody asks "why are we using the macOS window widget?", this file is the answer.
