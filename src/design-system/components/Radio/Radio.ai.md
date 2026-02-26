# Radio

Radio button group for single-value selection from a set of options.

## When to Use
- Choosing one option from a small set (2–6 options)
- Form fields where only one selection is valid
- Settings/preferences with mutually exclusive options

## Props

### RadioGroup (container)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Group name (shared across radios) |
| `value` | `string` | — | Currently selected value |
| `onChange` | `function` | — | Callback `(value: string) => void` |
| `children` | `ReactNode` | — | `RadioOption` components |
| `className` | `string` | `""` | Additional CSS classes |
| `layout` | `string` | `"vertical"` | `"vertical"` or `"horizontal"` |

### RadioOption

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Option value |
| `label` | `string` | — | Label text |
| `disabled` | `boolean` | `false` | Disabled state |

## Examples

```jsx
<RadioGroup name="plan" value={plan} onChange={setPlan}>
  <RadioOption value="free" label="Free Plan" />
  <RadioOption value="pro" label="Pro Plan" />
  <RadioOption value="enterprise" label="Enterprise Plan" />
</RadioGroup>
```

### Horizontal layout
```jsx
<RadioGroup name="size" value={size} onChange={setSize} layout="horizontal">
  <RadioOption value="sm" label="Small" />
  <RadioOption value="md" label="Medium" />
  <RadioOption value="lg" label="Large" />
</RadioGroup>
```

## Import
```jsx
import { RadioGroup, RadioOption } from "@mich8060/chg-design-system";
```
