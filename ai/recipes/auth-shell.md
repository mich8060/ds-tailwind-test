# Authenticated Shell

## When to use it

Use for authenticated application pages, internal product tools, dashboards, queues, and workflow screens that need persistent navigation.

## Required imports

Import runtime components from `uds-tailwind-test` and styles from `uds-tailwind-test/styles.css`.

## Required layout primitives

Use `TooltipProvider`, `SidebarProvider`, `AppShell`, and exported `Sidebar*` primitives.

## Forbidden substitutions

Do not replace the `sidebar` slot with a raw `<aside>`, generic flex column, or copied stock shadcn sidebar markup.

## JSX skeleton

```tsx
<TooltipProvider>
  <SidebarProvider>
    <AppShell
      className="min-h-dvh w-full min-w-0"
      sidebar={/* Sidebar + SidebarHeader + SidebarContent + SidebarFooter */}
    >
      {/* workspace content */}
    </AppShell>
  </SidebarProvider>
</TooltipProvider>
```

## Brand application

Use `Status`, `Badge`, `Medallion`, tinted `Card` surfaces, and token-backed text or border treatments before inventing ad hoc accent styling.
