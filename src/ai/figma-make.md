# Figma Make Contract (UDS Only)

Use this contract when generating interfaces from Figma Make into code for `@chg-ds/unified-design-system`.

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
- `@chg-ds/unified-design-system/ai/discovery.json`
- `@chg-ds/unified-design-system/ai/manifest.json`
- `@chg-ds/unified-design-system/ai/schema`
- `@chg-ds/unified-design-system/ai/icons` (or `@chg-ds/unified-design-system/ai/icons.json`)
- `@chg-ds/unified-design-system/ai/navigation`
- `@chg-ds/unified-design-system/ai/examples/layout-recipes`
- `@chg-ds/unified-design-system/ai/visual-fixtures`
- `@chg-ds/unified-design-system/ai/examples/visual-page-patterns-uds.jsonl`
- `@chg-ds/unified-design-system/ai/templates`

5. Build required scaffold
- Wrap app root with `BrowserRouter` (or `RouterProvider`) before any route-aware UDS components.
- Use `AppShell > AppShell.Menu > AppShell.Content > AppShell.Main` as root layout.
- When context rails are required, include `AppShell.Listview` (left) and/or `AppShell.SidePanel` (right) inside `AppShell.Content`.
- Build `Menu.navItems` from selected brand in `brand-menus.json`.
- Apply `brand` and `theme` on `AppShell` (not ad-hoc `logo` props on `Menu` unless the product shell documents them). Prefer design-system `Menu` + `Branding` inside the shell slot.

6. Validate
- Run `npm run build` and `npm run ci:ai` (if available).
- Fix failures and rerun until passing.

## Required Stack

- Use only imports from `@chg-ds/unified-design-system` (or `@chg-ds/unified-design-system/figma-make`).
- Do not deep import from internal paths (for example `@/.../components/Menu`).
- Compose UI with UDS components.
- Style only with `--uds-*` tokens or hardcoded literals when necessary.
- Import package styles once (for example `import "@chg-ds/unified-design-system/styles.css"`). Do not invent parallel theme files (`theme.css` with shadcn-style `--background`, `--foreground`, `--card`, etc.) as the source of truth—UDS semantics live under `--uds-*`.

## Styling and Tokens

- **Colors, surfaces, borders, type, spacing, radius:** use variables documented for the package (semantic `--uds-*` tokens). Primitives like `--uds-color-blue-*` may appear in examples only when they match the published token catalog.
- **Spacing:** prefer `Layout` `gap` with the governed scale (`8`, `12`, `16`, `24`, …) and `Container` padding props; avoid raw pixel strings except rare one-offs.
- **No Tailwind** in consumer or generated code (no utility layers as dependency of the design system contract).

## Container And Layout Rules

- Always resolve `Container` and `Layout` props before composing wrappers.
- `Container` defaults:
  - page sections: `appearance="transparent"` and `padding="large"`
  - surfaced panels: `appearance="default"`, `padding="large"`, `border="default"`, `radius="md"`
  - secondary / inset examples: `appearance="secondary"`, `padding="large"`, `radius="md"`
- `Container` prop options to use:
  - `appearance`: `default | secondary | transparent`
  - `padding`, `paddingX`, `paddingY`: `none | xsmall | small | default | large | xlarge`
  - `border`: `default | subtle | none`
  - `radius`: `none | sm | md | lg`
  - `overflow`: `visible | hidden | auto | clip`
- `Layout` prop options to use:
  - `direction`: `row | column`
  - `justifyContent`: `flex-start | center | flex-end | space-between | space-around | space-evenly`
  - `alignItems`: `stretch | flex-start | center | flex-end | baseline`
  - `wrap`: `nowrap | wrap | wrap-reverse`
  - `gap`: `0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 24 | 32 | 48 | 64 | 80 | spacing-* | auto`
- **Showcase pages:** use `direction="column"` and `gap="24"` between major sections; `gap="16"` inside a section; `gap="8"` for tight label/value stacks.
- Prefer explicit props over inferred defaults when generating app structure.
- Do not leave `Layout` underspecified when the axis, spacing, or alignment is important.

## Visual Hierarchy Rules

- Do not build dense product pages as plain stacks of `Text`, `Button`, `Layout`, and transparent wrappers.
- Every non-trivial page should establish:
  - a heading region with `Toolbar`, `SectionHeader`, or heading/display `Text`
  - a summary/status region with `Statistics`, `Status`, `Tag`, `Avatar`, or `Checklist`
  - a detail/work region with surfaced `Container`, `Table`, `ProvidersCard`, `Calendar`, `EventCard`, or `EmptyState`
- Use at least one surfaced `Container` (`appearance="default"` or `appearance="secondary"`) on non-trivial pages to create depth.
- Prefer icons in navigation, KPI summaries, row actions, empty states, and guidance panels unless the prompt explicitly forbids icons.
- When unsure, borrow visual structure from `@chg-ds/unified-design-system/ai/examples/visual-page-patterns-uds.jsonl` before inventing a flat layout.
- Use `@chg-ds/unified-design-system/ai/visual-fixtures` when the target should match an approved dashboard, reporting, settings, filter, or modal state from product references.

## Typography (`Text`)

