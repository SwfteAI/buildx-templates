# expo

Expo SDK 50 + React Native + TypeScript + expo-router.

## Pre-baked

- `package.json` with `expo@~50`, `expo-router@~3`, `react-native`, `typescript`
- `app.json` configured for expo-router
- `tsconfig.json` extending `expo/tsconfig.base`
- `babel.config.js` with `babel-preset-expo` + `expo-router/babel`
- `app/_layout.tsx`, `app/index.tsx`

## Commands

- `npx expo start` -> Metro bundler (dev server listens on 8081)
- `npx expo export` -> static export
- `tsc --noEmit` -> typecheck
