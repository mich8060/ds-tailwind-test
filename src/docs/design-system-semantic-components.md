# Semantic component classes (`@layer components`)

Tailwind utilities for shared primitives are centralized in **`src/styles/uds-semantic-components.css`** using **`@apply`**. React components reference **semantic `uds-*` class names** only (plus minimal glue where Tailwind v4 cannot `@apply` a utility, e.g. named groups).

## 1. Example markup (semantic classes only)

```html
<div
  class="uds-input-group group/input-group uds-input-group--size-default"
  data-slot="input-group"
  data-input-size="default"
  role="group"
>
  <input class="uds-input-group-control …" data-slot="input-group-control" />
  <div class="uds-input-group-addon uds-input-group-addon--inline-end" data-slot="input-group-addon" data-align="inline-end">
    <button type="button" class="uds-input-group-button uds-input-group-button--size-icon-xs …">…</button>
  </div>
</div>
```

Use **`SearchInput`** / **`InputGroup`** in React instead of hand-rolling markup.

## 2. CSS layer

- **File:** `src/styles/uds-semantic-components.css`
- **Import:** `src/styles.css` → `@import "./styles/uds-semantic-components.css";`
- **Pattern:** `@layer components { .uds-… { @apply … } }`
- **Composition:** base shell (`.uds-input-group`) + size modifiers (`--size-default`, `--size-sm`) + addon align variants + embedded control (`.uds-input-group-control`).
- **Search shell:** `.uds-search-field` (`box-border w-full min-w-0`) for `SearchInput`’s root.

## 3. React

- **`InputGroup`**, **`InputGroupAddon`**, **`InputGroupButton`**, **`InputGroupInput`**, **`InputGroupText`**, **`InputGroupTextarea`** (`src/components/ui/input-group.tsx`) compose the classes above via `cva` variant maps.
- **`SearchInput`** (`src/components/ui/search-input.tsx`) uses `InputGroup` with **`uds-search-field`** on the root.

### Named group exception

`.uds-input-group` cannot `@apply` **`group/input-group`** in Tailwind v4; the parent div still adds **`group/input-group`** in JSX so addon selectors like **`group-data-[disabled=true]/input-group`** keep working.
