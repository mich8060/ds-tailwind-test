# Linting / Lockdown

This project uses:

- **ESLint** for JS/TS correctness
- **Stylelint** for SCSS rules

## Key lockdown rule

- `color-no-hex: true` prevents raw hex colors in SCSS.
  This forces usage of semantic CSS variables from tokens.

## Styling standard (new components)

- New styles must only use existing CSS variables (for example `var(--uds-...)`).
- Do not create new CSS variable declarations in component SCSS.
- Do not add/import extra variable sources to work around missing tokens.
- If a needed token does not exist, request a design-system token update first.

Run:

```bash
npm run lint
npm run lint:styles
```
