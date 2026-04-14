# buildx-templates

Pre-baked framework scaffolds used by the BuildX backend. When a project is created, the backend resolves the requested framework against `manifest.json`, copies the matching `files/` tree into a fresh workspace, and then hands the project to claw-code for business-logic implementation.

## Layout

```
buildx-templates/
  manifest.json              # registry: framework -> template path
  <template-id>/
    template.json            # metadata (engines, commands, placeholders)
    README.md                # what is pre-baked
    files/                   # tree copied verbatim into workspace
```

## Placeholders

Text files may contain `{{APP_NAME}}` and `{{APP_DESCRIPTION}}`. The backend's TemplateApplier substitutes these at scaffold time on an allow-list of text extensions. If values are not provided, placeholders are left in place.

Placeholders are NOT substituted inside Java package paths.

## Templates

| ID | Framework | Preview port |
|---|---|---|
| nextjs-14-app-router | Next.js 14 App Router + Tailwind | 3000 |
| react-vite-ts | Vite 5 + React 18 + Tailwind | 5173 |
| astro | Astro 4 + Tailwind | 4321 |
| sveltekit | SvelteKit 2 + Tailwind | 5173 |
| expo | Expo SDK 50 + expo-router | 8081 |
| spring-boot-web | Spring Boot 3.4 + Java 21 | 8080 |
