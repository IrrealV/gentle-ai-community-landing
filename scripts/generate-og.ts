/**
 * Build-time OG image pipeline (Becker pattern).
 *
 * Renders one PNG per entry in OG_CARDS into public/og/{slug}.png at 1200x630.
 * Fonts come from @fontsource/iosevka so the pipeline has no network dep.
 *
 * To add a card: append to OG_CARDS. The slug must match the `ogSlug` prop
 * passed to BaseLayout in the page that uses it.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori, { type SatoriOptions } from 'satori';
import { Resvg } from '@resvg/resvg-js';

interface OgCard {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

const OG_CARDS: OgCard[] = [
  {
    slug: 'default',
    eyebrow: 'gentle ai · community',
    title: 'One command. Any agent. Any OS.',
    subtitle: 'The community landing for the Gentle AI ecosystem.',
  },
  {
    slug: 'home',
    eyebrow: 'gentle ai · community',
    title: 'One command. Any agent. Any OS.',
    subtitle: 'Configure your AI coding ecosystem in seconds.',
  },
  {
    slug: 'home-es',
    eyebrow: 'gentle ai · comunidad',
    title: 'Un comando. Cualquier agente. Cualquier OS.',
    subtitle: 'Configurá tu ecosistema de coding con IA en segundos.',
  },
  {
    slug: 'features',
    eyebrow: 'gentle ai · features',
    title: 'Everything in one command.',
    subtitle: 'Eight components, three skill families, every supported agent.',
  },
  {
    slug: 'features-es',
    eyebrow: 'gentle ai · features',
    title: 'Todo en un solo comando.',
    subtitle: 'Ocho componentes, tres familias de skills, todos los agentes.',
  },
  {
    slug: 'how-it-works',
    eyebrow: 'gentle ai · how it works',
    title: 'Structure for AI-assisted shipping.',
    subtitle: 'SDD pipeline, Engram memory, curated Skills.',
  },
  {
    slug: 'how-it-works-es',
    eyebrow: 'gentle ai · cómo funciona',
    title: 'Estructura para shipping con IA.',
    subtitle: 'Pipeline SDD, memoria Engram, Skills curadas.',
  },
  {
    slug: 'demo',
    eyebrow: 'gentle ai · demo',
    title: 'Try it without installing.',
    subtitle: 'Keyboard-driven reconstruction of the gentle-ai TUI.',
  },
  {
    slug: 'demo-es',
    eyebrow: 'gentle ai · demo',
    title: 'Probá el install sin instalar.',
    subtitle: 'Reconstrucción keyboard-driven del TUI de gentle-ai.',
  },
];

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, 'public', 'og');
const FONT_REGULAR = join(
  ROOT,
  'node_modules/@fontsource/iosevka/files/iosevka-latin-400-normal.woff',
);
const FONT_BOLD = join(
  ROOT,
  'node_modules/@fontsource/iosevka/files/iosevka-latin-700-normal.woff',
);

function buildTree(card: OgCard): Parameters<typeof satori>[0] {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '64px 72px',
        background:
          'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #1a1a26 100%)',
        color: '#e4e4ef',
        fontFamily: 'Iosevka',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontSize: '24px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#E91E8C',
            },
            children: card.eyebrow,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '76px',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  },
                  children: card.title,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '30px',
                    color: '#9090ab',
                    lineHeight: 1.35,
                  },
                  children: card.subtitle,
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function generate(): Promise<void> {
  await mkdir(OUT_DIR, { recursive: true });
  const [regular, bold] = await Promise.all([
    readFile(FONT_REGULAR),
    readFile(FONT_BOLD),
  ]);

  const fonts: SatoriOptions['fonts'] = [
    { name: 'Iosevka', data: regular, weight: 400, style: 'normal' },
    { name: 'Iosevka', data: bold, weight: 700, style: 'normal' },
  ];

  for (const card of OG_CARDS) {
    const svg = await satori(buildTree(card), {
      width: 1200,
      height: 630,
      fonts,
    });
    const png = new Resvg(svg).render().asPng();
    const out = join(OUT_DIR, `${card.slug}.png`);
    await writeFile(out, png);
    console.log(`✓ og/${card.slug}.png`);
  }
}

generate().catch((err: unknown) => {
  console.error('OG generation failed:', err);
  process.exit(1);
});
