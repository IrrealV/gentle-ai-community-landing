# Gentle-AI landing context

This document collects the best ideas from the available landing pages so we can build a single community-owned version with the strongest parts of each one.

## Sources imported into this folder

- `repo-irrealv/` — cloned from `https://github.com/IrrealV/gentle-landing`
- `repo-fabri/` — cloned from `https://github.com/fabriortenzi/gentle-ai-landing`
- `repo-gerardo/` — cloned from `https://github.com/GerardoFC8/landing-gentle-ai`
- Becker landing — public site at `https://gentleai.vercel.app/`

## Important note about the three GitHub repos

The three GitHub sources are the same repository snapshot, not three different codebases. They all resolved to the same commit (`b822ece4e0bef48c66de895677d128222acd27a4`). So the real comparison is:

- the shared Astro implementation in the repo clones
- the public Becker landing as a separate reference

That is still useful: the cloned repo gives us the actual implementation decisions, and Becker gives us an external design/copy alternative.

## What each source does well

### 1) Shared GitHub landing (`repo-yo`, `repo-fabri`, `repo-gerardo`)

#### Strong points

- Very clear product framing: **“One command. Any agent. Any OS.”**
- Strong install-first hero with OS-specific tabs (`brew`, `go install`, `scoop`)
- Good proof of substance:
  - GitHub stars / forks / release badge
  - explicit supported agents
  - explicit component catalog
- Nice conversion path:
  - install
  - docs
  - demo
- The docs page is unusually strong for a landing:
  - explains the system like a manual
  - includes install commands
  - maps SDD phases to artifacts
  - shows the ecosystem as a matrix, not just marketing copy
- The demo page is honest and useful:
  - says it is a browser reconstruction, not the native runtime
  - gives keyboard help
  - includes a mobile warning instead of pretending mobile is ideal
- Spanish/English copy is already in the implementation, which is good for a community project.

#### Weak points

- The landing is a bit **too product-manual-ish** in places; it reads strong technically, but not always emotionally memorable.
- Some sections are dense and can feel like documentation before persuasion.
- The home page tries to do a lot at once:
  - install
  - feature overview
  - onboarding
  - process explanation
  - stats
  That is useful, but can dilute the main message.
- Because all three clones are identical, there is no internal diversity to mine; we need to synthesize rather than compare variants.

#### Best ideas to keep

- OS-specific install tabs in the hero
- Copy buttons for commands
- Clear GitHub proof points
- Demo as a browser reconstruction with honesty labels
- Multi-language labels
- A docs page that behaves like a real product manual

---

### 2) Becker public landing (`gentleai.vercel.app`)

#### Strong points

- Much cleaner, more direct hero copy:
  - **“One command. Any agent. Any OS.”**
  - very fast to understand
- Strong punchy positioning for the ecosystem/configurator angle
- Good marketing rhythm:
  - install
  - what it does
  - agents
  - components
  - install
  That cadence is easy to scan.
- The page balances marketing and product detail without drowning in documentation.
- It keeps the brand language sharp and concise.

#### Weak points

- It is less complete as a technical reference than the GitHub repo landing.
- Less of the “why this is serious” depth than the docs-heavy version.
- Without the repo, we cannot inspect implementation decisions or code structure.

#### Best ideas to keep

- The top-line positioning
- The short, memorable language
- The visual hierarchy that lets the value proposition land immediately
- The less-bloated marketing tone

---

## Best parts to merge into the community landing

### Messaging

Use Becker’s compact hero language, but back it with the technical credibility of the GitHub landing.

Recommended direction:

- headline: short and memorable
- subheadline: one sentence explaining what Gentle-AI actually is
- supporting line: memory + SDD + skills + persona + routing
- CTA set: install / docs / demo

### Structure

1. Hero with install-first CTA
2. Trust/proof section
3. Clear “what it does” section
4. “How it works” / SDD pipeline
5. Docs/manual section
6. Demo section
7. Community/contribution section

### Visual decisions

- Keep the terminal/engineering aesthetic from the GitHub landing
- Keep Becker’s restraint and clarity
- Avoid overloading the first screen with too many concepts
- Use progressive disclosure: the landing should invite deeper reading, not dump everything at once

### Content decisions

- Be factual, not hypey
- Explain the ecosystem in a single sentence first
- Separate marketing copy from technical manual copy
- Keep English + Spanish support from the repo
- Make the demo feel like a product, not a toy

## Community project direction (secondary task)

Not implemented yet, but this is the right shape for a community repo:

- protect `main`
- require PRs for changes
- add contribution guidelines
- add PR review rules
- add a clear code/style standard
- define ownership for copy, design, and technical changes
- keep repo snapshots and imported references documented

## Recommendation

The best landing is **not** any single one of these.

It should combine:

- Becker’s short, confident hook
- the GitHub landing’s technical credibility
- the docs/manual depth
- the honest interactive demo framing

In practice: **simple hero, serious proof, clear workflow, strong docs, honest demo**.

## Next step

Build the community landing from this synthesis and then add the community governance layer as a secondary pass.
