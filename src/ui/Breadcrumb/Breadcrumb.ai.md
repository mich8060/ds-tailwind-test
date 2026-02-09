# Breadcrumb

Navigation breadcrumb component that auto-generates based on the current route.

## When to Use
- Page headers to show navigation hierarchy
- Inside `UDS.PageHeader` for route context
- Any multi-level navigation structure

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |

## Behavior
- Automatically reads the current route from React Router
- Maps route paths to labels via internal `breadcrumbRoutes` config
- Renders the last item as plain text (current page), others as links
- Always includes "Home" as the root link

## Route Configuration

Routes are configured internally. To add new routes, update the `breadcrumbRoutes` array in `Breadcrumb.jsx`:

```jsx
const breadcrumbRoutes = [
  { path: "/", label: "Home" },
  { path: "/app-shell", label: "Application" },
  // Add new routes here
];
```

## Examples

```jsx
<Breadcrumb />
```

### In a page header
```jsx
<UDS.PageHeader>
  <Breadcrumb />
  <h1>Page Title</h1>
</UDS.PageHeader>
```

## Note
- Must be used within a React Router `<Router>` context
- Auto-generates breadcrumb trail — no manual configuration needed per page
