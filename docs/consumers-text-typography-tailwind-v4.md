# Text typography for consumers (Tailwind v4 + Vite)

This document is the **contract for product apps** that use **`@chg-ds/unified-design-system`** with **Tailwind CSS v4** and **Vite**. It explains how the **`Text`** component gets its size, what can break, and how to debug.

---

## 1. Precompiled utilities — not app JIT on `node_modules`

**Confirmed:** The `Text` component applies typography through **static utility class names** resolved at **library build time** (for example `text-uds-10`, `leading-uds-10`). Those classes are emitted into the **published stylesheet** (`@chg-ds/unified-design-system/styles.css`).

**They are not** produced by the consumer app’s Tailwind compiler scanning `node_modules/@chg-ds/...` for class strings. Relying only on `@import "tailwindcss"` and `@source` in the app **will not** generate `text-uds-*` / `leading-uds-*` rules from the design system package alone.

**Required consumer step:** Import the design system stylesheet once at the app root (or an equivalent **full** build that includes the same rules):

```ts
import "@chg-ds/unified-design-system/styles.css"
```

If `styles.css` is missing, `<Text variant="body-10" />` (and other variants) will **not** get the intended font size or line height, even if the JSX and `variant` prop are correct.

---

## 2. Token chain (themes and brands)

**Confirmed:** Typography utilities are wired through Tailwind v4 **`@theme`** in the shipped CSS. For each step on the scale, the chain is consistent, for example for **10px body**:

| Layer | Role |
|--------|------|
| Utility classes | `text-uds-10`, `leading-uds-10` |
| `@theme` (in shipped CSS) | `--text-uds-10` / `--text-uds-10--line-height`, `--leading-uds-10` |
| Primitives (semantic token file) | `--uds-font-size-10`, `--uds-line-10` |
| Semantic type tokens (optional, for documentation / non-Tailwind CSS) | e.g. `--uds-type-body-10-font-size`, `--uds-type-body-10-line-regular`, … |

**Consumer implication:** Brand or theme overrides must **preserve** these variables (or intentionally remap them). If a theme drops `--uds-font-size-10` / `--uds-line-10` or overrides `--text-uds-10` incorrectly, **`body-10` will look wrong or unchanged** relative to other scales.

---

## 3. Layer order and global CSS conflicts

**Confirmed:** `Text` renders a normal element (e.g. `p`, `span`) with utility classes. Any **more specific** or **later** CSS that sets `font-size`, `line-height`, or `font-family` on that element (or ancestors) can **override** the utilities.

**Documented recommendation:**

1. Import **`@chg-ds/unified-design-system/styles.css`** in a predictable place (typically **once**, early in the app entry).
2. Avoid broad resets that target `span`, `p`, or `*` with higher specificity than utilities unless you intend to override the design system.
3. If you use Tailwind’s **preflight** and custom **layers**, keep design-system guidance in mind: utilities from the published bundle should win for typography **unless** your globals are loaded later or use stronger selectors. When in doubt, **inspect computed styles** in DevTools.

We do not mandate a single global order for every app stack; teams should **test** their entry order (DS CSS vs app globals vs Tailwind entry) and document the chosen order in their own repo.

---

## 4. `Text` variants → utilities → tokens

The **`Text`** component uses **`textVariants`** from `class-variance-authority` (also **exported** as `textVariants` for debugging). Default root classes include `font-sans`, `text-foreground`, and `[font-family:var(--font-inter)]`.

### Variant → size / leading utilities

| `variant`   | `font-size` + default line (utilities) |
|------------|----------------------------------------|
| `body-10`  | `text-uds-10` `leading-uds-10`         |
| `body-12`  | `text-uds-12` `leading-uds-12`         |
| `body-14`  | `text-uds-14` `leading-uds-14`         |
| `body-15`  | `text-uds-15` `leading-uds-15`         |
| `body-16`  | `text-uds-16` `leading-uds-16`         |
| `body-20`  | `text-uds-20` `leading-uds-20`         |
| `title-24` | `text-uds-24` `leading-uds-24`         |
| `title-28` | `text-uds-28` `leading-uds-28`         |
| `title-32` | `text-uds-32` `leading-uds-32`         |
| `display-36` | `text-uds-36` `leading-uds-36`     |
| `display-48` | `text-uds-48` `leading-uds-48`     |

### `@theme` mapping (examples)

For step **N** in `{ 10, 12, 14, … }`, shipped theme defines:

- `--text-uds-N` → `var(--uds-font-size-N)`
- `--text-uds-N--line-height` → `var(--uds-line-N)`
- `--leading-uds-N` → `var(--uds-line-N)`

See `src/styles/uds-typography-theme.css` in this repository.

### Weight utilities (`weight` prop)

| `weight`   | Utility            |
|-----------|--------------------|
| `regular` | `font-uds-regular` |
| `medium`  | `font-uds-medium`  |
| `semibold`| `font-uds-semibold`|
| `bold`    | `font-uds-bold`    |

### Appearance (`appearance` prop)

Uses `text-uds-text-*` utilities (semantic text colors). See `TEXT_APPEARANCES` / `textVariants` in `src/components/ui/text.tsx`.

---

## 5. Visual regression (body-10 vs body-12)

**Product ask:** Maintain an obvious visual check (Storybook story, docs site example, or screenshot baseline) that shows **`body-10`** next to **`body-12`** with the same label text so size regressions are visible at a glance.

This repo’s docs UI includes a **Text** scale example under component previews (`src/docs/shadcn-examples/registry.tsx`); extend that or add Storybook when the team standardizes on a single visual surface.

---

## 6. DX: debugging and future improvements

**Today:**

- **`textVariants`** is **exported** from `@chg-ds/unified-design-system` (same module as `Text`). For debugging you can log or apply resolved classes:

  ```tsx
  import { Text, textVariants, cn } from "@chg-ds/unified-design-system"

  <span className={cn(textVariants({ variant: "body-10", weight: "medium" }))}>debug</span>
  ```

**Optional follow-up (if the team agrees DX is still confusing):**

- Document the snippet above in the main consumer README.
- Add a **dev-only** runtime check (e.g. in development builds) that detects missing expected CSS custom properties or utility side effects after mount — **design carefully** to avoid false positives across SSR and shadow DOM.

---

## Related source files

- `src/components/ui/text.tsx` — `Text`, `textVariants`, `TEXT_APPEARANCES`
- `src/styles/uds-typography-theme.css` — `@theme` type scale and line tokens
- `src/styles/uds-tokens.css` — `--uds-font-size-*`, `--uds-line-*`, `--uds-type-body-*`
- `src/styles.css` — Tailwind entry and `@source` for **this** package’s build (not a substitute for consumers importing `styles.css`)
