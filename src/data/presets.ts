/**
 * Preset configurations (Becker pattern).
 *
 * Four shapes the user can install in one command. The tagline / description
 * live in the i18n dictionary; this file owns the structural data.
 *
 * `cliFlag` is the value passed to the installer's `--preset` flag, e.g.
 * `gentle-ai install --preset full-gentleman`.
 */

export type PresetIcon =
  | 'crown'
  | 'boxes'
  | 'minus'
  | 'sliders-horizontal';

export interface Preset {
  id: string;
  /** Translation key under `presets.items.<id>` for name/tagline/description. */
  cliFlag: string;
  /** Components/skills bundled with this preset. */
  included: readonly string[];
  icon: PresetIcon;
  /** Optional short label rendered as a corner badge. */
  badgeKey: 'recommended' | 'popular' | 'lightweight' | 'flexible';
  /** Whether to render the visual ring accent (one preset is highlighted). */
  highlight: boolean;
}

export const presets: readonly Preset[] = [
  {
    id: 'full-gentleman',
    cliFlag: 'full-gentleman',
    included: [
      'Engram',
      'SDD',
      'Skills',
      'Context7',
      'GGA',
      'Persona',
      'Permissions',
      'Theme',
    ],
    icon: 'crown',
    badgeKey: 'recommended',
    highlight: true,
  },
  {
    id: 'ecosystem-only',
    cliFlag: 'ecosystem-only',
    included: ['Engram', 'SDD', 'Skills', 'Context7', 'GGA'],
    icon: 'boxes',
    badgeKey: 'popular',
    highlight: false,
  },
  {
    id: 'minimal',
    cliFlag: 'minimal',
    included: ['Engram', 'SDD skills'],
    icon: 'minus',
    badgeKey: 'lightweight',
    highlight: false,
  },
  {
    id: 'custom',
    cliFlag: 'custom',
    included: [],
    icon: 'sliders-horizontal',
    badgeKey: 'flexible',
    highlight: false,
  },
];
