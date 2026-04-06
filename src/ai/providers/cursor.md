# Cursor Provider Overlay

Use this overlay when the active environment is Cursor or another editor-centric coding agent with repo rules.

## Preferred approach

- Load `@chg-ds/unified-design-system/ai/USE-FIRST.md`.
- Then rely on repo-local AI assets instead of freeform inference.
- Use layout recipes, visual fixtures, and templates before writing app pages.

## Cursor-specific guidance

- Cursor tends to benefit from explicit file references and repo-local instruction files.
- Point Cursor at:
  - `discovery.json`
  - `manifest.json`
  - `navigation/brand-menus.json`
  - `examples/layout-recipes.json`
  - `visual-fixtures/manifest.json`
  - `prompts/starter.prompt.md`
- When generating app code, keep router ownership outside the design system.
- Use `Menu.currentPath` and `Menu.onNavigate` if the app shell is being scaffolded before full router wiring.

## Good instruction pattern

1. Read the UDS AI files.
2. Choose the recipe by intent.
3. Choose the closest visual fixture by brand and page state.
4. Build the route/page from the selected recipe.
5. Keep imports package-level only.
6. Run build and AI validation.
