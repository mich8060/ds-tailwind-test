# OpenAI Provider Overlay

Use this overlay when the active model is ChatGPT, the OpenAI API, or another OpenAI tool-calling environment.

## Preferred approach

- Load `@chg-ds/unified-design-system/ai/USE-FIRST.md` first.
- Then use machine-readable assets in this order:
  - `discovery.json`
  - `manifest.json`
  - `schema`
  - `layout-recipes`
  - `visual-fixtures`
  - `templates`

## OpenAI-specific guidance

- OpenAI models work best when the required output shape is explicit.
- Always provide:
  - required input files to load,
  - exact output format,
  - constraints,
  - and validation expectations.
- Prefer schema-first and JSON-first generation when scaffolding UI trees.

## Good instruction pattern

1. Read discovery and manifest.
2. Select layout recipe from `recommendedByIntent`.
3. Select a matching visual fixture for hierarchy and interaction-state guidance.
4. Generate only valid UDS JSON or valid app code using package exports.
5. Include `audit.recipeId` and `audit.patternId` if the output supports audit metadata.
