# Button

Primary action trigger component supporting multiple visual styles, sizes, and icon layouts.

## When to Use
- Triggering actions (submit, save, delete, navigate)
- Primary CTA buttons, secondary actions, destructive confirmations
- Icon-only actions in toolbars or compact UIs

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `label` | `string` | — | Any text | Button text label |
| `appearance` | `string` | `"primary"` | `"primary"`, `"soft"`, `"outline"`, `"text"`, `"ghost"`, `"disabled"`, `"destructive"` | Visual style variant |
| `layout` | `string` | `"label-only"` | `"label-only"`, `"icon-left"`, `"icon-right"`, `"icon-only"`, `"only"` | Content arrangement |
| `size` | `string` | `"default"` | `"large"`, `"default"`, `"small"`, `"xsmall"` | Button size |
| `icon` | `string` or `ReactNode` | — | Phosphor icon name (e.g., `"ArrowRight"`, `"Plus"`, `"Trash"`) or JSX | Icon to display |
| `iconSize` | `number` | — | Any number | Override icon size in px |
| `className` | `string` | `""` | Any CSS class | Additional CSS classes |
| `onClick` | `function` | — | — | Click handler |
| `disabled` | `boolean` | `false` | — | Disables the button |
| `aria-label` | `string` | — | — | Accessible label (auto-generated for icon-only) |

## Examples

### Basic buttons
```jsx
<Button label="Save" />
<Button label="Cancel" appearance="outline" />
<Button label="Delete" appearance="destructive" />
```

### With icons
```jsx
<Button label="Add Item" icon="Plus" layout="icon-left" />
<Button label="Next" icon="ArrowRight" layout="icon-right" />
<Button icon="Trash" layout="icon-only" aria-label="Delete item" />
```

### Size variants
```jsx
<Button label="Large" size="large" />
<Button label="Default" />
<Button label="Small" size="small" />
<Button label="XSmall" size="xsmall" />
```

### All appearances
```jsx
<Button label="Primary" appearance="primary" />
<Button label="Soft" appearance="soft" />
<Button label="Outline" appearance="outline" />
<Button label="Text" appearance="text" />
<Button label="Ghost" appearance="ghost" />
<Button label="Destructive" appearance="destructive" />
<Button label="Disabled" appearance="disabled" />
```

### Action bar pattern
```jsx
<Flex gap="8" justifyContent="flex-end">
  <Button label="Cancel" appearance="outline" onClick={onCancel} />
  <Button label="Save Changes" icon="FloppyDisk" layout="icon-left" onClick={onSave} />
</Flex>
```

### Toolbar with icon-only buttons
```jsx
<Flex gap="4">
  <Button icon="TextB" layout="icon-only" appearance="ghost" aria-label="Bold" />
  <Button icon="TextItalic" layout="icon-only" appearance="ghost" aria-label="Italic" />
  <Button icon="TextUnderline" layout="icon-only" appearance="ghost" aria-label="Underline" />
</Flex>
```

## Composition

- **In forms**: Place at the bottom of form sections, typically paired with a cancel button
- **In `Card`**: Use in card footer for card-level actions
- **In `UDS.PageHeader`**: Pass as `actions` prop for page-level actions
- **In `Table` rows**: Use `size="xsmall"` or `"small"` with `appearance="ghost"` for inline row actions
- **In `UDS.Modal` footer**: Primary + secondary action buttons

## Do's and Don'ts

✅ **Do**: Use `appearance="destructive"` for delete/remove actions
✅ **Do**: Always provide `aria-label` for icon-only buttons
✅ **Do**: Use `icon` prop with a Phosphor icon name string (e.g., `icon="Plus"`)
✅ **Do**: Use `layout="icon-left"` for action buttons with context (e.g., "Add User")

❌ **Don't**: Use `appearance="disabled"` for conditional disabling — use the `disabled` prop instead
❌ **Don't**: Use `appearance="primary"` for every button — reserve for the main page action
❌ **Don't**: Nest interactive elements inside Button

## Accessibility
- Icon-only buttons automatically get `aria-label` from the `label` prop or icon name
- Disabled buttons use native `disabled` attribute
- Renders as `<button type="button">` by default
