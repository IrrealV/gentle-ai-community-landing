/**
 * English content contract — single source of truth.
 * Spanish (`./es.ts`) MUST satisfy the inferred `Dictionary` type. CI smoke
 * tests will enforce key parity between locales.
 *
 * Most strings are ported verbatim from Gerardo's reviewed dictionary.
 * Items flagged with PENDING-LEAD-REVIEW are placeholders that need a
 * confirming pass from the relevant lead before this PR merges.
 */

export const en = {
  meta: {
    title: 'Gentle AI — One command. Any agent. Any OS.',
    description:
      'The Gentleman AI ecosystem configured and ready. Engram memory, SDD pipelines, Skills, and Persona — installed in seconds across every major coding agent.',
  },

  nav: {
    problem: 'Problem',
    solution: 'Solution',
    howItWorks: 'How It Works',
    agents: 'Agents',
    buildAgent: 'Build Agent',
    presets: 'Presets',
    install: 'Install',
    community: 'Community',
    switchLang: 'Español',
    ctaInstall: 'Install',
  },

  hero: {
    badge: 'Open Source · MIT License',
    headlineLines: ['One command.', 'Any agent.', 'Any OS.'],
    subheadline: 'The Gentleman AI ecosystem configured and ready.',
    ctaInstall: 'Install Now',
    ctaGithub: 'View on GitHub',
    versionBadgePrefix: 'Now available',
    installWidgetTitle: 'gentle-ai',
    osHints: {
      mac: 'Detected macOS',
      linux: 'Detected Linux',
      windows: 'Detected Windows',
      unknown: 'Pick your platform',
    },
  },

  problem: {
    eyebrow: 'The pain',
    headline: 'Every project starts the same way.',
    intro:
      'You open a new repo, you open your AI agent, and you spend the next hour configuring the same things you configured last week.',
    points: [
      {
        title: 'You paste the same prompts over and over',
        description:
          "Memory doesn't persist. Every session starts blind. You re-explain your conventions, your stack, your preferences — every. single. time.",
      },
      {
        title: 'Every agent behaves differently',
        description:
          'Claude, Gemini, Cursor, Copilot — they each need different configuration. Maintaining consistency across tools is a full-time job.',
      },
      {
        title: 'No structure for complex changes',
        description:
          'AI agents hallucinate when the scope is large. Without a proper workflow — spec, design, tasks, apply — they drift and produce garbage.',
      },
    ],
  },

  solution: {
    eyebrow: 'The fix',
    headline: 'One config. All agents. Production-ready.',
    intro:
      'Gentle AI is the missing layer between your codebase and your AI agents. Configure once, share everywhere.',
    pillars: [
      {
        id: 'engram',
        title: 'Engram — Persistent Memory',
        description:
          'Decisions, conventions, bug fixes, and discoveries persist across sessions and compaction. Your agents remember everything.',
      },
      {
        id: 'sdd',
        title: 'SDD — Structured Delivery',
        description:
          'Spec-Driven Development breaks large changes into proposal → spec → design → tasks → apply → verify. No more hallucinations on complex tasks.',
      },
      {
        id: 'skills',
        title: 'Skills — Reusable Expertise',
        description:
          'Packaged agent instructions for testing, PR creation, review, and more. One install, every agent benefits.',
      },
      // PENDING-LEAD-REVIEW: Persona pillar copy needs Gentleman/Gerardo confirmation.
      {
        id: 'persona',
        title: 'Persona — Teaching-Oriented Voice',
        description:
          'Every agent speaks with the same voice across the pipeline — direct, passionate, focused on growth instead of just shipping code.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'The flow',
    headline: 'From install to shipping in minutes.',
    steps: [
      {
        number: '01',
        title: 'Install Gentle AI',
        description:
          'One command via Homebrew, curl, Scoop, or Go. Gentle AI is available on macOS, Linux, and Windows.',
      },
      {
        number: '02',
        title: 'Pick a preset',
        description:
          'Choose full-gentleman for everything, ecosystem-only for the core stack, or minimal for just the essentials. Or mix and match components.',
      },
      {
        number: '03',
        title: 'Open your AI agent',
        description:
          'Claude Code, Gemini CLI, Cursor — your agent now has Engram memory, SDD pipelines, Skills, and your conventions pre-loaded.',
      },
      {
        number: '04',
        title: 'Ship faster',
        description:
          'No more repeating context. No more hallucinations on large tasks. Just clean, structured, AI-powered development.',
      },
    ],
  },

  agents: {
    eyebrow: 'The agents',
    headline: 'Works with your agent.',
    intro:
      'Gentle AI supports every major AI coding agent. Full delegation means the agent can run the entire SDD pipeline autonomously.',
    badges: {
      full: 'Full Delegation',
      solo: 'Solo Agent',
    },
    visitLabel: 'Visit',
  },

  buildAgent: {
    eyebrow: 'Extend',
    headline: 'Create your own agent.',
    intro:
      "Gentle AI is not just a preset installer — it's an extensible platform. Write one Markdown file and your custom agent installs across all your AI tools automatically.",
    codeBlockTitle: 'agents/my-agent.md',
    codeBlock:
      '# My Custom Agent\n\n## Trigger\nWhen the user mentions migrations, the agent activates.\n\n## Instructions\nDescribe the task, the constraints, and the success criteria.\nGentle AI handles registration across every supported tool.',
    features: [
      {
        id: 'file-tools',
        title: 'One file, all tools',
        description:
          'Write once, auto-installed in Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex, Antigravity, and Windsurf.',
      },
      {
        id: 'sdd-integration',
        title: 'SDD integration',
        description:
          'Custom agents can enhance existing SDD phases, add new phases to the DAG, or run completely standalone.',
      },
      {
        id: 'registry',
        title: 'Collision-safe registry',
        description:
          'Built-in registry prevents naming conflicts with built-in skills. Automatic rollback on failure keeps you safe.',
      },
    ],
  },

  presets: {
    eyebrow: 'Presets',
    headline: 'Pick your setup level.',
    intro:
      'From zero-to-everything in one command. Re-run the installer anytime to change your config.',
    cliLabel: 'CLI flag',
    includesLabel: 'Includes',
    badges: {
      recommended: 'Recommended',
      popular: 'Popular',
      lightweight: 'Lightweight',
      flexible: 'Flexible',
    },
    items: {
      'full-gentleman': {
        name: 'Full Gentleman',
        tagline: 'The complete experience',
        description:
          'All 8 components + all skills + Gentleman persona. Maximum power, maximum teaching.',
      },
      'ecosystem-only': {
        name: 'Ecosystem Only',
        tagline: 'Core stack, no theme',
        description:
          'Core components + all skills + Gentleman persona. Skip the visual theme if you prefer.',
      },
      minimal: {
        name: 'Minimal',
        tagline: 'Just the essentials',
        description:
          'Engram memory + SDD skills only. For those who want the workflow without the extras.',
      },
      custom: {
        name: 'Custom',
        tagline: 'Your choice, your rules',
        description:
          'Pick exactly which components, skills, and persona you want. Full control over the stack.',
      },
    },
  },

  install: {
    eyebrow: 'Install',
    headline: 'Get started in seconds.',
    intro: 'Pick your platform. One command.',
    copy: 'Copy',
    copied: 'Copied!',
    postInstall: {
      headline: 'After install',
      intro:
        'Two commands keep your stack honest: `sync` pulls the latest agents and skills, and `auto-update` keeps the installation current in the background.',
    },
    // PENDING-LEAD-REVIEW: confirm exact UX wording for sync / auto-update.
    sync: {
      label: 'Sync',
      description:
        'Pulls the latest agents, skills, and presets from the registry. Run after every install or whenever you want to refresh your stack.',
    },
    autoUpdate: {
      label: 'Auto-update',
      description:
        'Keeps your installation current without manual sync. Toggle on once and Gentle AI handles the rest in the background.',
    },
  },

  community: {
    eyebrow: 'Community',
    headline: 'Built with the community.',
    intro:
      'Gentle AI is open source and community-driven. Join the developers shipping faster with AI.',
    discord: 'Join our Discord',
    starOnGithub: 'Star on GitHub',
    contributorsLabel: 'Contributors',
    statsLabels: {
      stars: 'GitHub Stars',
      forks: 'Forks',
      contributors: 'Contributors',
      version: 'Latest Version',
    },
    tribute: {
      quote:
        '"This is what every AI coding setup should feel like — opinionated, structured, and out of your way."',
      attribution: 'Built and curated by the Gentleman Programming community',
    },
  },

  finalCta: {
    eyebrow: 'Ready?',
    headlineLines: ['Stop configuring.', 'Start shipping.'],
    subheadline:
      'One command. Any agent. Any OS. The Gentleman AI ecosystem configured and ready.',
    ctaInstall: 'Install Gentle AI',
    ctaGithub: 'Star on GitHub',
  },

  // ─── Phase 2 — Supporting pages ────────────────────────────────────────
  nav2: {
    home: 'Home',
    features: 'Features',
    howItWorksPage: 'How It Works',
    demo: 'Demo',
  },

  featuresPage: {
    meta: {
      title: 'Features — Gentle AI',
      description:
        'The full catalogue of components and skills inside the Gentle AI ecosystem.',
    },
    hero: {
      eyebrow: 'Features',
      headline: 'Everything that ships in one command.',
      subheadline:
        'Eight components, three skill families, and every supported agent — wired together by a single installer.',
    },
    components: {
      eyebrow: 'Components',
      headline: 'Mix and match what you need.',
      intro:
        'Gentle AI is modular. Use a preset to start, then add or remove components individually.',
      items: [
        {
          id: 'engram',
          name: 'Engram',
          description:
            'Persistent memory across sessions, compactions, and machines. Decisions, conventions, bug fixes survive forever.',
        },
        {
          id: 'sdd',
          name: 'SDD',
          description:
            'Spec-Driven Development — propose → spec → design → tasks → apply → verify. Structure for complex changes.',
        },
        {
          id: 'skills',
          name: 'Skills',
          description:
            'Packaged agent instructions that activate by context — testing, PR creation, review, scaffolding.',
        },
        {
          id: 'persona',
          name: 'Persona',
          description:
            'A consistent teaching-oriented voice across every phase. Direct, passionate, focused on growth.',
        },
        {
          id: 'context7',
          name: 'Context7',
          description:
            'Live, version-pinned library documentation injected into the agent context. No outdated training data.',
        },
        {
          id: 'gga',
          name: 'GGA',
          description:
            'Gentleman GitHub Agent — issue creation, PR review, branch management with structured workflows.',
        },
        {
          id: 'permissions',
          name: 'Permissions',
          description:
            'Granular allowlists for what tools your agent may run. Default-deny, opt-in for risky operations.',
        },
        {
          id: 'theme',
          name: 'Theme',
          description:
            'Curated terminal + editor themes that match the Gentleman aesthetic across every supported tool.',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      headline: 'Three families of curated skills.',
      intro:
        'Skills are reusable agent instructions — you install them once and every supported agent gains the capability.',
      groups: [
        {
          id: 'sdd',
          name: 'SDD Skills',
          description:
            'Phase-by-phase skills that orchestrate Spec-Driven Development end to end.',
          examples: ['sdd-init', 'sdd-explore', 'sdd-propose', 'sdd-spec', 'sdd-design', 'sdd-tasks', 'sdd-apply', 'sdd-verify', 'sdd-archive'],
        },
        {
          id: 'foundation',
          name: 'Foundation Skills',
          description:
            'Tooling that every project benefits from — registry, branch & PR workflow, judgment day reviews.',
          examples: ['skill-creator', 'skill-registry', 'branch-pr', 'issue-creation', 'judgment-day'],
        },
        {
          id: 'community',
          name: 'Community Skills',
          description:
            'Contributed by the community for specific stacks and tools. Versioned, sandboxed, opt-in.',
          examples: ['go-testing', 'pest-testing', 'blade-alpine', 'permissions', 'sdd-onboard'],
        },
      ],
    },
    cta: {
      headline: 'Ready to install?',
      subheadline:
        'One command brings everything above. Pick a preset, swap pieces later.',
      ctaInstall: 'See install methods',
      ctaHome: 'Back to home',
    },
  },

  howItWorksPage: {
    meta: {
      title: 'How it works — Gentle AI',
      description:
        'The SDD pipeline, the Engram memory layer, and the Skills system that make every agent ship faster.',
    },
    hero: {
      eyebrow: 'How it works',
      headline: 'Structure for AI-assisted shipping.',
      subheadline:
        'Three primitives carry the load: a structured pipeline (SDD), a persistent memory layer (Engram), and a curated skill registry. Together they let any agent operate at production quality.',
    },
    sddPipeline: {
      eyebrow: 'SDD Pipeline',
      headline: 'Nine phases. One direction.',
      intro:
        'Spec-Driven Development is the structured planning layer for substantial changes. Each phase has a clear input, output, and responsibility — agents follow the DAG, not their hallucinations.',
      phases: [
        { id: 'init', label: 'Init', description: 'Bootstrap SDD context in a project. Detects stack, conventions, testing capabilities.' },
        { id: 'explore', label: 'Explore', description: 'Investigate the codebase before committing. Surface tradeoffs without creating artifacts.' },
        { id: 'propose', label: 'Propose', description: 'Define what you want to do and why. Entry point for any substantial change.' },
        { id: 'spec', label: 'Spec', description: 'Write requirements and scenarios. Defines what success looks like before any code.' },
        { id: 'design', label: 'Design', description: 'Architecture decisions and component contracts. The blueprint, with risks named.' },
        { id: 'tasks', label: 'Tasks', description: 'Ordered checklist with clear dependencies. Sliceable, resumable.' },
        { id: 'apply', label: 'Apply', description: 'Implement in batches. Multi-session safe, progress persisted.' },
        { id: 'verify', label: 'Verify', description: 'Validate against spec. Reports CRITICAL / WARNING / SUGGESTION before merge.' },
        { id: 'archive', label: 'Archive', description: 'Persist the final state and close the change. Spec deltas merge into main.' },
      ],
    },
    engram: {
      eyebrow: 'Engram',
      headline: 'Memory that never forgets.',
      intro:
        'Engram gives your agents persistent memory across sessions, compactions, and machines. Decisions, conventions, bug fixes — stored once, recalled forever.',
      features: [
        {
          id: 'cross-session',
          label: 'Cross-session',
          description: 'Decisions, bugs, conventions survive forever — no more re-explaining context.',
        },
        {
          id: 'cross-tool',
          label: 'Cross-tool',
          description: 'Works with Claude Code, OpenCode, Gemini CLI, Cursor, and any MCP-compatible tool.',
        },
        {
          id: 'cross-machine',
          label: 'Cross-machine',
          description: 'Git sync enables memory sharing across all your devices.',
        },
      ],
    },
    skillsCallout: {
      eyebrow: 'Skills',
      headline: 'Reusable expertise, one install away.',
      description:
        'Skills package agent instructions for testing, PR creation, code review, scaffolding, and more. Install once — every supported agent gains the capability automatically.',
      ctaSeeFeatures: 'See the full skill catalogue',
    },
    cta: {
      headline: 'See it in action.',
      subheadline:
        'Open the keyboard-driven demo and experience the install flow without touching your terminal.',
      ctaDemo: 'Open the demo',
      ctaInstall: 'Or skip to install',
    },
  },

  demoPage: {
    meta: {
      title: 'Demo — Gentle AI',
      description:
        'A keyboard-driven browser reconstruction of the Gentle AI install TUI.',
    },
    hero: {
      eyebrow: 'Demo',
      headline: 'Try the install without installing.',
      subheadline:
        'A browser reconstruction of the real `gentle-ai` TUI. Keyboard-driven. Honest about being a reconstruction.',
    },
    honest: {
      label: 'About this demo',
      body:
        'This is a browser-side reconstruction — the real terminal is faster, prettier, and runs on your machine. Use this to understand the flow; install for the real thing.',
    },
    mobileWarning: {
      title: 'This demo is keyboard-driven.',
      body:
        'Open it on a desktop browser to interact with the keys below. The narrative still works on mobile, but you cannot drive it.',
    },
    shortcuts: {
      label: 'Shortcuts',
      items: [
        { keys: ['↑', '↓'], description: 'Move between options' },
        { keys: ['Enter'], description: 'Select / confirm' },
        { keys: ['Esc'], description: 'Restart the demo' },
        { keys: ['?'], description: 'Show this panel' },
      ],
    },
    cta: {
      headline: 'Liked it?',
      subheadline: 'Install gentle-ai and run the real thing in seconds.',
      ctaInstall: 'See install methods',
    },
  },

  footer: {
    tagline: 'One command. Any agent. Any OS.',
    copyright: '© 2026 Gentleman Programming. MIT License.',
    columns: {
      sections: {
        label: 'Sections',
        items: [
          { label: 'How It Works', url: '#how-it-works' },
          { label: 'Agents', url: '#agents' },
          { label: 'Presets', url: '#presets' },
          { label: 'Install', url: '#install' },
          { label: 'Community', url: '#community' },
        ],
      },
      community: {
        label: 'Community',
        items: [
          { label: 'GitHub', url: 'https://github.com/Gentleman-Programming/gentle-ai' },
          { label: 'Discord', url: 'https://discord.com/invite/3QVhF5vRsR' },
          { label: 'YouTube', url: 'https://www.youtube.com/@GentlemanProgramming' },
        ],
      },
      ecosystem: {
        label: 'Ecosystem',
        items: [
          {
            label: 'Gentleman.Dots',
            url: 'https://github.com/Gentleman-Programming/Gentleman.Dots',
          },
          {
            label: 'GGA — GitHub Agent',
            url: 'https://github.com/Gentleman-Programming/GGA',
          },
          {
            label: 'Gentleman Academy',
            url: 'https://gentleman-programming.com',
          },
        ],
      },
    },
    socialAria: {
      github: 'Open the Gentle AI GitHub repository',
      discord: 'Join the Gentleman Programming Discord',
      youtube: 'Open the Gentleman Programming YouTube channel',
    },
  },
} as const;

export type Dictionary = typeof en;
