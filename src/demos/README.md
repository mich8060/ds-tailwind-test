# Component Demo Template

The demo system is now registry-driven so new demos do not require route wiring in `src/main.tsx`.

## Source Of Truth

- Registry: `src/demos/component-demo.registry.ts`
- Dynamic route renderer: `src/pages/components/ComponentDemoRoutePage.tsx`
- Route path: `/components/:componentId`

## Add A New Demo

1. Create the demo page module in `src/pages/components/`.
2. Add one registry entry in `COMPONENT_DEMOS`:
   - `kind: "module"` for full demo pages
   - `kind: "placeholder"` for generated placeholder demos
3. Ensure `slug` matches the URL segment for `/components/<slug>`.

Navigation is generated from `COMPONENT_DEMO_NAV_ITEMS`, so no separate menu update is needed.
