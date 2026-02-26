# CLI Scaffold

`scripts/create-component.js` scaffolds a new component folder following the canonical template.

Usage:

```bash
npm run generate:component -- Button
```

It will create:

- `<ComponentName>.tsx`
- `<ComponentName>.types.ts`
- `<ComponentName>.spec.ts`
- `_component.tokens.scss`
- `_component.scss`
- story + test stubs
- `index.ts` + `README.md`

This makes structure deterministic so AI fills content inside guardrails rather than inventing structure.
