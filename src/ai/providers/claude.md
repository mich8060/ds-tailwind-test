# Claude Provider Overlay

Use this overlay when the active model or coding environment is Claude or Claude Code.

## Preferred approach

- Load `@chg-ds/unified-design-system/ai/USE-FIRST.md` first.
- Then load the machine-readable contracts from `discovery.json` and `manifest.json`.
- Use `examples/layout-recipes` before freeform composition.
- Use `visual-fixtures` before polishing hierarchy or interaction workflows.
- When producing pages, carry `audit.recipeId` and `audit.patternId` when available.

## Claude-specific guidance

- Claude tends to respond well to explicit ordered workflows and deterministic constraints.
- Ask Claude to:
  - select a recipe by intent,
  - then select a template,
  - then fill slots,
  - then validate.
- Prefer short, imperative instructions over broad design requests.

## Good instruction pattern

1. Load UDS discovery and manifest.
2. Load layout-recipes and select `recommendedByIntent.firstChoice`.
3. Load visual-fixtures and select the closest matching brand/state reference.
4. Load templates and choose the closest matching template.
5. Compose using UDS components only.
6. Validate against the UDS contract.
