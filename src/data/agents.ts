/**
 * Source of truth for the agents grid (Gerardo pattern).
 * Components consume this list — never hardcode agent names in markup.
 *
 * `badge`:
 *   - `full` — supports the entire SDD pipeline end to end.
 *   - `solo` — works best on individual phases (apply / verify) rather than full delegation.
 */

export type AgentBadge = 'full' | 'solo';

export interface Agent {
  id: string;
  name: string;
  logo: string;
  url: string;
  badge: AgentBadge;
  description: string;
  /** Apply CSS filter inversion when the logo is monochrome dark on a dark surface. */
  darkInvert?: boolean;
}

export const agents: Agent[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    logo: '/images/agents/claude-code.svg',
    url: 'https://claude.ai/code',
    badge: 'full',
    description:
      "Anthropic's agentic CLI. Runs the full SDD pipeline autonomously — from exploration to archive — without leaving the terminal.",
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    logo: '/images/agents/opencode.svg',
    url: 'https://opencode.ai',
    badge: 'full',
    description:
      'Open-source terminal agent that supports multiple LLM backends. Full SDD delegation via the CLAUDE.md convention.',
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    logo: '/images/agents/gemini-cli.svg',
    url: 'https://github.com/google-gemini/gemini-cli',
    badge: 'full',
    description:
      "Google's command-line agent with Gemini 2.5 Pro. Excels at long-context tasks and full pipeline delegation.",
  },
  {
    id: 'cursor',
    name: 'Cursor',
    logo: '/images/agents/cursor.svg',
    url: 'https://cursor.sh',
    badge: 'full',
    darkInvert: true,
    description:
      'AI-first IDE with deep codebase understanding. Runs SDD phases inline via the cursor rules convention.',
  },
  {
    id: 'vscode-copilot',
    name: 'VS Code Copilot',
    logo: '/images/agents/vscode-copilot.svg',
    url: 'https://github.com/features/copilot',
    badge: 'full',
    darkInvert: true,
    description:
      'GitHub Copilot in VS Code with agent mode. Supports full SDD delegation via the .github/copilot-instructions.md convention.',
  },
  {
    id: 'codex',
    name: 'Codex',
    logo: '/images/agents/codex.svg',
    url: 'https://github.com/openai/codex',
    badge: 'solo',
    description:
      "OpenAI's coding agent. Works best with individual SDD phases — apply and verify — rather than full pipeline delegation.",
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    logo: '/images/agents/windsurf.svg',
    url: 'https://codeium.com/windsurf',
    badge: 'solo',
    darkInvert: true,
    description:
      "Codeium's agentic IDE. Integrates Gentle AI Skills and Engram memory for single-session coding tasks.",
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    logo: '/images/agents/antigravity.svg',
    // PENDING-LEAD-REVIEW: confirm Antigravity official URL with the Gentleman.
    url: 'https://idx.google.com',
    badge: 'solo',
    description:
      'Lightweight AI coding assistant. Uses Gentle AI Skills for targeted, task-specific augmentation.',
  },
];
