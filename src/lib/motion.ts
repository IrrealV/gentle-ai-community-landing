/**
 * Reduced-motion contract (Fabri pattern).
 *
 * Every animated component MUST consume this helper. There is no other
 * approved way to opt out of motion. If a component animates without going
 * through here, it ships broken for users who set `prefers-reduced-motion`.
 *
 * Usage in an island:
 *   import { prefersReducedMotion, onMotionChange } from '@/lib/motion';
 *   if (prefersReducedMotion()) return; // skip the animation entirely
 *
 * SSR-safe: the helpers no-op on the server (no `window`).
 */

const QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return false;
  return window.matchMedia(QUERY).matches;
}

export type MotionListener = (reduced: boolean) => void;

/**
 * Subscribe to OS-level changes. Returns an unsubscribe fn.
 * No-op on the server.
 */
export function onMotionChange(listener: MotionListener): () => void {
  if (typeof window === 'undefined' || !('matchMedia' in window)) {
    return () => {};
  }
  const mql = window.matchMedia(QUERY);
  const handler = (e: MediaQueryListEvent) => listener(e.matches);
  mql.addEventListener('change', handler);
  return () => mql.removeEventListener('change', handler);
}
