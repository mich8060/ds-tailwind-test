# Dropdown

Custom select/dropdown input built on top of `ActionMenu`. Provides keyboard navigation, click-outside-to-close, and accessible markup out of the box.

## Architecture

Dropdown composes `ActionMenu` internally:
- The select-style trigger button (value display + caret) is passed as ActionMenu's `trigger`
- Options are mapped to ActionMenu `items` with `active` set on the selected item
- ActionMenu handles the popup, click-outside, keyboard nav, and focus management
- Dropdown only owns: option normalization, selected value tracking, trigger styling, label, size/state variants

This means ActionMenu and Dropdown share a single popup engine, but each is fully encapsulated and independently usable.

## When to Use
- Selecting a single value from a list of options
- Replacing native `<select>` with a styled, accessible alternative
- Form fields that need consistent design system styling

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `options` | `array` | `[]` | `[{ value, label }]` or `["string"]` | Options list |
| `value` | `string\|number` | — | — | Currently selected value |
| `onChange` | `function` | — | `(value) => void` | Selection change callback |
| `placeholder` | `string` | `"Select an option"` | — | Placeholder when nothing selected |
| `size` | `string` | `"default"` | `"compact"`, `"default"` | Size variant |
| `state` | `string` | `"default"` | `"default"`, `"focused"`, `"error"`, `"disabled"` | Visual state |
| `disabled` | `boolean` | `false` | — | Disabled state (overrides `state`) |
| `id` | `string` | auto-generated | — | Unique identifier |
| `label` | `string` | — | — | Label text above the dropdown |
| `className` | `string` | `""` | — | Additional CSS classes |

## Examples

### Basic dropdown
```jsx
const [value, setValue] = useState("");

<Dropdown
  options={["Option A", "Option B", "Option C"]}
  value={value}
  onChange={setValue}
  placeholder="Choose one..."
/>
```

### With label and object options
```jsx
<Dropdown
  label="Country"
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
  ]}
  value={country}
  onChange={setCountry}
/>
```

### Inside a Field (with validation)
```jsx
<Field label="Department" required helperMessage="Select your department">
  <Dropdown
    options={departments}
    value={dept}
    onChange={setDept}
    state={errors.dept ? "error" : "default"}
  />
</Field>
```

### Compact size
```jsx
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  size="compact"
  placeholder="Compact dropdown"
/>
```

### Disabled state
```jsx
<Dropdown
  label="Locked Selection"
  options={options}
  value="locked-value"
  disabled
/>
```

## Keyboard Navigation

- **Enter/Space**: Open dropdown
- **Arrow Up/Down**: Navigate options
- **Escape**: Close dropdown
- **Click outside**: Close dropdown

## Composition

- Wrap with `<Field>` for labels, required markers, and helper text
- Use inside forms alongside `Input`, `Textarea`, `Checkbox`
- Use `state="error"` with `Field` `helperMessage` for validation feedback

## Do's and Don'ts

✅ **Do**: Always provide a meaningful `placeholder`
✅ **Do**: Use `{ value, label }` objects for options when values differ from display text
✅ **Do**: Wrap with `<Field>` for form contexts
✅ **Do**: Use `state="error"` for validation errors

❌ **Don't**: Use for more than ~20 options — consider a searchable autocomplete instead
❌ **Don't**: Forget to manage `value` and `onChange` — this is a controlled component
❌ **Don't**: Set both `disabled` prop and `state="disabled"` — just use `disabled`
