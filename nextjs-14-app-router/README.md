# nextjs-14-app-router

Next.js 15 App Router scaffold with TypeScript (strict), Tailwind CSS 3, and ESLint.

The template ID is kept for compatibility with existing BuildX configurations.

## Pre-baked

- `package.json` with `next@15`, `react@19`, `typescript@5`, `tailwindcss@3`
- `tsconfig.json` (strict, `@/*` path alias)
- `tailwind.config.ts` + `postcss.config.js`
- `next.config.mjs`
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- `.eslintrc.json` (next/core-web-vitals)

## Commands

- `npm run dev` -> dev server on port 3000
- `npm run build` -> production build
- `npm run start` -> serve production build
- `npm run lint` -> next lint
- `tsc --noEmit` -> typecheck
