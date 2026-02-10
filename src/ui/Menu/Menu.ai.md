# Menu

Application navigation sidebar with branding, search, categorized nav items, brand switcher, and mode toggle.

## When to Use
- Main application sidebar navigation
- Used internally by `UDS.Sidebar` — typically you don't render `Menu` directly
- If building a custom layout without `UDS`, use `Menu` for the sidebar

## Features
- **Branding section**: Logo with expand/collapse control
- **Search**: Global search field
- **Flat items**: Top-level direct links — no caret, no sub-items
- **Accordion sections**: Categorized nav groups with a caret and collapsible sub-items
- **Brand switcher**: Switch between CHG sub-brands (Design System, LocumSmart, Wireframe, Connect, CompHealth, Modio, Weatherby)
- **Mode toggle**: Light/Dark mode selector (via `showModeToggle` or `showModeSwitch`)
- **Collapsible**: Sidebar can expand/collapse to icon-only mode
- **Auto-expand**: Accordion sections automatically expand when a child route is active

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navigation` | `Array` | `[]` | Array of nav entries — either flat items `{ label, icon, path, exact? }` or sections `{ label, icon, items: [{ path, label, exact? }] }` |
| `activeBrand` | `string` | — | Currently selected brand key |
| `activeMode` | `string` | — | `"light"` or `"dark"` |
| `onBrandChange` | `function` | — | Callback when brand changes |
| `onModeChange` | `function` | — | Callback when mode changes |
| `showSearch` | `boolean` | `true` | Show the search input section |
| `showBrandSwitcher` | `boolean` | `false` | Show the brand switcher dropdown |
| `showAccount` | `boolean` | `true` | Show the account section at the bottom |
| `showModeToggle` | `boolean` | `false` | Show dark/light mode toggle inside the account action menu |
| `showModeSwitch` | `boolean` | `false` | Show a standalone dark/light mode switch in the menu footer |
| `user` | `object` | — | User object: `{ name, initials, avatar }` |
| `onSignOut` | `function` | — | Callback when "Sign Out" is clicked |
| `accountMenuItems` | `Array` | `[]` | Additional items for the account action menu |
| `expanded` | `boolean` | `undefined` | Controlled expanded state (use with `onExpandedChange`) |
| `onExpandedChange` | `function` | — | Callback when expanded state changes |
| `className` | `string` | `""` | Additional CSS classes |

## Navigation Structure

The `navigation` prop accepts two types of entries:

### Flat Item (direct link, no caret)
```jsx
{
  label: "Dashboard",   // Display text
  icon: "House",        // Phosphor icon name
  path: "/",            // Route path (renders as NavLink)
  exact: true,          // Optional — exact route matching
}
```

### Section (accordion with caret)
```jsx
{
  label: "Components",   // Accordion header text
  icon: "DiamondsFour",  // Phosphor icon name
  items: [               // Sub-items (each renders as NavLink)
    { path: "/buttons", label: "Buttons" },
    { path: "/input", label: "Text Input" },
  ],
}
```

### Combined Example
```jsx
const navigation = [
  // Flat item — direct link, no caret
  { label: "Dashboard", icon: "House", path: "/", exact: true },

  // Section — accordion with caret
  {
    label: "Getting Started",
    icon: "Layout",
    items: [
      { path: "/install", label: "Installation" },
      { path: "/usage", label: "Usage" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    items: [
      { path: "/buttons", label: "Buttons" },
      { path: "/input", label: "Text Input" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
];
```

## Examples

### Standalone usage (without UDS)
```jsx
<div className="app-layout">
  <Menu
    navigation={navigation}
    activeBrand={activeBrand}
    activeMode={activeMode}
    onBrandChange={setActiveBrand}
    onModeChange={setActiveMode}
    user={{ name: "Jane Doe", initials: "JD" }}
    onSignOut={() => console.log("Sign out")}
  />
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

### Minimal menu (navigation only)
```jsx
<Menu
  navigation={navigation}
  showSearch={false}
  showAccount={false}
/>
```

## Note
- The Menu component is self-contained with its own state management
- It uses React Router `NavLink` for active state highlighting
- Flat items (no `items` or empty `items` array) render without a caret
- Sections with sub-items render with a collapsible caret
- Brand and mode changes affect the entire application via CSS custom properties
