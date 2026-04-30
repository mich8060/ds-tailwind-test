# AI Contract Acceptance Checklist

Use the prompts in `ai/evals/prompts/` and review generated output against these checks.

- Imports come only from `uds-tailwind-test` and `uds-tailwind-test/styles.css`.
- Authenticated product pages use `AppShell`.
- The `AppShell` `sidebar` slot is composed with exported `Sidebar*` primitives.
- No imports come from `src/components/ui/*`, `dist/*`, or `@/*`.
- The screen uses UDS emphasis components such as `Badge`, `Status`, `Medallion`, `Card`, `Item`, or `SectionHeader` instead of neutral placeholder divs.
- Custom rectangular chrome uses square or 4px corners, while component-native semantic radii are preserved where already shipped.
- The output matches the closest recipe in `ai/recipes/`.