- **Required prop:** `variant` must be one of the published values, for example:
  - Large display/titles: `display-48`, `display-36`, … (see manifest/component API for full list)
  - Headings: `heading-32`, `heading-28`, `heading-24` (there is **no** `heading-48` or `heading-18`—use `display-48` or `heading-24` / `body-20` as appropriate)
  - Body: `body-20`, `body-16`, `body-14`, `body-12`
- **Tone / color:** use `tone` (or `color`) with: `primary | secondary | tertiary | muted | placeholder | disabled`. Do **not** use non-UDS values such as `default`, `subtle`, or semantic `success`/`error` as `Text` tone unless the component spec adds them.
- Optional: `weight`, `leading`, `as`, `clamp` per component docs.

## Buttons

- Prefer `label="…"` and `appearance` (`primary`, `outline`, `text`, `destructive`, …) per component API. Avoid Ant-style `type="primary"`.

## Icons

- **Mandatory:** render icons with the **`Icon` component** from the package using **Phosphor PascalCase `name` strings** (for example `name="Users"`, `name="PencilLine"`).
- **Forbidden:** `import { Users } from "@phosphor-icons/react"` (or any direct icon component from that package) in generated product code. Phosphor is a peer dependency for the design system implementation only.
- Choose names from `@chg-ds/unified-design-system/ai/icons` / `ai/icons.json`. Prefer `recommendedByIntent` entries when unsure.

## SectionHeader (showcase / docs pages)

- Props include `title`, `description`, `eyebrow`, `meta`, `actions`, `divider`. There is **no** `icon` prop.
- To show a lead icon, place it in **`eyebrow`** or **`actions`** (for example a compact `Layout` with `Icon` + spacing), not a fictional `icon` prop.

## Menu `navItems`

- Items are **`{ label, icon, path? }`** with optional **`children: { label, path }[]`** for accordions. Do not require a fictional `id` field unless the app layer adds it.
- Icons on items are **strings** consumed by `Menu` / `Icon`, not React icon elements.

## Code snippets

- Use **`Code`** with a **`code` string prop** (required for meaningful highlighting). Omitted `code` is safe (empty highlight) but useless for demos—always pass the snippet string for showcase examples.
- Block vs inline: **`inline={false}`** (default) for blocks; **`inline={true}`** for inline phrases.

## Banned Patterns

- No Tailwind classes or utility tokens (`bg-*`, `text-*`, `p-*`, `m-*`, `grid-*`, `flex-*`, etc.).
- No `className` utility styling.
- No raw HTML layout wrappers when a UDS component exists (`div`, `section`, `main`, etc.)—prefer `Container` and `Layout`.
- No custom CSS variables (`--brand-*`, `--custom-*`, `--foo-*`) at the consumer style layer for design-system surfaces.
- No Ant-style prop APIs on UDS components:
  - `Menu.items`, `Menu.selectedKeys`, `Menu.mode`
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
- Select a recipe from `@chg-ds/unified-design-system/ai/examples/layout-recipes` before freeform composition.
- Use `recommendedByIntent.firstChoice` unless the requested structure requires a documented alternate.
- Include `audit.recipeId` whenever a layout recipe is used.

## Starter Layout Recipes

1. `auth-form-panel`
- `Container(gap="--uds-spacing-24") > Container(appearance="default", padding="large") > Text + Field(TextInput) + Field(TextInput) + Layout(Button primary + Button text)`

2. `dashboard-table-summary`
- `Container(gap="--uds-spacing-16") > Layout(Text heading + Button primary) + Table(Status/Tag/ActionMenu)`

3. `settings-two-column`
- `Container > Text heading + Layout(gap="--uds-spacing-24") > Container(form) + Container(summary)`

4. `modal-confirmation`
- `Modal > Text heading + Text body + Layout(Button text + Button destructive)`

5. `wizard-steps-form`
- `Container > Text heading + Steps + Container(Field + Field + Layout(Button text + Button primary))`

## Brand Navigation Guidance

- Load brand menu definitions from `@chg-ds/unified-design-system/ai/navigation`.
- Do not hardcode brand nav links when this contract is available.
- Build `Menu.navItems` directly from the brand entry in `brand-menus.json`.
- Default `Menu.showSearch` to `false` unless explicitly requested.
- Prefer controlled navigation props when router context is uncertain:
  - `currentPath` for active-state resolution
  - `onNavigate` for host-managed navigation
- Do not assume the design system owns routing state internally.
- In product apps, router-based navigation is fine.
- In Figma Make or other non-router hosts, use `currentPath` and `onNavigate` instead of relying on router context.

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
- `SectionHeader` with `icon={...}`
- Direct `@phosphor-icons/react` component imports in app code
- `Text` with `variant="heading-18"` or `tone="subtle"`

Good (accepted):
- `Menu` with `navItems` and `activeMode`
- `Layout` with `direction`, `justifyContent`, `alignItems`
- `Button` with `appearance="primary"` and `label="Save"`
- `Icon` with `name="Users"` and `size={24}`
- `SectionHeader` with `title`, `description`, and optional `eyebrow` / `actions`
- `Text` with `variant="heading-24"` and `tone="secondary"`
