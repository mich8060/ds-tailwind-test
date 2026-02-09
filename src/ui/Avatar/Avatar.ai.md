# Avatar

User photo or initials display with optional online status indicator.

## When to Use
- User profile pictures in navigation, lists, comments, or cards
- Contact lists, team member displays, or assigned user indicators

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `src` | `string` | — | Image URL | User photo URL |
| `initials` | `string` | — | e.g., `"JD"`, `"AB"` | Initials to display when no photo |
| `name` | `string` | — | — | Full name (auto-generates initials if `initials` not provided) |
| `status` | `boolean` | `false` | — | Show green online status dot |
| `size` | `string` | `"default"` | `"small"`, `"default"`, `"large"` | Avatar size |
| `alt` | `string` | `""` | — | Alt text for image |
| `className` | `string` | `""` | — | Additional CSS classes |

## Examples

### With photo
```jsx
<Avatar src="/photos/user.jpg" alt="John Doe" status />
```

### With initials
```jsx
<Avatar initials="JD" />
<Avatar name="Jane Smith" /> {/* Auto-generates "JS" */}
```

### Size variants
```jsx
<Avatar initials="SM" size="small" />
<Avatar initials="MD" />
<Avatar initials="LG" size="large" />
```

### In a user list
```jsx
<Flex gap="8" alignItems="center">
  <Avatar src={user.photo} size="small" status={user.online} />
  <span>{user.name}</span>
  <Tag label={user.role} color="blue" />
</Flex>
```

## Composition
- Inside `Table` custom render functions for user columns
- In `UDS.Sidebar` for user account section
- Combined with `Status` or `Badge` for richer user indicators
- Inside `Card` for profile cards
