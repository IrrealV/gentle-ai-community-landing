import { en } from './en';
import { es } from './es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const dictionaries = { en, es } satisfies Record<Locale, typeof en>;

export function t(locale: Locale) {
  return dictionaries[locale];
}
