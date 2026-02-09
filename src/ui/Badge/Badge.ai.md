# Badge

Numeric badge indicator for counts, notifications, and status numbers.

## When to Use
- Notification counts on navigation items or icons
- Unread message counts, item quantities
- Any numeric indicator that overlays or accompanies another element

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `count` | `number\|string` | — | — | Number to display (renders nothing if 0 or falsy) |
| `variant` | `string` | `"red"` | `"red"`, `"orange"`, `"yellow"`, `"green"`, `"dark-green"`, `"blue"`, `"dark-blue"`, `"purple"`, `"pink"`, `"gray"`, `"outline"` | Color variant |
| `maxCount` | `number` | `99` | — | Max before showing "99+" |
| `className` | `string` | `""` | — | Additional CSS classes |

## Examples

```jsx
<Badge count={5} />
<Badge count={150} maxCount={99} /> {/* Shows "99+" */}
<Badge count={3} variant="blue" />
<Badge count={12} variant="green" />
```

### With navigation item
```jsx
<Flex gap="8" alignItems="center">
  <Icon name="Bell" size={20} />
  <Badge count={notifications.length} />
</Flex>
```

## Note
- Returns `null` when `count` is 0 or falsy — safe to always render
