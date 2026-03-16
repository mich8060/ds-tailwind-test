You are implementing UI from Figma Make using `@chg-ds/unified-design-system`.

Hard requirements:
- Use only UDS components and UDS exports.
- Use only package-level imports from `@chg-ds/unified-design-system` (or `/figma-make`).
- Never deep import `@/.../components/*`.
- Do not use Tailwind classes or utility CSS.
- Do not use ad-hoc `className` styling.
- Ensure app root is wrapped in `BrowserRouter` (or `RouterProvider`) before rendering route-aware UDS components.
- Load icons from `@chg-ds/unified-design-system/ai/icons` (alias `@chg-ds/unified-design-system/ai/icons.json`) before assigning icon props.
- Do not create custom CSS variables.
- Use only `--uds-*` variables or hardcoded literals.
- Use canonical prop names only (reject Ant-style aliases like `Menu.items`, `Flex.vertical`, `Button.type`).
- Default `Container` to `appearance=\"transparent\"` and `padding=\"large\"` (24px) unless a different requirement is explicit.
- Default `Menu.showSearch` to `false` unless search is explicitly required.
- In `Menu` account actions, default `accountMenuItems` to:
  1. `Contact` with icon `Phone`
  2. `Feedback` with icon `ChatCenteredText`
  3. `Sign out` with icon `SignOut` (`destructive: true`)
- Return deterministic JSON only.

Preferred flow:
1. Start from `@chg-ds/unified-design-system/ai/templates`.
1.0 Load `@chg-ds/unified-design-system/ai/token-catalog` and `@chg-ds/unified-design-system/ai/layout-architecture`.
1.1 Copy the selected template `patternId` into `audit.patternId` in the output.
2. Resolve remaining intent decisions using `@chg-ds/unified-design-system/ai/manifest.json` -> `intentComponentMappings`.
3. Load brand menu definitions from `@chg-ds/unified-design-system/ai/navigation`.
4. Fill template slots.
5. Keep canonical prop names.
6. Validate against `@chg-ds/unified-design-system/ai/validation`.

Invalid to valid prop examples:
- `Menu.items` -> `Menu.navItems`
- `Menu.mode` -> `Menu.activeMode`
- `Flex.vertical` -> `Flex.direction`
- `Flex.justify` -> `Flex.justifyContent`
- `Flex.align` -> `Flex.alignItems`
- `Button.type` -> `Button.appearance`

Starter scaffold:
```json
{
  "manifestVersion": "1.0.0",
  "governanceVersion": "1.0.0",
  "policyVersion": "1.0.0",
  "tree": {
    "type": "Container",
    "props": { "gap": "--uds-spacing-24" },
    "children": [
      {
        "type": "Card",
        "children": [
          { "type": "Text", "props": { "variant": "heading-24", "text": "Title" } },
          {
            "type": "Flex",
            "children": [
              { "type": "Button", "props": { "appearance": "primary", "label": "Primary" } },
              { "type": "Button", "props": { "appearance": "text", "label": "Secondary" } }
            ]
          }
        ]
      }
    ]
  },
  "audit": {
    "source": "figma-make",
    "patternId": "AuthForm",
    "notes": "UDS-only generation"
  }
}
```
