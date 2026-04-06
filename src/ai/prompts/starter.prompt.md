Set up this repository from scratch so `@chg-ds/unified-design-system` is used end-to-end with no Tailwind fallback.

Execution order:
1. Install and verify toolchain.
2. Build and validate AI contract artifacts.
3. Implement UI using UDS components and tokens only.
4. Ensure root layout uses `AppShell`.

Hard rules:
- Use package exports from `@chg-ds/unified-design-system`.
- Never deep import component internals.
- Never use Tailwind classes/utilities.
- Never invent CSS variables. Use `--uds-*` tokens or hardcoded literals.
- Prefer canonical props from the AI manifest and component contracts.
- Load icon options from `@chg-ds/unified-design-system/ai/icons` (alias: `@chg-ds/unified-design-system/ai/icons.json`) before assigning any icon prop.
- Default `Container` to `appearance=\"transparent\"` and `padding=\"large\"` (24px) unless overridden by explicit requirements.
- Default `Menu.showSearch` to `false` unless search is explicitly required.
- Load `@chg-ds/unified-design-system/ai/examples/layout-recipes` before generating any page scaffold.
- Load `@chg-ds/unified-design-system/ai/visual-fixtures` before refining any page scaffold beyond raw structure.
- Load `@chg-ds/unified-design-system/ai/examples/visual-page-patterns-uds.jsonl` before generating any non-trivial page scaffold.
- Use `recommendedByIntent.firstChoice` from `layout-recipes` as the starting point for each page.
- Use `ai/visual-fixtures` to match the selected brand and page state so the scaffold inherits approved hierarchy and density.
- Only switch to an alternate recipe when the requested page clearly requires a wizard, calendar, table-heavy, sidepanel, list-detail, or pricing variation.

Required layout scaffold:
- App root must be wrapped in `BrowserRouter` (or `RouterProvider`) before rendering any UDS component that consumes routing.
- Root must be:
  - `AppShell`
  - `AppShell.Menu`
  - `AppShell.Content`
  - `AppShell.Listview` (optional)
  - `AppShell.Main`
  - `AppShell.SidePanel` (optional)
- Place route/page content in `AppShell.Main`.

Brand menu requirements:
- Load and apply the canonical menu map from:
  - `@chg-ds/unified-design-system/ai/navigation`
  - (alias) `@chg-ds/unified-design-system/ai/navigation/brand-menus.json`
- Never inline or invent brand navigation when this contract is available.
- Build `Menu.navItems` from the selected brand entry in the JSON contract.
- If the app router is not available yet, use `Menu.currentPath` and `Menu.onNavigate` so navigation still works without router-coupled internals.

Output guidance:
- Return code that imports UDS components directly from package exports.
- Prefer `Layout`, `Container`, `Text`, `Button`, `Menu`, `Toolbar`, `Statistics`, and `Checklist` where appropriate.
- Prefer a visually tiered composition:
  - heading region via `Toolbar` or `SectionHeader`
  - summary region via `Statistics`, `Status`, `Tag`, or `Avatar`
  - detail region via `Table`, surfaced `Container`, `Checklist`, `EmptyState`, or `ProvidersCard`
- Use at least one surfaced `Container` (`appearance=\"default\"` or `appearance=\"secondary\"`) on non-trivial pages.
- Do not ship a page that is only stacked `Text`, `Button`, and generic `Layout` wrappers.
- Use icons in navigation, actions, empty states, and KPI summaries unless the prompt explicitly forbids icons.
- Ensure no Tailwind tokens/classes appear anywhere in source.
- For each page scaffold, record the chosen recipe id in implementation notes or generation audit where available.
