# Figma Make Contract (UDS Only)

Use this contract when generating interfaces from Figma Make into code for `@mich8060/unified-design-system`.

## Setup Instructions

Run this setup flow before generating UI:

1. Verify local toolchain
- Ensure `git`, `node` (LTS), and `npm` are installed.
- Confirm with:
  - `node -v`
  - `npm -v`
  - `git --version`

2. Install dependencies
- Run `npm install`.
- Resolve and rerun if install fails.

3. Select brand (required before scaffolding)
- Ask which brand to use: `default`, `comphealth`, `weatherby`, `connect`, `locumsmart`, `modio`, `gms`, or `wireframe`.
- Do not generate routes/menu until brand is selected.

4. Load AI contracts in order
- `@mich8060/unified-design-system/ai/discovery.json`
- `@mich8060/unified-design-system/ai/manifest.json`
- `@mich8060/unified-design-system/ai/schema`
- `@mich8060/unified-design-system/ai/icons` (or `@mich8060/unified-design-system/ai/icons.json`)
- `@mich8060/unified-design-system/ai/navigation`
- `@mich8060/unified-design-system/ai/templates`

5. Build required scaffold
- Wrap app root with `BrowserRouter` (or `RouterProvider`) before any route-aware UDS components.
- Use `AppShell > AppShell.Menu > AppShell.Content > AppShell.Main` as root layout.
- When context rails are required, include `AppShell.Listview` (left) and/or `AppShell.SidePanel` (right) inside `AppShell.Content`.
- Build `Menu.navItems` from selected brand in `brand-menus.json`.

6. Validate
- Run `npm run build` and `npm run ci:ai` (if available).
- Fix failures and rerun until passing.

## Required Stack

- Use only imports from `@mich8060/unified-design-system` (or `@mich8060/unified-design-system/figma-make`).
- Do not deep import from internal paths (for example `@/.../components/Menu`).
- Compose UI with UDS components.
- Style only with `--uds-*` tokens or hardcoded literals when necessary.

## Banned Patterns

- No Tailwind classes or utility tokens (`bg-*`, `text-*`, `p-*`, `m-*`, `grid-*`, `flex-*`, etc.).
- No `className` utility styling.
- No raw HTML layout wrappers when a UDS component exists (`div`, `section`, `main`, etc.).
- No custom CSS variables (`--brand-*`, `--custom-*`, `--foo-*`).
- No Ant-style prop APIs on UDS components:
  - `Menu.items`, `Menu.selectedKeys`, `Menu.mode`
  - `Flex.vertical`, `Flex.justify`, `Flex.align`
  - `Layout.vertical`, `Layout.justify`, `Layout.align`
  - `Button.type`
  - `Text.type`, `Text.strong`
  - `Badge.status`, `Badge.color`
  - `Statistics.title`, `Statistics.prefix`, `Statistics.suffix`, `Statistics.valueStyle`

## Output Requirements

- Return deterministic JSON tree output.
- Use canonical prop names only.
- Respect governed composition rules and spacing token rules.
- Max one primary action per section.

## Starter Layout Recipes

1. `auth-form-card`
- `Container(gap="--uds-spacing-24") > Card > Text + Field(TextInput) + Field(TextInput) + Layout(Button primary + Button text)`

2. `dashboard-table-summary`
- `Container(gap="--uds-spacing-16") > Layout(Text heading + Button primary) + Table(Status/Tag/ActionMenu)`

3. `settings-two-column`
- `Container > Text heading + Layout(gap="--uds-spacing-24") > Card(form) + Card(summary)`

4. `modal-confirmation`
- `Modal > Text heading + Text body + Layout(Button text + Button destructive)`

5. `wizard-steps-form`
- `Container > Text heading + Steps + Card(Field + Field + Layout(Button text + Button primary))`

## Icon Guidance

- Choose icon names only from `@mich8060/unified-design-system/ai/icons` (alias: `@mich8060/unified-design-system/ai/icons.json`).
- Prefer intent-aligned icons from catalog `recommendedByIntent`.

## Brand Navigation Guidance

- Load brand menu definitions from `@mich8060/unified-design-system/ai/navigation`.
- Do not hardcode brand nav links when this contract is available.
- Build `Menu.navItems` directly from the brand entry in `brand-menus.json`.
- Default `Menu.showSearch` to `false` unless explicitly requested.

## Account ActionMenu Guidance

- In the `Menu` account section, default `accountMenuItems` to:
  1. `Contact` with icon `Phone`
  2. `Feedback` with icon `ChatCenteredText`
  3. `Sign out` with icon `SignOut` (`destructive: true`)
- Keep this order unless explicit product requirements override it.

## Enforcement Notes

- Generation is validated by AI policy rules.
- Any Tailwind utility or custom variable usage will fail validation.
- Forbidden non-UDS props fail validation (`RULE_FORBIDDEN_PROP`).

## Contract Examples

Bad (rejected):
- `Menu` with `items`/`selectedKeys`/`mode`
- `Layout` with `vertical`/`justify`/`align`
- `Button` with `type="primary"`

Good (accepted):
- `Menu` with `navItems` and `activeMode`
- `Layout` with `direction`, `justifyContent`, `alignItems`
- `Button` with `appearance="primary"`
