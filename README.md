# UDS Sample Application (Spec-driven + SCSS + Multi-brand + Governed App Shell)

This repo is a working reference implementation showing:

- Token-driven SCSS architecture (primitives → semantics → brands)
- Design-system components styled with SCSS (BEM, no raw values)
- Spec-driven component contracts (spec objects in code)
- Canonical component template + spec template
- A governed, configurable application shell with routing (routing lives in the shell)
- Brand + theme applied at the shell root
- Slot-based shell regions + structured layout config
- Linting “lockdown” (ESLint + Stylelint) and a CLI scaffold generator

## Quick start

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview build
- `npm run lint` – eslint
- `npm run lint:styles` – stylelint for scss
- `npm run format` – prettier
- `npm run generate:component -- Name` – scaffold a new component folder from the canonical template

See `/docs` for the full methodology and governance model.

- [Claude Rules](docs/claude-rules.md) – conventions and constraints for AI-assisted development in this repo
