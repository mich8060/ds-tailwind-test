# Canonical Component Template (UDS)

Use this structure for every Tier 2 component.

## REQUIRED FOLDER STRUCTURE

<ComponentName>/
├── <ComponentName>.tsx
├── <ComponentName>.types.ts
├── <ComponentName>.spec.ts
├── <ComponentName>.figma.tsx
├── _<component>.scss
├── <ComponentName>.stories.tsx
├── <component>.test.tsx
├── index.ts
└── README.md

## RULES (non-negotiable)

- No raw hex values in component SCSS (use semantic CSS variables)
- No raw spacing/magic numbers unless they are semantic tokens (prefer CSS variables)
- New styles must only consume existing CSS variables (`var(--uds-...)`)
- Do not create new CSS variables in component styles or component token files
- Do not import additional token sources to define new variables for a component
- BEM modifiers with `uds-` prefix (example: `.uds-button--primary`)
- Component consumes semantic tokens only
- Spec must define allowed variants and defaults
- Do not export internal helpers from `index.ts`
- Never use outside frameworks like tailwind or bootstrap.
- Use existing components if to build out aspects of new components.
- Always use the Layout component to achieve layouts.
- Always use the icon component for icons

## Notes

- `<ComponentName>.stories.tsx` enables Storybook isolation for development.
- `<ComponentName>.figma.tsx` is a Code Connect mapping stub you can wire to your published Figma library component.
