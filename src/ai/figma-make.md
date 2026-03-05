# Figma Make Contract (UDS Only)

Use this contract when generating interfaces from Figma Make into code for `@mich8060/unified-design-system`.

## Required Stack

- Use only imports from `@mich8060/unified-design-system` (or `@mich8060/unified-design-system/figma-make`).
- Compose UI with UDS components.
- Style only with `--uds-*` tokens or hardcoded literals when necessary.

## Banned Patterns

- No Tailwind classes or utility tokens (`bg-*`, `text-*`, `p-*`, `m-*`, `grid-*`, `flex-*`, etc.).
- No `className` utility styling.
- No raw HTML layout wrappers when a UDS component exists (`div`, `section`, `main`, etc.).
- No custom CSS variables (`--brand-*`, `--custom-*`, `--foo-*`).

## Output Requirements

- Return deterministic JSON tree output.
- Use canonical prop names only.
- Respect governed composition rules and spacing token rules.
- Max one primary action per section.

## Starter Layout Recipes

1. `auth-form-card`
- `Container(gap="--uds-spacing-24") > Card > Text + Field(TextInput) + Field(TextInput) + Flex(Button primary + Button text)`

2. `dashboard-table-summary`
- `Container(gap="--uds-spacing-16") > Flex(Text heading + Button primary) + Table(Status/Tag/ActionMenu)`

3. `settings-two-column`
- `Container > Text heading + Flex(gap="--uds-spacing-24") > Card(form) + Card(summary)`

4. `modal-confirmation`
- `Modal > Text heading + Text body + Flex(Button text + Button destructive)`

5. `wizard-steps-form`
- `Container > Text heading + Steps + Card(Field + Field + Flex(Button text + Button primary))`

## Icon Guidance

- Choose icon names only from `@mich8060/unified-design-system/ai/icons`.
- Prefer intent-aligned icons from catalog `recommendedByIntent`.

## Enforcement Notes

- Generation is validated by AI policy rules.
- Any Tailwind utility or custom variable usage will fail validation.
