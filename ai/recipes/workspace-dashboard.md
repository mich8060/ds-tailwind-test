# Workspace Dashboard

## When to use it

Use for operational overview screens with metrics, queue summaries, alerts, and action-oriented workspace sections.

## Required imports

Import runtime components from `uds-tailwind-test` and styles from `uds-tailwind-test/styles.css`.

## Required layout primitives

Use `AppShell` for the page frame and compose major sections with `SectionHeader`, `Card`, `Badge`, `Status`, and `Medallion`.

## Forbidden substitutions

Do not build a neutral placeholder dashboard from anonymous `div` blocks when `Card`, `SectionHeader`, `Status`, and `Medallion` already fit the job.

## JSX skeleton

```tsx
<AppShell sidebar={sidebar}>
  <div className="flex h-full flex-col gap-6 p-6">
    <SectionHeader>{/* title + actions */}</SectionHeader>
    <div className="grid gap-4 xl:grid-cols-3">{/* branded summary cards */}</div>
    <Card>{/* queue or KPI detail */}</Card>
  </div>
</AppShell>
```

## Brand application

Use `Badge` for context labels, `Status` for current state, `Medallion` for key emphasis points, and light token-backed surfaces for summary cards.
