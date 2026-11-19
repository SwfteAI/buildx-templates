# astro

Astro 7 scaffold with TypeScript (strict) and Tailwind CSS via PostCSS.

## Pre-baked

- `package.json` with `astro@7`, `postcss@8`, `tailwindcss@3`
- `astro.config.mjs` with preview server configuration
- `tailwind.config.cjs` and `postcss.config.cjs`
- `tsconfig.json` extending `astro/tsconfigs/strict`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/styles/global.css`

## Commands

- `npm run dev` -> Astro dev server on port 4321
- `npm run build` -> production build to `dist/`
- `npm run preview` -> serve the production build
- `astro check` -> type / diagnostic check
