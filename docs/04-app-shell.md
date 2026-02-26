# Governed Application Shell (Configurable + Slot-based)

The AppShell provides:

- Persistent chrome (header, sidebar, footer, breadcrumb, sub-nav)
- Routing (React Router)
- Brand + theme application at the shell root
- A **structured layout config** merged with defaults
- Slot-based override points so teams can toggle/replace regions without forking

## Structured Layout Config

```tsx
<AppShell
  layout={{
    header: true,
    sidebar: false,
    breadcrumb: true,
    footer: true,
    padding: "standard", // "standard" | "none"
    container: "max",    // "max" | "fluid" | "none"
    subNav: true,
    brandSwitcher: true,
    density: "comfortable" // "compact" | "comfortable"
  }}
>
  <Page />
</AppShell>
```

## Governance rule

Teams can toggle layout regions through the config, but **must not** fork the shell or duplicate layout code.
