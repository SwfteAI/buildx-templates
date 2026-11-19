import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.argv[2] ?? fileURLToPath(new URL('../', import.meta.url));
const reviewed = {
  'nextjs-14-app-router': { next: '15.5.29' },
  'react-vite-ts': { vite: '6.4.6' },
  sveltekit: { vite: '6.4.6' },
  astro: { astro: '7.4.13', vite: '8.3.8' },
};

let failed = false;
for (const [template, packages] of Object.entries(reviewed)) {
  const files = resolve(root, template, 'files');
  const manifest = JSON.parse(readFileSync(resolve(files, 'package.json'), 'utf8'));

  for (const [name, expected] of Object.entries(packages)) {
    const actual = manifest.overrides?.[name] ?? manifest.dependencies?.[name] ?? manifest.devDependencies?.[name];
    if (actual !== expected) {
      console.error(`${template}: ${name}@${actual} is outside the reviewed version set (expected ${expected})`);
      failed = true;
    }
  }
}

if (failed) process.exitCode = 1;
else console.log('Reviewed template versions verified');
