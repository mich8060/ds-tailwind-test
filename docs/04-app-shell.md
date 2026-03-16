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

## SidePanel troubleshooting notes

When `AppShell.SidePanel` behavior looks inconsistent, debug in this order:

1. **State updates** - verify your selected row/document state changes deterministically.
2. **DOM mount** - verify `.app-shell__content > .app-shell__side-panel` is present after state changes.
3. **Visual styling** - verify width, z-index, and overflow styles are applied.

### Common causes

- Mixed integration paths (`AppShell.Listview` working while `AppShell.SidePanel` appears missing).
- Nested interactive controls causing click propagation issues.
- Runtime slot identity mismatch across package/runtime boundaries.

### Recommended pattern

- Keep canonical usage with `AppShell.SidePanel`.
- Use a deterministic open handler (`openSidePanelForRow`) and guard nested action controls with `stopPropagation` where needed.
- If your runtime still fails to mount the slot, use a temporary fallback `<aside class="app-shell__side-panel">` until environment parity is fixed.
