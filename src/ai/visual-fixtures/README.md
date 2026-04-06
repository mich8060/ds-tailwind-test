# Visual Fixtures

Use visual fixtures as the bridge between layout recipes and polished UI composition.

## What this is

- `manifest.json` is the approved catalog of visual references.
- `schema.json` defines the expected shape for fixture metadata.
- `images/` is the optional home for imported screenshot assets.

## Trust tiers

- `product-canonical`: best available representation of a real UDS product page or workflow state.
- `product-adjacent`: close to a real UDS pattern, but partial, sparse, or not yet the strongest canonical reference.
- `generic-inspiration`: cross-industry inspiration for polish, density, and hierarchy.
- `incomplete-placeholder`: placeholder or slot reference. Use only when the task explicitly needs an incomplete state.

## How to use it

1. Load `ai/examples/layout-recipes` and choose the structural recipe first.
2. Load `ai/visual-fixtures` and prefer fixtures in this order:
   - `product-canonical`
   - `product-adjacent`
   - `generic-inspiration`
3. Within the same tier, select a fixture that matches:
   - brand
   - route intent
   - interaction state
4. Borrow hierarchy, density, surface rhythm, and interaction patterns.
5. Keep implementation inside canonical UDS components and tokens.

## How to add a new fixture

1. Add a new object to `manifest.json`.
2. Use a stable `id` like `connect-reporting-filter-rail`.
3. Fill in:
   - `trustTier`
   - `brand`
   - `pageType`
   - `interactionState`
   - `routeIntent`
   - `recipeIds`
   - `visualDirection`
   - `requiredAnchors`
   - `mustNotMiss`
4. If the screenshot asset is available in the repo, place it in `images/` and set `status` to `asset-backed` and `imagePath` to the repo-relative image file.
5. If the screenshot only exists as an external or chat-provided reference, keep `status` as `metadata-only`.

## Authoring rules

- Prefer fixtures that show real workflow states, not just static landing pages.
- Keep one fixture per meaningful state change.
- Capture layout density, visual hierarchy, and action placement.
- Do not treat fixtures as permission to invent new component APIs.
- Use `product-canonical` only when the fixture is a strong source-of-truth reference for that flow.
- Use `generic-inspiration` only for composition and polish, not product-specific behavior.
- Use `incomplete-placeholder` for empty integration slots, unfinished embeds, or similar non-final UI states.
