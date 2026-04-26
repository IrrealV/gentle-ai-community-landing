/**
 * One-shot placeholder icon generator.
 * Renders public/favicon.svg into apple-touch-icon.png (180×180) and
 * maskable-icon.png (512×512). The generated PNGs are PLACEHOLDERS — brand
 * is expected to replace them with the real icon kit.
 *
 * Run: `pnpm icons`
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SVG_PATH = join(ROOT, 'public', 'favicon.svg');

interface IconSpec {
  filename: string;
  size: number;
}

const SPECS: IconSpec[] = [
  { filename: 'apple-touch-icon.png', size: 180 },
  { filename: 'maskable-icon.png', size: 512 },
];

async function main(): Promise<void> {
  const svg = await readFile(SVG_PATH, 'utf8');
  for (const spec of SPECS) {
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: spec.size },
      background: 'rgba(10, 10, 15, 1)',
    });
    const png = resvg.render().asPng();
    const out = join(ROOT, 'public', spec.filename);
    await writeFile(out, png);
    console.log(`✓ ${spec.filename} (${spec.size}×${spec.size})`);
  }
}

main().catch((err: unknown) => {
  console.error('Icon generation failed:', err);
  process.exit(1);
});
