# Tokens + Multi-brand Theming (SCSS)

## Layering

1. **Primitives**: raw values (no intent)
2. **Semantics**: intent-based CSS variables (what components consume)
3. **Brands**: override semantic CSS variables under `.brand-*` classes

## Where brand is applied

The brand class is applied at the **AppShell root**:

```tsx
<div className={`app-shell brand-${brand} theme-${theme}`}>
```

Switching brand updates the entire UI because components only reference semantic tokens like:

```scss
background: var(--color-action-primary-bg);
```

No component-specific brand overrides are required.
