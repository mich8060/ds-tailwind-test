# Theming Platform API

This design system exposes theming as a public platform API, not an internal implementation detail.

## Public API

```ts
import {
  createTheme,
  createBrand,
  ThemeProvider,
  type Theme,
} from "@mich8060/unified-design-system";
```

- `createTheme()` creates a strongly typed theme engine.
- `createBrand()` defines brand overrides in a reusable format.
- `ThemeProvider` applies class names and CSS variable updates to a target element.
- `Theme` is the exported public type alias for the theme engine returned by `createTheme()`.

## Proposed / Current Folder Structure

```text
src/design-system/theme/
  createBrand.ts         # brand factory helper
  createTheme.ts         # typed theme engine + CSS var resolver
  ThemeProvider.tsx      # React provider + store + hooks
  theme.types.ts         # public theme contracts
  index.ts               # stable public exports
```

## Layering Model

Theme resolution order (lowest precedence to highest):

1. Base tokens (`baseTokens`)
2. Brand tokens (`brand.tokens`)
3. Mode tokens (`modes[light|dark].tokens`)
4. Brand+mode tokens (`brand.modeTokens[light|dark]`)
5. Runtime overrides (`resolve({ overrides })`)

This provides explicit separation of:
- Base tokens
- Brand overrides
- Mode overrides

## Runtime Behavior

- Theme switching updates DOM classes and CSS variables on a target element.
- Style changes are applied via `element.style.setProperty(...)` and class toggles.
- This avoids context-propagated full subtree re-renders.
- React context remains stable; only explicit theme subscribers update.

## Backward Compatibility

- Existing `AppShell` brand and mode class patterns remain unchanged:
  - `brand-*`
  - `theme-*`
- Existing component token usage (`var(--uds-...)`) is unchanged.
- Existing exports (`createTheme`, `createBrand`, `ThemeProvider`) remain intact.
- New `Theme` type is additive and non-breaking.

## Example Usage

```tsx
import React from "react";
import {
  createTheme,
  createBrand,
  ThemeProvider,
  type Theme,
} from "@mich8060/unified-design-system";

const defaultBrand = createBrand("default", {
  tokens: {
    "--uds-surface-primary": "#ffffff",
  },
  modeTokens: {
    dark: {
      "--uds-surface-primary": "#111827",
    },
  },
});

const comphealth = createBrand("comphealth", {
  className: "brand-comphealth",
  tokens: {
    "--uds-color-brand-primary": "#005ea8",
  },
});

const theme: Theme<"default" | "comphealth"> = createTheme({
  defaultBrand: "default",
  defaultMode: "light",
  baseTokens: {
    "--uds-text-primary": "#111827",
  },
  brands: {
    default: defaultBrand,
    comphealth,
  },
  modes: {
    light: { name: "light", className: "theme-light" },
    dark: {
      name: "dark",
      className: "theme-dark",
      tokens: {
        "--uds-text-primary": "#f9fafb",
      },
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* AppShell and components continue to use tokens/classes */}
      <div>App content</div>
    </ThemeProvider>
  );
}
```

## Before / After Architecture

### Before

- Brand/mode primarily configured through `AppShell` conventions.
- Theme behavior existed but was perceived as internal.
- No explicit concise public `Theme` API type.

### After

- Formal public theming layer:
  - `createTheme()`
  - `createBrand()`
  - `ThemeProvider`
  - `Theme` type
- Explicit token layering model (base -> brand -> mode -> brand+mode -> overrides).
- Runtime theme switching uses CSS variable/class updates to avoid broad render cascades.
- `AppShell` usage remains compatible.
