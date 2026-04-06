# Figma Make Provider Overlay

Use this overlay when the active environment is Figma Make.

## Preferred approach

- Load `@chg-ds/unified-design-system/ai/USE-FIRST.md`.
- Then load:
  - `figma-make.json`
  - `figma-make`
  - `examples/layout-recipes`
  - `visual-fixtures`
  - `templates`
  - `navigation`

## Figma Make-specific guidance

- Figma Make should not infer wrapper behavior from visuals alone.
- Always resolve:
  - `Container` props
  - `Layout` props
  - `Menu` navigation props
before generating structure.
- If router context is uncertain, do not rely on router-owned navigation.
- Use:
  - `Menu.currentPath`
  - `Menu.onNavigate`
for host-controlled navigation behavior.

## Good instruction pattern

1. Choose recipe from `recommendedByIntent`.
2. Choose a matching visual fixture for hierarchy, density, and interaction state.
3. Resolve `Container` and `Layout` props explicitly.
4. Build `Menu.navItems` from the navigation contract.
5. Use controlled navigation props when router context is missing.
6. Validate against the Figma Make contract and UDS validation rules.
