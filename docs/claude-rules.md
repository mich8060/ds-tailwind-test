# Claude Rules — UDS Sample App

This is a spec-driven, token-based design system (Unified Design System). Follow these rules without exception when working in this codebase.

---

## Project Overview

- **Stack:** React 18, TypeScript 5, Vite 5, SCSS (Sass)
- **Dev server:** `npm run dev` (port 5173)
- **Storybook:** `npm run storybook` (port 6006)
- **Lint:** `npm run lint` (ESLint) / `npm run lint:styles` (Stylelint)
- **Format:** `npm run format` (Prettier)
- **Scaffold new component:** `npm run generate:component -- ComponentName`

---

## Architecture

```
src/
├── design-system/     # Design tokens + components — NO routing here
│   ├── components/    # All UI components
│   ├── tokens/        # primitives/ → semantics/ → brands/ → themes/
│   └── specs/         # Component specification files
├── app-shell/         # Routing, layout, brand/theme control
├── pages/             # Route targets only
├── styles/            # Global styles
└── main.tsx
docs/                  # Governance docs — read before working
```

---

## Component Structure (REQUIRED)

Every component **must** follow this exact folder structure:

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
├── ComponentName.spec.ts
├── ComponentName.figma.tsx
├── _component.scss
├── _component.tokens.scss
├── ComponentName.stories.tsx
├── ComponentName.test.tsx
├── index.ts
└── README.md
```

Use the CLI scaffold to generate this: `npm run generate:component -- ComponentName`

---

## Component Rules

- **BEM class prefix:** `ds-` (e.g., `.ds-button--primary`)
- `index.ts` exports only the component itself — never internal helpers
- All public API types live in `ComponentName.types.ts`
- Every component must have a `ComponentName.spec.ts` defining variants, states, tokens used, and accessibility info
- Use the `as` prop pattern for polymorphic components (Text, Flex)
- Use the **Flex component** for all layout needs — do not roll custom flex/grid wrappers
- Use the **icon component** for all icons — never inline SVGs directly
- Reuse existing components to build new ones — do not duplicate primitives

---

## Styling Rules (NON-NEGOTIABLE)

- **No raw hex values** — `color-no-hex` is enforced by stylelint
- **No raw spacing/magic numbers** — use `var(--uds-spacing-*)` tokens
- **Only consume existing CSS variables** — `var(--uds-...)`
- **Never declare new CSS variables** in component SCSS or token files
- **Never import additional token sources** to define new variables
- **No external CSS frameworks** — no Tailwind, Bootstrap, or similar
- Max SCSS nesting depth: **3 levels**
- All spacing, color, border, radius, and typography must reference semantic tokens

---

## Token Architecture (3 Tiers)

1. **Primitives** (`tokens/primitives/`) — raw values, never consumed directly by components
2. **Semantics** (`tokens/semantics/`) — intent-based variables that components consume
3. **Brands** (`tokens/brands/`) — override semantics per brand via CSS class at shell root

Components consume **semantic tokens only**. If a token you need does not exist, do not create it — flag it as a design system token request.

**Supported brands:** default, comphealth, weatherby, connect, locumsmart, modio, gms, wireframe
**Supported themes:** light, dark
Applied as: `.brand-<name> .theme-<name>` at the AppShell root.

---

## AppShell Rules

- Routing lives **only** in `src/app-shell/` — never inside `design-system/`
- Brand and theme switching is applied at the shell root as CSS classes — components are brand-agnostic
- Configure the shell via `ShellLayoutConfig` — never fork or duplicate shell code
- Use slot-based overrides (Header, Sidebar, Footer, SubNav, Breadcrumb) for customization

---

## Spec Files

Every component spec must define:
- `name`, `tier` (1–4), `purpose`
- `variants` — allowed variants with types, values, and defaults
- `states` — e.g., default, hover, focus, disabled
- `tokensUsed` — list of CSS variables consumed
- `accessibility` — ARIA role, keyboard interactions
- `antiPatterns` — what not to do

Specs are governance contracts. Variants and states not defined in the spec are not allowed.

---

## File & Code Conventions

- TypeScript strict mode is on — no `any` without justification
- `no-unused-vars` is a warning; prefix intentionally unused vars with `_`
- React hooks rules are enforced (`rules-of-hooks: error`, `exhaustive-deps: warn`)
- No `React` import needed — JSX transform is automatic (React 17+)
- Isolated modules: each file must be independently compilable

---

## Icons (NON-NEGOTIABLE)

- **Only use the Icon component** — it is the single source of truth for all iconography in this project
- **Only use icons from the Icon component's library** — do not source icons from anywhere else
- Never inline raw SVGs in JSX or SCSS
- Never import icon sets from external packages (e.g. react-icons, heroicons, lucide, font-awesome)
- Never use icon fonts, unicode characters, or emoji as icons
- Never use `<img>` tags to render icons
- If an icon you need is not in the library, request it be added — do not work around this rule

---

## Anti-Patterns (Never Do These)

- Do not hardcode brand-specific values inside component styles
- Do not add routing logic inside `design-system/`
- Do not create new CSS variables at the component level
- Do not export helper functions from `index.ts`
- Do not use raw color values (hex, rgb, named colors) in SCSS
- Do not fork or copy-paste the AppShell — use config and slots
- Do not use Tailwind, Bootstrap, or any external CSS framework
- Do not use any icon source other than the Icon component and its library

---

## Before Creating a New Component

1. Check if an existing component can be composed to meet the need
2. Read the spec template at `docs/spec-template.ts`
3. Read the component template at `docs/component.template.md`
4. Run the scaffold: `npm run generate:component -- ComponentName`
5. Define the spec file before writing implementation code
