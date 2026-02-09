# Key

Keyboard key visual component for displaying keyboard shortcuts.

## When to Use
- Keyboard shortcut documentation
- Hotkey displays in tooltips or menus
- Command palette key combinations

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | — | Key label (e.g., "⌘", "Ctrl", "K", "Enter") |
| `size` | `string` | `"default"` | `"small"`, `"default"` |
| `className` | `string` | `""` | Additional CSS classes |

## Examples

```jsx
<Key>⌘</Key><Key>K</Key>          {/* ⌘K shortcut */}
<Key>Ctrl</Key><Key>S</Key>        {/* Ctrl+S shortcut */}
<Key>Enter</Key>                    {/* Enter key */}
```

### In a tooltip
```jsx
<Tooltip content={<>Save changes <Key size="small">⌘</Key><Key size="small">S</Key></>}>
  <Button label="Save" />
</Tooltip>
```
