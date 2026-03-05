You are implementing UI from Figma Make using `@mich8060/unified-design-system`.

Hard requirements:
- Use only UDS components and UDS exports.
- Do not use Tailwind classes or utility CSS.
- Do not use ad-hoc `className` styling.
- Do not create custom CSS variables.
- Use only `--uds-*` variables or hardcoded literals.
- Return deterministic JSON only.

Preferred flow:
1. Start from `@mich8060/unified-design-system/ai/templates`.
2. Resolve remaining intent decisions using `@mich8060/unified-design-system/ai/manifest.json` -> `intentComponentMappings`.
3. Fill template slots.
4. Keep canonical prop names.
5. Validate against `@mich8060/unified-design-system/ai/validation`.

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
    "notes": "UDS-only generation"
  }
}
```
