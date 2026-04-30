# Settings Form

## When to use it

Use for admin, preferences, account, or configuration screens that need field-heavy content inside the product shell.

## Required imports

Import runtime components from `uds-tailwind-test` and styles from `uds-tailwind-test/styles.css`.

## Required layout primitives

Use `AppShell`, `SectionHeader`, `Card`, `Field`, `Input`, `Select`, `Switch`, and `Button`.

## Forbidden substitutions

Do not build form chrome from raw labels and inputs if the exported field primitives already cover the interaction.

## JSX skeleton

```tsx
<AppShell sidebar={sidebar}>
  <div className="p-6">
    <SectionHeader>{/* title + actions */}</SectionHeader>
    <Card>{/* grouped settings fields */}</Card>
  </div>
</AppShell>
```

## Brand application

Use `Status` for environment state, `Badge` for rollout labels, and restrained accent borders or medallions to separate critical settings from routine fields.
