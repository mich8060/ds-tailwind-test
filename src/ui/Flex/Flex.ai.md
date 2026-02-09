# Flex

Flexbox layout utility component for quick row/column layouts.

## When to Use
- Any layout that needs flexbox (row/column, alignment, spacing)
- Button groups, form rows, card layouts, toolbar arrangements
- Quick spacing between child elements

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `direction` | `string` | `"row"` | `"row"`, `"column"`, `"row-reverse"`, `"column-reverse"` | Flex direction |
| `gap` | `string` | — | UDS gap tokens: `"4"`, `"8"`, `"12"`, `"16"`, `"24"`, `"32"`, `"48"` | Gap between items |
| `alignItems` | `string` | — | `"flex-start"`, `"flex-end"`, `"center"`, `"stretch"`, `"baseline"` | Cross-axis alignment |
| `justifyContent` | `string` | — | `"flex-start"`, `"flex-end"`, `"center"`, `"space-between"`, `"space-around"`, `"space-evenly"` | Main-axis alignment |
| `wrap` | `boolean` | `false` | — | Allow items to wrap |
| `className` | `string` | `""` | — | Additional CSS classes |

## Examples

### Horizontal row with gap
```jsx
<Flex gap="8" alignItems="center">
  <Avatar initials="JD" size="small" />
  <span>John Doe</span>
  <Tag label="Admin" color="blue" />
</Flex>
```

### Button action bar
```jsx
<Flex gap="8" justifyContent="flex-end">
  <Button label="Cancel" appearance="outline" />
  <Button label="Save" />
</Flex>
```

### Vertical form layout
```jsx
<Flex direction="column" gap="16">
  <Field label="Name"><Input placeholder="Name" /></Field>
  <Field label="Email"><Input type="email" placeholder="Email" /></Field>
  <Button label="Submit" />
</Flex>
```

### Wrapping grid
```jsx
<Flex gap="16" wrap>
  {items.map(item => <Card key={item.id} {...item} />)}
</Flex>
```
