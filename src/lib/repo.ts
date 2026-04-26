/**
 * Canonical product + community URLs.
 * The landing displays stars/forks/release of the PRODUCT repo, not this one.
 * Update only here — every consumer imports from this module.
 */

export const PRODUCT_REPO = {
  owner: 'Gentleman-Programming',
  name: 'gentle-ai',
  url: 'https://github.com/Gentleman-Programming/gentle-ai',
} as const;

export const COMMUNITY_REPO = {
  owner: 'IrrealV',
  name: 'gentle-ai-community-landing',
  url: 'https://github.com/IrrealV/gentle-ai-community-landing',
} as const;

export const SOCIAL = {
  discord: 'https://discord.com/invite/3QVhF5vRsR',
  youtube: 'https://www.youtube.com/@GentlemanProgramming',
  github: PRODUCT_REPO.url,
} as const;
