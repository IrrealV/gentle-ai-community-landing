/**
 * Install methods — single source of truth (Fabri pattern, expanded).
 *
 * Five OS-native install methods + the post-install lifecycle (`sync` and
 * `auto-update`) that the Gentleman flagged as missing across all four
 * reference landings. Components consume this list — never hardcode commands
 * in markup.
 */

export type InstallKind = 'install' | 'post-install';

export interface InstallMethod {
  id: string;
  /** Tab label shown in the UI. */
  label: string;
  /** Terminal title shown above the command (e.g. `bash`, `powershell`). */
  title: string;
  /** The exact command the user runs. */
  command: string;
  /** Whether this is an install entry or a post-install command. */
  kind: InstallKind;
  /** Optional one-line note rendered under the command. */
  note?: string;
}

export const installMethods: readonly InstallMethod[] = [
  {
    id: 'unix',
    label: 'macOS / Linux',
    title: 'bash',
    command:
      'curl -fsSL https://raw.githubusercontent.com/Gentleman-Programming/gentle-ai/main/scripts/install.sh | bash',
    kind: 'install',
  },
  {
    id: 'brew',
    label: 'Homebrew',
    title: 'brew',
    command:
      'brew tap Gentleman-Programming/homebrew-tap && brew install gentle-ai',
    kind: 'install',
  },
  {
    id: 'scoop',
    label: 'Windows (Scoop)',
    title: 'scoop',
    command:
      'scoop bucket add gentleman https://github.com/Gentleman-Programming/scoop-bucket && scoop install gentle-ai',
    kind: 'install',
  },
  {
    id: 'go',
    label: 'Go',
    title: 'go',
    command:
      'go install github.com/gentleman-programming/gentle-ai/cmd/gentle-ai@latest',
    kind: 'install',
  },
  {
    id: 'powershell',
    label: 'PowerShell',
    title: 'powershell',
    command:
      'irm https://raw.githubusercontent.com/Gentleman-Programming/gentle-ai/main/scripts/install.ps1 | iex',
    kind: 'install',
  },
  // PENDING-LEAD-REVIEW: confirm the exact `sync` command surface with the Gentleman.
  // The roadmap (docs/README.md Phase 1 §9) says: "the command that pulls the latest
  // agents, skills, and presets after a successful install". Default below assumes
  // a top-level `sync` subcommand.
  {
    id: 'sync',
    label: 'Sync',
    title: 'gentle-ai',
    command: 'gentle-ai sync',
    kind: 'post-install',
    note: 'Pulls the latest agents, skills, and presets. Run this after every install or whenever you want to refresh.',
  },
  // PENDING-LEAD-REVIEW: confirm the auto-update mechanism (background daemon, cron,
  // or `gentle-ai update --auto`). Default below assumes an explicit opt-in flag.
  {
    id: 'auto-update',
    label: 'Auto-update',
    title: 'gentle-ai',
    command: 'gentle-ai update --enable-auto',
    kind: 'post-install',
    note: 'Keeps your installation current without you running sync manually. Toggle off with `--disable-auto`.',
  },
];

export const installCount = installMethods.filter(
  (m) => m.kind === 'install',
).length;

export const postInstallCount = installMethods.filter(
  (m) => m.kind === 'post-install',
).length;
