# UDS AI Entry Guide

Use this file as the first human-readable entrypoint for any AI provider or agent.

## Goal

Produce interfaces using `@chg-ds/unified-design-system` without inventing structure, props, variables, or navigation patterns.

## Required load order

1. `@chg-ds/unified-design-system/ai/discovery.json`
2. `@chg-ds/unified-design-system/ai/manifest.json`
3. `@chg-ds/unified-design-system/ai/schema`
4. `@chg-ds/unified-design-system/ai/icons`
5. `@chg-ds/unified-design-system/ai/token-catalog`
6. `@chg-ds/unified-design-system/ai/navigation`
7. `@chg-ds/unified-design-system/ai/examples/layout-recipes`
8. `@chg-ds/unified-design-system/ai/visual-fixtures`
9. `@chg-ds/unified-design-system/ai/templates`
10. provider-specific overlay from `@chg-ds/unified-design-system/ai/providers/*`

## Always do these things

- Use package exports only.
- Prefer recipe-first page generation.
- After recipe selection, use visual fixtures to choose hierarchy, density, and interaction-state references.
- Prefer canonical props from the manifest.
- Use `Container` and `Layout` props explicitly.
- Use `Menu.currentPath` and `Menu.onNavigate` when router context is uncertain.
- Use `--uds-*` variables only, or hardcoded literals when allowed.

## Never do these things

- No Tailwind.
- No deep imports.
- No custom CSS variables.
- No raw HTML layout wrappers when UDS components can express the structure.
- No deprecated or alias prop APIs.

## Provider overlays

- Claude: `@chg-ds/unified-design-system/ai/providers/claude`
- OpenAI: `@chg-ds/unified-design-system/ai/providers/openai`
- Cursor: `@chg-ds/unified-design-system/ai/providers/cursor`
- Figma Make: `@chg-ds/unified-design-system/ai/providers/figma-make`
