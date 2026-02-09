# Menu

Application navigation sidebar with branding, search, categorized nav items, brand switcher, and mode toggle.

## When to Use
- Main application sidebar navigation
- Used internally by `UDS.Sidebar` — typically you don't render `Menu` directly
- If building a custom layout without `UDS`, use `Menu` for the sidebar

## Features
- **Branding section**: Logo with expand/collapse control
- **Search**: Global search field
- **Navigation groups**: Categorized nav items ("Getting Started", "Foundations", "Components", "Patterns")
- **Brand switcher**: Switch between CHG sub-brands (CHG, CompHealth, GBS, Weatherby, RNnetwork, Locum Leaders)
- **Mode toggle**: Light/Dark/System mode selector
- **Collapsible**: Sidebar can expand/collapse to icon-only mode

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |

## State Management
- `expanded` state controls sidebar width (full labels vs. icon-only)
- `activeBrand` tracks current brand selection
- `mode` tracks light/dark/system mode

## Navigation Structure

```jsx
const navGroups = [
  {
    label: "Getting Started",
    items: [
      { path: "/", label: "Home", icon: "House" },
      { path: "/app-shell", label: "Application", icon: "SquaresFour" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { path: "/colors", label: "Colors", icon: "Palette" },
      { path: "/typography", label: "Typography", icon: "TextAa" },
      // ...more items
    ],
  },
  {
    label: "Components",
    items: [
      { path: "/button", label: "Button", icon: "CursorClick" },
      { path: "/input", label: "Input", icon: "TextT" },
      // ...more items
    ],
  },
];
```

## Examples

### Standalone usage (without UDS)
```jsx
<div className="app-layout">
  <Menu />
  <main>{children}</main>
</div>
```

### Via UDS (recommended)
```jsx
<UDS>
  <UDS.Sidebar /> {/* Renders Menu internally */}
  <UDS.ContentArea>
    <UDS.Main>{children}</UDS.Main>
  </UDS.ContentArea>
</UDS>
```

## Note
- The Menu component is self-contained with its own state management
- It uses React Router `NavLink` for active state highlighting
- Brand and mode changes affect the entire application via CSS custom properties
