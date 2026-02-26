# Overview

This sample app demonstrates:

- **Design System (design-system/)**: tokens + components + specs (no routing)
- **Application Shell (app-shell/)**: layout + navigation + **routing**
- **Pages (pages/)**: route targets (Dashboard, Reports)

## Key boundary rules

- **Routing lives in the application shell**, not in the design system.
- **Brand + theme are applied at the shell root**.
- Components are **brand-agnostic** and consume **semantic tokens** only.
- Multi-brand theming is implemented by overriding **semantic CSS variables** under brand classes.
